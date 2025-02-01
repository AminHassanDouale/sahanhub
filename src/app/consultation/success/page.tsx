import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ConsultationSuccess() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Consultation Request Received</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Thank you for scheduling a consultation with SAHAN HUB. We will review your request 
          and contact you within 24 hours to confirm your appointment.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
          <Link href="/services">
            <Button>Explore Services</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}