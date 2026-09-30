export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface TransitionPath {
  id: string;
  from: string;
  to: string;
  category: string;
  description: string;
  keySkills: string[];
  sampleRoles: string[];
  relevance: string;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  currentTechnology: string;
  yearsOfExperience: string;
  targetTechnology: string;
  message: string;
}

export interface LeadFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  currentTechnology?: string;
  yearsOfExperience?: string;
  targetTechnology?: string;
  message?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface AICapability {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlights: string[];
}
