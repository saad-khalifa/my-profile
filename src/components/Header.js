import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="site-header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">

                    {/* زر التبديل في الجوال */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded={menuOpen ? 'true' : 'false'} 
                        aria-label="Toggle navigation" 
                        onClick={toggleMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* محتويات الـ Navbar */}
                    <div className="d-flex align-items-center justify-content-between w-100">
                        {/* الشعار */}
                        <a href="/" className="navbar-brand mx-auto mx-lg-0 ml-0">My Portfolio</a>

                        {/* معلومات الاتصال */}
                        <div className="d-lg-flex align-items-center d-none ms-auto">
                            <i className="navbar-icon bi-telephone-plus me-3"></i>
                            <a className="custom-btn btn" href="#section_5">0964367942</a>
                        </div>
                    </div>

                    {/* قائمة الروابط */}
                    <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-lg-5">
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_5">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_4">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_3">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_2">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="#section_1">Home</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;
