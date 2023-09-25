import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets';

const Navbar = () => {
  // useState, který kontroluje jakou máme zrovna polohu na stránce
  const [active, setActive] = useState("");

  const [toggle, setToggle] = useState(false);

  return (
    <nav 
      className={`${styles.paddingX} 
      w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => { 
            setActive("");
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
          Gweb &nbsp;
          <span className="sm:block hidden" >| Web Design</span>
          </p>
        </Link>
{/* Navbar při normální šířce okna  */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => 
            <li 
              key={link.id}
              className={`${
                active === link.title 
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {/* href každého linku nastavujeme skrze dynamický string na importované proměnné z navLink (procházíme pomocí map) */}
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )}
        </ul>
{/* Navbar při malé šířce okna */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            // pokud je toggle true (menu je otevřené), tak je img cross a false je menu
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />
          <div 
            className={`${!toggle ? 'hidden' : 'flex'} 
            p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}>
            <ul 
              className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => 
                <li 
                  key={link.id}
                  className={`${
                    active === link.title 
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle); // po kliknutí na odkaz se nám okno navbaru zavře
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )}
            </ul>    
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar