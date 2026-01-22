import React from 'react';
import { Container, Grid, Title, Box, Badge, Text, Group, Divider, Stack } from '@mantine/core';
import { TerminalHero } from './Hero';
import { SystemStatus } from './SystemStatus';
import { ProjectCard } from './ProjectCard';
import { RecommendationCard } from './RecommendationCard';
import { ProfileCard } from './ProfileCard';
import type { Project, Skill, Recommendation } from '../types';

interface PortfolioContentProps {
    projects: Project[];
    skills: Skill[];
    recommendations: Recommendation[];
}

export function PortfolioContent({ projects, skills, recommendations }: PortfolioContentProps) {
    return (
        <>
            <TerminalHero />

            <Container size="lg" pb={100}>
                <Grid gutter={50}>
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <Box mb={80}>
                            <Title order={2} mb={40} style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: '32px' }}>
                                Selected Works
                            </Title>
                            <Grid gutter="xl">
                                {projects.map(project => (
                                    <Grid.Col key={project.id} span={{ base: 12 }}>
                                        <ProjectCard project={project} />
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </Box>

                        <Box mb={80}>
                            <Group align="center" mb={30} gap={15}>
                                <Title order={2} style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: '32px' }}>
                                    Technical Stack
                                </Title>
                                <Badge variant="dot" color="green" size="lg" radius="xs">System Active</Badge>
                            </Group>

                            <Box style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                                {skills.map(skill => (
                                    <Text
                                        key={skill.id}
                                        size="lg"
                                        style={{
                                            fontFamily: 'Space Grotesk, sans-serif',
                                            fontWeight: 500, // Medium for readability
                                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                                            padding: '4px 0',
                                            color: '#E0E0E0'
                                        }}
                                    >
                                        {skill.name} <span style={{ color: '#5c7cff', margin: '0 8px' }}>/</span>
                                    </Text>
                                ))}
                            </Box>
                        </Box>

                        <Box>
                            <Group align="center" mb={40} gap={15}>
                                <Title order={2} style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500, fontSize: '32px' }}>
                                    Recommendations
                                </Title>
                                <Badge variant="outline" color="indigo" size="sm" radius="xs" tt="uppercase">Endorsements</Badge>
                            </Group>
                            <Stack gap="xl">
                                {recommendations.map(rec => (
                                    <RecommendationCard key={rec.id} recommendation={rec} />
                                ))}
                            </Stack>
                        </Box>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Box style={{ position: 'sticky', top: '40px' }}>
                            <ProfileCard />
                            <SystemStatus />

                            <Box mt={40}>
                                <Text size="xs" fw={700} tt="uppercase" c="dimmed" mb="md" style={{ letterSpacing: '1px' }}>
                                    Architecture Note
                                </Text>
                                <Text size="sm" c="dimmed" style={{ lineHeight: 1.6, fontFamily: 'Space Grotesk' }}>
                                    This portfolio operates on a decoupled architecture.
                                    The backend is a .NET 10 Web API utilizing EF Core and SQLite.
                                    The frontend is built with Astro (SSR) and React, styled via Mantine.
                                </Text>
                            </Box>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container >
        </>
    );
}
