import {IoChevronForwardOutline} from 'react-icons/io5';


const RightArrow = ({onClick}) => {
  return (
    <div className='flex relative w-fit left-[80rem] bottom-[13rem]'>
      <button className='text-[40px] font-bold' onClick={onClick}>
        <IoChevronForwardOutline/>

      </button>
    </div>
  )
}

export default RightArrow