import React from 'react';
import { motion } from 'framer-motion';
import { Title, Text, Container, Box, Group, Badge, Stack, Button } from '@mantine/core';
import { useTranslation } from './TranslationContext';

export function TerminalHero() {
    const { t } = useTranslation();
    return (
        <Container size="lg" py={{ base: 60, md: 100 }} id="hero">
            <Stack gap={30}>
                {/* Status Bar / Meta Info */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Group justify="space-between" align="center" style={{ borderBottom: '1px solid var(--mantine-color-default-border)', paddingBottom: '20px' }}>
                        <Group gap={10}>
                            <Box w={8} h={8} style={{ borderRadius: '50%', background: 'var(--mantine-color-brand-filled)' }} />
                            <Text fz="xs" fw={700} tt="uppercase" style={{ letterSpacing: '1px' }}>{t('Hero.SystemOnline')}</Text>
                        </Group>
                        <Group gap={20} visibleFrom="sm">
                            <Text fz="xs" c="dimmed" tt="uppercase">{t('Hero.BasedIn')}</Text>
                            <Text fz="xs" c="dimmed" tt="uppercase">UTC+1</Text>
                        </Group>
                    </Group>
                </motion.div>

                {/* Main Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Title
                        order={1}
                        style={{
                            fontSize: 'min(11vw, 110px)',
                            lineHeight: 0.9,
                            fontWeight: 400,
                            fontFamily: 'Playfair Display, serif',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {t('Hero.Title')}
                    </Title>
                </motion.div>

                {/* Subtitle & Role */}
                <Stack gap={40} mt={20}>
                    <Group align="flex-start" justify="space-between">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Text
                                size="xl"
                                maw={500}
                                style={{
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    lineHeight: 1.4,
                                    fontWeight: 300
                                }}
                            >
                                {t('Hero.Subtitle')}
                            </Text>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Stack align="flex-end" gap={5} visibleFrom="sm">
                                <Badge variant="outline" color="gray" size="lg" radius="sm" tt="lowercase" style={{ fontFamily: 'JetBrains Mono' }}>.net core</Badge>
                                <Badge variant="outline" color="gray" size="lg" radius="sm" tt="lowercase" style={{ fontFamily: 'JetBrains Mono' }}>azure</Badge>
                                <Badge variant="outline" color="gray" size="lg" radius="sm" tt="lowercase" style={{ fontFamily: 'JetBrains Mono' }}>architecture</Badge>
                            </Stack>
                        </motion.div>
                    </Group>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Group gap="md">
                            <Button
                                component="a"
                                href="#works"
                                size="lg"
                                radius="xs"
                                variant="filled"
                                color="var(--mantine-color-brand-filled)"
                                style={{ fontFamily: 'Space Grotesk' }}
                            >
                                {t('Hero.SelectedWorks')}
                            </Button>
                            <Button
                                component="a"
                                href="mailto:maria.toledo.silva@outlook.com"
                                size="lg"
                                radius="xs"
                                variant="outline"
                                color="gray"
                                style={{ fontFamily: 'Space Grotesk' }}
                            >
                                {t('Hero.GetInTouch')}
                            </Button>
                        </Group>
                    </motion.div>
                </Stack>
            </Stack>
        </Container>
    );
}
