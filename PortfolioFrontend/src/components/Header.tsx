import React, { useState } from 'react';
import { Container, Group, Text, Burger, Drawer, Stack, Box, UnstyledButton, rem, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons-react';

const navLinks = [
    { label: 'Top', href: '#top' },
    { label: 'Works', href: '#works' },
    { label: 'Skills', href: '#skills' },
    { label: 'Recommendations', href: '#endorsements' },
];

export function Header() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const theme = useMantineTheme();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: 'smooth' });
        close();
    };

    return (
        <Box
            component="header"
            hiddenFrom="md"
            style={{
                position: 'fixed',
                top: rem(3),
                left: rem(5),
                right: rem(5),

                zIndex: 1000,
                pointerEvents: 'none',
            }}
        >
            <Box
                style={{
                    height: rem(54),
                    backgroundColor: 'rgba(10, 16, 30, 0.7)',
                    backdropFilter: 'blur(20px) saturate(160%)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: rem(5),
                    pointerEvents: 'auto',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    width: '100%',
                    maxWidth: rem(500),
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Container size="lg" h="100%" w="100%">
                    <Group justify="space-between" h="100%" wrap="nowrap">
                        <Text
                            size="md"
                            fw={900}
                            variant="gradient"
                            gradient={{ from: 'brand.4', to: 'brand.6', deg: 45 }}
                            style={{
                                fontFamily: 'Playfair Display, serif',
                                letterSpacing: '-0.3px',
                                userSelect: 'none'
                            }}
                        >
                            MTS
                        </Text>

                        <Group gap="xs">
                            <Text size="xs" tt="uppercase" fw={700} c="dimmed" variant="gradient"
                                gradient={{ from: 'brand.3', to: 'brand.5', deg: 45 }} style={{ letterSpacing: '1px', fontFamily: 'Playfair Display, serif', userSelect: 'none' }}>Menu</Text>
                            <Burger
                                opened={opened}
                                onClick={toggle}
                                size="sm"
                                color="brand.4"
                                transitionDuration={400}
                            />
                        </Group>
                    </Group>
                </Container>
            </Box>

            <Drawer
                opened={opened}
                onClose={close}
                size="100%"
                padding="md"
                position="right"

                zIndex={1100}
                styles={{
                    header: {
                        backgroundColor: '#0A101E',
                        borderBottom: `1px solid var(--mantine-color-dark-8)`,
                        paddingBottom: theme.spacing.xs,
                        paddingTop: theme.spacing.xs,
                    },
                    content: {
                        backgroundColor: '#0A101E',
                    },
                    close: {
                        color: 'var(--mantine-color-brand-4)',
                        transform: 'scale(1.2)',
                    }
                }}
            >
                <Stack gap={0} mt="md">
                    {navLinks.map((link, index) => (
                        <UnstyledButton
                            key={link.label}
                            component="a"
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            style={{
                                fontSize: rem(28),
                                fontWeight: 900,
                                color: 'var(--mantine-color-text)',
                                textDecoration: 'none',
                                padding: `${rem(20)} ${rem(10)}`,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                fontFamily: 'Playfair Display, serif',
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: rem(5),
                                opacity: 0.9,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(10px)';
                                e.currentTarget.style.color = 'var(--mantine-color-brand-4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.color = 'var(--mantine-color-text)';
                            }}
                        >
                            <Text size="xs" fw={700} ff="Space Grotesk" c="brand.4" style={{ width: rem(20) }}>
                                0{index + 1}
                            </Text>
                            {link.label}
                        </UnstyledButton>
                    ))}
                </Stack>

                <Box mt={rem(80)} p="md">
                    <Text size="xs" fw={700} tt="uppercase" c="dimmed" lts={2} mb="xl">
                        Socials
                    </Text>
                    <Group gap="xl">
                        <UnstyledButton component="a" href="https://www.linkedin.com/in/mariatoledosilva/" style={{ display: 'flex', alignItems: 'center', gap: rem(8) }}>
                            <IconBrandLinkedin size={20} color="var(--mantine-color-brand-4)" />
                            <Text size="sm" fw={500} c="dimmed">LinkedIn</Text>
                        </UnstyledButton>
                        <UnstyledButton component="a" href="https://github.com/Nowaxial" style={{ display: 'flex', alignItems: 'center', gap: rem(8) }}>
                            <IconBrandGithub size={20} color="var(--mantine-color-brand-4)" />
                            <Text size="sm" fw={500} c="dimmed">GitHub</Text>
                        </UnstyledButton>
                        <UnstyledButton component="a" href="mailto:maria.toledo.silva@outlook.com?subject=Found%20your%2020Portfolio.%20Let's%20connect!" style={{ display: 'flex', alignItems: 'center', gap: rem(8) }}>
                            <IconMail size={20} color="var(--mantine-color-brand-4)" />
                            <Text size="sm" fw={500} c="dimmed">Email</Text>
                        </UnstyledButton>
                    </Group>
                </Box>
            </Drawer>
        </Box>
    );
}
