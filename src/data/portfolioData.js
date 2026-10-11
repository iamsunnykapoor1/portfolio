// ==============================================================================
// SUNNY'S PORTFOLIO CONFIGURATION DATA
// ==============================================================================
// Tip: Edit this single file to update your personal details, project links,
// social profiles, education details, and placeholder info across the entire website!
// ==============================================================================

export const personalInfo = {
  name: "Sunny Kapoor",
  tagline: "Computer Science & Engineering Student | AI, Machine Learning & Software Development",
  typingTitles: [
    "Software Developer",
    "CSE Student (CGPA: 9.28)",
    "AI & ML Enthusiast",
    "GATE Aspirant",
    "Problem Solver"
  ],
  bioIntro: "I am a Computer Science & Engineering student at Bharati Vidyapeeth, Pune, and a GATE Aspirant passionate about Software Development, Artificial Intelligence, Machine Learning, and building impactful technology solutions.",
  aboutText: "I am a Computer Science & Engineering student at Bharati Vidyapeeth (Deemed to be University), Pune (CGPA: 9.28) and a GATE Aspirant with hands-on experience developing Machine Learning and NLP applications, real-time IoT optimization systems, and data analytics tools. I combine practical engineering skills in Python, Java, SQL, and Streamlit with strong computer science fundamentals in Data Structures, Algorithms, DBMS, and Operating Systems.",
  
  phone: "+91 7209383380",
  location: "Pune, India",

  // Real links
  socialLinks: {
    github: "https://github.com/iamsunnykapoor1",
    linkedin: "https://linkedin.com/in/iamsunnykapoor1",
    email: "iamsunnykapoor1@gmail.com",
  },
  
  resumeUrl: "#resume-modal",
  avatarUrl: "/avatar.svg",
};

// ==============================================================================
// ABOUT SECTION STATS
// ==============================================================================
export const statsData = [
  {
    id: 1,
    number: "9.28",
    label: "B.Tech CGPA",
    description: "Consistently high academic standing in Computer Science & Engineering at Bharati Vidyapeeth."
  },
  {
    id: 2,
    number: "5+",
    label: "Projects Completed",
    description: "Hands-on AI, ML, NLP, and software applications built from concept to execution."
  },
  {
    id: 3,
    number: "200+",
    label: "Students Mentored",
    description: "Led and coordinated technical initiatives as CSE Co-Head & GFG Student Coordinator."
  }
];

