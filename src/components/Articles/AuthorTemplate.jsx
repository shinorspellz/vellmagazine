import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { articles } from '../../utils/vellMagazineData'
import VellNavbar from '../VellMagazine/VellNavbar'
import ArticleMainHeader from './ArticleMainHeader'

const AuthorTemplate = () => {
    const {state}=useLocation()
    const newArticleList=articles.filter(item=>item.author==state)
    
    useEffect(() => {
        window.scrollTo(0, 0);
     }, []);

  return (
    <> 
    <VellNavbar/>
    <h1 className='mt-[150px] text-center uppercase font-medium font-serif text-4xl authorTemplate'>Articles By {state}</h1>

    {/* <div className='mt-[120px] px-9 flex gap-8 justify-start flex-wrap container m-auto py-5'> */}
    <div className='mt-[30px] grid gap-x-8 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-9 m-auto py-5 justify-center max-w-[1400px]'>
        
        {
            newArticleList.map((item,index)=>{
                return(
                    <>
                          <ArticleMainHeader item={item} key={index} />
                    </>
                )
            })
        }
   
    </div>
    </>
   
  )
}


export default AuthorTemplate