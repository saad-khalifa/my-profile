import React from 'react';
import './Services.css';
import { FaDesktop, FaShoppingCart, FaSearch, FaGlobe, FaPlug, FaWrench } from 'react-icons/fa';

const Services = () => {
    return (
        <section id="section_3" className="services">
            <div className="container">
                <h2>Our Services</h2>
                <div className="row">
                    {/* Web Development Service */}
                    <div className="service">
                        <div className="service-icon">
                            <FaDesktop size={40} />
                        </div>
                        <h3>Web Development</h3>
                        <p>Build modern and responsive websites using **React** for the frontend and **Laravel** for the backend. Focus on performance, design, and user experience.</p>
                    </div>

                    {/* Ecommerce Solutions Service */}
                    <div className="service">
                        <div className="service-icon">
                            <FaShoppingCart size={40} />
                        </div>
                        <h3>Ecommerce Solutions</h3>
                        <p>Develop custom ecommerce websites with **React** and **Laravel**, including seamless payment integration, product management, and a user-friendly interface.</p>
                    </div>

                    {/* SEO Service */}
                    <div className="service">
                        <div className="service-icon">
                            <FaSearch size={40} />
                        </div>
                        <h3>SEO Optimization</h3>
                        <p>Enhance your website's visibility and rankings on Google using **SEO best practices** tailored for **React** and **Laravel** applications.</p>
                    </div>

                    {/* Branding Service */}
                    <div className="service">
                        <div className="service-icon">
                            <FaGlobe size={40} />
                        </div>
                        <h3>Branding</h3>
                        <p>Build a strong online presence with **custom branding solutions**, including logo design, color schemes, and creating a unique visual identity for your business.</p>
                    </div>

                    {/* API Integrations Service */}
                    <div className="service">
                        <div className="service-icon">
                            <FaPlug size={40} />
                        </div>
                        <h3>API Integrations</h3>
                        <p>Integrate external systems like payment gateways, email services, CRM tools, and more using **APIs** with **React** and **Laravel**. Includes building and integrating APIs into your system.</p>
                    </div>

                    {/* Maintenance & Support Service */}
                    <div className="service">
                        <div className="service-icon">
                            <FaWrench size={40} />
                        </div>
                        <h3>Maintenance & Support</h3>
                        <p>Provide maintenance and ongoing support for websites built with **React** and **Laravel**. This includes bug fixes, security updates, and continuous optimization.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
