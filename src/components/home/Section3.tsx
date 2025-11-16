"use client";

import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import ShootingStarEffect from "@/components/common/ShootingStar";
import ExperienceItem from "./components/ExperienceItem";
import experiences from "@/data/experiences";

const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-card min-h-[calc(100vh-5rem)] items-center justify-center py-16 relative overflow-hidden"
      id={id}
    >
      <ShootingStarEffect />
      <ConstraintedBox classNames="p-4 py-16 z-[5] h-full flex items-center">
        <div className="w-full">
          <SectionTitle>Experiences</SectionTitle>

          <GridBox classNames="justify-items-center items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-16 gap-6">
          {experiences.map((experience, index) => {
            return (
              <ExperienceItem
                key={`experience-${index}`}
                data={experience}
                index={index}
              />
            );
          })}
          </GridBox>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
