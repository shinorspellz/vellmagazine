import {useState, useEffect} from 'react'
import VellHeader from './VellHeader';

const VellFader = () => {
  const [fadeProp, setFadeProp] = useState({
    fade: 'slide-in',
  })

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === 'slide-in') {
        setFadeProp({
          fade: 'slide-out'
        })
      } else {
        setFadeProp({
          fade: 'slide-in'
        })
      }
    }, 3000);
    return () => clearInterval(timeout)
  }, [fadeProp])

  return (
    <div className={fadeProp.fade}>
      <VellHeader/>
    </div>
  )
}

export default VellFader