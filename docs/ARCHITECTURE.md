# TalentTrivo — Architecture

## 1. Architecture Objective

The TalentTrivo architecture should support the gradual evolution from a manual agent workflow into an AI-assisted career operations platform.

The architecture should prioritize:

* Simplicity
* Maintainability
* Security
* Clear ownership of data
* Incremental development
* Human-in-the-loop operations
* Future AI integration

Do not introduce infrastructure or services before they are required.

---

# 2. Logical Architecture

The target architecture is:

```text
                    TalentTrivo Website
                           │
                           ▼
                    TalentTrivo App
                           │
                           ▼
                    Application API
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
           D1             R2          External APIs
         Database       Files         / Services
             │
             │
             ▼
       TalentTrivo Data
             │
             ▼
       AI / n8n Workflows
```

The exact implementation technology should be confirmed during project setup.

---

# 3. Application Architecture

Prefer a single application initially.

Do not create separate frontend applications for:

* Candidate
* Agent
* Admin

unless the implementation later demonstrates a real need.

Use role-based experiences within the same application.

Suggested structure:

```text
src/
├── pages/
│   ├── public/
│   ├── candidate/
│   └── agent/
│
├── components/
│
├── services/
│
├── api/
│
├── hooks/
│
├── types/
│
└── ...
```

The exact structure may evolve with the implementation.

---

# 4. Frontend

The preferred frontend direction is:

* React
* TypeScript
* Vite

The frontend is responsible for:

* User interface
* Form handling
* Client-side validation
* Navigation
* Displaying data
* Calling application APIs

Business-critical authorization must not rely on frontend checks.

---

# 5. Backend / API

The backend/API should be responsible for:

* Authentication
* Authorization
* Business rules
* Data validation
* Database operations
* File access control
* Audit events
* Integration with external services

The frontend should not directly bypass the application API for protected business operations.

---

# 6. Database

The application database is the system of record.

Candidate and operational information should be stored in the application database.

Initial core entities include:

```text
leads
candidates
agents
technologies
skills
resumes
companies
hr_contacts
jobs
applications
interviews
learning_plans
activities
status_history
audit_events
```

Only create tables/entities when required by the current backlog.

---

# 7. Data Ownership

## Application Database

Owns:

* Candidate records
* Lead records
* Candidate statuses
* Technology catalogue
* Job records captured by TalentTrivo
* Company records
* HR contacts
* Applications
* Interviews
* Activities
* Audit information

## Object Storage

Use object storage for:

* Resume files
* Candidate documents
* Other uploaded files
* Future generated documents

Files should not be stored directly inside database records.

The database should store references/metadata.

---

# 8. n8n

n8n should be treated as an orchestration layer.

Potential responsibilities:

* Trigger AI workflows
* Process job searches
* Enrich records
* Send notifications
* Run scheduled workflows
* Connect external systems
* Coordinate multi-step AI processing

n8n should not become the source of truth for candidate state.

---

# 9. AI Layer

AI should be used for tasks requiring interpretation or generation.

Potential AI responsibilities:

* Resume parsing
* Resume analysis
* Technology transition analysis
* Job description analysis
* Resume generation
* Learning-plan generation
* Interview preparation
* Candidate-job matching
* Summarization

AI output should normally be stored only after appropriate validation or approval.

---

# 10. AI Safety and Data Integrity

AI must not invent candidate information.

The system must not fabricate:

* Employment history
* Skills
* Projects
* Certifications
* Job titles
* Companies
* Years of experience

AI-generated resume content should be based on verified candidate information.

Where appropriate:

```text
Candidate Data
      ↓
AI Processing
      ↓
Draft
      ↓
Agent Review
      ↓
Approved Data
```

---

# 11. External Platforms

External platforms may include:

* Naukri
* LinkedIn
* Job portals
* Job search sources
* Email
* Messaging platforms
* AI providers

These are external systems.

Do not assume:

* Their APIs are always available.
* Their data is always accessible.
* Their data is always current.
* Their terms permit automation.

Any external integration must be evaluated separately before implementation.

---

# 12. Authentication

Authentication must be implemented server-side.

The system should distinguish between:

* Candidate
* Agent
* Admin

Authorization should be enforced for every protected operation.

Do not rely on:

```text
if (user.role === "admin")
```

in the frontend as the security mechanism.

The backend/API must enforce authorization.

---

# 13. Authorization

At minimum:

### Candidate

Can access their own permitted information.

### Agent

Can access candidates/leads assigned or available to the agent according to TalentTrivo's operating model.

### Admin

Can access administrative functionality.

The exact access matrix should be defined before implementing sensitive operations.

---

# 14. Candidate Data Security

Candidate information is sensitive business data.

The system must protect:

* Contact information
* Resume files
* Employment information
* Personal information
* Job applications
* Interview information
* Internal notes

