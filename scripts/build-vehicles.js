import fs from 'fs';

const brandTranslations = {
  'שברולט': { en: 'Chevrolet', slug: 'chevrolet' },
  'רנו': { en: 'Renault', slug: 'renault' },
  'ראם': { en: 'RAM', slug: 'ram' },
  'קרייזלר': { en: 'Chrysler', slug: 'chrysler' },
  'קיה': { en: 'Kia', slug: 'kia' },
  'קופרה': { en: 'Cupra', slug: 'cupra' },
  'קדילאק': { en: 'Cadillac', slug: 'cadillac' },
  'צ\'רי': { en: 'Chery', slug: 'chery' },
  'צ\'אנגן': { en: 'Changan', slug: 'changan' },
  'פרארי': { en: 'Ferrari', slug: 'ferrari' },
  'פיג\'ו': { en: 'Peugeot', slug: 'peugeot' },
  'פיאט': { en: 'Fiat', slug: 'fiat' },
  'פורת\'ינג': { en: 'Forthing', slug: 'forthing' },
  'פורשה': { en: 'Porsche', slug: 'porsche' },
  'פורד': { en: 'Ford', slug: 'ford' },
  'פולקסווגן': { en: 'Volkswagen', slug: 'volkswagen' },
  'פולסטאר': { en: 'Polestar', slug: 'polestar' },
  'סקייוול': { en: 'Skywell', slug: 'skywell' },
  'סקודה': { en: 'Skoda', slug: 'skoda' },
  'סמארט': { en: 'Smart', slug: 'smart' },
  'סיטרואן': { en: 'Citroen', slug: 'citroen' },
  'סיאט': { en: 'Seat', slug: 'seat' },
  'סוזוקי': { en: 'Suzuki', slug: 'suzuki' },
  'סובארו': { en: 'Subaru', slug: 'subaru' },
  'סאנגיונג': { en: 'SsangYong', slug: 'ssangyong' },
  'סאיק-MG': { en: 'MG', slug: 'mg' },
  'סאאב': { en: 'Saab', slug: 'saab' },
  'ניסאן': { en: 'Nissan', slug: 'nissan' },
  'ניו': { en: 'NIO', slug: 'nio' },
  'מרצדס': { en: 'Mercedes-Benz', slug: 'mercedes' },
  'מקסוס': { en: 'Maxus', slug: 'maxus' },
  'מיצובישי': { en: 'Mitsubishi', slug: 'mitsubishi' },
  'מיני': { en: 'Mini', slug: 'mini' },
  'מזראטי': { en: 'Maserati', slug: 'maserati' },
  'מאן': { en: 'MAN', slug: 'man' },
  'מאזדה': { en: 'Mazda', slug: 'mazda' },
  'לקסוס': { en: 'Lexus', slug: 'lexus' },
  'לנצ\'יה': { en: 'Lancia', slug: 'lancia' },
  'לנדרובר': { en: 'Land Rover', slug: 'land-rover' },
  'ליפמוטור': { en: 'Leapmotor', slug: 'leapmotor' },
  'לינק אנד קו': { en: 'Lynk & Co', slug: 'lynk-co' },
  'יונדאי': { en: 'Hyundai', slug: 'hyundai' },
  'יגואר': { en: 'Jaguar', slug: 'jaguar' },
  'טסלה': { en: 'Tesla', slug: 'tesla' },
  'טויוטה': { en: 'Toyota', slug: 'toyota' },
  'זיקר': { en: 'Zeekr', slug: 'zeekr' },
  'וולוו': { en: 'Volvo', slug: 'volvo' },
  'וויה': { en: 'Voyah', slug: 'voyah' },
  'הונדה': { en: 'Honda', slug: 'honda' },
  'הונגצ\'י': { en: 'Hongqi', slug: 'hongqi' },
  'האמר': { en: 'Hummer', slug: 'hummer' },
  'דייהטסו': { en: 'Daihatsu', slug: 'daihatsu' },
  'דונגפנג': { en: 'Dongfeng', slug: 'dongfeng' },
  'דודג\'': { en: 'Dodge', slug: 'dodge' },
  'דאצ\'יה': { en: 'Dacia', slug: 'dacia' },
  'גרייט וול': { en: 'Great Wall', slug: 'great-wall' },
  'ג\'נסיס': { en: 'Genesis', slug: 'genesis' },
  'ג\'יפ': { en: 'Jeep', slug: 'jeep' },
  'ג\'ילי': { en: 'Geely', slug: 'geely' },
  'ג\'אקו': { en: 'Jaecoo', slug: 'jaecoo' },
  'בנטלי': { en: 'Bentley', slug: 'bentley' },
  'ביואיק': { en: 'Buick', slug: 'buick' },
  'ב.מ.וו': { en: 'BMW', slug: 'bmw' },
  'אקספנג': { en: 'XPENG', slug: 'xpeng' },
  'אסטון מרטין': { en: 'Aston Martin', slug: 'aston-martin' },
  'אלפין': { en: 'Alpine', slug: 'alpine' },
  'אלפא רומיאו': { en: 'Alfa Romeo', slug: 'alfa-romeo' },
  'איסוזו': { en: 'Isuzu', slug: 'isuzu' },
  'אינפיניטי': { en: 'Infiniti', slug: 'infiniti' },
  'איווקו': { en: 'Iveco', slug: 'iveco' },
  'איווייז': { en: 'Aiways', slug: 'aiways' },
  'אורה': { en: 'ORA', slug: 'ora' },
  'אופל': { en: 'Opel', slug: 'opel' },
  'אווטאר': { en: 'Avatr', slug: 'avatr' },
  'אודי': { en: 'Audi', slug: 'audi' },
  'אבארט': { en: 'Abarth', slug: 'abarth' },
  'WEY': { en: 'WEY', slug: 'wey' },
  'SERES': { en: 'SERES', slug: 'seres' },
  'KGM': { en: 'KGM', slug: 'kgm' },
  'JAC': { en: 'JAC', slug: 'jac' },
  'GAC': { en: 'GAC', slug: 'gac' },
  'EVEASY': { en: 'Eveasy', slug: 'eveasy' },
  'DS': { en: 'DS Automobiles', slug: 'ds' },
  'BYD': { en: 'BYD', slug: 'byd' }
};

