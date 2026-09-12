"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CutCta } from "@/components/ui/CutCta";
import { siteImages } from "@/data/products";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useSmoothScrollTo } from "@/hooks/useSmoothScrollTo";

/** ease-premium — тихий выезд, без пружин */
const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [active, setActive] = useState(false);
  const scrollTo = useSmoothScrollTo();
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    let cancelled = false;
    const t = window.setTimeout(() => {
      if (!cancelled) setActive(true);
    }, 80);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  // Один тихий старт на всех вьюпортах — без скачка hydration (isMobile = false в SSR)
  const startScale = reduceMotion ? 1 : 1.06;

  return (
    <section
      id="top"
      className="relative h-[min(92svh,42rem)] min-h-[34rem] w-full overflow-hidden bg-graphite text-milk md:h-[100dvh] md:min-h-[36rem]"
    >
      <div className="absolute inset-0 bg-graphite">
        <motion.div
          className="absolute inset-0 origin-center will-change-transform"
          initial={{ scale: startScale }}
          animate={{ scale: active ? 1 : startScale }}
          transition={{
            duration: reduceMotion ? 0 : 1.15,
            ease: easeOut,
          }}
        >
          {/* Mobile: портретный кроп острова + латуни + объёма. Desktop: полный landscape. */}
          <Image
            src={siteImages.heroMobile}
            alt="Премиальная кухня Valentin — остров, камень и латунь"
            fill
            priority
            className="object-cover object-[center_42%] md:hidden"
            sizes="100vw"
            quality={95}
          />
          <Image
            src={siteImages.hero}
            alt="Премиальная кухня Valentin — камень, латунь и остров"
            fill
            priority
            className="hidden object-cover object-center md:block"
            sizes="100vw"
            quality={100}
          />
        </motion.div>

        {/* Градиенты: низ плотнее для текста, верх легче чтобы читался объём комнаты */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/92 via-graphite/25 to-graphite/15 md:via-graphite/30 md:to-graphite/10" />
        <div className="pointer-events-none absolute inset-0 bg-vignette opacity-25 md:opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-graphite/35 via-transparent to-transparent md:from-graphite/45" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-[max(2.25rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] md:px-8 md:pb-14 md:pt-28">
        <div className="overflow-hidden">
          <motion.p
            className="mb-2 font-serif text-[2.5rem] tracking-tight text-milk drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)] md:mb-4 md:text-6xl lg:text-7xl"
            initial={{ y: "110%", opacity: 0 }}
            animate={
              active ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }
            }
            transition={{ duration: 0.55, delay: 0.55, ease: easeOut }}
          >
            Valentin
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            className="max-w-[18ch] font-serif text-[1.55rem] leading-[1.22] text-milk/95 text-balance drop-shadow-[0_6px_24px_rgba(0,0,0,0.4)] md:max-w-3xl md:text-[clamp(1.75rem,3.2vw,2.75rem)] md:leading-[1.15]"
            initial={{ y: "120%", opacity: 0 }}
            animate={
              active ? { y: "0%", opacity: 1 } : { y: "120%", opacity: 0 }
            }
            transition={{ duration: 0.55, delay: 0.68, ease: easeOut }}
          >
            Кухни, прихожие и мягкая мебель под заказ
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.p
            className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-milk/70 md:mt-5 md:max-w-xl md:text-base"
            initial={{ y: "100%", opacity: 0 }}
            animate={
              active ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.8, ease: easeOut }}
          >
            Качественная мебель для архитектуры вашего пространства.
          </motion.p>
        </div>

        <motion.div
          className="mt-6 md:mt-9"
          initial={{ y: 20, opacity: 0 }}
          animate={active ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.92, ease: easeOut }}
        >
          <CutCta
            className="sm:w-auto sm:min-w-[17.5rem]"
            align="start"
            onClick={() => scrollTo("projects")}
          >
            Смотреть проекты
          </CutCta>
        </motion.div>
      </div>
    </section>
  );
}
