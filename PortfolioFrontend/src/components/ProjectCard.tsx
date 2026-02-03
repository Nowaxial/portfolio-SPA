import React from 'react';
import { motion } from 'framer-motion';
import { Card, Text, Badge, Group, ActionIcon, Box, Title } from '@mantine/core';
import { IconBrandGithub, IconArrowUpRight } from '@tabler/icons-react';
import type { Project } from '../types';

export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <Card
                padding="xl"
                radius="xs"
                withBorder
                style={{
                    backgroundColor: 'var(--mantine-color-default)',
                    borderColor: 'var(--mantine-color-default-border)',
                    transition: 'all 0.3s ease',
                }}
                className="hover:border-primary"
            >
                <Group justify="space-between" align="flex-start" mb="md">
                    <Title order={3} style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontStyle: 'italic' }}>
                        {project.title}
                    </Title>
                    <Group gap={8}>
                        {project.githubUrl && (
                            <ActionIcon
                                variant="transparent"
                                color="gray"
                                component="a"
                                href={project.githubUrl}
                                target="_blank"
                                aria-label={`View ${project.title} on GitHub`}
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
                                aria-label={`Visit ${project.title} live site`}
                            >
                                <IconArrowUpRight size={18} />
                            </ActionIcon>
                        )}
                    </Group>
                </Group>

                <Text size="sm" c="dimmed" mb="xl" style={{ lineHeight: 1.7, minHeight: 60, fontFamily: 'Space Grotesk' }}>
                    {project.description}
                </Text>

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
            </Card>
        </motion.div>
    );
}
