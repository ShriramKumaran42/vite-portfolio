import project1 from "../assets/projects/wproject-1.png";
import project2 from "../assets/projects/qproject-1.png";
import project3 from "../assets/projects/project-1.png";
import project4 from "../assets/projects/5project-1.png"
import anna from "../assets/projects/anna.png"
import srm from "../assets/projects/srm.png"
import jv from "../assets/projects/jv.png"
import jhss from "../assets/projects/jhss.png"
import resume from "../assets/projects/Shriramkumaran.RnewResume.pdf"




export const HERO_CONTENT = {
  introduction:`I am an enthusiastic full-stack developer with an interest in creating scalable and responsive web applications. With hands-on experience on front-end technologies like React.js, HTML, CSS, and Javascript as well as back-end technologies like JAVA and MySQL.`,
  resumeLinkText: "Download Resume",
  resumeLink: resume,
};

export const ABOUT_TEXT = `I am an passionate and adaptable student with a wide variety of interests and a strong drive to learn and grow. Looking for an opportunity to apply knowledge and gain practical experience. To succeed in an environment of growth and excellence. I am a Full stack developer with hands on experience on React Js, HTML, CSS, Java, Javascript, Tailwind CSS, Framer Motion and MySql. I am waiting for an opportunity to earn a job that provides me with job satisfaction, to upgrade my knowledge and skills, and to achieve personal as well as organizational goals.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2023",
    role: "Master of Computer Applications",
    company: "MCA",
    description: `Anna University, College of Engineering, Guindy`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2018 - 2021",
    role: "Bachelor of Computer Applications",
    company: "BCA",
    description: `SRM Institute of Science and Technology`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2017 - 2018",
    role: "HSC - State Board",
    company: "Computer Science",
    description: `Jawahar Higher Secondary School`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2015 - 2016",
    role: "SSLC",
    company: "CBSE",
    description: `Jawahar Vidyalaya Senior Secondary School`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Captcha solving application",
    image: project1,
    description:
      "Deep learning based chrome extension that autofill captcha without any human interactions.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Movie recommendation system",
    image: project2,
    description:
      "Machine learning based movie recommendation system built with the help of movielens dataset.This recommendation system was created using the Content based filtering.",
    technologies: ["Machine Learning", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Student data management and data retrieval system",
    image: project3,
    description:
      "Developed a data management and retrieval system using MERN stack. This system also provides filter search and query methods for the authorized person such as admin to retrieve specific data based for accreditation process of NAAC and NBA.",
    technologies: ["HTML", "CSS", "ReactJS", "MERN"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A CV portfolio website showcasing my education timeline, my projects, technical skills, and contact information.",
    technologies: ["HTML", "TailwindCSS", "ReactJS", "Framer Motion"],
  },
  
];

export const EDU = [
  {
    title: "Master of Computer Applications - MCA",
    image: anna,
    description:
      "Anna University, College of Engineering, Guindy",
    technologies: ["2021 - 2023"],
  },
  {
    title: "Bachelor of Computer Applications - BCA",
    image: srm,
    description:
      "SRM Institute of Science and Technology",
    technologies: ["2018 - 2021"],
  },
  {
    title: "HSC - Computer Science - State Board",
    image: jhss,
    description:
      "Jawahar Higher Secondary School",
    technologies: ["2017 - 2018"],
  },
  {
    title: "SSLC - CBSE",
    image: jv,
    description:
      "Jawahar Vidyalaya Senior Secondary School",
    technologies: ["2015 - 2016"],
  },
  
];

export const EDUCATION = [
  {
    id: 1,
    image: project1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Stanford University",
    duration: "2012 - 2016",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Master of Science in Software Engineering",
    institution: "MIT",
    duration: "2016 - 2018",
    description:
      "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2019",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];

export const CONTACT = {
  address: "ShriramKumaran.R",
  phoneNo: "9962440184",
  email: "shriramkumaran142000@gmail.com",
};
