import React, { useState, useEffect } from 'react';
import { Text, Box, Group, Stack, rem, UnstyledButton } from '@mantine/core';
import { IconBrandGithub, IconTerminal2, IconPointFilled, IconClock } from '@tabler/icons-react';

// --- Snippets for Typewriter ---
const SNIPPETS = [
    {
        name: 'ProjectsController.cs',
        lang: 'csharp',
        code: `[HttpGet]
public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
{
    return await _context.Projects.ToListAsync();
}`
    },
    {
        name: 'api.ts',
        lang: 'typescript',
        code: `export async function fetchProjects(): Promise<Project[]> {
    const response = await fetch(\`\${API_BASE_URL}/projects\`);
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
}`
    }
];

// --- GithubPulse Component ---
function GithubPulse() {
    const [commit, setCommit] = useState<{ message: string; repo: string; time: string } | null>(null);
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

                    // If message is missing in payload (common in some events), fetch it from commits
                    if (!commitMsg) {
                        try {
                            const commitRes = await fetch(`https://api.github.com/repos/${repoFullName}/commits/${pushEvent.payload.head}`);
                            const commitData = await commitRes.json();
                            commitMsg = commitData.commit.message;
                        } catch (e) {
                            commitMsg = 'Updated source code';
                        }
                    }

                    const data = {
                        message: commitMsg || 'Code update',
                        repo: repoFullName.split('/')[1],
                        time: new Date(pushEvent.created_at).toLocaleDateString()
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

            <Text size="sm" fw={600} mb={4} lineClamp={2} style={{ color: 'var(--mantine-color-text)' }}>
                {commit?.message || 'Deploying new features'}
            </Text>

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

// --- CodeTypewriter Component ---
function CodeTypewriter() {
    const [snippetIdx, setSnippetIdx] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(50);

    const currentSnippet = SNIPPETS[snippetIdx];

    useEffect(() => {
        const timer = setTimeout(() => {
            const fullText = currentSnippet.code;

            if (!isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length + 1));
                setSpeed(50);

                if (displayText === fullText) {
                    setIsDeleting(true);
                    setSpeed(3000); // Wait at end
                }
            } else {
                setDisplayText(fullText.substring(0, displayText.length - 1));
                setSpeed(30);

                if (displayText === '') {
                    setIsDeleting(false);
                    setSnippetIdx((prev) => (prev + 1) % SNIPPETS.length);
                    setSpeed(500);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, snippetIdx, speed]);

    // Simple syntax highlighting via regex
    const highlight = (code: string) => {
        return code
            .replace(/\b(public|private|async|await|Task|ActionResult|export|function|return|if|throw|new|const|let|var|await)\b/g, '<span class="keyword">$1</span>')
            .replace(/\b(await|fetch|JSON|Error|Console|ToListAsync|FindAsync)\b/g, '<span class="method">$1</span>')
            .replace(/(".+?"|'.+?'|`.+?`)/g, '<span class="string">$1</span>')
            .replace(/\/\/.*/g, '<span class="comment">$&</span>');
    };

    return (
        <Box
            style={{
                padding: '1px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
        >
            <Box
                style={{
                    padding: '16px',
                    borderRadius: '11px',
                    backgroundColor: 'var(--card-bg)',
                    backdropFilter: 'blur(10px)',
                    fontFamily: 'JetBrains Mono, monospace',
                }}
            >
                <Group justify="space-between" mb="md" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
                    <Group gap={8}>
                        <IconTerminal2 size={16} color="var(--mantine-color-brand-4)" />
                        <Text size="xs" fw={700} c="dimmed" tt="uppercase" lts={1}>
                            {currentSnippet.name}
                        </Text>
                    </Group>
                    <Group gap={6}>
                        <Box style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                        <Box style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                        <Box style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                    </Group>
                </Group>

                <Box style={{ minHeight: rem(120), position: 'relative' }}>
                    <pre
                        style={{
                            margin: 0,
                            fontSize: rem(13),
                            lineHeight: 1.6,
                            whiteSpace: 'pre-wrap',
                            color: 'rgba(255,255,255,0.7)',
                        }}
                        dangerouslySetInnerHTML={{ __html: highlight(displayText) }}
                    />
                    <Box
                        component="span"
                        style={{
                            display: 'inline-block',
                            width: '2px',
                            height: '1.2em',
                            backgroundColor: 'var(--mantine-color-brand-4)',
                            marginLeft: '2px',
                            verticalAlign: 'middle',
                            animation: 'blink 1s step-end infinite'
                        }}
                    />
                </Box>
            </Box>

            <style>{`
                @keyframes blink {
                    from, to { opacity: 1 }
                    50% { opacity: 0 }
                }
                .keyword { color: var(--mantine-color-brand-4); font-weight: 700; }
                .method { color: #82aaff; }
                .string { color: #c3e88d; }
                .comment { color: #546e7a; font-style: italic; }
            `}</style>
        </Box>
    );
}

export function SystemStatus() {
    return (
        <Stack gap="xl" mt={40}>
            <GithubPulse />
            <CodeTypewriter />

            <Box>
                <Text size="xs" fw={700} tt="uppercase" c="dimmed" mb="xs" style={{ letterSpacing: '1px' }}>
                    Architecture Note
                </Text>
                <Text size="sm" c="dimmed" lh={1.6}>
                    Decoupled SSR architecture using <Text span fw={700} c="var(--mantine-color-text)">Astro</Text>, <Text span fw={700} c="var(--mantine-color-text)">React</Text>, and <Text span fw={700} c="var(--mantine-color-text)">.NET 10</Text>.
                    Optimized for performance and type-safe data flow.
                </Text>
            </Box>
        </Stack>
    );
}
