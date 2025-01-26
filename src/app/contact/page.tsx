'use client'
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

const ContactPage = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '', 
      message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      try {
          const { error } = await supabase
              .from('contacts')
              .insert([formData]);

          if (error) throw error;
          setFormData({ name: '', email: '', subject: '', message: '' });
          setMessage('Message sent successfully!');
      } catch (error) {
          setMessage('Failed to send message');
      } finally {
          setLoading(false);
      }
  };

   return (
       <section className="py-20 px-4 min-h-screen flex items-center">
           <div className="max-w-2xl mx-auto w-full">
               <div className="text-center mb-16">                    
                   <h2 className="text-3xl md:text-4xl font-bold mb-6">
                       Contact SAHAN HUB
                   </h2>
                   
                   <p className="text-neutral-400">
                       Let&apos;s discuss how we can help you achieve your technology goals.
                   </p>
               </div>

               {message && (
                   <div className="mb-4 text-center text-green-500">
                       {message}
                   </div>
               )}

               <div className="bg-neutral-900/50 p-8 rounded-xl border border-neutral-800">
                   <form onSubmit={handleSubmit} className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                               <label className="block text-sm font-medium mb-2">Name</label>
                               <input 
                                   name="name"
                                   value={formData.name}
                                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                                   placeholder="Your name"
                                   className="w-full p-2 rounded border bg-neutral-800"
                                   required 
                               />
                           </div>
                           <div>
                               <label className="block text-sm font-medium mb-2">Email</label>
                               <input 
                                   type="email"
                                   name="email"
                                   value={formData.email}
                                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                                   placeholder="your@email.com"
                                   className="w-full p-2 rounded border bg-neutral-800"
                                   required 
                               />
                           </div>
                       </div>
                       
                       <div>
                           <label className="block text-sm font-medium mb-2">Subject</label>
                           <input 
                               name="subject"
                               value={formData.subject}
                               onChange={(e) => setFormData({...formData, subject: e.target.value})}
                               placeholder="How can we help?"
                               className="w-full p-2 rounded border bg-neutral-800"
                               required 
                           />
                       </div>
                       
                       <div>
                           <label className="block text-sm font-medium mb-2">Message</label>
                           <textarea 
                               name="message"
                               value={formData.message}
                               onChange={(e) => setFormData({...formData, message: e.target.value})}
                               placeholder="Tell us about your project..."
                               className="w-full p-2 rounded border bg-neutral-800 h-32"
                               required 
                           />
                       </div>
                       
                       <button 
                           type="submit"
                           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
                           disabled={loading}
                       >
                           {loading ? 'Sending...' : 'Send Message'}
                       </button>
                   </form>
               </div>
           </div>
       </section>
   );
};

export default ContactPage;