import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { LeadFormData, LeadFormErrors } from '../types';
import { submitLead } from '../services/leadService';
import '../styles/form.css';

interface LeadFormProps {
  initialTargetTech?: string;
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialTargetTech = '', onSuccess }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    currentTechnology: '',
    yearsOfExperience: '',
    targetTechnology: initialTargetTech || '',
    message: ''
  });

  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const errs: LeadFormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || phoneDigits.length < 8) {
      errs.phone = 'Please provide a valid contact number (at least 8 digits).';
    }

    if (!formData.currentTechnology.trim()) {
      errs.currentTechnology = 'Please specify your current technology or stack.';
    }

    if (!formData.yearsOfExperience) {
      errs.yearsOfExperience = 'Please select your professional experience range.';
    }

    if (!formData.targetTechnology) {
      errs.targetTechnology = 'Please specify or select your target technology area.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      const res = await submitLead(formData);
      if (res.success && res.leadId) {
        setSubmittedLeadId(res.leadId);
        if (onSuccess) onSuccess();
      } else {
        setServerError(res.error || 'Failed to submit form. Please check your connection.');
      }
    } catch {
      setServerError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmittedLeadId(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      currentTechnology: '',
      yearsOfExperience: '',
      targetTechnology: '',
      message: ''
    });
    setErrors({});
  };

  if (submittedLeadId) {
    return (
      <div className="lead-form-card success-state" role="status" aria-live="polite">
        <div className="success-icon-wrap">
          <CheckCircle2 size={36} />
        </div>
        <h3>Inquiry Received</h3>
        <p>
          Thank you, <strong>{formData.fullName}</strong>. Your transition profile summary has been registered under reference <strong>{submittedLeadId}</strong>.
        </p>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          A TalentTrivo counselor will review your current background and reach out within 1 business day to discuss suitable transition pathways.
        </p>
        <button type="button" onClick={resetForm} className="btn btn-outline-primary btn-sm">
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form-card" onSubmit={handleSubmit} noValidate>
      {serverError && (
        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#fef2f2',
            color: 'var(--color-danger)',
            borderRadius: '8px',
            marginBottom: '1.25rem',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          role="alert"
        >
          <AlertCircle size={18} />
          <span>{serverError}</span>
        </div>
      )}

      {/* Anti-spam honeypot field (hidden from genuine users) */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="hpWebsite">Leave this field blank</label>
        <input
          type="text"
          id="hpWebsite"
          name="hpWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            placeholder="e.g. John Doe"
            value={formData.fullName}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <span id="fullName-error" className="form-error">
              <AlertCircle size={14} /> {errors.fullName}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Work or Personal Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="e.g. john@example.com"
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className="form-error">
              <AlertCircle size={14} /> {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Contact Number <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            placeholder="e.g. +91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className="form-error">
              <AlertCircle size={14} /> {errors.phone}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="yearsOfExperience" className="form-label">
            Years of Experience <span className="required">*</span>
          </label>
          <select
            id="yearsOfExperience"
            name="yearsOfExperience"
            className={`form-control ${errors.yearsOfExperience ? 'is-invalid' : ''}`}
            value={formData.yearsOfExperience}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.yearsOfExperience}
            aria-describedby={errors.yearsOfExperience ? 'years-error' : undefined}
          >
            <option value="">Select experience range</option>
            <option value="1-3">1 to 3 Years</option>
            <option value="3-5">3 to 5 Years</option>
            <option value="5-8">5 to 8 Years</option>
            <option value="8-12">8 to 12 Years</option>
            <option value="12+">12+ Years (Senior / Leadership)</option>
          </select>
          {errors.yearsOfExperience && (
            <span id="years-error" className="form-error">
              <AlertCircle size={14} /> {errors.yearsOfExperience}
            </span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="currentTechnology" className="form-label">
            Current Technology / Primary Stack <span className="required">*</span>
          </label>
          <input
            type="text"
            id="currentTechnology"
            name="currentTechnology"
            className={`form-control ${errors.currentTechnology ? 'is-invalid' : ''}`}
            placeholder="e.g. Java Monoliths, Salesforce, QA/Testing"
            value={formData.currentTechnology}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.currentTechnology}
            aria-describedby={errors.currentTechnology ? 'currentTech-error' : undefined}
          />
          {errors.currentTechnology && (
            <span id="currentTech-error" className="form-error">
              <AlertCircle size={14} /> {errors.currentTechnology}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="targetTechnology" className="form-label">
            Target Technology <span className="required">*</span>
          </label>
          <select
            id="targetTechnology"
            name="targetTechnology"
            className={`form-control ${errors.targetTechnology ? 'is-invalid' : ''}`}
            value={formData.targetTechnology}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.targetTechnology}
            aria-describedby={errors.targetTechnology ? 'targetTech-error' : undefined}
          >
            <option value="">Select target area</option>
            <option value="I am not sure yet">I am not sure yet (Need Counselor Advice)</option>
            <option value="Cloud Architecture (AWS / Azure / GCP)">Cloud Architecture (AWS / Azure / GCP)</option>
            <option value="Cloud Data Engineering & Analytics">Cloud Data Engineering & Analytics</option>
            <option value="DevOps & Platform Engineering">DevOps & Platform Engineering</option>
            <option value="Cloud-Native Java & Microservices">Cloud-Native Java & Microservices</option>
            <option value="Full-Stack Engineering (Node / TypeScript)">Full-Stack Engineering (Node / TypeScript)</option>
            <option value="AI / Machine Learning Engineering">AI / Machine Learning Engineering</option>
          </select>
          {errors.targetTechnology && (
            <span id="targetTech-error" className="form-error">
              <AlertCircle size={14} /> {errors.targetTechnology}
            </span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Brief Message or Specific Career Goals (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          rows={3}
          placeholder="Tell us a little about your transition goals, target companies, or specific questions..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-lg"
        style={{ width: '100%', marginTop: '0.75rem' }}
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Reviewing details...</span>
          </>
        ) : (
          <>
            <span>Submit Transition Inquiry</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '1rem', marginBottom: 0 }}>
        Your information is secure. We use your details strictly to assess career transition pathways. No spam or third-party sharing.
      </p>
    </form>
  );
};
