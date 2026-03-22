"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-svh flex items-center justify-center bg-surface">
      <div className="text-center max-w-md px-6">
        <p className="font-bebas text-display text-t3 leading-none">Error</p>
        <h2 className="font-playfair text-xl text-t1 mt-4">
          Algo salió mal
        </h2>
        <p className="text-t2 mt-3">
          {error.message || "Ocurrió un error inesperado. Por favor, intentá de nuevo."}
        </p>
        <button
          onClick={reset}
          className="inline-block mt-8 px-8 py-3 bg-accent text-surface font-semibold rounded-md cursor-pointer hover:brightness-110 transition-all"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
