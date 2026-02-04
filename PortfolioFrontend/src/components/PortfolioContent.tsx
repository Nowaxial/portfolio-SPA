import React, { useState, useEffect, useMemo } from 'react';
import { Container, Grid, Title, Box, Badge, Text, Group, Divider, Stack, Skeleton, Alert, Paper } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import { TerminalHero } from './Hero';
import { SystemStatus } from './SystemStatus';
import { ProjectCard } from './ProjectCard';
import { RecommendationCard } from './RecommendationCard';
import { ProfileCard } from './ProfileCard';
import { TechIcon } from './TechIcon';
import { fetchProjects, fetchSkills, fetchRecommendations } from '../lib/api';
import type { Project, Skill, Recommendation } from '../types';
import { useTranslation } from './TranslationContext';

interface PortfolioContentProps {
    projects: Project[];
    skills: Skill[];
    recommendations: Recommendation[];
}

export function PortfolioContent({ projects: initialProjects, skills: initialSkills, recommendations: initialRecommendations }: PortfolioContentProps) {
    const { t } = useTranslation();
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [skills, setSkills] = useState<Skill[]>(initialSkills);
    const [recommendations, setRecommendations] = useState<Recommendation[]>(initialRecommendations);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const skillsByCategory = useMemo(() => {
        const groups: Record<string, Skill[]> = {};
        skills.forEach(skill => {
            const category = skill.category || 'Other';
            if (!groups[category]) groups[category] = [];
            groups[category].push(skill);
        });
        return groups;
    }, [skills]);

    useEffect(() => {
        // Only fetch if data wasn't provided (empty arrays from build)
        if (projects.length === 0 && skills.length === 0 && recommendations.length === 0) {
            setLoading(true);
            Promise.all([
                fetchProjects(),
                fetchSkills(),
                fetchRecommendations()
            ])
                .then(([projectsData, skillsData, recommendationsData]) => {
                    setProjects(projectsData);
                    setSkills(skillsData);
                    setRecommendations(recommendationsData);
                })
                .catch(error => {
                    console.error('Failed to fetch portfolio data:', error);
                    setError('Unable to load portfolio data. Please try again later.');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);
    return (
        <>
            <Box id="top">
                <TerminalHero />
            </Box>

            {/* Mobile Profile Card - displayed at top on mobile only */}
            <Container size="lg" display={{ base: 'block', md: 'none' }}>
                <Box mt={40} mb={60}>
                    <ProfileCard />
                </Box>
            </Container>

            <Container size="lg" pb={100}>
                {error && (
                    <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red" mb="xl">
                        {error}
                    </Alert>
                )}

                {loading ? (
                    <Grid gutter={50}>
                        <Grid.Col span={{ base: 12, md: 8 }}>
                            <Box mb={80}>
                                <Skeleton height={40} width="50%" mb={30} />
                                <Skeleton height={20} radius="xl" />
                                <Skeleton height={20} mt={10} radius="xl" />
                                <Skeleton height={20} mt={10} width="80%" radius="xl" />
                            </Box>
                            <Box mb={80}>
                                <Skeleton height={40} width="30%" mb={40} />
                                <Skeleton height={300} mb={20} />
                                <Skeleton height={300} />
                            </Box>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4 }} display={{ base: 'none', md: 'block' }}>
                            <Box style={{ position: 'sticky', top: '40px' }}>
                                <Skeleton height={400} />
                                <Skeleton height={150} mt={40} />
                            </Box>
                        </Grid.Col>
                    </Grid>
                ) : (
                    <Grid gutter={50}>
                        <Grid.Col span={{ base: 12, md: 8 }}>
                            <Box mb={80}>
                                <Title order={2} mb={30} fw={500} fz={32}>
                                    {t('Section.ProfessionalSummary')}
                                </Title>
                                <Text size="lg" lh={1.6} fw={300} c="dimmed">
                                    {t('Summary.Text')}
                                </Text>
                            </Box>

                            <Box mb={80} id="works">
                                <Title order={2} mb={40} fw={500} fz={32}>
                                    {t('Section.SelectedWorks')}
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
                                <Group align="center" mb={30} gap={15} id="skills">
                                    <Title order={2} fw={500} fz={32}>
                                        {t('Section.TechnicalStack')}
                                    </Title>
                                    <Badge variant="dot" color="green" size="lg" radius="xs">{t('Badge.SystemActive')}</Badge>
                                </Group>

                                <Stack gap="xl">
                                    {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                                        <Box key={category}>
                                            <Text size="sm" c="dimmed" tt="uppercase" fw={700} lts={1} mb="md" ff="Space Grotesk">
                                                {category}
                                            </Text>
                                            <Group gap="sm">
                                                {categorySkills.map(skill => (
                                                    <Paper
                                                        key={skill.id}
                                                        p="xs"
                                                        radius="xs"
                                                        withBorder
                                                        bg="var(--mantine-color-default)"
                                                        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                                    >
                                                        <TechIcon iconKey={skill.iconKey} size={20} color="var(--mantine-color-brand-filled)" />
                                                        <Text size="sm" fw={500} ff="Space Grotesk">{skill.name}</Text>
                                                    </Paper>
                                                ))}
                                            </Group>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>

                            <Box id="endorsements">
                                <Group align="center" mb={40} gap={15}>
                                    <Title order={2} fw={500} fz={32}>
                                        {t('Section.Recommendations')}
                                    </Title>
                                    <Badge variant="outline" color="indigo" size="sm" radius="xs" tt="uppercase">{t('Badge.Endorsements')}</Badge>
                                </Group>
                                <Stack gap="xl">
                                    {recommendations.map(rec => (
                                        <RecommendationCard key={rec.id} recommendation={rec} />
                                    ))}
                                </Stack>
                            </Box>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 4 }} display={{ base: 'none', md: 'block' }}>
                            <Box style={{ position: 'sticky', top: '40px' }}>
                                <ProfileCard />
                                <SystemStatus />
                            </Box>
                        </Grid.Col>
                    </Grid>
                )}
            </Container >
        </>
    );
}
