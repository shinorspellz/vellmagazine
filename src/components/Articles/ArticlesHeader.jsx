import React, { useContext } from 'react'
import {  useLocation } from 'react-router-dom'
import { articles } from '../../utils/vellMagazineData'
import VellNavbar from '../VellMagazine/VellNavbar'
import ArticleMainHeader from './ArticleMainHeader'
import Footer from '../Footer'
import { VellMagazineContext } from '../../context/VellMagazineContext'

const ArticlesHeader = () => {
    const {state}=useLocation()
    const {scrollToTop}=useContext(VellMagazineContext)
    const newArticleList=articles.filter(item=>item.month==state)


  return (
    <> 
    <VellNavbar/>
    
    {/* <div className='mt-[120px] px-9 flex gap-8 justify-start flex-wrap container m-auto py-5'> */}
    <div className='mt-[120px] grid gap-x-8 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-9 m-auto py-5 justify-center max-w-[1400px]' >
        {
            newArticleList.map((item,index)=>{
                return(
                    <div key={index} className="flex justify-center" >
                          <ArticleMainHeader item={item}  />
                    </div>
                )
            })
        }
    </div>
    <Footer/>

    </>
   
  )
}

export default ArticlesHeader