"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SectionTitle = ({
  children,
  className,
}: Readonly<{ children: string; className?: string }>) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "text-center mx-auto text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
