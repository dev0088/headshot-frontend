import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
    translation,
    translationKo,
} from '../locales';

/**
 * Client Side Load
 */
const i18nClient = i18n
    // .use(XHR)
    .use(LanguageDetector)
    .init({
        load: 'all',
        whitelist: ['en-US', ],
        nonExplicitWhitelist: false,
        lngs: ['en-US'],
        fallbackLng: 'en-US',
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        react: {
            wait: true, // set to true if you like to wait for loaded in every translated hoc
            nsMode: 'default', // set it to fallback to let passed namespaces to translated hoc act as fallbacks
        },
        defaultNS: 'locale.constant',
        resources: {
            'en-US': {
                'locale.constant': translation,
            },
        },
    });

export default i18nClient;
