import { ActionIcon, useMantineColorScheme, useComputedColorScheme, rem } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ColorSchemeToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="transparent"
            size="lg"
            aria-label="Toggle color scheme"
            visibleFrom="md"
            style={{
                position: 'fixed',
                top: rem(12),
                right: rem(24),
                zIndex: 1000,
                backgroundColor: 'rgba(10, 16, 30, 0.7)',
                backdropFilter: 'blur(20px)',
                padding: rem(8),
                borderRadius: rem(5),
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                height: rem(34), // Matching height of LanguageToggle (4px padding + text)
                width: rem(34),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {computedColorScheme === 'light' ? (
                <IconMoon stroke={1.5} size={20} color="var(--mantine-color-brand-4)" />
            ) : (
                <IconSun stroke={1.5} size={20} color="var(--mantine-color-brand-4)" />
            )}
        </ActionIcon>
    );
}
