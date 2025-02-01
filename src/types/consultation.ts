// src/types/consultation.ts
export interface ConsultationFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    date: string;
    time: string;
    message: string;
    service: string;
  }
  
  export type ConsultationStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
  
  export interface Consultation extends ConsultationFormData {
    id: string;
    created_at: string;
    status: ConsultationStatus;
    updated_at: string;
  }