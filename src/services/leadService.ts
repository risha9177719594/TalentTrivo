import { LeadFormData } from '../types';
import { config } from '../config/env';

export interface LeadSubmissionResult {
  success: boolean;
  leadId?: string;
  error?: string;
  details?: Record<string, string>;
}

/**
 * Submits lead data to the backend API endpoint (POST /api/leads).
 * Persists directly in the application database.
 * No personal information is stored in localStorage.
 */
export const submitLead = async (data: LeadFormData): Promise<LeadSubmissionResult> => {
  const url = `${config.apiBaseUrl}/api/leads`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        currentTechnology: data.currentTechnology,
        yearsOfExperience: data.yearsOfExperience,
        targetTechnology: data.targetTechnology,
        message: data.message
      })
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to submit inquiry. Please review your details.',
        details: result.details
      };
    }

    return {
      success: true,
      leadId: result.leadId
    };
  } catch (err) {
    console.error('Network error during lead submission:', err);
    return {
      success: false,
      error: 'Unable to connect to the server. Please check your internet connection or email support@talenttrivo.com.'
    };
  }
};
