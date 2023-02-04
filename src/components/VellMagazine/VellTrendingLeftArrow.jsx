import {IoChevronBackOutline} from 'react-icons/io5';


const LeftArrow = ({onClick}) => {
  return (
    <div className='flex absolute left-[-30px] top-[50%] translate-y-[-50%] w-fit'>
      <button className='text-[40px] font-bold' onClick={onClick}>
        <IoChevronBackOutline/>

      </button>
    </div>
  )
}

export default LeftArrow