Do not expose candidate data through:

* Public APIs
* Client-side source
* Predictable public file URLs
* Unprotected object storage

---

# 15. Resume Storage

Resume files should use protected storage.

Recommended logical model:

```text
Resume Record
├── candidate_id
├── file_name
├── storage_key
├── version
├── uploaded_by
├── created_at
└── status
```

The actual file should live in object storage.

Access should happen through authorized backend operations.

---

# 16. Candidate Status

Candidate status is a business lifecycle field.

MVP statuses:

```text
REGISTERED
PROFILE_INCOMPLETE
PROFILE_SUBMITTED
UNDER_REVIEW
ACTIVE
```

Status changes should be validated.

The UI should preferably show only valid next transitions.

---

# 17. Status History

Status history should be immutable.

Each record should capture:

```text
candidate_id
from_status
to_status
actor
timestamp
reason
```

This provides an audit trail of the candidate lifecycle.

---

# 18. Audit Events

Important business actions should generate audit events.

Examples:

```text
PROFILE_UPDATED
PROFILE_SUBMITTED
RESUME_UPLOADED
RESUME_REPLACED
TARGET_TECHNOLOGY_CHANGED
STATUS_CHANGED
```

Audit records should not be silently edited or deleted through normal application workflows.

---

# 19. Candidate Timeline

The candidate timeline can use activity/audit information to provide an operational history.

Example:

```text
Sep 20
Profile submitted
by Candidate

Sep 20
Profile moved to Under Review
by Agent

Sep 21
Resume replaced
by Agent

Sep 21
Target technology changed
by Agent
```

The implementation should avoid duplicating the same event across unnecessary systems.

---

# 20. API Principles

APIs should:

* Validate input
* Authenticate requests
* Authorize operations
* Return predictable responses
* Handle errors consistently
* Avoid leaking sensitive information
* Use server-side business rules

Avoid putting important business logic only in UI components.

---

# 21. Error Handling

User-facing errors should be understandable.

The system should distinguish:

* Validation errors
* Authentication errors
* Authorization errors
* Not found
* Conflict/business-rule errors
* External service failures
* Unexpected server errors

Do not expose internal stack traces to users.

---

# 22. AI and Workflow Architecture

A typical AI workflow may look like:

```text
Application
    ↓
Create AI Job
    ↓
n8n
    ↓
Retrieve Required Data
    ↓
AI Processing
    ↓
Validate Result
    ↓
Human Review
    ↓
Save Approved Result
```

For asynchronous processing, the application should track workflow state.

The workflow should not rely on hidden state inside n8n.

---

# 23. Job Intelligence Architecture

Future job discovery can follow:

```text
Job Sources
    ↓
Discovery Workflow
    ↓
Normalize Job
    ↓
Deduplicate
    ↓
Analyze Job
    ↓
Store Job
    ↓
Match Candidates
```

The TalentTrivo database remains the source of truth for jobs that have been captured.

---

# 24. Resume Intelligence Architecture

Future resume processing:

```text
Resume Upload
    ↓
Store Original File
    ↓
Extract Text
    ↓
AI Analysis
    ↓
Structured Candidate Insights
    ↓
Agent Review
    ↓
Approved Information
```

The original resume should remain available.

AI-derived information should be distinguishable from verified candidate-provided information.

---

# 25. Technology Transition Architecture

Future transition analysis:

```text
Candidate Profile
       +
Current Technology
       +
Target Technology
       +
Market Requirements
       ↓
Transition Analysis
       ↓
Skill Gaps
       ↓
Learning Recommendations
       ↓
Resume Positioning
```

This should be an AI-assisted process, not an autonomous decision.

---

# 26. Observability

The application should eventually provide enough information to understand:

* API failures
* Workflow failures
* AI processing failures
* Authentication failures
* External integration failures

The implementation should start with simple logging and evolve as needed.

Do not introduce a complex observability platform prematurely.

---

# 27. Development Principle

Architecture should evolve based on actual product requirements.

Before adding a new service, ask:

1. Is it required now?
2. Can the existing architecture support the requirement?
3. Does it reduce or increase complexity?
4. Does it create another system of record?
5. Does it introduce unnecessary operational overhead?

Prefer the simplest architecture that correctly supports the current backlog.


## Design System

TalentTrivo uses a centralized CSS design-token system.

Design tokens are defined in:

`src/styles/theme.css`

The primary brand colors are:

- Purple — `#633181`
- Blue — `#254178`
- Green — `#4BAE4F`

Components should use the design tokens rather than hard-coded colors.

Typography:

- Headings — Manrope
- Body — Work Sans
- Labels/code — JetBrains Mono

Do not introduce new colors arbitrarily. Add new tokens to `theme.css` when a genuine UI requirement requires them.