// ==============================================================================
// SKILLS DATA
// ==============================================================================
export const skillsData = [
  {
    category: "Programming",
    icon: "FiCode",
    description: "Core languages for software engineering, algorithmic problem solving, and database querying.",
    skills: [
      { name: "Python", level: "Proficient", highlight: "NumPy, Pandas, Scikit-learn, Scripting" },
      { name: "Java", level: "Proficient", highlight: "Core Java, OOP, Collections" },
      { name: "C", level: "Proficient", highlight: "Data Structures, Pointers, Algorithms" },
      { name: "SQL", level: "Proficient", highlight: "Relational Queries, Joins, Indexing" }
    ]
  },
  {
    category: "Machine Learning & Data",
    icon: "FiActivity",
    description: "Applied machine learning, NLP spam detection, and analytical pipelines.",
    skills: [
      { name: "Scikit-learn", level: "Specialized", highlight: "Random Forest, Regression, Classification" },
      { name: "NLP & TF-IDF", level: "Specialized", highlight: "Text Vectorization, NLTK, Precision Tuning" },
      { name: "Pandas & NumPy", level: "Specialized", highlight: "Feature Engineering & Data Wrangling" },
      { name: "Deep Learning", level: "Applied", highlight: "Neural Networks, Agricultural AI" }
    ]
  },
  {
    category: "Visualization & Tools",
    icon: "FiTerminal",
    description: "Interactive analytics dashboards, data visualization, and developer toolchains.",
    skills: [
      { name: "Streamlit", level: "Proficient", highlight: "Interactive ML Dashboards & Web UI" },
      { name: "Matplotlib & Seaborn", level: "Proficient", highlight: "Heatmaps, Word Clouds, Timelines" },
      { name: "Git & GitHub", level: "Proficient", highlight: "Branching, PRs, Version Control, CI/CD" },
      { name: "Jupyter & VS Code", level: "Workflow", highlight: "Interactive EDA, Debugging, Linting" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "FiCpu",
    description: "Fundamental theoretical principles and system architectures.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Core", highlight: "Arrays, Trees, Graphs, DP" },
      { name: "DBMS", level: "NPTEL Certified", highlight: "IIT Kharagpur Certified, Normalization, ACID" },
      { name: "Operating Systems", level: "Core", highlight: "Concurrency, Threads, Memory Mgmt" },
      { name: "Computer Networks", level: "Core", highlight: "Protocols, Layered Models, Routing" }
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
    githubUrl: "https://github.com/iamsunnykapoor1/fedsentry",
    liveUrl: "https://github.com/iamsunnykapoor1/fedsentry",
    highlights: [
      "Decentralized collaborative training preserving client data privacy",
      "Mitigates single-point-of-failure and raw data transmission vulnerabilities",
      "Engineered with clean Python modules and version controlled via Git/GitHub"
    ],
    accentColor: "indigo"
  },
  {
    id: "whatsapp-chat-analyzer",
    title: "WhatsApp Chat Analyzer",
    category: "NLP & Data Analytics",
    badge: "Chat Analytics",
    featured: true,
    description: "An interactive NLP and data analytics application that parses exported WhatsApp chats to extract communication patterns, word frequency distributions, activity heatmaps, and user interaction metrics.",
    detailedInfo: "WhatsApp Chat Analyzer processes exported 24-hour and 12-hour group and individual chat exports. Using regular expressions and specialized preprocessing pipelines, it transforms unstructured raw chat text into structured Pandas DataFrames. It delivers comprehensive statistics (message counts, word volume, media shared, and links extracted via URLExtract), timeline distributions, activity heatmaps, and visual word clouds with Hinglish and English stop-word filtering.",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Matplotlib & Seaborn",
      "WordCloud",
      "NLTK",
      "URLExtract",
      "Regex"
    ],
    githubUrl: "https://github.com/iamsunnykapoor1/project_whatapps_chat_analyzer",
    liveUrl: "https://github.com/iamsunnykapoor1/project_whatapps_chat_analyzer",
    highlights: [
      "Interactive Streamlit web dashboard providing both overall group and individual user-level insights",
      "Regex-powered preprocessor transforming unstructured WhatsApp chat exports into structured DataFrames",
      "Comprehensive metrics: total messages, word count, media attachments, and URLs extracted via URLExtract",
      "Dynamic word clouds and frequency distribution charts with custom Hinglish stop-word filtering"
    ],
    accentColor: "teal"
  },
  {
    id: "sms-spam-classifier",
    title: "SMS & Email Spam Classifier",
    category: "Machine Learning & NLP",
    badge: "NLP Spam Detection",
    featured: true,
    description: "A machine learning-based NLP web application that classifies SMS and email messages as spam or not spam using TF-IDF vectorization and Multinomial Naive Bayes.",
    detailedInfo: "Built with Scikit-learn, NLTK, and Streamlit, this spam detection system preprocesses raw text through tokenization, lowercasing, special character removal, stop-word filtering, and Porter stemming. The text is vectorized using TF-IDF and classified with high precision using a trained Multinomial Naive Bayes model to safeguard communication channels against fraudulent content.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "NLTK",
      "Streamlit",
      "TF-IDF Vectorizer",
      "Multinomial Naive Bayes",
      "Pandas & NumPy"
    ],
    githubUrl: "https://github.com/iamsunnykapoor1/sms_spam_classifier_pycharm",
    liveUrl: "https://github.com/iamsunnykapoor1/sms_spam_classifier_pycharm",
    highlights: [
      "Multinomial Naive Bayes classification model optimized for high precision spam detection",
      "End-to-end NLP preprocessing: tokenization, punctuation removal, stop-word removal, and Porter stemming",
      "TF-IDF text vectorization converting unstructured messages into numerical feature vectors",
      "Real-time Streamlit web interface delivering instantaneous message classification"
    ],
    accentColor: "purple"
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
    liveUrl: "https://github.com/iamsunnykapoor1/deep_learning_pbl",
    highlights: [
      "End-to-end predictive pipeline: Soil Data + Crop Type → DL Model → Fertilizer Recommendation",
      "Reduces excess fertilizer runoff and improves sustainable agricultural yields",
      "Extensive data preprocessing and evaluation on diverse multi-feature soil datasets"
    ],
    accentColor: "cyan"
  }
];

