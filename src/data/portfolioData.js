// ==============================================================================
// SUNNY'S PORTFOLIO CONFIGURATION DATA
// ==============================================================================
// Tip: Edit this single file to update your personal details, project links,
// social profiles, education details, and placeholder info across the entire website!
// ==============================================================================

export const personalInfo = {
  name: "Sunny",
  tagline: "Engineering Student & Aspiring Software Developer",
  typingTitles: [
    "Engineering Student",
    "Software Developer",
    "AI & ML Enthusiast",
    "GATE Aspirant",
    "Problem Solver"
  ],
  bioIntro: "I am an Engineering Student and GATE Aspirant passionate about Software Development, Artificial Intelligence, Machine Learning, and building impactful technology solutions.",
  aboutText: "I am an Engineering Student and GATE Aspirant with a strong interest in Software Development, Artificial Intelligence, Machine Learning, and Deep Learning. Alongside building practical software and ML systems, I am rigorously preparing for the GATE examination, reinforcing my theoretical mastery in Data Structures, Algorithms, Operating Systems, DBMS, and Mathematics.",
  
  // Update these placeholder URLs with your real links
  socialLinks: {
    github: "https://github.com/iamsunnykapoor1",
    linkedin: "https://linkedin.com/in/iamsunnykapoor1",
    email: "iamsunnykapoor1@gmail.com",
  },
  
  // Resume placeholder path (put your resume PDF in /public/resume.pdf)
  resumeUrl: "#resume-modal",
  
  // Avatar image: change to "/profile.jpg" after placing your picture in the public folder
  avatarUrl: "/avatar.svg",
};

// ==============================================================================
// ABOUT SECTION STATS
// ==============================================================================
export const statsData = [
  {
    id: 1,
    number: "5+",
    label: "Projects Completed",
    description: "Hands-on AI, ML, and software applications built from concept to execution."
  },
  {
    id: 2,
    number: "15+",
    label: "Technologies Learned",
    description: "Covering modern languages, deep learning frameworks, and engineering tools."
  },
  {
    id: 3,
    number: "Active",
    label: "GitHub Contributions",
    description: "Consistent coding, version control habits, and open-source explorations."
  }
];

