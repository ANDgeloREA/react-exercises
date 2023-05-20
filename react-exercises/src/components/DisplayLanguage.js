import { useContext } from "react"
import { LanguageContext } from "../LanguageContext"

const DisplayLanguage = () => {
  const language = useContext(LanguageContext)
  return <p>{language}</p>
}

export default DisplayLanguage
