// Server Component

interface QuoteBlockProps {
  text: string;
  attr: string;
  date?: string;
}

export default function QuoteBlock({ text, attr, date }: QuoteBlockProps) {
  return (
    <blockquote className="fade-reveal border-l-[var(--border-lg)] border-accent pl-6 py-2 my-8 max-w-[700px]">
      <p className="font-playfair text-lg italic leading-relaxed text-t1">
        {text}
      </p>
      <footer className="mt-3 text-sm text-t3 not-italic">
        — {attr}
        {date && ` — ${date}`}
      </footer>
    </blockquote>
  );
}
