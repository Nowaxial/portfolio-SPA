import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import React from 'react';

export function ColorSchemeToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
            style={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                zIndex: 1000,
                borderRadius: '50%',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(var(--mantine-color-body), 0.7)',
            }}
        >
            {computedColorScheme === 'light' ? (
                <IconMoon stroke={1.5} size={20} />
            ) : (
                <IconSun stroke={1.5} size={20} />
            )}
        </ActionIcon>
    );
}
