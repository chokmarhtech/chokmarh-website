"use client";

const BottomNav = () => (
  <nav
    className="fixed bottom-0 left-0 right-0 z-50 h-[80px] pointer-events-none"
    style={{
      background:
        "linear-gradient(to top, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.00) 100%)",
      backdropFilter: "blur(20px) saturate(160%)",
      WebkitBackdropFilter: "blur(20px) saturate(160%)",
      maskImage:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      maskComposite: "intersect",
      WebkitMaskImage:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      WebkitMaskComposite: "source-in",
      boxShadow: "none",
      border: "none",
    }}
  />
);

export default BottomNav;
