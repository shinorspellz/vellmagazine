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

    //-----------------------------------------------TEST---------------------------//
  //   const allFillers = articles
  //   .filter((item) => item.theme == "filler")
  //   .reverse();
  // const uniqueTopics = [];
  // const fillerTopics = articles.map(
  //   (item) =>
  //     item.topics[1] != undefined &&
  //     !uniqueTopics.includes(item.topics[1]) &&
  //     uniqueTopics.push(item.topics[1])
  // );
  // let newUniqueTopics=uniqueTopics.slice(0, 6)
  // console.log(uniqueTopics.slice(0, 6));
  // const uniqueFillers = [];

  // const topic1 = allFillers.filter((item) => item.topics[1] == newUniqueTopics[0]);
  // const topic2 = allFillers.find((item) => item.topics[1] == newUniqueTopics[1]);
  // const topic3 = allFillers.find((item) => item.topics[1] == newUniqueTopics[2]);
  // const topic4 = allFillers.find((item) => item.topics[1] == newUniqueTopics[3]);
  // const topic5 = allFillers.find((item) => item.topics[1] ==newUniqueTopics[4]);
  // const topic6 = allFillers.find((item) => item.topics[1] == newUniqueTopics[5]);
  // console.log(topic1,"top")
  // uniqueFillers.push(topic1,topic2,topic3,topic4,topic5,topic6)

  // console.log(uniqueFillers);

  //------------------------------------------------------------------------END OF TEST
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