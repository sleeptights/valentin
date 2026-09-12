"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

/** Shared lock so nested modals don't unlock body under each other */
let lockCount = 0;
let savedOverflow = "";
let savedPadding = "";

/** Блокирует скролл страницы без сдвига вёрстки при открытии модалки */
export function useLockBodyScroll(locked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!locked) return;

    if (lockCount === 0) {
      const scrollbar =
        window.innerWidth - document.documentElement.clientWidth;
      savedOverflow = document.body.style.overflow;
      savedPadding = document.body.style.paddingRight;
      document.body.style.overflow = "hidden";
      if (scrollbar > 0) {
        document.body.style.paddingRight = `${scrollbar}px`;
      }
      lenis?.stop();
    }
    lockCount += 1;

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        document.body.style.overflow = savedOverflow;
        document.body.style.paddingRight = savedPadding;
        lenis?.start();
      }
    };
  }, [locked, lenis]);
}
