import React from 'react';
import { Box, Text, Avatar, Group, Stack, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
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
                style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative Quote Mark */}
                <Text
                    style={{
                        position: 'absolute',
                        top: -20,
                        left: 10,
                        fontSize: '120px',
                        fontFamily: 'Playfair Display, serif',
                        color: 'rgba(76, 110, 245, 0.1)',
                        lineHeight: 1,
                        userSelect: 'none',
                        zIndex: 0
                    }}
                >
                    &ldquo;
                </Text>

                <Stack gap="xl" style={{ position: 'relative', zIndex: 1 }}>
                    <Text
                        style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            fontStyle: 'italic',
                            color: '#F8F9FA'
                        }}
                    >
                        {recommendation.text}
                    </Text>

                    <Group gap="md">
                        <Avatar
                            src={recommendation.profileImage}
                            size="lg"
                            radius="xl"
                            style={{ border: '2px solid rgba(76, 110, 245, 0.4)' }}
                        />
                        <Stack gap={2}>
                            <Text
                                fw={500}
                                style={{
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    color: '#FFFFFF'
                                }}
                            >
                                {recommendation.name}
                            </Text>
                            <Text
                                size="xs"
                                c="dimmed"
                                tt="uppercase"
                                style={{
                                    fontFamily: 'Space Grotesk, sans-serif',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                {recommendation.position} at {recommendation.company}
                            </Text>
                        </Stack>
                    </Group>
                </Stack>
            </Paper>
        </motion.div>
    );
}
