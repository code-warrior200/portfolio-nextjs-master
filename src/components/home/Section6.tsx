"use client";

import { motion } from "framer-motion";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import ShootingStarEffect from "@/components/common/ShootingStar";
import SocialButton from "./components/SocialButton";
import socialLinks from "@/data/socialLinks";

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-background min-h-[calc(100vh-5rem)] items-center justify-center py-16 relative overflow-hidden"
      id={id}
    >
      <ShootingStarEffect />
      <ConstraintedBox classNames="p-4 py-16 z-[5] h-full flex items-center">
        <div className="w-full">
          <SectionTitle>Get in Touch</SectionTitle>

          <Column classNames="mt-16 w-full">
          <GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4">
            {socialLinks.map((link, index) => {
              return (
                <SocialButton
                  key={`social-link-${index}`}
                  text={link.text}
                  icon={link.icon}
                  url={link.url}
                  index={index}
                />
              );
            })}
          </GridBox>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mx-auto mt-16 text-xl md:text-2xl font-semibold"
          >
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              available
            </span>{" "}
            for Employment Opportunities!
          </motion.p>
        </Column>
        </div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