const commonModelTranslations = {
  'קורולה': 'corolla',
  'יאריס': 'yaris',
  'יאריס קרוס': 'yaris-cross',
  'ראב 4': 'rav4',
  'ראב4': 'rav4',
  'קאמרי': 'camry',
  'אייגו': 'aygo',
  'אייגו X': 'aygo-x',
  'היילקס': 'hilux',
  'לנד קרוזר': 'land-cruiser',
  'CHR': 'c-hr',
  'פיקנטו': 'picanto',
  'ספורטאז\'': 'sportage',
  'ספורטז\'': 'sportage',
  'נירו': 'niro',
  'נירו פלוס': 'niro-plus',
  'סיד': 'ceed',
  'פרוסיד': 'proceed',
  'אקסיד': 'xceed',
  'ריו': 'rio',
  'סטוניק': 'stonic',
  'סורנטו': 'sorento',
  'קרניבל': 'carnival',
  'EV6': 'ev6',
  'EV9': 'ev9',
  'איוניק': 'ioniq',
  'איוניק 5': 'ioniq-5',
  'איוניק 6': 'ioniq-6',
  'טוסון': 'tucson',
  'קונה': 'kona',
  'אלנטרה': 'elantra',
  'סנטה פה': 'santa-fe',
  'i10': 'i10',
  'i20': 'i20',
  'i30': 'i30',
  'i35': 'i35',
  'באיון': 'bayon',
  'וניו': 'venue',
  'גולף': 'golf',
  'פולו': 'polo',
  'פאסאט': 'passat',
  'טיגואן': 'tiguan',
  'טי קרוס': 't-cross',
  'טי רוק': 't-roc',
  'טוארג': 'touareg',
  'קאדי': 'caddy',
  'אוקטביה': 'octavia',
  'סופרב': 'superb',
  'פאביה': 'fabia',
  'קודיאק': 'kodiaq',
  'קארוק': 'karoq',
  'קאמיק': 'kamiq',
  'סקאלה': 'scala',
  'אניאק': 'enyaq',
  'מאזדה 2': 'mazda-2',
  'מאזדה 3': 'mazda-3',
  'מאזדה 6': 'mazda-6',
  'CX-3': 'cx-3',
  'CX-30': 'cx-30',
  'CX-5': 'cx-5',
  'CX-60': 'cx-60',
  'קשקאי': 'qashqai',
  'ג\'וק': 'juke',
  'מיקרה': 'micra',
  'אקסטרייל': 'x-trail',
  'אאוטלנדר': 'outlander',
  'איביזה': 'ibiza',
  'ארונה': 'arona',
  'לאון': 'leon',
  'אטקה': 'ateca',
  'פורמנטור': 'formentor',
  'אטו 3': 'atto-3',
  'דולפין': 'dolphin',
  'סיל': 'seal',
  'מודל 3': 'model-3',
  'מודל Y': 'model-y',
  'מודל S': 'model-s',
  'מודל X': 'model-x',
};

let imageModelMap = {};
try {
  const content = fs.readFileSync('c:/Users/isroe/dev/newkeycar/src/assets/data/allModelsWithImagesUpdated.js', 'utf8');
  const jsonStr = content.replace(/export const allModelsWithImagesUpdated = /, '').replace(/;\s*$/, '');
  const list = JSON.parse(jsonStr);

  list.forEach(item => {
    if (item.main_image_updated) {
      const filename = item.main_image_updated.split('/').pop().replace(/\.jpg|\.png|\.webp|\.avif/i, '');
      const parts = filename.split('-');
      const model = parts.slice(1, parts.length - 1).join('-') || parts[1];
      const key = `${item.manufacturer_name}__${item.model_name}`;
      if (!imageModelMap[key] && model) {
        imageModelMap[key] = {
          en: model.charAt(0).toUpperCase() + model.slice(1),
          slug: model.toLowerCase(),
          image: item.main_image_updated,
        };
      }
    }
  });
} catch (e) {
  console.warn('Could not read imageModelMap:', e.message);
}

