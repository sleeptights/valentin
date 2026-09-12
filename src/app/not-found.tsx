import Link from "next/link";
import { CutCta } from "@/components/ui/CutCta";

export default function NotFound() {
  return (
    <main className="bg-cashmere pt-[calc(5.5rem+env(safe-area-inset-top))] pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-brass">
          404
        </p>
        <h1 className="font-serif text-[2.1rem] tracking-tight text-graphite md:text-5xl">
          Страница не найдена
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-graphite/55 md:text-base">
          Возможно, ссылка устарела. Вернитесь на главную или откройте каталог.
        </p>
        <div className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <CutCta href="/" className="sm:flex-1">
            На главную
          </CutCta>
          <Link
            href="/catalog"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-brass/40 bg-transparent px-6 text-sm font-medium tracking-[0.04em] text-graphite shadow-soft transition-[color,background-color,border-color] duration-300 ease-premium hover:border-brass hover:bg-milk/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/20 focus-visible:ring-offset-2 focus-visible:ring-offset-cashmere"
          >
            В каталог
          </Link>
        </div>
      </div>
    </main>
  );
}
