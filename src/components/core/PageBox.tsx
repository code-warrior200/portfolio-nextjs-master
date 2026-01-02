"use client";

import { motion } from "framer-motion";
import type { CoreComponentsProps } from "@/types";
import { cn } from "@/lib/utils";

const PageBox = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative flex flex-col justify-start items-start w-screen max-w-full p-0 m-0 mt-20 overflow-hidden transition duration-300 ease-in-out",
        classNames
      )}
    >
      {children}
    </motion.div>
  );
};

export default PageBox;
