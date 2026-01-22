import React from 'react';
import { ThemeProvider } from './theme/ThemeProvider';
import { PortfolioContent } from './PortfolioContent';
import type { Project, Skill, Recommendation } from '../types';

interface PortfolioAppProps {
    projects: Project[];
    skills: Skill[];
    recommendations: Recommendation[];
}

export function PortfolioApp({ projects, skills, recommendations }: PortfolioAppProps) {
    return (
        <ThemeProvider>
            <PortfolioContent projects={projects} skills={skills} recommendations={recommendations} />
        </ThemeProvider>
    );
}
