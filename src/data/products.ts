import type { KitchenCollection, Product } from "@/types";

export { vipDeliveryThreshold as FREE_SHIPPING_THRESHOLD } from "@/lib/utils";

const img = (name: string) => `/images/real/${name}`;

/** РўРѕРІР°СЂС‹ СЃР°Р»РѕРЅР° Valentin СЃ mebelgorod.com/shops/valentin (shop_id=10) */
export const products: Product[] = [
  {
    "id": "divan-nord-2131",
    "name": "Р”РёРІР°РЅ РќРѕСЂРґ",
    "priceFrom": 25800,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2131/0.jpg?v=15",
      "/images/catalog/2131/1.jpg?v=15",
      "/images/catalog/2131/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ РќРѕСЂРґ вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 25В 800 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-bar-2137",
    "name": "Р”РёРІР°РЅ Р‘Р°СЂ",
    "priceFrom": 31900,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2137/0.jpg?v=15",
      "/images/catalog/2137/1.jpg?v=15",
      "/images/catalog/2137/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ Р‘Р°СЂ вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 31В 900 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "kuhnya-miya-3852",
    "name": "РљСѓС…РЅСЏ РњРёСЏ",
    "priceFrom": 120000,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/3852/0.jpg?v=15",
      "/images/catalog/3852/1.jpg?v=15",
      "/images/catalog/3852/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РњРёСЏ вЂ” РєСѓС…РѕРЅРЅС‹Рµ РіР°СЂРЅРёС‚СѓСЂС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 120В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹"
    ]
  },
  {
    "id": "divan-edelveys-2141",
    "name": "Р”РёРІР°РЅ Р­РґРµР»СЊРІРµР№СЃ",
    "priceFrom": 37300,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2141/0.jpg?v=15",
      "/images/catalog/2141/1.jpg?v=15",
      "/images/catalog/2141/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ Р­РґРµР»СЊРІРµР№СЃ вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 37В 300 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-yunost-2124",
    "name": "Р”РёРІР°РЅ Р®РЅРѕСЃС‚СЊ",
    "priceFrom": 18000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2124/0.jpg?v=15",
      "/images/catalog/2124/1.jpg?v=15",
      "/images/catalog/2124/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ Р®РЅРѕСЃС‚СЊ вЂ” РґРёРІР°РЅС‹ Рё РєСЂРµСЃР»Р° СЃР°Р»РѕРЅР° Valentin РѕС‚ 18В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "kreslo-sherlok-2150",
    "name": "РљСЂРµСЃР»Рѕ РЁРµСЂР»РѕРє",
    "priceFrom": 19200,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2150/0.jpg?v=15",
      "/images/catalog/2150/1.jpg?v=15",
      "/images/catalog/2150/2.jpg?v=15"
    ],
    "description": "РљСЂРµСЃР»Рѕ РЁРµСЂР»РѕРє вЂ” РєСЂРµСЃР»Р° СЃР°Р»РѕРЅР° Valentin РѕС‚ 19В 200 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-prestizh-2-2147",
    "name": "Р”РёРІР°РЅ РџСЂРµСЃС‚РёР¶ 2",
    "priceFrom": 31900,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2147/0.jpg?v=15",
      "/images/catalog/2147/1.jpg?v=15",
      "/images/catalog/2147/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ РџСЂРµСЃС‚РёР¶ 2 вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 31В 900 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-evrika-malysh-2129",
    "name": "Р”РёРІР°РЅ Р­РІСЂРёРєР°-РјР°Р»С‹С€",
    "priceFrom": 16000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2129/0.jpg?v=15",
      "/images/catalog/2129/1.jpg?v=15",
      "/images/catalog/2129/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ Р­РІСЂРёРєР°-РјР°Р»С‹С€ вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 16В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "prihozhaya-classic-7-2133",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Classic-7",
    "priceFrom": 249500,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2133/0.jpg?v=15",
      "/images/catalog/2133/1.jpg?v=15",
      "/images/catalog/2133/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Classic-7 вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 249В 500 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "divan-rossa-2143",
    "name": "Р”РёРІР°РЅ Р РѕСЃСЃР°",
    "priceFrom": 33300,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2143/0.jpg?v=15",
      "/images/catalog/2143/1.jpg?v=15",
      "/images/catalog/2143/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ Р РѕСЃСЃР° вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 33В 300 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-hilton-2153",
    "name": "Р”РёРІР°РЅ РҐРёР»С‚РѕРЅ",
    "priceFrom": 15200,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2153/0.jpg?v=15",
      "/images/catalog/2153/1.jpg?v=15",
      "/images/catalog/2153/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ РҐРёР»С‚РѕРЅ вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 15В 200 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "stul-bar-2138",
    "name": "РЎС‚СѓР» Р‘Р°СЂ",
    "priceFrom": 8000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2138/0.jpg?v=15",
      "/images/catalog/2138/1.jpg?v=15",
      "/images/catalog/2138/2.jpg?v=15"
    ],
    "description": "РЎС‚СѓР» Р‘Р°СЂ вЂ” СЃС‚СѓР»СЊСЏ СЃР°Р»РѕРЅР° Valentin РѕС‚ 8В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "kuhnya-santorini-4034",
    "name": "РљСѓС…РЅСЏ РЎР°РЅС‚РѕСЂРёРЅРё",
    "priceFrom": 196000,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/4034/0.jpg?v=15",
      "/images/catalog/4034/1.jpg?v=15",
      "/images/catalog/4034/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РЎР°РЅС‚РѕСЂРёРЅРё вЂ” РєСѓС…РѕРЅРЅС‹Рµ РіР°СЂРЅРёС‚СѓСЂС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 196В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹"
    ]
  },
  {
    "id": "kreslo-kokteylnoe-2132",
    "name": "РљСЂРµСЃР»Рѕ РєРѕРєС‚РµР№Р»СЊРЅРѕРµ",
    "priceFrom": 15900,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2132/0.jpg?v=15",
      "/images/catalog/2132/1.jpg?v=15",
      "/images/catalog/2132/2.jpg?v=15"
    ],
    "description": "РљСЂРµСЃР»Рѕ РєРѕРєС‚РµР№Р»СЊРЅРѕРµ вЂ” РєСЂРµСЃР»Р° СЃР°Р»РѕРЅР° Valentin РѕС‚ 15В 900 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "obuvnitsa-classic-2154",
    "name": "РћР±СѓРІРЅРёС†Р° Classic",
    "priceFrom": 31600,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2154/0.jpg?v=15",
      "/images/catalog/2154/1.jpg?v=15",
      "/images/catalog/2154/2.jpg?v=15"
    ],
    "description": "РћР±СѓРІРЅРёС†Р° Classic вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 31В 600 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "prihozhaya-louf-2135",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Р›РѕСѓС„",
    "priceFrom": 59600,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2135/0.jpg?v=15",
      "/images/catalog/2135/1.jpg?v=15",
      "/images/catalog/2135/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Р›РѕСѓС„ вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 59В 600 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "prihozhaya-s-tumboy-i-zerkalom-2162",
    "name": "РџСЂРёС…РѕР¶Р°СЏ СЃ С‚СѓРјР±РѕР№ Рё Р·РµСЂРєР°Р»РѕРј",
    "priceFrom": 99600,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2162/0.jpg?v=15",
      "/images/catalog/2162/1.jpg?v=15",
      "/images/catalog/2162/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ СЃ С‚СѓРјР±РѕР№ Рё Р·РµСЂРєР°Р»РѕРј вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 99В 600 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "kreslo-edelveys-2142",
    "name": "РљСЂРµСЃР»Рѕ Р­РґРµР»СЊРІРµР№СЃ",
    "priceFrom": 23800,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2142/0.jpg?v=15",
      "/images/catalog/2142/1.jpg?v=15",
      "/images/catalog/2142/2.jpg?v=15"
    ],
    "description": "РљСЂРµСЃР»Рѕ Р­РґРµР»СЊРІРµР№СЃ вЂ” РєСЂРµСЃР»Р° СЃР°Р»РѕРЅР° Valentin РѕС‚ 23В 800 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-sherlok-3708",
    "name": "Р”РёРІР°РЅ РЁРµСЂР»РѕРє",
    "priceFrom": 33600,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/3708/0.jpg?v=15",
      "/images/catalog/3708/1.jpg?v=15",
      "/images/catalog/3708/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ РЁРµСЂР»РѕРє вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 33В 600 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-bar-2130",
    "name": "Р”РёРІР°РЅ Р‘Р°СЂ Compact",
    "priceFrom": 16000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2130/0.jpg?v=15",
      "/images/catalog/2130/1.jpg?v=15",
      "/images/catalog/2130/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ Р‘Р°СЂ Compact вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 16В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "kreslo-kokteylnoe-2-2140",
    "name": "РљСЂРµСЃР»Рѕ РєРѕРєС‚РµР№Р»СЊРЅРѕРµ Soft",
    "priceFrom": 12000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2140/0.jpg?v=15",
      "/images/catalog/2140/1.jpg?v=15",
      "/images/catalog/2140/2.jpg?v=15"
    ],
    "description": "РљСЂРµСЃР»Рѕ РєРѕРєС‚РµР№Р»СЊРЅРѕРµ Soft вЂ” РєСЂРµСЃР»Р° СЃР°Р»РѕРЅР° Valentin РѕС‚ 12В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "kuhnya-venetsiya-2120",
    "name": "РљСѓС…РЅСЏ Р’РµРЅРµС†РёСЏ",
    "priceFrom": 193000,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/2120/0.jpg?v=15",
      "/images/catalog/2120/1.jpg?v=15",
      "/images/catalog/2120/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ Р’РµРЅРµС†РёСЏ вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 193В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹"
    ]
  },
  {
    "id": "prihozhaya-semela-4937",
    "name": "РџСЂРёС…РѕР¶Р°СЏ РЎРµРјРµР»Р°",
    "priceFrom": 141400,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/4937/0.jpg?v=15",
      "/images/catalog/4937/1.jpg?v=15",
      "/images/catalog/4937/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ РЎРµРјРµР»Р° вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 141В 400 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "prihozhaya-s-pufom-2161",
    "name": "РџСЂРёС…РѕР¶Р°СЏ СЃ РїСѓС„РѕРј",
    "priceFrom": 68900,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2161/0.jpg?v=15",
      "/images/catalog/2161/1.jpg?v=15",
      "/images/catalog/2161/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ СЃ РїСѓС„РѕРј вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 68В 900 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "prihozhaya-assimetriya-2134",
    "name": "РџСЂРёС…РѕР¶Р°СЏ РђСЃСЃРёРјРµС‚СЂРёСЏ",
    "priceFrom": 49800,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2134/0.jpg?v=15",
      "/images/catalog/2134/1.jpg?v=15",
      "/images/catalog/2134/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ РђСЃСЃРёРјРµС‚СЂРёСЏ вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 49В 800 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "kreslo-kokteylnoe-2-2144",
    "name": "РљСЂРµСЃР»Рѕ РєРѕРєС‚РµР№Р»СЊРЅРѕРµ Lounge",
    "priceFrom": 12000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2144/0.jpg?v=15",
      "/images/catalog/2144/1.jpg?v=15",
      "/images/catalog/2144/2.jpg?v=15"
    ],
    "description": "РљСЂРµСЃР»Рѕ РєРѕРєС‚РµР№Р»СЊРЅРѕРµ Lounge вЂ” РєСЂРµСЃР»Р° СЃР°Р»РѕРЅР° Valentin РѕС‚ 12В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "prihozhaya-s-chasami-2156",
    "name": "РџСЂРёС…РѕР¶Р°СЏ СЃ С‡Р°СЃР°РјРё",
    "priceFrom": 73700,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2156/0.jpg?v=15",
      "/images/catalog/2156/1.jpg?v=15",
      "/images/catalog/2156/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ СЃ С‡Р°СЃР°РјРё вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 73В 700 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "kuhnya-sakura-2118",
    "name": "РљСѓС…РЅСЏ РЎР°РєСѓСЂР°",
    "priceFrom": 160000,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/2118/0.jpg?v=15",
      "/images/catalog/2118/1.jpg?v=15",
      "/images/catalog/2118/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РЎР°РєСѓСЂР° вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 160В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹"
    ]
  },
  {
    "id": "banketka-obuvnitsa-3917",
    "name": "Р‘Р°РЅРєРµС‚РєР°-РѕР±СѓРІРЅРёС†Р°",
    "priceFrom": 45600,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/3917/0.jpg?v=15",
      "/images/catalog/3917/1.jpg?v=15",
      "/images/catalog/3917/2.jpg?v=15"
    ],
    "description": "Р‘Р°РЅРєРµС‚РєР°-РѕР±СѓРІРЅРёС†Р° вЂ” Р±Р°РЅРєРµС‚РєРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 45В 600 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "prihozhaya-venetsiya-s-pufom-2136",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Р’РµРЅРµС†РёСЏ СЃ РїСѓС„РѕРј",
    "priceFrom": 30000,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2136/0.jpg?v=15",
      "/images/catalog/2136/1.jpg?v=15",
      "/images/catalog/2136/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Р’РµРЅРµС†РёСЏ СЃ РїСѓС„РѕРј вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 30В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "prihozhaya-s-pufom-2157",
    "name": "РџСЂРёС…РѕР¶Р°СЏ СЃ РїСѓС„РѕРј Compact",
    "priceFrom": 63600,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2157/0.jpg?v=15",
      "/images/catalog/2157/1.jpg?v=15",
      "/images/catalog/2157/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ СЃ РїСѓС„РѕРј Compact вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 63В 600 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "prihozhaya-s-zerkalom-2159",
    "name": "РџСЂРёС…РѕР¶Р°СЏ СЃ Р·РµСЂРєР°Р»РѕРј",
    "priceFrom": 67600,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2159/0.jpg?v=15",
      "/images/catalog/2159/1.jpg?v=15",
      "/images/catalog/2159/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ СЃ Р·РµСЂРєР°Р»РѕРј вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 67В 600 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "obuvintsa-classic-3919",
    "name": "РћР±СѓРІРЅРёС†Р° Classic",
    "priceFrom": 47800,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/3919/0.jpg?v=15",
      "/images/catalog/3919/1.jpg?v=15",
      "/images/catalog/3919/2.jpg?v=15"
    ],
    "description": "РћР±СѓРІРЅРёС†Р° Classic вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 47В 800 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "divan-prestizh-4745",
    "name": "Р”РёРІР°РЅ РџСЂРµСЃС‚РёР¶",
    "priceFrom": 18000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/4745/0.jpg?v=15",
      "/images/catalog/4745/1.jpg?v=15",
      "/images/catalog/4745/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ РџСЂРµСЃС‚РёР¶ вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 18В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-valeo-2152",
    "name": "Р”РёРІР°РЅ Valeo",
    "priceFrom": 41000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2152/0.jpg?v=15",
      "/images/catalog/2152/1.jpg?v=15",
      "/images/catalog/2152/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ Valeo вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 41В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-kokteylnaya-dvoyka-2149",
    "name": "Р”РёРІР°РЅ РљРѕРєС‚РµР№Р»СЊРЅР°СЏ РґРІРѕР№РєР°",
    "priceFrom": 27500,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2149/0.jpg?v=15",
      "/images/catalog/2149/1.jpg?v=15",
      "/images/catalog/2149/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ РљРѕРєС‚РµР№Р»СЊРЅР°СЏ РґРІРѕР№РєР° вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 27В 500 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "zerkalo-nastennoe-3918",
    "name": "Р—РµСЂРєР°Р»Рѕ РЅР°СЃС‚РµРЅРЅРѕРµ",
    "priceFrom": 36200,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/3918/0.jpg?v=15",
      "/images/catalog/3918/1.jpg?v=15",
      "/images/catalog/3918/2.jpg?v=15"
    ],
    "description": "Р—РµСЂРєР°Р»Рѕ РЅР°СЃС‚РµРЅРЅРѕРµ вЂ” Р·РµСЂРєР°Р»Р° СЃР°Р»РѕРЅР° Valentin РѕС‚ 36В 200 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "puf-classic-2160",
    "name": "РџСѓС„ Classic",
    "priceFrom": 34000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2160/0.jpg?v=15",
      "/images/catalog/2160/1.jpg?v=15",
      "/images/catalog/2160/2.jpg?v=15"
    ],
    "description": "РџСѓС„ Classic вЂ” РїСѓС„С‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 34В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "divan-prestizh-3920",
    "name": "Р”РёРІР°РЅ РџСЂРµСЃС‚РёР¶ Comfort",
    "priceFrom": 22000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/3920/0.jpg?v=15",
      "/images/catalog/3920/1.jpg?v=15",
      "/images/catalog/3920/2.jpg?v=15"
    ],
    "description": "Р”РёРІР°РЅ РџСЂРµСЃС‚РёР¶ Comfort вЂ” РїСЂСЏРјС‹Рµ РґРёРІР°РЅС‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 22В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "shkaf-platyanoy-2155",
    "name": "РЁРєР°С„ РїР»Р°С‚СЏРЅРѕР№",
    "priceFrom": 65500,
    "materials": [
      "РґСѓР±"
    ],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/2155/0.jpg?v=15",
      "/images/catalog/2155/1.jpg?v=15",
      "/images/catalog/2155/2.jpg?v=15"
    ],
    "description": "РЁРєР°С„ РїР»Р°С‚СЏРЅРѕР№ вЂ” СЂР°СЃРїР°С€РЅС‹Рµ С€РєР°С„С‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 65В 500 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "Р”Р»СЏ РїСЂРёС…РѕР¶РµР№"
    ]
  },
  {
    "id": "stul-princess-2151",
    "name": "РЎС‚СѓР» Princess",
    "priceFrom": 8000,
    "materials": [
      "РІРµР»СЋСЂ"
    ],
    "inStock": false,
    "category": "РґРёРІР°РЅС‹",
    "images": [
      "/images/catalog/2151/0.jpg?v=15",
      "/images/catalog/2151/1.jpg?v=15",
      "/images/catalog/2151/2.jpg?v=15"
    ],
    "description": "РЎС‚СѓР» Princess вЂ” СЃС‚СѓР»СЊСЏ СЃР°Р»РѕРЅР° Valentin РѕС‚ 8В 000 в‚Ѕ. РЎР°Р»РѕРЅ РІ РњР¦ В«РњРµР±РµР»СЊРЅС‹Р№ РіРѕСЂРѕРґВ», Р‘РµР»РіРѕСЂРѕРґ.",
    "features": [
      "РњСЏРіРєР°СЏ РјРµР±РµР»СЊ"
    ]
  },
  {
    "id": "prihozhaya-softline-5001",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Softline",
    "priceFrom": 189000,
    "materials": ["РєР°С€РµРјРёСЂ", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5001/0.jpg?v=15",
      "/images/catalog/5001/1.jpg?v=15",
      "/images/catalog/5001/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Softline вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 189В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-aura-5002",
    "name": "РљСѓС…РЅСЏ РђСѓСЂР°",
    "priceFrom": 245000,
    "materials": ["РґСѓР±", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5002/0.jpg?v=15",
      "/images/catalog/5002/1.jpg?v=15",
      "/images/catalog/5002/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РђСѓСЂР° вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 245В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "shkaf-linea-5003",
    "name": "РЁРєР°С„ Linea",
    "priceFrom": 98000,
    "materials": ["РґСѓР±"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5003/0.jpg?v=15",
      "/images/catalog/5003/1.jpg?v=15",
      "/images/catalog/5003/2.jpg?v=15"
    ],
    "description": "РЁРєР°С„ Linea вЂ” С€РєР°С„С‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 98В 000 в‚Ѕ.",
    "features": ["Р”Р»СЏ РїСЂРёС…РѕР¶РµР№", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "detskaya-nest-5004",
    "name": "Р”РµС‚СЃРєР°СЏ Nest",
    "priceFrom": 165000,
    "materials": ["РґСѓР±", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР°",
    "images": [
      "/images/catalog/5004/0.jpg?v=15",
      "/images/catalog/5004/1.jpg?v=15",
      "/images/catalog/5004/2.jpg?v=15"
    ],
    "description": "Р”РµС‚СЃРєР°СЏ Nest вЂ” РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР° СЃР°Р»РѕРЅР° Valentin РѕС‚ 165В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-forma-5005",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Forma",
    "priceFrom": 142000,
    "materials": ["РґСѓР±", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5005/0.jpg?v=15",
      "/images/catalog/5005/1.jpg?v=15",
      "/images/catalog/5005/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Forma вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 142В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "gostinaya-casa-5006",
    "name": "Р“РѕСЃС‚РёРЅР°СЏ Casa",
    "priceFrom": 128000,
    "materials": ["РґСѓР±", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР°",
    "images": [
      "/images/catalog/5006/0.jpg?v=15",
      "/images/catalog/5006/1.jpg?v=15",
      "/images/catalog/5006/2.jpg?v=15"
    ],
    "description": "Р“РѕСЃС‚РёРЅР°СЏ Casa вЂ” РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР° СЃР°Р»РѕРЅР° Valentin РѕС‚ 128В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "mebel-atelier-5007",
    "name": "РњРµР±РµР»СЊ Atelier",
    "priceFrom": 156000,
    "materials": ["РґСѓР±", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР°",
    "images": [
      "/images/catalog/5007/0.jpg?v=15",
      "/images/catalog/5007/1.jpg?v=15",
      "/images/catalog/5007/2.jpg?v=15"
    ],
    "description": "РњРµР±РµР»СЊ Atelier вЂ” РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР° СЃР°Р»РѕРЅР° Valentin РѕС‚ 156В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-mirror-grande-5008",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Mirror Grande",
    "priceFrom": 175000,
    "materials": ["Р»Р°С‚СѓРЅСЊ", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5008/0.jpg?v=15",
      "/images/catalog/5008/1.jpg?v=15",
      "/images/catalog/5008/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Mirror Grande вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 175В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "stenka-domus-5009",
    "name": "РЎС‚РµРЅРєР° Domus",
    "priceFrom": 198000,
    "materials": ["РґСѓР±", "РјСЂР°РјРѕСЂ"],
    "inStock": false,
    "category": "РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР°",
    "images": [
      "/images/catalog/5009/0.jpg?v=15",
      "/images/catalog/5009/1.jpg?v=15",
      "/images/catalog/5009/2.jpg?v=15"
    ],
    "description": "РЎС‚РµРЅРєР° Domus вЂ” РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР° СЃР°Р»РѕРЅР° Valentin РѕС‚ 198В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-vista-5010",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Vista",
    "priceFrom": 134000,
    "materials": ["РґСѓР±", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5010/0.jpg?v=15",
      "/images/catalog/5010/1.jpg?v=15",
      "/images/catalog/5010/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Vista вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 134В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-capitone-5011",
    "name": "РџСЂРёС…РѕР¶Р°СЏ CapitonnГ©",
    "priceFrom": 168000,
    "materials": ["РєР°С€РµРјРёСЂ", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5011/0.jpg?v=15",
      "/images/catalog/5011/1.jpg?v=15",
      "/images/catalog/5011/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ CapitonnГ© вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 168В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "tv-zona-gallery-5012",
    "name": "РўР’-Р·РѕРЅР° Gallery",
    "priceFrom": 215000,
    "materials": ["РґСѓР±", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР°",
    "images": [
      "/images/catalog/5012/0.jpg?v=15",
      "/images/catalog/5012/1.jpg?v=15",
      "/images/catalog/5012/2.jpg?v=15"
    ],
    "description": "РўР’-Р·РѕРЅР° Gallery вЂ” РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР° СЃР°Р»РѕРЅР° Valentin РѕС‚ 215В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-valencia-5013",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Valencia Classic",
    "priceFrom": 145000,
    "materials": ["Р»Р°С‚СѓРЅСЊ", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5013/0.jpg?v=15",
      "/images/catalog/5013/1.jpg?v=15",
      "/images/catalog/5013/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Valencia Classic вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 145В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-nordic-oak-5014",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Nordic Oak",
    "priceFrom": 168000,
    "materials": ["РґСѓР±", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5014/0.jpg?v=15",
      "/images/catalog/5014/1.jpg?v=15",
      "/images/catalog/5014/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Nordic Oak вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 168В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-emerald-suite-5015",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Emerald Suite",
    "priceFrom": 189000,
    "materials": ["РѕСЂРµС…", "РєРѕР¶Р°"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5015/0.jpg?v=15",
      "/images/catalog/5015/1.jpg?v=15",
      "/images/catalog/5015/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Emerald Suite вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 189В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-victoria-5016",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Victoria",
    "priceFrom": 158000,
    "materials": ["Р»Р°С‚СѓРЅСЊ", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5016/0.jpg?v=15",
      "/images/catalog/5016/1.jpg?v=15",
      "/images/catalog/5016/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Victoria вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 158В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "gostinaya-imperial-5017",
    "name": "Р“РѕСЃС‚РёРЅР°СЏ Imperial Wall",
    "priceFrom": 248000,
    "materials": ["Р»Р°С‚СѓРЅСЊ", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР°",
    "images": [
      "/images/catalog/5017/0.jpg?v=15",
      "/images/catalog/5017/1.jpg?v=15",
      "/images/catalog/5017/2.jpg?v=15"
    ],
    "description": "Р“РѕСЃС‚РёРЅР°СЏ Imperial Wall вЂ” РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР° СЃР°Р»РѕРЅР° Valentin РѕС‚ 248В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "shkaf-wenge-5018",
    "name": "РЁРєР°С„ Wenge Classic",
    "priceFrom": 135000,
    "materials": ["РѕСЂРµС…"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5018/0.jpg?v=15",
      "/images/catalog/5018/1.jpg?v=15",
      "/images/catalog/5018/2.jpg?v=15"
    ],
    "description": "РЁРєР°С„ Wenge Classic вЂ” С€РєР°С„С‹ СЃР°Р»РѕРЅР° Valentin РѕС‚ 135В 000 в‚Ѕ.",
    "features": ["Р”Р»СЏ РїСЂРёС…РѕР¶РµР№", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-cream-tuft-5019",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Cream Tuft",
    "priceFrom": 98000,
    "materials": ["РєР°С€РµРјРёСЂ", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5019/0.jpg?v=15",
      "/images/catalog/5019/1.jpg?v=15",
      "/images/catalog/5019/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Cream Tuft вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 98В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "prihozhaya-champagne-5020",
    "name": "РџСЂРёС…РѕР¶Р°СЏ Champagne Elite",
    "priceFrom": 185000,
    "materials": ["Р»Р°С‚СѓРЅСЊ", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РїСЂРёС…РѕР¶РёРµ",
    "images": [
      "/images/catalog/5020/0.jpg?v=15",
      "/images/catalog/5020/1.jpg?v=15",
      "/images/catalog/5020/2.jpg?v=15"
    ],
    "description": "РџСЂРёС…РѕР¶Р°СЏ Champagne Elite вЂ” РїСЂРёС…РѕР¶РёРµ СЃР°Р»РѕРЅР° Valentin РѕС‚ 185В 000 в‚Ѕ.",
    "features": ["РџРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рј СЂР°Р·РјРµСЂР°Рј", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-oliviya-5021",
    "name": "РљСѓС…РЅСЏ РћР»РёРІРёСЏ",
    "priceFrom": 268000,
    "materials": ["РґСѓР±", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5021/0.jpg?v=15",
      "/images/catalog/5021/1.jpg?v=15",
      "/images/catalog/5021/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РћР»РёРІРёСЏ вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 268В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-milana-5022",
    "name": "РљСѓС…РЅСЏ РњРёР»Р°РЅР°",
    "priceFrom": 198000,
    "materials": ["РєР°С€РµРјРёСЂ", "РґСѓР±"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5022/0.jpg?v=15",
      "/images/catalog/5022/1.jpg?v=15",
      "/images/catalog/5022/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РњРёР»Р°РЅР° вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 198В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-umbra-5023",
    "name": "РљСѓС…РЅСЏ РЈРјР±СЂР°",
    "priceFrom": 255000,
    "materials": ["РґСѓР±", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5023/0.jpg?v=15",
      "/images/catalog/5023/1.jpg?v=15",
      "/images/catalog/5023/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РЈРјР±СЂР° вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 255В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-nuage-5024",
    "name": "РљСѓС…РЅСЏ Nuage",
    "priceFrom": 232000,
    "materials": ["РґСѓР±", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5024/0.jpg?v=15",
      "/images/catalog/5024/1.jpg?v=15",
      "/images/catalog/5024/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ Nuage вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 232В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-avrora-5025",
    "name": "РљСѓС…РЅСЏ РђРІСЂРѕСЂР°",
    "priceFrom": 278000,
    "materials": ["РјСЂР°РјРѕСЂ", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5025/0.jpg?v=15",
      "/images/catalog/5025/1.jpg?v=15",
      "/images/catalog/5025/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РђРІСЂРѕСЂР° вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 278В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-amber-5026",
    "name": "РљСѓС…РЅСЏ РђРјР±РµСЂ",
    "priceFrom": 215000,
    "materials": ["РґСѓР±", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5026/0.jpg?v=15",
      "/images/catalog/5026/1.jpg?v=15",
      "/images/catalog/5026/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РђРјР±РµСЂ вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 215В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-oliva-5027",
    "name": "РљСѓС…РЅСЏ РћР»РёРІР°",
    "priceFrom": 248000,
    "materials": ["РґСѓР±", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5027/0.jpg?v=15",
      "/images/catalog/5027/1.jpg?v=15",
      "/images/catalog/5027/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РћР»РёРІР° вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 248В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-shampan-5028",
    "name": "РљСѓС…РЅСЏ РЁР°РјРїР°РЅСЊ",
    "priceFrom": 285000,
    "materials": ["РјСЂР°РјРѕСЂ", "Р»Р°С‚СѓРЅСЊ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5028/0.jpg?v=15",
      "/images/catalog/5028/1.jpg?v=15",
      "/images/catalog/5028/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РЁР°РјРїР°РЅСЊ вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 285В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-laguna-5029",
    "name": "РљСѓС…РЅСЏ Р›Р°РіСѓРЅР°",
    "priceFrom": 262000,
    "materials": ["РґСѓР±", "РјСЂР°РјРѕСЂ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5029/0.jpg?v=15",
      "/images/catalog/5029/1.jpg?v=15",
      "/images/catalog/5029/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ Р›Р°РіСѓРЅР° вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 262В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-etual-5030",
    "name": "РљСѓС…РЅСЏ Р­С‚СѓР°Р»СЊ",
    "priceFrom": 205000,
    "materials": ["РґСѓР±", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5030/0.jpg?v=15",
      "/images/catalog/5030/1.jpg?v=15",
      "/images/catalog/5030/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ Р­С‚СѓР°Р»СЊ вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 205В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-versal-5031",
    "name": "РљСѓС…РЅСЏ Р’РµСЂСЃР°Р»СЊ",
    "priceFrom": 295000,
    "materials": ["РєР°С€РµРјРёСЂ", "РјСЂР°РјРѕСЂ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5031/0.jpg?v=15",
      "/images/catalog/5031/1.jpg?v=15",
      "/images/catalog/5031/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ Р’РµСЂСЃР°Р»СЊ вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 295В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-kontrast-5032",
    "name": "РљСѓС…РЅСЏ РљРѕРЅС‚СЂР°СЃС‚",
    "priceFrom": 238000,
    "materials": ["РґСѓР±", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5032/0.jpg?v=15",
      "/images/catalog/5032/1.jpg?v=15",
      "/images/catalog/5032/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РљРѕРЅС‚СЂР°СЃС‚ вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 238В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-provans-5033",
    "name": "РљСѓС…РЅСЏ РџСЂРѕРІР°РЅСЃ",
    "priceFrom": 188000,
    "materials": ["РєР°С€РµРјРёСЂ", "РґСѓР±"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5033/0.jpg?v=15",
      "/images/catalog/5033/1.jpg?v=15",
      "/images/catalog/5033/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ РџСЂРѕРІР°РЅСЃ вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 188В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  },
  {
    "id": "kuhnya-belveder-5034",
    "name": "РљСѓС…РЅСЏ Р‘РµР»СЊРІРµРґРµСЂ",
    "priceFrom": 272000,
    "materials": ["Р»Р°С‚СѓРЅСЊ", "РєР°С€РµРјРёСЂ"],
    "inStock": false,
    "category": "РєСѓС…РЅРё",
    "images": [
      "/images/catalog/5034/0.jpg?v=15",
      "/images/catalog/5034/1.jpg?v=15",
      "/images/catalog/5034/2.jpg?v=15"
    ],
    "description": "РљСѓС…РЅСЏ Р‘РµР»СЊРІРµРґРµСЂ вЂ” РєСѓС…РЅРё СЃР°Р»РѕРЅР° Valentin РѕС‚ 272В 000 в‚Ѕ.",
    "features": ["РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹", "РџРѕРґ Р·Р°РєР°Р·"]
  }
];

export const kitchenCollections: KitchenCollection[] = [
  {
    id: "kuhnya-miya-3852",
    name: "РљСѓС…РЅРё",
    tagline: "РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ СЂР°Р·РјРµСЂС‹",
    image: "/images/catalog/3852/0.jpg?v=15",
    priceFrom: 120000,
  },
  {
    id: "prihozhaya-classic-7-2133",
    name: "РџСЂРёС…РѕР¶РёРµ",
    tagline: "РџРѕРґ РІР°С€Сѓ РЅРёС€Сѓ",
    image: "/images/catalog/2133/0.jpg?v=15",
    priceFrom: 249500,
  },
  {
    id: "divan-nord-2131",
    name: "Р”РёРІР°РЅС‹",
    tagline: "РњСЏРіРєР°СЏ РіСЂСѓРїРїР°",
    image: "/images/catalog/2131/0.jpg?v=15",
    priceFrom: 25800,
  },
];

export const siteImages = {
  /** Hero desktop: РїРѕР»РЅС‹Р№ landscape-РєР°РґСЂ РєСѓС…РЅРё */
  hero: img("hero-kitchen-fill-2k.jpg"),
  /** Hero mobile: РїРѕСЂС‚СЂРµС‚РЅС‹Р№ РєСЂРѕРї РѕСЃС‚СЂРѕРІР°, РєР°РјРЅСЏ Рё Р»Р°С‚СѓРЅРё */
  heroMobile: img("hero-kitchen-mobile-2k.jpg"),
  /** Р”Рѕ: РєСѓС…РЅСЏ РґРѕ СѓСЃС‚Р°РЅРѕРІРєРё (РІС‹СЂРѕРІРЅРµРЅРѕ РїРѕРґ СЃР»Р°Р№РґРµСЂ) */
  before: img("before-furnishing-v6.jpg"),
  /** РџРѕСЃР»Рµ: РіРѕС‚РѕРІР°СЏ РєСѓС…РЅСЏ (РІС‹СЂРѕРІРЅРµРЅРѕ РїРѕРґ СЃР»Р°Р№РґРµСЂ) */
  after: img("after-furnishing-v6.jpg"),
};

/** РљР°С‚РµРіРѕСЂРёРё РІ С€Р°РїРєРµ; С‚РѕРІР°СЂС‹ РёС‰РµРј РїРѕ `products` */
export const searchSuggestions = [
  { label: "РљСѓС…РЅРё", query: "РєСѓС…РЅСЏ", category: "РљСѓС…РЅРё", cat: "РєСѓС…РЅРё" as const },
  { label: "РџСЂРёС…РѕР¶РёРµ", query: "РїСЂРёС…РѕР¶Р°СЏ", category: "РџСЂРёС…РѕР¶РёРµ", cat: "РїСЂРёС…РѕР¶РёРµ" as const },
  { label: "Р”РёРІР°РЅС‹", query: "РґРёРІР°РЅ", category: "Р”РёРІР°РЅС‹", cat: "РґРёРІР°РЅС‹" as const },
  {
    label: "РњРµР±РµР»СЊ РґР»СЏ РґРѕРјР°",
    query: "РјРµР±РµР»СЊ",
    category: "РњРµР±РµР»СЊ РґР»СЏ РґРѕРјР°",
    cat: "РјРµР±РµР»СЊ РґР»СЏ РґРѕРјР°" as const,
  },
  { label: "РћР±СѓРІРЅРёС†С‹", query: "РѕР±СѓРІРЅРёС†", category: "РџСЂРёС…РѕР¶РёРµ", cat: "РїСЂРёС…РѕР¶РёРµ" as const },
  { label: "РџСѓС„С‹", query: "РїСѓС„", category: "Р”РёРІР°РЅС‹", cat: "РґРёРІР°РЅС‹" as const },
];
