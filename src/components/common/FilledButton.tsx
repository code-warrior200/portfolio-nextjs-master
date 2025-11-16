"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ButtonComponentProps } from "@/types";
import { cn } from "@/lib/utils";

const AppFilledButton = (props: Readonly<ButtonComponentProps>) => {
  const { label, onClick, classNames, name } = props;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        name={name || "filled-btn"}
        type="button"
        onClick={onClick}
        className={cn("bg-gradient-to-r from-primary to-secondary", classNames)}
      >
        {label}
      </Button>
    </motion.div>
  );
};

export default AppFilledButton;
