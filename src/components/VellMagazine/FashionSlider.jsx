// import { trendingData } from "../../utils/vellMagazineData"
import FashionSingleSlider from "./FashionSingleSlider"
import Slider from "react-slick";
import { articles } from "../../utils/vellMagazineData";
import LeftArrow from "./VellTrendingLeftArrow";
import RightArrow from "./VellTrendingRightArrow";

const VellTrending = () => {

  //const trendingData=articles?.filter((item) => item.theme == 'trending').reverse()
  const fashionSliderData=articles?.filter(item=>item.topics[0]=="FASHION & BEAUTY")
  const reorderedFashionSliderData = fashionSliderData.reverse();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <h1 className="text-center font-500 font-serif text-4xl pt-1 pb-2 italic ">FASHION & BEAUTY</h1>
    <Slider {...settings} className="container m-auto px-2 hidden lg:block ">
                {reorderedFashionSliderData?.map((item,index) => {
              return (
                <ul className="m-auto" key={item.id}>
                <li className="list-unstyled mx-1 "><FashionSingleSlider item={item}  index={index}/></li>
                </ul>
                );
              })}
      </Slider>
      {/* <section className="lg:hidden">
      {fashionSliderData?.map((item,index) => {
              return (
                <SingleSlider item={item} key={item.id} index={index}/>
              )
              })}
        </section>    */}

    </main>
  )
}

export default VellTrending