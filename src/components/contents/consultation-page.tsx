"use client";

import * as React from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Building } from 'lucide-react';
import AnimationContainer from '@/components/utils/animation-container';
import { useRouter } from 'next/navigation';

const services = [
  "Custom Software Development",
  "Data Analytics & BI",
  "AI & Machine Learning",
  "Digital Transformation",
  "Cloud Solutions",
  "Cybersecurity"
] as const;

const INPUT_CLASSES = 
  "w-full pl-10 pr-4 py-2 border border-border/60 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary";

const ConsultationPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const formRef = React.useRef<HTMLFormElement>(null);
  const router = useRouter();

  // Get current date and time in EAT (UTC+3)
  const getEATDateTime = () => {
    const now = new Date();
    const eatOffset = 3; // EAT is UTC+3
    now.setHours(now.getHours() + eatOffset);
    return now;
  };

  // Format date as YYYY-MM-DD
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Format time as HH:mm
  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Get default date (tomorrow)
  const getDefaultDate = () => {
    const tomorrow = getEATDateTime();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatDate(tomorrow);
  };

  // Get default time (current time rounded to next 15 minutes)
  const getDefaultTime = () => {
    const now = getEATDateTime();
    const minutes = now.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 15) * 15;
    now.setMinutes(roundedMinutes);
    return formatTime(now);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      date: formData.get('date'),
      time: formData.get('time'),
      message: formData.get('message'),
      service: formData.get('service'),
    };

    try {
      const { error } = await supabase
        .from('consultations')
        .insert([
          {
            ...data,
            status: 'pending',
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) throw error;
      
      setSubmitStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
      
      setTimeout(() => {
        router.push('/consultation/success');
      }, 2000);
    } catch (error: any) {
      console.error('Error submitting consultation request:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An error occurred while submitting your request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <AnimationContainer className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Schedule a Consultation</h1>
          <p className="text-xl text-muted-foreground">
          Let&apos;s discuss how SAHAN HUB can help transform your business

</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-background border border-border/60 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className={INPUT_CLASSES}
                    placeholder="John Doe"
                    minLength={2}
                    maxLength={100}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    className={INPUT_CLASSES}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    className={INPUT_CLASSES}
                    placeholder="+253 77-XX-XX-XX"
                    pattern="[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}"
                    title="Please enter a valid phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="company">
                  Company Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <Building className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className={INPUT_CLASSES}
                    placeholder="Your Company"
                    maxLength={100}
                  />
                </div>
              </div>
            </div>

            {/* Consultation Details */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="service">
                  Service Interest *
                </label>
                <select
                  required
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-border/60 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="date">
                  Preferred Date *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <input
                    required
                    type="date"
                    id="date"
                    name="date"
                    defaultValue={getDefaultDate()}
                    min={getDefaultDate()}
                    className={INPUT_CLASSES}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  East Africa Time (EAT)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="time">
                  Preferred Time *
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                  </div>
                  <input
                    required
                    type="time"
                    id="time"
                    name="time"
                    defaultValue={getDefaultTime()}
                    step={900} // 15 minutes intervals
                    className={INPUT_CLASSES}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  All times in East Africa Time (EAT)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-muted-foreground">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className={INPUT_CLASSES}
                    placeholder="Tell us about your project..."
                    maxLength={500}
                  />
                </div>
              </div>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-md">
              Thank you! Your consultation request has been submitted successfully. Redirecting...
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-md">
              {errorMessage}
            </div>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
            </Button>
          </div>
        </form>
      </AnimationContainer>
    </div>
  );
};

export default ConsultationPage;