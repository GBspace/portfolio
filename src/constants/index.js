export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Manoj K',
    position: 'CTO @ Dropsuite | Security and SaaS',
    img: '/portfolio/assets/user.png',
    review:
      'Garima excelled at demonstrating both technical and change agent skills. She had the enthusiasm and drive to imagine a Front-end framework. She can take a tech design brief and demonstrate multiple options for implementation. We had the arduous task of making a legacy single page application work in tandem with a modern react based application. She demonstrated very good skills in driving the proof of concept enabling us to decide on a slow transition process. She led the team across multiple regions to design the project. Her communication skills enable her to explain design and onboard engineers to the platform effortlessly. She is an excellent asset to have on the team, especially if you are embarking on a new project that involves complex front end technology design. She has the necessary skills to be a senior front-end engineer and drive design and lead a team of engineers.',
  },
  {
    id: 2,
    name: 'Haojie Zheng',
    position: 'Staff Software Engineer at The Trade Desk',
    img: '/portfolio/assets/user.png',
    review:
      "Garima has worked in my team for more than 2 years. In those 2 years, I've seen her dedication to her work and her constant pursue to learn new things. She has a very positive attitude and willingness to research on and try on new techniques in FE development. I'll have to say, Garima is one of the easiest engineer to manage, as she is very independent and knows what she needs to work on. She is also able to take feedback very well. I would highly recommend Garima for any senior FE engineer roles.",
  },
  {
    id: 3,
    name: 'Vladimir Shein',
    position: 'Lead JavaScript Fullstack Developer',
    img: '/portfolio/assets/user.png',
    review:
      "Worked with Garima in JPM, she was in minority. Banks codebase is often challenging, same as environment, Garima was tolerant to this challenges (remote desktop, restricted accesses, access tokens for each action, extra level of legacy code), she was productive. She was part of those minority of people, who seen real problems of arcitecture in UI apps, because know modern trends and problems of solutions of different ages. Fast learner. Extremely polite and nice person. Good friend. I would love to work with her again sometime in the future. I am sure she will be a great value add to any organization. Her current team is lucky to have her."},
  {
    id: 4,
    name: 'Sahithi Chittineni',
    position: 'Product Manager | ISB | Cisco Systems | BITS Pilani Product Manager | ISB | Cisco Systems | BITS Pilani',
    img: '/portfolio/assets/user.png',
    review: "I could not have asked for a more dynamic mentor than Garima in the early years of my career. Brainstorming with Garima has always helped me get more clarity into my work. Her enthusiasm to work on challenging problems has motivated our team to take up exciting projects. What sets her apart from other mentors is the effort she puts in to ensure the growth of her team members. Looking forward to working with her sometime again in the future."},
];

