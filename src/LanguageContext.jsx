import { createContext, useState, useEffect } from 'react'


const LanguageContext = createContext();


const LangaugeProvider = ({children}) => {

  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}


export  {LangaugeProvider, LanguageContext};
