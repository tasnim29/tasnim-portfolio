// logic for big and smaller screen navbar
"use client"
import Nav from './Nav';
import MobileNav from './MobileNav';
import { useState } from 'react';

const ResponsiveNavbar = () => {
    const [showNav,setShowNav] = useState(false)
    const showNavHandler = ()=>{
        setShowNav(true)
    }
    const closeNavHandler = ()=>{
        setShowNav(false)
    }
    return (
        <div>
            <Nav openNav = {showNavHandler}></Nav>
            <MobileNav showNav = {showNav} closeNav = {closeNavHandler}></MobileNav>
        </div>
    );
};

export default ResponsiveNavbar;