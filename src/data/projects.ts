import { IProjectItem, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "School website",
    title: "School website",
    description:
      "A School website built using React.js & Tailwind.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/code-warriors80/school_site",
    url: "https://code-warriors-tech.github.io/school_website/",
    tags: ["React.js","Tailwind"],
  },
  {
    id: "Rabovel landing page",
    title: "Rabovel Stock Trading landing page",
    description:
      "A Fintech Stock trading Web App (landingpage) built with React.js, Redux, and Tailwind CSS.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/Rabovel1/Website",
    url: "https://www.rabovel.com/",
    tags: ["Tailwind css", "Next.js"],
  },
  {
    id: "Faculty Journal",
    title: "Faculty of Science education Journal",
    description:
      "A Journal website built with Next.js and Tailwind CSS.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/code-warrior200/faculty-journal",
    url: "https://faculty-journal.vercel.app/",
    tags: ["Tailwind css", "Next.js"],
  }
  
  // {
  //   id: "Company website",
  //   title: "Code warriors Tech Website ",
  //   description:
  //     "A School website built with React.js, Tailwind css.",
  //   icon: "/skills/nextjs.svg",
  //   repoType: RepoType.Public,
  //   githubUrl: "https://github.com/code-warriors80/codewarriors_site",
  //   url: "https://codewarriorstech.org",
  //   tags: ["Next.js","Type Script","Tailwind"],
  // }
];

export default projects;