const rawContent = fs.readFileSync('c:/Users/isroe/dev/newkeycar/src/data/vehicleData.js', 'utf8');
const jsonPart = rawContent.replace(/export const vehicleData = /, '').replace(/;\s*$/, '');
const rawData = JSON.parse(jsonPart);

function slugifyLatin(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\/\\]+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

const brandsList = [];

for (const [heBrandName, models] of Object.entries(rawData)) {
  const brandMeta = brandTranslations[heBrandName] || { en: heBrandName, slug: slugifyLatin(heBrandName) || 'brand' };
  
  const modelObjects = [];
  const seenSlugs = new Set();

  for (const m of (models || [])) {
    const key = `${heBrandName}__${m}`;
    const autoMap = imageModelMap[key];
    const dictSlug = commonModelTranslations[m];

    let enName = autoMap?.en || '';
    let slug = dictSlug || autoMap?.slug || '';

    if (!slug) {
      const latinOnly = slugifyLatin(m);
      if (latinOnly) {
        slug = latinOnly;
        enName = enName || m;
      } else {
        slug = slugifyLatin(brandMeta.en) + '-' + (modelObjects.length + 1);
        enName = enName || m;
      }
    }

    if (!enName) {
      enName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }

    let finalSlug = slug;
    let counter = 2;
    while (seenSlugs.has(finalSlug)) {
      finalSlug = `${slug}-${counter}`;
      counter++;
    }
    seenSlugs.add(finalSlug);

    modelObjects.push({
      nameHe: m,
      nameEn: enName,
      slug: finalSlug,
      image: autoMap?.image || `/newKey/${brandMeta.slug}-${finalSlug}-new.jpg`,
    });
  }

  brandsList.push({
    slug: brandMeta.slug,
    names: {
      he: heBrandName,
      en: brandMeta.en,
      es: brandMeta.en,
    },
    popular: ['toyota', 'hyundai', 'kia', 'mazda', 'skoda', 'chevrolet', 'mitsubishi', 'nissan', 'renault', 'byd', 'volkswagen', 'seat', 'suzuki', 'mercedes', 'bmw', 'tesla'].includes(brandMeta.slug),
    models: modelObjects,
  });
}

const headerPart = `import { Locale } from '@/lib/i18n';

export interface VehicleModel {
  nameHe: string;
  nameEn: string;
  slug: string;
  image?: string;
}

export interface VehicleBrand {
  slug: string;
  names: Record<Locale, string>;
  popular: boolean;
  models: VehicleModel[];
}

export const vehicleBrands: VehicleBrand[] = `;

const footerPart = `;

export function getAllBrands(): VehicleBrand[] {
  return vehicleBrands;
}

export function getPopularBrands(): VehicleBrand[] {
  return vehicleBrands.filter((b) => b.popular);
}

function normalizeStr(str: string): string {
  try {
    return decodeURIComponent(str).toLowerCase().trim().replace(/[\\s_\\-]+/g, '');
  } catch {
    return str.toLowerCase().trim().replace(/[\\s_\\-]+/g, '');
  }
}

export function getBrandBySlug(slug: string): VehicleBrand | undefined {
  if (!slug) return undefined;
  const decoded = normalizeStr(slug);
  return vehicleBrands.find((b) => {
    return (
      normalizeStr(b.slug) === decoded ||
      normalizeStr(b.names.en) === decoded ||
      normalizeStr(b.names.he) === decoded
    );
  });
}

export function getModelBySlug(brandSlug: string, modelSlug: string): VehicleModel | undefined {
  if (!brandSlug || !modelSlug) return undefined;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return undefined;

  let decodedRaw = modelSlug;
  try {
    decodedRaw = decodeURIComponent(modelSlug).trim();
  } catch {}

  const normalizedTarget = normalizeStr(modelSlug);

  return brand.models.find((m) => {
    return (
      m.slug.toLowerCase() === decodedRaw.toLowerCase() ||
      m.nameHe.trim() === decodedRaw ||
      m.nameEn.toLowerCase() === decodedRaw.toLowerCase() ||
      normalizeStr(m.slug) === normalizedTarget ||
      normalizeStr(m.nameHe) === normalizedTarget ||
      normalizeStr(m.nameEn) === normalizedTarget
    );
  });
}
`;

fs.writeFileSync('c:/Users/isroe/dev/keys2cars/src/data/vehicles.ts', headerPart + JSON.stringify(brandsList, null, 2) + footerPart, 'utf8');
console.log('Regenerated vehicles.ts with clean formatting.');
