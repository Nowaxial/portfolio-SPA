import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'sv';

interface TranslationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
    const [translations, setTranslations] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTranslations = async () => {
            setLoading(true);
            try {
                // In production, this would be an absolute URL or proxy
                // For local dev, we might need the full URL if running on different ports
                // Assuming proxy is set up or CORS allows it
                const response = await fetch(`http://localhost:5073/api/translations?lang=${language}`);
                if (response.ok) {
                    const data = await response.json();
                    setTranslations(data);
                } else {
                    console.error('Failed to fetch translations');
                }
            } catch (error) {
                console.error('Error loading translations:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTranslations();
    }, [language]);

    const t = (key: string): string => {
        return translations[key] || key;
    };

    return (
        <TranslationContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
}
