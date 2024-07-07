import i18n_metadata from './Metadata/metadata';
import i18n_unauthorized from './Specific/unauthorized/unauthorized';
import i18n_home from './Specific/home/home';
import i18n_welcome from './Specific/welcome/welcome';

export type TranslationValue = {
    [key: string]: string | TranslationValue;
};

const i18n_translations: { [key: string]: TranslationValue } = {
    metadata: { ...i18n_metadata },
    specific: { ...i18n_home, ...i18n_welcome, ...i18n_unauthorized },
};

export default i18n_translations;
