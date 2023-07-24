import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import EnglishMsg from './../lang/en-US.json'
import SpanishMsg from './../lang/es-AR.json'

const langContext = React.createContext()

const LangProvider = ({ children }) => {

    const [messages, setMessages] = useState(EnglishMsg)
    const [locale, setLocale] = useState('en-US')

    const selectLanguage = (language) => {
        switch (language) {
            case 'es-AR':
                setMessages(SpanishMsg);
                setLocale('es-AR');
                break
            case 'en-US':
                setMessages(EnglishMsg);
                setLocale('en-US');
                break
            default:
                setMessages(EnglishMsg);
                setLocale('en-US');
                break;
        }
    }

    return (
        <langContext.Provider value={{ selectLanguage: selectLanguage }}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export { LangProvider, langContext }