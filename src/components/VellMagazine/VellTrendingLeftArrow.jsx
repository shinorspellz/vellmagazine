import {IoChevronBackOutline} from 'react-icons/io5';


const LeftArrow = ({onClick}) => {
  return (
    <div className='flex relative top-[15rem] right-[3rem] w-fit'>
      <button className='text-[40px] font-bold' onClick={onClick}>
        <IoChevronBackOutline/>

      </button>
    </div>
  )
}

export default LeftArrow