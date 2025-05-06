import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Resume',
    pathname: '/resume',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'X',
    url: `https://x.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];