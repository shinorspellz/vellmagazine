import React from 'react'
import VellMagazineContextProvider from './context/VellMagazineContext'
import AppRouter from "./router/AppRouter"

const App = () => {
  return (
    <VellMagazineContextProvider>
      <AppRouter/>
    </VellMagazineContextProvider>
  )
}

export default App