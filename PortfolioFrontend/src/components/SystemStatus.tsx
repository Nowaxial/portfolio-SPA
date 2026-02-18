import GithubPulse from './GithubPulse';
import DeveloperStats from './DeveloperStats';
import { Stack, Text, Box } from '@mantine/core';

export function SystemStatus() {
  return (
    <Stack gap="xl" mt={40}>
      <GithubPulse />
      <DeveloperStats />
      <Box>
        <Text size="xs" fw={700} tt="uppercase" c="dimmed" mb="xs" style={{ letterSpacing: '1px' }}>
          Architecture Note
        </Text>
        <Text size="sm" c="dimmed" lh={1.6}>
          Decoupled SSR architecture using <Text span fw={700} c="var(--mantine-color-text)">Astro</Text>, <Text span fw={700} c="var(--mantine-color-text)">React</Text>, and <Text span fw={700} c="var(--mantine-color-text)">.NET 10</Text>.
          Optimized for performance and type-safe data flow.
        </Text>
      </Box>
    </Stack>
  );
}
