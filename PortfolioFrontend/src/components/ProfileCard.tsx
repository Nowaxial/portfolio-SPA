import React from 'react';
import { Box, Avatar, Text, Stack, Title, Group, Paper, Divider } from '@mantine/core';

export function ProfileCard() {
    return (
        <Paper
            p="xl"
            radius="xs"
            mb={40}
            style={{
                background: 'var(--mantine-color-default)',
                border: '1px solid var(--mantine-color-default-border)',
            }}
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
                    <Title
                        order={3}
                        style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '24px',
                            fontWeight: 500
                        }}
                    >
                        Maria Toledo
                    </Title>
                    <Text
                        size="xs"
                        tt="uppercase"
                        c="dimmed"
                        fw={700}
                        mt={4}
                        style={{
                            fontFamily: 'Space Grotesk',
                            letterSpacing: '1px'
                        }}
                    >
                        Software Architect
                    </Text>
                </Box>

                <Divider color="var(--mantine-color-default-border)" />

                <Box>
                    <Text
                        size="sm"
                        c="dimmed"
                        style={{
                            lineHeight: 1.6,
                            fontFamily: 'Space Grotesk',
                            fontStyle: 'italic'
                        }}
                    >
                        "I believe in building systems that are not just functional, but architecturally sound and future-proof. My focus is on precision, performance, and the seamless intersection of design and data."
                    </Text>
                </Box>

                <Group gap="xs" mt={5}>
                    <Box w={8} h={8} style={{ borderRadius: '50%', background: 'var(--mantine-color-brand-filled)' }} />
                    <Text
                        size="xs"
                        fw={700}
                        tt="uppercase"
                        style={{
                            fontFamily: 'Space Grotesk',
                            letterSpacing: '0.5px'
                        }}
                    >
                        Ready for collaboration
                    </Text>
                </Group>
            </Stack>
        </Paper>
    );
}

