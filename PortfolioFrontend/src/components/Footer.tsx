import React from 'react';
import { Container, Group, Text, Divider, Box, ActionIcon, Stack } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconArrowUp } from '@tabler/icons-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box
            component="footer"
            style={{
                borderTop: '1px solid var(--mantine-color-default-border)',
                backgroundColor: 'var(--mantine-color-default)',
                padding: '60px 0 40px 0',
                marginTop: '100px'
            }}
        >
            <Container size="lg">
                <Grid gutter={40}>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Stack gap="xs">
                            <Text
                                style={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontSize: '20px',
                                    fontWeight: 500,
                                    fontStyle: 'italic'
                                }}
                            >
                                Maria Toledo
                            </Text>
                            <Text size="sm" c="dimmed" style={{ fontFamily: 'Space Grotesk', maxWidth: '300px' }}>
                                Software Architect specializing in high-performance .NET environments and scalable distributed systems.
                            </Text>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 3 }}>
                        <Stack gap="xs">
                            <Text size="xs" fw={700} tt="uppercase" style={{ letterSpacing: '1px' }}>Connect</Text>
                            <Group gap="sm">
                                <ActionIcon component="a" href="https://www.linkedin.com/in/mariatoledosilva/" target="_blank" variant="subtle" color="gray">
                                    <IconBrandLinkedin size={18} />
                                </ActionIcon>
                                <ActionIcon component="a" href="https://github.com/Nowaxial" target="_blank" variant="subtle" color="gray">
                                    <IconBrandGithub size={18} />
                                </ActionIcon>
                                <ActionIcon component="a" href="mailto:maria.toledo.silva@outlook.com" variant="subtle" color="gray">
                                    <IconMail size={18} />
                                </ActionIcon>
                            </Group>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 3 }}>
                        <Stack gap="xs" align="flex-end">
                            <ActionIcon
                                variant="outline"
                                color="gray"
                                radius="xs"
                                onClick={scrollToTop}
                                aria-label="Scroll to top"
                            >
                                <IconArrowUp size={18} />
                            </ActionIcon>
                            <Text size="xs" c="dimmed" style={{ fontFamily: 'JetBrains Mono' }}>
                                ESC to top
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>

                <Divider my={40} color="var(--mantine-color-default-border)" />

                <Group justify="space-between">
                    <Text size="xs" c="dimmed" style={{ fontFamily: 'Space Grotesk' }}>
                        © {currentYear} Maria Toledo. All rights reserved.
                    </Text>
                    <Text size="xs" c="dimmed" style={{ fontFamily: 'JetBrains Mono' }}>
                        Built with Astro + .NET 10
                    </Text>
                </Group>
            </Container>
        </Box>
    );
}

import { Grid } from '@mantine/core';
