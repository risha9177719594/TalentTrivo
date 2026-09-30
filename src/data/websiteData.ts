import { ProcessStep, FeatureItem, TransitionPath, AICapability } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand Your Experience',
    description: 'Deconstruct your career history, domain expertise, project architecture, and core competencies.',
    detail: 'We evaluate where your true technical and functional strengths lie beyond legacy job titles.',
    iconName: 'Compass'
  },
  {
    step: '02',
    title: 'Identify the Right Technology',
    description: 'Map realistic technology transition horizons based on current market demand and your foundational skills.',
    detail: 'Ensure the target area leverages your prior experience rather than starting from scratch.',
    iconName: 'Target'
  },
  {
    step: '03',
    title: 'Build Your Transition Plan',
    description: 'Create a structured, manageable roadmap targeting critical skill gaps and architecture principles.',
    detail: 'Focus on what hiring teams actually expect in production environments, not superficial tutorials.',
    iconName: 'Map'
  },
  {
    step: '04',
    title: 'Prepare Your Profile & Resume',
    description: 'Position your genuine accomplishments for the target technology without fabricating experience.',
    detail: 'Highlight transferable architectural patterns, cross-domain problems, and production engineering impact.',
    iconName: 'FileText'
  },
  {
    step: '05',
    title: 'Discover Relevant Opportunities',
    description: 'Identify roles and engineering teams where your combination of depth and new skills is an advantage.',
    detail: 'Target organizations actively seeking experienced professionals who can bridge domains.',
    iconName: 'Search'
  },
  {
    step: '06',
    title: 'Prepare for Interviews',
    description: 'Targeted technical discussions, architecture walkthroughs, and transition storytelling.',
    detail: 'Frame your career transition credibly with technical substance and thoughtful context.',
    iconName: 'Award'
  },
  {
    step: '07',
    title: 'Move Toward Your Next Role',
    description: 'Ongoing agent consultation, offer evaluation, and onboarding support as you step into your new role.',
    detail: 'Dedicated counselor backing throughout the interview lifecycle until placement.',
    iconName: 'CheckCircle'
  }
];

export const WHY_TALENTTRIVO: FeatureItem[] = [
  {
    title: 'Career Transition Guidance',
    description: 'We help you understand how your existing career equity and engineering discipline translate into modern technology domains.',
    iconName: 'GitFork',
    highlight: 'Experience Capital'
  },
  {
    title: 'Market Intelligence',
    description: 'Gain grounded visibility into technology demand, realistic hiring criteria, and real production requirements.',
    iconName: 'TrendingUp',
    highlight: 'Grounded Reality'
  },
  {
    title: 'AI-Powered Career Support',
    description: 'AI assists in parsing technical nuances, mapping skill adjacencies, and analyzing job requirements with high precision.',
    iconName: 'Cpu',
    highlight: 'Intelligent Acceleration'
  },
  {
    title: 'Human Guidance',
    description: 'Experienced counselors guide your choices, review your materials, and ensure you make sensible, sustainable career decisions.',
    iconName: 'Users',
    highlight: 'Dedicated Counselor'
  }
];

export const EXAMPLE_TRANSITIONS: TransitionPath[] = [
  {
    id: 'salesforce-to-cloud-data',
    from: 'Salesforce / CRM Engineering',
    to: 'Cloud Architecture & Data Engineering',
    category: 'Enterprise to Cloud',
    description: 'Leverage strong enterprise data models, business workflows, and API integrations to transition into scalable cloud platforms.',
    keySkills: ['AWS / Azure Core', 'Python / PySpark', 'Cloud Data Warehousing', 'Enterprise Integration'],
    sampleRoles: ['Cloud Integration Engineer', 'Data Solutions Architect', 'Enterprise Cloud Developer'],
    relevance: 'CRM architects already possess deep data modeling and governance experience that cloud data teams highly value.'
  },
  {
    id: 'java-to-cloud-microservices',
    from: 'Traditional Java / J2EE Monoliths',
    to: 'Cloud-Native & Distributed Systems',
    category: 'Backend Evolution',
    description: 'Move from legacy monolithic backends to Kubernetes-orchestrated, event-driven microservices architectures.',
    keySkills: ['Spring Boot 3 / Quarkus', 'Docker & Kubernetes', 'Kafka / Event Streaming', 'Distributed Tracing'],
    sampleRoles: ['Cloud-Native Java Architect', 'Distributed Systems Engineer', 'Microservices Specialist'],
    relevance: 'Decades of concurrency and OOP knowledge become dramatically more impactful when modernized with cloud-native primitives.'
  },
  {
    id: 'qa-to-devops-automation',
    from: 'Manual & Scripted QA / Testing',
    to: 'SDET & Cloud DevOps Automation',
    category: 'Quality to Infrastructure',
    description: 'Transition from isolated test cycles to automated CI/CD pipelines, infrastructure-as-code, and release engineering.',
    keySkills: ['Terraform / OpenTofu', 'GitHub Actions / GitLab CI', 'Playwright / Test Automation', 'Kubernetes Helm'],
    sampleRoles: ['DevOps Platform Engineer', 'SDET Lead', 'Release Automation Engineer'],
    relevance: 'Test engineers with an eye for reliability make exceptional platform and reliability engineers.'
  },
  {
    id: 'frontend-to-fullstack',
    from: 'Frontend / UI Development',
    to: 'Modern Full-Stack & API Engineering',
    category: 'Web Modernization',
    description: 'Expand frontend proficiency into end-to-end web architectures, serverless backends, and persistent database layers.',
    keySkills: ['Node.js / TypeScript Services', 'PostgreSQL / Prisma', 'GraphQL & REST Standards', 'Serverless Functions'],
    sampleRoles: ['Full-Stack Software Engineer', 'Web Systems Architect', 'Application Developer'],
    relevance: 'Deep client-side performance awareness directly benefits backend API contract and payload design.'
  },
  {
    id: 'sysadmin-to-cloud-platform',
    from: 'Traditional IT & SysAdmin',
    to: 'Cloud Platform & SRE Engineering',
    category: 'Infrastructure Modernization',
    description: 'Transform traditional on-premises networking and server administration into automated cloud infrastructure.',
    keySkills: ['Linux Internals', 'Cloud Security & IAM', 'Observability (Prometheus/Grafana)', 'Ansible & Terraform'],
    sampleRoles: ['Cloud Systems Engineer', 'Site Reliability Engineer', 'Cloud Infrastructure Consultant'],
    relevance: 'Fundamental OS, networking, and security concepts carry over directly into production cloud operations.'
  }
];

