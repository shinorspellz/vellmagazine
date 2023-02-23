import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import VellMagazineContextProvider from './context/VellMagazineContext'
import AppRouter from "./router/AppRouter"


// import "@fontsource/montserrat";

const App = () => {
  return (
    <HelmetProvider>
      <VellMagazineContextProvider>
        <AppRouter/>
      </VellMagazineContextProvider>

    </HelmetProvider>
    
  )
}

export default App