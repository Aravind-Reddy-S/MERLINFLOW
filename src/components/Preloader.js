"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import "./preloader.css";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Use highly-optimized Framer Motion values instead of React state for 60fps mobile performance
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const controls = animate(count, 100, {
      duration: 2,
      ease: "easeOut",
      onComplete: () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto";
        }, 600);
      }
    });

    return () => {
      controls.stop();
      document.body.style.overflow = "auto";
    };
  }, [count]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          key="preloader"
          className="preloader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.1, delay: 0.9 } }} // container hides after doors slide
        >
          {/* GLOBAL PERCENTAGE COUNTER */}
          <motion.div 
            className="global-percentage-container"
            exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
          >
            <motion.span className="percentage-number">{rounded}</motion.span>
            <span className="percentage-symbol">%</span>
          </motion.div>

          {/* LEFT DOOR */}
          <motion.div
            className="door left-door"
            initial={{ x: 0 }}
            exit={{ x: "-60vw", transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="door-visuals left-door-visuals">
              {/* FALCON LOGO (LEFT HALF) */}
              <div className="wing-image-container left-wing-image">
                <img src="/images/falcon_wings.png" alt="Falcon Left" className="falcon-logo" />
              </div>
            </div>

            {/* TEXT (LEFT HALF) */}
            <div className="text-split-container left-text-container">
              <div className="brand-group">
                <div className="half-word left-half">
                  <span className="brand-char">M</span>
                  <span className="brand-char">E</span>
                  <span className="brand-char">R</span>
                  <span className="brand-char">L</span>
                  <span className="brand-char">I</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT DOOR */}
          <motion.div
            className="door right-door"
            initial={{ x: 0 }}
            exit={{ x: "60vw", transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="door-visuals right-door-visuals">
              {/* FALCON LOGO (RIGHT HALF) */}
              <div className="wing-image-container right-wing-image">
                <img src="/images/falcon_wings.png" alt="Falcon Right" className="falcon-logo" />
              </div>
            </div>

            {/* TEXT (RIGHT HALF) */}
            <div className="text-split-container right-text-container">
              <div className="brand-group">
                <div className="half-word right-half">
                  <span className="brand-char">N</span>
                  <span className="brand-char">F</span>
                  <span className="brand-char">L</span>
                  <span className="brand-char">O</span>
                  <span className="brand-char">W</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
