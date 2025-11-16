"use client";

import { motion } from "framer-motion";
import { RepoType, type IProjectItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectItem = ({
  project,
  index,
}: {
  project: IProjectItem;
  index: number;
}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col group hover:shadow-xl hover:border-primary/50 transition-all duration-300">
        <CardHeader className="text-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex justify-center"
          >
            <div className="w-12 md:w-16 aspect-square relative">
              <Image
                src={project.icon}
                alt={`project-${project.title}`}
                fill
                sizes="(max-width: 768px) 48px, 64px"
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>

          <Badge
            variant={
              project.repoType === RepoType.Private
                ? "destructive"
                : "default"
            }
            className="w-fit mx-auto"
          >
            {project.repoType === RepoType.Private ? "Private" : "Public"}
          </Badge>

          <div className="flex justify-center gap-2">
            {project.githubUrl && (
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Link
                  href={project.githubUrl}
                  aria-label={`${project.title} GitHub URL`}
                  target="_blank"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}

            {project.url && (
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Link
                  href={project.url}
                  aria-label={`${project.title} Project URL`}
                  target="_blank"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <CardDescription className="text-center text-base">
            <Balancer>{project.description}</Balancer>
          </CardDescription>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tags.map((tag, i) => (
                <Badge
                  key={`tag-${i}`}
                  variant="outline"
                  className="text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectItem;
