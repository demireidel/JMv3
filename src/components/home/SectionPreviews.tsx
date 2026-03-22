import Link from "next/link";
import Image from "next/image";

const sections = [
  { href: "/logros", title: "LOGROS", stat: "10M+ salieron de la pobreza", image: "/images/banco/gabinete-motosierra.jpg", tall: true },
  { href: "/reformas", title: "REFORMAS", stat: "14.500+ desregulaciones", image: "/images/banco/pacto-mayo-tucuman.jpg" },
  { href: "/futuro", title: "FUTURO", stat: "USD 25.000M — Stargate Argentina", image: "/images/banco/stargate-anuncio.jpg" },
  { href: "/mundo", title: "MUNDO", stat: "3 acuerdos comerciales históricos", image: "/images/banco/mercosur-ue-escenario.jpg" },
  { href: "/vision", title: "VISIÓN", stat: "El proyecto de la libertad", image: "/images/banco/davos-2024-discurso.jpg", wide: true },
  { href: "/archivo", title: "ARCHIVO", stat: "14 libros · 50+ papers · 9 discursos", image: "/images/banco/inauguracion-discurso-congreso.jpg" },
];

export default function SectionPreviews() {
  return (
    <section className="bg-surface pt-8 pb-24">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`relative rounded-lg overflow-hidden min-h-[220px] flex items-end no-underline border border-border transition-all duration-300 ease-premium hover:border-border-hover hover:-translate-y-1 group ${
                s.tall ? "md:row-span-2" : ""
              } ${s.wide ? "md:col-span-2" : ""}`}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-600 ease-premium group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 z-[1] section-overlay" />
              <div className="relative z-[2] p-6 w-full">
                <span className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase">{s.title}</span>
                <p className="font-playfair text-base text-t1 mt-1 leading-snug">{s.stat}</p>
                <span className="inline-block mt-2 text-t3 text-xl transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-accent">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
