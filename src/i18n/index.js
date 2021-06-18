import i18next from 'i18next';
import pt from './translations/pt-br/translations.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'pt', // language to use
  resources: {
    pt,
  },
});

export default i18next;
