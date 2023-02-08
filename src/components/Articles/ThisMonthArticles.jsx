import React from 'react'
import { useNavigate } from 'react-router-dom'
import VellNavbar from '../VellMagazine/VellNavbar'
import { articles } from '../../utils/vellMagazineData'
import ArticleMainHeader from './ArticleMainHeader'
import moment from 'moment'

const ThisMonthArticles = () => {
  const navigate=useNavigate()
  const month=new Date()
  const currentMonth=moment(month).format("LL").split(" ")[0]
  console.log(currentMonth)
  const todaysArticleList=articles.filter(item=>item.date.includes(currentMonth))
  console.log(todaysArticleList)

  return (
    <> 
    <VellNavbar/>
    
    {/* <div className='mt-[120px] px-9 flex gap-8 justify-start flex-wrap container m-auto py-5'> */}
    <div className='mt-[80px] lg:mt-[120px] grid gap-x-5 sm:gap-x-8 gap-y-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-9 m-auto py-5 justify-center max-w-[1400px]' >
        {
            todaysArticleList.map((item,index)=>{
                return(
                    <div key={index} className="flex justify-center">
                          <ArticleMainHeader item={item}  />
                    </div>
                )
            })
        }
   
    </div>
    </>
   
  )
}

export default ThisMonthArticles