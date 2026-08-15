export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  year: string;
  status: string;
  summary: string;
  overview: string;
  role: string;
  challenge: string;
  approach: string[];
  outcome: string;
  stack: string[];
  disciplines: string[];
  tone: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "goblinwisp",
    number: "01",
    name: "GoblinWisp",
    category: "Embedded security · Original research",
    year: "2026",
    status: "Patent pending · Working reference implementation",
    summary:
      "An identity-bound secure-session architecture for infrastructure-free peer communication between constrained devices.",
    overview:
      "GoblinWisp explores how two devices can establish and maintain an authenticated encrypted session without depending on cloud infrastructure. The present reference build runs on ESP32 hardware over ESP-NOW, while the filed architecture is designed as a transport-independent security layer.",
    role: "Sole inventor, protocol designer and embedded developer",
    challenge:
      "Constrained peer devices need confidentiality, integrity, peer identity and replay resistance, yet many deployments cannot rely on a permanent server, certificate service or internet connection.",
    approach: [
      "Pin a persistent peer identity and authenticate session establishment.",
      "Bind key derivation to session context and separate A→B from B→A cryptographic state.",
      "Authenticate every protected message before counters or application state are updated.",
      "Handle replay, duplicate delivery, reset and authenticated rekey lifecycle events.",
    ],
    outcome:
      "A two-node ESP32 reference implementation, a complete Indian patent specification, protocol diagrams and an SDK-oriented commercial roadmap. Independent security evaluation and additional transport ports remain future work.",
    stack: ["ESP32", "ESP-NOW", "X25519", "HKDF-SHA-256", "AES-GCM", "C/C++"],
    disciplines: ["Cryptography", "Embedded systems", "Protocol design"],
    tone: "coral",
    featured: true,
  },
  {
    slug: "aeronexus",
    number: "02",
    name: "AeroNexus",
    category: "Autonomous systems · Founder initiative",
    year: "2026",
    status: "System prototype under development",
    summary:
      "A secure multi-purpose UAV platform and intelligent mission-control ecosystem for demanding field operations.",
    overview:
      "AeroNexus connects an unmanned aerial platform, embedded sensing and an operational dashboard for disaster response, public-safety monitoring, hazard assessment and event surveillance. The project is being developed as a modular platform rather than a single-purpose drone.",
    role: "Founder, system architect and full-stack developer",
    challenge:
      "Field teams need one coherent view of telemetry, mission progress, risk indicators and vehicle health while operating in environments where infrastructure may be degraded.",
    approach: [
      "Design a modular React mission-control interface covering LiveOps, planning, fleet, health and debrief workflows.",
      "Build FastAPI telemetry endpoints and a local operational data layer.",
      "Define an ESP32-S3 sensing path for temperature, smoke, tilt, GPS and risk telemetry.",
      "Treat secure communication as a first-class subsystem through the GoblinWisp research.",
    ],
    outcome:
      "A working dashboard architecture, telemetry API, simulator-backed data flow and an active hardware-integration roadmap. Flight validation and production certification are not yet claimed.",
    stack: ["React", "TypeScript", "FastAPI", "SQLite", "ESP32-S3", "Sensors"],
    disciplines: ["UAV systems", "Full-stack engineering", "Mission UX"],
    tone: "blue",
    featured: true,
  },
  {
    slug: "exotrace",
    number: "03",
    name: "ExoTrace",
    category: "AI research · Bharatiya Antariksh Hackathon",
    year: "2026",
    status: "Research pipeline and dataset development",
    summary:
      "An AI-enabled pipeline for identifying exoplanet candidates in noisy astronomical light curves.",
    overview:
      "ExoTrace studies TESS light curves and converts noisy time-series observations into interpretable transit features for three-class classification. The work focuses on a reproducible pipeline rather than an opaque single-score prediction.",
    role: "Machine-learning pipeline and feature-engineering contributor",
    challenge:
      "Planetary transits are small, periodic changes in brightness that can be confused with stellar variability, eclipsing binaries and instrumental noise.",
    approach: [
      "Retrieve and clean TESS observations with Lightkurve.",
      "Detrend signals using Savitzky–Golay filtering and phase-fold candidate periods.",
      "Extract period, duration, depth, SNR, BLS power, odd/even difference, secondary eclipse and shape features.",
      "Prepare a balanced planet, eclipsing-binary and non-transit classification workflow.",
    ],
    outcome:
      "A baseline 30-row dataset and a structured plan to expand to 150 labelled examples, with feature-level interpretability built into the pipeline.",
    stack: ["Python", "Lightkurve", "TESS", "BLS", "scikit-learn", "Pandas"],
    disciplines: ["Machine learning", "Astronomy", "Data engineering"],
    tone: "violet",
    featured: true,
  },
  {
    slug: "phishbuster",
    number: "04",
    name: "PhishBuster",
    category: "Cybersecurity · Cisco CCST applied project",
    year: "2026",
    status: "Demonstration application",
    summary:
      "A practical phishing-risk and security-awareness application developed during cybersecurity training.",
    overview:
      "PhishBuster translates security-learning outcomes into a usable interface for recognising suspicious URLs, explaining risk signals and encouraging stronger user decisions.",
    role: "Application developer and security-content designer",
    challenge:
      "Users often receive a binary warning without understanding the URL characteristics or behavioural clues that created the risk.",
    approach: [
      "Organise URL and phishing indicators into a clear analysis experience.",
      "Explain risk signals in accessible language rather than displaying only a score.",
      "Connect the project with an organisation-level security improvement plan.",
      "Add a password-strength checker as a supporting security-awareness tool.",
    ],
    outcome:
      "A portfolio-ready cybersecurity demonstration, supporting documentation, internship report and presentation package.",
    stack: ["React", "TypeScript", "Vite", "Cybersecurity assessment"],
    disciplines: ["Threat awareness", "Frontend engineering", "Security communication"],
    tone: "emerald",
    featured: true,
  },
  {
    slug: "vigilant-edge",
    number: "05",
    name: "VigilantEdge",
    category: "Web security · AI-assisted defence",
    year: "2026",
    status: "Prototype direction",
    summary:
      "An AI-assisted Web Application Firewall concept for improving visibility into suspicious web traffic.",
    overview:
      "VigilantEdge explores how application-layer traffic can be evaluated and communicated to an operator through a modern security interface.",
    role: "Concept designer and developer",
    challenge:
      "Rule-based filtering is essential, but security operators also need clear context to investigate unusual behaviour and reduce blind spots.",
    approach: [
      "Structure traffic analysis around explainable security signals.",
      "Separate detection insight from final enforcement decisions.",
      "Design for analyst visibility, validation and false-positive awareness.",
    ],
    outcome:
      "A security-product concept and implementation direction that connects AI experimentation with practical web-defence workflows.",
    stack: ["Web security", "Machine learning", "React", "APIs"],
    disciplines: ["Application security", "AI", "Security operations"],
    tone: "amber",
  },
  {
    slug: "berlin",
    number: "06",
    name: "Berlin",
    category: "Computer vision · Public safety",
    year: "2025",
    status: "System concept",
    summary:
      "An intelligent traffic-surveillance concept focused on event visibility and faster operational response.",
    overview:
      "Berlin applies computer-vision thinking to traffic and public-safety monitoring, connecting visual observations with an operator-facing workflow.",
    role: "System concept and software design",
    challenge:
      "Large traffic environments create more visual information than operators can consistently review in real time.",
    approach: [
      "Identify observable road and incident events suitable for machine-assisted review.",
      "Organise alerts around operator decisions instead of raw model output.",
      "Keep human verification central to any safety-relevant response.",
    ],
    outcome:
      "A practical system concept that informed later work on monitoring interfaces and mission-control design.",
    stack: ["Computer vision", "Python", "Monitoring UX"],
    disciplines: ["AI", "Public safety", "Human-in-the-loop systems"],
    tone: "cyan",
  },
  {
    slug: "question-paper-api",
    number: "07",
    name: "Question Paper Generator API",
    category: "Backend engineering · Education",
    year: "2025",
    status: "Software project",
    summary:
      "An API-led approach to organising question banks and generating structured examination papers.",
    overview:
      "The project treats question-paper creation as a repeatable data and rule workflow rather than a manual document-editing task.",
    role: "Backend and API developer",
    challenge:
      "Manual selection makes it difficult to maintain coverage, structure and consistent paper patterns across a growing question bank.",
    approach: [
      "Model questions and metadata as structured records.",
      "Expose generation operations through a reusable API.",
      "Separate content management from final paper assembly.",
    ],
    outcome:
      "A backend-focused project demonstrating API design, structured data handling and workflow automation.",
    stack: ["APIs", "Backend development", "Structured data"],
    disciplines: ["Software engineering", "Automation", "Education technology"],
    tone: "blue",
  },
  {
    slug: "wireless-analysis",
    number: "08",
    name: "Wireless Communication Analysis",
    category: "Embedded experimentation · Radio links",
    year: "2026",
    status: "Comparative engineering study",
    summary:
      "Hands-on analysis of short-range peer communication using ESP32 and NRF24L01 platforms.",
    overview:
      "This work compares radio behaviour, controller integration and practical constraints to understand how transport choices affect an embedded system.",
    role: "Embedded developer and experiment designer",
    challenge:
      "Range, obstruction, interference, throughput and implementation complexity vary significantly across radios and operating environments.",
    approach: [
      "Prototype direct peer communication using multiple embedded radio options.",
      "Observe the impact of transport constraints on application behaviour.",
      "Separate communication range from the security-session layer.",
    ],
    outcome:
      "Practical insight that now informs the transport-independent direction of GoblinWisp and the communication roadmap for AeroNexus.",
    stack: ["ESP32", "ESP-NOW", "NRF24L01", "C/C++"],
    disciplines: ["Wireless systems", "Embedded engineering", "Testing"],
    tone: "coral",
  },
];