export const AI_CAPABILITIES: AICapability[] = [
  {
    title: 'Resume Intelligence',
    tagline: 'Deep architectural and technical decomposition',
    description: 'Understands your authentic technical background, projects, scale, and domain complexities from your existing resume.',
    iconName: 'FileSearch',
    highlights: ['Deep experience extraction', 'Scale & complexity detection', 'No fabricated data']
  },
  {
    title: 'Technology Transition Analysis',
    tagline: 'Precision gap analysis against target requirements',
    description: 'Compares your actual baseline against what modern engineering teams evaluate, highlighting bridgeable strengths.',
    iconName: 'GitCompare',
    highlights: ['Skill adjacency mapping', 'Realistic difficulty curve', 'Target market matching']
  },
  {
    title: 'Job Intelligence',
    tagline: 'Signal extraction from real production job postings',
    description: 'Deconstructs job descriptions to extract the non-negotiable architectural requirements vs. superficial buzzwords.',
    iconName: 'Briefcase',
    highlights: ['Signal vs noise filtering', 'Role requirement synthesis', 'Market trend tracking']
  },
  {
    title: 'Resume Tailoring Assistant',
    tagline: 'Truthful realignment for target roles',
    description: 'Assists agents in rewording genuine accomplishments so hiring managers recognize your relevance to target technologies.',
    iconName: 'Edit3',
    highlights: ['Zero invented skills or roles', 'Clear narrative framing', 'Human counselor reviewed']
  },
  {
    title: 'Learning Path Generation',
    tagline: 'Focused curricula targeting critical gaps',
    description: 'Outlines the high-leverage concepts, architecture principles, and hands-on scenarios needed to become productive.',
    iconName: 'BookOpen',
    highlights: ['Practical production focus', 'No entry-level fluff', 'Sequenced milestones']
  },
  {
    title: 'Interview Preparation',
    tagline: 'Scenario-based technical and narrative prep',
    description: 'Helps formulate credible technical explanations of your transition journey and answers for deep architectural questions.',
    iconName: 'MessageSquare',
    highlights: ['Transition narrative framing', 'System design walkthroughs', 'Edge-case discussions']
  }
];

export const PROBLEMS_FACED = [
  {
    title: 'Technology Selection Paralysis',
    description: 'Too many emerging options (Cloud, AI, DevOps, Modern Data) make it difficult to know which path best values your specific background.',
    iconName: 'HelpCircle'
  },
  {
    title: 'Uncertain Market Demand',
    description: 'Hype cycles distort real hiring criteria, leaving experienced professionals unsure which technologies have genuine sustained demand.',
    iconName: 'AlertTriangle'
  },
  {
    title: 'Experience Mismatch on Paper',
    description: 'Resumes filled with legacy terms trigger automated rejections, failing to communicate your high-level engineering maturity.',
    iconName: 'FileX'
  },
  {
    title: 'Unfocused Learning Paths',
    description: 'Generic online courses treat you like a college beginner, wasting months on syntax basics rather than production architecture.',
    iconName: 'Compass'
  },
  {
    title: 'Difficulty Finding Receptive Teams',
    description: 'Identifying hiring managers who appreciate deep foundational experience over superficial 1-year junior credentials is challenging.',
    iconName: 'Search'
  },
  {
    title: 'Transition Storytelling in Interviews',
    description: 'Explaining why you are switching technologies without appearing defensive or unprepared requires disciplined technical framing.',
    iconName: 'ShieldAlert'
  }
];

export const FAQS = [
  {
    q: 'Does TalentTrivo guarantee job placement?',
    a: 'No. TalentTrivo does not make unrealistic placement or salary guarantees. We provide structured career transition advisory, targeted skill preparation, professional profile repositioning, and dedicated counselor support throughout the job search and interview process.'
  },
  {
    q: 'How is TalentTrivo different from a training institute or bootcamp?',
    a: 'Training institutes focus on selling video courses or beginner tutorials. TalentTrivo is a career operations platform designed specifically for experienced professionals. We focus on bridging existing engineering capital, strategic resume repositioning, and personal counselor guidance.'
  },
  {
    q: 'What role does AI play in TalentTrivo?',
    a: 'AI acts as an analytical accelerator—parsing complex technical resumes, identifying skill adjacencies, and analyzing job postings. Every critical output is reviewed and refined by human counselors. AI never invents false candidate experience.'
  },
  {
    q: 'Can I undergo this transition while continuing my current job?',
    a: 'Yes. Our structured milestones and targeted transition roadmaps are designed specifically for working professionals who need to manage their time efficiently without disrupting their present employment.'
  },
  {
    q: 'How long does a typical technology transition take?',
    a: 'Timelines vary depending on the distance between your starting foundation and target technology, typically ranging between 8 to 16 weeks of focused preparation, profile positioning, and interview cycles.'
  }
];
