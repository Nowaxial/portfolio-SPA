interface AgileIconProps {
    size?: number;
    color?: string;
}

export const AgileIcon: React.FC<AgileIconProps> = ({ size = 24, color = 'currentColor' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a9 9 0 1 0 9 9" />
            <path d="M12 3v4" />
            <path d="M21 12h-4" />
            <path d="M7.7 7.7l2.8 2.8" />
            <path d="M3 12h4" />
            <path d="M7.7 16.3l2.8-2.8" />
            <path d="M12 21v-4" />
            <path d="M16.3 16.3l-2.8-2.8" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        </svg>
    );
};
