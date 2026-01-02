"use client";

import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import ShootingStarEffect from "@/components/common/ShootingStar";
import ProjectList from "./components/ProjectList";
import projects from "@/data/projects";

const HomeSection5 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-card min-h-[calc(100vh-5rem)] items-center justify-center py-16 relative overflow-hidden"
      id={id}
    >
      <ShootingStarEffect />
      <ConstraintedBox classNames="p-4 py-16 z-[5] h-full flex items-center">
        <div className="w-full">
          <SectionTitle>Recent Works</SectionTitle>

          <ProjectList projects={projects} />
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;
