import React from 'react'
import { useNavigate } from 'react-router-dom'
import VellNavbar from '../VellMagazine/VellNavbar'
import { articles } from '../../utils/vellMagazineData'
import ArticleMainHeader from './ArticleMainHeader'
import moment from 'moment'

const Today = () => {
  const navigate=useNavigate()
  const today=new Date()

  const todaysArticleList=articles.filter(item=>item.date==moment(today).format("LL"))

  return (
    <> 
    <VellNavbar/>
    
    {/* <div className='mt-[120px] px-9 flex gap-8 justify-start flex-wrap container m-auto py-5'> */}
    <div className='mt-[120px] grid gap-x-8 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-9 m-auto py-5 justify-center max-w-[1400px]'>
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

export default Today