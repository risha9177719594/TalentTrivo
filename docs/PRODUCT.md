# TalentTrivo — Product Definition

## 1. Product Purpose

TalentTrivo helps experienced professionals transition into new technology areas and obtain suitable employment opportunities.

The product digitizes the existing TalentTrivo agent workflow and progressively introduces AI and automation.

The initial product is an internal agent platform supported by a public lead-generation website.

---

# 2. Product Model

TalentTrivo consists of three major operational surfaces.

## Public Website

Purpose:

* Explain TalentTrivo
* Generate leads
* Capture enquiries
* Build trust
* Provide technology/career-transition information

## Agent Platform

Purpose:

* Manage leads
* Manage candidates
* Manage candidate information
* Manage resumes
* Track candidate lifecycle
* Record activities
* Manage opportunities and future career operations

## AI Intelligence Layer

Purpose:

* Analyze candidates
* Analyze technologies
* Analyze jobs
* Assist agents
* Generate resumes
* Generate learning paths
* Prepare candidates for interviews
* Identify relevant opportunities

---

# 3. Actors

## Visitor

Can:

* Browse website
* Read services
* Read technology/career information
* Submit an enquiry

## Lead

Can provide:

* Name
* Contact details
* Current technology
* Experience
* Resume
* Target technology, if known
* Other basic information

## Candidate

A registered lead who is being actively managed by TalentTrivo.

Candidate information includes:

* Personal information
* Professional experience
* Current technology
* Target technology
* Skills
* Education
* Certifications
* Projects
* Online profiles
* Resume

## Agent

Can:

* View leads
* Qualify leads
* Create/manage candidates
* Review candidate profiles
* Recommend target technologies
* Manage resumes
* Track activities
* Manage candidate status
* Record notes
* Support the candidate journey

## Admin

Can:

* Manage agents
* Manage technologies
* Manage candidates
* Manage configuration
* View operational information

---

# 4. Candidate Journey

The long-term journey is:

```text
LEAD
↓
LEAD QUALIFICATION
↓
CANDIDATE PROFILE
↓
CURRENT TECHNOLOGY
↓
CAREER TRANSITION ANALYSIS
↓
TARGET TECHNOLOGY
↓
MARKET RESEARCH
↓
CAREER PLAN
↓
RESUME REWRITE
↓
NAUKRI / LINKEDIN PROFILE PREPARATION
↓
JOB DISCOVERY
↓
JOB APPLICATIONS
↓
INTERVIEW
↓
INTERVIEW PREPARATION
↓
INTERVIEW
↓
FAIL / CLEAR
↓
PLACED
```

The MVP implements only the early operational portion of this journey.

---

# 5. Candidate Lifecycle

## MVP Lifecycle

```text
REGISTERED
    ↓
PROFILE_INCOMPLETE
    ↓
PROFILE_SUBMITTED
    ↓
UNDER_REVIEW
    ↓
ACTIVE
```

### REGISTERED

Candidate account has been created.

### PROFILE_INCOMPLETE

Required candidate information is missing.

### PROFILE_SUBMITTED

Candidate has submitted the required profile for review.

### UNDER_REVIEW

An agent/admin is reviewing the candidate.

### ACTIVE

Candidate is accepted into active TalentTrivo operations.

---

# 6. Future Candidate Lifecycle

The long-term lifecycle may become:

```text
ACTIVE
↓
TRANSITION_PLANNING
↓
LEARNING
↓
JOB_READY
↓
MARKETING
↓
APPLICATION
↓
INTERVIEW
↓
OFFER
↓
PLACED
↓
CLOSED
```

These statuses should not be implemented until the corresponding workflows exist.

---

# 7. Status vs Other Candidate State

Candidate status should not be used to represent every aspect of the candidate journey.

Keep separate concepts for:

* Candidate Status
* Profile Completion
* Resume Status
* Learning Status
* Application Status
* Interview Status

This prevents the candidate lifecycle from becoming one large status field.

---

# 8. Candidate Editing Rules

Candidates can edit:

* Personal information
* Professional information
* Skills
* Education
* Certifications
* Projects
* Online profiles
* Resume
* Target technology