export const skillGroups = [
  {
    number: "01",
    title: "Cybersecurity",
    summary:
      "Designing security into systems through threat modelling, authenticated communication and clear operational controls.",
    skills: [
      "Secure protocol architecture",
      "Cryptographic primitives and key lifecycle",
      "Replay and peer-identity protection",
      "Risk and vulnerability assessment",
      "Incident-response fundamentals",
      "Security awareness",
    ],
    evidence: ["GoblinWisp", "PhishBuster", "VigilantEdge", "Cisco CCST"],
    tone: "coral",
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    summary:
      "Building interpretable data pipelines, engineered features and decision-support systems for real problems.",
    skills: [
      "Data preprocessing",
      "Feature engineering",
      "Supervised model evaluation",
      "Time-series analysis",
      "Computer-vision concepts",
      "Explainable outputs",
    ],
    evidence: ["ExoTrace", "Berlin", "AeroNexus Camera AI"],
    tone: "violet",
  },
  {
    number: "03",
    title: "Embedded Systems",
    summary:
      "Connecting firmware, sensors and radio links with the software workflows that make devices useful.",
    skills: [
      "ESP32 and ESP32-S3",
      "ESP-NOW peer communication",
      "Sensor and telemetry integration",
      "TFT and touch interfaces",
      "C/C++ firmware",
      "Hardware–software debugging",
    ],
    evidence: ["GoblinWisp", "AeroNexus", "Wireless Communication Analysis"],
    tone: "emerald",
  },
  {
    number: "04",
    title: "Full-stack Engineering",
    summary:
      "Creating operational products that connect thoughtful interfaces to dependable APIs and data.",
    skills: [
      "React and TypeScript",
      "Vite application architecture",
      "FastAPI and REST APIs",
      "SQLite-backed workflows",
      "Responsive interface systems",
      "Git and GitHub",
    ],
    evidence: ["AeroNexus Dashboard", "PhishBuster", "Question Paper API"],
    tone: "blue",
  },
];

