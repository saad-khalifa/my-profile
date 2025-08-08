import React, { useState, useEffect } from 'react';
import './Contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        website: false,
        branding: false,
        ecommerce: false,
        seo: false
    });

    const [messageSent, setMessageSent] = useState(false); // إضافة حالة جديدة لتخزين حالة إرسال الرسالة

    // عند تحميل الصفحة، نقوم بالتحقق إذا كانت هناك بيانات محفوظة في localStorage
    useEffect(() => {
        const savedData = localStorage.getItem('contactForm');
        if (savedData) {
            setFormData(JSON.parse(savedData)); // استرجاع البيانات من localStorage
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // حفظ البيانات في localStorage
        localStorage.setItem('contactForm', JSON.stringify(formData));

        // تغيير حالة إرسال الرسالة إلى true
        setMessageSent(true);

        // إعادة تعيين النموذج بعد الإرسال
        setFormData({
            name: '',
            email: '',
            message: '',
            website: false,
            branding: false,
            ecommerce: false,
            seo: false
        });

        console.log('Form submitted:', formData);
        // هنا يمكنك إضافة التعامل مع البيانات المرسلة مثل إرسالها إلى الخادم
    };

    return (
        <section id="section_5" className="contact">
            <div className="container">
                <h2>Contact Me</h2>
                
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <label>
                        <input
                            type="checkbox"
                            name="website"
                            checked={formData.website}
                            onChange={handleChange}
                        />
                        Websites
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="branding"
                            checked={formData.branding}
                            onChange={handleChange}
                        />
                        Branding
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="ecommerce"
                            checked={formData.ecommerce}
                            onChange={handleChange}
                        />
                        Ecommerce
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="seo"
                            checked={formData.seo}
                            onChange={handleChange}
                        />
                        SEO
                    </label>
                    <button type="submit">Send</button>
                </form>
                {messageSent && (
                    <div className="success-message">
                        <p>Your message has been sent successfully!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactForm;
