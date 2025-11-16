"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import ShootingStarEffect from "@/components/common/ShootingStar";
import TalkButton from "./components/TalkButton";
import { Button } from "@/components/ui/button";
import socialLinks from "@/data/socialLinks";

const HomeSection1 = ({ id }: { id: string }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <ResponsiveBox
      classNames="bg-card min-h-[calc(100vh-5rem)] items-center justify-center relative overflow-hidden"
      id={id}
    >
      <ShootingStarEffect />

      <ConstraintedBox classNames="px-4 py-8 z-[5] h-full flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <GridBox classNames="justify-items-center items-center !gap-16 lg:!gap-8">
            <Column classNames="justify-center items-center text-center lg:text-left max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
              <Column classNames="max-w-full space-y-4 w-full">
                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg text-muted-foreground"
                >
                  Hello 👋 I&apos;m
                </motion.p>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                >
                  Abdulrahman Sadiq
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-sm md:text-base font-medium text-muted-foreground"
                >
                  Frontend Engineer
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg mt-8 text-muted-foreground"
                >
                  <Balancer>
                    Welcome to my portfolio! I am a passionate frontend
                    engineer with 6+ years of experience. I specialize in
                    creating user-centric software, proficient in front-end
                    development across various platforms. I integrate
                    cutting-edge technology seamlessly while prioritizing design.
                  </Balancer>
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="mt-8 lg:mt-16"
                >
                  <TalkButton />
                </motion.div>
              </Column>

              <motion.div
                variants={itemVariants}
                className="mt-8 lg:mt-16"
              >
                <p className="text-base md:text-lg font-semibold mb-4">
                  Follow me here
                </p>

                <Row classNames="mt-2 gap-2 flex-wrap">
                  {socialLinks.slice(0, 5).map((link, index) => {
                    return (
                      <motion.div
                        key={`social-link-${index}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <Link
                            href={link.url}
                            target="_blank"
                            aria-label={link.name}
                          >
                            <FontAwesomeIcon icon={link.icon} />
                          </Link>
                        </Button>
                      </motion.div>
                    );
                  })}
                </Row>
              </motion.div>
            </Column>

            <motion.div
              variants={imageVariants}
              className="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] justify-self-center items-center justify-center rounded-full border-2 border-border overflow-hidden relative mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full rounded-full border-[0.8rem] border-muted overflow-hidden relative"
              >
                <Image
                  src="/images/profile.jpg"
                  alt="profile"
                  fill
                  sizes="(max-width: 1024px) 320px, 400px"
                  priority
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </GridBox>
        </motion.div>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
