import Link from "next/link";
import { navLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8">
        {/* Flag stripe */}
        <div className="flex h-1 rounded-sm overflow-hidden mb-12 max-w-[200px]">
          <div className="flex-1 bg-celeste" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-celeste" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <Link href="/" className="font-bebas text-lg tracking-[var(--tracking-widest)] no-underline flex gap-[0.15em]">
              <span className="text-t1">JAVIER</span>
              <span className="text-accent">MILEI</span>
            </Link>
            <p className="font-playfair italic text-t2 mt-3 text-base">La libertad avanza.</p>
          </div>

          <div className="flex flex-wrap gap-4 gap-y-2 md:justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-bebas text-sm tracking-[var(--tracking-wide)] uppercase no-underline text-t3 hover:text-t1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex justify-between items-center flex-wrap gap-4">
          <p className="text-xs text-t3">Presidente de la Nación Argentina</p>
          <p className="font-playfair italic text-sm text-t2">Viva la libertad, carajo.</p>
        </div>
      </div>
    </footer>
  );
}
