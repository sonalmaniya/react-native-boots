import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';
import {en} from './en';
import {de} from './de';
import {hi} from './hi';

const translations = {
  en,
  de,
  hi,
};

export default new LocalizedStrings(translations);
