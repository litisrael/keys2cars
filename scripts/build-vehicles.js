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

const rawContent = fs.readFileSync('c:/Users/isroe/dev/newkeycar/src/data/vehicleData.js', 'utf8');
const jsonPart = rawContent.replace(/export const vehicleData = /, '').replace(/;\s*$/, '');
const rawData = JSON.parse(jsonPart);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\/\\]+/g, '-')
    .replace(/[^\w\u0590-\u05FF\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

const brandsList = [];

for (const [heName, models] of Object.entries(rawData)) {
  const meta = brandTranslations[heName] || { en: heName, slug: slugify(heName) };
  const modelObjects = (models || []).map((m) => ({
    nameHe: m,
    nameEn: m,
    slug: slugify(m) || 'model',
  }));

  brandsList.push({
    slug: meta.slug,
    names: {
      he: heName,
      en: meta.en,
      es: meta.en,
    },
    popular: ['toyota', 'hyundai', 'kia', 'mazda', 'skoda', 'chevrolet', 'mitsubishi', 'nissan', 'renault', 'byd', 'volkswagen', 'seat', 'suzuki', 'mercedes', 'bmw', 'tesla'].includes(meta.slug),
    models: modelObjects,
  });
}

const outputCode = `import { Locale } from '@/lib/i18n';

export interface VehicleModel {
  nameHe: string;
  nameEn: string;
  slug: string;
}

export interface VehicleBrand {
  slug: string;
  names: Record<Locale, string>;
  popular: boolean;
  models: VehicleModel[];
}

export const vehicleBrands: VehicleBrand[] = ` + JSON.stringify(brandsList, null, 2) + `;

export function getAllBrands(): VehicleBrand[] {
  return vehicleBrands;
}

export function getPopularBrands(): VehicleBrand[] {
  return vehicleBrands.filter((b) => b.popular);
}

export function getBrandBySlug(slug: string): VehicleBrand | undefined {
  return vehicleBrands.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
}

export function getModelBySlug(brandSlug: string, modelSlug: string): VehicleModel | undefined {
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return undefined;
  return brand.models.find((m) => m.slug.toLowerCase() === modelSlug.toLowerCase());
}
`;

fs.writeFileSync('c:/Users/isroe/dev/keys2cars/src/data/vehicles.ts', outputCode, 'utf8');
console.log('Successfully generated src/data/vehicles.ts with ' + brandsList.length + ' brands.');
