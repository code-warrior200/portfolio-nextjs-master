"use client";

import { motion } from "framer-motion";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  return (
    <Column classNames="w-full mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Row classNames="w-full gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
          {projects.map((item, index) => {
            return (
              <div key={`project-${index}`} className="snap-start flex-shrink-0">
                <ProjectItem project={item} index={index} />
              </div>
            );
          })}
        </Row>
      </motion.div>
    </Column>
  );
};

export default ProjectList;
