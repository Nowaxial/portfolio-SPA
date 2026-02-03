import React from 'react';
import { Box, Text, Avatar, Group, Stack, Paper, ThemeIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconQuote } from '@tabler/icons-react';
import type { Recommendation } from '../types';

interface RecommendationCardProps {
    recommendation: Recommendation;
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Paper
                p="xl"
                radius="xs"
                withBorder
                bg="var(--mantine-color-default)"
                style={{
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Stack gap="xl" style={{ position: 'relative', zIndex: 1 }}>
                    <Text
                        component="blockquote"
                        ff="Playfair Display, serif"
                        size="md"
                        lh={1.6}
                        fs="italic"
                        c="text"
                        style={{ margin: 0, padding: 0 }}
                    >
                        <ThemeIcon
                            size={24}
                            radius=""
                            variant="transparent"
                            c="brand"
                            style={{ display: 'inline-block', verticalAlign: 'text-top', marginRight: 4 }}
                        >
                            <IconQuote size={24} style={{ transform: 'rotate(180deg)' }} />
                        </ThemeIcon>
                        {recommendation.text}
                        <ThemeIcon
                            size={24}
                            radius="xs"
                            variant="transparent"
                            c="brand"
                            style={{ display: 'inline-block', verticalAlign: 'text-top', marginLeft: 4 }}
                        >
                            <IconQuote size={24} />
                        </ThemeIcon>
                    </Text>

                    <Group gap="md">
                        <Avatar
                            src={recommendation.profileImage}
                            size="lg"
                            radius="xl"
                            imageProps={{ loading: 'lazy' }}
                            alt={recommendation.name}
                            component="a"
                            href={recommendation.profileUrl}
                            target="_blank"
                            style={{ border: '2px solid var(--mantine-color-brand-filled)' }}
                        />
                        <Stack gap={2}>
                            <Text fw={500} ff="Space Grotesk, sans-serif" c="text">
                                {recommendation.name}
                            </Text>
                            <Text
                                size="xs"
                                c="dimmed"
                                tt="uppercase"
                                ff="Space Grotesk, sans-serif"
                                lts={0.5}
                            >
                                {recommendation.position} @ {recommendation.company}
                            </Text>
                        </Stack>
                    </Group>
                </Stack>
            </Paper>
        </motion.div>
    );
}
