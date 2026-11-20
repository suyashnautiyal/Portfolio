// All the content of the site lives here. Edit this file to update the site.

export type PreviewKind = 'form' | 'landing' | 'list'

export interface Project {
  name: string
  summary: string
  problem: string
  decision: string
  next: string
  details: string[]
  stack: string[]
  code: string
  live?: string
  /** Path to a screenshot in /public, e.g. "/shots/resona.png". Falls back to a drawn preview. */
  image?: string
  preview: PreviewKind
}

export interface Role {
  title: string
  company: string
  period: string
  points: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const profile = {
  name: 'Suyash Nautiyal',
  role: 'React developer',
  location: 'Gurugram, India',
  email: 'suyashnautiyal96340@gmail.com',
  github: 'https://github.com/suyashnautiyal',
  linkedin: 'https://linkedin.com/in/suyash-nautiyal-4a2359418',
  resume: '/resume.pdf',
  availability: 'Open to frontend roles in Gurugram or remote',
}

export const projects: Project[] = [
  
  {
    name: 'Resona',
    summary: 'A responsive landing page for a voice-AI product, with a working pricing toggle and demo form.',
    problem:
      'A landing page needs to explain the product, show prices and collect leads, and still work on a phone.',
    decision:
      'React 19 with Vite and Tailwind CSS. The navbar tracks the section you are reading (scroll-spy) and the pricing has a monthly and yearly toggle. There is no backend, so the demo form validates input and simulates submission.',
    next: 'Connect the demo form to a real endpoint and measure Core Web Vitals on the live site.',
    details: [
      'Sticky navbar with scroll-spy and a mobile menu.',
      'Six feature cards, a three-step "how it works" section and a validated demo-request form.',
    ],
    stack: ['React 19', 'Vite', 'Tailwind CSS'],
    code: 'https://github.com/suyashnautiyal/Resona',
    live: 'https://resona-chi.vercel.app',
    image: '/shots/resona.png',
    preview: 'landing',
  },
  {
    name: 'Complaint Management System',
    summary:
      'Type or upload a complaint in plain language and get a filled-in, risk-assessed record back.',
    problem:
      'Complaint records for pharmaceutical manufacturing are long forms. Staff retype details that already exist in an email or a PDF.',
    decision:
      'Put the AI behind a LangGraph agent with separate steps (classify intent, extract fields, assess risk, draft reply), so each step can be checked on its own. The React side keeps form state in Redux Toolkit.',
    next: 'Add tests for the extraction steps and show a confidence score next to each extracted field.',
    details: [
      'Log, edit and review complaints in a two-panel layout where the AI assistant fills the form.',
      'Pulls 10+ fields from free text and from PDF, TXT or EML uploads.'
    ],
    stack: ['React', 'Redux Toolkit', 'Vite', 'FastAPI', 'LangGraph', 'Groq'],
    code: 'https://github.com/suyashnautiyal/Complaint-system',
    image: '/shots/complaint-system.png',
    preview: 'form',
  },
]

export const roles: Role[] = [
  {
    title: 'Front End Developer',
    company: 'ColoredCow',
    period: 'Nov 2023 to Apr 2024',
    points: [
      'Revamped the website of Plio, an NGO client, after user research showed its unclear structure was hurting engagement and donations.',
      'Rebuilt the navigation and page structure with clear calls to action, and made the site fully responsive.',
      'Worked with the backend team to integrate REST APIs and ship features end to end.',
      'Built reusable React components that sped up feature work across the team.',
    ],
  },
  {
    title: 'Front End Development Intern',
    company: 'ColoredCow',
    period: 'May 2023 to Oct 2023',
    points: [
      'Built responsive React interfaces inside an MVC codebase.',
      'Tested behaviour through event handling and interaction testing.',
    ],
  },
]

export const skills: SkillGroup[] = [
  { label: 'Frontend', items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'HTML', 'CSS', 'Tailwind', 'Vite'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'JWT', 'MongoDB'] },
  { label: 'AI', items: ['LangGraph', 'LLM APIs (Groq)', 'Prompt engineering', 'Structured extraction'] },
  { label: 'Practice', items: ['Responsive design', 'Debugging with DevTools', 'Git and GitHub', 'User research'] },
]

export const howIWork = [
  'Start with the user, not the design file. At ColoredCow I ran user research before rebuilding the Plio site.',
  'Build the states people forget: loading, empty, error and mobile.',
  'Check the results in the browser. I use DevTools to find layout and performance problems rather than guessing.',
  'Keep backend and frontend in step. I worked with the backend team to ship REST API features end to end.',
]

export const education = [
  { degree: 'M.Tech, Computer Science and Engineering', place: 'Uttaranchal University, Dehradun', period: '2024 to 2026' },
  { degree: 'B.Tech, Computer Science', place: 'THDC Institute of Hydropower Engineering and Technology', period: '2019 to 2023' },
]

export const publication = {
  title:
    'Hybrid Supervised-Unsupervised Machine Learning Framework for Emotion Detection from Text Using TF-IDF and Clustering Techniques',
  venue: 'IEEE Intelligence in Business and Industry (IBI), 2026',
  link: 'https://doi.org/10.1109/IBI68858.2026.11604081',
}
