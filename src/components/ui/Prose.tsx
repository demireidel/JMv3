import { renderMd } from "@/lib/utils";

interface ProseProps {
  text: string;
  className?: string;
}

/** Renders markdown bold/italic as safe React elements (no dangerouslySetInnerHTML) */
export default function Prose({ text, className }: ProseProps) {
  return <span className={className}>{renderMd(text)}</span>;
}
