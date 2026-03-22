// Server Component

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  isPageTitle?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  isPageTitle = false,
}: SectionHeaderProps) {
  const Heading = isPageTitle ? "h1" : "h2";

  return (
    <header className="fade-reveal mb-12">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[var(--tracking-wider)] text-accent mb-2">
          {eyebrow}
        </p>
      )}
      <Heading className="font-bebas text-section leading-none tracking-tight text-t1 mt-2">
        {title}
      </Heading>
      <hr className="h-[3px] w-24 border-0 mt-4 rounded-full accent-line" />
      {intro && (
        <p className="text-base leading-relaxed text-t2 max-w-[700px] mt-4">
          {intro}
        </p>
      )}
    </header>
  );
}
