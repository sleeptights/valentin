import type { Product } from "@/types";
import { formatPriceFrom } from "@/lib/utils";

type Kind =
  | "kitchen"
  | "hallway"
  | "sofa"
  | "armchair"
  | "chair"
  | "pouf"
  | "mirror"
  | "shoe"
  | "wardrobe"
  | "home";

function kindOf(product: Product): Kind {
  const n = product.name.toLowerCase();
  if (n.includes("кухн") || product.category === "кухни") return "kitchen";
  if (n.includes("кресл")) return "armchair";
  if (n.includes("стул")) return "chair";
  if (n.includes("пуф")) return "pouf";
  if (n.includes("зеркал")) return "mirror";
  if (n.includes("обувн") || n.includes("банкет")) return "shoe";
  if (n.includes("шкаф")) return "wardrobe";
  if (product.category === "прихожие") return "hallway";
  if (product.category === "мебель для дома") return "home";
  return "sofa";
}

function priceLine() {
  return formatPriceFrom();
}

function homeLead(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("тв") || n.includes("tv") || n.includes("телев")) {
    return `${name} — тумба и мебель для гостиной по индивидуальным размерам`;
  }
  if (n.includes("стеллаж") || n.includes("полк")) {
    return `${name} — стеллаж по индивидуальным размерам`;
  }
  if (n.includes("комод")) {
    return `${name} — комод по индивидуальным размерам`;
  }
  if (n.includes("стол")) {
    return `${name} — стол по индивидуальным размерам`;
  }
  return `${name} — мебель по индивидуальным размерам`;
}

export function productDescription(product: Product): string {
  const price = priceLine();
  const name = product.name;

  switch (kindOf(product)) {
    case "kitchen":
      return `${name} — кухня по индивидуальным размерам. Фасады, столешницу и технику подбираем в салоне. До заказа — проект и 3D. ${price}.`;
    case "hallway":
      return `${name} — мебель по индивидуальным размерам для прихожей. Размеры, фасады и наполнение согласовываем в салоне. ${price}.`;
    case "armchair":
      return `${name} — изготавливаем по индивидуальным размерам. Ткань, материал и цвет подберём при заказе. ${price}.`;
    case "chair":
      return `${name} — стул по индивидуальным размерам. Ткань и цвет согласуем при заказе. ${price}.`;
    case "pouf":
      return `${name} — пуф по индивидуальным размерам. Материал и цвет подберём при заказе. ${price}.`;
    case "mirror":
      return `${name} — зеркало по индивидуальным размерам. Размер и раму согласуем в салоне. ${price}.`;
    case "shoe":
      return `${name} — обувница по индивидуальным размерам. Глубину и фасады согласуем при заказе. ${price}.`;
    case "wardrobe":
      return `${name} — шкаф по индивидуальным размерам. Наполнение и фасады согласовываем в салоне. ${price}.`;
    case "home":
      return `${homeLead(name)}. Размеры, фасады и наполнение согласовываем в салоне. ${price}.`;
    default:
      return `${name} — изготавливаем по индивидуальным размерам. Ткань, материал и цвет подберём при заказе. ${price}.`;
  }
}

export function productFeatures(product: Product): string[] {
  switch (kindOf(product)) {
    case "kitchen":
      return [
        "По индивидуальным размерам",
        "Проект и 3D в салоне",
        "Изготовление до 60 рабочих дней",
      ];
    case "hallway":
    case "shoe":
    case "wardrobe":
    case "mirror":
    case "home":
      return [
        "По индивидуальным размерам",
        "Фасады и фурнитура на выбор",
        "Под заказ",
      ];
    default:
      return [
        "По индивидуальным размерам",
        "Ткань и цвет — при заказе",
        "Под заказ",
      ];
  }
}

export function productLeadTime(product: Product): string {
  if (
    product.category === "кухни" ||
    product.category === "прихожие" ||
    product.category === "мебель для дома"
  ) {
    return "До 60 рабочих дней после утверждения проекта";
  }
  return "Срок согласуем при заказе";
}
