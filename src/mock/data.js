import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
    title: 'Bryce Boesen | Developer',
    lang: 'en',
    description: 'Bryce Boesen - Developer, Amateur Sandwich Taster, Problem Solver.',
};

// HERO DATA
export const heroData = {
    title: '',
    name: 'Bryce',
    subtitle: 'Programmer, Problem Solver, Project Manager',
    cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: `What started as a hobby when I was twelve years old, building a website for my friends in a video game, eventually blossomed into a strong and passionate career. I got serious about being a programmer when I was fifteen, and that's when the long days and nights of experimenting, googling, hitting my head on my desk, and learning began.`,
    paragraphTwo: `I'd never wanted to do anything more, and never felt more strongly connected to any activity. Going to college was the next logical step, but my attention wavered in an environment where I felt so far ahead of my peers. I needed to do more, so I started looking into paths beyond education in 2014, which is when I officially entered the work force as an intern for a Mobile Development company.`,
    paragraphThree: `Now in 2020 at twenty-five, I've worked with an ever expanding array of technologies to produce production ready applications. In my day job: I lead a team, teach my peers, and provide technological insights to supervisors that help guide business decisions. In my startup: I drive our technological decisions and guide the team on best practices in the domain. I've easily spent thousands of hours writing code, possibly more than I've spent playing video games. I would consider myself a master programmer, but while my titles and duties change, I will always regard myself simply as a developer.`,
    resume: 'https://docs.google.com/document/d/1BfPG-QEmC05vnUrxuYT-sR9YDdbtfxNPey19OieazTw/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
    id: nanoid(),
    img: 'sps-dgtl.png',
    title: 'DGTL Suite',
    company: 'SPS DGTL (subsidiary of Y&L Consulting)',
    role: 'Software Architect',
    info: 'Senior developer on a suite of applications tailored towards digital marketing, digital content creation, and social media management.',
    tech: [
        'MEAN stack',
        'Google Cloud Platform',
        'Kubernetes/Docker',
        'Microsft Azure',
        'Facebook/Twitter/Linkedin Social Integrations',
        'Stripe payment processing',
        'Custom single sign on solution',
        'RSA based cryptography'
    ]
}, {
    id: nanoid(),
    img: 'bexarware.png',
    title: 'Untitled Insurance Software',
    company: 'BexarWare',
    role: 'CTO and Co-Founder',
    info: 'Insurance system with a focus on REO and force-place insurance policy management. Project came from a former professor turned partner. Guided design and implemented software development policies to produce a full redesign and partial rewrite of the insurance system in a more modern technology stack.',
    tech: [
        'NodeJS',
        'Angular',
        'PHP/MYSQL',
        'Google Cloud Platform',
        'Kubernetes/Docker',
    ]
}, {
    id: nanoid(),
    img: 'vividmagic.png',
    title: 'Vivid Magic',
    role: 'Software Engineer',
    info: `Passion project utilizing HTML Canvas to play digital Magic the Gathering's Commander format in real time with friends`,
    url: 'https://magic.bexarware.dev',
    tech: [
        'MEAN Stack',
        'Google Cloud Platform',
        'Kubernetes/Docker',
        'Realtime websocket interactions'
    ]
}, {
    id: nanoid(),
    img: 'panplayexpo.png',
    title: 'PanPlay Expo',
    company: 'BexarWare',
    role: 'CTO and Co-Founder',
    info: 'Lead developer on a digital concert and expo platform aimed at bringing people closer through music and gaming.',
    url: 'https://panplayexpo.com',
    tech: [
        'MEAN Stack',
        'Google Cloud Platform',
        'Kubernetes/Docker',
        'Audio/Video processing and transmission'
    ]
}, {
    id: nanoid(),
    img: 'bsn.png',
    title: 'Buyer to Seller NET',
    role: 'Software Engineer',
    info: 'Project was a realtor-less home buying initiative, allowing users access to tools to help them sell their homes themselves.',
    tech: [
        'MEAN Stack',
        'Amazon Web Services',
        'Zillow integration'
    ]
}, {
    id: nanoid(),
    img: 'mywaterwell.png',
    title: 'MyWaterWell',
    company: 'MyWaterWell (on behalf of Y&L Consulting)',
    role: 'Software Engineer',
    info: `Project was a data management system for water well drillers with a fully interactive tool for laying out how a pipe would look as it is in the ground(not to scale). Primary responsibility was migrating the entire system of applications on Microsoft Azure from a contractor's account to one owned by the client. With virtually no documentation, few instructions, and no ability to communicate with the team in India that produced the software, I managed to prevail.`,
    tech: [
        '.NET/C#',
        'MSSQL',
        'Microsoft Azure',
    ]
}, {
    id: nanoid(),
    img: 'gsc.jpg',
    title: 'Collect or Compare',
    company: 'Great Southern Coins (on behalf of Y&L Consulting)',
    role: 'Software Engineer',
    info: `Project was an aggregator for collectibles listed on Ebay, Amazon Marketplace, and various independent retailers with commission based revenue models. Primary role was getting this project that had been archived for over five years running on AWS. Of course everything was broken, because time destroys projects. With little help from the previous developers, I dismantled this broken diesel engine of a project with only a butter knife, to fix the dozens of integrations from AWS Elastic Cloud Search to completely deprecated 3rd party API calls.`,
    tech: [
        '.NET/C#',
        'MSSQL',
        'Microsoft Azure',
    ]
}, {
    id: nanoid(),
    img: 'epux-dev.png',
    title: 'Called Out',
    company: 'Epux Dev (subsidiary of Y&L Consulting)',
    role: 'Software Developer',
    info: `Project was aimed at capturing on the hype of the internet challenge craze. Consisted of an Android and iOS app communicating with a php backend, which I managed alone.`,
    tech: [
        'Android (Java)',
        'iOS (Swift)',
        'Amazon Web Services',
    ]
}, {
    id: nanoid(),
    img: 'wasdplay.png',
    title: 'WASDPlay',
    role: 'Software Developer',
    info: `Project was an e-sports betting turned community tournament bracket generation platform. Platform could create brackets that could run casual or competitive tournaments with direct integrations to games, stat tracking, and sponsored prize pools.`,
    tech: [
        'LAMP stack',
        'Amazon Web Services',
    ]
}, {
    id: nanoid(),
    img: 'lion-mobile.png',
    title: 'unWine',
    company: 'LION Mobile',
    role: 'Software Developer (Intern)',
    info: `Project was primarily development on a wine cataloging and label scanning application focused on witty social interaction. We also produced a handful of prototypes and web design work, including an oil and gas realtime price tracking iOS application.`,
}];

// CONTACT DATA
export const contactData = {
    cta: 'Have a work inquiry?',
    btn: 'Get in Touch',
    email: 'bryceboesen@gmail.com',
};

// FOOTER DATA
export const footerData = {
    networks: [
        {
            id: nanoid(),
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/bryce-boesen-22890a84/',
        },
        {
            id: nanoid(),
            name: 'github',
            url: 'https://github.com/RabidBeast',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
