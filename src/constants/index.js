import {
  java,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  modern,
  mit,
  fergusson,
  CF,
  Review,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "School",
    company_name: "Modern High School",
    icon: modern,
    iconBg: "#383E56",
    date: "2017-2018",
    points: [
      "Passed out from Modern High with a score of 94% in 2018.",
      "Had a wonderful opportunity to serve as a house Prefect.",
      "Making friends and memories, You know how it is :)",
    ],
  },
  {
    title: "Junior College",
    company_name: "Fergusson College,Pune",
    icon: fergusson,
    iconBg: "#E6DEDD",
    date: "2018-2020",
    points: [
      "Passed out from Fergusson in 2020 with 73%.",
      "Started learning DataStructures and understand core Computer concepts.",
    ],
  },
  {
    title: "Bachelor's degree",
    company_name: "MIT World Peace University",
    icon: mit,
    iconBg: "#383E56",
    date: "2020-2024",
    points: [
      "Here I am, currently in my final year at MIT-WPU.",
      "Acquired a solid understanding of front-end development, utilizing HTML, CSS, and JavaScript to create visually appealing and interactive web applications.",
      "Actively participated in coding competitions and hackathons, honing problem-solving and critical thinking skills.",
    ],
  },
];

const projects = [
  {
    name: "Color Flipper",
    description:
      "A simple Vanilla JS project that gives out a random color on click.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: CF,
    source_code_link: "https://kabeerlatane.github.io/MyJavascriptProjects/",
  },
  {
    name: "Review Page",
    description:
      "A simple Vanilla JS project that shows different reviews on click along with images",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: Review,
    source_code_link: "https://kabeerlatane.github.io/Review/",
  },
];

export { services, technologies, experiences, projects };
