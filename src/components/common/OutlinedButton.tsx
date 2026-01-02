"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ButtonComponentProps } from "@/types";
import { cn } from "@/lib/utils";

const AppOutlinedButton = (props: Readonly<ButtonComponentProps>) => {
  const { label, onClick, classNames, name } = props;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        name={name || "outlined-btn"}
        type="button"
        variant="outline"
        onClick={onClick}
        className={cn("border-primary text-primary hover:bg-primary hover:text-primary-foreground", classNames)}
      >
        {label}
      </Button>
    </motion.div>
  );
};

export default AppOutlinedButton;
