import React, {useState} from "react";
import logo from '../assets/megaflix.png'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from "react-icons";

import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'

//import './Navbar.css'
import './Header.css';

export default ({ black }) => {
    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => setSidebar(!sidebar)

    return (
        <header className={black ? 'black' : ''}>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSideBar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSideBar}>
                        <li className="navbar-toggle">
                            <Link to='#' className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
            
            <div className="header--logo">
                <a href="/">
                    <img src={logo} alt="megaflix logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                </a>
            </div>
        </header>
    );
}