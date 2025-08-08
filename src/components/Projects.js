import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="section_4" className="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="row">
                    {/* Haraaj Syria Project */}
                    <div className="project col-lg-4 col-md-6 col-12">
                        <a href="https://haraj-sy.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="../images/لقطة شاشة_7-8-2025_22470_haraj-sy.netlify.app.jpeg"
                                alt="Haraaj Syria"
                                className="project-image img-fluid"
                            />
                            <div className="project-info">
                                <h3>Haraaj Syria</h3>
                                <p>A platform for buying and selling products in Syria.</p>
                            </div>
                        </a>
                    </div>

                    {/* CarBazar Project */}
                    <div className="project col-lg-4 col-md-6 col-12">
                        <a href="https://cars-bazar.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="../images/لقطة شاشة_7-8-2025_224620_cars-bazar.netlify.app.jpeg"
                                alt="CarBazar"
                                className="project-image img-fluid"
                            />
                            <div className="project-info">
                                <h3>CarBazar</h3>
                                <p>A website for buying and selling cars with advanced search filters.</p>
                            </div>
                        </a>
                    </div>

                    {/* Add other projects here */}

                </div>
            </div>
        </section>
    );
}

export default Projects;
