import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { PortfolioContent } from './PortfolioContent';
import type { Project, Skill } from '../types';

interface PortfolioAppProps {
    projects: Project[];
    skills: Skill[];
}

export function PortfolioApp({ projects, skills }: PortfolioAppProps) {
    return (
        <ThemeProvider>
            <PortfolioContent projects={projects} skills={skills} />
        </ThemeProvider>
    );
}
