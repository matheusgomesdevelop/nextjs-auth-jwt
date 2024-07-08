import i18n_unauthorized from './config/i18n/Specific/unauthorized/unauthorized';
import i18n_metadata from './config/i18n/Metadata/metadata';
import i18n_welcome from './config/i18n/Specific/welcome/welcome';
import i18n_home from './config/i18n/Specific/home/home';

export type TranslationValue = {
    [key: string]: string | TranslationValue;
};

const i18n_translations: { [key: string]: TranslationValue } = {
    metadata: { ...i18n_metadata },
    specific: { ...i18n_home, ...i18n_welcome, ...i18n_unauthorized },
};

export default i18n_translations;