export const myProjects = [
  {
    title: 'Minglekari - Social Media App',
    desc: 'Minglekari is a unique social media app which is fully created and deployed for users to post and share their updates.',
    subdesc:
      'Built as a unique Software app with React js, Tailwind CSS, Appwrite, TypeScript, Shadcn UI, Tanstack Query. It provide features like infinite scrolling, authentication, user post, saving post and much more.',
    href: 'https://minglekari.vercel.app',
    texture: '/portfolio/textures/project/Minglekari.mp4',
    logo: '/portfolio/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/portfolio/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/portfolio/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/portfolio/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Appwrite',
        path: '/portfolio/assets/appwrite.png',
      },
      {
        id: 5,
        name: 'Shadcn UI',
        path: '/portfolio/assets/shadcn-ui.png'
      },
      {
        id:6,
        name: 'Tanstack Query',
        path: '/portfolio/assets/tanstack-query.png'
      }
    ],
  },
  {
    title: 'Slack React - Slack clone',
    desc: ' Slack application using React, Redux, Semantic UI.',
    subdesc:
      'With a focus to explore how applications like slack are built, I tried to implement the feature like authentication, theme selection and updation, one to one chat, channel creation and marking favourite. User can send images as well. Project is deployed on firebase.',
    href: 'https://slack-react-7d1fb.firebaseapp.com',
    texture: '/portfolio/textures/project/slack-react.mp4',
    logo: '/portfolio/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/portfolio/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'Semantic UI',
        path: '/portfolio/assets/semantic-ui.png',
      },
      {
        id: 3,
        name: 'Redux',
        path: '/portfolio/assets/redux.png',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/portfolio/assets/firebase.png',
      },
    ],
  },
  {
    title: 'Comic-genie, AI SAAS to generate and sell customized children story books [Work in progress]',
    desc: 'Comic-genie is an AI based SAAS which will generate personalised children storybooks and audio books as per their age and interests in seconds. Create intesrting characters and print them to dispatch.',
    subdesc:
      "Built with React js, Appwrite, Generative AI API's, Shadcn UI with tailwind, Express backend and tanstack query.",
    // href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/portfolio/textures/project/comic-genie.mp4',
    logo: '/portfolio/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/portfolio/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'OpenAI API',
        path: '/portfolio/assets/openai.png',
      },
      {
        id: 3,
        name: 'Eleven Labs API',
        path: '/portfolio/assets/11labs.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/portfolio/assets/nodejs.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Affinidi Pte. Ltd, Singapore',
    pos: ' Senior Front End Developer',
    duration: '11/2022 - 01/2025',
    title: [
          '• Spearheaded the development of a cross-platform application using Flutter, ensuring pixel-perfect design implementation and high-quality standards.',
          '• Collaborated closely with product teams to address evolving needs and deliver a user-controlled digital identity solution.',
          '• Transitioned from a ReactJS role to leading frontend efforts, showcasing adaptability and cross-platform expertise.'
    ],
    icon: '/portfolio/assets/affinidi.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Request Finance, Singapore',
    pos: 'Senior Front End Developer',
    duration: '05/2022 - 10/2022',
    title: [
      '• Optimized application performance and introduced enhancements to improve user experience.',
      '• Established and shared a Storybook component library, enabling consistent UI development across teams.',
      '• Gained hands-on experience with blockchain technologies and Tailwind CSS.'
    ],
    icon: '/portfolio/assets/requestFinance.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Bittitan, Singapore',
    pos: 'Senior Front End Developer',
    duration: '10/2019 - 02/2022',
    title: [
      '• Explored the world of Ember and re-engineered the entire application to React, building the revamped site from ground zero.',
      '• Identified solutions to keep both applications co-existing while taking the revamp process step by step.',
      '• Designed long-term solutions to ensure robustness and functional parity with the existing application.',
      '• Architected the application structure.',
      '• Evaluated and selected the best libraries and frameworks for the revamped application.',
      '• Planned, estimated, and distributed work on a release-to-release basis.',
      '• Created comprehensive documentation.'
    ],
    icon: '/portfolio/assets/bittitan.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'JP Morgan, Singapore',
    pos: 'Front End Developer, Consultant',
    duration: '10/2018 - 09/2019',
    title: [
    '• I was responsible for working on making user friendly UI using the technologies like React, Redux-Observables.',
    '• Unit tested code using Jest and Enzyme',
    '• Minor project to deliver github contribution chart on a periodic basis.'
    ],
    icon: '/portfolio/assets/jpmc.png',
    animation: 'victory',
  },
  {
    id: 5,
    name: 'Cisco Systems, Bengaluru',
    pos: 'Senior Software Engineer',
    duration: '05/2013 - 10/2018',
    title: [
     '• Transitioned from automation engineering to frontend development, working on end-to-end UI and backend solutions.',
     '• Implemented features like application monitoring and admin activity tracking, improving serviceability.',
     '• Built tools like "Retrospector" and "TrackMySprint" to streamline Agile processes.'
    ],
    icon: '/portfolio/assets/cisco.png',
    animation: 'clapping',
  },
  {
    id: 6,
    name: 'MBRDI, Bengaluru',
    pos: 'Post Graduate Engineer, Trainee',
    duration: '08/2012 - 05/2013',
    title: [
    '• As a trainee I did went through a lot of training and came up with an idea of Intelli-Vision (Auto-tagging of objects using Raspberry Pi, National Association for Blind)',
    '• It was a dream project based on raspberry pi and image processing that got selected and presented at the MBRDI innovation week.'
    ],
    icon: '/portfolio/assets/mbrdi.jpeg',
    animation: 'salute',
  },
];
