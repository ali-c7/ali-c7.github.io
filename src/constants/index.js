import {
  mobile,
  backend,
  creator,
  web,
  pytorch,
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
    name: "git",
    icon: git,
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
    title: "Software Developer",
    company_name: "Rocscience",
    icon: rocscience,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Lead developer for RSPile and Settle3, designing and implementing user-friendly front-end interfaces using MFC.",
      "Reduced technical debt by refactoring legacy C++ code to adopt MVVM architecture, enhancing scalability and maintainability.",
      "Delivered high-quality projects on time by planning software sprints and deploying release pipelines on Azure DevOps.",
      "Collaborated in Scrum teams to prioritize and deliver features through Agile development, ensuring rapid delivery.",
      "Applied multi-threaded processing with OpenMP, reducing analysis runtime by up to 40% for large-scale simulations.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Associated Engineering",
    icon: associated,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Optimized engineers' time by creating generalized programs with Tekla Tedd's API, significantly reducing deliverable timelines.",
      "Developed an in-house validated solution to replace costly third-party software, streamlining calculations and lowering expenses.",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company_name: "Centre for Pavement and Transportation Technology",
    icon: uwaterloo,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "Enhanced research output through a National Research Council-funded publication on predictive pavement modeling.",
      "Developed machine learning algorithms using regression, random forests, SVM, and neural networks to predict pavement performance.",
      "Achieved a model accuracy of R² = 0.95 through hyperparameter tuning and feature engineering with Scikit-learn.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Integrated Mechanics and Imaging Lab",
    icon: uwaterloo,
    iconBg: "#E6DEDD",
    date: "2020",
    points: [
      "Achieved a key research milestone by developing a program in MATLAB capable of generating 3D models from CT scans of structural elements",
      "Created comprehensive documentation to improve user experience and interface navigation",
      " Demonstrated resourcefulness and determination by overcoming knowledge gaps and independently acquiring the knowledge needed to deliver results",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Engineering Design Chatbot",
    description:
      "Created an AI-powered chatbot trained on engineering codes to assist engineers with retrieving and understanding design parameters, actively being tested and refined by colleagues in the field to enhance accuracy",
    tags: [
      {
        name: "LLMs",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
