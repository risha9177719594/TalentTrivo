# TalentTrivo

AI-powered career transition and talent operations platform.

## Project Purpose

TalentTrivo helps experienced professionals transition into new technology areas and obtain suitable employment opportunities.

The platform initially focuses on digitizing the TalentTrivo agent/counselor workflow.

---

## Product Layers

```text
TalentTrivo Digital
        ↓
TalentTrivo Agent OS
        ↓
TalentTrivo AI Intelligence
        ↓
TalentTrivo Intelligence Network
```

---

## Current Phase

**Phase 1 — Agent Operations MVP**

Current focus:

* Authentication
* Lead management
* Candidate management
* Candidate profiles
* Resume management
* Technology catalogue
* Candidate lifecycle
* Agent workspace
* Candidate timeline

See:

```text
backlog/BACKLOG.md
```

for the current implementation queue.

---

## Repository Structure

```text
talenttrivo/
│
├── AGENTS.md
├── PROJECT.md
├── README.md
│
├── docs/
│   ├── PRODUCT.md
│   └── ARCHITECTURE.md
│
├── backlog/
│   └── BACKLOG.md
│
├── src/
│   └── ...
│
├── database/
│   └── ...
│
└── workflows/
    └── ...
```

---

## Documentation

### Project Context

```text
PROJECT.md
```

Explains what TalentTrivo is and the overall product direction.

### Product

```text
docs/PRODUCT.md
```

Defines product behavior, users, lifecycle and scope.

### Architecture

```text
docs/ARCHITECTURE.md
```

Defines technical architecture and engineering principles.

### Backlog

```text
backlog/BACKLOG.md
```

Defines what should be implemented.

### Agent Instructions

```text
AGENTS.md
```

Defines how Antigravity should work on the repository.

---

## Development Approach

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

Do not implement future functionality unless it is explicitly added to the active backlog.

---

## Core Product Principle

```text
Manual Agent Workflow
        ↓
Digital Workflow
        ↓
Structured Data
        ↓
AI Assistance
        ↓
Automation
        ↓
Intelligence
```

The initial goal is a reliable operational platform, not a fully autonomous AI system.

---

## Source of Truth

The application/database is the source of truth for business data.

n8n is an orchestration layer.

AI provides intelligence.

External platforms remain external systems.

---

## Getting Started

Project-specific setup and deployment instructions should be added here once the technology stack and deployment configuration are finalized.

Do not document commands that have not been verified in the repository.

---

## Current Status

Project foundation is being established.

Refer to:

```text
backlog/BACKLOG.md
```

for implementation status.
