import { IProjectItem, RepoType } from "@/types";

const projects: IProjectItem[] = [
    {
    id: "University Website & Portal",
    title: "IBUAM University Website & Portal",
    description:
      "A University website & portal built with Next.js, Shadcn, & Tailwind CSS.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/Code-Warriors-Tech/IBUAM_Frontend",
    url: "https://www.ibuam.edu.ng/",
    tags: ["Tailwind css", "Shadcn", "Next.js"],
  },

  {
    id: "SVGC website",
    title: "Student Venture Government Capital",
    description:
      "A University website & portal built with Next.js, Shadcn, & Tailwind CSS.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Private,
    githubUrl: "https://github.com/Seismic-Consulting-Limited/svcg-frontend",
    url: "https://svcg.education.gov.ng",
    tags: ["Tailwind css", "Shadcn", "Next.js"],
  },

  {
    id: "E-commerce",
    title: "NiceShop",
    description:
      "An e-commerce platform built with Next.js,Shadcn-ui & Zustand(for state management).",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/Code-Warriors-Tech/loveforyou_admin",
    url: "https://nextshop-ecru.vercel.app/",
    tags: ["Tailwind css", "Shadcn", "Zustand", "Next.js"],
  },
  {
    id: "Business landing page/Website",
    title: "Amarits Website",
    description:
      "A website for Amarits Consulting built with Next.js, Shadcn-ui, & Tailwind CSS.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    url: "https://www.amarits.com/",
    tags: ["Tailwind css", "Shadcn-ui","Next.js"],
  },
  {
    id: "Business landing page/Website",
    title: "Techframe Website",
    description:
      "A simple business Landing page",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/code-warrior200/techframe",
    url: "https://techframe.vercel.app/",
    tags: ["Tailwind css", "Shadcn-ui","Next.js"],
  },
  {
    id: "Rabovel Stock Trading App",
    title: "Rabovel Stock Trading App",
    description:
      "A stock trading and staking platform mobile app built with React Native and Expo.",
    icon: "/skills/react.svg",
    repoType: RepoType.Private,
    url: "https://expo.dev/accounts/code-warrior01/projects/rabovel-staking-platform/builds/fb1e0f7b-938f-4879-a28f-c108c403e86f",
    tags: ["React Native", "Expo", "Mobile App"],
  }
];

export default projects;
