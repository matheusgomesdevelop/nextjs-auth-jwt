import { useCallback } from 'react';

import i18n_translations, { TranslationValue } from '../../../i18n';

const useTranslation = () => {
    const t = useCallback((searchString: string) => {
        const splitKeys = searchString.split('.');
        const fileToSearch = splitKeys[0];

        let translation: TranslationValue | undefined = i18n_translations[fileToSearch];

        if (!translation) {
            console.error(`Chave de tradução não encontrada em '${searchString}'`);
            return '';
        }

        for (let i = 1; i < splitKeys.length; i++) {
            const key = splitKeys[i];

            translation = translation[key] as TranslationValue;

            if (!translation) {
                console.error(`Chave de tradução '${key}' não encontrada em '${searchString}'`);
                return '';
            }
        }

        if (typeof translation === 'string') {
            return translation;
        }
    }, []);

    return { t };
};

export default useTranslation;