// ==============================================================================
// SKILLS DATA
// ==============================================================================
export const skillsData = [
  {
    category: "Programming",
    icon: "FiCode",
    description: "Core languages for algorithmic problem solving, software engineering, and data processing.",
    skills: [
      { name: "Java", level: "Proficient", highlight: "Core Java, OOP, Collections" },
      { name: "Python", level: "Proficient", highlight: "Data Science, PyTorch, Scripting" },
      { name: "C/C++", level: "Intermediate", highlight: "Pointers, Memory, DSA" },
      { name: "SQL", level: "Intermediate", highlight: "Relational Queries, Joins, Indexing" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "FiCpu",
    description: "Fundamental principles powering scalable, reliable, and optimized computing systems.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Core", highlight: "Arrays, Trees, Graphs, DP" },
      { name: "Object-Oriented Programming", level: "Core", highlight: "Encapsulation, Polymorphism, Design" },
      { name: "DBMS", level: "Core", highlight: "Relational Modeling, Normalization, ACID" },
      { name: "Operating Systems", level: "Core", highlight: "Concurrency, Threads, Memory Mgmt" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "FiActivity",
    description: "Specialized focus in predictive modeling, deep architectures, and privacy-preserving AI.",
    skills: [
      { name: "Machine Learning", level: "Specialized", highlight: "Supervised & Unsupervised Learning" },
      { name: "Deep Learning", level: "Specialized", highlight: "CNNs, RNNs, Backpropagation" },
      { name: "Federated Learning", level: "Research", highlight: "Decentralized & Privacy-preserving ML" },
      { name: "Neural Networks", level: "Specialized", highlight: "Model Optimization & Loss Functions" }
    ]
  },
  {
    category: "Tools & Environments",
    icon: "FiTerminal",
    description: "Modern development workflows, version management, and collaborative toolchains.",
    skills: [
      { name: "Git", level: "Proficient", highlight: "Branching, Merging, Git Flow" },
      { name: "GitHub", level: "Proficient", highlight: "Repositories, Pull Requests, Actions" },
      { name: "VS Code", level: "Primary IDE", highlight: "Extensions, Debugging, Linting" },
      { name: "Jupyter Notebook", level: "Workflow", highlight: "Data Visualization & Experiments" }
    ]
  }
];

// ==============================================================================
// FEATURED PROJECTS
// ==============================================================================
export const projectsData = [
  {
    id: "ai-energy-optimizer",
    title: "AI Energy Optimizer",
    category: "AI, IoT & Smart Grid Optimization",
    badge: "Smart Energy AI",
    featured: true,
    description: "An end-to-end intelligent energy management platform combining real-time IoT sensor telemetry, live weather integration, and machine learning to simulate, predict, and optimize commercial power consumption.",
    detailedInfo: "AI Energy Optimizer simulates retail power consumption patterns and optimizes commercial energy efficiency. It integrates live IoT sensor telemetry (occupancy and power draw streamed every 5 seconds) with real-time weather data from OpenWeatherMap. Powered by a Random Forest regression pipeline and a Flask REST API, it serves predictive load forecasts and cost-saving recommendations through a high-performance Streamlit analytics dashboard.",
    technologies: [
      "Python",
      "Streamlit",
      "Flask REST API",
      "Random Forest",
      "Scikit-Learn",
      "IoT Sensor Feed",
      "Pandas & NumPy",
      "OpenWeatherMap API"
    ],
    githubUrl: "https://github.com/iamsunnykapoor1/AI-Energy-Optimizer",
    liveUrl: "https://github.com/iamsunnykapoor1/AI-Energy-Optimizer#quick-start-windows-powershell",
    highlights: [
      "Live Streamlit analytics dashboard with real-time telemetry and automated energy-saving recommendations",
      "Flask REST backend serving /predict, /sensor_update, and /current_status endpoints",
      "Random Forest regression trained on retail power datasets for predictive load forecasting",
      "Climate-aware optimization integrating OpenWeatherMap API for adaptive HVAC management"
    ],
    accentColor: "emerald"
  },
  {
    id: "fertilizer-recommendation",
    title: "Deep Learning-Based Fertilizer Recommendation for Sustainable Crop Production",
    category: "Deep Learning & Agritech",
    badge: "Sustainable AI",
    featured: true,
    description: "A Deep Learning project that uses soil data and crop information to recommend suitable fertilizers for sustainable agriculture.",
    workflow: [
      { step: "Soil Data & Crop Type", desc: "NPK nutrients, pH levels, moisture, and target crop selection" },
      { step: "Deep Learning Model", desc: "Feature representation, hidden layers, and pattern recognition" },
      { step: "Fertilizer Recommendation", desc: "Optimized chemical/organic fertilizer composition for maximal yield" }
    ],
    detailedInfo: "Agriculture accounts for massive global resource consumption. This deep learning system analyzes soil mineral balances (Nitrogen, Phosphorus, Potassium), moisture, temperature, and specific crop requirements to recommend precise, sustainable fertilizer dosages—preventing soil degradation and promoting ecological farming.",
    technologies: [
      "Python",
      "Deep Learning",
      "Machine Learning",
      "Data Analysis",
      "NumPy/Pandas",
      "Neural Networks"
    ],
    githubUrl: "https://github.com/iamsunnykapoor1/deep_learning_pbl",
    liveUrl: "https://crop-fertilizer-ai.placeholder.app",                      // REPLACE with your live demo or leave empty
    highlights: [
      "End-to-end predictive pipeline: Soil Data + Crop Type → DL Model → Fertilizer Recommendation",
      "Reduces excess fertilizer runoff and improves sustainable agricultural yields",
      "Extensive data preprocessing and evaluation on diverse multi-feature soil datasets"
    ],
    accentColor: "cyan"
  },
  {
    id: "fedsentry",
    title: "FedSentry",
    category: "AI & Decentralized Machine Learning",
    badge: "Federated Learning",
    featured: true,
    description: "A project based on Federated Learning that focuses on collaborative machine learning while keeping data decentralized and improving privacy.",
    detailedInfo: "FedSentry enables multiple participating client nodes to iteratively train a robust global model without transmitting raw local sensitive data to a centralized server. It uses secure gradient aggregation protocols, mitigating data leakage and ensuring strict regulatory privacy compliance in collaborative intelligence networks.",
    technologies: [
      "Python",
      "Federated Learning",
      "Machine Learning",
      "Git/GitHub",
      "Privacy-Preserving AI",
      "Distributed Systems"
    ],
    githubUrl: "https://github.com/your-username/fedsentry", // REPLACE with your repository link
    liveUrl: "https://fedsentry-demo.placeholder.app",       // REPLACE with your live demo or leave empty
    highlights: [
      "Decentralized collaborative training preserving client data privacy",
      "Mitigates single-point-of-failure and raw data transmission vulnerabilities",
      "Engineered with clean Python modules and version controlled via Git/GitHub"
    ],
    accentColor: "indigo"
  }
];

// ==============================================================================
// EDUCATION DATA
// ==============================================================================
export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Engineering",
    institution: "[Your College / University Name]", // PLACEHOLDER: e.g. ABC Institute of Technology
    year: "[Graduation Year: e.g. 2026]",           // PLACEHOLDER: e.g. 2022 - 2026
    cgpa: "[CGPA / Percentage: e.g. 8.5/10]",      // PLACEHOLDER: e.g. 8.5 CGPA
    status: "Currently Pursuing",
    summary: "Pursuing rigorous undergraduate coursework in engineering disciplines with dual emphasis on practical AI/ML software development and in-depth preparation for the GATE Examination in Computer Science & Information Technology / Data Science & AI.",
    keyCoursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems & SQL",
      "Operating Systems & Computer Networks",
      "Theory of Computation & Compiler Design",
      "Machine Learning & Engineering Mathematics"
    ]
  }
];

