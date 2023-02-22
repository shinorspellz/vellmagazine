import React from 'react'
import VellMagazineContextProvider from './context/VellMagazineContext'
import AppRouter from "./router/AppRouter"

// import "@fontsource/montserrat";

const App = () => {
  return (
    <VellMagazineContextProvider>
      <AppRouter/>
    </VellMagazineContextProvider>
  )
}

export default App