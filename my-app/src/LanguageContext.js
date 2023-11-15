import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState("fa");



    const changeLocale = (newLocale) => {
        setLocale(newLocale);
    };



    return (
        <LanguageContext.Provider value={{ locale, changeLocale }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};