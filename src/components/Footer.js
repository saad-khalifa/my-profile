import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    {/* معلومات الحقوق والتصميم */}
                    <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
                    <p>
                        Design: <a href="/#section2" target="_blank" rel="noopener noreferrer">Saad khalifa</a>
                    </p>

                    {/* معلومات الاتصال */}
                    <div className="contact-info">
                        <p><strong>Phone:</strong> <a href="tel:+963964367942">0964367942</a></p>
                        <p><strong>Email:</strong> <a href="mailto:saadkh55.net@gmail.com">saadkh55.net@gmail.com</a></p>
                    </div>

                    {/* أيقونات التواصل الاجتماعي */}
                    <div className="social-icons">
                        <a href="https://www.facebook.com/saad.al.khalifa.705540" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/saad_khalifa_12221?igsh=MXM2a2VqY29kbDNnYw==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} className="social-icon" />
                        </a>
                        <a href="https://wa.me/+963964367942r" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={24} className="social-icon" />
                        </a>
                        <a href="https://t.me/Wew12221" target="_blank" rel="noopener noreferrer">
                            <FaTelegram size={24} className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
