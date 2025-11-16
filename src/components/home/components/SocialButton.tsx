"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const SocialButton = ({
  text,
  icon,
  url,
  index,
}: {
  text: string;
  icon: any;
  url: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        asChild
        variant="outline"
        size="lg"
        className="w-full h-auto py-6 px-4 group hover:border-primary hover:bg-accent transition-all duration-300"
      >
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={icon} className="h-5 w-5" />
            <span className="text-base font-medium">{text}</span>
          </div>
          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default SocialButton;
