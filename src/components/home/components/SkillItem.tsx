"use client";

import { motion } from "framer-motion";
import type { ISkillListItem } from "@/types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SkillItem = ({
  data,
  index,
}: {
  data: ISkillListItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <Card className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-center text-lg md:text-xl">
            {data.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {data.items.length > 0 && (
            <div className="flex flex-wrap gap-6 justify-center items-center mt-4">
              {data.items.map((skill, skillIndex) => (
                <motion.div
                  key={`skill-item-${skillIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: skillIndex * 0.05,
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 text-foreground"
                >
                  {skill.icon && (
                    <div className="w-12 lg:w-14 h-12 lg:h-14 relative">
                      <Image
                        src={skill.icon}
                        alt={`logo-${skill.title}`}
                        fill
                        sizes="(max-width: 1024px) 48px, 56px"
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <p className="text-xs font-normal text-center">
                    {skill.title}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillItem;
