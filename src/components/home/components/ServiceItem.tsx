"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IServiceItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ServiceItem = ({ data, index }: { data: IServiceItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card
        className={cn(
          "relative h-full min-h-[320px] overflow-hidden transition-all duration-300 cursor-pointer group",
          "hover:shadow-xl hover:border-primary/50"
        )}
      >
        <CardHeader className="text-center space-y-4">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex justify-center"
          >
            <span className="text-4xl md:text-5xl text-primary">
              <FontAwesomeIcon icon={data.icon} />
            </span>
          </motion.div>

          <CardTitle className="text-xl md:text-2xl">{data.title}</CardTitle>

          <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
        </CardHeader>

        <CardContent className="space-y-4">
          <CardDescription className="text-base">
            <Balancer>{data.shortDescription}</Balancer>
          </CardDescription>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <CardDescription className="text-sm mt-4 pt-4 border-t border-border">
                  <Balancer preferNative={false}>{data.description}</Balancer>
                </CardDescription>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceItem;
