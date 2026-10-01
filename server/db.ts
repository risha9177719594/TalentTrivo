import { localLeadRepository, LocalLeadRepository, getLocalDatabase } from './repositories/localLeadRepository';
import { LeadRecord } from './types';

export { localLeadRepository, LocalLeadRepository };
export const getDatabase = getLocalDatabase;

export const insertLead = (lead: LeadRecord) => localLeadRepository.insertLead(lead);
export const getLeadByReference = (refId: string) => localLeadRepository.getLeadByReference(refId);
export const getAllLeads = () => localLeadRepository.getAllLeads();
