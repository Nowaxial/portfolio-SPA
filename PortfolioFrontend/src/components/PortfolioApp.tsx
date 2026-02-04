import React, { useEffect } from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { ColorSchemeToggle } from './theme/ColorSchemeToggle';
import { PortfolioContent } from './PortfolioContent';
import { Footer } from './Footer';
import type { Project, Skill, Recommendation } from '../types';

interface PortfolioAppProps {
    projects: Project[];
    skills: Skill[];
    recommendations: Recommendation[];
}

import { Header } from './Header';
import { LanguageToggle } from './LanguageToggle';
import { TranslationProvider } from './TranslationContext';

export function PortfolioApp({ projects, skills, recommendations }: PortfolioAppProps) {
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        window.addEventListener('keydown', handleEscKey);
        return () => window.removeEventListener('keydown', handleEscKey);
    }, []);

    return (
        <TranslationProvider>
            <ThemeProvider>
                <Header />
                <PortfolioContent projects={projects} skills={skills} recommendations={recommendations} />
                <Footer />
                <ColorSchemeToggle />
                <LanguageToggle />
            </ThemeProvider>
        </TranslationProvider>
    );
}

