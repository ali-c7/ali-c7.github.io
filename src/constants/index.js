import {
  mobile,
  backend,
  creator,
  web,
  pytorch,
  openai,
  mongodb,
  sklearn,
  azuredevops,
  cplusplus,
  csharp,
  tensorflow,
  python,
  matlab,
  kubernetes,
  git,
  streamlit,
  docker,
  rocscience,
  loadpro,
  associated,
  uwaterloo,
  structuralapp,
  chatbot,
  facial_recognition,
  reactjs,
  claude,
  cursor,
  loadpro_preview,
  synq_preview,
  helicalpile,
  cptsimulations,
  dynamiccompaction,
  mohrscircle,
  gameproject,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "publications", title: "Publications" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Applications", icon: web },
  { title: "Machine Learning Models", icon: mobile },
  { title: "Backend Development", icon: backend },
  { title: "Interdisciplinary Engineer", icon: creator },
];

const techStack = [
  { name: "Python", icon: python },
  { name: "C++", icon: cplusplus },
  { name: "C#", icon: csharp },
  { name: "React", icon: reactjs },
  { name: "MATLAB", icon: matlab },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "Git", icon: git },
  { name: "Azure DevOps", icon: azuredevops },
];

const aiStack = [
  { name: "Claude", icon: claude },
  { name: "Cursor", icon: cursor },
  { name: "OpenAI", icon: openai },
  { name: "TensorFlow", icon: tensorflow },
  { name: "PyTorch", icon: pytorch },
  { name: "scikit-learn", icon: sklearn },
  { name: "Streamlit", icon: streamlit },
];

const engineeringSkills = [
  { name: "Settle3", icon: rocscience },
  { name: "RSPile", icon: rocscience },
  { name: "Numerical Analysis", icon: null },
  { name: "Finite Element Analysis", icon: null },
  { name: "Structural Analysis", icon: null },
  { name: "Geotechnical Engineering", icon: null },
  { name: "Foundation Design", icon: null },
  { name: "Ground Improvement", icon: null },
  { name: "Settlement Analysis", icon: null },
];

const stackGroups = [
  {
    title: "Tech Stack",
    description: "Languages, databases, and dev tools I build with daily.",
    items: techStack,
  },
  {
    title: "AI Stack",
    description: "AI assistants, LLMs, and machine learning frameworks.",
    items: aiStack,
  },
  {
    title: "Engineering Skills",
    description: "Domain expertise in geotechnical and structural engineering.",
    items: engineeringSkills,
  },
];

const publications = [
  {
    title: "Settle3 Verification Manual — Dynamic Compaction",
    type: "Manual",
    typeColor: "blue-text-gradient",
    description:
      "Verification manual documenting dynamic compaction ground improvement analysis in Settle3.",
    link: "https://static.rocscience.cloud/assets/verification-and-theory/Settle3/Settle3-Verification-Manual-Dynamic-Compaction.pdf",
    author: "Ali Chaudhry, Rocscience",
    date: "2025",
  },
  {
    title: "Dynamic Compaction: The Latest Ground Improvement Method in Settle3",
    type: "Article",
    typeColor: "green-text-gradient",
    description:
      "Technical article on modeling dynamic compaction for embankments, storage yards, and large-scale infrastructure.",
    link: "https://www.rocscience.com/learning/dynamic-compaction-the-latest-ground-improvement-method-in-settle3",
    author: "Ali Chaudhry, Rocscience",
    date: "May 2025",
  },
  {
    title: "RSPile Helical Pile Verification Manual",
    type: "Manual",
    typeColor: "blue-text-gradient",
    description:
      "Verification manual for helical pile capacity calculations including compression and uplift analysis.",
    link: "https://static.rocscience.cloud/assets/verification-and-theory/RSPile/RSPile-Helical-Pile-Verification-Manual.pdf",
    author: "Ali Chaudhry, Rocscience",
    date: "2024",
  },
  {
    title:
      "The Wait is Over: This New RSPile Feature Makes Helical Pile Design More Efficient",
    type: "Article",
    typeColor: "green-text-gradient",
    description:
      "Article introducing helical pile modeling in RSPile for fast-paced foundation projects with minimal soil disturbance.",
    link: "https://www.rocscience.com/learning/the-wait-is-over-this-new-rspile-feature-makes-helical-pile-design-more-efficient",
    author: "Ali Chaudhry & Ahmed Mufty, Rocscience",
    date: "Oct 2024",
  },
  {
    title: "Predictive Pavement Modeling for Infrastructure Planning",
    type: "Journal",
    typeColor: "pink-text-gradient",
    description:
      "National Research Council-funded publication studying machine learning approaches to long-term pavement performance prediction.",
    link: "https://www.tandfonline.com/doi/abs/10.1080/14680629.2024.2373222",
    author: "Ali Chaudhry et al.",
    date: "2024",
  },
];

