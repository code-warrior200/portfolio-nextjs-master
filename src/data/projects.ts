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
    id: "University Website & Portal",
    title: "IBUAM University Website & Portal",
    description:
      "A University website & portal built with Next.js, Shadcn, & Tailwind CSS.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/Code-Warriors-Tech/IBUAM_Frontend",
    url: "https://www.ibuam.edu.ng/",
    tags: ["Tailwind css", "Next.js"],
  },
  {
    id: "Business landing page/Website",
    title: "Techframe Website",
    description:
      "A Journal website built with Next.js, Shadcn-ui, & Tailwind CSS.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/code-warrior200/techframe",
    url: "https://techframe.vercel.app/",
    tags: ["Tailwind css", "Shadcn-ui","Next.js"],
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
