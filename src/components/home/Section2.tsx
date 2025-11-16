"use client";

import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import ShootingStarEffect from "@/components/common/ShootingStar";
import ServiceItem from "./components/ServiceItem";
import services from "@/data/services";

const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="min-h-[calc(100vh-5rem)] items-center justify-center py-16 relative overflow-hidden"
      id={id}
    >
      <ShootingStarEffect />
      <ConstraintedBox classNames="p-4 py-16 z-[5] h-full flex items-center">
        <div className="w-full">
          <SectionTitle>My Services</SectionTitle>

          <GridBox classNames="justify-items-center items-center sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
          {services.map((service, index) => {
            return (
              <ServiceItem key={`service-${index}`} data={service} index={index} />
            );
          })}
          </GridBox>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection2;
