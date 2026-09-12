"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function ProductGallery({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const src = images[active] ?? images[0];
  const total = images.length;

  const go = (dir: -1 | 1) => {
    if (total <= 1) return;
    setActive((i) => (i + dir + total) % total);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current || total <= 1) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    // Require a clear horizontal swipe so vertical page scroll stays free
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    go(dx < 0 ? 1 : -1);
  };

  const isPng = src?.endsWith(".png");

  return (
    <div className="space-y-3">
      <div
        className={`relative aspect-[3/4] touch-pan-y overflow-hidden shadow-soft ${
          isPng ? "bg-cashmere" : "bg-milk"
        }`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          key={src}
          src={src}
          alt={name}
          fill
          priority
          className={
            isPng
              ? "object-contain object-center p-6 md:p-10"
              : "object-cover object-center"
          }
          sizes="(max-width:768px) 100vw, 50vw"
          quality={90}
          draggable={false}
        />
        {total > 1 ? (
          <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === active ? "bg-brass" : "bg-white/70"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
      {total > 1 ? (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {images.map((thumb, i) => {
            const selected = i === active;
            return (
              <button
                key={thumb}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Фото ${i + 1}`}
                aria-pressed={selected}
                className={`relative aspect-square overflow-hidden outline-none ring-offset-2 ring-offset-cashmere transition duration-300 ease-premium ${
                  thumb.endsWith(".png") ? "bg-cashmere" : "bg-milk"
                } ${
                  selected ? "ring-2 ring-brass" : "hover:ring-1 hover:ring-brass/40"
                }`}
              >
                <Image
                  src={thumb}
                  alt=""
                  fill
                  className={
                    thumb.endsWith(".png")
                      ? "object-contain object-center p-2"
                      : "object-cover object-center"
                  }
                  sizes="120px"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
