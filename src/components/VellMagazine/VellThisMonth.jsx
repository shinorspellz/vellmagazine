import { articles, thisMonthData } from "../../utils/vellMagazineData"
import SingleTodayMagazine from "./SingleTodayMagazine"
import moment from 'moment'


const VellThisMonth = () => {
    // Mental HEalth, Weekend Getaways, Makeup, PetInfluencers,  Social Media Hacks, Cost of Living
    const today=new Date()
    const month=moment(today).format("LL").split(" ")[0]
    // console.log(month)
    const thisMonthArticles=articles.filter((item)=>item.date.includes(month))
    const mentalHealth=thisMonthArticles.find((item)=>item.topics.includes("MENTAL HEALTH"))
    console.log(mentalHealth)
    const weekendGetAways=thisMonthArticles.find((item)=>item.topics.includes("WEEKEND GETAWAYS"))
    const makeUp=thisMonthArticles.find((item)=>item.topics.includes("MAKEUP"))
    const petInfluencers=thisMonthArticles.find((item)=>item.topics.includes("PET INFLUENCERS"))
    const socialMediaHacks=thisMonthArticles.find((item)=>item.topics.includes("SOCIAL MEDIA HACKS"))
    const costOfLiving=thisMonthArticles.find((item)=>item.topics.includes("COST OF LIVING"))

    const thisMonthArr=[]
    thisMonthArr.push(mentalHealth,weekendGetAways,makeUp,petInfluencers,socialMediaHacks,costOfLiving)
    // console.log(thisMonthArr);
  return (
    <main className="vellmagazine-today mt-[60px] p-5 xl:px-[2rem]">
        <h1 className="text-center font-500 font-serif text-4xl py-5 mb-[3rem]">THIS MONTH ON VELL MAGAZINE</h1>
        <section className="grid grid-cols-2 xl:grid-cols-3 gap-9 ">
            {
                thisMonthArr?.map((item,index)=>{
                    return(
                        <SingleTodayMagazine item={item} key={index} index={index} thisMonthArr={thisMonthArr}/>
                    )
                })
            }

        </section>
    </main>
  )
}

export default VellThisMonth