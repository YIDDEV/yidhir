import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yidhir KOULAL",
  initials: "DV",
  url: "https://github.com/Y1D1R/",
  location: "Paris, FRANCE",
  locationLink: "https://www.google.com/maps/place/paris",
  description:
    "<-----------  Data Scientist  -----------> specializing in Computer Vision and Machine Learning. I'm passionate about building intelligent systems with real-world impact.",
  summary:
  "With **two Master's** degrees in Visual Computing and Vision & Intelligent Systems, I specialize in **Computer Vision** and **Machine Learning**.My experience spans R&D roles in medical imaging, time-series classification, and TinyML, where I tackled real-world challenges through innovative AI solutions.\n\n" +
  "Always eager to take on new challenges. **I’m open to exciting opportunities to push the boundaries of AI.**",
  avatarUrl: "/yidhir/me.png",
  skills: [
    "Python",
    "Java",
    "C/C++",
    "OpenCV",
    "TensorFlow",
    "TensorFlow Lite",
    "Keras",
    "PyTorch",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Plotly",
    "PyQT5",
    "PySide",
    "ONNX",
    "Tkinter",
    "JavaFX",
    "JavaSwing",
    "HTML/CSS",  
    "Git",
    "GitLab/GitHub",
    "Docker",
    "Blender",
    "Unity",
    "VMware",
    "UML",
    "Oracle",
    "SQL",
    "PL/SQL",
    "SQLite",
    "SQL Plus",
    "Arduino"
],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "koulalyidhiraghiles@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Y1D1R",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yidhir-aghiles-koulal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@yidhir",
        icon: Icons.youtube,
        navbar: true,
        target: "_blank",
      },
      email: {
        name: "Send Email",
        url: "mailto:koulalyidhiraghiles@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "IRT SystemX",
      href: "https://www.irt-systemx.fr/",
      badges: [],
      location: "91120 PALAISEAU, FRANCE",
      title: "R&D Deep Learning Engineer",
      logoUrl: "/system-x-logo.jpg",
      start: "March 2023",
      end: "August 2023",
      description:
      "I worked on time-series classification using deep learning for gait mode recognition in the context of controlling a robotic orthosis. I implemented a data qualification process to detect potential issues and artifacts, ensuring high-quality inputs for model training. Additionally, I developed a benchmark of multiple deep learning architectures, including LSTM Encoder-Decoder and CNN-LSTM Encoder-Decoder, for real-time multi-horizon gait mode classification. To enhance model interpretability, I analyzed the latent space, uncovering patterns with potential applications in assessing gait patterns for rehabilitation patients." 
    },
    {
      company: "Laboratoire de Recherche en Intelligence Artificielle (LRIA)",
      badges: [],
      href: "https://lria.usthb.dz/",
      location: "16111 Bab Ezzouar, ALGERIE",
      title: "Computer Vision Engineer",
      logoUrl: "/lria_logo.jpeg",
      start: "February 2023",
      end: "July 2023",
      description:
      "I worked on the classification of suspicious lung nodules using AI approaches. I developed a semi-3D classification system for CT scans of lung nodules and implemented a Capsule Network (CapsNet) model from scratch to enhance detection accuracy. Additionally, I applied data augmentation techniques to improve model robustness and integrated advanced classification methods, including Game Theory applications. To facilitate clinical usage, I created a desktop application designed to assist clinicians in nodule classification."
    },
    {
      company: "Laboratoire de Recherche en Intelligence Artificielle (LRIA)",
      href: "https://lria.usthb.dz/",
      badges: [],
      location: "16111 Bab Ezzouar, ALGERIE",
      title: "Computer Vision Engineer",
      logoUrl: "/lria_logo.jpeg",
      start: "March 2021",
      end: "July 2021",
      description:
      "I developed a fall detection application for elderly people, focusing on real-time motion analysis. The system used background subtraction to isolate moving objects from static elements in the scene and applied a Gaussian filter to reduce video noise and enhance image sharpness. Detection and tracking were based on the size of regions of interest and bounding boxes around individuals. Additionally, I integrated center of mass calculations to improve fall detection accuracy and minimize false alarms."
    },
    
  ],
  education: [
    {
      school: "University of Paris Cité (Ex : Paris Descartes)",
      href: "https://odf.u-paris.fr/fr/offre-de-formation/master-XB/sciences-technologies-sante-STS/informatique-K2NDIF4R/master-informatique-parcours-vision-et-machine-intelligente-JT5O4IEX.html",
      degree: "Master’s Degree in Vision and Intelligent Systems",
      logoUrl: "/pcite.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Sciences and Technology Houari Boumediene",
      href: "https://finfo.usthb.dz/index.php/master-informatique-visuelle/",
      degree: "Master’s Degree in Visual Computing",
      logoUrl: "/usthb.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "University of Sciences and Technology Houari Boumediene",
      href: "https://finfo.usthb.dz/index.php/licence-isil/",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/usthb.png",
      start: "2018",
      end: "2021",
    },
   
  ],
  projects: [
    {
      title: "2D Medical Image Segmentation with UNETR",
      href: "https://github.com/Y1D1R/UNETR-2D-Medical-Image-Segmentation",
      dates: "Jan 2025",
      active: true,
      description:
        "Developed a 2D UNETR model from scratch for medical image segmentation, adapting the original 3D architecture to a 2D version.",
      technologies: [
        "Python",
        "PyTorch",
        "Numpy",
        "PIL"
        
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Y1D1R/UNETR-2D-Medical-Image-Segmentation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/UNETR.png",
      video:"",
    },
    {
      title: "Residual driven Fuzzy C-Means Clustering for Image Segmentation",
      href: "https://github.com/Y1D1R/Residual-driven-Fuzzy-C-Means-Clustering-for-Image-Segmentation.git",
      dates: "Dec 2023 - Jan 2024",
      active: true,
      description:
        "Implemented the Residual driven Fuzzy C-Means (RFCM) algorithm from Scratch for color image segmentation based on the work by [Cong Wang and al. 2021] to the limitations of traditional Fuzzy C-Means (FCM) by incorporating a residual-related regularization term to precisely estimate noise, enhancing clustering performance.",
      technologies: [
        "Python",
        "Numpy",
        "OpenCV",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Y1D1R/Residual-driven-Fuzzy-C-Means-Clustering-for-Image-Segmentation.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "wrfcm.mp4",
    },
    {
      title: "EasyNodule - AI-Driven Pulmonary Nodule Classification",
      href: "https://github.com/Y1D1R/EasyNodule_Fork",
      dates: "Feb 2023 - Jul 2023",
      active: true,
      description:
      "Developed a semi-3D nodule classification system for CT scans using a custom-built Capsule Network (CapsNet). Incorporated Game Theory to enhance performance, achieving 96% accuracy. Designed and implemented a Python desktop application for clinical use.",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow",
        "Kaggle",
        "SQLite",
        "PyQT5",
      ],
      links: [
        {
          type: "YouTube",
          href: "https://youtu.be/DerCbbJpCoQ?feature=shared",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Y1D1R/EasyNodule_Fork",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "easynodule.mp4",
    },
    {
      title: "Medical Image Segmentation using U-Net",
      href: "https://automatic.chat",
      dates: "Jan 2024",
      active: true,
      description:
        "I worked on a project involving an electron microscopy dataset of the CA1 region of the hippocampus. The goal was to fine-tune the original U-Net architecture to better suit this specific dataset. I evaluated the segmentation performance using metrics such as Precision, Recall, F1 Score, and the Jaccard Index (IoU) to assess the model's accuracy and reliability.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "Google Colab"
        ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Y1D1R",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:"/unet.png",
      video:"",
    },
    {
      title: "Gastrointestinal Infection Detection using Endoscopic Images",
      href: "https://magicui.design",
      dates: "Dec 2021 - Jan 2022",
      active: true,
      description:
        "I developed a system for detecting gastrointestinal infections using endoscopic images. The project focused on enhancing image contrast and segmenting lesions for accurate detection. By converting RGB color models to the CIELAB color space, the analysis became more robust, as CIELAB is more perceptually uniform and suited for medical image processing. I applied the K-Means clustering algorithm to segment different regions of interest and used morphological filters to refine the segmentation results, improving the overall accuracy of the detection process.",
      technologies: [
        "Python",
        "NumPy",
        "OpenCV",
        "scikit-image",
        "Matplotlib"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Y1D1R",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "taiv2.mp4",
    },
    {
      title: "Hand Gesture Recognition using TinyML",
      href: "https://youtu.be/cEl1IDeMa0Q?feature=shared",
      dates: "Nov 2022 - Dec 2022",
      active: true,
      description:
        "I collaborated on a group project focused on hand gesture recognition using TinyML. The project involved using two Arduino Nano 33 BLE Sense devices to detect hand gestures. Data was collected from five subjects and saved in CSV files. We trained a Multilayer Perceptron (MLP) to classify different hand gestures and deployed the TensorFlow Lite model on Arduino for real-time gesture recognition. The use case chosen was controlling a video game using hand gestures. The project was presented at the TINYML4D international workshop.",
      technologies: [
    "Arduino Nano 33 BLE Sense",
    "CSV",
    "Google Colab",    
    "Python",
    "TensorFlow Lite",
    "Scikit-learn",
    "UART",      
      ],
      links: [
        {
          type: "YouTube",
          href: "https://youtu.be/cEl1IDeMa0Q?feature=shared",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "",
      video:"arduino.mp4",
    },
    
  ],
  hackathons: [],
} as const;
