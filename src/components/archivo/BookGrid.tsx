import Image from "next/image";
import FadeReveal from "@/components/ui/FadeReveal";
import type { Etapa } from "@/data/archivo";

interface BookGridProps {
  etapas: Etapa[];
}

export default function BookGrid({ etapas }: BookGridProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 my-8"><span className="flex-1 h-px bg-border" /><span className="font-bebas text-xs text-t3 tracking-[var(--tracking-wide)]">LIBROS</span><span className="flex-1 h-px bg-border" /></div>

      {etapas.map((etapa, eIdx) => (
        <FadeReveal key={eIdx}>
          <div className="mb-8">
            <h3 className="font-bebas text-base text-t1 tracking-wide">
              {etapa.label}{" "}
              <span className="text-t3">({etapa.desc})</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
              {etapa.books.map((book, bIdx) => (
                <div
                  key={bIdx}
                  className={`flex gap-4 p-4 rounded-md border ${
                    book.highlight
                      ? "bg-surface-2 border-accent"
                      : "bg-surface-1 border-border"
                  }`}
                >
                  {book.cover && (
                    <div className="relative w-[70px] min-h-[100px] shrink-0 rounded-sm overflow-hidden">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="70px"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">{book.year}</p>
                    <h4 className="font-playfair text-sm text-t1 leading-snug">
                      {book.title}
                    </h4>
                    {book.publisher && (
                      <p className="text-xs text-t3">{book.publisher}</p>
                    )}
                    {book.desc && (
                      <p className="text-xs text-t2 mt-1 leading-snug">
                        {book.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeReveal>
      ))}
    </div>
  );
}