const professionalProjects = [
  {
    name: "LoadPro.io",
    description:
      "A web-based structural analysis platform that helps students and engineers automate beam, frame, and truss calculations. Users can sign in with Google, store projects in the cloud, and view interactive shear, moment, and axial force diagrams — all from the browser.",
    image: loadpro_preview,
    link: "https://www.loadpro.io/",
    featured: true,
    hasBeamAnimation: true,
  },
  {
    name: "SynqAI",
    description:
      "An AI-powered front desk platform that automatically handles calls, texts, and website messages for service businesses. Synq captures every inbound inquiry 24/7 — recovering missed calls via SMS, engaging website visitors in real time, and delivering booking requests straight to the business owner.",
    image: synq_preview,
    link: "https://getsynq.ca/",
    featured: true,
    hasBeamAnimation: false,
  },
];

const experiences = [
  {
    title: "Founder",
    company_name: "LoadPro.io",
    icon: loadpro,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Developed a web-based structural analysis application on Streamlit Cloud dedicated to helping students and engineers automate beam, frame, and truss calculations",
      "Engineered a scalable backend with Python and MongoDB, allowing users to securely store, retrieve, and manage structural analysis projects",
      "Integrated Google OAuth 2.0 authentication, allowing seamless user sign-ups, logins, and secure session management",
      "Implemented interactive visualizations of structural analysis results using Plotly, Matplotlib, and Altair, providing interactive graphs for shear, moment and axial force diagrams",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Rocscience",
    icon: rocscience,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Lead developer for RSPile and Settle3, utilizing MFC to design and implement user-friendly front-end interfaces",
      "Reduced technical debt by refactoring legacy C++ code to conform to MVVM architecture, enabling more scalable, maintainable, and bug-free code for future developers",
      "Produced high-quality, on-time projects by thoroughly planning software sprints, executing development, and deploying end-to-end release pipelines on Azure DevOps",
      "Collaborated in Scrum teams to deliver high-priority features through iterative Agile development, ensuring rapid delivery and continuous improvement",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Associated Engineering",
    icon: associated,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Optimized engineers' time on project-specific structural calculations by creating generalized programs with Tekla Tedd's API, saving the company weeks on deliverables",
      "Reduced dependency on costly third-party engineering software by providing a validated in-house solution, allowing the company to streamline calculations and lower expenses",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company_name: "Centre for Pavement and Transportation Technology",
    icon: uwaterloo,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      "Enhanced the lab's research portfolio through a high-impact, National Research Council-funded publication that studied predictive pavement modeling for infrastructure planning",
      "Assisted in the development and implementation of machine learning algorithms trained from 25+ years of pavement data with methods including linear regression, random forests, support vector machine, and Artificial Neural Networks (ANNs) to predict long-term pavement performance",
      "Performed hyperparameter tuning and feature engineering within the Scikit-learn library to achieve a model accuracy of R2 = 0.95",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Integrated Mechanics and Imaging Lab",
    icon: uwaterloo,
    iconBg: "#E6DEDD",
    date: "2020",
    points: [
      "Developed custom research software to process CT scan data and generate high-fidelity 3D models for FEM analysis",
      "Utilized MATLAB and computational imaging techniques to automate image segmentation, meshing, and data processing workflows, enabling efficient reconstruction of high-fidelity models from CT scans",
    ],
  },
];