// ==============================================================================
// ACHIEVEMENTS & CERTIFICATIONS
// ==============================================================================
export const achievementsData = [
  {
    category: "National Examination",
    title: "GATE Examination Preparation",
    subtitle: "Graduate Aptitude Test in Engineering (CS / DA)",
    badge: "GATE Aspirant",
    icon: "FiBookOpen",
    description: "Actively preparing for the GATE examination with rigorous problem solving across core CS disciplines: Discrete Mathematics, Algorithms, OS, DBMS, Computer Networks, and Machine Learning.",
    date: "[Target: 2026/2027]"
  },
  {
    category: "Coding Achievements",
    title: "Algorithmic Problem Solving",
    subtitle: "[Competitive Programming Platform: LeetCode / HackerRank / CodeChef]",
    badge: "Problem Solving",
    icon: "FiAward",
    description: "Consistent practice in Data Structures and Algorithms with solved problems across arrays, dynamic programming, trees, and graph algorithms.",
    date: "[Active / Ongoing]"
  },
  {
    category: "Certifications",
    title: "AI & Machine Learning Specialization",
    subtitle: "[Issuing Authority: Coursera / DeepLearning.AI / NPTEL / edX]",
    badge: "Certified",
    icon: "FiCheckCircle",
    description: "Completed comprehensive certifications covering supervised learning, neural networks, and deep learning architectures with practical projects.",
    date: "[Year: e.g. 2025]"
  },
  {
    category: "Academic Achievements",
    title: "Engineering Academic Excellence",
    subtitle: "[College / Department Level]",
    badge: "Academic",
    icon: "FiBookOpen",
    description: "Maintained consistent high academic standing in core engineering fundamentals, laboratory practicals, and collaborative coursework.",
    date: "[Year: e.g. 2024 - 2026]"
  },
  {
    category: "Hackathons & Competitions",
    title: "Technical Hackathon Participant / Finalist",
    subtitle: "[Hackathon Name / College Tech Fest]",
    badge: "Innovation",
    icon: "FiTrendingUp",
    description: "Collaborated in multi-disciplinary teams to design prototype solutions addressing real-world problems in AI, healthcare, or sustainability.",
    date: "[Year: e.g. 2025]"
  }
];
