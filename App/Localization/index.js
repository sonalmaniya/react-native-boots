import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';

const translations = {
  en: {
    SIGN_IN: 'Sign In',
    SEE_CHANGES: 'See Your Changes',
    CHANGE_LANGUAGE: 'Change Language',
    LANGUAGE_SETTINGS: 'Change Language',
  },
  de: {
    SIGN_IN: 'Registrarse',
    SEE_CHANGES: 'Änderungen ansehen',
    CHANGE_LANGUAGE: 'Sprache wechseln',
    LANGUAGE_SETTINGS: 'Sprache wechseln',
  },
};

export default new LocalizedStrings(translations);