// ==============================================================================
// EDUCATION DATA
// ==============================================================================
export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Bharati Vidyapeeth (Deemed to be University), Pune",
    year: "2023 – 2027",
    cgpa: "9.28 / 10",
    status: "Currently Pursuing",
    summary: "Pursuing Bachelor of Technology in Computer Science & Engineering with an outstanding CGPA of 9.28. Building practical AI/ML applications, participating in departmental leadership, and preparing for the GATE examination in Computer Science.",
    keyCoursework: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Theory of Computation",
      "Object-Oriented Programming (Java/C)"
    ]
  },
  {
    degree: "Class XII, Science",
    institution: "Gyan Bharti Residential Complex",
    year: "2022 – 2023",
    cgpa: "79.4%",
    status: "Completed",
    summary: "Completed Higher Secondary Certificate in Science stream with strong foundations in Physics, Chemistry, and Mathematics.",
    keyCoursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science Fundamentals"
    ]
  },
  {
    degree: "Class X",
    institution: "Gyan Bharti Residential Complex",
    year: "2020 – 2021",
    cgpa: "94.6%",
    status: "Completed",
    summary: "Completed Secondary School Examination with exceptional academic distinction (94.6%).",
    keyCoursework: [
      "Mathematics",
      "Science",
      "Social Science",
      "English"
    ]
  }
];

// ==============================================================================
// ACHIEVEMENTS & CERTIFICATIONS
// ==============================================================================
export const achievementsData = [
  {
    category: "Leadership & Experience",
    title: "Co-Head, Department of Computer Science & Engineering",
    subtitle: "BV(DU)COEP, Pune",
    badge: "Leadership",
    icon: "FiTrendingUp",
    description: "Led and coordinated 5+ technical and non-technical initiatives involving more than 200 students while managing departmental events. Strengthened team coordination and leadership.",
    date: "Sep 2024 – Sep 2025"
  },
  {
    category: "Leadership & Community",
    title: "Student Coordinator, GeeksforGeeks Student Chapter",
    subtitle: "BV(DU)COEP GFG Student Chapter",
    badge: "Coordination",
    icon: "FiAward",
    description: "Organized workshops and peer-learning sessions on programming, DSA, and problem-solving concepts. Guided students through collaborative learning activities to improve coding ability.",
    date: "Nov 2023 – Sep 2024"
  },
  {
    category: "Certifications",
    title: "NPTEL Database Management Systems",
    subtitle: "IIT Kharagpur (NPTEL Online Certification)",
    badge: "IIT Certified",
    icon: "FiCheckCircle",
    description: "Successfully completed formal NPTEL certification in DBMS from IIT Kharagpur, demonstrating mastery of SQL, schema normalization, transaction management, and indexing.",
    date: "Certified"
  },
  {
    category: "Certifications",
    title: "NPTEL Theory of Computation",
    subtitle: "IIT Kanpur (NPTEL Online Certification)",
    badge: "IIT Certified",
    icon: "FiCheckCircle",
    description: "Successfully completed formal NPTEL certification in Theory of Computation from IIT Kanpur, covering regular languages, context-free grammars, Turing machines, and decidability.",
    date: "Certified"
  },
  {
    category: "National Examination",
    title: "GATE Examination Preparation",
    subtitle: "Graduate Aptitude Test in Engineering (CS / DA)",
    badge: "GATE Aspirant",
    icon: "FiBookOpen",
    description: "Actively preparing for the GATE examination with rigorous problem solving across core CS disciplines: Discrete Mathematics, Algorithms, OS, DBMS, Computer Networks, and Machine Learning.",
    date: "Target: 2026/2027"
  },
  {
    category: "Academic Excellence",
    title: "Academic Distinction (CGPA: 9.28)",
    subtitle: "Bharati Vidyapeeth (Deemed to be University), Pune",
    badge: "Academic",
    icon: "FiAward",
    description: "Consistently ranked at the top of the engineering cohort with a 9.28 CGPA in B.Tech Computer Science and Engineering.",
    date: "2023 – Present"
  }
];
