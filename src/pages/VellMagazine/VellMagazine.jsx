import VellFooter from '../../components/VellMagazine/VellFooter'
import VellFader from '../../components/VellMagazine/VellHeaderFader'
import VelllTopStories from '../../components/VellMagazine/VelllTopStories'
import VellMainPhoto from '../../components/VellMagazine/VellMainPhoto'
import VellNavbar from '../../components/VellMagazine/VellNavbar'
import VellThisMonth from '../../components/VellMagazine/VellThisMonth'
import VellTrending from '../../components/VellMagazine/VellTrending'
import Cookies from '../../components/Cookies'



const VellMagazine = () => {

  return (
    <div >
    <Cookies/>
    <VellNavbar />
    <VellFader/>
    <VelllTopStories/>
    <VellThisMonth/>
    <VellMainPhoto/>
    <VellTrending/>
    <VellFooter />
    </div>

  )
}

export default VellMagazine