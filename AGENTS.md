# TalentTrivo — Agent Instructions

## 1. Start Here

Before implementing any task:

1. Read `PROJECT.md`.
2. Read `docs/PRODUCT.md`.
3. Read `docs/ARCHITECTURE.md`.
4. Read `backlog/BACKLOG.md`.
5. Inspect the current implementation.

Do not assume the repository is empty or that the documentation describes the current implementation perfectly.

The actual code is the source of truth for current implementation state.

---

# 2. Implementation Principle

Follow:

```text
Understand
↓
Inspect
↓
Plan
↓
Implement
↓
Verify
↓
Update Backlog
```

Do not jump directly into coding.

---

# 3. Scope Control

Implement only the requested backlog item.

Do not:

* Build future-phase functionality
* Refactor unrelated code
* Replace working architecture unnecessarily
* Introduce new frameworks without a reason
* Create unnecessary abstractions
* Build speculative features

If the requested feature requires an architectural change, explain the change before implementing it.

---

# 4. Reuse Existing Patterns

Before introducing a new implementation pattern:

1. Search the existing codebase.
2. Identify similar functionality.
3. Reuse the existing pattern where appropriate.

Consistency is preferred over introducing multiple ways of solving the same problem.

---

# 5. Product Rules

Remember:

> TalentTrivo is initially an agent operations platform.

The agent/counselor is the primary operational user.

The candidate is the business beneficiary.

Do not design the product as a generic LMS or job portal.

---

# 6. Data Rules

The application database is the system of record.

Use the database for business state.

Do not make n8n the source of truth.

Do not store important business state only inside:

* n8n
* AI prompts
* browser state
* local storage
* temporary workflow variables

---

# 7. AI Rules

AI is an assistant, not automatically the final authority.

AI may:

* Analyze
* Classify
* Summarize
* Generate drafts
* Identify patterns
* Suggest options

AI must not fabricate candidate information.

Never invent:

* Skills
* Experience
* Projects
* Certifications
* Employers
* Job titles
* Years of experience

Resume generation must use verified candidate information.

Important AI-generated outputs should support human review.

---

# 8. n8n Rules

Use n8n for orchestration.

Appropriate uses:

* AI workflows
* Scheduled processing
* Notifications
* External integrations
* Data enrichment
* Multi-step workflows

Do not move core application business state into n8n simply because a workflow is easier to build there.

---

# 9. Security

Security must be implemented server-side.

Never rely on frontend checks for authorization.

For protected operations:

```text
Authenticate
↓
Authorize
↓
Validate
↓
Execute
```

Candidate information must not be exposed unnecessarily.

Protect:

* Personal information
* Contact details
* Resumes
* Employment information
* Applications
* Interview information
* Internal notes

---

# 10. Candidate Access

Candidates should only be able to access information they are authorized to access.

They must not be able to modify:

* Candidate status
* Internal notes
* Audit history
* Internal flags
* System IDs
* System timestamps

---

# 11. Candidate Status

MVP candidate statuses are:

```text
REGISTERED
PROFILE_INCOMPLETE
PROFILE_SUBMITTED
UNDER_REVIEW
ACTIVE
```

Do not create additional statuses without a product requirement.

Status transitions should be explicit and validated.

Preferred valid transitions:

```text
REGISTERED
    ↓
PROFILE_INCOMPLETE

PROFILE_INCOMPLETE
    ↓
PROFILE_SUBMITTED

PROFILE_SUBMITTED
    ↓
UNDER_REVIEW

UNDER_REVIEW
    ↓
ACTIVE

UNDER_REVIEW
    ↓
PROFILE_INCOMPLETE
```

Exceptional transitions may be added when required by the product.

---

# 12. Important Candidate Changes

The following should be treated as significant:

* Target technology change
* Major profile change
* Resume replacement

For the MVP, a significant change may require:

```text
PROFILE_INCOMPLETE
↓
PROFILE_SUBMITTED
↓
UNDER_REVIEW
```

Do not silently bypass review logic.

---

# 13. Auditability

Important actions should be recorded.

Examples:

```text
PROFILE_UPDATED
PROFILE_SUBMITTED
RESUME_UPLOADED
RESUME_REPLACED
TARGET_TECHNOLOGY_CHANGED
STATUS_CHANGED
```

Status history should capture:

* Candidate
* Previous status
* New status
* Actor
* Timestamp
* Reason where applicable

---

# 14. API Rules

API endpoints must:

* Authenticate
* Authorize
* Validate
* Apply business rules
* Return predictable responses
* Handle errors

Do not put important business rules only in React components.

---

# 15. UI Rules

Prefer simple operational interfaces.

Agent users should be able to quickly answer:

> What needs my attention?

Avoid unnecessary dashboards, animations or visual complexity.

Use consistent:

* Forms
* Tables
* Filters
* Status indicators
* Detail pages
* Action patterns

---

# 16. Error Handling

Handle:

* Invalid input
* Missing records
* Unauthorized access
* Forbidden operations
* Business-rule violations
* Database failures
* External service failures
* AI failures

Do not expose internal implementation details or stack traces to users.

---

# 17. Database Changes

Before modifying the schema:

1. Inspect the current schema.
2. Check existing migrations.
3. Confirm whether the entity is actually required.
4. Avoid duplicate concepts.
5. Follow existing migration conventions.

Do not create tables for speculative future functionality.

---

# 18. File Storage

Candidate resumes and other sensitive documents should use protected object storage.

The database should store metadata/reference information.

Do not expose sensitive documents through unrestricted public URLs.

---

# 19. External Integrations

Treat external systems as external systems.

Before integrating with a platform:

* Verify available APIs
* Verify authentication requirements
* Verify permitted usage
* Understand failure modes
* Avoid assuming browser automation is appropriate

Do not implement autonomous external-platform operations unless they are explicitly approved and added to the backlog.

---

# 20. Before Completing a Task

Verify as applicable:

### Functional

* Feature works
* Main workflow works
* Edge cases work

### Data

* Data persists
* Updates work
* Relationships are correct

### Security

* Authentication works
* Authorization works
* Unauthorized access is blocked

### UX

* Validation is understandable
* Errors are handled
* Responsive behavior works

### Technical

* Existing functionality still works
* No unnecessary dependencies were introduced
* No unrelated files were changed unnecessarily

### Testing

Run the relevant tests/checks.

---

# 21. Backlog Updates

After completing a backlog item:

1. Mark it complete in `backlog/BACKLOG.md`.
2. Add a short note if implementation details are important.
3. Add newly discovered work to the backlog rather than silently expanding scope.

---

# 22. Architectural Changes

If a task appears to require a major architectural change:

Do not immediately implement it.

First provide:

1. Current architecture
2. Problem
3. Proposed change
4. Why the current architecture is insufficient
5. Alternatives considered
6. Impact
7. Recommendation

Then wait for approval if the change is significant.

---

# 23. Definition of Done

Do not mark a task complete simply because the code compiles.

A task is complete when the requested behavior works and has been appropriately verified.

The final implementation should be:

* Functional
* Secure
* Persistent
* Validated
* Consistent with the architecture
* Consistent with the product definition
* Within backlog scope

---

# 24. Core Principle

Always remember:

> **Digitize the agent workflow → capture structured data → apply AI → automate repetitive work.**

Build the foundation first.

Do not try to build the entire future TalentTrivo platform in the first phase.
