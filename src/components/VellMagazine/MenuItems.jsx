import { useState, useEffect, useRef } from 'react';
import Dropdown from './DropdownMenu';

import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { VellMagazineContext } from '../../context/VellMagazineContext';

const MenuItems = ({ items, depthLevel }) => {
  // const {setSubTopic}=useContext(VellMagazineContext)
  const navigate=useNavigate()
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();


  const handleMenu=(e)=>{
    navigate(`/articletopics`,{state:e.target.innerText})
    // setSubTopic(e.target.innerText)
    // console.log(e.target.innerText)
  }

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  return (
    <li
      className="menu-items font-bold  "
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={(e)=>{handleMenu(e);closeDropdown(e)}}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            className="text-[13px] bg-transparent whitespace-nowrap liBtn"
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              (items.title).toUpperCase()
            ) : (
              <Link to={items.url}
              >{(items.title).toUpperCase()}</Link>
            )}

            {/* {depthLevel > 0 &&
            window.innerWidth < 960 ? null : depthLevel > 0 &&
              window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )} */}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{(items.title).toUpperCase()}</Link>
      )}
    </li>
  );
};

export default MenuItems;