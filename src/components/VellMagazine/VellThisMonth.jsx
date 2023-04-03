import { articles, thisMonthData } from "../../utils/vellMagazineData"
import SingleTodayMagazine from "./SingleTodayMagazine"
import moment from 'moment'
import { useNavigate } from "react-router-dom"


const VellThisMonth = () => {
    const navigate=useNavigate()
    // Mental HEalth, Weekend Getaways, Makeup, PetInfluencers,  Social Media Hacks, Cost of Living
    // const today=new Date()
    // const month=moment(today).format("LL").split(" ")[0]
    // console.log(month)
    const allFillers=articles.filter((item)=>item.theme=="filler").reverse().slice(0,6)

    

    // const mentalHealth=allFillers.find((item)=>item.topics.includes("MENTAL HEALTH"))
    // const weekendGetAways=allFillers.find((item)=>item.topics.includes("WEEKEND GETAWAYS"))
    // const makeUp=allFillers.find((item)=>item.topics.includes("MAKEUP"))
    // const petSpotlight=allFillers.find((item)=>item.topics.includes("PETS/ANIMALS IN THE SPOTLIGHT"))
    // // const socialMediaHacks=allFillers.find((item)=>item.topics.includes("SOCIAL MEDIA HACKS") && !item.topics.includes("COST OF LIVING"))
    // const costOfLiving=allFillers.find((item)=>item.topics.includes("COST OF LIVING"))
    // // const style=allFillers.find((item)=>item.topics.includes("STYLE") && !item.topics.includes("SOCIAL MEDIA"))
    // const influencers=allFillers.find((item)=>item.topics.includes("INFLUENCERS"))
    // const technology=allFillers.find((item)=>item.topics.includes("TECHNOLOGY"))
    // const fashionWeeks=allFillers.find((item)=>item.topics.includes("FASHION WEEKS"))
    // const cinema=allFillers.find((item)=>item.topics.includes("CINEMA"))
    // const socialMediaHacks=allFillers.find((item)=>item.topics.includes("SOCIAL MEDIA HACKS") && !item.topics.includes("COST OF LIVING"))
    // const music=allFillers.find((item)=>item.topics.includes("MUSIC"))
    // const trends=allFillers.find((item)=>item.topics.includes("TRENDS"))
    // const clothing=allFillers.find((item)=>item.topics.includes("CLOTHING"))
    // const celebFashion=allFillers.find((item)=>item.topics.includes("CELEBRITY FASHION"))
    // const artsCulture=allFillers.find((item)=>item.topics.includes("ARTS & CULTURE"))

    // const thisMonthArr=[]
    // // thisMonthArr.push(mentalHealth,weekendGetAways,style,petSpotlight,socialMediaHacks,costOfLiving)
    // // console.log(thisMonthArr);
    // thisMonthArr.push(petSpotlight,influencers,fashionWeeks,technology,costOfLiving,artsCulture)
    // console.log(thisMonthArr);
  return (
    <main className="vellmagazine-today mt-[60px] p-5 xl:px-[2rem]">
        <h1 className="text-center font-500 font-['adobe-devanagari'] text-4xl py-5 mb-[3rem]">WHAT'S NEW ON VELL MAGAZINE</h1>
        <section className="grid grid-cols-2 xl:grid-cols-3 gap-9 ">
            {
                allFillers?.map((item,index)=>{
                    return(
                        <SingleTodayMagazine item={item} key={index} index={index} allFillers={allFillers}/>
                    )
                })
            }

        </section>
        <button
                  className=" w-[130px] py-2 mt-5 block m-auto thisMonthBtn homepageFont"
                  onClick={() => navigate(`/allfillers`)}
                >
                  See more
                </button>
    </main>
  )
}

export default VellThisMonth