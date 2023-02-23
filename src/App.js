import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import VellMagazineContextProvider from './context/VellMagazineContext'
import AppRouter from "./router/AppRouter"


// import "@fontsource/montserrat";
const helmetContext = {}

const App = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <VellMagazineContextProvider>
        <AppRouter/>
      </VellMagazineContextProvider>

    </HelmetProvider>
    
  )
}

export default App