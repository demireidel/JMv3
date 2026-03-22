import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-svh flex items-center justify-center bg-surface">
      <div className="text-center">
        <p className="font-bebas text-display text-t3 leading-none">404</p>
        <h1 className="font-playfair text-xl text-t1 mt-4">Página no encontrada</h1>
        <p className="text-t2 mt-3">La página que buscás no existe o fue movida.</p>
        <Link href="/" className="inline-block mt-8 px-8 py-3 bg-accent text-surface font-semibold rounded-md no-underline hover:brightness-110 transition-all">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
