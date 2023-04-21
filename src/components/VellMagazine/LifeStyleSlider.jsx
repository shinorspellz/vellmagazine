// import { trendingData } from "../../utils/vellMagazineData"
import SingleSlider from "./SingleSlider"
import Slider from "react-slick";
import { articles } from "../../utils/vellMagazineData";
import LeftArrow from "./VellTrendingLeftArrow";
import RightArrow from "./VellTrendingRightArrow";

const VellTrending = () => {

  //const trendingData=articles?.filter((item) => item.theme == 'trending').reverse()

  const lifeStyleSliderData=articles?.filter((item)=>item.topics.includes("LIFE MATTERS") && !item.topics.includes("FASHION & BEAUTY") && !item.topics.includes("ARTS & CULTURE"))
  // console.log(lifeStyleSliderData)
  const reorderedLifeStyleSliderData = lifeStyleSliderData.reverse();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <LeftArrow/>,
    nextArrow: <RightArrow/>,
    responsive: [
      {
        breakpoint:1300,
        settings:{
        slidesToShow: 6,
        }
       
        }, 
      ]
  };
  return (
    <main className="vellmagazine-trending mt-[50px] p-5 xl:px-[2rem] hidden lg:block">
    <h1 className="text-center font-500 font-serif text-4xl pt-1 pb-2 italic ">LIFESTYLE</h1>
    <Slider {...settings} className="container m-auto px-2 hidden lg:block ">
                {reorderedLifeStyleSliderData?.map((item,index) => {
              return (
                <ul className="m-auto" key={item.id}>
                <li className="list-unstyled mx-1 "><SingleSlider item={item}  index={index}/></li>
                </ul>
                );
              })}
      </Slider>
      {/* <section className="lg:hidden">
      {lifeStyleSliderData?.map((item,index) => {
              return (
                <SingleSlider item={item} key={item.id} index={index}/>
              )
              })}
        </section>    */}

    </main>
  )
}

export default VellTrending

