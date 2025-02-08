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
  keras,
  docker,
  rocscience,
  loadpro,
  associated,
  uwaterloo,
  shopify,
  structuralapp,
  chatbot,
  facial_recognition,
  reactjs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Applications",
    icon: web,
  },
  {
    title: "Machine Learning Models",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Interdisciplinary Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Azure DevOps",
    icon: azuredevops,
  },
  {
    name: "scikit-learn",
    icon: sklearn,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "matlab",
    icon: matlab,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "keras",
    icon: keras,
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
      "Implemented interactive visualizations of structural analysis results using Plotly, Matplotlib, and Altair, providing interactive graphs for shear, moment and axial force diagrams"
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
      "Collaborated in Scrum teams to deliver high-priority features through iterative Agile development, ensuring rapid delivery and continuous improvement"
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
      "Reduced dependency on costly third-party engineering software by providing a validated in-house solution, allowing the company to streamline calculations and lower expenses"
    ],
  },
  {
    title: "Machine Learning Researcher",
    company_name: "Centre for Pavement and Transportation Technology",
    icon: uwaterloo,
    iconBg: "#E6DEDD",
    date: "2021",
    points: [
      "Enhanced the lab’s research portfolio through a high-impact, National Research Council-funded publication that studied predictive pavement modeling for infrastructure planning",
      "Assisted in the development and implementation of machine learning algorithms trained from 25+ years of pavement data with methods including linear regression, random forests, support vector machine, and Artificial Neural Networks (ANNs) to predict long-term pavement performance",
      "Performed hyperparameter tuning and feature engineering within the Scikit-learn library  to achieve a model accuracy of R2 = 0.95"
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


const projects = [
  {
    name: "2D Structural Analysis Web App",
    description:
      "Designed, developed, and launched a standalone web application using Streamlit, leveraging OOP principles to perform structural analysis calculations and interactive visualizations on 2D frames",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "algorithms",
        color: "green-text-gradient",
      },
      {
        name: "plotly",
        color: "pink-text-gradient",
      },
    ],
    image: structuralapp,
    source_code_link: "https://share.streamlit.io/app/loadpro/",
  },
  {
    name: "Virtual Chatbot Assistant for Medical Office",
    description:
      "Created a Retrieval-Augmented Generation (RAG) chatbot trained on a podiatry clinic's website data to enhance customer service and improve patient care.",
    tags: [
      {
        name: "RAG, LLMs",
        color: "blue-text-gradient",
      },
      {
        name: "gpt-4.0",
        color: "green-text-gradient",
      },
      {
        name: "prompt engineering",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://podiatry-clinic-chatbot.streamlit.app/",
  },
  {
    name: "Facial Expression Recognition Model",
    description:
      "Built a TensorFlow Convoluted Neural Network (CNN) to predict facial expressions, importing and preprocessing a labeled dataset with resizing and feature extraction to enhance model performance",
    tags: [
      {
        name: "tensorflow, keras",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: facial_recognition,
    source_code_link: "https://github.com/ali-c7",
  },
];

export { services, technologies, experiences, projects };
