export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Витринная цена: число из данных не показываем. */
export function formatPriceFrom(_value?: number): string {
  return "Цена по запросу";
}

export const spring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 18,
  mass: 0.6,
};

export const softSpring = {
  type: "spring" as const,
  stiffness: 50,
  damping: 18,
};

export const vipDeliveryThreshold = 150000;

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
