import React, {createContext, useContext, useEffect, useState} from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // const [locale, setLocale] = useState("fa");

    const [locale, setLocale] = useState(() => {
        const storedLocale = localStorage.getItem("userLocale");
        return storedLocale || "fa"; // اگر در localStorage زبانی ذخیره نشده باشد، زبان پیشفرض "fa" استفاده می‌شود
    });

    const changeLocale = (newLocale) => {
        setLocale(newLocale);
    };

    useEffect(() => {
        localStorage.setItem("userLocale", locale);
    }, [locale]);

    const saveDataToLocalStorage = (data) => {
        localStorage.setItem("userData", JSON.stringify(data));
    };



    // const changeLocale = (newLocale) => {
    //     try {
    //         setLocale(newLocale);
    //     } catch (error) {
    //         console.error("Error in changeLocale:", error);
    //     }
    // };



    return (
        <LanguageContext.Provider value={{ locale, changeLocale  }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};