import { createTheme, MantineProvider, virtualColor } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';

export const theme = createTheme({
    primaryColor: 'brand',
    colors: {
        brand: [
            '#eef3ff',
            '#dce4ff',
            '#b9c9ff',
            '#91a8ff',
            '#708dff',
            '#5c7cff',
            '#4c6ef5', // Primary
            '#3b5bdb',
            '#324fff',
            '#2b45b4',
        ],
        dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5C5F66',
            '#373A40',
            '#2C2E33',
            '#25262B',
            '#1A1B1E',
            '#0A0A0B', // Slightly darker background for deep contrast
            '#050506',
        ],
    },
    fontFamily: 'Space Grotesk, system-ui, sans-serif',
    fontFamilyMonospace: 'JetBrains Mono, monospace',
    headings: {
        fontFamily: 'Playfair Display, serif',
        fontWeight: '700',
    },
    defaultRadius: 'md',
    cursorType: 'pointer',
    components: {
        Button: {
            defaultProps: {
                fw: 600,
                radius: 'md'
            }
        },
        Card: {
            defaultProps: {
                radius: 'lg',
                withBorder: true,
                bg: 'rgba(26, 27, 30, 0.5)'
            }
        }
    }
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider theme={theme} defaultColorScheme="dark">
            {children}
        </MantineProvider>
    );
}