export const milestones = [
  {
    year: "2024",
    title: "Smart India Hackathon shortlist",
    copy:
      "Shortlisted through SIH 2024, building early experience in problem framing, team delivery and technical presentation.",
    type: "Achievement",
  },
  {
    year: "2025",
    title: "8.93 academic performance",
    copy:
      "Reached an 8.93 CGPA through Semester 6 in B.E. Computer Engineering at SAL Institute of Technology & Engineering Research.",
    type: "Education",
  },
  {
    year: "2026",
    title: "Cisco CCST Cybersecurity",
    copy:
      "Completed the Cisco CCST Cybersecurity learning journey and translated it into PhishBuster, an organisational security assessment and supporting deliverables.",
    type: "Certification",
  },
  {
    year: "2026",
    title: "Complete patent specification filed",
    copy:
      "Advanced GoblinWisp from a March provisional filing to a complete Indian patent specification filed on 5 July 2026.",
    type: "Research",
  },
  {
    year: "2026",
    title: "Bharatiya Antariksh Hackathon research",
    copy:
      "Developed ExoTrace for AI-enabled detection of exoplanet candidates from noisy TESS light curves.",
    type: "Hackathon",
  },
  {
    year: "Now",
    title: "AeroNexus development",
    copy:
      "Building the UAV, telemetry and mission-control foundations of a secure multi-purpose autonomous platform.",
    type: "Founder initiative",
  },
];

export const researchPillars = [
  [
    "Persistent identity",
    "A device retains an approved peer trust anchor instead of accepting an unknown identity on every reconnect.",
  ],
  [
    "Authenticated establishment",
    "Session creation proves possession of the expected identity before protected application traffic begins.",
  ],
  [
    "Context-bound derivation",
    "Session material is derived with role, direction, transcript and session context so values are not accidentally interchangeable.",
  ],
  [
    "Directional isolation",
    "A→B and B→A use separated key, nonce-base and counter state to reduce cross-direction confusion.",
  ],
  [
    "Validate before update",
    "A message is authenticated before replay counters or application state can advance.",
  ],
  [
    "Lifecycle safety",
    "Reset handling, session invalidation and authenticated rekeying are part of the architecture rather than afterthoughts.",
  ],
];

export const navItems = [
  ["Work", "/projects"],
  ["Research", "/research"],
  ["Skills", "/skills"],
  ["Journey", "/journey"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;
