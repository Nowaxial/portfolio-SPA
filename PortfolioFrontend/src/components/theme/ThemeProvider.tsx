import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';

export const theme = createTheme({
    primaryColor: 'blue',
    fontFamily: 'Inter, sans-serif',
    // Theme tokens can be dynamically updated from the backend later
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider theme={theme} defaultColorScheme="dark">
            {children}
        </MantineProvider>
    );
}
