import React from 'react'

const SingleHeader = () => {
  return (
 <header className="flex flex-col-reverse xl:flex-row justify-between items-center mt-[7rem] xl:mt-[8rem] xl:px-[2rem] vellmagazine-header">
              <section className="xl:w-6/12 xl:p-5 text-center">
                <h1 className="font-500 text-[24px] py-2 xl:py-0 xl:text-[50px] font-serif xl:leading-[3rem] mb-[1rem]">
                  {item.contentHeader}
                </h1>
                <p className="text-[14px] my-3 px-5 xl-px-0 ">
                  {item.content
                    .slice(17, 350)
                    .replace(/<.?p[^>]*>/g, '')
                    .replace(/<.?h.?[^>]*>/g, '')}
                  ...
                  {item.content.startsWith('<p')
                    ? item.content
                        .slice(17, 350)
                        .replace(/<.?p[^>]*>/g, '')
                        .replace(/<.?h.?[^>]*>/g, '')
                    : item.content
                        .slice(4, 350)
                        .replace(/<.?p[^>]*>/g, '')
                        .replace(/<.?h.?[^>]*>/g, '')}
                  ...
                </p>
                <button
                  className=" w-[130px] py-2 mt-1 "
                  onClick={() => navigate(`/article/${item.id}`)}
                >
                  See more
                </button>
              </section>
              <img
                src={item.img}
                alt="vellMagazineHeader"
                className="xl:w-6/12 xl:p-5 w-full max-w-[628px] "
              />
            </header>  )
}

export default SingleHeader