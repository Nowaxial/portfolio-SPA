import { createTheme, MantineProvider, localStorageColorSchemeManager, type MantineTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';

const colorSchemeManager = localStorageColorSchemeManager({
    key: 'mantine-color-scheme',
});

export const theme = createTheme({
    primaryColor: 'brand',
    primaryShade: { light: 4, dark: 4 },
    colors: {
        brand: [
            '#FFF4E1',
            '#FFE9C2',
            '#FFD285',
            '#FFBA47',
            '#FCA311', // Level 4 - Primary Color
            '#E89100', // Level 5
            '#CE8100', // Level 6
            '#B47100',
            '#9A6100',
            '#805100',
        ],
        dark: [
            '#F8F9FA', // 0
            '#E9ECEF', // 1
            '#DEE2E6', // 2
            '#CED4DA', // 3 (Bright enough for contrast)
            '#ADB5BD', // 4
            '#6C757D', // 5
            '#495057', // 6
            '#343A40', // 7
            '#14213D', // 8: Oxford Blue (Background)
            '#0A101E', // 9: Deeper black
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
            },
            styles: (theme: MantineTheme) => ({
                root: {
                    backgroundColor: 'var(--card-bg)',
                    backdropFilter: 'blur(10px)',
                }
            })
        }
    }
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider theme={theme} defaultColorScheme="dark" colorSchemeManager={colorSchemeManager}>
            {children}
        </MantineProvider>
    );
}

