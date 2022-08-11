import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Orlando Coyoy', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Orlando Coyoy is a full stack Web Developer with experience in web application development and CMS solutions.', // e.g: Welcome to my website
};


// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Web Developer with Frontend and Backend skills.',
  paragraphTwo:
    'I am passionate about providing a positive user experience and learning different development technologies.',
  paragraphThree: 'I also strive to create efficient workflows and positive work environments.',
  resume: 'https://drive.google.com/file/d/1SiubSTUfg51S-zw6G5yGNq8sYQH1pOdu/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'oasisThumbnail.png',
    title: 'Oasis Pharmaceutical Management Inventory System',
    info:
      'A web app that keeps track of a clinic\'s pharmaceuticals. Each pharmaceutical in the inventory is able to be searched by Generic Name, Brand Name, or Common Uses.',
    info2: 'This project was made with ReactJS and SpringBoot.',
    button:'Case Study',
    url: '/oasisCaseStudy',
  },
  {
    id: nanoid(),
    img: 'techandlit.png',
    title: 'Technological Literacy Platform',
    info:
      'A platform with quick and digestible media for anyone who does not have the time, resources and/or privilege to discuss the nuances of information and communications technologies. The platform seeks to provide educational value, engagement, thought experiments, and new perspectives on digital technology for the user that engages with this platform.',
    info2: 'This project was made with GatsbyJS and Ghost CMS',
    url: 'https://techandliteracy.com/',
  },
  {
    id: nanoid(),
    img: 'robofriendsThumbnail.png',
    title: 'RoboFriends',
    info:
      'A web app that displays multiple cards with information. It also has a searchable directory with live updates based on what is being searched.',
    info2: 'This project was made with ReactJs.',
    url: 'https://ocoyoyix.github.io/robofriends/',
    repo: 'https://github.com/ocoyoyix/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'homeTemplateThumbnail.png',
    title: 'Home Page Template',
    info:
      'A template that is inteded to be used as a homepage. It is responsive so it can be used in any device. While it can be used for any kind of website, it functions best when used for subscription services. ',
    info2: 'This project was made with vanilla HTML, CSS, and JavaScript.',
    url: 'https://ocoyoyix.github.io/homepagetemplate/',
    repo: 'https://github.com/ocoyoyix/homepagetemplate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'netflixCloneThumbnail.png',
    title: 'Netflix Home Clone',
    info:
      'A clone of a previous Netflix homepage. It is intended to showcase the product features and pricing. ',
    info2:
      'This project was made with vanilla HTML, CSS, and JavaScript and the Home Page Template above.',
    url: 'https://ocoyoyix.github.io/netflixHomeClone/',
    repo: 'https://github.com/ocoyoyix/netflixHomeClone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's build together!",
  email: 'orlandocoyoy17@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ocoyoyix',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export const heroData = {
  title: 'Hello, My name is', // Hello, my name is
  name: 'Orlando Coyoy', // John
  subtitle: 'I am a Full Stack Web Developer', // I'm the Unknown Developer.
  cta: 'Learn More', // Know more
};
