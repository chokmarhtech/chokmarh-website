"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GSAPConfig = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Default configuration for ScrollTrigger
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
    });

    // We removed the global scroll snap logic here because it was causing 
    // unexpected jumps on pages with multiple sections.
    // Snapping should be applied purposefully to specific sections if needed.

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
};

export default GSAPConfig;
