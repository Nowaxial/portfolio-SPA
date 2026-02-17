import { ActionIcon, Text, rem } from '@mantine/core';
import { useTranslation } from './TranslationContext';

export function LanguageToggle({ mini = false }: { mini?: boolean }) {
    const { language, setLanguage } = useTranslation();

    const toggleLanguage = () => {
        setLanguage(language === 'sv' ? 'en' : 'sv');
    };

    // Show the language you can switch TO, not the current language
    const targetLanguage = language === 'sv' ? 'EN' : 'SV';

    if (mini) {
        return (
            <ActionIcon
                onClick={toggleLanguage}
                variant="transparent"
                size="sm"
                aria-label="Toggle language"
                style={{
                    color: 'var(--mantine-color-brand-4)',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 700,
                    fontSize: rem(14), // Matches size="sm"
                    letterSpacing: rem(1),
                    width: 'auto',
                    padding: `0 ${rem(4)}`
                }}
            >
                {targetLanguage}
            </ActionIcon>
        );
    }

    return (
        <ActionIcon
            onClick={toggleLanguage}
            variant="transparent"
            size="lg"
            aria-label="Toggle language"
            visibleFrom="md"
            style={{
                position: 'fixed',
                top: rem(12),
                right: rem(68),
                zIndex: 1000,
                backgroundColor: 'rgba(10, 16, 30, 0.7)',
                backdropFilter: 'blur(20px)',
                borderRadius: rem(5),
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                height: rem(34),
                width: rem(34),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
            }}
        >
            <Text
                size="xs"
                fw={700}
                style={{
                    color: 'var(--mantine-color-brand-4)',
                    fontFamily: 'Playfair Display, serif',
                    lineHeight: 1
                }}
            >
                {targetLanguage}
            </Text>
        </ActionIcon>
    );
}
