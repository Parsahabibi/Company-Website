

import router from "./routes/router";
import {RouterProvider} from "react-router-dom";
import {useLanguage} from "./LanguageContext";
import I18n from "./i18n";


function App() {

    const { locale, changeLocale } = useLanguage();


    return (
        <I18n render={() => <RouterProvider router={router} onLocaleChanged={changeLocale} locale={locale} />} />
    );
}


export default App;
