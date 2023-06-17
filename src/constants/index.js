import {
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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mysql, githubbattles, hackernews, expo, evolv, nextjs,
} from "/public/assets/index";

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
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "NextJs Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
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
        name: "Expo",
        icon: expo,
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
        name: "MySQL",
        icon: mysql,
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
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Freelancer",
        icon: reactjs,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Expo",
        icon: expo,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing mobile applications using Expo, React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring compatibility for all mobiles.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Shopify Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Feb 2022",
        points: [
            "Developing and maintaining Shopify site.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Adding custom web functionality.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Evolv",
        icon: evolv,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using Next.js and other related technologies.",
            "Creating custom high-quality software solutions for companies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Tedo proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Teodor does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Tedo optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Hacker News",
        description:
            "Web-based platform that allows users to read the latest Hacker News posts.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "forum",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: hackernews,
        source_code_link: "https://github.com/TeodorKoynov/HackerNews",
        live_demo_link: "https://hacker-news-self.vercel.app/",
    },
    {
        name: "Github Battles",
        description:
            "Web application that enables users to look at the most famous repositories and compare their Github's profile to a friend's one.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "github",
                color: "green-text-gradient",
            },
            {
                name: "darkmode",
                color: "pink-text-gradient",
            },
        ],
        image: githubbattles,
        source_code_link: "https://github.com/TeodorKoynov/GithubBattles",
        live_demo_link: "https://github-battles-seven.vercel.app/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
        live_demo_link: "",
    },
];

export {services, technologies, experiences, testimonials, projects};