import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi"

const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <div className={`main-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className={`header ${scrolled ? "header-scrolled" : ""}`}>
                    <nav className="navbar" ref={navRef}>
                        <button className='nav-btn nav-close' onClick={showNavbar}>
                            <HiX />
                        </button>
                        <ul className="nav-links">
                            <li>
                                <Link to="/" onClick={showNavbar}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/features" className="nav-link" onClick={showNavbar}>
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="nav-link" onClick={showNavbar}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button className='nav-btn  nav-flex' onClick={showNavbar}>
                        <HiOutlineMenuAlt1 />
                    </button>
                    <div className='logo'>
                        <h1 style={{ margin: '0px' }}><Link to="/">
                            URBAN
                        </Link></h1>
                    </div>
                    <div className='language'>
                        <ul>
                            <li>
                                <Link to="/lang" className="nav-link">
                                    EN
                                </Link>
                            </li>
                            <li>
                                <Link to="/lang" className="nav-link">
                                    TR
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
