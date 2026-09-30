import { LeadFormData } from '../types';

export interface LeadSubmissionResult {
  success: boolean;
  leadId?: string;
  error?: string;
}

export const submitLead = async (data: LeadFormData): Promise<LeadSubmissionResult> => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  try {
    const existing = localStorage.getItem('talenttrivo_leads');
    const leads = existing ? JSON.parse(existing) : [];
    
    const leadId = `LEAD-${Date.now().toString(36).toUpperCase()}`;
    const newLead = {
      ...data,
      id: leadId,
      status: 'NEW',
      submittedAt: new Date().toISOString()
    };

    leads.push(newLead);
    localStorage.setItem('talenttrivo_leads', JSON.stringify(leads));

    return {
      success: true,
      leadId
    };
  } catch (err) {
    return {
      success: false,
      error: 'Unable to submit your details right now. Please try again or email us directly.'
    };
  }
};
