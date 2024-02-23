let projects = [
  {
    id: '001-uuid',
    name: 'GoFarm',
    createdAt: '2021-12-20',
    category: 'machine learning',
    description:
      'GoFarm is a machine learning-based website which is intended to predict suitable plants for planting based on user environmental conditions. GoFarms here to help you determine plants based on the soil structure data and rainfall. We created this application to increase the success rate of farming for people who are less skilled in agriculture.',
    siteUrl: 'https://app-gofarm.herokuapp.com/',
    repoUrl: 'https://github.com/radyaadi/GoFarm',
    imgUrl: './project-img/go-farm/main.png',
    tags: [
      '#machine-learning',
      '#reggression',
      '#python',
      '#predictive',
      '#flask',
    ],
  },
  {
    id: '002-uuid',
    name: 'Si Valorant',
    createdAt: '2021-10-16',
    category: 'web',
    description:
      'SiValorant is a web created to accommodate information about Valorant game. On this web you can see some list of items in this game such as weapons, maps, ect',
    siteUrl: 'https://radya-valorant.netlify.app',
    repoUrl: 'https://github.com/radyaadi/SiValorant',
    imgUrl: './project-img/si-valorant/main.png',
    tags: ['#front-end', '#npm', '#webpack', '#jquery', '#fetch-api'],
  },
  {
    id: '003-uuid',
    name: 'Restaurant',
    createdAt: '2022-11-13',
    category: 'web',
    description:
      'Restaurant is a web that utilizes web optimization also progressive web on its development. On this web you can see an example of a restaurant list along with the details. Moreover, you can also add a list of restaurants to your favorites list',
    siteUrl: 'https://radya-restaurant-apps.netlify.app/',
    repoUrl: 'https://github.com/radyaadi/radya-restaurant-apps',
    imgUrl: './project-img/radya-restaurant/main.png',
    tags: [
      '#mobile-first',
      '#progressive-app',
      '#web-optimizer',
      '#npm',
      '#webpack',
    ],
  },
  {
    id: '004-uuid',
    name: 'Sai Store',
    createdAt: '2022-12-13',
    category: 'web',
    description:
      'SAI Store is one of the UMKM engaged in clothing and food. The store provides some daily necessities such as rice, oil, onions, etc. Not limited to food needs, SAI Store also provides items such as sandals and furniture.',
    siteUrl: 'https://github.com/radyaadi/SAI-Project',
    repoUrl: 'https://github.com/radyaadi/SAI-Project',
    imgUrl: './project-img/sai-store/main.png',
    tags: ['#front-end', '#back-end', '#node-js', '#mysql', '#express-js'],
  },
  {
    id: '005-uuid',
    name: 'Note Apps',
    createdAt: '2023-02-16',
    category: 'web',
    description:
      'Note Apps is a web that used to store a user notes. To use this web, you must create an account first and log in using its. This web is built using React Js which implements component, context, and custom hooks',
    siteUrl: 'https://radya-notes-app.netlify.app',
    repoUrl: 'https://github.com/radyaadi/note-app-2',
    imgUrl: './project-img/note-apps/main.png',
    tags: [
      '#react-js',
      '#react-hooks',
      '#react-context',
      '#react-router',
      '#single-page',
    ],
  },
  {
    id: '006-uuid',
    name: 'Radya Profiles (Old)',
    createdAt: '2023-03-08',
    category: 'web',
    description:
      'This is old version of my profile web. Radya Profiles contains my bio and some of my project portfolio. This website created using React Js. This website utilizes React Component, Context, and Custom Hooks',
    siteUrl: 'https://radya-profile-web.netlify.app',
    repoUrl: 'https://github.com/radyaadi/my-profile-web',
    imgUrl: './project-img/my-old-porto/main.png',
    tags: [
      '#react-js',
      '#react-hooks',
      '#react-context',
      '#react-router',
      '#single-page',
    ],
  },
  {
    id: '007-uuid',
    name: 'TvMaze Movie',
    createdAt: '2023-04-23',
    category: 'web',
    description:
      'TvMaze Movie is a Vue project that displays data from tv maze api. The focus of this project is Vue for creating web components to display a list of movies from TV Maze. The data taken is limited to the girl category',
    siteUrl: 'https://radya-tvmaze.netlify.app',
    repoUrl: 'https://github.com/radyaadi/jobhun-frontend-test',
    imgUrl: './project-img/tv-maze/main.png',
    tags: [
      '#vue-js',
      '#vue-router',
      '#single-file-component',
      '#fetch-api',
      '#single-page',
    ],
  },
  {
    id: '008-uuid',
    name: 'POST Client',
    createdAt: '2023-05-18',
    category: 'web',
    description:
      'POST Client is a website that I created using NextJs Framework with Javascript Programming Language. This web contains content about the sale and purchase transactions at a store',
    siteUrl: 'https://github.com/radyaadi/post-client',
    repoUrl: 'https://github.com/radyaadi/post-client',
    imgUrl: './project-img/post-client/main.png',
    tags: [
      '#next-js',
      '#react-context',
      '#middleware',
      '#express-js',
      '#javascript',
    ],
  },
  {
    id: '009-uuid',
    name: 'Radya Profiles (New)',
    createdAt: '2023-06-21',
    category: 'web',
    description:
      'This is new version of my profile web. With some news layout, Radya Profiles contains my profile and my portfolios. This website created using ReactJs unclude React Component, Context, and Custom Hooks',
    siteUrl: 'https://radya-profiles.netlify.app/',
    repoUrl: 'https://github.com/radyaadi/radya-profiles',
    imgUrl: './project-img/my-new-porto/main.png',
    tags: [
      '#react-js',
      '#react-vite',
      '#single-page',
      '#mobile-approach',
      '#tailwind',
    ],
  },
  {
    id: '010-uuid',
    name: 'Radya Blog App',
    createdAt: '2023-11-26',
    category: 'web',
    description:
      'This is a web that shows a collection of blogs by some users. This web is made using XXX. There are two main features on this XX, namely the blog page fund user page',
    siteUrl: 'https://radya-blog-app.netlify.app/',
    repoUrl: 'https://github.com/radyaadi/blog-app-dummy',
    imgUrl: './project-img/radya-blog-app/main.png',
    tags: ['#next-js', '#app-route', '#fetch-api', '#single-page', '#tailwind'],
  },
  {
    id: '011-uuid',
    name: 'Radya Blog App',
    createdAt: '2024-02-04',
    category: 'web',
    description:
      'Experience the next evolution of social media with my cutting-edge application, inspired by the essence of Twitter and Threads yet offering a fresh perspective on microblogging. Designed for modern users seeking authenticity and meaningful connections.',
    siteUrl: 'https://chipitalks.vercel.app/sign-in',
    repoUrl: 'https://github.com/radyaadi/chipitalks',
    imgUrl: './project-img/chipitalks/main.png',
    tags: ['#next-js', '#mongo-db', '#clerk', '#typescript', '#tailwind'],
  },
];

export const getAllProject = () => {
  return projects;
};

export const getProject = (id) => {
  const foundedProject = projects.find((project) => project.id === id);
  return foundedProject;
};

export const getFilteredProject = (filter) => {
  const filteredProject = projects.filter(
    (project) => project.category === filter
  );
  return filteredProject;
};
