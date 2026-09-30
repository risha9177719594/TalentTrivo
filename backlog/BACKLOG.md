# TalentTrivo Backlog

This backlog is the primary implementation driver for the project.

Antigravity should use this file to determine what to build next.

Do not implement future work unless it is explicitly moved into the current scope.

---

# Current Phase

## Phase 1 — Agent Operations MVP

Goal:

> Build a reliable digital operating system for TalentTrivo agents.

---

# Completed

* [x] TT-001 — Project foundation — Initialized React 18 + TypeScript + Vite architecture, centralized design system tokens (`src/styles/theme.css`), brand assets, responsive multi-page public website, accessible navigation, and SEO foundation.

---

# In Progress

* [ ] TT-002 — Application configuration

---

# Next

## Foundation

* [x] TT-001 — Project foundation
* [ ] TT-002 — Application configuration
* [ ] TT-003 — Database foundation
* [ ] TT-004 — Authentication
* [ ] TT-005 — Role-based authorization

## Lead Management

* [ ] TT-006 — Lead capture (Public UI and client service boundary implemented; backend API integration pending)
* [ ] TT-007 — Lead list
* [ ] TT-008 — Lead detail
* [ ] TT-009 — Lead qualification
* [ ] TT-010 — Convert lead to candidate

## Candidate Management

* [ ] TT-011 — Candidate creation
* [ ] TT-012 — Candidate list
* [ ] TT-013 — Candidate search/filter
* [ ] TT-014 — Candidate detail
* [ ] TT-015 — Candidate profile editing
* [ ] TT-016 — Candidate profile completeness

## Resume Management

* [ ] TT-017 — Resume upload
* [ ] TT-018 — Resume download/view
* [ ] TT-019 — Resume replacement
* [ ] TT-020 — Resume metadata/version foundation

## Technology Catalogue

* [ ] TT-021 — Technology catalogue
* [ ] TT-022 — Technology create/edit
* [ ] TT-023 — Assign target technology to candidate

## Candidate Lifecycle

* [ ] TT-024 — Candidate status management
* [ ] TT-025 — Valid status transitions
* [ ] TT-026 — Status history
* [ ] TT-027 — Candidate submission/review workflow

## Agent Workspace

* [ ] TT-028 — Agent dashboard
* [ ] TT-029 — Candidates requiring action
* [ ] TT-030 — Recent activity
* [ ] TT-031 — Agent notes

## Timeline / Audit

* [ ] TT-032 — Candidate activity timeline
* [ ] TT-033 — Audit event foundation

## Platform Quality

* [ ] TT-034 — Error handling
* [ ] TT-035 — Validation
* [ ] TT-036 — Authorization review
* [ ] TT-037 — Responsive UI review
* [ ] TT-038 — Security review
* [ ] TT-039 — MVP testing
* [ ] TT-040 — MVP deployment

---

# Phase 2 — AI Career Intelligence

Do not start until Phase 1 provides the required data foundation.

## Resume Intelligence

* [ ] TT-101 — Resume text extraction
* [ ] TT-102 — Resume parsing
* [ ] TT-103 — Candidate skill extraction
* [ ] TT-104 — Resume quality analysis
* [ ] TT-105 — Resume rewrite assistant
* [ ] TT-106 — Job-specific resume tailoring

## Career Transition

* [ ] TT-110 — Technology market intelligence
* [ ] TT-111 — Current-to-target technology analysis
* [ ] TT-112 — Transferable skill analysis
* [ ] TT-113 — Skill gap analysis
* [ ] TT-114 — Career transition recommendation
* [ ] TT-115 — Learning path generation

## Job Intelligence

* [ ] TT-120 — Job discovery workflow
* [ ] TT-121 — Job normalization
* [ ] TT-122 — Job deduplication
* [ ] TT-123 — Job description analysis
* [ ] TT-124 — Candidate-job matching

## Interview Intelligence

* [ ] TT-130 — Interview preparation
* [ ] TT-131 — Job-specific interview preparation
* [ ] TT-132 — Interview question generation

---

# Phase 3 — Career Operations

## Jobs

* [ ] TT-201 — Job database
* [ ] TT-202 — Job search
* [ ] TT-203 — Job-to-candidate relationships
* [ ] TT-204 — Job history

## Companies

* [ ] TT-210 — Company database
* [ ] TT-211 — Company profiles
* [ ] TT-212 — Company hiring history

## HR Contacts

* [ ] TT-220 — HR contact database
* [ ] TT-221 — HR/company relationship
* [ ] TT-222 — HR interaction history

## Applications

* [ ] TT-230 — Application tracking
* [ ] TT-231 — Application status
* [ ] TT-232 — Resume/application version tracking
* [ ] TT-233 — Application outcomes

## Interviews

* [ ] TT-240 — Interview tracking
* [ ] TT-241 — Interview rounds
* [ ] TT-242 — Interview preparation records
* [ ] TT-243 — Interview outcomes

## Automation

* [ ] TT-250 — Agent notifications
* [ ] TT-251 — Candidate follow-up automation
* [ ] TT-252 — Job alerts
* [ ] TT-253 — Workflow orchestration

---

# Phase 4 — TalentTrivo Intelligence Network

Do not build this as a separate platform prematurely.

Build it from reliable operational data.

## Intelligence

* [ ] TT-301 — Technology hiring intelligence
* [ ] TT-302 — Company hiring patterns
* [ ] TT-303 — HR relationship intelligence
* [ ] TT-304 — Candidate-job intelligence
* [ ] TT-305 — Application outcome intelligence
* [ ] TT-306 — Interview outcome intelligence
* [ ] TT-307 — Career transition outcome analysis

---

# Future / Not Yet Planned

These items should remain outside the active implementation scope unless explicitly approved.

* [ ] Autonomous career agent
* [ ] Autonomous job applications
* [ ] Automated Naukri operations
* [ ] Automated LinkedIn operations
* [ ] Employer marketplace
* [ ] Recruiter portal
* [ ] Full LMS
* [ ] AI tutor
* [ ] Mobile application
* [ ] Advanced assessment platform
* [ ] Advanced analytics platform

---

# Backlog Rules

## Rule 1 — One Item at a Time

Antigravity should work on the selected backlog item rather than implementing multiple unrelated items.

## Rule 2 — Inspect Before Changing

Before modifying an existing feature:

1. Read the relevant documentation.
2. Inspect the existing implementation.
3. Understand the current behavior.
4. Identify the smallest required change.

## Rule 3 — Avoid Scope Creep

Do not implement future-phase capabilities while completing an MVP task.

## Rule 4 — Preserve Existing Behavior

Changes should not unnecessarily break existing functionality.

## Rule 5 — Update the Backlog

When a task is completed:

```text
[ ] → [x]
```

Add a short implementation note when useful.

## Rule 6 — Add New Work Explicitly

If implementation discovers additional required work:

1. Do not silently implement it.
2. Add it to the backlog.
3. Explain why it is needed.
4. Continue only if it is part of the current task.

---

# Definition of Done

A backlog item is complete only when applicable:

* Functionality works
* Validation works
* Authorization works
* Data persists correctly
* Error handling exists
* Existing functionality remains intact
* Responsive behavior works where applicable
* Tests/checks are completed
* Documentation is updated when necessary
* Backlog status is updated
