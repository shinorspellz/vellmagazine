import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const VellMagazineContext=createContext()

const getStorageTheme = () => {
    let theme = 'light-theme'
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme')
    }
    return theme
  }
  
export const getStorageBanner = () => {
  let banner=true
  if (sessionStorage.getItem('banner')) {
    banner = false
  }
  return banner
}

const VellMagazineContextProvider = ({children}) => {
    const [theme, setTheme] = useState(getStorageTheme())
    const [banner,setBanner]=useState(getStorageBanner())


    const changeTheme=()=>{
        if (theme === 'light-theme') {
            setTheme('dark-theme');
          } else {
            setTheme('light-theme');
          }
    }
    useEffect(() => {
      if(banner==false){
        sessionStorage.setItem('banner', banner)
      }
    }, [banner])
  
    useEffect(() => {
        //in order to give class to root element and store it in the local storage
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
      }, [theme])
  
      const changeFormat=(str)=>{
        let arr=str.split(" ")
        let result=arr[0]+" "+arr[2]
        return result
      }
      
  return (
    <VellMagazineContext.Provider value={{getStorageTheme,theme,setTheme,changeTheme,changeFormat,banner,setBanner}}>
{children}
    </VellMagazineContext.Provider>
  )
}

export default VellMagazineContextProvider