const projectGroups = [
  {
    title: "Professional Work",
    description:
      "Examples of professional work developed in the geotechnical software industry.",
    projects: [
      {
        name: "Helical Pile Capacity Calculations in RSPile",
        description:
          "Led the development of a new module for calculating helical pile capacities in RSPile, implementing industry-standard methods for both compression and tension loading scenarios.",
        tags: [
          { name: "C++", color: "blue-text-gradient" },
          { name: "MFC", color: "green-text-gradient" },
          { name: "geotechnical", color: "pink-text-gradient" },
        ],
        image: helicalpile,
        source_code_link:
          "https://www.rocscience.com/learning/the-wait-is-over-this-new-rspile-feature-makes-helical-pile-design-more-efficient",
      },
      {
        name: "CPT Simulations in Settle3",
        description:
          "Developed a comprehensive CPT data interpretation system in Settle3, enabling automatic soil parameter estimation and settlement analysis from cone penetration test data.",
        tags: [
          { name: "C++", color: "blue-text-gradient" },
          { name: "algorithms", color: "green-text-gradient" },
          { name: "geotechnical", color: "pink-text-gradient" },
        ],
        image: cptsimulations,
        source_code_link:
          "https://www.rocscience.com/help/settle3/documentation/cpt-analysis/cpt-simulation",
      },
      {
        name: "Dynamic Compaction in Settle3",
        description:
          "Implemented dynamic compaction in Settle3 to simulate repeated heavy impact passes and automatically calculate ground stiffness, settlement, crater size, and vibration metrics.",
        tags: [
          { name: "C++", color: "blue-text-gradient" },
          { name: "OpenGL", color: "green-text-gradient" },
          { name: "algorithms", color: "pink-text-gradient" },
        ],
        image: dynamiccompaction,
        source_code_link:
          "https://www.rocscience.com/learning/dynamic-compaction-the-latest-ground-improvement-method-in-settle3",
      },
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Projects leveraging AI/ML technologies including natural language processing, computer vision, and deep learning.",
    projects: [
      {
        name: "Pavement Performance Prediction using Machine Learning",
        description:
          "Published research in the International Journal of Pavement Engineering on predicting long-term pavement performance using various machine learning algorithms. Developed models achieved R² = 0.95 through feature engineering and hyperparameter optimization.",
        tags: [
          { name: "scikit-learn", color: "blue-text-gradient" },
          { name: "research", color: "green-text-gradient" },
          { name: "machine learning", color: "pink-text-gradient" },
        ],
        image: uwaterloo,
        source_code_link:
          "https://www.tandfonline.com/doi/abs/10.1080/14680629.2024.2373222",
      },
      {
        name: "Virtual Chatbot Assistant for Medical Clinic",
        description:
          "Developed a Retrieval-Augmented Generation (RAG) chatbot using NLP and vector embeddings, trained on a podiatry clinic's website data. Designed to enhance customer service by providing accurate, context-aware responses for improved patient care.",
        tags: [
          { name: "RAG, LLMs", color: "blue-text-gradient" },
          { name: "gpt-4.0", color: "green-text-gradient" },
          { name: "prompt engineering", color: "pink-text-gradient" },
        ],
        image: chatbot,
        source_code_link: "https://podiatry-clinic-chatbot.streamlit.app/",
      },
      {
        name: "Facial Expression Recognition Model",
        description:
          "Trained a TensorFlow CNN on the FER-2013 facial expression dataset using Google Colab and cloud GPUs for efficient processing. Preprocessed images with resizing and feature extraction to enhance model performance, then deployed the trained model for real-time emotion prediction.",
        tags: [
          { name: "tensorflow", color: "blue-text-gradient" },
          { name: "numpy", color: "green-text-gradient" },
          { name: "google colab", color: "pink-text-gradient" },
        ],
        image: facial_recognition,
        source_code_link:
          "https://facial-expression-recognition-model.streamlit.app/",
      },
    ],
  },
  {
    title: "Engineering Software",
    description:
      "Professional engineering software tools for structural analysis, design calculations, and technical visualization of engineering problems.",
    projects: [
      {
        name: "2D Structural Analysis Web App",
        description:
          "Developed and launched a standalone web application using Streamlit, leveraging OOP principles to perform structural analysis calculations and interactive visualizations on 2D frames. Implemented user authentication and file storage to enable secure access and persistent project management.",
        tags: [
          { name: "streamlit", color: "blue-text-gradient" },
          { name: "algorithms", color: "green-text-gradient" },
          { name: "plotly", color: "pink-text-gradient" },
        ],
        image: structuralapp,
        source_code_link: "https://loadpro.io",
      },
      {
        name: "Mohr's Circle Calculator",
        description:
          "An educational tool used for teaching students about Mohr's Circle and stress analysis.",
        tags: [
          { name: "streamlit", color: "blue-text-gradient" },
          { name: "algorithms", color: "green-text-gradient" },
          { name: "plotly", color: "pink-text-gradient" },
        ],
        image: mohrscircle,
        source_code_link: "https://mohrscircle.streamlit.app/",
      },
    ],
  },
  {
    title: "Game Development",
    description:
      "Fun personal projects exploring game development and interactive simulations using Unity Engine.",
    projects: [
      {
        name: "2D Top-Down RPG Game",
        description:
          "Currently developing a 2D RPG game in Unity inspired by classic Legend of Zelda titles. Features include combat mechanics, inventory system, and quest progression. Implementing pixel art graphics and custom animations for character movement and interactions.",
        tags: [
          { name: "Unity", color: "blue-text-gradient" },
          { name: "C#", color: "green-text-gradient" },
          { name: "Game Design", color: "pink-text-gradient" },
        ],
        image: gameproject,
        source_code_link: "https://github.com/ali-c7",
      },
    ],
  },
];

export {
  services,
  techStack,
  aiStack,
  engineeringSkills,
  stackGroups,
  publications,
  professionalProjects,
  experiences,
  projectGroups,
};
