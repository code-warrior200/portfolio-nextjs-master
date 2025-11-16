"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import navMenus from "@/data/navMenus";
import useVisibleSection from "@/hooks/useVisibleSection";
import useScrolled from "@/hooks/useScrolled";

const NavBar = () => {
  const visibleSection = useVisibleSection();
  const isScrolled = useScrolled();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (!element) return;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - 80; // Account for navbar height

    window.scroll({
      top: offsetPosition,
      behavior: "smooth",
    });
    setMobileMenuOpen(false);
  };

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={cn(
        "fixed w-screen h-20 z-[1000] top-0 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/40"
          : "bg-background/95 backdrop-blur-sm"
      )}
    >
      <div className="h-full flex mx-auto px-4 py-4 max-w-7xl">
        <div className="w-full flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              AS
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navMenus.map((menu, index) => {
              const isActive = visibleSection === menu.id;
              return (
                <motion.div
                  key={menu.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleScroll(menu.id)}
                    className={cn(
                      "relative px-4 py-2 h-auto font-medium transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {menu.title}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8">
                {navMenus.map((menu, index) => {
                  const isActive = visibleSection === menu.id;
                  return (
                    <motion.div
                      key={menu.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => handleScroll(menu.id)}
                        className={cn(
                          "w-full justify-start text-lg h-auto py-3 px-4",
                          isActive
                            ? "text-primary bg-accent"
                            : "text-muted-foreground"
                        )}
                      >
                        {menu.title}
                      </Button>
                    </motion.div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