Candidates cannot directly edit:

* System IDs
* Created timestamps
* Updated timestamps
* Candidate status
* Internal agent notes
* Internal flags
* Audit history

---

# 9. Target Technology Rules

Before profile submission:

The candidate can change the target technology.

After submission:

A target technology change is considered significant.

For the MVP:

```text
Target Technology Changed
        ↓
PROFILE_INCOMPLETE
        ↓
Candidate Resubmits
        ↓
PROFILE_SUBMITTED
        ↓
UNDER_REVIEW
```

This ensures that a significant change receives appropriate review.

---

# 10. Resume Rules

Candidates can replace their resume.

Every replacement should be recorded.

Important events include:

* RESUME_UPLOADED
* RESUME_REPLACED

A resume replacement after submission/review/activation may trigger a review depending on the implementation.

The original resume should not be silently overwritten if version history is implemented.

---

# 11. Profile Completeness

Profile completeness should be based only on mandatory MVP information.

Optional information should not prevent submission.

Examples of potentially optional information:

* GitHub
* Portfolio
* Certifications

The exact mandatory fields should be defined by the implementation backlog before development.

---

# 12. Agent Workflow

The initial agent workflow is:

```text
New Lead
   ↓
Review Lead
   ↓
Qualify Lead
   ↓
Create Candidate
   ↓
Review Candidate Profile
   ↓
Review Resume
   ↓
Identify Current Technology
   ↓
Identify Target Technology
   ↓
Activate Candidate
```

Future workflow:

```text
Active Candidate
   ↓
Career Transition Analysis
   ↓
Market Analysis
   ↓
Career Plan
   ↓
Resume Tailoring
   ↓
Job Discovery
   ↓
Applications
   ↓
Interview Preparation
   ↓
Interview
   ↓
Placement
```

---

# 13. Agent Workspace

The agent should have a central workspace showing:

* New leads
* Candidates requiring action
* Profiles awaiting review
* Recently updated candidates
* Follow-ups
* Candidate status
* Recent activities

The workspace should help an agent answer:

> "What do I need to work on today?"

---

# 14. Candidate Detail

A candidate detail page should eventually provide a unified view of:

## Overview

* Name
* Contact information
* Current technology
* Target technology
* Experience
* Status

## Professional Profile

* Experience
* Skills
* Education
* Certifications
* Projects

## Resume

* Current resume
* Resume history
* Resume status

## Career Transition

* Current technology
* Target technology
* Transition analysis
* Recommended learning path

## Jobs

* Relevant jobs
* Applications
* Job history

## Interviews

* Scheduled interviews
* Interview preparation
* Interview outcomes

## Activity Timeline

* Profile updates
* Resume uploads
* Status changes
* Agent notes
* Other important events

Not all sections need to exist in the MVP.

---

# 15. Candidate Timeline

The timeline should capture meaningful events.

Examples:

```text
PROFILE_CREATED
PROFILE_UPDATED
PROFILE_SUBMITTED
PROFILE_REVIEWED
STATUS_CHANGED
RESUME_UPLOADED
RESUME_REPLACED
TARGET_TECHNOLOGY_CHANGED
NOTE_ADDED
```

Timeline events should identify:

* Candidate
* Event type
* Actor
* Timestamp
* Relevant details

---

# 16. Technology Catalogue

Technology should be a managed entity.

A technology may contain:

* Name
* Description
* Category
* Status
* Skills
* Related technologies
* Market information
* Learning resources

The initial implementation should keep this simple.

AI market intelligence can be added later.

---

# 17. Career Transition Intelligence

Future AI capability.

The system should compare:

```text
Current Candidate Profile
        +
Current Technology
        +
Target Technology
        +
Market Requirements
```

The result may include:

* Transferable skills
* Skill gaps
* Required technologies
* Recommended learning areas
* Market demand
* Typical job requirements
* Resume positioning
* Suggested transition path

AI output should be presented as assistance to the agent, not as an unquestionable decision.

---

# 18. Resume Intelligence

Future AI capability.

The system should be able to:

