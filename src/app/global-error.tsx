"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body style={{ backgroundColor: "#0a0a0f", color: "rgba(255,255,255,0.92)", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", maxWidth: "400px", padding: "1.5rem" }}>
            <p style={{ fontSize: "4rem", fontWeight: 700, opacity: 0.3, lineHeight: 1 }}>Error</p>
            <h2 style={{ fontSize: "1.25rem", marginTop: "1rem" }}>Algo salió mal</h2>
            <p style={{ opacity: 0.6, marginTop: "0.75rem" }}>
              {error.message || "Ocurrió un error inesperado."}
            </p>
            <button
              onClick={reset}
              style={{
                marginTop: "2rem", padding: "0.75rem 2rem", backgroundColor: "#F6B40E",
                color: "#0a0a0f", fontWeight: 600, borderRadius: "0.5rem", border: "none", cursor: "pointer",
              }}
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
