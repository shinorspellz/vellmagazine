import { createContext, useEffect, useState, useContext } from "react";

const CookieConsentContext = createContext({});

const CookieConsentProvider = (props) => {
  const [consentChoice, setConsentChoice] = useState('undecided')

  useEffect(() => setConsentChoice(getCookieConsent()), [])

  const updateCookieConsent = (consent) => {
    localStorage.setItem("VellMagCookieConsent", consent)

    setConsentChoice(consent)
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consentChoice,
        acceptCookieConsent: () => updateCookieConsent("accepted")
      }}
      >
        {props.children}
      </CookieConsentContext.Provider>
  )


}

const useCookieConsent = () => {
  return useContext(CookieConsentContext)
}

const getCookieConsent = () => {
  try {
    return localStorage.getItem("VellMagCookieConsent") || "undecided";
  } catch (error) {
    if (error instanceof DOMException ) {
      // Prevent "Uncaught DOMException: Failed to read the 'localStorage' property from 'Window': Access is denied for this document."
      return "declined";
    }
    throw error
  }
}

export {CookieConsentProvider, useCookieConsent}