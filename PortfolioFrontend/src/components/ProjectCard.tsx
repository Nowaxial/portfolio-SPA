import React from 'react';
import { motion } from 'framer-motion';
import { Card, Text, Badge, Group, ActionIcon, Box, Title, Tooltip } from '@mantine/core';
import { IconBrandGithub, IconArrowUpRight, IconPhoto } from '@tabler/icons-react';
import type { Project } from '../types';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useTranslation } from './TranslationContext';

export function ProjectCard({ project }: { project: Project }) {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ position: 'relative' }}
        >
            <Card
                padding="xl"
                radius="xs"
                withBorder
                style={{
                    backgroundColor: 'var(--mantine-color-default)',
                    borderColor: 'var(--mantine-color-default-border)',
                    transition: 'all 0.3s ease',
                    minHeight: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 1
                }}
                className="hover:border-primary"
            >
                <Box>
                    <Group justify="space-between" align="flex-start" mb="md">
                        <Title order={3} style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontStyle: 'italic' }}>
                            {t(`Project.${project.id}.Title`) || project.title}
                        </Title>
                        <Group gap={8}>
                            {project.githubUrl && (
                                <ActionIcon
                                    variant="transparent"
                                    color="gray"
                                    component="a"
                                    href={project.githubUrl}
                                    target="_blank"
                                    aria-label={t('Project.ViewOnGitHub')}
                                >
                                    <IconBrandGithub size={18} />
                                </ActionIcon>
                            )}
                            {project.liveUrl && (
                                <ActionIcon
                                    variant="transparent"
                                    color="white"
                                    component="a"
                                    href={project.liveUrl}
                                    target="_blank"
                                    aria-label={t('Project.VisitLiveSite')}
                                >
                                    <IconArrowUpRight size={18} />
                                </ActionIcon>
                            )}
                        </Group>
                    </Group>

                    <Text size="sm" c="dimmed" mb="xl" style={{ lineHeight: 1.7, fontFamily: 'Space Grotesk' }}>
                        {t(`Project.${project.id}.Description`) || project.description}
                    </Text>
                </Box>

                <Group gap={6}>
                    {project.techStack.split(',').map((tech) => (
                        <Badge
                            key={tech}
                            variant="outline"
                            color="gray"
                            size="sm"
                            radius="sm"
                            style={{
                                textTransform: 'lowercase',
                                fontWeight: 400,
                                fontFamily: 'JetBrains Mono',
                                borderColor: 'var(--mantine-color-default-border)',
                                color: 'var(--mantine-color-text)'
                            }}
                        >
                            {tech.trim()}
                        </Badge>
                    ))}
                </Group>

                {/* Hover Image Preview (Desktop Only) */}
                <AnimatePresence>
                    {isHovered && project.imageUrl && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 10,
                                pointerEvents: 'none', // Allow clicking through to buttons
                                overflow: 'hidden',
                                borderRadius: '4px',
                            }}
                        >
                            <Box
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${project.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backdropFilter: 'blur(4px)',
                                }}
                            >
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Group gap={8} style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '8px 16px', borderRadius: '20px' }}>
                                        <IconPhoto size={16} />
                                        <Text size="xs" fw={700} tt="uppercase" lts={1}>{t('Project.PreviewModel')}</Text>
                                    </Group>
                                </motion.div>
                            </Box>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </motion.div>
    );
}
