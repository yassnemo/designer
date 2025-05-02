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
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    icon: 'email',
  },
  {
    label: 'Instagram',
    url: `https://www.instagram.com/${config.instagram}`,
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    url: `https://twitter.com/${config.twitter}`,
    icon: 'twitter',
  },
  {
    label: 'MonkeyType',
    url: `https://monkeytype.com/profile/${config.monkeytype}`,
    icon: 'monkeytype',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
