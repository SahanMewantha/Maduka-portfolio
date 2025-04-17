import Image from 'next/image';
import React, { useState } from 'react';
import photo from "../../public/image_albems/Untitled design (1).png";
import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { TransitionEffect } from '@/components/TransitionEffect';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Head>
        <title>Contact Ceylon Enhance Photography</title>
        <meta name='description' content='Get in touch with Ceylon Enhance Photography for professional photography services'/>
      </Head>
      <TransitionEffect/>
      <main className='relative w-full min-h-screen dark:text-light'>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 dark:from-blue-900/30 dark:to-purple-900/30 z-10"></div>
          <Image 
            src={photo} 
            alt="Background"
            fill
            className="object-cover opacity-30 dark:opacity-20"
            priority
          />
        </div>
        
        <Layout className="relative z-10">
          <div className="container px-4 py-12 mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Get in Touch
              </h1>
              <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                We'd love to hear from you. Reach out for photography inquiries or bookings.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Contact Information */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-1 space-y-4"
              >
                <div className="p-5 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <a href="mailto:cylonenhance@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">
                        cylonenhance@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <a href="tel:+94077123456" className="text-blue-600 hover:underline dark:text-blue-400">
                        +94 077 123 4561
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>123 Photography Lane, Colombo</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Mon-Sat: 9AM - 6PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
                  <div className="flex space-x-3">
                    <a href="#" className="social-icon" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="social-icon" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2"
              >
                <form onSubmit={handleSubmit} className="p-6 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-5">Send a Message</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group mt-4">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group mt-4">
                    <label htmlFor="service">Service</label>
                    <select
                      id="service"
                      name="service"
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="portrait">Portrait Photography</option>
                      <option value="event">Event Photography</option>
                      <option value="commercial">Commercial Photography</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  
                  <div className="form-group mt-4">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      onChange={handleChange}
                      className="form-input"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
            
            {/* FAQs */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md">
                  <h3 className="font-medium mb-2">Service Areas</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">We provide photography services throughout Sri Lanka, with a focus on Colombo and surrounding areas.</p>
                </div>
                <div className="p-4 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md">
                  <h3 className="font-medium mb-2">Booking Timeline</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">We recommend booking at least 2-3 weeks in advance for regular sessions and 2-3 months for weddings.</p>
                </div>
                <div className="p-4 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-md">
                  <h3 className="font-medium mb-2">Session Duration</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Most portrait sessions last 1-2 hours, while event coverage ranges from 2-8 hours depending on your package.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Layout>
      </main>

      <style jsx>{`
        .form-group {
          @apply flex flex-col;
        }
        .form-group label {
          @apply mb-1 text-sm font-medium text-gray-700 dark:text-gray-300;
        }
        .form-input {
          @apply w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400;
        }
        .social-icon {
          @apply w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200;
        }
      `}</style>
    </>
  );
};

export default Contact;