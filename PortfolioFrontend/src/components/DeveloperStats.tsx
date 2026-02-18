import { useState, useEffect } from 'react';
import { Box, Text, Group, Stack, ActionIcon, Loader } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';

interface Skill { id: number; name: string; category: string; iconKey: string; }
interface Certificate { id: number; name: string; }
interface Experience { id: number; startDate: string; endDate?: string; isCurrent: boolean; }
interface GitHubUser { public_repos: number; }
interface StatsData { skillsByCategory: Record<string, number>; certificates: number; yearsExperience: number; githubRepos: number; }

const CACHE_KEY = 'dev_stats_cache';
const CACHE_DURATION = 5 * 60 * 1000;

export default function DeveloperStats() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  const fetchAllStats = async (forceRefresh = false) => {
    setLoading(true);
    if (!forceRefresh) {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { data, expiry } = JSON.parse(cached);
          if (Date.now() < expiry) {
            setStats(data);
            setLoading(false);
            return;
          }
        } catch { /* ignore */ }
      }
    }

    try {
      const [skillsRes, certsRes, expRes, ghRes] = await Promise.all([
        fetch('/api/skills').catch(() => null),
        fetch('/api/certificates').catch(() => null),
        fetch('/api/experience').catch(() => null),
        fetch('https://api.github.com/users/Nowaxial').catch(() => null)
      ]);

      const skillsByCategory: Record<string, number> = {};
      if (skillsRes?.ok) {
        const skills: Skill[] = await skillsRes.json();
        skills.forEach(s => {
          const cat = s.category.toUpperCase();
          skillsByCategory[cat] = (skillsByCategory[cat] || 0) + 1;
        });
      }

      const certs = certsRes?.ok ? (await certsRes.json())?.length ?? 0 : 0;

      let yearsExperience = 0;
      if (expRes?.ok) {
        const exps: Experience[] = await expRes.json();
        if (exps.length > 0) {
          const oldest = exps.reduce((min, e) => new Date(e.startDate) < min ? new Date(e.startDate) : min, new Date());
          const now = new Date();
          yearsExperience = Math.max(1, now.getFullYear() - oldest.getFullYear());
        }
      }

      let githubRepos = 0;
      if (ghRes?.ok) {
        const gh: GitHubUser = await ghRes.json();
        githubRepos = gh.public_repos ?? 0;
      }

      const newStats: StatsData = { skillsByCategory, certificates: certs, yearsExperience, githubRepos };
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data: newStats, expiry: Date.now() + CACHE_DURATION }));
      setStats(newStats);
    } catch (e) {
      console.error('DevStats error', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAllStats(); }, []);

  const handleRefresh = () => { sessionStorage.removeItem(CACHE_KEY); fetchAllStats(true); };

  const emojiFor = (cat: string) => {
    switch (cat) {
      case 'BACKEND': return '🛠';
      case 'FRONTEND': return '⚛';
      case 'CLOUD': return '☁️';
      case 'DEVOPS': return '🔧';
      case 'TESTING': return '🧪';
      case 'METHODOLOGY': return '🧭';
      default: return '📚';
    }
  };

  const categoryOrder = ['BACKEND', 'FRONTEND', 'CLOUD', 'DEVOPS', 'TESTING', 'METHODOLOGY', 'OTHER'];

  return (
    <Box
      style={{
        padding: '20px',
        border: '1px solid var(--mantine-color-default-border)',
        borderRadius: '12px',
        backgroundColor: 'rgba(252, 163, 17, 0.02)',
        borderLeft: '4px solid var(--mantine-color-brand-4)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Group justify="space-between" mb="xs">
        <Group gap={6}>
          <Text size="xs" fw={700} tt="uppercase" lts={1} c="dimmed">
            Developer_Stats
          </Text>
        </Group>
        <Group gap={4}>
          <ActionIcon
            variant="subtle"
            size="xs"
            onClick={handleRefresh}
            loading={loading}
            aria-label="Refresh stats"
          >
            <IconRefresh size={12} color="var(--mantine-color-brand-4)" />
          </ActionIcon>
        </Group>
      </Group>

      {loading && !stats ? (
        <Group justify="center" p="md">
          <Loader size="sm" color="var(--mantine-color-brand-4)" />
        </Group>
      ) : stats && (
        <Stack gap="xs">
          <Text size="xs" fw={700} tt="uppercase" c="dimmed" mb={4} style={{ letterSpacing: '1px' }}>
            Technical Skills
          </Text>
          
          <Group gap="xs" wrap="wrap" mb="sm">
            {categoryOrder
              .filter((cat) => stats.skillsByCategory[cat] > 0)
              .map((category) => (
                <Box
                  key={category}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    backgroundColor: 'var(--mantine-color-default)',
                    border: '1px solid var(--mantine-color-default-border)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                  }}
                >
                  <span style={{ fontSize: 12 }}>{emojiFor(category)}</span>
                  <Text size="xs" fw={500} style={{ color: 'var(--mantine-color-text)' }}>
                    {category}
                  </Text>
                  <Text size="xs" c="dimmed">│</Text>
                  <Text size="xs" fw={700} c="brand.4">
                    {stats.skillsByCategory[category]}
                  </Text>
                </Box>
              ))}
          </Group>

          <Group gap="md" wrap="wrap">
            <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Text size="xs">🏆</Text>
              <Text size="xs" fw={600} c="dimmed">CERTIFICATIONS</Text>
              <Text size="xs" c="dimmed">│</Text>
              <Text size="xs" fw={700} c="brand.4">{stats.certificates}</Text>
            </Box>

            <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Text size="xs">💼</Text>
              <Text size="xs" fw={600} c="dimmed">EXPERIENCE</Text>
              <Text size="xs" c="dimmed">│</Text>
              <Text size="xs" fw={700} c="brand.4">{stats.yearsExperience}+ years</Text>
            </Box>

            <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Text size="xs">📦</Text>
              <Text size="xs" fw={600} c="dimmed">GITHUB REPOS</Text>
              <Text size="xs" c="dimmed">│</Text>
              <Text size="xs" fw={700} c="brand.4">{stats.githubRepos}</Text>
            </Box>
          </Group>

          <Group justify="space-between" align="center" mt="xs">
            <Text size="xs" c="dimmed" style={{ fontStyle: 'italic' }}>
              "Building scalable solutions"
            </Text>
            <Text
              size="xs"
              fw={700}
              c="brand.4"
              style={{
                opacity: cursorVisible ? 1 : 0,
                transition: 'opacity 0.1s'
              }}
            >
              _
            </Text>
          </Group>
        </Stack>
      )}
    </Box>
  );
}
