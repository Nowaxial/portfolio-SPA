import { useEffect } from 'react';
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
    const scrollToTop = () => {
        console.log('scrollToTop clicked!');
        // Try smooth scroll first, fallback to instant
        try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
            console.error('Scroll error:', e);
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                scrollToTop();
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
                <Footer onScrollToTop={scrollToTop} />
                <ColorSchemeToggle />
                <LanguageToggle />
            </ThemeProvider>
        </TranslationProvider>
    );
}