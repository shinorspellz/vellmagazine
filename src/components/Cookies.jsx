import { useEffect, useState } from "react";
import { useContext } from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom'
import { VellMagazineContext } from "../context/VellMagazineContext";

const Cookies = () => {
  const {theme,banner,setBanner}=useContext(VellMagazineContext)

  console.log("ooooooooooooooooo",banner);


console.log(banner);


  return (
    <div>
      <CookieConsent 
      debug={true}
      location='bottom'
      className="cookiesDiv"
      visible={banner ? "show" :"hidden"}
      onAccept={()=>setBanner(false)}
      style={theme==="light-theme" ? {
        background:"#503C3B",
        color:"#fff",
      }:
      {
        background:"#ffd",
        color:"#0a192f",
      }
    }
    buttonStyle={theme==="light-theme" ? {
      background:"#fff",
      color:"#503C3B",
      fontSize: "15px",
    }:
    {
      background:"#0a192f",
      color:"#fff",
    }
  }
      // buttonStyle={{ color: "#503C3B", fontSize: "15px", background: 'white' }}
      >This site uses cookies to enhance the user experience. See our <Link to="/privacypolicy" className="underline">privacy policy</Link> for more.</CookieConsent>
    </div>
  )
}

export default Cookies 