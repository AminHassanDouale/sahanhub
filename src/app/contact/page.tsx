'use client'
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('contacts')
                .insert([formData]);

            if (error) throw error;
            setFormData({ name: '', email: '', subject: '', message: '' });
            toast.success('Message sent successfully!');
        } catch (error) {
            toast.error('Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 px-4 min-h-screen flex items-center">
            <div className="max-w-2xl mx-auto w-full">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-6">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Get in Touch
                    </Badge>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Contact SAHAN HUB
                    </h2>
                    
                    <p className="text-neutral-400">
                        Ready to transform your business? Let's discuss how we can help you achieve your technology goals.
                    </p>
                </div>

                <div className="bg-neutral-900/50 p-8 rounded-xl border border-neutral-800">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <Input 
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="Your name"
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <Input 
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    placeholder="your@email.com"
                                    required 
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium mb-2">Subject</label>
                            <Input 
                                name="subject"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                placeholder="How can we help?"
                                required 
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <Textarea 
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                placeholder="Tell us about your project..."
                                className="h-32"
                                required 
                            />
                        </div>
                        
                        <Button type="submit" size="lg" className="w-full" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;