1. Parse the candidate resume.
2. Understand experience and skills.
3. Compare the profile with the target technology.
4. Identify transferable experience.
5. Identify gaps.
6. Rewrite the resume for the target technology.
7. Tailor the resume to specific job postings.

AI must not invent experience, projects, employers, certifications or skills that the candidate does not have.

---

# 19. Job Intelligence

Future capability.

TalentTrivo should eventually collect relevant job postings.

A job record may contain:

* Job title
* Company
* Technology
* Skills
* Experience requirement
* Location
* Work mode
* Job description
* Source
* Posting URL
* Date discovered

The system should preserve the original job information where practical.

---

# 20. Company Intelligence

Future capability.

Companies should become reusable entities.

A company may contain:

* Name
* Website
* Industry
* Locations
* Hiring history
* Relevant technologies
* Known jobs
* HR contacts

---

# 21. HR Intelligence

Future capability.

TalentTrivo agents may capture HR information during their work.

The platform should eventually maintain reusable:

* HR contacts
* Companies
* Roles
* Technology associations
* Previous interactions
* Source information

This allows future candidates to benefit from historical TalentTrivo knowledge.

---

# 22. Applications

Future capability.

An application should connect:

```text
Candidate
    +
Job
    +
Application
```

Potential information:

* Applied date
* Application source
* Resume version
* Application status
* Agent
* Notes
* Outcome

---

# 23. Interviews

Future capability.

An interview should connect:

```text
Candidate
    +
Company
    +
Job
    +
Interview
```

Potential information:

* Interview date
* Round
* Interview type
* Interview status
* Preparation notes
* Outcome
* Feedback

---

# 24. Learning Plans

Future capability.

A learning plan should be generated from:

```text
Candidate Profile
        +
Target Technology
        +
Skill Gap
        +
Job Market Requirements
```

The plan may contain:

* Topics
* Skills
* Resources
* Projects
* Suggested sequence
* Target readiness

The learning plan should support the candidate journey but TalentTrivo does not initially need to become a full LMS.

---

# 25. Human-in-the-Loop AI

AI should initially assist the agent.

Examples:

```text
AI analyzes resume
       ↓
AI produces suggestions
       ↓
Agent reviews
       ↓
Agent approves/edits
       ↓
Final information saved
```

Important decisions should not silently become autonomous actions.

---

# 26. MVP Scope

The MVP should focus on:

### Public

* Website foundation
* Lead capture
* Basic career-transition information

### Agent

* Authentication
* Agent dashboard
* Lead management
* Candidate creation
* Candidate profile
* Candidate search
* Candidate detail
* Resume management
* Technology catalogue
* Candidate lifecycle
* Candidate timeline
* Notes/activity foundation

### Platform

* Authorization
* Data persistence
* Validation
* Audit foundation
* Responsive UI

---

# 27. Phase 2 — AI Career Intelligence

Potential scope:

* Resume parsing
* Resume intelligence
* Technology market intelligence
* Career transition analysis
* Job discovery
* Job-posting analysis
* Resume tailoring
* Learning-path generation
* Interview preparation

---

# 28. Phase 3 — Career Operations

Potential scope:

* Job database
* Company database
* HR contacts
* Application tracking
* Interview management
* Candidate-job matching
* Operational automation

---

# 29. Phase 4 — Intelligence Network

Potential scope:

* Hiring intelligence
* Company hiring patterns
* HR relationship intelligence
* Candidate-job intelligence
* Historical outcome analysis
* Reusable market intelligence

---

# 30. Explicitly Out of Scope Initially

Do not implement unless added to the backlog:

* Autonomous career agent
* Autonomous job applications
* Automated Naukri login/operation
* Automated LinkedIn login/operation
* Employer marketplace
* Recruiter portal
* Full LMS
* AI tutor
* Mobile application
* Advanced assessments
* Complex analytics
* Autonomous candidate communication

---

# 31. Product Principle

The product should evolve in this order:

```text
Capture
↓
Structure
↓
Track
↓
Understand
↓
Assist
↓
Automate
↓
Learn
```

The first product must be operationally useful before advanced AI is added.
