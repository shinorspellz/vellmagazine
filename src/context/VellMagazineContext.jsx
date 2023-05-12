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

export const scrollToTop = (e)=>{
  e.preventDefault()
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
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


      const convertToMonth=(str)=>{
        let month=str.split(" ")[0]
        if(month=="JAN"){
          return "January"
        }
        else if(month=="FEB"){
          return "February"
        }
        else if(month=="MAR"){
          return "March"
        }
        else if(month=="APR"){
          return "April"
        }
        else if(month=="MAY"){
          return "May"
        }
        else if(month=="JUN"){
          return "June"
        }
        else if(month=="JUL"){
          return "JULY"
        }
        else if(month=="AUG"){
          return "AUGUST"
        }
        else if(month=="SEP"){
          return "September"
        }
        else if(month=="OCT"){
          return "October"
        }
        else if(month=="NOV"){
          return "November"
        }
        else if(month=="DEC"){
          return "December"
        }
        
      }
      
  return (
    <VellMagazineContext.Provider value={{getStorageTheme,theme,setTheme,changeTheme,changeFormat,banner,setBanner,scrollToTop,convertToMonth}}>
{children}
    </VellMagazineContext.Provider>
  )
}

export default VellMagazineContextProvider