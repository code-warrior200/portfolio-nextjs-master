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
    tags: ["Tailwind css", "Next.js"],
  },
  {
    id: "Admin Dashboard",
    title: "Love4you Admin Dashboard",
    description:
      "An Admin Dashboard for Love4you online dating/friendship platform built with Next.js, Tailwind CSS, Shadcn-ui, & Zustand(for state management).",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/Code-Warriors-Tech/loveforyou_admin",
    url: "https://loveforyou-admin-qjqx.vercel.app/auth/login",
    tags: ["Tailwind css", "Next.js"],
  },
  {
    id: "Business landing page/Website",
    title: "Techframe Website",
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
      "A Journal website built with Next.js, Shadcn-ui, & Tailwind CSS.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    githubUrl: "https://github.com/code-warrior200/techframe",
    url: "https://techframe.vercel.app/",
    tags: ["Tailwind css", "Shadcn-ui","Next.js"],
  }
];

export default projects;
