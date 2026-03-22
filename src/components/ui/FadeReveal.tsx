// Server Component -- no "use client" needed
// Uses CSS animation-timeline: view() for zero-JS scroll reveals
// Falls back to visible content if browser doesn't support it

interface FadeRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header";
  direction?: "up" | "left" | "right" | "scale";
}

export default function FadeReveal({
  children,
  className = "",
  as: Tag = "div",
  direction = "up",
}: FadeRevealProps) {
  const animClass = {
    up: "fade-reveal",
    left: "slide-in-left",
    right: "slide-in-right",
    scale: "scale-reveal",
  }[direction];

  return <Tag className={`${animClass} ${className}`}>{children}</Tag>;
}
