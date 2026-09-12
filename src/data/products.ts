import type { KitchenCollection, Product } from "@/types";

export { vipDeliveryThreshold as FREE_SHIPPING_THRESHOLD } from "@/lib/utils";

const img = (name: string) => `/images/real/${name}`;

/** Товары салона Valentin с mebelgorod.com/shops/valentin (shop_id=10) */
export const products: Product[] = [
  {
    "id": "divan-nord-2131",
    "name": "Диван Норд",
    "priceFrom": 25800,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2131/0.jpg?v=13",
      "/images/catalog/2131/1.jpg?v=13",
      "/images/catalog/2131/2.jpg?v=13"
    ],
    "description": "Диван Норд — прямые диваны салона Valentin от 25 800 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-bar-2137",
    "name": "Диван Бар",
    "priceFrom": 31900,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2137/0.jpg?v=13",
      "/images/catalog/2137/1.jpg?v=13",
      "/images/catalog/2137/2.jpg?v=13"
    ],
    "description": "Диван Бар — прямые диваны салона Valentin от 31 900 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "kuhnya-miya-3852",
    "name": "Кухня Мия",
    "priceFrom": 120000,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "кухни",
    "images": [
      "/images/catalog/3852/0.jpg?v=13",
      "/images/catalog/3852/1.jpg?v=13",
      "/images/catalog/3852/2.jpg?v=13"
    ],
    "description": "Кухня Мия — кухонные гарнитуры салона Valentin от 120 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Индивидуальные размеры"
    ]
  },
  {
    "id": "divan-edelveys-2141",
    "name": "Диван Эдельвейс",
    "priceFrom": 37300,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2141/0.jpg?v=13",
      "/images/catalog/2141/1.jpg?v=13",
      "/images/catalog/2141/2.jpg?v=13"
    ],
    "description": "Диван Эдельвейс — прямые диваны салона Valentin от 37 300 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-yunost-2124",
    "name": "Диван Юность",
    "priceFrom": 18000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2124/0.jpg?v=13",
      "/images/catalog/2124/1.jpg?v=13",
      "/images/catalog/2124/2.jpg?v=13"
    ],
    "description": "Диван Юность — диваны и кресла салона Valentin от 18 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "kreslo-sherlok-2150",
    "name": "Кресло Шерлок",
    "priceFrom": 19200,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2150/0.jpg?v=13",
      "/images/catalog/2150/1.jpg?v=13",
      "/images/catalog/2150/2.jpg?v=13"
    ],
    "description": "Кресло Шерлок — кресла салона Valentin от 19 200 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-prestizh-2-2147",
    "name": "Диван Престиж 2",
    "priceFrom": 31900,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2147/0.jpg?v=13",
      "/images/catalog/2147/1.jpg?v=13",
      "/images/catalog/2147/2.jpg?v=13"
    ],
    "description": "Диван Престиж 2 — прямые диваны салона Valentin от 31 900 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-evrika-malysh-2129",
    "name": "Диван Эврика-малыш",
    "priceFrom": 16000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2129/0.jpg?v=13",
      "/images/catalog/2129/1.jpg?v=13",
      "/images/catalog/2129/2.jpg?v=13"
    ],
    "description": "Диван Эврика-малыш — прямые диваны салона Valentin от 16 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "prihozhaya-classic-7-2133",
    "name": "Прихожая Classic-7",
    "priceFrom": 249500,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2133/0.jpg?v=13",
      "/images/catalog/2133/1.jpg?v=13",
      "/images/catalog/2133/2.jpg?v=13"
    ],
    "description": "Прихожая Classic-7 — прихожие салона Valentin от 249 500 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "divan-rossa-2143",
    "name": "Диван Росса",
    "priceFrom": 33300,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2143/0.jpg?v=13",
      "/images/catalog/2143/1.jpg?v=13",
      "/images/catalog/2143/2.jpg?v=13"
    ],
    "description": "Диван Росса — прямые диваны салона Valentin от 33 300 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-hilton-2153",
    "name": "Диван Хилтон",
    "priceFrom": 15200,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2153/0.jpg?v=13",
      "/images/catalog/2153/1.jpg?v=13",
      "/images/catalog/2153/2.jpg?v=13"
    ],
    "description": "Диван Хилтон — прямые диваны салона Valentin от 15 200 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "stul-bar-2138",
    "name": "Стул Бар",
    "priceFrom": 8000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2138/0.jpg?v=13",
      "/images/catalog/2138/1.jpg?v=13",
      "/images/catalog/2138/2.jpg?v=13"
    ],
    "description": "Стул Бар — стулья салона Valentin от 8 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "kuhnya-santorini-4034",
    "name": "Кухня Санторини",
    "priceFrom": 196000,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "кухни",
    "images": [
      "/images/catalog/4034/0.jpg?v=13",
      "/images/catalog/4034/1.jpg?v=13",
      "/images/catalog/4034/2.jpg?v=13"
    ],
    "description": "Кухня Санторини — кухонные гарнитуры салона Valentin от 196 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Индивидуальные размеры"
    ]
  },
  {
    "id": "kreslo-kokteylnoe-2132",
    "name": "Кресло коктейльное",
    "priceFrom": 15900,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2132/0.jpg?v=13",
      "/images/catalog/2132/1.jpg?v=13",
      "/images/catalog/2132/2.jpg?v=13"
    ],
    "description": "Кресло коктейльное — кресла салона Valentin от 15 900 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "obuvnitsa-classic-2154",
    "name": "Обувница Classic",
    "priceFrom": 31600,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2154/0.jpg?v=13",
      "/images/catalog/2154/1.jpg?v=13",
      "/images/catalog/2154/2.jpg?v=13"
    ],
    "description": "Обувница Classic — прихожие салона Valentin от 31 600 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "prihozhaya-louf-2135",
    "name": "Прихожая Лоуф",
    "priceFrom": 59600,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2135/0.jpg?v=13",
      "/images/catalog/2135/1.jpg?v=13",
      "/images/catalog/2135/2.jpg?v=13"
    ],
    "description": "Прихожая Лоуф — прихожие салона Valentin от 59 600 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "prihozhaya-s-tumboy-i-zerkalom-2162",
    "name": "Прихожая с тумбой и зеркалом",
    "priceFrom": 99600,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2162/0.jpg?v=13",
      "/images/catalog/2162/1.jpg?v=13",
      "/images/catalog/2162/2.jpg?v=13"
    ],
    "description": "Прихожая с тумбой и зеркалом — прихожие салона Valentin от 99 600 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "kreslo-edelveys-2142",
    "name": "Кресло Эдельвейс",
    "priceFrom": 23800,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2142/0.jpg?v=13",
      "/images/catalog/2142/1.jpg?v=13",
      "/images/catalog/2142/2.jpg?v=13"
    ],
    "description": "Кресло Эдельвейс — кресла салона Valentin от 23 800 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-sherlok-3708",
    "name": "Диван Шерлок",
    "priceFrom": 33600,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/3708/0.jpg?v=13",
      "/images/catalog/3708/1.jpg?v=13",
      "/images/catalog/3708/2.jpg?v=13"
    ],
    "description": "Диван Шерлок — прямые диваны салона Valentin от 33 600 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-bar-2130",
    "name": "Диван Бар Compact",
    "priceFrom": 16000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2130/0.jpg?v=13",
      "/images/catalog/2130/1.jpg?v=13",
      "/images/catalog/2130/2.jpg?v=13"
    ],
    "description": "Диван Бар Compact — прямые диваны салона Valentin от 16 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "kreslo-kokteylnoe-2-2140",
    "name": "Кресло коктейльное Soft",
    "priceFrom": 12000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2140/0.jpg?v=13",
      "/images/catalog/2140/1.jpg?v=13",
      "/images/catalog/2140/2.jpg?v=13"
    ],
    "description": "Кресло коктейльное Soft — кресла салона Valentin от 12 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "kuhnya-venetsiya-2120",
    "name": "Кухня Венеция",
    "priceFrom": 193000,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "кухни",
    "images": [
      "/images/catalog/2120/0.jpg?v=13",
      "/images/catalog/2120/1.jpg?v=13",
      "/images/catalog/2120/2.jpg?v=13"
    ],
    "description": "Кухня Венеция — кухни салона Valentin от 193 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Индивидуальные размеры"
    ]
  },
  {
    "id": "prihozhaya-semela-4937",
    "name": "Прихожая Семела",
    "priceFrom": 141400,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/4937/0.jpg?v=13",
      "/images/catalog/4937/1.jpg?v=13",
      "/images/catalog/4937/2.jpg?v=13"
    ],
    "description": "Прихожая Семела — прихожие салона Valentin от 141 400 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "prihozhaya-s-pufom-2161",
    "name": "Прихожая с пуфом",
    "priceFrom": 68900,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2161/0.jpg?v=13",
      "/images/catalog/2161/1.jpg?v=13",
      "/images/catalog/2161/2.jpg?v=13"
    ],
    "description": "Прихожая с пуфом — прихожие салона Valentin от 68 900 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "prihozhaya-assimetriya-2134",
    "name": "Прихожая Ассиметрия",
    "priceFrom": 49800,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2134/0.jpg?v=13",
      "/images/catalog/2134/1.jpg?v=13",
      "/images/catalog/2134/2.jpg?v=13"
    ],
    "description": "Прихожая Ассиметрия — прихожие салона Valentin от 49 800 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "kreslo-kokteylnoe-2-2144",
    "name": "Кресло коктейльное Lounge",
    "priceFrom": 12000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2144/0.jpg?v=13",
      "/images/catalog/2144/1.jpg?v=13",
      "/images/catalog/2144/2.jpg?v=13"
    ],
    "description": "Кресло коктейльное Lounge — кресла салона Valentin от 12 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "prihozhaya-s-chasami-2156",
    "name": "Прихожая с часами",
    "priceFrom": 73700,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2156/0.jpg?v=13",
      "/images/catalog/2156/1.jpg?v=13",
      "/images/catalog/2156/2.jpg?v=13"
    ],
    "description": "Прихожая с часами — прихожие салона Valentin от 73 700 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "kuhnya-sakura-2118",
    "name": "Кухня Сакура",
    "priceFrom": 160000,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "кухни",
    "images": [
      "/images/catalog/2118/0.jpg?v=13",
      "/images/catalog/2118/1.jpg?v=13",
      "/images/catalog/2118/2.jpg?v=13"
    ],
    "description": "Кухня Сакура — кухни салона Valentin от 160 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Индивидуальные размеры"
    ]
  },
  {
    "id": "banketka-obuvnitsa-3917",
    "name": "Банкетка-обувница",
    "priceFrom": 45600,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/3917/0.jpg?v=13",
      "/images/catalog/3917/1.jpg?v=13",
      "/images/catalog/3917/2.jpg?v=13"
    ],
    "description": "Банкетка-обувница — банкетки салона Valentin от 45 600 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "prihozhaya-venetsiya-s-pufom-2136",
    "name": "Прихожая Венеция с пуфом",
    "priceFrom": 30000,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2136/0.jpg?v=13",
      "/images/catalog/2136/1.jpg?v=13",
      "/images/catalog/2136/2.jpg?v=13"
    ],
    "description": "Прихожая Венеция с пуфом — прихожие салона Valentin от 30 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "prihozhaya-s-pufom-2157",
    "name": "Прихожая с пуфом Compact",
    "priceFrom": 63600,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2157/0.jpg?v=13",
      "/images/catalog/2157/1.jpg?v=13",
      "/images/catalog/2157/2.jpg?v=13"
    ],
    "description": "Прихожая с пуфом Compact — прихожие салона Valentin от 63 600 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "prihozhaya-s-zerkalom-2159",
    "name": "Прихожая с зеркалом",
    "priceFrom": 67600,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2159/0.jpg?v=13",
      "/images/catalog/2159/1.jpg?v=13",
      "/images/catalog/2159/2.jpg?v=13"
    ],
    "description": "Прихожая с зеркалом — прихожие салона Valentin от 67 600 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "obuvintsa-classic-3919",
    "name": "Обувница Classic",
    "priceFrom": 47800,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/3919/0.jpg?v=13",
      "/images/catalog/3919/1.jpg?v=13",
      "/images/catalog/3919/2.jpg?v=13"
    ],
    "description": "Обувница Classic — прихожие салона Valentin от 47 800 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "divan-prestizh-4745",
    "name": "Диван Престиж",
    "priceFrom": 18000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/4745/0.jpg?v=13",
      "/images/catalog/4745/1.jpg?v=13",
      "/images/catalog/4745/2.jpg?v=13"
    ],
    "description": "Диван Престиж — прямые диваны салона Valentin от 18 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-valeo-2152",
    "name": "Диван Valeo",
    "priceFrom": 41000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2152/0.jpg?v=13",
      "/images/catalog/2152/1.jpg?v=13",
      "/images/catalog/2152/2.jpg?v=13"
    ],
    "description": "Диван Valeo — прямые диваны салона Valentin от 41 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-kokteylnaya-dvoyka-2149",
    "name": "Диван Коктейльная двойка",
    "priceFrom": 27500,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2149/0.jpg?v=13",
      "/images/catalog/2149/1.jpg?v=13",
      "/images/catalog/2149/2.jpg?v=13"
    ],
    "description": "Диван Коктейльная двойка — прямые диваны салона Valentin от 27 500 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "zerkalo-nastennoe-3918",
    "name": "Зеркало настенное",
    "priceFrom": 36200,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/3918/0.jpg?v=13",
      "/images/catalog/3918/1.jpg?v=13",
      "/images/catalog/3918/2.jpg?v=13"
    ],
    "description": "Зеркало настенное — зеркала салона Valentin от 36 200 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "puf-classic-2160",
    "name": "Пуф Classic",
    "priceFrom": 34000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2160/0.jpg?v=13",
      "/images/catalog/2160/1.jpg?v=13",
      "/images/catalog/2160/2.jpg?v=13"
    ],
    "description": "Пуф Classic — пуфы салона Valentin от 34 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "divan-prestizh-3920",
    "name": "Диван Престиж Comfort",
    "priceFrom": 22000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/3920/0.jpg?v=13",
      "/images/catalog/3920/1.jpg?v=13",
      "/images/catalog/3920/2.jpg?v=13"
    ],
    "description": "Диван Престиж Comfort — прямые диваны салона Valentin от 22 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "shkaf-platyanoy-2155",
    "name": "Шкаф платяной",
    "priceFrom": 65500,
    "materials": [
      "дуб"
    ],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/2155/0.jpg?v=13",
      "/images/catalog/2155/1.jpg?v=13",
      "/images/catalog/2155/2.jpg?v=13"
    ],
    "description": "Шкаф платяной — распашные шкафы салона Valentin от 65 500 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Для прихожей"
    ]
  },
  {
    "id": "stul-princess-2151",
    "name": "Стул Princess",
    "priceFrom": 8000,
    "materials": [
      "велюр"
    ],
    "inStock": false,
    "category": "диваны",
    "images": [
      "/images/catalog/2151/0.jpg?v=13",
      "/images/catalog/2151/1.jpg?v=13",
      "/images/catalog/2151/2.jpg?v=13"
    ],
    "description": "Стул Princess — стулья салона Valentin от 8 000 ₽. Салон в МЦ «Мебельный город», Белгород.",
    "features": [
      "Мягкая мебель"
    ]
  },
  {
    "id": "prihozhaya-softline-5001",
    "name": "Прихожая Softline",
    "priceFrom": 189000,
    "materials": ["кашемир", "латунь"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5001/0.jpg?v=13",
      "/images/catalog/5001/1.jpg?v=13",
      "/images/catalog/5001/2.jpg?v=13"
    ],
    "description": "Прихожая Softline — прихожие салона Valentin от 189 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "kuhnya-aura-5002",
    "name": "Кухня Аура",
    "priceFrom": 245000,
    "materials": ["дуб", "латунь"],
    "inStock": false,
    "category": "кухни",
    "images": [
      "/images/catalog/5002/0.jpg?v=13",
      "/images/catalog/5002/1.jpg?v=13",
      "/images/catalog/5002/2.jpg?v=13"
    ],
    "description": "Кухня Аура — кухни салона Valentin от 245 000 ₽.",
    "features": ["Индивидуальные размеры", "Под заказ"]
  },
  {
    "id": "shkaf-linea-5003",
    "name": "Шкаф Linea",
    "priceFrom": 98000,
    "materials": ["дуб"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5003/0.jpg?v=13",
      "/images/catalog/5003/1.jpg?v=13",
      "/images/catalog/5003/2.jpg?v=13"
    ],
    "description": "Шкаф Linea — шкафы салона Valentin от 98 000 ₽.",
    "features": ["Для прихожей", "Под заказ"]
  },
  {
    "id": "detskaya-nest-5004",
    "name": "Детская Nest",
    "priceFrom": 165000,
    "materials": ["дуб", "кашемир"],
    "inStock": false,
    "category": "мебель для дома",
    "images": [
      "/images/catalog/5004/0.jpg?v=13",
      "/images/catalog/5004/1.jpg?v=13",
      "/images/catalog/5004/2.jpg?v=13"
    ],
    "description": "Детская Nest — мебель для дома салона Valentin от 165 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "prihozhaya-forma-5005",
    "name": "Прихожая Forma",
    "priceFrom": 142000,
    "materials": ["дуб", "латунь"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5005/0.jpg?v=13",
      "/images/catalog/5005/1.jpg?v=13",
      "/images/catalog/5005/2.jpg?v=13"
    ],
    "description": "Прихожая Forma — прихожие салона Valentin от 142 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "gostinaya-casa-5006",
    "name": "Гостиная Casa",
    "priceFrom": 128000,
    "materials": ["дуб", "кашемир"],
    "inStock": false,
    "category": "мебель для дома",
    "images": [
      "/images/catalog/5006/0.jpg?v=13",
      "/images/catalog/5006/1.jpg?v=13",
      "/images/catalog/5006/2.jpg?v=13"
    ],
    "description": "Гостиная Casa — мебель для дома салона Valentin от 128 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "mebel-atelier-5007",
    "name": "Мебель Atelier",
    "priceFrom": 156000,
    "materials": ["дуб", "латунь"],
    "inStock": false,
    "category": "мебель для дома",
    "images": [
      "/images/catalog/5007/0.jpg?v=13",
      "/images/catalog/5007/1.jpg?v=13",
      "/images/catalog/5007/2.jpg?v=13"
    ],
    "description": "Мебель Atelier — мебель для дома салона Valentin от 156 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "prihozhaya-mirror-grande-5008",
    "name": "Прихожая Mirror Grande",
    "priceFrom": 175000,
    "materials": ["латунь", "кашемир"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5008/0.jpg?v=13",
      "/images/catalog/5008/1.jpg?v=13",
      "/images/catalog/5008/2.jpg?v=13"
    ],
    "description": "Прихожая Mirror Grande — прихожие салона Valentin от 175 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "stenka-domus-5009",
    "name": "Стенка Domus",
    "priceFrom": 198000,
    "materials": ["дуб", "мрамор"],
    "inStock": false,
    "category": "мебель для дома",
    "images": [
      "/images/catalog/5009/0.jpg?v=13",
      "/images/catalog/5009/1.jpg?v=13",
      "/images/catalog/5009/2.jpg?v=13"
    ],
    "description": "Стенка Domus — мебель для дома салона Valentin от 198 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "prihozhaya-vista-5010",
    "name": "Прихожая Vista",
    "priceFrom": 134000,
    "materials": ["дуб", "латунь"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5010/0.jpg?v=13",
      "/images/catalog/5010/1.jpg?v=13",
      "/images/catalog/5010/2.jpg?v=13"
    ],
    "description": "Прихожая Vista — прихожие салона Valentin от 134 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "prihozhaya-capitone-5011",
    "name": "Прихожая Capitonné",
    "priceFrom": 168000,
    "materials": ["кашемир", "латунь"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5011/0.jpg?v=13",
      "/images/catalog/5011/1.jpg?v=13",
      "/images/catalog/5011/2.jpg?v=13"
    ],
    "description": "Прихожая Capitonné — прихожие салона Valentin от 168 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "tv-zona-gallery-5012",
    "name": "ТВ-зона Gallery",
    "priceFrom": 215000,
    "materials": ["дуб", "латунь"],
    "inStock": false,
    "category": "мебель для дома",
    "images": [
      "/images/catalog/5012/0.jpg?v=13",
      "/images/catalog/5012/1.jpg?v=13",
      "/images/catalog/5012/2.jpg?v=13"
    ],
    "description": "ТВ-зона Gallery — мебель для дома салона Valentin от 215 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "prihozhaya-valencia-5013",
    "name": "Прихожая Valencia Classic",
    "priceFrom": 145000,
    "materials": ["латунь", "кашемир"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5013/0.jpg?v=13",
      "/images/catalog/5013/1.jpg?v=13",
      "/images/catalog/5013/2.jpg?v=13"
    ],
    "description": "Прихожая Valencia Classic — прихожие салона Valentin от 145 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "prihozhaya-nordic-oak-5014",
    "name": "Прихожая Nordic Oak",
    "priceFrom": 168000,
    "materials": ["дуб", "кашемир"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5014/0.jpg?v=13",
      "/images/catalog/5014/1.jpg?v=13",
      "/images/catalog/5014/2.jpg?v=13"
    ],
    "description": "Прихожая Nordic Oak — прихожие салона Valentin от 168 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "prihozhaya-emerald-suite-5015",
    "name": "Прихожая Emerald Suite",
    "priceFrom": 189000,
    "materials": ["орех", "кожа"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5015/0.jpg?v=13",
      "/images/catalog/5015/1.jpg?v=13",
      "/images/catalog/5015/2.jpg?v=13"
    ],
    "description": "Прихожая Emerald Suite — прихожие салона Valentin от 189 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "prihozhaya-victoria-5016",
    "name": "Прихожая Victoria",
    "priceFrom": 158000,
    "materials": ["латунь", "кашемир"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5016/0.jpg?v=13",
      "/images/catalog/5016/1.jpg?v=13",
      "/images/catalog/5016/2.jpg?v=13"
    ],
    "description": "Прихожая Victoria — прихожие салона Valentin от 158 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "gostinaya-imperial-5017",
    "name": "Гостиная Imperial Wall",
    "priceFrom": 248000,
    "materials": ["латунь", "кашемир"],
    "inStock": false,
    "category": "мебель для дома",
    "images": [
      "/images/catalog/5017/0.jpg?v=13",
      "/images/catalog/5017/1.jpg?v=13",
      "/images/catalog/5017/2.jpg?v=13"
    ],
    "description": "Гостиная Imperial Wall — мебель для дома салона Valentin от 248 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "shkaf-wenge-5018",
    "name": "Шкаф Wenge Classic",
    "priceFrom": 135000,
    "materials": ["орех"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5018/0.jpg?v=13",
      "/images/catalog/5018/1.jpg?v=13",
      "/images/catalog/5018/2.jpg?v=13"
    ],
    "description": "Шкаф Wenge Classic — шкафы салона Valentin от 135 000 ₽.",
    "features": ["Для прихожей", "Под заказ"]
  },
  {
    "id": "prihozhaya-cream-tuft-5019",
    "name": "Прихожая Cream Tuft",
    "priceFrom": 98000,
    "materials": ["кашемир", "латунь"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5019/0.jpg?v=13",
      "/images/catalog/5019/1.jpg?v=13",
      "/images/catalog/5019/2.jpg?v=13"
    ],
    "description": "Прихожая Cream Tuft — прихожие салона Valentin от 98 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  },
  {
    "id": "prihozhaya-champagne-5020",
    "name": "Прихожая Champagne Elite",
    "priceFrom": 185000,
    "materials": ["латунь", "кашемир"],
    "inStock": false,
    "category": "прихожие",
    "images": [
      "/images/catalog/5020/0.jpg?v=13",
      "/images/catalog/5020/1.jpg?v=13",
      "/images/catalog/5020/2.jpg?v=13"
    ],
    "description": "Прихожая Champagne Elite — прихожие салона Valentin от 185 000 ₽.",
    "features": ["По индивидуальным размерам", "Под заказ"]
  }
];

