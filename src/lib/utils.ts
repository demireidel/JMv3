import { createElement, type ReactNode } from "react";

// ── Utility Functions ────────────────────────────────────

/** Merge class names conditionally (lightweight clsx alternative) */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a number with Argentine locale (dots for thousands) */
export function formatNumber(n: number, decimals = 0): string {
  return n.toLocaleString("es-AR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Parse **bold** and *italic* markdown to React elements (safe — no dangerouslySetInnerHTML).
 * Supports: **bold**, *italic*, ***bold italic***
 */
export function renderMd(text: string): ReactNode[] {
  const result: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Match **bold** (including ***bold italic***)
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Match *italic* (but not **)
    const italicMatch = remaining.match(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/);

    // Find the earliest match
    const boldIdx = boldMatch?.index ?? Infinity;
    const italicIdx = italicMatch?.index ?? Infinity;

    if (boldIdx === Infinity && italicIdx === Infinity) {
      // No more matches — push remaining text
      if (remaining) result.push(remaining);
      break;
    }

    if (boldIdx <= italicIdx && boldMatch) {
      // Push text before match
      if (boldIdx > 0) result.push(remaining.slice(0, boldIdx));
      // Check if it's ***bold italic***
      const inner = boldMatch[1];
      if (inner.startsWith("*") && inner.endsWith("*")) {
        result.push(
          createElement("strong", { key: key++ },
            createElement("em", null, inner.slice(1, -1))
          )
        );
      } else {
        result.push(createElement("strong", { key: key++ }, inner));
      }
      remaining = remaining.slice(boldIdx + boldMatch[0].length);
    } else if (italicMatch) {
      // Push text before match
      if (italicIdx > 0) result.push(remaining.slice(0, italicIdx));
      result.push(createElement("em", { key: key++ }, italicMatch[1]));
      remaining = remaining.slice(italicIdx + italicMatch[0].length);
    }
  }

  return result;
}
