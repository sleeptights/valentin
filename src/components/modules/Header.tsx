"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Phone, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { useLenis } from "lenis/react";
import { useCart } from "@/context/CartContext";
import { products, searchSuggestions } from "@/data/products";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { formatPriceFrom } from "@/lib/utils";
import type { Category, Product } from "@/types";

const easePremium = [0.22, 1, 0.36, 1] as const;

const nav = [
  { href: "/#projects", label: "Наши проекты", hash: "projects", primary: true },
  { href: "/#stages", label: "Этапы работы", hash: "stages" },
  { href: "/catalog", label: "Каталог", mega: true, primary: true },
  { href: "/#before-after", label: "Пространство", hash: "before-after" },
  { href: "/#reviews", label: "Отзывы", hash: "reviews" },
  { href: "/#contacts", label: "Контакты", hash: "contacts", primary: true },
];

const megaColumns: { title: string; cat: Category; href: string }[] = [
  {
    title: "Кухни",
    cat: "кухни",
    href: "/catalog?cat=%D0%BA%D1%83%D1%85%D0%BD%D0%B8",
  },
  {
    title: "Прихожие",
    cat: "прихожие",
    href: "/catalog?cat=%D0%BF%D1%80%D0%B8%D1%85%D0%BE%D0%B6%D0%B8%D0%B5",
  },
  {
    title: "Диваны",
    cat: "диваны",
    href: "/catalog?cat=%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%D1%8B",
  },
  {
    title: "Мебель для дома",
    cat: "мебель для дома",
    href: "/catalog?cat=%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%BB%D1%8F%20%D0%B4%D0%BE%D0%BC%D0%B0",
  },
];

function pickMegaItems(cat: Category, limit = 3): Product[] {
  return products.filter((p) => p.category === cat).slice(0, limit);
}

