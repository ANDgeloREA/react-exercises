import { useState, } from "react";
import { LanguageContext } from "./LanguageContext";
import DisplayLanguage from "./components/DisplayLanguage";

const App = () => {
  const [language, setLanguage] = useState('en')

  function handleChangeLanguage(event) {
    setLanguage(event.target.value)
  }

  return (
    <>
      <LanguageContext.Provider value={language}>
        <select onChange={handleChangeLanguage} value={language}>
          <option value='en'>English</option>
          <option value='it'>Italiano</option>
        </select>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </>
  );
}

export default App;