import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Gửi email qua EmailJS
        emailjs
            .sendForm('dangquangky', 'template_ottggjb', e.target as HTMLFormElement, 'yrdB-a2rfgXP4YmdP')
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    alert('Your message has been sent!');
                },
                (error) => {
                    console.log('Error sending email:', error.text);
                    alert('Failed to send message. Please try again later.');
                }
            );

        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-lg mx-auto p-6 mt-10 shadow-lg rounded-lg bg-white dark:bg-gray-800">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-black dark:border-gray-600 dark:focus:ring-blue-400 text-black"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-black dark:border-gray-600 dark:focus:ring-blue-400 text-black"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-black dark:border-gray-600 dark:focus:ring-blue-400 text-black"
                    ></textarea>
                </div>
                <button type="submit" className="w-full py-3 mt-4 bg-blue-500 font-semibold rounded-md hover:bg-blue-600 transition dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
