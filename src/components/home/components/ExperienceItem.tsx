"use client";

import { motion } from "framer-motion";
import type { IExperienceItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { Trophy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceItem = ({
  data,
  index,
}: {
  data: IExperienceItem;
  index: number;
}) => {
  const period = `${data.startDate} - ${data.isCurrentJob ? "Present" : data.endDate}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="w-full h-full"
    >
      <Card className="h-full hover:shadow-xl hover:border-primary/50 transition-all duration-300">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl md:text-2xl">
                  {data.designation}
                </CardTitle>
                <CardDescription className="text-base mt-1">
                  {data.company}
                </CardDescription>
              </div>
            </div>
          </div>
          <Badge
            variant={data.isCurrentJob ? "default" : "secondary"}
            className="w-fit"
          >
            {period}
          </Badge>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-base">
            <Balancer>{data.shortDescription}</Balancer>
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceItem;
