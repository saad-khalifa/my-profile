import React from 'react';
import './About.css';  // ستحتاج إلى إضافة بعض التنسيقات في هذا الملف

const About = () => {
  return (
    <section id="section_2" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img 
              src="../images/photo_2025-06-01_13-10-27 copy.gif" 
              alt="Your Image" 
              className="about-img" 
            />
          </div>
          <div className="about-text">
            <h3>!Hi, I'm Saad Khalifa</h3>
            <p>
              I’m a passionate Full-Stack Developer with extensive experience in building modern and dynamic web applications. I specialize in both React.js for front-end development and Laravel for back-end development, allowing me to create seamless and scalable applications from start to finish.
            </p>
            <p>
              Over the years, I've worked on numerous projects such as Haraj-syria and CarBazar where I successfully integrated powerful features, improved user experience, and optimized overall performance. I’m always excited to solve complex problems and bring innovative solutions to life.
            </p>
            <div className="skills">
              <h4>:My Skills</h4>
              <ul>
                <li>Front-End Development: React.js, JavaScript, HTML5, CSS3, Redux, Bootstrap</li>
                <li>Back-End Development: Laravel, PHP, MySQL, API Integration</li>
                <li>Version Control: Git, GitHub</li>
                <li>Database Management: MySQL, PostgreSQL</li>
                <li>Responsive Design (Mobile First)</li>
                <li>Web Performance Optimization</li>
                <li>SEO Optimization</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            {/* رابط تحميل السيرة الذاتية */}
            <div className="cv-download">
              <a href="../images/saadkhalifa.pdf" download className="download-btn">
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
