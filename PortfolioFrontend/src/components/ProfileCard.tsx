import React from 'react';
import { Box, Avatar, Text, Stack, Title, Group, Paper, Divider, Button, ActionIcon, Tooltip } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconDownload } from '@tabler/icons-react';
import { useTranslation } from './TranslationContext';

export function ProfileCard() {
    const { t } = useTranslation();
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
                        {t('Profile.Role')}
                    </Text>
                </Box>

                <Divider color="var(--mantine-color-default-border)" />

                <Box>
                    <Text size="sm" c="dimmed" lh={1.6} fs="italic">
                        {t('Profile.Quote')}
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
                        {t('Profile.DownloadCV')}
                    </Button>

                    <Group justify="center" gap="md">
                        <Tooltip label={t('Profile.LinkedInTooltip')} withArrow>
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

                        <Tooltip label={t('Profile.GitHubTooltip')} withArrow>
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

                        <Tooltip label={t('Profile.EmailTooltip')} withArrow>
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
                        {t('Profile.Status')}
                    </Text>
                </Group>
            </Stack>
        </Paper>
    );
}

