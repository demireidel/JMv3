import type { Metadata } from "next";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeReveal from "@/components/ui/FadeReveal";
import BookGrid from "@/components/archivo/BookGrid";
import PaperList from "@/components/archivo/PaperList";
import SpeechGrid from "@/components/archivo/SpeechGrid";
import InterviewGrid from "@/components/archivo/InterviewGrid";
import {
  archivoHeader,
  etapas,
  papers,
  discursos,
  entrevistas,
  influencias,
  reconocimientos,
  collabProject,
  conversionQuote,
  edicionesNote,
} from "@/data/archivo";

export const metadata: Metadata = {
  title: "Archivo",
  description:
    "Archivo intelectual de Javier Milei — libros, papers académicos, discursos, entrevistas.",
};

export default function ArchivoPage() {
  return (
    <div className="bg-surface pt-24 pb-16">
      <div className="w-full max-w-[var(--container-max)] mx-auto px-6 md:px-8">
        <SectionHeader
          eyebrow="ARCHIVO"
          title={archivoHeader.sectionTitle}
          intro={archivoHeader.sectionIntro}
          isPageTitle
        />

        <BookGrid etapas={etapas} />
        <PaperList papers={papers} />
        <SpeechGrid speeches={discursos} />
        <InterviewGrid interviews={entrevistas} />

        {/* ── Collab Project ──────────────────────────── */}
        <FadeReveal>
          <div className="mb-16">
            <div className="flex items-center gap-4 my-8"><span className="flex-1 h-px bg-border" /><span className="font-bebas text-xs text-t3 tracking-[var(--tracking-wide)]">INVESTIGACIÓN ACADÉMICA</span><span className="flex-1 h-px bg-border" /></div>
            <div className="bg-surface-1 border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent text-surface px-3 py-1 rounded-md font-bebas text-xs tracking-[var(--tracking-normal)]">{collabProject.badge}</span>
              </div>
              <h3 className="font-playfair text-xl text-t1 leading-snug mb-1">{collabProject.title}</h3>
              <p className="text-xs text-t3 mb-1">{collabProject.subtitle}</p>
              <p className="text-sm text-celeste mb-4">
                {collabProject.authors}
              </p>
              <p className="text-sm text-t2 leading-relaxed mb-4 italic">
                {collabProject.abstract}
              </p>
              <p className="text-t2 text-base leading-relaxed mb-4">{collabProject.desc}</p>
              <div className="mb-4">
                <p className="font-bebas text-xs text-accent tracking-[var(--tracking-wide)] uppercase mb-2">RESULTADOS CLAVE</p>
                <ul className="space-y-2">
                  {collabProject.keyResults.map((r, i) => (
                    <li
                      key={i}
                      className="text-sm text-t2 pl-4 border-l-2 border-accent"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-t3 mb-4">
                <span className="text-accent font-semibold">Keywords:</span>{" "}
                {collabProject.keywords}
              </p>
              <blockquote className="border-l-[var(--border-lg)] border-accent pl-6 my-8 max-w-[700px]">
                <p className="font-playfair italic text-lg text-t1 leading-relaxed">{collabProject.quote}</p>
                <footer className="text-sm text-t3 mt-2">— {collabProject.quoteCite}</footer>
              </blockquote>
            </div>
          </div>
        </FadeReveal>

        {/* ── Influences ──────────────────────────────── */}
        <FadeReveal>
          <div className="mb-16">
            <h3 className="font-bebas text-xl text-t1 tracking-wide mb-4">
              INFLUENCIAS INTELECTUALES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {influencias.map((inf, i) => (
                <div key={i} className="bg-surface-1 border border-border rounded-lg p-6">
                  <h4 className="font-bebas text-sm text-accent tracking-wide mb-2">
                    {inf.school}
                  </h4>
                  <p className="text-sm text-t2">{inf.names}</p>
                  {inf.keyWork && (
                    <p className="text-xs text-t3 italic mt-1">
                      {inf.keyWork}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeReveal>

        {/* ── Recognitions ──────────────────────────────── */}
        <FadeReveal>
          <div className="mb-16">
            <h3 className="font-bebas text-xl text-t1 tracking-wide mb-4">
              RECONOCIMIENTOS
            </h3>
            <div className="flex flex-wrap gap-3">
              {reconocimientos.map((r, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-surface-1 rounded-full border border-border text-sm text-t1"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </FadeReveal>

        {/* ── Ediciones Note ──────────────────────────── */}
        <FadeReveal>
          <div className="bg-surface-1 border border-border rounded-lg p-6 mb-16 text-center">
            <p className="text-sm text-t2 leading-relaxed italic">
              {edicionesNote}
            </p>
          </div>
        </FadeReveal>

        {/* ── Conversion Quote ──────────────────────────── */}
        <FadeReveal>
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <div className="w-[60px] h-0.5 bg-accent mx-auto mb-8" />
            <p className="font-playfair italic text-xl text-t1 leading-relaxed">
              {conversionQuote.text}
            </p>
            <p className="text-sm text-t3 mt-4">— {conversionQuote.cite}</p>
          </div>
        </FadeReveal>
      </div>
    </div>
  );
}
