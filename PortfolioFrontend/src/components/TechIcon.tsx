import React from 'react';
import * as SiIcons from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import type { IconType } from 'react-icons';

import { AgileIcon } from './icons/AgileIcon';
import { KohaIcon } from './icons/KohaIcon';
import { CiCdIcon } from './icons/CiCdIcon';

interface TechIconProps {
    iconKey: string;
    size?: number;
    color?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ iconKey, size = 20, color }) => {
    // 0. Handle Custom SVG Components
    if (iconKey === 'custom-agile' || iconKey === 'si-agile') {
        return <AgileIcon size={size} color={color} />;
    }
    if (iconKey === 'custom-koha') {
        return <KohaIcon size={size} color={color} />;
    }
    if (iconKey === 'custom-cicd') {
        return <CiCdIcon size={size} color={color} />;
    }

    // 1. Handle Masked Local Image (behaes like SVG with currentColor)
    // format: mask-filename (e.g., mask-koha -> /icons/koha.png)
    if (iconKey.startsWith('mask-')) {
        const filename = iconKey.replace('mask-', '');
        return (
            <div
                style={{
                    width: size,
                    height: size,
                    backgroundColor: color || 'currentColor',
                    maskImage: `url(/icons/${filename}.png)`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: `url(/icons/${filename}.png)`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    display: 'inline-block'
                }}
                aria-label={filename}
            />
        );
    }

    // 2. Handle Devicon (font-based)
    if (iconKey.startsWith('devicon-')) {
        return (
            <i
                className={`${iconKey} colored`}
                style={{
                    fontSize: `${size}px`,
                    color: color,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            />
        );
    }

    // 3. Handle Simple Icon (React component)
    if (iconKey.startsWith('si-')) {
        // Convert kebab-case si-name to PascalCase SiName
        const iconName = iconKey
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join('');

        const IconComponent = (SiIcons as Record<string, any>)[iconName];

        if (typeof IconComponent === 'function') {
            const ResolvedIcon = IconComponent as IconType;
            return <ResolvedIcon size={size} color={color} />;
        }
    }

    // 4. Fallback
    return <SiReact size={size} color={color} />;
};
