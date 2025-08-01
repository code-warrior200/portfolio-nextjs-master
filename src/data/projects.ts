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
  // {
  //   id: "e-commerce-app-mern",
  //   title: "E-commerce App",
  //   description:
  //     "An e-commerce web application developed using React.js, Material UI, Redux, and Stripe.",
  //   icon: "/skills/nextjs.svg",
  //   repoType: RepoType.Public,
  //   githubUrl: "https://github.com/code-warrior200/nextshop",
  //   url: "#",
  //   tags: ["React.js", "Redux","Tailwind css", "Stripe"],
  // },
  {
    id: "Company website",
    title: "Code warriors Tech Website ",
    description:
      "A School website built with React.js, Tailwind css.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/code-warriors80/codewarriors_site",
    url: "https://codewarriorstech.org",
    tags: ["Next.js","Type Script","Tailwind"],
  }
];

export default projects;
