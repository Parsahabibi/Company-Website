
import { IntlProvider } from "react-intl";

import {messages as Fa} from './fa'
import {messages as En} from './en'
import {messages as Ru} from './ru'
import {useLanguage} from "../LanguageContext";


const messages = {
    "fa": Fa,
    "en": En,
    "ru": Ru,
};


// Our wrapper component, using a React render prop to
// expose the setLocale() function to child components.
function I18n({ render }) {
    // const [locale, setLocale] = useState("fa");
    const { locale, changeLocale } = useLanguage();


    return (
        // Use the key prop to force react-intl's IntlProvider
        // to re-render its children on locale change.
        <IntlProvider
            messages={messages[locale]}
            locale={locale}>
            {render(changeLocale, locale)}
        </IntlProvider>
    );
}

export default I18n;