import {IoChevronForwardOutline} from 'react-icons/io5';


const RightArrow = ({onClick}) => {
  return (
    <div className='flex absolute right-[-30px] top-[50%] translate-y-[-50%] w-fit'>
      <button className='text-[40px] font-bold' onClick={onClick}>
        <IoChevronForwardOutline/>

      </button>
    </div>
  )
}

export default RightArrow