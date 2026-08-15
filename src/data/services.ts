import { Locale } from '@/lib/i18n';

export interface ServiceItem {
  slug: string;
  titles: Record<Locale, string>;
  shortDescriptions: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  iconName: string;
  startingPrice: number; // in ILS (₪)
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'car-key-duplication',
    titles: {
      he: 'שכפול מפתחות לרכב',
      en: 'Car Key Duplication',
      es: 'Duplicado de Llaves de Auto',
    },
    shortDescriptions: {
      he: 'שכפול מהיר במקום עם קידוד צ\'יפ ושלט מקורי לכל סוגי הרכבים.',
      en: 'Fast on-site duplication with original chip and remote coding for all makes.',
      es: 'Duplicado rápido en el lugar con chip y control remoto original.',
    },
    descriptions: {
      he: 'שירות שכפול מפתחות מקצועי לרכב עד בית הלקוח. אנו משכפלים מפתחות חכמים (Keyless), מפתחות אימובילייזר, מפתחות קפיציים ושלטי רכב מקוריים עם אחריות מלאה.',
      en: 'Professional mobile car key duplication service at your location. We duplicate keyless smart keys, transponders, flip keys, and original remotes with full warranty.',
      es: 'Servicio profesional móvil de duplicado de llaves a domicilio. Duplicamos llaves inteligentes Keyless, con transponder chip, tipo navaja y controles remotos originales con garantía total.',
    },
    iconName: 'Key',
    startingPrice: 250,
  },
  {
    slug: 'car-lockout-emergency',
    titles: {
      he: 'פריצת רכב ללא נזק 24/7',
      en: 'Emergency Car Lockout 24/7',
      es: 'Apertura de Autos de Emergencia 24/7',
    },
    shortDescriptions: {
      he: 'הגעה מהירה תוך 20-30 דקות ופריצה עדינה ללא שריטות או נזק לרכב.',
      en: 'Fast 20-30 min arrival with damage-free non-destructive entry tools.',
      es: 'Llegada rápida en 20-30 min y apertura limpia sin rayones ni daños.',
    },
    descriptions: {
      he: 'ננעלת מחוץ לרכב כשהמפתח בפנים? מנעולן רכב מוסמך מגיע אליך במהירות ופותח את הרכב בכלים מתקדמים ללא כל נזק לפח, לחלון או למנגנון הנעילה.',
      en: 'Locked out with keys inside? Our certified auto locksmith arrives quickly to unlock your vehicle using specialized tools with zero damage to paint, windows, or locks.',
      es: '¿Te quedaste fuera del auto con las llaves adentro? Un cerrajero certificado llega de inmediato para abrir tu auto con herramientas profesionales sin dañar carrocería, vidrios ni cerraduras.',
    },
    iconName: 'Unlock',
    startingPrice: 200,
  },
  {
    slug: 'all-keys-lost',
    titles: {
      he: 'שחזור מפתח מאובדן מוחלט',
      en: 'All Keys Lost Replacement',
      es: 'Recuperación por Pérdida Total de Llaves',
    },
    shortDescriptions: {
      he: 'ייצור וקידוד מפתח חדש גם אם כל המפתחות אבדו לחלוטין.',
      en: 'Complete on-site key generation and ECU decoding when all keys are lost.',
      es: 'Fabricación y programación de nueva llave incluso si perdiste todas las copias.',
    },
    descriptions: {
      he: 'איבדת את המפתח האחרון? אין צורך לגרור את הרכב למוסך היבואן! אנו מגיעים עד מיקום הרכב, מייצרים מפתח פיזי מאפס ומקודדים אותו ישירות למחשב הרכב (ECU/Immobilizer).',
      en: 'Lost your only key? No need to tow to the dealership! We come directly to your car, cut a new physical key from scratch, and program it directly to the vehicle ECU/Immobilizer.',
      es: '¿Perdiste tu única llave? ¡No necesitas remolcar el auto a la agencia! Vamos a donde esté el vehículo, tallamos la llave física desde cero y la programamos a la computadora del auto (ECU).',
    },
    iconName: 'ShieldAlert',
    startingPrice: 450,
  },
  {
    slug: 'smart-key-programming',
    titles: {
      he: 'קידוד שלטים ומפתחות חכמים',
      en: 'Smart Key & Fob Programming',
      es: 'Programación de Llaves Inteligentes (Keyless)',
    },
    shortDescriptions: {
      he: 'קידוד מפתחות קרבה (Push to Start) ושלטים חכמים לכל שנתוני הרכב.',
      en: 'Programming smart proximity push-button start keys and fobs.',
      es: 'Programación de controles de proximidad (Push to Start) y chips de seguridad.',
    },
    descriptions: {
      he: 'מחשוב וציוד מתקדם לקידוד מפתחות חכמים, כפתורי Start/Stop ושלטי נוחות מקוריים וחליפיים באיכות הגבוהה ביותר.',
      en: 'State-of-the-art diagnostic equipment for programming smart proximity keys, push-to-start fobs, and remote entry systems for all major car brands.',
      es: 'Equipos de diagnóstico avanzados para programar llaves de presencia, botones de encendido start-stop y controles de alarma para todas las marcas.',
    },
    iconName: 'Cpu',
    startingPrice: 350,
  },
  {
    slug: 'ignition-repair',
    titles: {
      he: 'תיקון והחלפת סוויץ\' לרכב',
      en: 'Ignition Switch Repair',
      es: 'Reparación y Cambio de Switch / Encendido',
    },
    shortDescriptions: {
      he: 'תיקון סוויץ\' תקוע, מפתח לא מסתובב או החלפת צילינדר הצתה במקום.',
      en: 'Fixing stuck ignitions, non-turning keys, or replacing ignition cylinders.',
      es: 'Reparación de switch trabado, llave que no gira o cambio de cilindro.',
    },
    descriptions: {
      he: 'המפתח לא מסתובב בסוויץ\'? הסוויץ\' תקוע או נשבר בתוכו מפתח? שירות תיקון ושיפוץ סוויץ\' במקום ללא צורך בהחלפת כל המנעולים ברכב.',
      en: 'Key stuck in ignition or won\'t turn? We repair and rebuild ignition switches on-site without needing to replace all the locks on your car.',
      es: '¿La llave no gira en el switch o se rompió adentro? Reparamos y reconstruimos el sistema de encendido en el lugar sin necesidad de cambiar todas las cerraduras del vehículo.',
    },
    iconName: 'Wrench',
    startingPrice: 300,
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}
