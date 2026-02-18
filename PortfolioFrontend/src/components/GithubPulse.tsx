import { useState, useEffect } from 'react';
import { Text, Box, Group, Stack, rem, UnstyledButton } from '@mantine/core';
import { IconBrandGithub, IconTerminal2, IconPointFilled, IconClock } from '@tabler/icons-react';



// --- GithubPulse Component ---
export default function GithubPulse() {
    const [commit, setCommit] = useState<{ message: string; repo: string; time: string; url: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCommit = async () => {
            try {
                // Check cache
                const cached = sessionStorage.getItem('gh_pulse');
                if (cached) {
                    const { data, expiry } = JSON.parse(cached);
                    if (Date.now() < expiry) {
                        setCommit(data);
                        setLoading(false);
                        return;
                    }
                }

                const res = await fetch('https://api.github.com/users/Nowaxial/events/public');
                const events = await res.json();
                const pushEvent = events.find((e: any) => e.type === 'PushEvent');

                if (pushEvent) {
                    let commitMsg = pushEvent.payload.commits?.[0]?.message;
                    const repoFullName = pushEvent.repo.name;
                    const headSha = pushEvent.payload.head;

                    // If message is missing in payload (common in some events), fetch it from commits
                    if (!commitMsg) {
                        try {
                            const commitRes = await fetch(`https://api.github.com/repos/${repoFullName}/commits/${headSha}`);
                            const commitData = await commitRes.json();
                            commitMsg = commitData.commit.message;
                        } catch (e) {
                            commitMsg = 'Updated source code';
                        }
                    }

                    const data = {
                        message: commitMsg || 'Code update',
                        repo: repoFullName.split('/')[1],
                        time: new Date(pushEvent.created_at).toLocaleDateString(),
                        url: `https://github.com/${repoFullName}/commit/${headSha}`
                    };
                    setCommit(data);
                    // Cache for 2 minutes (better for testing/refreshes)
                    sessionStorage.setItem('gh_pulse', JSON.stringify({
                        data,
                        expiry: Date.now() + 2 * 60 * 1000
                    }));
                }
            } catch (err) {
                console.error('GH Fetch Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCommit();
    }, []);

    if (loading) return <Text size="xs" c="dimmed">Syncing with GitHub...</Text>;

    return (
        <Box
            style={{
                padding: '20px',
                border: '1px solid var(--mantine-color-dark-4)',
                borderRadius: '12px',
                backgroundColor: 'rgba(252, 163, 17, 0.02)',
                borderLeft: '4px solid var(--mantine-color-brand-4)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Group justify="space-between" mb="xs">
                <Group gap={6}>
                    <IconBrandGithub size={14} color="var(--mantine-color-brand-4)" />
                    <Text size="xs" fw={700} tt="uppercase" lts={1} c="dimmed">
                        Github_Pulse
                    </Text>
                </Group>
                <Group gap={4}>
                    <IconPointFilled size={10} color="var(--mantine-color-brand-4)" style={{ animation: 'pulse 2s infinite' }} />
                    <Text size="xs" fw={500} c="brand.4">LIVE</Text>
                </Group>
            </Group>

            <UnstyledButton
                component="a"
                href={commit?.url || '#'}
                target="_blank"
                style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    '&:hover': {
                        transform: 'translateX(4px)'
                    },
                    transition: 'transform 0.2s ease'
                }}
            >
                <Text size="sm" fw={600} mb={4} lineClamp={2} style={{ color: 'var(--mantine-color-text)' }}>
                    {commit?.message || 'Deploying new features'}
                </Text>
            </UnstyledButton>

            <Group gap="xs" wrap="nowrap">
                <Text size="xs" c="dimmed" style={{ fontFamily: 'Space Grotesk' }}>
                    {commit?.repo || 'portfolio-SPA'}
                </Text>
                <Text size="xs" c="dark.3">•</Text>
                <Group gap={4}>
                    <IconClock size={10} color="var(--mantine-color-dark-3)" />
                    <Text size="xs" c="dimmed">{commit?.time || 'recently'}</Text>
                </Group>
            </Group>

            <style>{`
                @keyframes pulse {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </Box>
    );
}