export const kitchenCollections: KitchenCollection[] = [
  {
    id: "kuhnya-miya-3852",
    name: "Кухни",
    tagline: "Индивидуальные размеры",
    image: "/images/catalog/3852/0.jpg?v=13",
    priceFrom: 120000,
  },
  {
    id: "prihozhaya-classic-7-2133",
    name: "Прихожие",
    tagline: "Под вашу нишу",
    image: "/images/catalog/2133/0.jpg?v=13",
    priceFrom: 249500,
  },
  {
    id: "divan-nord-2131",
    name: "Диваны",
    tagline: "Мягкая группа",
    image: "/images/catalog/2131/0.jpg?v=13",
    priceFrom: 25800,
  },
];

export const siteImages = {
  /** Hero desktop: полный landscape-кадр кухни */
  hero: img("hero-kitchen-fill-2k.jpg"),
  /** Hero mobile: портретный кроп острова, камня и латуни */
  heroMobile: img("hero-kitchen-mobile-2k.jpg"),
  /** До: кухня до установки (выровнено под слайдер) */
  before: img("before-furnishing-v6.jpg"),
  /** После: готовая кухня (выровнено под слайдер) */
  after: img("after-furnishing-v6.jpg"),
};

/** Категории в шапке; товары ищем по `products` */
export const searchSuggestions = [
  { label: "Кухни", query: "кухня", category: "Кухни", cat: "кухни" as const },
  { label: "Прихожие", query: "прихожая", category: "Прихожие", cat: "прихожие" as const },
  { label: "Диваны", query: "диван", category: "Диваны", cat: "диваны" as const },
  {
    label: "Мебель для дома",
    query: "мебель",
    category: "Мебель для дома",
    cat: "мебель для дома" as const,
  },
  { label: "Обувницы", query: "обувниц", category: "Прихожие", cat: "прихожие" as const },
  { label: "Пуфы", query: "пуф", category: "Диваны", cat: "диваны" as const },
];
