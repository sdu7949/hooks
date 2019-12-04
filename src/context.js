import React, { useState, useContext, createContext } from "react";

const LangContext = createContext();

const Lang=({defaultLang, children, translations}) =>{
    const [lang, setLang] = useState(defaultLang);

    const hyperTranslate = text => {
        if(lang === defaultLang){
            return text;
        }else{
            return translations[lang][text];
        }
    };

    return (<LangContext.Provider value={{setLang, t : hyperTranslate}}>{children}</LangContext.Provider>);
};
//Lang 은 영어로 값이 들어오면, 다른언어로 번역 되는 기능

export const useSetLang= () =>{
    const {setLang} = useContext(LangContext);
    return setLang;
};

export const useT = () => {
    const {t} = useContext(LangContext);
    return t;
}

export default Lang;