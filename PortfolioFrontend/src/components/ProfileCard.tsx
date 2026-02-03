import React from 'react';
import { Box, Avatar, Text, Stack, Title, Group, Paper, Divider, Button, ActionIcon, Tooltip } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconDownload } from '@tabler/icons-react';

export function ProfileCard() {
    return (
        <Paper
            p="xl"
            radius="xs"
            mb={40}
            withBorder
            styles={(theme) => ({
                root: {
                    backgroundColor: 'var(--mantine-color-default)',
                    borderColor: 'var(--mantine-color-default-border)'
                }
            })}
        >
            <Stack gap="lg">
                <Avatar
                    size={200}
                    radius="xs"
                    mx="auto"
                    src="./data/Maria_Toledo_LinkedIn.jfif" // Replace with your image path (e.g., "/profile.jpg")
                    alt="Maria Toledo"
                    style={{ border: '1px solid var(--mantine-color-brand-filled)' }}
                >
                    MT
                </Avatar>

                <Box ta="center">
                    <Title order={3} fz={24} fw={500}>
                        Maria Toledo
                    </Title>
                    <Text size="xs" tt="uppercase" c="dimmed" fw={700} mt={4} lts={1}>
                        Software Architect
                    </Text>
                </Box>

                <Divider color="var(--mantine-color-default-border)" />

                <Box>
                    <Text size="sm" c="dimmed" lh={1.6} fs="italic">
                        "I believe in building systems that are not just functional, but architecturally sound and future-proof. My focus is on precision, performance, and the seamless intersection of design and data."
                    </Text>
                </Box>

                <Stack gap="md">
                    <Button
                        component="a"
                        href="/Maria_Toledo_CV.pdf"
                        target="_blank"
                        leftSection={<IconDownload size={18} />}
                        variant="filled"
                        color="var(--mantine-color-brand-filled)"
                        radius="xs"
                        fullWidth
                    >
                        Download CV
                    </Button>

                    <Group justify="center" gap="md">
                        <Tooltip label="LinkedIn Profile" withArrow>
                            <ActionIcon
                                component="a"
                                href="https://www.linkedin.com/in/mariatoledosilva/"
                                target="_blank"
                                variant="outline"
                                color="gray"
                                size="lg"
                                radius="xs"
                            >
                                <IconBrandLinkedin size={20} />
                            </ActionIcon>
                        </Tooltip>

                        <Tooltip label="GitHub Profile" withArrow>
                            <ActionIcon
                                component="a"
                                href="https://github.com/Nowaxial"
                                target="_blank"
                                variant="outline"
                                color="gray"
                                size="lg"
                                radius="xs"
                            >
                                <IconBrandGithub size={20} />
                            </ActionIcon>
                        </Tooltip>

                        <Tooltip label="Email Me" withArrow>
                            <ActionIcon
                                component="a"
                                href="mailto:maria.toledo.silva@outlook.com"
                                variant="outline"
                                color="gray"
                                size="lg"
                                radius="xs"
                            >
                                <IconMail size={20} />
                            </ActionIcon>
                        </Tooltip>
                    </Group>
                </Stack>

                <Group gap="xs" mt={5}>
                    <Box w={8} h={8} style={{ borderRadius: '50%', background: 'var(--mantine-color-brand-filled)' }} />
                    <Text size="xs" fw={700} tt="uppercase" lts={0.5}>
                        Ready for collaboration
                    </Text>
                </Group>
            </Stack>
        </Paper>
    );
}

