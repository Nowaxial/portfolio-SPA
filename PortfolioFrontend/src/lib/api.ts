import type { Project, Skill, Experience, Education, Recommendation } from '../types';

// Use relative URL in production (same domain), absolute URL in development handled by Astro proxy
const API_BASE_URL = '/api';

export async function fetchProjects(): Promise<Project[]> {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
}

export async function fetchSkills(): Promise<Skill[]> {
    const response = await fetch(`${API_BASE_URL}/skills`);
    if (!response.ok) throw new Error('Failed to fetch skills');
    return response.json();
}

export async function fetchExperiences(): Promise<Experience[]> {
    const response = await fetch(`${API_BASE_URL}/experience`);
    if (!response.ok) throw new Error('Failed to fetch experiences');
    return response.json();
}

export async function fetchEducation(): Promise<Education[]> {
    const response = await fetch(`${API_BASE_URL}/education`);
    if (!response.ok) throw new Error('Failed to fetch education');
    return response.json();
}

export async function fetchRecommendations(): Promise<Recommendation[]> {
    const response = await fetch(`${API_BASE_URL}/recommendations`);
    if (!response.ok) throw new Error('Failed to fetch recommendations');
    return response.json();
}
