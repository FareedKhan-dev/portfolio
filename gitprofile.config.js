// gitprofile.config.js

const config = {
  github: {
    username: 'FareedKhan-dev', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['basic-face-detection-opencv', 'cancer-dataset', 'design-resources-for-developers', 'face-blur-opencv', 'facebook-login-page-ui', 'FareedKhan-dev', 'FareedKhan-dev.github.io', 'google-images-download', 'islamic_fund_advisor', 'livelocationtell_me', 'minimal-flask-login-signup-sqlite', 'ml-project-data', 'my-first-blog', 'navaid-khan-project', 'navaidkhan', 'openCV-Beginner_guide', 'php-mail-server', 'portfolio', 'ReactApp-SearchUser', 'repos', 'Responsive-Portfolio-Website', 'simpsons-chat', 'stackoverflow-profile-embed', 'Summer2023-Internships', 'test-again', 'test-repo', 'testor', 'Tkinter-Beginner-Guide', 'Tourist-Arrivals-in-Rio-de-Janeiro-2006-2019-machine-learnng-project', 'toyota_corolla_data', 'turtle-blog', 'weathermap_api_public', 'we_current', 'zevar'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'fareed-khan-dev',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'fareedkhandev',
    dev: '',
    stackoverflow: '13202252/fareed-khan', // format: userid/username
    website: 'https://fareedkhan-dev.github.io/portfolio/',
    phone: '+923492014875',
    email: 'fareedhassankhan12@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['Docker','Redis','MongoDB','Oracle', 'Hadoop', 'Apache Spark', 'Apache Hive', 'Git', 'GitHub',
           'Python (Scikit-learn, NLTK, TensorFlow, PySpark, SpaCy, etc.)', 'front End Web Development', 'UI/UX Design'],
  experiences: [
    
    {
      company: 'IBA, Karachi',
      position: 'Teaching Assistant',
      from: '2022',
      to: '2023',
      companyLink: 'https://www.iba.edu.pk/',
    },
    {
      company: 'Fortune Securities, Karachi',
      position: 'Quantitative Investment Analyst',
      from: '2019',
      to: '2020',
      companyLink: 'https://www.fortunesecurities.com/',
    },
//     {
//       company: 'Company Name',
//       position: 'Position',
//       from: 'July 2019',
//       to: 'August 2021',
//       companyLink: 'https://example.com',
//     },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'IBA Karachi',
      degree: 'MS in Data Science',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'NED University of Engineering and Technology',
      degree: 'BS in Computational Finance',
      from: '2016',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
//   externalProjects: [
//     {
//       title: 'Project Name',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//       imageUrl: 'https://via.placeholder.com/250x250',
//       link: 'https://example.com',
//     },
//     {
//       title: 'Project Name',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//       imageUrl: 'https://via.placeholder.com/250x250',
//       link: 'https://example.com',
//     },
//   ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'fareedkhandev', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
