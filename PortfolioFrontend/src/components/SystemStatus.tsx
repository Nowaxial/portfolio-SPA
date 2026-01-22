import React, { useState, useEffect } from 'react';
import { Text, Box, Group, Progress, Stack } from '@mantine/core';

export function SystemStatus() {
    // Keep internal values for animation, but display as static-like "metrics"
    const [stats, setStats] = useState({ cpu: 12, mem: 45 });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats({
                cpu: Math.floor(Math.random() * 30) + 10,
                mem: Math.floor(Math.random() * 10) + 40,
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            style={{
                padding: '24px',
                border: '1px solid var(--mantine-color-default-border)',
                borderRadius: '12px',
                backgroundColor: 'var(--mantine-color-default)',
            }}
        >
            <Text size="xs" fw={700} tt="uppercase" c="dimmed" mb="lg" style={{ letterSpacing: '1px' }}>
                Server Status
            </Text>

            <Stack gap="md">
                <Box>
                    <Group justify="space-between" mb={4}>
                        <Text size="xs" style={{ fontFamily: 'JetBrains Mono' }}>CPU_LOAD</Text>
                        <Text size="xs" style={{ fontFamily: 'JetBrains Mono' }}>{stats.cpu}%</Text>
                    </Group>
                    <Progress value={stats.cpu} color="dark.3" size="sm" radius="xs" />
                </Box>

                <Box>
                    <Group justify="space-between" mb={4}>
                        <Text size="xs" style={{ fontFamily: 'JetBrains Mono' }}>MEMORY</Text>
                        <Text size="xs" style={{ fontFamily: 'JetBrains Mono' }}>{stats.mem}%</Text>
                    </Group>
                    <Progress value={stats.mem} color="dark.3" size="sm" radius="xs" />
                </Box>

                <Group justify="space-between" mt="sm" style={{ borderTop: '1px solid var(--mantine-color-default-border)', paddingTop: '12px' }}>
                    <Text size="xs" c="dimmed">Region</Text>
                    <Text size="xs" fw={500}>eu-north-1</Text>
                </Group>
            </Stack>
        </Box>
    );
}