const iconBtn =
  "flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ease-premium";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const isHome = pathname === "/";
  const isMobile = useIsMobile();
  const { hidden, scrolled } = useScrollDirection();
  const { openCart, count } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useLockBodyScroll(mobileOpen);

  const solid = scrolled || megaOpen || searchOpen || !isHome;
  const hideBar = hidden && !megaOpen && !mobileOpen && !searchOpen && !isMobile;

  const megaLists = useMemo(
    () =>
      megaColumns.map((col) => ({
        ...col,
        items: pickMegaItems(col.cat, 3),
      })),
    [],
  );

  const categoryHits = useMemo(() => {
    if (!query.trim()) return searchSuggestions;
    const q = query.toLowerCase();
    return searchSuggestions.filter(
      (s) =>
        s.label.toLowerCase().includes(q) ||
        s.query.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q),
    );
  }, [query]);

  const productHits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 6);
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.materials.some((m) => m.toLowerCase().includes(q)),
      )
      .slice(0, 8);
  }, [query]);

  const closeOverlays = () => {
    setMobileOpen(false);
    setSearchOpen(false);
    setMegaOpen(false);
    setQuery("");
  };

  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash);
    if (!el) return;
    if (lenis) {
      // Menu/search lock stops Lenis; start before scroll or the jump is a no-op
      lenis.start();
      lenis.scrollTo(el, { offset: -96, duration: 1.2 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    hash?: string,
  ) => {
    closeOverlays();
    if (!hash) return;
    if (pathname === "/") {
      e.preventDefault();
      window.history.replaceState(null, "", `/#${hash}`);
      // Defer until body unlock effect runs (lenis was stopped while menu open)
      window.setTimeout(() => scrollToHash(hash), 0);
      return;
    }
    e.preventDefault();
    router.push(`/#${hash}`);
  };

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const t = window.setTimeout(() => scrollToHash(hash), 80);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, lenis]);

  useEffect(() => {
    if (!searchOpen && !mobileOpen && !megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlays();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, mobileOpen, megaOpen]);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background,box-shadow,backdrop-filter] duration-500 ease-premium ${
          solid
            ? "bg-cashmere/85 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        }`}
        animate={{ y: hideBar ? "-100%" : 0 }}
        transition={{ duration: 0.35, ease: easePremium }}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-5 sm:h-16 md:h-20 md:px-8">
          <Link
            href="/"
            onClick={closeOverlays}
            className={`relative z-10 shrink-0 font-serif text-[1.55rem] font-semibold tracking-tight sm:text-[1.85rem] md:text-[2.15rem] ${
              solid ? "text-graphite" : "text-milk"
            }`}
          >
            Valentin
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex xl:gap-8"
            aria-label="Основная"
          >
            {nav.map((item) => {
              const active =
                item.href === "/catalog" ? pathname.startsWith("/catalog") : false;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[0.95rem] font-medium tracking-wide transition-colors duration-300 ease-premium md:text-[0.98rem] ${
                    solid
                      ? active
                        ? "text-graphite"
                        : "text-graphite/60 hover:text-graphite"
                      : active
                        ? "text-milk"
                        : "text-milk/70 hover:text-milk"
                  }`}
                  onMouseEnter={() => setMegaOpen(Boolean(item.mega))}
                  onClick={(e) => onNavClick(e, item.hash)}
                >
                  {item.label}
                  {active ? (
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 h-px w-full bg-brass/70"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-0.5">
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setSearchOpen((v) => !v);
                  setMobileOpen(false);
                }}
                className={`${iconBtn} ${
                  solid
                    ? "text-graphite hover:bg-milk"
                    : "text-milk hover:bg-white/10"
                }`}
                aria-label="Поиск"
                aria-expanded={searchOpen}
                aria-controls="header-search"
              >
                <Search className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    id="header-search"
                    role="search"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.22, ease: easePremium }}
                    className="absolute right-0 top-full z-50 mt-3 w-[min(calc(100vw-2rem),22rem)] overflow-hidden rounded-[1.25rem] border border-brass/20 bg-milk p-3 shadow-lift"
                  >
                    <label className="sr-only" htmlFor="header-search-input">
                      Поиск по каталогу
                    </label>
                    <input
                      id="header-search-input"
                      autoFocus
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Найти кухню, диван, прихожую..."
                      className="w-full rounded-full bg-cashmere px-4 py-3 text-base outline-none ring-brass/30 placeholder:text-graphite/40 focus:ring-2"
                    />
                    <ul className="mt-2 max-h-[50vh] space-y-0.5 overflow-y-auto">
                      {categoryHits.map((s) => (
                        <li key={`cat-${s.label}`}>
                          <Link
                            href={`/catalog?cat=${encodeURIComponent(s.cat)}`}
                            onClick={closeOverlays}
                            className="flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors hover:bg-cashmere"
                          >
                            <span className="font-medium text-graphite">
                              {s.label}
                            </span>
                            <span className="text-[11px] uppercase tracking-[0.14em] text-graphite/40">
                              раздел
                            </span>
                          </Link>
                        </li>
                      ))}
                      {productHits.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/catalog/${p.id}`}
                            onClick={closeOverlays}
                            className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm transition-colors hover:bg-cashmere"
                          >
                            <span className="truncate text-graphite">
                              {p.name}
                            </span>
                            <span className="shrink-0 text-xs text-graphite/40">
                              {formatPriceFrom(p.priceFrom)}
                            </span>
                          </Link>
                        </li>
                      ))}
                      {query.trim() &&
                      categoryHits.length === 0 &&
                      productHits.length === 0 ? (
                        <li className="px-3 py-3 text-sm text-graphite/45">
                          Ничего не найдено
                        </li>
                      ) : null}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => {
                closeOverlays();
                openCart();
              }}
              className={`relative ${iconBtn} ${
                solid
                  ? "text-graphite hover:bg-milk"
                  : "text-milk hover:bg-white/10"
              }`}
              aria-label="Заявка"
            >
              <ShoppingBag className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
              {count > 0 && (
                <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-wood px-1 text-[10px] font-medium text-milk">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              className={`${iconBtn} lg:hidden ${
                solid
                  ? "text-graphite hover:bg-milk"
                  : "text-milk hover:bg-white/10"
              }`}
              onClick={() => {
                setSearchOpen(false);
                setMobileOpen(true);
              }}
              aria-label="Меню"
            >
              <Menu className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: easePremium }}
              className="border-t border-brass/15 bg-cashmere/95 backdrop-blur-md"
            >
              <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 md:grid-cols-4 md:gap-6 md:px-8 md:py-7">
                {megaLists.map((col) => {
                  const cover = col.items[0];
                  return (
                    <div key={col.cat} className="min-w-0">
                      <Link
                        href={col.href}
                        onClick={() => setMegaOpen(false)}
                        className="group block"
                      >
                        <span className="relative mb-3 block aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-milk shadow-soft">
                          {cover ? (
                            <Image
                              src={cover.images[0]}
                              alt=""
                              fill
                              className={
                                cover.images[0]?.endsWith(".png")
                                  ? "object-contain p-4 transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                                  : "object-cover object-center transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                              }
                              sizes="(max-width:1024px) 40vw, 220px"
                            />
                          ) : null}
                        </span>
                        <span className="flex items-baseline justify-between gap-2">
                          <span className="font-serif text-xl text-graphite transition-colors group-hover:text-walnut">
                            {col.title}
                          </span>
                          <span className="text-[11px] uppercase tracking-[0.16em] text-brass">
                            все →
                          </span>
                        </span>
                        {cover ? (
                          <span className="mt-1 block text-xs text-graphite/45">
                            {formatPriceFrom(cover.priceFrom)}
                          </span>
                        ) : null}
                      </Link>
                      <ul className="mt-3 space-y-0.5 border-t border-brass/10 pt-3">
                        {col.items.slice(1).map((p) => (
                          <li key={p.id}>
                            <Link
                              href={`/catalog/${p.id}`}
                              onClick={() => setMegaOpen(false)}
                              className="flex items-center justify-between gap-2 rounded-lg px-0.5 py-1.5 text-sm text-graphite/70 transition-colors hover:text-graphite"
                            >
                              <span className="truncate">{p.name}</span>
                              <span className="shrink-0 text-xs text-graphite/40">
                                {formatPriceFrom(p.priceFrom)}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col bg-cashmere pt-[env(safe-area-inset-top)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: easePremium }}
          >
            <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 sm:h-16">
              <Link
                href="/"
                onClick={closeOverlays}
                className="font-serif text-[1.55rem] font-semibold tracking-tight text-graphite sm:text-[1.85rem]"
              >
                Valentin
              </Link>
              <button
                type="button"
                className={`${iconBtn} text-graphite hover:bg-milk`}
                onClick={() => setMobileOpen(false)}
                aria-label="Закрыть меню"
              >
                <X className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} />
              </button>
            </div>

            <nav
              className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col overflow-y-auto touch-pan-y px-5 pb-4 [-webkit-overflow-scrolling:touch]"
              aria-label="Мобильная"
            >
              <p className="mb-4 mt-2 text-[11px] uppercase tracking-[0.2em] text-brass">
                Куда идти
              </p>
              <div className="flex flex-col gap-1">
                {nav
                  .filter((item) => item.primary)
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => onNavClick(e, item.hash)}
                      className="rounded-2xl px-1 py-3 font-serif text-[2rem] leading-none tracking-tight text-graphite transition-colors hover:text-walnut"
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>

              <div className="mt-6 border-t border-brass/15 pt-5">
                <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-brass">
                  Каталог
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {megaColumns.map((col) => (
                    <Link
                      key={col.cat}
                      href={col.href}
                      onClick={closeOverlays}
                      className="rounded-2xl bg-milk px-4 py-3.5 text-sm font-medium text-graphite shadow-soft transition-colors hover:bg-milk/80"
                    >
                      {col.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-brass/15 pt-5">
                <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-brass">
                  Ещё
                </p>
                <div className="flex flex-col">
                  {nav
                    .filter((item) => !item.primary)
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(e) => onNavClick(e, item.hash)}
                        className="rounded-xl px-1 py-2.5 text-[1.05rem] font-medium text-graphite/70 transition-colors hover:text-graphite"
                      >
                        {item.label}
                      </Link>
                    ))}
                </div>
              </div>
            </nav>

            <div className="border-t border-brass/15 px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <a
                href="tel:+79202005124"
                className="bg-wood inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-medium tracking-[0.04em] text-milk shadow-brass transition-[filter] duration-300 ease-premium hover:brightness-105"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                +7 (920) 200-51-24
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
