interface FactPillProps {
  text: string;
  color: "gold" | "blue" | "green";
}

const styles = {
  gold: { bg: "bg-accent/15", fg: "text-accent" },
  blue: { bg: "bg-celeste/15", fg: "text-celeste" },
  green: { bg: "bg-success/15", fg: "text-success" },
} as const;

export default function FactPill({ text, color }: FactPillProps) {
  const { bg, fg } = styles[color];
  return (
    <span className={`px-3 py-1 rounded-md text-xs font-semibold ${bg} ${fg}`}>
      {text}
    </span>
  );
}
