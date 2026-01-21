export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string;
    githubUrl?: string;
    liveUrl?: string;
    architectureDiagram?: string;
    isFeatured: boolean;
}

export interface Skill {
    id: number;
    name: string;
    category: string;
    iconKey: string;
}

export interface Experience {
    id: number;
    company: string;
    position: string;
    location?: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
    description: string;
    techUsed?: string;
}

export interface Education {
    id: number;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate?: string;
    description?: string;
}

export interface Recommendation {
    id: number;
    authorName: string;
    authorRole: string;
    content: string;
    authorAvatar?: string;
    linkedInProfileUrl?: string;
}
