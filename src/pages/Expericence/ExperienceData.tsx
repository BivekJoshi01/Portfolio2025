interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  image: string;
  skills: string[];
  icon: string;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2022 – Present',
    description: 'Lead the development of responsive web applications using modern technologies like React, Next.js, TypeScript, and Tailwind CSS. Implemented performance optimizations that reduced load times by 40% and improved Lighthouse scores.',
    image: '/images/frontend.jpg',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Jest'],
    icon: '💻'
  },
  {
    role: 'UI/UX Designer',
    company: 'Digital Creative Studio',
    duration: 'Jun 2021 – Dec 2021',
    description: 'Designed user interfaces and created interactive prototypes for web and mobile applications. Conducted user research and usability testing to improve product experiences. Collaborated with developers to ensure design implementation fidelity.',
    image: '/images/design.jpg',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'UI Design'],
    icon: '🎨'
  },
  {
    role: 'Web Development Intern',
    company: 'StartUp Ventures',
    duration: 'Sep 2020 – May 2021',
    description: 'Assisted in building and maintaining company website and internal tools. Gained experience with frontend development and basic backend integration. Participated in agile development processes and code reviews.',
    image: '',
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
    icon: '🌐'
  },
  {
    role: 'Web Development Intern',
    company: 'StartUp Ventures',
    duration: 'Sep 2020 – May 2021',
    description: 'Assisted in building and maintaining company website and internal tools. Gained experience with frontend development and basic backend integration. Participated in agile development processes and code reviews.',
    image: '',
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress'],
    icon: '🌐'
  },
];
