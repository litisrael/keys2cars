import { Locale } from '@/lib/i18n';

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

export const vehicleBrands: VehicleBrand[] = [
  {
    "slug": "chevrolet",
    "names": {
      "he": "שברולט",
      "en": "Chevrolet",
      "es": "Chevrolet"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "אפיקה",
        "nameEn": "Epica",
        "slug": "epica",
        "image": "/newKey/chevrolet-epica-2007.jpg"
      },
      {
        "nameHe": "טראוורס",
        "nameEn": "Traverse",
        "slug": "traverse",
        "image": "/newKey/chevrolet-traverse-new.jpg"
      },
      {
        "nameHe": "ויואנט",
        "nameEn": "Vivant",
        "slug": "vivant",
        "image": "/newKey/chevrolet-vivant-2004.jpg"
      },
      {
        "nameHe": "מאליבו",
        "nameEn": "Malibu",
        "slug": "malibu",
        "image": "/newKey/chevrolet-malibu-new.jpg"
      },
      {
        "nameHe": "אפלנדר",
        "nameEn": "Uplander",
        "slug": "uplander",
        "image": "/newKey/chevrolet-uplander-2005.jpg"
      },
      {
        "nameHe": "טריילבלייזר",
        "nameEn": "Trailblazer",
        "slug": "trailblazer",
        "image": "/newKey/chevrolet-trailblazer-2004.jpg"
      },
      {
        "nameHe": "סילברדו",
        "nameEn": "Silverado",
        "slug": "silverado",
        "image": "/newKey/chevrolet-silverado-new.jpg"
      },
      {
        "nameHe": "קרוז",
        "nameEn": "Cruze",
        "slug": "cruze",
        "image": "/newKey/chevrolet-cruze-2009.jpg"
      },
      {
        "nameHe": "קפטיבה",
        "nameEn": "Captiva",
        "slug": "captiva",
        "image": "/newKey/chevrolet-captiva-2007.jpg"
      },
      {
        "nameHe": "אבאו 5",
        "nameEn": "Aveo5",
        "slug": "aveo5",
        "image": "/newKey/chevrolet-aveo5-2004.jpg"
      },
      {
        "nameHe": "אבאו סדאן",
        "nameEn": "Aveo-sedan",
        "slug": "aveo-sedan",
        "image": "/newKey/chevrolet-aveo-sedan-2004.jpg"
      },
      {
        "nameHe": "אופטרה",
        "nameEn": "Optra",
        "slug": "optra",
        "image": "/newKey/chevrolet-optra-2004.jpg"
      },
      {
        "nameHe": "ספארק",
        "nameEn": "Spark",
        "slug": "spark",
        "image": "/newKey/chevrolet-spark-2011.jpg"
      },
      {
        "nameHe": "סוניק",
        "nameEn": "Sonic",
        "slug": "sonic",
        "image": "/newKey/chevrolet-sonic-2011.jpg"
      },
      {
        "nameHe": "סוניק סדאן",
        "nameEn": "Sonic-sedan",
        "slug": "sonic-sedan",
        "image": "/newKey/chevrolet-sonic-sedan-2011.jpg"
      },
      {
        "nameHe": "אורלנדו",
        "nameEn": "Orlando",
        "slug": "orlando",
        "image": "/newKey/chevrolet-orlando-2012.jpg"
      },
      {
        "nameHe": "קפטיבה ספורט",
        "nameEn": "Captiva-sport",
        "slug": "captiva-sport",
        "image": "/newKey/chevrolet-captiva-sport-2012.jpg"
      },
      {
        "nameHe": "טראקס",
        "nameEn": "Trax",
        "slug": "trax",
        "image": "/newKey/chevrolet-trax-new.jpg"
      },
      {
        "nameHe": "סוואנה",
        "nameEn": "Savana",
        "slug": "savana",
        "image": "/newKey/chevrolet-savana-new.jpg"
      },
      {
        "nameHe": "קרוז האצ'בק",
        "nameEn": "Cruze-hatchback",
        "slug": "cruze-hatchback",
        "image": "/newKey/chevrolet-cruze-hatchback-2013.jpg"
      },
      {
        "nameHe": "קרוז סטיישן",
        "nameEn": "Cruze-station",
        "slug": "cruze-station",
        "image": "/newKey/chevrolet-cruze-station-2013.jpg"
      },
      {
        "nameHe": "אימפלה",
        "nameEn": "Impala",
        "slug": "impala",
        "image": "/newKey/chevrolet-impala-2013.jpg"
      },
      {
        "nameHe": "אקווינוקס",
        "nameEn": "Equinox",
        "slug": "equinox",
        "image": "/newKey/chevrolet-equinox-2016.jpg"
      },
      {
        "nameHe": "קאמרו",
        "nameEn": "Camaro",
        "slug": "camaro",
        "image": "/newKey/chevrolet-camaro-2017.jpg"
      },
      {
        "nameHe": "קאמרו קבריולה",
        "nameEn": "Camaro-cabriolet",
        "slug": "camaro-cabriolet",
        "image": "/newKey/chevrolet-camaro-cabriolet-2017.jpg"
      },
      {
        "nameHe": "בלייזר",
        "nameEn": "Blazer",
        "slug": "blazer",
        "image": "/newKey/chevrolet-blazer-2019.jpg"
      },
      {
        "nameHe": "קורבט",
        "nameEn": "Corvette",
        "slug": "corvette",
        "image": "/newKey/chevrolet-corvette-new.jpg"
      },
      {
        "nameHe": "קולורדו",
        "nameEn": "Colorado",
        "slug": "colorado",
        "image": "/newKey/chevrolet-colorado-new.jpg"
      },
      {
        "nameHe": "סילברדו EV",
        "nameEn": "Silverado-ev",
        "slug": "silverado-ev",
        "image": "/newKey/chevrolet-silverado-ev-new.jpg"
      },
      {
        "nameHe": "טאהו",
        "nameEn": "Tahoe",
        "slug": "tahoe",
        "image": "/newKey/chevrolet-tahoe-new.jpg"
      }
    ]
  },
  {
    "slug": "renault",
    "names": {
      "he": "רנו",
      "en": "Renault",
      "es": "Renault"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "מגאן ספורט",
        "nameEn": "Megane-sport",
        "slug": "megane-sport",
        "image": "/newKey/renault-megane-sport-2008.jpg"
      },
      {
        "nameHe": "קליאו",
        "nameEn": "Clio",
        "slug": "clio",
        "image": "/newKey/renault-clio-new.jpg"
      },
      {
        "nameHe": "מגאן",
        "nameEn": "Megane",
        "slug": "megane",
        "image": "/newKey/renault-megane-2004.jpg"
      },
      {
        "nameHe": "לגונה",
        "nameEn": "Laguna",
        "slug": "laguna",
        "image": "/newKey/renault-laguna-2005.jpg"
      },
      {
        "nameHe": "קנגו",
        "nameEn": "Kangoo",
        "slug": "kangoo",
        "image": "/newKey/renault-kangoo-1998.jpg"
      },
      {
        "nameHe": "פלואנס",
        "nameEn": "Fluence",
        "slug": "fluence",
        "image": "/newKey/renault-fluence-2009.jpg"
      },
      {
        "nameHe": "קולאוס",
        "nameEn": "Koleos",
        "slug": "koleos",
        "image": "/newKey/renault-koleos-2009.jpg"
      },
      {
        "nameHe": "קליאו ספורט",
        "nameEn": "Clio-sport-rs",
        "slug": "clio-sport-rs",
        "image": "/newKey/renault-clio-sport-rs-2008.jpg"
      },
      {
        "nameHe": "לוגאן MCV",
        "nameEn": "לוגאן MCV",
        "slug": "mcv",
        "image": "/newKey/renault-mcv-new.jpg"
      },
      {
        "nameHe": "סימבול",
        "nameEn": "Symbol",
        "slug": "symbol",
        "image": "/newKey/renault-symbol-2009.jpg"
      },
      {
        "nameHe": "מגאן פלואנס",
        "nameEn": "Megane-fluence",
        "slug": "megane-fluence",
        "image": "/newKey/renault-megane-fluence-2009.jpg"
      },
      {
        "nameHe": "גרנד סניק",
        "nameEn": "Grand-scenic",
        "slug": "grand-scenic",
        "image": "/newKey/renault-grand-scenic-2010.jpg"
      },
      {
        "nameHe": "סניק",
        "nameEn": "Scenic",
        "slug": "scenic",
        "image": "/newKey/renault-scenic-2004.jpg"
      },
      {
        "nameHe": "מגאן קופה",
        "nameEn": "Megane-coupe",
        "slug": "megane-coupe",
        "image": "/newKey/renault-megane-coupe-2011.jpg"
      },
      {
        "nameHe": "פלואנס החשמלית",
        "nameEn": "Fluence-electric",
        "slug": "fluence-electric",
        "image": "/newKey/renault-fluence-electric-2011.jpg"
      },
      {
        "nameHe": "קפצ'ור",
        "nameEn": "Captur",
        "slug": "captur",
        "image": "/newKey/renault-captur-new.jpg"
      },
      {
        "nameHe": "מאסטר",
        "nameEn": "Master",
        "slug": "master",
        "image": "/newKey/renault-master-new.jpg"
      },
      {
        "nameHe": "מגאן סטיישן",
        "nameEn": "Megane-station",
        "slug": "megane-station",
        "image": "/newKey/renault-megane-station-2013.jpg"
      },
      {
        "nameHe": "לאטיטוד",
        "nameEn": "Latitude",
        "slug": "latitude",
        "image": "/newKey/renault-latitude-2013.jpg"
      },
      {
        "nameHe": "טראפיק",
        "nameEn": "Trafic",
        "slug": "trafic",
        "image": "/newKey/renault-trafic-new.jpg"
      },
      {
        "nameHe": "קליאו סטיישן",
        "nameEn": "Clio-station",
        "slug": "clio-station",
        "image": "/newKey/renault-clio-station-2014.jpg"
      },
      {
        "nameHe": "קדג'אר",
        "nameEn": "Kadjar",
        "slug": "kadjar",
        "image": "/newKey/renault-kadjar-2016.jpg"
      },
      {
        "nameHe": "זואי",
        "nameEn": "Zoe",
        "slug": "zoe",
        "image": "/newKey/renault-zoe-2017.jpg"
      },
      {
        "nameHe": "טווינגו",
        "nameEn": "Twingo",
        "slug": "twingo",
        "image": "/newKey/renault-twingo-2017.jpg"
      },
      {
        "nameHe": "גרנד קופה",
        "nameEn": "Grand-coupe",
        "slug": "grand-coupe",
        "image": "/newKey/renault-grand-coupe-2017.jpg"
      },
      {
        "nameHe": "ארקנה",
        "nameEn": "Arkana",
        "slug": "arkana",
        "image": "/newKey/renault-arkana-new.jpg"
      },
      {
        "nameHe": "אוסטרל",
        "nameEn": "Austral",
        "slug": "austral",
        "image": "/newKey/renault-austral-new.jpg"
      }
    ]
  },
  {
    "slug": "ram",
    "names": {
      "he": "ראם",
      "en": "RAM",
      "es": "RAM"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "2500",
        "nameEn": "2500",
        "slug": "2500",
        "image": "/newKey/ram-2500-new.jpg"
      },
      {
        "nameHe": "3500",
        "nameEn": "3500",
        "slug": "3500",
        "image": "/newKey/ram-3500-new.jpg"
      }
    ]
  },
  {
    "slug": "chrysler",
    "names": {
      "he": "קרייזלר",
      "en": "Chrysler",
      "es": "Chrysler"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "PT קרוזר",
        "nameEn": "Pt-cruiser",
        "slug": "pt-cruiser",
        "image": "/newKey/chrysler-pt-cruiser-2001.jpg"
      },
      {
        "nameHe": "300C",
        "nameEn": "300c",
        "slug": "300c",
        "image": "/newKey/chrysler-300c-2005.jpg"
      },
      {
        "nameHe": "וויאג'ר",
        "nameEn": "Voyager",
        "slug": "voyager",
        "image": "/newKey/chrysler-voyager-2001.jpg"
      },
      {
        "nameHe": "קרוספייר",
        "nameEn": "Crossfire",
        "slug": "crossfire",
        "image": "/newKey/chrysler-crossfire-2005.jpg"
      },
      {
        "nameHe": "סברינג",
        "nameEn": "Sebring",
        "slug": "sebring",
        "image": "/newKey/chrysler-sebring-2008.jpg"
      },
      {
        "nameHe": "גרנד וויאג'ר",
        "nameEn": "Grand-voyager",
        "slug": "grand-voyager",
        "image": "/newKey/chrysler-grand-voyager-2008.jpg"
      },
      {
        "nameHe": "פסיפיקה",
        "nameEn": "Pacifica",
        "slug": "pacifica",
        "image": "/newKey/chrysler-pacifica-2018.jpg"
      }
    ]
  },
  {
    "slug": "kia",
    "names": {
      "he": "קיה",
      "en": "Kia",
      "es": "Kia"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "סראטו",
        "nameEn": "Cerato",
        "slug": "cerato",
        "image": "/newKey/kia-cerato-2005.jpg"
      },
      {
        "nameHe": "מג'נטיס",
        "nameEn": "Magentis",
        "slug": "magentis",
        "image": "/newKey/kia-magentis-2006.jpg"
      },
      {
        "nameHe": "סורנטו",
        "nameEn": "Sorento",
        "slug": "sorento",
        "image": "/newKey/kia-sorento-2003.jpg"
      },
      {
        "nameHe": "ספורטז'",
        "nameEn": "Sportage",
        "slug": "sportage",
        "image": "/newKey/kia-sportage-2008.jpg"
      },
      {
        "nameHe": "סיד סטיישן SW",
        "nameEn": "Ceed-sw",
        "slug": "ceed-sw",
        "image": "/newKey/kia-ceed-sw-new.jpg"
      },
      {
        "nameHe": "קרניבל",
        "nameEn": "Carnival",
        "slug": "carnival",
        "image": "/newKey/kia-carnival-1999.jpg"
      },
      {
        "nameHe": "פורטה",
        "nameEn": "Forte",
        "slug": "forte",
        "image": "/newKey/kia-forte-2009.jpg"
      },
      {
        "nameHe": "סיד",
        "nameEn": "Ceed",
        "slug": "ceed",
        "image": "/newKey/kia-ceed-2008.jpg"
      },
      {
        "nameHe": "פרוסיד",
        "nameEn": "Proceed",
        "slug": "proceed",
        "image": "/newKey/kia-proceed-2008.jpg"
      },
      {
        "nameHe": "ריו",
        "nameEn": "Rio",
        "slug": "rio",
        "image": "/newKey/kia-rio-2006.jpg"
      },
      {
        "nameHe": "קארנס",
        "nameEn": "Carens",
        "slug": "carens",
        "image": "/newKey/kia-carens-2007.jpg"
      },
      {
        "nameHe": "פיקנטו",
        "nameEn": "Picanto",
        "slug": "picanto",
        "image": "/newKey/kia-picanto-new.jpg"
      },
      {
        "nameHe": "סול",
        "nameEn": "Soul",
        "slug": "soul",
        "image": "/newKey/kia-soul-2011.jpg"
      },
      {
        "nameHe": "אופטימה",
        "nameEn": "Optima",
        "slug": "optima",
        "image": "/newKey/kia-optima-2012.jpg"
      },
      {
        "nameHe": "נירו",
        "nameEn": "Niro",
        "slug": "niro",
        "image": "/newKey/kia-niro-new.jpg"
      },
      {
        "nameHe": "סטוניק",
        "nameEn": "Stonic",
        "slug": "stonic",
        "image": "/newKey/kia-stonic-new.jpg"
      },
      {
        "nameHe": "סטינגר",
        "nameEn": "Stinger",
        "slug": "stinger",
        "image": "/newKey/kia-stinger-2018.jpg"
      },
      {
        "nameHe": "סלטוס",
        "nameEn": "Seltos",
        "slug": "seltos",
        "image": "/newKey/kia-seltos-new.jpg"
      },
      {
        "nameHe": "אקסיד",
        "nameEn": "Xceed",
        "slug": "xceed",
        "image": "/newKey/kia-xceed-2020.jpg"
      },
      {
        "nameHe": "K2500",
        "nameEn": "K2500",
        "slug": "k2500",
        "image": "/newKey/kia-k2500-2020.jpg"
      },
      {
        "nameHe": "נירו פלוס",
        "nameEn": "Niro-plus",
        "slug": "niro-plus",
        "image": "/newKey/kia-niro-plus-new.jpg"
      },
      {
        "nameHe": "EV6",
        "nameEn": "Ev6",
        "slug": "ev6",
        "image": "/newKey/kia-ev6-new.jpg"
      },
      {
        "nameHe": "EV9",
        "nameEn": "Ev9",
        "slug": "ev9",
        "image": "/newKey/kia-ev9-new.jpg"
      }
    ]
  },
  {
    "slug": "cupra",
    "names": {
      "he": "קופרה",
      "en": "Cupra",
      "es": "Cupra"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "אטקה",
        "nameEn": "Ateca",
        "slug": "ateca",
        "image": "/newKey/cupra-ateca-2020.jpg"
      },
      {
        "nameHe": "לאון",
        "nameEn": "Leon",
        "slug": "leon",
        "image": "/newKey/cupra-leon-new.jpg"
      },
      {
        "nameHe": "פורמנטור",
        "nameEn": "Formentor",
        "slug": "formentor",
        "image": "/newKey/cupra-formentor-new.jpg"
      },
      {
        "nameHe": "טווסקאן",
        "nameEn": "Tavascan",
        "slug": "tavascan",
        "image": "/newKey/cupra-tavascan-new.jpg"
      }
    ]
  },
  {
    "slug": "cadillac",
    "names": {
      "he": "קדילאק",
      "en": "Cadillac",
      "es": "Cadillac"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "STS",
        "nameEn": "Sts",
        "slug": "sts",
        "image": "/newKey/cadillac-sts-2005.jpg"
      },
      {
        "nameHe": "SRX",
        "nameEn": "Srx",
        "slug": "srx",
        "image": "/newKey/cadillac-srx-2010.jpg"
      },
      {
        "nameHe": "CTS",
        "nameEn": "Cts",
        "slug": "cts",
        "image": "/newKey/cadillac-cts-2008.jpg"
      },
      {
        "nameHe": "CTS-V",
        "nameEn": "Cts-v",
        "slug": "cts-v",
        "image": "/newKey/cadillac-cts-v-2010.jpg"
      },
      {
        "nameHe": "CTS קופה",
        "nameEn": "Cts-coupe",
        "slug": "cts-coupe",
        "image": "/newKey/cadillac-cts-coupe-2011.jpg"
      },
      {
        "nameHe": "CTS-V קופה",
        "nameEn": "Cts-v-coupe",
        "slug": "cts-v-coupe",
        "image": "/newKey/cadillac-cts-v-coupe-2011.jpg"
      },
      {
        "nameHe": "ATS",
        "nameEn": "Ats",
        "slug": "ats",
        "image": "/newKey/cadillac-ats-2013.jpg"
      },
      {
        "nameHe": "ATS-V",
        "nameEn": "Ats-v",
        "slug": "ats-v",
        "image": "/newKey/cadillac-ats-v-2016.jpg"
      },
      {
        "nameHe": "CT6",
        "nameEn": "Ct6",
        "slug": "ct6",
        "image": "/newKey/cadillac-ct6-2017.jpg"
      },
      {
        "nameHe": "XT5",
        "nameEn": "Xt5",
        "slug": "xt5",
        "image": "/newKey/cadillac-xt5-2016.jpg"
      },
      {
        "nameHe": "אסקלייד",
        "nameEn": "Escalade",
        "slug": "escalade",
        "image": "/newKey/cadillac-escalade-new.jpg"
      },
      {
        "nameHe": "XT4",
        "nameEn": "Xt4",
        "slug": "xt4",
        "image": "/newKey/cadillac-xt4-2019.jpg"
      },
      {
        "nameHe": "XT6",
        "nameEn": "Xt6",
        "slug": "xt6",
        "image": "/newKey/cadillac-xt6-new.jpg"
      },
      {
        "nameHe": "CT5",
        "nameEn": "Ct5",
        "slug": "ct5",
        "image": "/newKey/cadillac-ct5-new.jpg"
      },
      {
        "nameHe": "ליריק",
        "nameEn": "Lyriq",
        "slug": "lyriq",
        "image": "/newKey/cadillac-lyriq-new.jpg"
      },
      {
        "nameHe": "אופטיק",
        "nameEn": "Optiq",
        "slug": "optiq",
        "image": "/newKey/cadillac-optiq-new.jpg"
      },
      {
        "nameHe": "אסקלייד IQ",
        "nameEn": "Escalade-iq",
        "slug": "escalade-iq",
        "image": "/newKey/cadillac-escalade-iq-new.jpg"
      }
    ]
  },
  {
    "slug": "chery",
    "names": {
      "he": "צ'רי",
      "en": "Chery",
      "es": "Chery"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "FX",
        "nameEn": "Fx",
        "slug": "fx",
        "image": "/newKey/chery-fx-new.jpg"
      },
      {
        "nameHe": "טיגו 7 פרו",
        "nameEn": "Tiggo-7-pro",
        "slug": "tiggo-7-pro",
        "image": "/newKey/chery-tiggo-7-pro-new.jpg"
      },
      {
        "nameHe": "טיגו 8 פרו",
        "nameEn": "Tiggo-8-pro",
        "slug": "tiggo-8-pro",
        "image": "/newKey/chery-tiggo-8-pro-new.jpg"
      },
      {
        "nameHe": "אריזו 8",
        "nameEn": "Arrizo-8",
        "slug": "arrizo-8",
        "image": "/newKey/chery-arrizo-8-new.jpg"
      },
      {
        "nameHe": "טיגו 4 פרו",
        "nameEn": "Tiggo-4-pro",
        "slug": "tiggo-4-pro",
        "image": "/newKey/chery-tiggo-4-pro-new.jpg"
      }
    ]
  },
  {
    "slug": "changan",
    "names": {
      "he": "צ'אנגן",
      "en": "Changan",
      "es": "Changan"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "דיפאל S07",
        "nameEn": "Deepal-s07",
        "slug": "deepal-s07",
        "image": "/newKey/changan-deepal-s07-new.jpg"
      }
    ]
  },
  {
    "slug": "ferrari",
    "names": {
      "he": "פרארי",
      "en": "Ferrari",
      "es": "Ferrari"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "קליפורניה",
        "nameEn": "California",
        "slug": "california",
        "image": "/newKey/ferrari-california-2012.jpg"
      },
      {
        "nameHe": "458 איטליה",
        "nameEn": "458-italia",
        "slug": "458-italia",
        "image": "/newKey/ferrari-458-italia-2012.jpg"
      },
      {
        "nameHe": "458 ספיידר",
        "nameEn": "458-spider",
        "slug": "458-spider",
        "image": "/newKey/ferrari-458-spider-2012.jpg"
      },
      {
        "nameHe": "FF",
        "nameEn": "Ff",
        "slug": "ff",
        "image": "/newKey/ferrari-ff-2012.jpg"
      },
      {
        "nameHe": "F12 ברלינטה",
        "nameEn": "F12-berlinetta",
        "slug": "f12-berlinetta",
        "image": "/newKey/ferrari-f12-berlinetta-2012.jpg"
      },
      {
        "nameHe": "פורטופינו",
        "nameEn": "Portofino",
        "slug": "portofino",
        "image": "/newKey/ferrari-portofino-2018.jpg"
      },
      {
        "nameHe": "488",
        "nameEn": "488",
        "slug": "488",
        "image": "/newKey/ferrari-488-2016.jpg"
      },
      {
        "nameHe": "GTC4Lusso",
        "nameEn": "Gtc4lusso",
        "slug": "gtc4lusso",
        "image": "/newKey/ferrari-gtc4lusso-2016.jpg"
      },
      {
        "nameHe": "812 סופרפאסט",
        "nameEn": "812-superfast",
        "slug": "812-superfast",
        "image": "/newKey/ferrari-812-superfast-2018.jpg"
      },
      {
        "nameHe": "רומא",
        "nameEn": "Roma",
        "slug": "roma",
        "image": "/newKey/ferrari-roma-new.jpg"
      },
      {
        "nameHe": "F8",
        "nameEn": "F8",
        "slug": "f8",
        "image": "/newKey/ferrari-f8-2021.jpg"
      },
      {
        "nameHe": "296",
        "nameEn": "296",
        "slug": "296",
        "image": "/newKey/ferrari-296-new.jpg"
      },
      {
        "nameHe": "פורוסאנגווה",
        "nameEn": "Purosangue",
        "slug": "purosangue",
        "image": "/newKey/ferrari-purosangue-new.jpg"
      }
    ]
  },
  {
    "slug": "peugeot",
    "names": {
      "he": "פיג'ו",
      "en": "Peugeot",
      "es": "Peugeot"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "607",
        "nameEn": "607",
        "slug": "607",
        "image": "/newKey/peugeot-607-2001.jpg"
      },
      {
        "nameHe": "307CC",
        "nameEn": "307cc",
        "slug": "307cc",
        "image": "/newKey/peugeot-307cc-2004.jpg"
      },
      {
        "nameHe": "407 קופה",
        "nameEn": "407-coupe",
        "slug": "407-coupe",
        "image": "/newKey/peugeot-407-coupe-2006.jpg"
      },
      {
        "nameHe": "307SW",
        "nameEn": "307-sw",
        "slug": "307-sw",
        "image": "/newKey/peugeot-307-sw-2003.jpg"
      },
      {
        "nameHe": "3008",
        "nameEn": "3008",
        "slug": "3008",
        "image": "/newKey/peugeot-3008-new.jpg"
      },
      {
        "nameHe": "406",
        "nameEn": "406",
        "slug": "406",
        "image": "/newKey/peugeot-406-1997.jpg"
      },
      {
        "nameHe": "207 GTI",
        "nameEn": "207-gti",
        "slug": "207-gti",
        "image": "/newKey/peugeot-207-gti-2009.jpg"
      },
      {
        "nameHe": "308",
        "nameEn": "308",
        "slug": "308",
        "image": "/newKey/peugeot-308-2008.jpg"
      },
      {
        "nameHe": "308 SW",
        "nameEn": "308-sw",
        "slug": "308-sw",
        "image": "/newKey/peugeot-308-sw-2009.jpg"
      },
      {
        "nameHe": "107",
        "nameEn": "107",
        "slug": "107",
        "image": "/newKey/peugeot-107-2009.jpg"
      },
      {
        "nameHe": "פרטנר",
        "nameEn": "Partner",
        "slug": "partner",
        "image": "/newKey/peugeot-partner-1998.jpg"
      },
      {
        "nameHe": "207",
        "nameEn": "207",
        "slug": "207",
        "image": "/newKey/peugeot-207-2007.jpg"
      },
      {
        "nameHe": "5008",
        "nameEn": "5008",
        "slug": "5008",
        "image": "/newKey/peugeot-5008-new.jpg"
      },
      {
        "nameHe": "407",
        "nameEn": "407",
        "slug": "407",
        "image": "/newKey/peugeot-407-2005.jpg"
      },
      {
        "nameHe": "307",
        "nameEn": "307",
        "slug": "307",
        "image": "/newKey/peugeot-307-2002.jpg"
      },
      {
        "nameHe": "206",
        "nameEn": "206",
        "slug": "206",
        "image": "/newKey/peugeot-206-1999.jpg"
      },
      {
        "nameHe": "508",
        "nameEn": "508",
        "slug": "508",
        "image": "/newKey/peugeot-508-2011.jpg"
      },
      {
        "nameHe": "308CC",
        "nameEn": "308cc",
        "slug": "308cc",
        "image": "/newKey/peugeot-308cc-2010.jpg"
      },
      {
        "nameHe": "206+",
        "nameEn": "206plus",
        "slug": "206plus",
        "image": "/newKey/peugeot-206plus-2011.jpg"
      },
      {
        "nameHe": "RCZ",
        "nameEn": "Rcz",
        "slug": "rcz",
        "image": "/newKey/peugeot-rcz-2010.jpg"
      },
      {
        "nameHe": "207CC",
        "nameEn": "207cc",
        "slug": "207cc",
        "image": "/newKey/peugeot-207cc-2008.jpg"
      },
      {
        "nameHe": "208",
        "nameEn": "208",
        "slug": "208",
        "image": "/newKey/peugeot-208-new.jpg"
      },
      {
        "nameHe": "508 סטיישן SW",
        "nameEn": "508-sw",
        "slug": "508-sw",
        "image": "/newKey/peugeot-508-sw-2012.jpg"
      },
      {
        "nameHe": "ביפר",
        "nameEn": "Bipper",
        "slug": "bipper",
        "image": "/newKey/peugeot-bipper-2012.jpg"
      },
      {
        "nameHe": "2008",
        "nameEn": "20082023Exteriors02",
        "slug": "20082023exteriors02",
        "image": "/newKey/PeugeotE-20082023Exteriors02.jpg"
      },
      {
        "nameHe": "בוקסר",
        "nameEn": "Boxer",
        "slug": "boxer",
        "image": "/newKey/peugeot-boxer-new.jpg"
      },
      {
        "nameHe": "301",
        "nameEn": "301",
        "slug": "301",
        "image": "/newKey/peugeot-301-2013.jpg"
      },
      {
        "nameHe": "208 GTI",
        "nameEn": "208-gti",
        "slug": "208-gti",
        "image": "/newKey/peugeot-208-gti-2013.jpg"
      },
      {
        "nameHe": "108",
        "nameEn": "108",
        "slug": "108",
        "image": "/newKey/peugeot-108-2015.jpg"
      },
      {
        "nameHe": "308 GTI",
        "nameEn": "308-gti",
        "slug": "308-gti",
        "image": "/newKey/peugeot-308-gti-2017.jpg"
      },
      {
        "nameHe": "408",
        "nameEn": "408",
        "slug": "408",
        "image": "/newKey/peugeot-408-new.jpg"
      }
    ]
  },
  {
    "slug": "fiat",
    "names": {
      "he": "פיאט",
      "en": "Fiat",
      "es": "Fiat"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "500 קבריולה",
        "nameEn": "500e-cabriolet",
        "slug": "500e-cabriolet",
        "image": "/newKey/abarth-500e-cabriolet-new.jpg"
      },
      {
        "nameHe": "מולטיפלה",
        "nameEn": "Multipla",
        "slug": "multipla",
        "image": "/newKey/fiat-multipla-2000.jpg"
      },
      {
        "nameHe": "דובלו",
        "nameEn": "Doblo",
        "slug": "doblo",
        "image": "/newKey/fiat-doblo-new.jpg"
      },
      {
        "nameHe": "פנדה 4X4",
        "nameEn": "Panda-4x4",
        "slug": "panda-4x4",
        "image": "/newKey/fiat-panda-4x4-2007.jpg"
      },
      {
        "nameHe": "500",
        "nameEn": "500e",
        "slug": "500e",
        "image": "/newKey/abarth-500e-new.jpg"
      },
      {
        "nameHe": "פונטו",
        "nameEn": "Punto",
        "slug": "punto",
        "image": "/newKey/fiat-punto-2001.jpg"
      },
      {
        "nameHe": "פיורינו",
        "nameEn": "Fiorino",
        "slug": "fiorino",
        "image": "/newKey/fiat-fiorino-2009.jpg"
      },
      {
        "nameHe": "כרומה",
        "nameEn": "Croma",
        "slug": "croma",
        "image": "/newKey/fiat-croma-2009.jpg"
      },
      {
        "nameHe": "בראבו",
        "nameEn": "Bravo",
        "slug": "bravo",
        "image": "/newKey/fiat-bravo-2009.jpg"
      },
      {
        "nameHe": "גרנדה פונטו",
        "nameEn": "Grande-punto",
        "slug": "grande-punto",
        "image": "/newKey/fiat-grande-punto-2007.jpg"
      },
      {
        "nameHe": "פנדה",
        "nameEn": "Panda",
        "slug": "panda",
        "image": "/newKey/fiat-panda-2004.jpg"
      },
      {
        "nameHe": "פונטו איבו",
        "nameEn": "Punto-evo",
        "slug": "punto-evo",
        "image": "/newKey/abarth-punto-evo-2010.jpg"
      },
      {
        "nameHe": "סדיצ'י",
        "nameEn": "Sedici",
        "slug": "sedici",
        "image": "/newKey/fiat-sedici-2012a.jpg"
      },
      {
        "nameHe": "קובו",
        "nameEn": "Qubo",
        "slug": "qubo",
        "image": "/newKey/fiat-qubo-2012.jpg"
      },
      {
        "nameHe": "דוקטו",
        "nameEn": "Ducato",
        "slug": "ducato",
        "image": "/newKey/fiat-ducato-new.jpg"
      },
      {
        "nameHe": "500L",
        "nameEn": "500l",
        "slug": "500l",
        "image": "/newKey/fiat-500l-2013.jpg"
      },
      {
        "nameHe": "500L ליווינג",
        "nameEn": "500l-living",
        "slug": "500l-living",
        "image": "/newKey/fiat-500l-living-2014.jpg"
      },
      {
        "nameHe": "500X",
        "nameEn": "500x",
        "slug": "500x",
        "image": "/newKey/fiat-500x-2015.jpg"
      },
      {
        "nameHe": "טיפו",
        "nameEn": "Tipo",
        "slug": "tipo",
        "image": "/newKey/fiat-tipo-2016.jpg"
      },
      {
        "nameHe": "פולבאק",
        "nameEn": "Fullback",
        "slug": "fullback",
        "image": "/newKey/fiat-fullback-2016.jpg"
      },
      {
        "nameHe": "טיפו האצ'בק",
        "nameEn": "Tipo-hatchback",
        "slug": "tipo-hatchback",
        "image": "/newKey/fiat-tipo-hatchback-2017.jpg"
      },
      {
        "nameHe": "טיפו סטיישן",
        "nameEn": "Tipo-station",
        "slug": "tipo-station",
        "image": "/newKey/fiat-tipo-station-2017.jpg"
      },
      {
        "nameHe": "סקודו",
        "nameEn": "Scudo",
        "slug": "scudo",
        "image": "/newKey/fiat-scudo-new.jpg"
      }
    ]
  },
  {
    "slug": "forthing",
    "names": {
      "he": "פורת'ינג",
      "en": "Forthing",
      "es": "Forthing"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "פריידיי",
        "nameEn": "Friday",
        "slug": "friday",
        "image": "/newKey/forthing-friday-new.jpg"
      },
      {
        "nameHe": "S7",
        "nameEn": "S7",
        "slug": "s7",
        "image": "/newKey/forthing-s7-new.jpg"
      }
    ]
  },
  {
    "slug": "porsche",
    "names": {
      "he": "פורשה",
      "en": "Porsche",
      "es": "Porsche"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "911 קבריולה",
        "nameEn": "911-cabriolet",
        "slug": "911-cabriolet",
        "image": "/newKey/porsche-911-cabriolet-2005.jpg"
      },
      {
        "nameHe": "בוקסטר",
        "nameEn": "Boxter",
        "slug": "boxter",
        "image": "/newKey/porsche-boxter-new.jpg"
      },
      {
        "nameHe": "קאיימן",
        "nameEn": "Cayman",
        "slug": "cayman",
        "image": "/newKey/porsche-cayman-new.jpg"
      },
      {
        "nameHe": "911",
        "nameEn": "911",
        "slug": "911",
        "image": "/newKey/porsche-911-new.jpg"
      },
      {
        "nameHe": "קאיין",
        "nameEn": "Cayenne",
        "slug": "cayenne",
        "image": "/newKey/porsche-cayenne-2003.jpg"
      },
      {
        "nameHe": "פנמרה",
        "nameEn": "Panamera",
        "slug": "panamera",
        "image": "/newKey/porsche-panamera-new.jpg"
      },
      {
        "nameHe": "מקאן",
        "nameEn": "Macan",
        "slug": "macan",
        "image": "/newKey/porsche-macan-new.jpg"
      },
      {
        "nameHe": "קאיין קופה",
        "nameEn": "Cayenne-coupe",
        "slug": "cayenne-coupe",
        "image": "/newKey/porsche-cayenne-coupe-new.jpg"
      },
      {
        "nameHe": "טייקן",
        "nameEn": "Taycan",
        "slug": "taycan",
        "image": "/newKey/porsche-taycan-new.jpg"
      },
      {
        "nameHe": "טייקן קרוס טוריסמו",
        "nameEn": "Taycan-cross-turismo",
        "slug": "taycan-cross-turismo",
        "image": "/newKey/porsche-taycan-cross-turismo-new.jpg"
      }
    ]
  },
  {
    "slug": "ford",
    "names": {
      "he": "פורד",
      "en": "Ford",
      "es": "Ford"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "אקספלורר",
        "nameEn": "Explorer",
        "slug": "explorer",
        "image": "/newKey/ford-explorer-new.jpg"
      },
      {
        "nameHe": "פוקוס קופה - קבריולה",
        "nameEn": "Focus-coupe-cabriolet",
        "slug": "focus-coupe-cabriolet",
        "image": "/newKey/ford-focus-coupe-cabriolet-2008.jpg"
      },
      {
        "nameHe": "F-350 סופר-דיוטי",
        "nameEn": "F-350-new",
        "slug": "f-350-new",
        "image": "/newKey/ford-f-350-new-Front.jpg"
      },
      {
        "nameHe": "פוקוס סטיישן",
        "nameEn": "Focus-station",
        "slug": "focus-station",
        "image": "/newKey/ford-focus-station-new.jpg"
      },
      {
        "nameHe": "פוקוס",
        "nameEn": "Focus",
        "slug": "focus",
        "image": "/newKey/ford-focus-2000.jpg"
      },
      {
        "nameHe": "מונדיאו",
        "nameEn": "Mondeo",
        "slug": "mondeo",
        "image": "/newKey/ford-mondeo-2002.jpg"
      },
      {
        "nameHe": "EDGE אדג'",
        "nameEn": "Edge",
        "slug": "edge",
        "image": "/newKey/ford-edge-2008.jpg"
      },
      {
        "nameHe": "מונדיאו סטיישן",
        "nameEn": "Mondeo-station",
        "slug": "mondeo-station",
        "image": "/newKey/ford-mondeo-station-2008.jpg"
      },
      {
        "nameHe": "פיאסטה",
        "nameEn": "Fiesta",
        "slug": "fiesta",
        "image": "/newKey/ford-fiesta-2009.jpg"
      },
      {
        "nameHe": "טורנאו קונקט",
        "nameEn": "Tourneo-connect",
        "slug": "tourneo-connect",
        "image": "/newKey/ford-tourneo-connect-2003.jpg"
      },
      {
        "nameHe": "S MAX",
        "nameEn": "Smax",
        "slug": "smax",
        "image": "/newKey/ford-smax-2008.jpg"
      },
      {
        "nameHe": "גלאקסי",
        "nameEn": "Galaxy",
        "slug": "galaxy",
        "image": "/newKey/ford-galaxy-2008.jpg"
      },
      {
        "nameHe": "פוקוס ST",
        "nameEn": "Focus-st",
        "slug": "focus-st",
        "image": "/newKey/ford-focus-st-2012.jpg"
      },
      {
        "nameHe": "קוגה",
        "nameEn": "Kuga",
        "slug": "kuga",
        "image": "/newKey/ford-kuga-2013.jpg"
      },
      {
        "nameHe": "טרנזיט",
        "nameEn": "Transit",
        "slug": "transit",
        "image": "/newKey/ford-transit-2014.jpg"
      },
      {
        "nameHe": "טרנזיט קסטום",
        "nameEn": "Transit-custom",
        "slug": "transit-custom",
        "image": "/newKey/ford-transit-custom-2015.jpg"
      },
      {
        "nameHe": "F-250",
        "nameEn": "F-250",
        "slug": "f-250",
        "image": "/newKey/ford-f-250-new.jpg"
      },
      {
        "nameHe": "פוקוס אקטיב",
        "nameEn": "Focus-active",
        "slug": "focus-active",
        "image": "/newKey/ford-focus-active-2020.jpg"
      },
      {
        "nameHe": "פוקוס אקטיב סטיישן",
        "nameEn": "Focus-active-station",
        "slug": "focus-active-station",
        "image": "/newKey/ford-focus-active-station-2020.jpg"
      },
      {
        "nameHe": "ברונקו",
        "nameEn": "Bronco",
        "slug": "bronco",
        "image": "/newKey/ford-bronco-new.jpg"
      },
      {
        "nameHe": "פומה",
        "nameEn": "Puma",
        "slug": "puma",
        "image": "/newKey/ford-puma-2021.jpg"
      },
      {
        "nameHe": "ריינג'ר",
        "nameEn": "Ranger",
        "slug": "ranger",
        "image": "/newKey/ford-ranger-new.jpg"
      },
      {
        "nameHe": "מוסטנג",
        "nameEn": "Mustang",
        "slug": "mustang",
        "image": "/newKey/ford-mustang-new.jpg"
      }
    ]
  },
  {
    "slug": "volkswagen",
    "names": {
      "he": "פולקסווגן",
      "en": "Volkswagen",
      "es": "Volkswagen"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "טיגואן",
        "nameEn": "Tiguan",
        "slug": "tiguan",
        "image": "/newKey/volkswagen-tiguan-new.jpg"
      },
      {
        "nameHe": "פולו",
        "nameEn": "Polo",
        "slug": "polo",
        "image": "/newKey/volkswagen-polo-2003.jpg"
      },
      {
        "nameHe": "גולף",
        "nameEn": "Golf",
        "slug": "golf",
        "image": "/newKey/volkswagen-golf-2005.jpg"
      },
      {
        "nameHe": "גולף +",
        "nameEn": "Golf-plus",
        "slug": "golf-plus",
        "image": "/newKey/volkswagen-golf-plus-2006.jpg"
      },
      {
        "nameHe": "גולף GTI",
        "nameEn": "Golf-gti",
        "slug": "golf-gti",
        "image": "/newKey/volkswagen-golf-gti-2006.jpg"
      },
      {
        "nameHe": "איוס",
        "nameEn": "Eos",
        "slug": "eos",
        "image": "/newKey/volkswagen-eos-2007.jpg"
      },
      {
        "nameHe": "קאדי",
        "nameEn": "Caddy",
        "slug": "caddy",
        "image": "/newKey/volkswagen-caddy-new.jpg"
      },
      {
        "nameHe": "טוארג",
        "nameEn": "Touareg",
        "slug": "touareg",
        "image": "/newKey/volkswagen-touareg-2004.jpg"
      },
      {
        "nameHe": "פולו GTI",
        "nameEn": "Polo-gti",
        "slug": "polo-gti",
        "image": "/newKey/volkswagen-polo-gti-2007.jpg"
      },
      {
        "nameHe": "פאסאט סטיישן",
        "nameEn": "Passat-station",
        "slug": "passat-station",
        "image": "/newKey/volkswagen-passat-station-2006.jpg"
      },
      {
        "nameHe": "בורה",
        "nameEn": "Bora",
        "slug": "bora",
        "image": "/newKey/volkswagen-bora-1999.jpg"
      },
      {
        "nameHe": "טוראן",
        "nameEn": "Touran",
        "slug": "touran",
        "image": "/newKey/volkswagen-touran-2007.jpg"
      },
      {
        "nameHe": "שירוקו",
        "nameEn": "Scirocco",
        "slug": "scirocco",
        "image": "/newKey/volkswagen-scirocco-2009.jpg"
      },
      {
        "nameHe": "ג'טה",
        "nameEn": "Jetta",
        "slug": "jetta",
        "image": "/newKey/volkswagen-jetta-2006.jpg"
      },
      {
        "nameHe": "פאסאט",
        "nameEn": "Passat",
        "slug": "passat",
        "image": "/newKey/volkswagen-passat-2006.jpg"
      },
      {
        "nameHe": "פאסאט CC",
        "nameEn": "Passat-cc",
        "slug": "passat-cc",
        "image": "/newKey/volkswagen-passat-cc-2008.jpg"
      },
      {
        "nameHe": "אמארוק",
        "nameEn": "Amarok",
        "slug": "amarok",
        "image": "/newKey/volkswagen-amarok-new.jpg"
      },
      {
        "nameHe": "קראפטר",
        "nameEn": "Crafter",
        "slug": "crafter",
        "image": "/newKey/volkswagen-crafter-new.jpg"
      },
      {
        "nameHe": "טרנספורטר",
        "nameEn": "Transporter",
        "slug": "transporter",
        "image": "/newKey/volkswagen-transporter-new.jpg"
      },
      {
        "nameHe": "קראוול",
        "nameEn": "Caravelle",
        "slug": "caravelle",
        "image": "/newKey/volkswagen-caravelle-new.jpg"
      },
      {
        "nameHe": "אפ",
        "nameEn": "Up",
        "slug": "up",
        "image": "/newKey/volkswagen-up-2014.jpg"
      },
      {
        "nameHe": "חיפושית",
        "nameEn": "Beetle",
        "slug": "beetle",
        "image": "/newKey/volkswagen-beetle-2014.jpg"
      },
      {
        "nameHe": "גולף ספורטוואן",
        "nameEn": "Golf-sportsvan",
        "slug": "golf-sportsvan",
        "image": "/newKey/volkswagen-golf-sportsvan-2014.jpg"
      },
      {
        "nameHe": "טי קרוס",
        "nameEn": "T-cross",
        "slug": "t-cross",
        "image": "/newKey/volkswagen-t-cross-new.jpg"
      },
      {
        "nameHe": "ID.4",
        "nameEn": "Id4",
        "slug": "id4",
        "image": "/newKey/volkswagen-id4-new.jpg"
      },
      {
        "nameHe": "טיגואן אולספייס",
        "nameEn": "Tiguan-allspace",
        "slug": "tiguan-allspace",
        "image": "/newKey/volkswagen-tiguan-allspace-new.jpg"
      },
      {
        "nameHe": "טי רוק",
        "nameEn": "T-roc",
        "slug": "t-roc",
        "image": "/newKey/volkswagen-t-roc-new.jpg"
      },
      {
        "nameHe": "ID.5",
        "nameEn": "Id5",
        "slug": "id5",
        "image": "/newKey/volkswagen-id5-new.jpg"
      },
      {
        "nameHe": "טאיגו",
        "nameEn": "Taigo",
        "slug": "taigo",
        "image": "/newKey/volkswagen-taigo-new.jpg"
      },
      {
        "nameHe": "ID.7",
        "nameEn": "Id7",
        "slug": "id7",
        "image": "/newKey/volkswagen-id7-new.jpg"
      },
      {
        "nameHe": "ID.BUZZ",
        "nameEn": "Id-buzz",
        "slug": "id-buzz",
        "image": "/newKey/volswagen-id-buzz-new.jpg"
      }
    ]
  },
  {
    "slug": "polestar",
    "names": {
      "he": "פולסטאר",
      "en": "Polestar",
      "es": "Polestar"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "2",
        "nameEn": "2",
        "slug": "2",
        "image": "/newKey/polestar-2-new.jpg"
      }
    ]
  },
  {
    "slug": "skywell",
    "names": {
      "he": "סקייוול",
      "en": "Skywell",
      "es": "Skywell"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "ET5",
        "nameEn": "Et5",
        "slug": "et5",
        "image": "/newKey/skywell-et5-new.jpg"
      }
    ]
  },
  {
    "slug": "skoda",
    "names": {
      "he": "סקודה",
      "en": "Skoda",
      "es": "Skoda"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "פאביה",
        "nameEn": "Fabia",
        "slug": "fabia",
        "image": "/newKey/skoda-fabia-new.jpg"
      },
      {
        "nameHe": "אוקטביה",
        "nameEn": "Octavia",
        "slug": "octavia",
        "image": "/newKey/skoda-octavia-new.jpg"
      },
      {
        "nameHe": "סופרב",
        "nameEn": "Superb",
        "slug": "superb",
        "image": "/newKey/skoda-superb-2003.jpg"
      },
      {
        "nameHe": "רומסטר",
        "nameEn": "Roomster",
        "slug": "roomster",
        "image": "/newKey/skoda-roomster-2007.jpg"
      },
      {
        "nameHe": "פאביה ספייס",
        "nameEn": "Fabia-space",
        "slug": "fabia-space",
        "image": "/newKey/skoda-fabia-space-2008.jpg"
      },
      {
        "nameHe": "אוקטביה קומבי",
        "nameEn": "Octavia-combi",
        "slug": "octavia-combi",
        "image": "/newKey/skoda-octavia-combi-2006.jpg"
      },
      {
        "nameHe": "יטי",
        "nameEn": "Yeti",
        "slug": "yeti",
        "image": "/newKey/skoda-yeti-2010.jpg"
      },
      {
        "nameHe": "סופרב קומבי",
        "nameEn": "Superb-combi",
        "slug": "superb-combi",
        "image": "/newKey/skoda-superb-combi-2010.jpg"
      },
      {
        "nameHe": "אוקטביה RS",
        "nameEn": "Octavia-RS",
        "slug": "octavia-rs",
        "image": "/newKey/skoda-octavia-RS-2009.jpg"
      },
      {
        "nameHe": "סיטיגו",
        "nameEn": "Citigo",
        "slug": "citigo",
        "image": "/newKey/skoda-citigo-2012.jpg"
      },
      {
        "nameHe": "ראפיד",
        "nameEn": "ראפיד",
        "slug": "skoda-11",
        "image": "/newKey/skoda-skoda-11-new.jpg"
      },
      {
        "nameHe": "ראפיד ספייסבק",
        "nameEn": "Rapid-spaceback",
        "slug": "rapid-spaceback",
        "image": "/newKey/skoda-rapid-spaceback-2015.jpg"
      },
      {
        "nameHe": "קודיאק",
        "nameEn": "Kodiaq",
        "slug": "kodiaq",
        "image": "/newKey/skoda-kodiaq-new.jpg"
      },
      {
        "nameHe": "קארוק",
        "nameEn": "Karoq",
        "slug": "karoq",
        "image": "/newKey/skoda-karoq-new.jpg"
      },
      {
        "nameHe": "סקאלה",
        "nameEn": "Scala",
        "slug": "scala",
        "image": "/newKey/skoda-scala-new.jpg"
      },
      {
        "nameHe": "קאמיק",
        "nameEn": "Kamiq",
        "slug": "kamiq",
        "image": "/newKey/skoda-kamiq-new.jpg"
      },
      {
        "nameHe": "אניאק",
        "nameEn": "Enyaq",
        "slug": "enyaq",
        "image": "/newKey/skoda-enyaq-2021.jpg"
      },
      {
        "nameHe": "אניאק קופה",
        "nameEn": "Enyaq-coupe",
        "slug": "enyaq-coupe",
        "image": "/newKey/skoda-enyaq-coupe-new.jpg"
      }
    ]
  },
  {
    "slug": "smart",
    "names": {
      "he": "סמארט",
      "en": "Smart",
      "es": "Smart"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "פורטו",
        "nameEn": "Fortwo",
        "slug": "fortwo",
        "image": "/newKey/smart-fortwo-2003.jpg"
      },
      {
        "nameHe": "פורטו קבריולה",
        "nameEn": "Fortwo-cabriolet",
        "slug": "fortwo-cabriolet",
        "image": "/newKey/smart-fortwo-cabriolet-2011.jpg"
      },
      {
        "nameHe": "פורפור",
        "nameEn": "Forfour",
        "slug": "forfour",
        "image": "/newKey/smart-forfour-2015.jpg"
      },
      {
        "nameHe": "1",
        "nameEn": "1",
        "slug": "1",
        "image": "/newKey/smart-1-new.jpg"
      },
      {
        "nameHe": "3",
        "nameEn": "3",
        "slug": "3",
        "image": "/newKey/mg-3-new.jpg"
      }
    ]
  },
  {
    "slug": "citroen",
    "names": {
      "he": "סיטרואן",
      "en": "Citroen",
      "es": "Citroen"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "C2",
        "nameEn": "C2",
        "slug": "c2",
        "image": "/newKey/citroen-c2-2007.jpg"
      },
      {
        "nameHe": "C3",
        "nameEn": "C3",
        "slug": "c3",
        "image": "/newKey/citroen-c3-2003.jpg"
      },
      {
        "nameHe": "C4",
        "nameEn": "C4",
        "slug": "c4",
        "image": "/newKey/citroen-c4-new.jpg"
      },
      {
        "nameHe": "C5",
        "nameEn": "C5",
        "slug": "c5",
        "image": "/newKey/citroen-c5-2005.jpg"
      },
      {
        "nameHe": "ברלינגו",
        "nameEn": "Berlingo",
        "slug": "berlingo",
        "image": "/newKey/citroen-berlingo-new.jpg"
      },
      {
        "nameHe": "קסארה",
        "nameEn": "Xsara",
        "slug": "xsara",
        "image": "/newKey/citroen-xsara-1998.jpg"
      },
      {
        "nameHe": "C קרוסר",
        "nameEn": "C-crosser",
        "slug": "c-crosser",
        "image": "/newKey/citroen-c-crosser-2008.jpg"
      },
      {
        "nameHe": "C1",
        "nameEn": "C1",
        "slug": "c1",
        "image": "/newKey/citroen-c1-2011.jpg"
      },
      {
        "nameHe": "C4 גראנד פיקאסו",
        "nameEn": "C4-grand-picasso",
        "slug": "c4-grand-picasso",
        "image": "/newKey/citroen-c4-grand-picasso-2008.jpg"
      },
      {
        "nameHe": "C5 סטיישן",
        "nameEn": "C5-station",
        "slug": "c5-station",
        "image": "/newKey/citroen-c5-station-2009.jpg"
      },
      {
        "nameHe": "C6",
        "nameEn": "C6",
        "slug": "c6",
        "image": "/newKey/citroen-c6-2006.jpg"
      },
      {
        "nameHe": "C3 פיקאסו",
        "nameEn": "C3-picasso",
        "slug": "c3-picasso",
        "image": "/newKey/citroen-c3-picasso-2010.jpg"
      },
      {
        "nameHe": "DS3",
        "nameEn": "Ds3",
        "slug": "ds3",
        "image": "/newKey/citroen-ds3-2010.jpg"
      },
      {
        "nameHe": "DS4",
        "nameEn": "Ds4",
        "slug": "ds4",
        "image": "/newKey/citroen-ds4-2012.jpg"
      },
      {
        "nameHe": "DS5",
        "nameEn": "Ds5",
        "slug": "ds5",
        "image": "/newKey/citroen-ds5-2012.jpg"
      },
      {
        "nameHe": "נמו",
        "nameEn": "Nemo",
        "slug": "nemo",
        "image": "/newKey/citroen-nemo-2012.jpg"
      },
      {
        "nameHe": "ג'מפי",
        "nameEn": "Jumpey",
        "slug": "jumpey",
        "image": "/newKey/citroen-jumpey-new.jpg"
      },
      {
        "nameHe": "C אליזה",
        "nameEn": "C-elysee",
        "slug": "c-elysee",
        "image": "/newKey/citroen-c-elysee-2013.jpg"
      },
      {
        "nameHe": "DS3 קבריולה",
        "nameEn": "Ds3-cabriolet",
        "slug": "ds3-cabriolet",
        "image": "/newKey/citroen-ds3-cabriolet-2013.jpg"
      },
      {
        "nameHe": "קקטוס",
        "nameEn": "Cactus",
        "slug": "cactus",
        "image": "/newKey/citroen-cactus-2015.jpg"
      },
      {
        "nameHe": "C4 פיקאסו",
        "nameEn": "C4-picasso",
        "slug": "c4-picasso",
        "image": "/newKey/citroen-c4-picasso-2016.jpg"
      },
      {
        "nameHe": "C3 איירקרוס",
        "nameEn": "C3-aircross",
        "slug": "c3-aircross",
        "image": "/newKey/citroen-c3-aircross-2018.jpg"
      },
      {
        "nameHe": "C4 ספייסטורר",
        "nameEn": "C4-spacetourer",
        "slug": "c4-spacetourer",
        "image": "/newKey/citroen-c4-spacetourer-2018.jpg"
      },
      {
        "nameHe": "C5 איירקרוס",
        "nameEn": "C5-aircross",
        "slug": "c5-aircross",
        "image": "/newKey/citroen-c5-aircross-new.jpg"
      },
      {
        "nameHe": "C4 X",
        "nameEn": "C4x",
        "slug": "c4x",
        "image": "/newKey/citroen-c4x-new.jpg"
      }
    ]
  },
  {
    "slug": "seat",
    "names": {
      "he": "סיאט",
      "en": "Seat",
      "es": "Seat"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "איביזה",
        "nameEn": "Ibiza",
        "slug": "ibiza",
        "image": "/newKey/seat-ibiza-2003.jpg"
      },
      {
        "nameHe": "קורדובה",
        "nameEn": "Cordoba",
        "slug": "cordoba",
        "image": "/newKey/seat-cordoba-2003.jpg"
      },
      {
        "nameHe": "טולדו",
        "nameEn": "Toledo",
        "slug": "toledo",
        "image": "/newKey/seat-toledo-2005.jpg"
      },
      {
        "nameHe": "איביזה FR",
        "nameEn": "Ibiza-fr",
        "slug": "ibiza-fr",
        "image": "/newKey/seat-ibiza-fr-2003.jpg"
      },
      {
        "nameHe": "אלתיאה XL",
        "nameEn": "Altea-xl",
        "slug": "altea-xl",
        "image": "/newKey/seat-altea-xl-2009.jpg"
      },
      {
        "nameHe": "לאון",
        "nameEn": "Leon",
        "slug": "leon",
        "image": "/newKey/cupra-leon-new.jpg"
      },
      {
        "nameHe": "איביזה SC",
        "nameEn": "Ibiza-sc",
        "slug": "ibiza-sc",
        "image": "/newKey/seat-ibiza-sc-2009.jpg"
      },
      {
        "nameHe": "איביזה קופרה",
        "nameEn": "Ibiza-cupra",
        "slug": "ibiza-cupra",
        "image": "/newKey/seat-ibiza-cupra-2009.jpg"
      },
      {
        "nameHe": "לאון FR",
        "nameEn": "Leon-fr",
        "slug": "leon-fr",
        "image": "/newKey/seat-leon-fr-2007.jpg"
      },
      {
        "nameHe": "לאון קופרה",
        "nameEn": "Leon-cupra",
        "slug": "leon-cupra",
        "image": "/newKey/seat-leon-cupra-2007.jpg"
      },
      {
        "nameHe": "אלתיאה",
        "nameEn": "Altea",
        "slug": "altea",
        "image": "/newKey/seat-altea-2006.jpg"
      },
      {
        "nameHe": "איביזה סטיישן FLOW",
        "nameEn": "Ibiza-station",
        "slug": "ibiza-station",
        "image": "/newKey/seat-ibiza-station-2011.jpg"
      },
      {
        "nameHe": "מי",
        "nameEn": "Mii",
        "slug": "mii",
        "image": "/newKey/seat-mii-2012.jpg"
      },
      {
        "nameHe": "אלהמברה",
        "nameEn": "Alhambra",
        "slug": "alhambra",
        "image": "/newKey/seat-alhambra-2013.jpg"
      },
      {
        "nameHe": "לאון סטיישן",
        "nameEn": "Leon-station",
        "slug": "leon-station",
        "image": "/newKey/seat-leon-station-2014.jpg"
      },
      {
        "nameHe": "אטקה",
        "nameEn": "Ateca",
        "slug": "ateca",
        "image": "/newKey/seat-ateca-new.jpg"
      },
      {
        "nameHe": "ארונה",
        "nameEn": "Arona",
        "slug": "arona",
        "image": "/newKey/seat-arona-new.jpg"
      }
    ]
  },
  {
    "slug": "suzuki",
    "names": {
      "he": "סוזוקי",
      "en": "Suzuki",
      "es": "Suzuki"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "סוויפט",
        "nameEn": "Swift",
        "slug": "swift",
        "image": "/newKey/suzuki-swift-new.jpg"
      },
      {
        "nameHe": "ליאנה",
        "nameEn": "Liana",
        "slug": "liana",
        "image": "/newKey/suzuki-liana-2002.jpg"
      },
      {
        "nameHe": "איגניס",
        "nameEn": "Ignis",
        "slug": "ignis",
        "image": "/newKey/suzuki-ignis-2001.jpg"
      },
      {
        "nameHe": "אלטו",
        "nameEn": "Alto",
        "slug": "alto",
        "image": "/newKey/suzuki-alto-2009.jpg"
      },
      {
        "nameHe": "ספלאש",
        "nameEn": "Splash",
        "slug": "splash",
        "image": "/newKey/suzuki-splash-2009.jpg"
      },
      {
        "nameHe": "SX4",
        "nameEn": "Sx4",
        "slug": "sx4",
        "image": "/newKey/suzuki-sx4-2008.jpg"
      },
      {
        "nameHe": "ג'ימני",
        "nameEn": "Jimny",
        "slug": "jimny",
        "image": "/newKey/suzuki-jimny-1999.jpg"
      },
      {
        "nameHe": "גרנד ויטרה קצר",
        "nameEn": "Grand-vitara-short",
        "slug": "grand-vitara-short",
        "image": "/newKey/suzuki-grand-vitara-short-2009.jpg"
      },
      {
        "nameHe": "גרנד ויטרה",
        "nameEn": "Grand-vitara",
        "slug": "grand-vitara",
        "image": "/newKey/suzuki-grand-vitara-2007.jpg"
      },
      {
        "nameHe": "SX4 האצ'בק",
        "nameEn": "SX4 האצ'בק",
        "slug": "sx4-2",
        "image": "/newKey/suzuki-sx4-2-new.jpg"
      },
      {
        "nameHe": "קרוסאובר",
        "nameEn": "Crossover",
        "slug": "crossover",
        "image": "/newKey/suzuki-crossover-2013.jpg"
      },
      {
        "nameHe": "ויטרה",
        "nameEn": "Vitara",
        "slug": "vitara",
        "image": "/newKey/suzuki-vitara-new.jpg"
      },
      {
        "nameHe": "סלריו",
        "nameEn": "Celerio",
        "slug": "celerio",
        "image": "/newKey/suzuki-celerio-2016.jpg"
      },
      {
        "nameHe": "בלנו",
        "nameEn": "Baleno",
        "slug": "baleno",
        "image": "/newKey/suzuki-baleno-2016.jpg"
      },
      {
        "nameHe": "S-Cross",
        "nameEn": "S-cross",
        "slug": "s-cross",
        "image": "/newKey/suzuki-s-cross-new.jpg"
      }
    ]
  },
  {
    "slug": "subaru",
    "names": {
      "he": "סובארו",
      "en": "Subaru",
      "es": "Subaru"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "B4",
        "nameEn": "B4",
        "slug": "b4",
        "image": "/newKey/subaru-b4-2004.jpg"
      },
      {
        "nameHe": "פורסטר",
        "nameEn": "Forester",
        "slug": "forester",
        "image": "/newKey/subaru-forester-new.jpg"
      },
      {
        "nameHe": "אאוטבק",
        "nameEn": "Outback",
        "slug": "outback",
        "image": "/newKey/subaru-outback-2004.jpg"
      },
      {
        "nameHe": "אימפרזה B3 STi",
        "nameEn": "Impreza-b3-sti",
        "slug": "impreza-b3-sti",
        "image": "/newKey/subaru-impreza-b3-sti-2008.jpg"
      },
      {
        "nameHe": "B4 סטיישן",
        "nameEn": "B4-station",
        "slug": "b4-station",
        "image": "/newKey/subaru-b4-station-2004.jpg"
      },
      {
        "nameHe": "אימפרזה",
        "nameEn": "Impreza",
        "slug": "impreza",
        "image": "/newKey/subaru-impreza-2001.jpg"
      },
      {
        "nameHe": "טרייבקה",
        "nameEn": "Tribeca",
        "slug": "tribeca",
        "image": "/newKey/subaru-tribeca-2007.jpg"
      },
      {
        "nameHe": "B3",
        "nameEn": "B3",
        "slug": "b3",
        "image": "/newKey/subaru-b3-2007.jpg"
      },
      {
        "nameHe": "B3 סדאן",
        "nameEn": "B3 סדאן",
        "slug": "b3-2",
        "image": "/newKey/subaru-b3-2-new.jpg"
      },
      {
        "nameHe": "אימפרזה STi סדאן",
        "nameEn": "אימפרזה STi סדאן",
        "slug": "sti",
        "image": "/newKey/subaru-sti-new.jpg"
      },
      {
        "nameHe": "XV",
        "nameEn": "Xv",
        "slug": "xv",
        "image": "/newKey/subaru-xv-2011.jpg"
      },
      {
        "nameHe": "BRZ",
        "nameEn": "Brz",
        "slug": "brz",
        "image": "/newKey/subaru-brz-2012.jpg"
      },
      {
        "nameHe": "אימפרזה WRX STi",
        "nameEn": "Impreza-wrx-sti",
        "slug": "impreza-wrx-sti",
        "image": "/newKey/subaru-impreza-wrx-sti-2015.jpg"
      },
      {
        "nameHe": "לבורג",
        "nameEn": "Levorg",
        "slug": "levorg",
        "image": "/newKey/subaru-levorg-2016.jpg"
      },
      {
        "nameHe": "איוולטיס",
        "nameEn": "Evoltis",
        "slug": "evoltis",
        "image": "/newKey/subaru-evoltis-new.jpg"
      },
      {
        "nameHe": "קרוסטרק",
        "nameEn": "Crosstrek",
        "slug": "crosstrek",
        "image": "/newKey/subaru-crosstrek-new.jpg"
      }
    ]
  },
  {
    "slug": "ssangyong",
    "names": {
      "he": "סאנגיונג",
      "en": "SsangYong",
      "es": "SsangYong"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "אקטיון",
        "nameEn": "אקטיון",
        "slug": "ssangyong-1",
        "image": "/newKey/ssangyong-ssangyong-1-new.jpg"
      },
      {
        "nameHe": "קיירון",
        "nameEn": "Kyron",
        "slug": "kyron",
        "image": "/newKey/ssangyong-kyron-2006.jpg"
      },
      {
        "nameHe": "רודיוס",
        "nameEn": "Rodius",
        "slug": "rodius",
        "image": "/newKey/ssangyong-rodius-2005.jpg"
      },
      {
        "nameHe": "רקסטון",
        "nameEn": "Rexton",
        "slug": "rexton",
        "image": "/newKey/kgm-rexton-new.jpg"
      },
      {
        "nameHe": "אקטיון ספורט",
        "nameEn": "אקטיון ספורט",
        "slug": "ssangyong-5",
        "image": "/newKey/ssangyong-ssangyong-5-new.jpg"
      },
      {
        "nameHe": "קוראנדו",
        "nameEn": "Korando",
        "slug": "korando",
        "image": "/newKey/ssangyong-korando-2011.jpg"
      },
      {
        "nameHe": "טיבולי",
        "nameEn": "Tivoli",
        "slug": "tivoli",
        "image": "/newKey/ssangyong-tivoli-2016.jpg"
      },
      {
        "nameHe": "XLV",
        "nameEn": "Xlv",
        "slug": "xlv",
        "image": "/newKey/ssangyong-xlv-2018.jpg"
      },
      {
        "nameHe": "מוסו",
        "nameEn": "Musso",
        "slug": "musso",
        "image": "/newKey/kgm-musso-new.jpg"
      }
    ]
  },
  {
    "slug": "mg",
    "names": {
      "he": "סאיק-MG",
      "en": "MG",
      "es": "MG"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "550",
        "nameEn": "Mg550",
        "slug": "mg550",
        "image": "/newKey/mg-mg550-2010.jpg"
      },
      {
        "nameHe": "350",
        "nameEn": "Mg350",
        "slug": "mg350",
        "image": "/newKey/mg-mg350-2012.jpg"
      },
      {
        "nameHe": "3",
        "nameEn": "3",
        "slug": "3",
        "image": "/newKey/mg-3-new.jpg"
      },
      {
        "nameHe": "ZS",
        "nameEn": "Zs",
        "slug": "zs",
        "image": "/newKey/mg-zs-new.jpg"
      },
      {
        "nameHe": "HS",
        "nameEn": "Hs",
        "slug": "hs",
        "image": "/newKey/mg-hs-new.jpg"
      },
      {
        "nameHe": "4",
        "nameEn": "4",
        "slug": "4",
        "image": "/newKey/ds-4-new.jpg"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5",
        "image": "/newKey/jaecoo-5-new.jpg"
      },
      {
        "nameHe": "מארוול R",
        "nameEn": "Marvel-r",
        "slug": "marvel-r",
        "image": "/newKey/mg-marvel-r-new.jpg"
      },
      {
        "nameHe": "סייברסטר",
        "nameEn": "Cyberster",
        "slug": "cyberster",
        "image": "/newKey/mg-cyberster-new.jpg"
      }
    ]
  },
  {
    "slug": "saab",
    "names": {
      "he": "סאאב",
      "en": "Saab",
      "es": "Saab"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "9-5",
        "nameEn": "9-5",
        "slug": "9-5",
        "image": "/newKey/saab-9-5-1998.jpg"
      }
    ]
  },
  {
    "slug": "nissan",
    "names": {
      "he": "ניסאן",
      "en": "Nissan",
      "es": "Nissan"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "פטרול",
        "nameEn": "Patrol",
        "slug": "patrol",
        "image": "/newKey/nissan-patrol-2001.jpg"
      },
      {
        "nameHe": "מוראנו",
        "nameEn": "Murano",
        "slug": "murano",
        "image": "/newKey/nissan-murano-2006.jpg"
      },
      {
        "nameHe": "קשקאי",
        "nameEn": "Qashqai",
        "slug": "qashqai",
        "image": "/newKey/nissan-qashqai-new.jpg"
      },
      {
        "nameHe": "פרימרה",
        "nameEn": "Primera",
        "slug": "primera",
        "image": "/newKey/nissan-primera-2003.jpg"
      },
      {
        "nameHe": "מייקרה C+C",
        "nameEn": "Micra-cc",
        "slug": "micra-cc",
        "image": "/newKey/nissan-micra-cc-2007.jpg"
      },
      {
        "nameHe": "אקס טרייל",
        "nameEn": "Xtrail",
        "slug": "xtrail",
        "image": "/newKey/nissan-xtrail-2008.jpg"
      },
      {
        "nameHe": "אלמרה",
        "nameEn": "Almera",
        "slug": "almera",
        "image": "/newKey/nissan-almera-2001.jpg"
      },
      {
        "nameHe": "ג'וק",
        "nameEn": "Juke",
        "slug": "juke",
        "image": "/newKey/nissan-juke-new.jpg"
      },
      {
        "nameHe": "פאתפיינדר",
        "nameEn": "Pathfinder",
        "slug": "pathfinder",
        "image": "/newKey/nissan-pathfinder-2005.jpg"
      },
      {
        "nameHe": "נבארה",
        "nameEn": "Navara",
        "slug": "navara",
        "image": "/newKey/nissan-navara-2007.jpg"
      },
      {
        "nameHe": "ווינר",
        "nameEn": "Winner",
        "slug": "winner",
        "image": "/newKey/nissan-winner-2008.jpg"
      },
      {
        "nameHe": "מייקרה",
        "nameEn": "Micra",
        "slug": "micra",
        "image": "/newKey/nissan-micra-2005.jpg"
      },
      {
        "nameHe": "טידה",
        "nameEn": "Tiida",
        "slug": "tiida",
        "image": "/newKey/nissan-tiida-2008.jpg"
      },
      {
        "nameHe": "נוט",
        "nameEn": "Note",
        "slug": "note",
        "image": "/newKey/nissan-note-2007.jpg"
      },
      {
        "nameHe": "קשקאי+2",
        "nameEn": "Qashqai-plus2",
        "slug": "qashqai-plus2",
        "image": "/newKey/nissan-qashqai-plus2-2009.jpg"
      },
      {
        "nameHe": "370Z",
        "nameEn": "370z",
        "slug": "370z",
        "image": "/newKey/nissan-370z-2010.jpg"
      },
      {
        "nameHe": "GT-R",
        "nameEn": "Gtr",
        "slug": "gtr",
        "image": "/newKey/nissan-gtr-2011.jpg"
      },
      {
        "nameHe": "NV200",
        "nameEn": "Nv200",
        "slug": "nv200",
        "image": "/newKey/nissan-nv200-2011.jpg"
      },
      {
        "nameHe": "ליף",
        "nameEn": "Leaf",
        "slug": "leaf",
        "image": "/newKey/nissan-leaf-2013.jpg"
      },
      {
        "nameHe": "370Z רודסטר",
        "nameEn": "370z-roadster",
        "slug": "370z-roadster",
        "image": "/newKey/nissan-370z-roadster-2010.jpg"
      },
      {
        "nameHe": "אלטימה",
        "nameEn": "Altima",
        "slug": "altima",
        "image": "/newKey/nissan-altima-2014.jpg"
      },
      {
        "nameHe": "מקסימה",
        "nameEn": "Maxima",
        "slug": "maxima",
        "image": "/newKey/nissan-maxima-2014.jpg"
      },
      {
        "nameHe": "קבסטאר",
        "nameEn": "Cabstar",
        "slug": "cabstar",
        "image": "/newKey/nissan-cabstar-2008.jpg"
      },
      {
        "nameHe": "סנטרה",
        "nameEn": "Sentra",
        "slug": "sentra",
        "image": "/newKey/nissan-sentra-new.jpg"
      }
    ]
  },
  {
    "slug": "nio",
    "names": {
      "he": "ניו",
      "en": "NIO",
      "es": "NIO"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "ET5",
        "nameEn": "Et5",
        "slug": "et5",
        "image": "/newKey/skywell-et5-new.jpg"
      },
      {
        "nameHe": "ET7",
        "nameEn": "Et7",
        "slug": "et7",
        "image": "/newKey/nio-et7-new.jpg"
      },
      {
        "nameHe": "EL7",
        "nameEn": "El7",
        "slug": "el7",
        "image": "/newKey/nio-el7-new.jpg"
      },
      {
        "nameHe": "EL6",
        "nameEn": "El6",
        "slug": "el6",
        "image": "/newKey/nio-el6-new.jpg"
      },
      {
        "nameHe": "EL8",
        "nameEn": "El8",
        "slug": "el8",
        "image": "/newKey/nio-el8-new.jpg"
      },
      {
        "nameHe": "ES8",
        "nameEn": "Es8",
        "slug": "es8",
        "image": "/newKey/nio-es8-new.jpg"
      }
    ]
  },
  {
    "slug": "mercedes",
    "names": {
      "he": "מרצדס",
      "en": "Mercedes-Benz",
      "es": "Mercedes-Benz"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "C קלאס",
        "nameEn": "C-class",
        "slug": "c-class",
        "image": "/newKey/mercedes-c-class-new.jpg"
      },
      {
        "nameHe": "E קלאס",
        "nameEn": "E-class",
        "slug": "e-class",
        "image": "/newKey/mercedes-e-class-2003.jpg"
      },
      {
        "nameHe": "S קלאס",
        "nameEn": "S-class",
        "slug": "s-class",
        "image": "/newKey/mercedes-s-class-new.jpg"
      },
      {
        "nameHe": "SL",
        "nameEn": "Sl",
        "slug": "sl",
        "image": "/newKey/mercedes-sl-new.jpg"
      },
      {
        "nameHe": "C קלאס קופה",
        "nameEn": "C-class-coupe",
        "slug": "c-class-coupe",
        "image": "/newKey/mercedes-c-class-coupe-2002.jpg"
      },
      {
        "nameHe": "CLS",
        "nameEn": "Cls",
        "slug": "cls",
        "image": "/newKey/mercedes-cls-2005.jpg"
      },
      {
        "nameHe": "ML",
        "nameEn": "Ml",
        "slug": "ml",
        "image": "/newKey/mercedes-ml-2008.jpg"
      },
      {
        "nameHe": "SLK",
        "nameEn": "Slk",
        "slug": "slk",
        "image": "/newKey/mercedes-slk-2005.jpg"
      },
      {
        "nameHe": "B קלאס",
        "nameEn": "B-class",
        "slug": "b-class",
        "image": "/newKey/mercedes-b-class-2008.jpg"
      },
      {
        "nameHe": "GL",
        "nameEn": "Gl",
        "slug": "gl",
        "image": "/newKey/mercedes-gl-2008.jpg"
      },
      {
        "nameHe": "GLK",
        "nameEn": "Glk",
        "slug": "glk",
        "image": "/newKey/mercedes-glk-2009.jpg"
      },
      {
        "nameHe": "S400 הייבריד",
        "nameEn": "S400-hybrid",
        "slug": "s400-hybrid",
        "image": "/newKey/mercedes-s400-hybrid-2010.jpg"
      },
      {
        "nameHe": "E קלאס קופה",
        "nameEn": "E-class-coupe",
        "slug": "e-class-coupe",
        "image": "/newKey/mercedes-e-class-coupe-2009.jpg"
      },
      {
        "nameHe": "CL",
        "nameEn": "Cl",
        "slug": "cl",
        "image": "/newKey/mercedes-cl-2007.jpg"
      },
      {
        "nameHe": "E קלאס קבריולה",
        "nameEn": "E-class-cabriolet",
        "slug": "e-class-cabriolet",
        "image": "/newKey/mercedes-e-class-cabriolet-2010.jpg"
      },
      {
        "nameHe": "R קלאס",
        "nameEn": "R-class",
        "slug": "r-class",
        "image": "/newKey/mercedes-r-class-2011.jpg"
      },
      {
        "nameHe": "C63 AMG",
        "nameEn": "C63-amg",
        "slug": "c63-amg",
        "image": "/newKey/mercedes-c63-amg-2008.jpg"
      },
      {
        "nameHe": "SLS",
        "nameEn": "Sls",
        "slug": "sls",
        "image": "/newKey/mercedes-sls-2010.jpg"
      },
      {
        "nameHe": "A קלאס",
        "nameEn": "A-class",
        "slug": "a-class",
        "image": "/newKey/mercedes-a-class-new.jpg"
      },
      {
        "nameHe": "CLA",
        "nameEn": "Cla",
        "slug": "cla",
        "image": "/newKey/mercedes-cla-new.jpg"
      },
      {
        "nameHe": "ספרינטר",
        "nameEn": "Sprinter",
        "slug": "sprinter",
        "image": "/newKey/mercedes-sprinter-new.jpg"
      },
      {
        "nameHe": "GLA",
        "nameEn": "Gla",
        "slug": "gla",
        "image": "/newKey/mercedes-gla-new.jpg"
      },
      {
        "nameHe": "GLC",
        "nameEn": "Glc",
        "slug": "glc",
        "image": "/newKey/mercedes-glc-new.jpg"
      },
      {
        "nameHe": "GLE",
        "nameEn": "Gle",
        "slug": "gle",
        "image": "/newKey/mercedes-gle-new.jpg"
      },
      {
        "nameHe": "GLE קופה",
        "nameEn": "Gle-coupe",
        "slug": "gle-coupe",
        "image": "/newKey/mercedes-gle-coupe-new.jpg"
      },
      {
        "nameHe": "S קלאס קופה",
        "nameEn": "S-class-coupe",
        "slug": "s-class-coupe",
        "image": "/newKey/mercedes-s-class-coupe-2015.jpg"
      },
      {
        "nameHe": "AMG GT",
        "nameEn": "Amg-gt",
        "slug": "amg-gt",
        "image": "/newKey/mercedes-amg-gt-2015.jpg"
      },
      {
        "nameHe": "GLS",
        "nameEn": "Gls",
        "slug": "gls",
        "image": "/newKey/mercedes-gls-new.jpg"
      },
      {
        "nameHe": "GLC קופה",
        "nameEn": "Glc-coupe",
        "slug": "glc-coupe",
        "image": "/newKey/mercedes-glc-coupe-new.jpg"
      },
      {
        "nameHe": "SLC",
        "nameEn": "Slc",
        "slug": "slc",
        "image": "/newKey/mercedes-slc-2017.jpg"
      },
      {
        "nameHe": "G קלאס",
        "nameEn": "G-class",
        "slug": "g-class",
        "image": "/newKey/mercedes-g-class-new.jpg"
      },
      {
        "nameHe": "A קלאס סדאן",
        "nameEn": "A-class-sedan",
        "slug": "a-class-sedan",
        "image": "/newKey/mercedes-a-class-sedan-2019.jpg"
      },
      {
        "nameHe": "GLB",
        "nameEn": "Glb",
        "slug": "glb",
        "image": "/newKey/mercedes-glb-2020.jpg"
      },
      {
        "nameHe": "EQA",
        "nameEn": "Eqa",
        "slug": "eqa",
        "image": "/newKey/mercedes-eqa-new.jpg"
      },
      {
        "nameHe": "EQC",
        "nameEn": "Eqc",
        "slug": "eqc",
        "image": "/newKey/mercedes-eqc-2021.jpg"
      },
      {
        "nameHe": "EQV",
        "nameEn": "Eqv",
        "slug": "eqv",
        "image": "/newKey/mercedes-eqv-new.jpg"
      },
      {
        "nameHe": "ויטו",
        "nameEn": "Vito",
        "slug": "vito",
        "image": "/newKey/mercedes-vito-new.jpg"
      },
      {
        "nameHe": "V קלאס",
        "nameEn": "V-class",
        "slug": "v-class",
        "image": "/newKey/mercedes-v-class-new.jpg"
      },
      {
        "nameHe": "EQE",
        "nameEn": "Eqe",
        "slug": "eqe",
        "image": "/newKey/mercedes-eqe-new.jpg"
      },
      {
        "nameHe": "EQB",
        "nameEn": "Eqb",
        "slug": "eqb",
        "image": "/newKey/mercedes-eqb-new.jpg"
      },
      {
        "nameHe": "EQS",
        "nameEn": "Eqs",
        "slug": "eqs",
        "image": "/newKey/mercedes-eqs-new.jpg"
      },
      {
        "nameHe": "EQS SUV",
        "nameEn": "Eqs-suv",
        "slug": "eqs-suv",
        "image": "/newKey/mercedes-eqs-suv-new.jpg"
      },
      {
        "nameHe": "EQE SUV",
        "nameEn": "Eqe-suv",
        "slug": "eqe-suv",
        "image": "/newKey/mercedes-eqe-suv-new.jpg"
      },
      {
        "nameHe": "CLE",
        "nameEn": "Cle",
        "slug": "cle",
        "image": "/newKey/mercedes-cle-new.jpg"
      }
    ]
  },
  {
    "slug": "maxus",
    "names": {
      "he": "מקסוס",
      "en": "Maxus",
      "es": "Maxus"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "E-יוניק 5",
        "nameEn": "E-uniq-5",
        "slug": "e-uniq-5",
        "image": "/newKey/maxus-e-uniq-5-new.jpg"
      },
      {
        "nameHe": "E-דליבר 3",
        "nameEn": "E-deliver-3",
        "slug": "e-deliver-3",
        "image": "/newKey/maxus-e-deliver-3-new.jpg"
      },
      {
        "nameHe": "E-יוניק 6",
        "nameEn": "Euniq-6",
        "slug": "euniq-6",
        "image": "/newKey/maxus-euniq-6-new.jpg"
      },
      {
        "nameHe": "V80",
        "nameEn": "V80",
        "slug": "v80",
        "image": "/newKey/maxus-v80-2021.jpg"
      },
      {
        "nameHe": "מיפה 7",
        "nameEn": "Mifa-7",
        "slug": "mifa-7",
        "image": "/newKey/maxus-mifa-7-new.jpg"
      },
      {
        "nameHe": "מיפה 9",
        "nameEn": "Mifa-9",
        "slug": "mifa-9",
        "image": "/newKey/maxus-mifa-9-new.jpg"
      },
      {
        "nameHe": "E-דליבר 5",
        "nameEn": "E-deliver-5",
        "slug": "e-deliver-5",
        "image": "/newKey/maxus-e-deliver-5-new.jpg"
      },
      {
        "nameHe": "E-דליבר 7",
        "nameEn": "E-deliver-7",
        "slug": "e-deliver-7",
        "image": "/newKey/maxus-e-deliver-7-new.jpg"
      },
      {
        "nameHe": "E-דליבר 9",
        "nameEn": "E-deliver-9",
        "slug": "e-deliver-9",
        "image": "/newKey/maxus-e-deliver-9-new.jpg"
      }
    ]
  },
  {
    "slug": "mitsubishi",
    "names": {
      "he": "מיצובישי",
      "en": "Mitsubishi",
      "es": "Mitsubishi"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "לאנסר",
        "nameEn": "Lancer",
        "slug": "lancer",
        "image": "/newKey/mitsubishi-lancer-2004.jpg"
      },
      {
        "nameHe": "לאנסר אבולושן",
        "nameEn": "Lancer-evolution",
        "slug": "lancer-evolution",
        "image": "/newKey/mitsubishi-lancer-evolution-2005.jpg"
      },
      {
        "nameHe": "אאוטלנדר",
        "nameEn": "Outlander",
        "slug": "outlander",
        "image": "/newKey/mitsubishi-outlander-2004.jpg"
      },
      {
        "nameHe": "כריזמה",
        "nameEn": "Carisma",
        "slug": "carisma",
        "image": "/newKey/mitsubishi-carisma-1998.jpg"
      },
      {
        "nameHe": "פאג'רו",
        "nameEn": "Pajero",
        "slug": "pajero",
        "image": "/newKey/mitsubishi-pajero-2001.jpg"
      },
      {
        "nameHe": "האנטר",
        "nameEn": "Hunter",
        "slug": "hunter",
        "image": "/newKey/mitsubishi-hunter-2007.jpg"
      },
      {
        "nameHe": "לאנסר ראליארט",
        "nameEn": "Lancer-raliart",
        "slug": "lancer-raliart",
        "image": "/newKey/mitsubishi-lancer-raliart-2009.jpg"
      },
      {
        "nameHe": "לאנסר ספורטבק",
        "nameEn": "Lancer-sportback",
        "slug": "lancer-sportback",
        "image": "/newKey/mitsubishi-lancer-sportback-2008.jpg"
      },
      {
        "nameHe": "גרנדיס",
        "nameEn": "Grandis",
        "slug": "grandis",
        "image": "/newKey/mitsubishi-grandis-2005.jpg"
      },
      {
        "nameHe": "ספייס סטאר",
        "nameEn": "Space-star",
        "slug": "space-star",
        "image": "/newKey/mitsubishi-space-star-2013.jpg"
      },
      {
        "nameHe": "אטראז'",
        "nameEn": "Attrage",
        "slug": "attrage",
        "image": "/newKey/mitsubishi-attrage-2014.jpg"
      },
      {
        "nameHe": "אאוטלנדר PHEV",
        "nameEn": "Outlander-phev",
        "slug": "outlander-phev",
        "image": "/newKey/mitsubishi-outlander-phev-2014.jpg"
      },
      {
        "nameHe": "טרייטון",
        "nameEn": "Triton",
        "slug": "triton",
        "image": "/newKey/mitsubishi-triton-2015.jpg"
      },
      {
        "nameHe": "ASX",
        "nameEn": "Asx",
        "slug": "asx",
        "image": "/newKey/mitsubishi-asx-new.jpg"
      },
      {
        "nameHe": "אקליפס קרוס",
        "nameEn": "Eclipse-cross",
        "slug": "eclipse-cross",
        "image": "/newKey/mitsubishi-eclipse-cross-new.jpg"
      }
    ]
  },
  {
    "slug": "mini",
    "names": {
      "he": "מיני",
      "en": "Mini",
      "es": "Mini"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "קופר",
        "nameEn": "Cooper",
        "slug": "cooper",
        "image": "/newKey/mini-cooper-new.jpg"
      },
      {
        "nameHe": "קופר קבריולה",
        "nameEn": "Cooper-cabriolet",
        "slug": "cooper-cabriolet",
        "image": "/newKey/mini-cooper-cabriolet-new.jpg"
      },
      {
        "nameHe": "קלאבמן",
        "nameEn": "Clubman",
        "slug": "clubman",
        "image": "/newKey/mini-clubman-2008.jpg"
      },
      {
        "nameHe": "קאנטרימן",
        "nameEn": "Countryman",
        "slug": "countryman",
        "image": "/newKey/mini-countryman-new.jpg"
      },
      {
        "nameHe": "קופה",
        "nameEn": "Coupe",
        "slug": "coupe",
        "image": "/newKey/mini-coupe-2012.jpg"
      },
      {
        "nameHe": "רודסטר",
        "nameEn": "Roadster",
        "slug": "roadster",
        "image": "/newKey/mini-roadster-2012.jpg"
      },
      {
        "nameHe": "פייסמן",
        "nameEn": "Paceman",
        "slug": "paceman",
        "image": "/newKey/mini-paceman-2013.jpg"
      },
      {
        "nameHe": "אייסמן",
        "nameEn": "Aceman",
        "slug": "aceman",
        "image": "/newKey/mini-aceman-new.jpg"
      }
    ]
  },
  {
    "slug": "maserati",
    "names": {
      "he": "מזראטי",
      "en": "Maserati",
      "es": "Maserati"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "גראן טוריסמו",
        "nameEn": "Granturismo",
        "slug": "granturismo",
        "image": "/newKey/maserati-granturismo-new.jpg"
      },
      {
        "nameHe": "קוואטרופורטה",
        "nameEn": "Quattroporte",
        "slug": "quattroporte",
        "image": "/newKey/maserati-quattroporte-2012.jpg"
      },
      {
        "nameHe": "גיבלי",
        "nameEn": "Ghibli",
        "slug": "ghibli",
        "image": "/newKey/maserati-ghibli-2013.jpg"
      },
      {
        "nameHe": "גראן קבריו",
        "nameEn": "Grancabrio",
        "slug": "grancabrio",
        "image": "/newKey/maserati-grancabrio-new.jpg"
      },
      {
        "nameHe": "לבנטה",
        "nameEn": "Levante",
        "slug": "levante",
        "image": "/newKey/maserati-levante-2017.jpg"
      },
      {
        "nameHe": "MC20",
        "nameEn": "Mc2",
        "slug": "mc2",
        "image": "/newKey/maserati-mc2-new.jpg"
      },
      {
        "nameHe": "גרקאלה",
        "nameEn": "Grecale",
        "slug": "grecale",
        "image": "/newKey/maserati-grecale-new.jpg"
      }
    ]
  },
  {
    "slug": "man",
    "names": {
      "he": "מאן",
      "en": "MAN",
      "es": "MAN"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "TGE",
        "nameEn": "Tge",
        "slug": "tge",
        "image": "/newKey/man-tge-new.jpg"
      }
    ]
  },
  {
    "slug": "mazda",
    "names": {
      "he": "מאזדה",
      "en": "Mazda",
      "es": "Mazda"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "3",
        "nameEn": "3",
        "slug": "3",
        "image": "/newKey/mg-3-new.jpg"
      },
      {
        "nameHe": "6",
        "nameEn": "6",
        "slug": "6",
        "image": "/newKey/mazda-6-2003.jpg"
      },
      {
        "nameHe": "MPV",
        "nameEn": "Mpv",
        "slug": "mpv",
        "image": "/newKey/mazda-mpv-2000.jpg"
      },
      {
        "nameHe": "323 לאנטיס",
        "nameEn": "323-lantis",
        "slug": "323-lantis",
        "image": "/newKey/mazda-323-lantis-1999.jpg"
      },
      {
        "nameHe": "BT50",
        "nameEn": "Bt50",
        "slug": "bt50",
        "image": "/newKey/mazda-bt50-2007.jpg"
      },
      {
        "nameHe": "2",
        "nameEn": "2",
        "slug": "2",
        "image": "/newKey/mazda-2-2008.jpg"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5",
        "image": "/newKey/jaecoo-5-new.jpg"
      },
      {
        "nameHe": "MX5",
        "nameEn": "Mx5",
        "slug": "mx5",
        "image": "/newKey/mazda-mx5-2006.jpg"
      },
      {
        "nameHe": "2 סדאן",
        "nameEn": "2-sedan",
        "slug": "2-sedan",
        "image": "/newKey/mazda-2-sedan-2010.jpg"
      },
      {
        "nameHe": "CX5",
        "nameEn": "Cx-5",
        "slug": "cx-5",
        "image": "/newKey/mazda-cx-5-new.jpg"
      },
      {
        "nameHe": "6 סטיישן",
        "nameEn": "6-station",
        "slug": "6-station",
        "image": "/newKey/mazda-6-station-2013.jpg"
      },
      {
        "nameHe": "דמיו",
        "nameEn": "Demio",
        "slug": "demio",
        "image": "/newKey/mazda-demio-2015.jpg"
      },
      {
        "nameHe": "CX3",
        "nameEn": "Cx3",
        "slug": "cx3",
        "image": "/newKey/mazda-cx3-new.jpg"
      },
      {
        "nameHe": "CX30",
        "nameEn": "Cx30",
        "slug": "cx30",
        "image": "/newKey/mazda-cx30-2020.jpg"
      },
      {
        "nameHe": "CX-90",
        "nameEn": "Cx90",
        "slug": "cx90",
        "image": "/newKey/mazda-cx90-new.jpg"
      }
    ]
  },
  {
    "slug": "lexus",
    "names": {
      "he": "לקסוס",
      "en": "Lexus",
      "es": "Lexus"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "RX350",
        "nameEn": "Rx350",
        "slug": "rx350",
        "image": "/newKey/lexus-rx350-2007.jpg"
      },
      {
        "nameHe": "SC430",
        "nameEn": "Sc430",
        "slug": "sc430",
        "image": "/newKey/lexus-sc430-2007.jpg"
      },
      {
        "nameHe": "RX450h",
        "nameEn": "Rx450h",
        "slug": "rx450h",
        "image": "/newKey/lexus-rx450h-2007.jpg"
      },
      {
        "nameHe": "IS250",
        "nameEn": "Is250",
        "slug": "is250",
        "image": "/newKey/lexus-is250-2007.jpg"
      },
      {
        "nameHe": "GS300",
        "nameEn": "Gs300",
        "slug": "gs300",
        "image": "/newKey/lexus-gs300-2007.jpg"
      },
      {
        "nameHe": "LS460",
        "nameEn": "Ls460",
        "slug": "ls460",
        "image": "/newKey/lexus-ls460-2007.jpg"
      },
      {
        "nameHe": "GS450h",
        "nameEn": "Gs450h",
        "slug": "gs450h",
        "image": "/newKey/lexus-gs450h-2008.jpg"
      },
      {
        "nameHe": "CT200h",
        "nameEn": "Ct200h",
        "slug": "ct200h",
        "image": "/newKey/lexus-ct200h-2011.jpg"
      },
      {
        "nameHe": "IS250 C",
        "nameEn": "Is250c",
        "slug": "is250c",
        "image": "/newKey/lexus-is250c-2009.jpg"
      },
      {
        "nameHe": "LS600h L",
        "nameEn": "Ls600h",
        "slug": "ls600h",
        "image": "/newKey/lexus-ls600h-2009.jpg"
      },
      {
        "nameHe": "GS250",
        "nameEn": "Gs250",
        "slug": "gs250",
        "image": "/newKey/lexus-gs250-2012.jpg"
      },
      {
        "nameHe": "IS300h",
        "nameEn": "Is300h",
        "slug": "is300h",
        "image": "/newKey/lexus-is300h-2013.jpg"
      },
      {
        "nameHe": "NX",
        "nameEn": "Nx",
        "slug": "nx",
        "image": "/newKey/lexus-nx-new.jpg"
      },
      {
        "nameHe": "GS300h",
        "nameEn": "Gs300h",
        "slug": "gs300h",
        "image": "/newKey/lexus-gs300h-2014.jpg"
      },
      {
        "nameHe": "RC-F",
        "nameEn": "Rcf",
        "slug": "rcf",
        "image": "/newKey/lexus-rcf-2015.jpg"
      },
      {
        "nameHe": "RC",
        "nameEn": "Rc",
        "slug": "rc",
        "image": "/newKey/lexus-rc-2016.jpg"
      },
      {
        "nameHe": "LS500",
        "nameEn": "Ls500",
        "slug": "ls500",
        "image": "/newKey/lexus-ls500-new.jpg"
      },
      {
        "nameHe": "RX200t",
        "nameEn": "Rx200t",
        "slug": "rx200t",
        "image": "/newKey/lexus-rx200t-2017.jpg"
      },
      {
        "nameHe": "LC",
        "nameEn": "Lc",
        "slug": "lc",
        "image": "/newKey/lexus-lc-2017.jpg"
      },
      {
        "nameHe": "ES",
        "nameEn": "Es",
        "slug": "es",
        "image": "/newKey/lexus-es-new.jpg"
      },
      {
        "nameHe": "UX",
        "nameEn": "Ux",
        "slug": "ux",
        "image": "/newKey/lexus-ux-new.jpg"
      },
      {
        "nameHe": "RX-L",
        "nameEn": "Rxl",
        "slug": "rxl",
        "image": "/newKey/lexus-rxl-2018.jpg"
      },
      {
        "nameHe": "RX",
        "nameEn": "Rx",
        "slug": "rx",
        "image": "/newKey/lexus-rx-new.jpg"
      },
      {
        "nameHe": "IS",
        "nameEn": "Is",
        "slug": "is",
        "image": "/newKey/lexus-is-new.jpg"
      },
      {
        "nameHe": "RZ",
        "nameEn": "Rz",
        "slug": "rz",
        "image": "/newKey/lexus-rz-new.jpg"
      },
      {
        "nameHe": "LM",
        "nameEn": "Lm",
        "slug": "lm",
        "image": "/newKey/lexus-lm-new.jpg"
      },
      {
        "nameHe": "LBX",
        "nameEn": "Lbx",
        "slug": "lbx",
        "image": "/newKey/lexus-lbx-new.jpg"
      },
      {
        "nameHe": "LX",
        "nameEn": "Lx",
        "slug": "lx",
        "image": "/newKey/lexus-lx-new.jpg"
      }
    ]
  },
  {
    "slug": "lancia",
    "names": {
      "he": "לנצ'יה",
      "en": "Lancia",
      "es": "Lancia"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "דלתא",
        "nameEn": "Delta",
        "slug": "delta",
        "image": "/newKey/lancia-delta-2010.jpg"
      },
      {
        "nameHe": "אפסילון",
        "nameEn": "Ypsilon",
        "slug": "ypsilon",
        "image": "/newKey/lancia-ypsilon-2011.jpg"
      }
    ]
  },
  {
    "slug": "land-rover",
    "names": {
      "he": "לנדרובר",
      "en": "Land Rover",
      "es": "Land Rover"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "דיסקברי",
        "nameEn": "Discovery",
        "slug": "discovery",
        "image": "/newKey/landrover-discovery-2005.jpg"
      },
      {
        "nameHe": "ריינג' רובר",
        "nameEn": "Rover-range-rover",
        "slug": "rover-range-rover",
        "image": "/newKey/land-rover-range-rover-new.jpg"
      },
      {
        "nameHe": "ריינג' רובר ספורט",
        "nameEn": "Rover-range-rover-sport",
        "slug": "rover-range-rover-sport",
        "image": "/newKey/land-rover-range-rover-sport-new.jpg"
      },
      {
        "nameHe": "דיפנדר",
        "nameEn": "Defender",
        "slug": "defender",
        "image": "/newKey/landrover-defender-new.jpg"
      },
      {
        "nameHe": "פרילנדר",
        "nameEn": "Freelander",
        "slug": "freelander",
        "image": "/newKey/landrover-freelander-2007.jpg"
      },
      {
        "nameHe": "ריינג' רובר איווק",
        "nameEn": "Range-rover",
        "slug": "range-rover",
        "image": "/newKey/landrover-range-rover-evoque.jpg"
      },
      {
        "nameHe": "דיסקברי ספורט",
        "nameEn": "Discovery",
        "slug": "discovery-2",
        "image": "/newKey/landrover-discovery-sport.jpg"
      },
      {
        "nameHe": "ריינג' רובר וולאר",
        "nameEn": "Range-rover-velar",
        "slug": "range-rover-velar",
        "image": "/newKey/landrover-range-rover-velar-new.jpg"
      }
    ]
  },
  {
    "slug": "leapmotor",
    "names": {
      "he": "ליפמוטור",
      "en": "Leapmotor",
      "es": "Leapmotor"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "T03",
        "nameEn": "T03",
        "slug": "t03",
        "image": "/newKey/leapmotor-t03-new.jpg"
      },
      {
        "nameHe": "C10",
        "nameEn": "Wall-c10",
        "slug": "wall-c10",
        "image": "/newKey/great-wall-c10-2013.jpg"
      }
    ]
  },
  {
    "slug": "lynk-co",
    "names": {
      "he": "לינק אנד קו",
      "en": "Lynk & Co",
      "es": "Lynk & Co"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "01",
        "nameEn": "And-co-01",
        "slug": "and-co-01",
        "image": "/newKey/lynk-and-co-01-new.jpg"
      },
      {
        "nameHe": "02",
        "nameEn": "And-co-02",
        "slug": "and-co-02",
        "image": "/newKey/lynk-and-co-02-new.jpg"
      }
    ]
  },
  {
    "slug": "hyundai",
    "names": {
      "he": "יונדאי",
      "en": "Hyundai",
      "es": "Hyundai"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "טוסון",
        "nameEn": "Tuscon",
        "slug": "tucson",
        "image": "/newKey/hyundai-tuscon-2005.jpg"
      },
      {
        "nameHe": "סנטה פה",
        "nameEn": "Santa-fe",
        "slug": "santa-fe",
        "image": "/newKey/hyundai-santa-fe-2007.jpg"
      },
      {
        "nameHe": "קופה",
        "nameEn": "קופה",
        "slug": "hyundai-3",
        "image": "/newKey/hyundai-hyundai-3-new.jpg"
      },
      {
        "nameHe": "מטריקס",
        "nameEn": "Matrix",
        "slug": "matrix",
        "image": "/newKey/hyundai-matrix-2008.jpg"
      },
      {
        "nameHe": "אקסנט",
        "nameEn": "Accent",
        "slug": "accent",
        "image": "/newKey/hyundai-accent-2000.jpg"
      },
      {
        "nameHe": "אלנטרה",
        "nameEn": "Elantra",
        "slug": "elantra",
        "image": "/newKey/hyundai-elantra-2001.jpg"
      },
      {
        "nameHe": "טרג'ט",
        "nameEn": "Trajet",
        "slug": "trajet",
        "image": "/newKey/hyundai-trajet-2001.jpg"
      },
      {
        "nameHe": "סונטה",
        "nameEn": "Sonata",
        "slug": "sonata",
        "image": "/newKey/hyundai-sonata-1999.jpg"
      },
      {
        "nameHe": "טראקאן",
        "nameEn": "טראקאן",
        "slug": "hyundai-9",
        "image": "/newKey/hyundai-hyundai-9-new.jpg"
      },
      {
        "nameHe": "i30",
        "nameEn": "I30",
        "slug": "i30",
        "image": "/newKey/hyundai-i30-2008.jpg"
      },
      {
        "nameHe": "i10",
        "nameEn": "I10",
        "slug": "i10",
        "image": "/newKey/hyundai-i10-2009.jpg"
      },
      {
        "nameHe": "i20",
        "nameEn": "I20",
        "slug": "i20",
        "image": "/newKey/hyundai-i20-2009.jpg"
      },
      {
        "nameHe": "i30 סטיישן CW",
        "nameEn": "I30cw",
        "slug": "i30cw",
        "image": "/newKey/hyundai-i30cw-2009.jpg"
      },
      {
        "nameHe": "גטס",
        "nameEn": "Getz",
        "slug": "getz",
        "image": "/newKey/hyundai-getz-2003.jpg"
      },
      {
        "nameHe": "i800",
        "nameEn": "I800",
        "slug": "i800",
        "image": "/newKey/hyundai-i800-2009.jpg"
      },
      {
        "nameHe": "ix35",
        "nameEn": "Ix35",
        "slug": "ix35",
        "image": "/newKey/hyundai-ix35-2010.jpg"
      },
      {
        "nameHe": "i25",
        "nameEn": "I25",
        "slug": "i25",
        "image": "/newKey/hyundai-i25-2011.jpg"
      },
      {
        "nameHe": "ולוסטר",
        "nameEn": "Veloster",
        "slug": "veloster",
        "image": "/newKey/hyundai-veloster-2011.jpg"
      },
      {
        "nameHe": "i35",
        "nameEn": "I35",
        "slug": "i35",
        "image": "/newKey/hyundai-i35-2011.jpg"
      },
      {
        "nameHe": "i40",
        "nameEn": "I40",
        "slug": "i40",
        "image": "/newKey/hyundai-i40-2012.jpg"
      },
      {
        "nameHe": "i40 סטיישן CW",
        "nameEn": "I40cw",
        "slug": "i40cw",
        "image": "/newKey/hyundai-i40cw-2012.jpg"
      },
      {
        "nameHe": "סונטה היברידית",
        "nameEn": "Sonata",
        "slug": "sonata-2",
        "image": "/newKey/hyundai-sonata-hybrid.jpg"
      },
      {
        "nameHe": "i20 קרוס",
        "nameEn": "I20-cross",
        "slug": "i20-cross",
        "image": "/newKey/hyundai-i20-cross-2016.jpg"
      },
      {
        "nameHe": "קונה",
        "nameEn": "Kona",
        "slug": "kona",
        "image": "/newKey/hyundai-kona-new.jpg"
      },
      {
        "nameHe": "איוניק",
        "nameEn": "Ioniq",
        "slug": "ioniq",
        "image": "/newKey/hyundai-ioniq-2017.jpg"
      },
      {
        "nameHe": "H350",
        "nameEn": "H350",
        "slug": "h350",
        "image": "/newKey/hyundai-h350-2017.jpg"
      },
      {
        "nameHe": "i30N",
        "nameEn": "I30n",
        "slug": "i30n",
        "image": "/newKey/hyundai-i30n-2019.jpg"
      },
      {
        "nameHe": "וניו",
        "nameEn": "Venue",
        "slug": "venue",
        "image": "/newKey/hyundai-venue-new.jpg"
      },
      {
        "nameHe": "איוניק 5",
        "nameEn": "Ioniq-5",
        "slug": "ioniq-5",
        "image": "/newKey/hyundai-ioniq-5-new.jpg"
      },
      {
        "nameHe": "פליסייד",
        "nameEn": "Palisade",
        "slug": "palisade",
        "image": "/newKey/hyundai-palisade-2021.jpg"
      },
      {
        "nameHe": "סטאריה",
        "nameEn": "Staria",
        "slug": "staria",
        "image": "/newKey/hyundai-staria-new.jpg"
      },
      {
        "nameHe": "באיון",
        "nameEn": "Bayon",
        "slug": "bayon",
        "image": "/newKey/hyundai-bayon-new.jpg"
      },
      {
        "nameHe": "איוניק 6",
        "nameEn": "Ioniq-6",
        "slug": "ioniq-6",
        "image": "/newKey/hyundai-ioniq-6-new.jpg"
      },
      {
        "nameHe": "i20N",
        "nameEn": "I20n",
        "slug": "i20n",
        "image": "/newKey/hyundai-i20n-new.jpg"
      },
      {
        "nameHe": "איוניק 5N",
        "nameEn": "Ioniq-5-n",
        "slug": "ioniq-5-n",
        "image": "/newKey/hyundai-ioniq-5-n-new.jpg"
      },
      {
        "nameHe": "אלנטרה N",
        "nameEn": "Elantra-n",
        "slug": "elantra-n",
        "image": "/newKey/hyundai-elantra-n-new.jpg"
      }
    ]
  },
  {
    "slug": "jaguar",
    "names": {
      "he": "יגואר",
      "en": "Jaguar",
      "es": "Jaguar"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "X-TYPE",
        "nameEn": "X-type",
        "slug": "x-type",
        "image": "/newKey/jaguar-x-type-2001.jpg"
      },
      {
        "nameHe": "S-TYPE",
        "nameEn": "S-type",
        "slug": "s-type",
        "image": "/newKey/jaguar-s-type-1999.jpg"
      },
      {
        "nameHe": "XJ",
        "nameEn": "Xj",
        "slug": "xj",
        "image": "/newKey/jaguar-xj-1995.jpg"
      },
      {
        "nameHe": "XK קופה",
        "nameEn": "Xk-coupe",
        "slug": "xk-coupe",
        "image": "/newKey/jaguar-xk-coupe-2006.jpg"
      },
      {
        "nameHe": "XF",
        "nameEn": "Xf",
        "slug": "xf",
        "image": "/newKey/jaguar-xf-2008.jpg"
      },
      {
        "nameHe": "XK קונברטיבל",
        "nameEn": "Xk-convertible",
        "slug": "xk-convertible",
        "image": "/newKey/jaguar-xk-convertible-2006.jpg"
      },
      {
        "nameHe": "F-Type",
        "nameEn": "F-type",
        "slug": "f-type",
        "image": "/newKey/jaguar-f-type-2013.jpg"
      },
      {
        "nameHe": "XE",
        "nameEn": "Xe",
        "slug": "xe",
        "image": "/newKey/jaguar-xe-2015.jpg"
      },
      {
        "nameHe": "F-Pace",
        "nameEn": "F-pace",
        "slug": "f-pace",
        "image": "/newKey/jaguar-f-pace-2017.jpg"
      },
      {
        "nameHe": "E-Pace",
        "nameEn": "E-pace",
        "slug": "e-pace",
        "image": "/newKey/jaguar-e-pace-2018.jpg"
      },
      {
        "nameHe": "I-Pace",
        "nameEn": "I-pace",
        "slug": "i-pace",
        "image": "/newKey/jaguar-i-pace-2018.jpg"
      }
    ]
  },
  {
    "slug": "tesla",
    "names": {
      "he": "טסלה",
      "en": "Tesla",
      "es": "Tesla"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "מודל 3",
        "nameEn": "Model-3",
        "slug": "model-3",
        "image": "/newKey/tesla-model-3-new.jpg"
      },
      {
        "nameHe": "מודל S",
        "nameEn": "Model-s",
        "slug": "model-s",
        "image": "/newKey/tesla-model-s-new.jpg"
      },
      {
        "nameHe": "מודל X",
        "nameEn": "Model-x",
        "slug": "model-x",
        "image": "/newKey/tesla-model-x-new.jpg"
      },
      {
        "nameHe": "מודל Y",
        "nameEn": "Model-y",
        "slug": "model-y",
        "image": "/newKey/tesla-model-y-new.jpg"
      }
    ]
  },
  {
    "slug": "toyota",
    "names": {
      "he": "טויוטה",
      "en": "Toyota",
      "es": "Toyota"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "פריוס",
        "nameEn": "Prius",
        "slug": "prius",
        "image": "/newKey/toyota-prius-2005.jpg"
      },
      {
        "nameHe": "אוונסיס",
        "nameEn": "Avensis",
        "slug": "avensis",
        "image": "/newKey/toyota-avensis-2004.jpg"
      },
      {
        "nameHe": "לנד קרוזר",
        "nameEn": "Land-cruiser",
        "slug": "land-cruiser",
        "image": "/newKey/toyota-land-cruiser-2003.jpg"
      },
      {
        "nameHe": "היילקס",
        "nameEn": "Hilux",
        "slug": "hilux",
        "image": "/newKey/toyota-hilux-new1.jpg"
      },
      {
        "nameHe": "לנד קרוזר V8",
        "nameEn": "Land-cruiser-v8",
        "slug": "land-cruiser-v8",
        "image": "/newKey/toyota-land-cruiser-v8-2008.jpg"
      },
      {
        "nameHe": "קורולה",
        "nameEn": "Corolla",
        "slug": "corolla",
        "image": "/newKey/toyota-corolla-2003.jpg"
      },
      {
        "nameHe": "יאריס",
        "nameEn": "Yaris",
        "slug": "yaris",
        "image": "/newKey/toyota-yaris-2000.jpg"
      },
      {
        "nameHe": "אוריס",
        "nameEn": "Auris",
        "slug": "auris",
        "image": "/newKey/toyota-auris-2008.jpg"
      },
      {
        "nameHe": "קאמרי",
        "nameEn": "Camry",
        "slug": "camry",
        "image": "/newKey/toyota-camry-2007.jpg"
      },
      {
        "nameHe": "ורסו",
        "nameEn": "Verso",
        "slug": "verso",
        "image": "/newKey/toyota-verso-2009.jpg"
      },
      {
        "nameHe": "אוונסיס סטיישן",
        "nameEn": "Avensis-station",
        "slug": "avensis-station",
        "image": "/newKey/toyota-avensis-station-2009.jpg"
      },
      {
        "nameHe": "ראב 4",
        "nameEn": "Rav4",
        "slug": "rav4",
        "image": "/newKey/toyota-rav4-2007.jpg"
      },
      {
        "nameHe": "ספייס ורסו",
        "nameEn": "Space-verso",
        "slug": "space-verso",
        "image": "/newKey/toyota-space-verso-2011.jpg"
      },
      {
        "nameHe": "אוריס היברידית",
        "nameEn": "Auris-hybrid",
        "slug": "auris-hybrid",
        "image": "/newKey/toyota-auris-hybrid-2011.jpg"
      },
      {
        "nameHe": "יאריס היברידית",
        "nameEn": "Yaris-hybrid",
        "slug": "yaris-hybrid",
        "image": "/newKey/toyota-yaris-hybrid-new.jpg"
      },
      {
        "nameHe": "אייגו",
        "nameEn": "Aygo",
        "slug": "aygo",
        "image": "/newKey/toyota-aygo-2012.jpg"
      },
      {
        "nameHe": "קאמרי הייבריד - יבוא אישי",
        "nameEn": "Camry-hybrid-import",
        "slug": "camry-hybrid-import",
        "image": "/newKey/toyota-camry-hybrid-import-2009.jpg"
      },
      {
        "nameHe": "קאמרי היברידית",
        "nameEn": "Camry",
        "slug": "camry-2",
        "image": "/newKey/toyota-camry-new.jpg"
      },
      {
        "nameHe": "פריוס +",
        "nameEn": "פריוס +",
        "slug": "toyota-19",
        "image": "/newKey/toyota-toyota-19-new.jpg"
      },
      {
        "nameHe": "GT86",
        "nameEn": "Gt86",
        "slug": "gt86",
        "image": "/newKey/toyota-gt86-2012.jpg"
      },
      {
        "nameHe": "היילנדר",
        "nameEn": "Highlander",
        "slug": "highlander",
        "image": "/newKey/toyota-highlander-new.jpg"
      },
      {
        "nameHe": "אוריס סטיישן",
        "nameEn": "Auris-station",
        "slug": "auris-station",
        "image": "/newKey/toyota-auris-station-2014.jpg"
      },
      {
        "nameHe": "סיינה",
        "nameEn": "Sienna",
        "slug": "sienna",
        "image": "/newKey/toyota-sienna-2014.jpg"
      },
      {
        "nameHe": "אבלון",
        "nameEn": "Avalon",
        "slug": "avalon",
        "image": "/newKey/toyota-avalon-2015.jpg"
      },
      {
        "nameHe": "ראב 4 היברידית",
        "nameEn": "Rav4-hybrid",
        "slug": "rav4-hybrid",
        "image": "/newKey/toyota-rav4-hybrid-new.jpg"
      },
      {
        "nameHe": "פרואייס",
        "nameEn": "Proace",
        "slug": "proace",
        "image": "/newKey/toyota-proace-new.jpg"
      },
      {
        "nameHe": "C-HR",
        "nameEn": "Chr",
        "slug": "chr",
        "image": "/newKey/toyota-chr-2017.jpg"
      },
      {
        "nameHe": "קורולה סטיישן",
        "nameEn": "Corolla-sw",
        "slug": "corolla-sw",
        "image": "/newKey/toyota-corolla-sw-new.jpg"
      },
      {
        "nameHe": "קורולה האצ'בק",
        "nameEn": "Corolla-hatchback",
        "slug": "corolla-hatchback",
        "image": "/newKey/toyota-corolla-hatchback-2019.jpg"
      },
      {
        "nameHe": "סיטי",
        "nameEn": "City",
        "slug": "city",
        "image": "/newKey/toyota-city-new.jpg"
      },
      {
        "nameHe": "יאריס קרוס",
        "nameEn": "Yaris-cross",
        "slug": "yaris-cross",
        "image": "/newKey/toyota-yaris-cross-new.jpg"
      },
      {
        "nameHe": "אייגו X",
        "nameEn": "Aygo-x",
        "slug": "aygo-x",
        "image": "/newKey/toyota-aygo-x-new.jpg"
      },
      {
        "nameHe": "קורולה קרוס",
        "nameEn": "Corolla-cross",
        "slug": "corolla-cross",
        "image": "/newKey/toyota-corolla-cross-new.jpg"
      },
      {
        "nameHe": "bZ4X",
        "nameEn": "Bz4x",
        "slug": "bz4x",
        "image": "/newKey/toyota-bz4x-new.jpg"
      }
    ]
  },
  {
    "slug": "zeekr",
    "names": {
      "he": "זיקר",
      "en": "Zeekr",
      "es": "Zeekr"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "X",
        "nameEn": "X",
        "slug": "x",
        "image": "/newKey/zeekr-x-new.jpg"
      },
      {
        "nameHe": "001",
        "nameEn": "001",
        "slug": "001",
        "image": "/newKey/zeekr-001-new.jpg"
      },
      {
        "nameHe": "7X",
        "nameEn": "7x",
        "slug": "7x",
        "image": "/newKey/zeekr-7x-new.jpg"
      }
    ]
  },
  {
    "slug": "volvo",
    "names": {
      "he": "וולוו",
      "en": "Volvo",
      "es": "Volvo"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "S60",
        "nameEn": "S60",
        "slug": "s60",
        "image": "/newKey/volvo-s60-2001.jpg"
      },
      {
        "nameHe": "XC90",
        "nameEn": "Xc90",
        "slug": "xc90",
        "image": "/newKey/volvo-xc90-new.jpg"
      },
      {
        "nameHe": "XC60",
        "nameEn": "Xc60",
        "slug": "xc60",
        "image": "/newKey/volvo-xc60-new.jpg"
      },
      {
        "nameHe": "S80",
        "nameEn": "S80",
        "slug": "s80",
        "image": "/newKey/volvo-s80-1999.jpg"
      },
      {
        "nameHe": "V50",
        "nameEn": "V50",
        "slug": "v50",
        "image": "/newKey/volvo-v50-2005.jpg"
      },
      {
        "nameHe": "V70",
        "nameEn": "V70",
        "slug": "v70",
        "image": "/newKey/volvo-v70-2008.jpg"
      },
      {
        "nameHe": "XC70",
        "nameEn": "Xc70",
        "slug": "xc70",
        "image": "/newKey/volvo-xc70-2008.jpg"
      },
      {
        "nameHe": "S40",
        "nameEn": "S40",
        "slug": "s40",
        "image": "/newKey/volvo-s40-2004.jpg"
      },
      {
        "nameHe": "C70",
        "nameEn": "C70",
        "slug": "c70",
        "image": "/newKey/volvo-c70-2007.jpg"
      },
      {
        "nameHe": "C30",
        "nameEn": "C30",
        "slug": "c30",
        "image": "/newKey/volvo-c30-2007.jpg"
      },
      {
        "nameHe": "V60",
        "nameEn": "V60",
        "slug": "v60",
        "image": "/newKey/volvo-v60-2011.jpg"
      },
      {
        "nameHe": "V40",
        "nameEn": "V40",
        "slug": "v40",
        "image": "/newKey/volvo-v40-2013.jpg"
      },
      {
        "nameHe": "V40 קרוס קאנטרי",
        "nameEn": "V40-cross-country",
        "slug": "v40-cross-country",
        "image": "/newKey/volvo-v40-cross-country-2013.jpg"
      },
      {
        "nameHe": "XC40",
        "nameEn": "Xc40",
        "slug": "xc40",
        "image": "/newKey/volvo-xc40-new.jpg"
      },
      {
        "nameHe": "S90",
        "nameEn": "S90",
        "slug": "s90",
        "image": "/newKey/volvo-s90-2017.jpg"
      },
      {
        "nameHe": "C40",
        "nameEn": "C40",
        "slug": "c40",
        "image": "/newKey/volvo-c40-new.jpg"
      },
      {
        "nameHe": "EX30",
        "nameEn": "Ex30",
        "slug": "ex30",
        "image": "/newKey/volvo-ex30-new.jpg"
      },
      {
        "nameHe": "EX90",
        "nameEn": "Ex90",
        "slug": "ex90",
        "image": "/newKey/volvo-ex90-new.jpg"
      }
    ]
  },
  {
    "slug": "voyah",
    "names": {
      "he": "וויה",
      "en": "Voyah",
      "es": "Voyah"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "פרי",
        "nameEn": "Free",
        "slug": "free",
        "image": "/newKey/voyah-free-new.jpg"
      },
      {
        "nameHe": "דרים",
        "nameEn": "Dream",
        "slug": "dream",
        "image": "/newKey/voyah-dream-new.jpg"
      },
      {
        "nameHe": "קארג'",
        "nameEn": "Courage",
        "slug": "courage",
        "image": "/newKey/voyah-courage-new.jpg"
      }
    ]
  },
  {
    "slug": "honda",
    "names": {
      "he": "הונדה",
      "en": "Honda",
      "es": "Honda"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "ג'אז",
        "nameEn": "Jazz",
        "slug": "jazz",
        "image": "/newKey/honda-jazz-2002.jpg"
      },
      {
        "nameHe": "סיוויק הצ'בק",
        "nameEn": "Civic-hatchback",
        "slug": "civic-hatchback",
        "image": "/newKey/honda-civic-hatchback-new.jpg"
      },
      {
        "nameHe": "FR-V",
        "nameEn": "Frv",
        "slug": "frv",
        "image": "/newKey/honda-frv-2007.jpg"
      },
      {
        "nameHe": "סיוויק סדאן",
        "nameEn": "Civic-sedan",
        "slug": "civic-sedan",
        "image": "/newKey/honda-civic-sedan-2001.jpg"
      },
      {
        "nameHe": "אקורד",
        "nameEn": "Accord",
        "slug": "accord",
        "image": "/newKey/honda-accord-2003.jpg"
      },
      {
        "nameHe": "HR-V",
        "nameEn": "Hrv",
        "slug": "hrv",
        "image": "/newKey/honda-hrv-1999.jpg"
      },
      {
        "nameHe": "CRV",
        "nameEn": "Crv",
        "slug": "crv",
        "image": "/newKey/honda-crv-2002.jpg"
      },
      {
        "nameHe": "סיוויק TYPE-R",
        "nameEn": "Civic-type-r",
        "slug": "civic-type-r",
        "image": "/newKey/honda-civic-type-r-2007.jpg"
      },
      {
        "nameHe": "לג'נד",
        "nameEn": "Legend",
        "slug": "legend",
        "image": "/newKey/honda-legend-2007.jpg"
      },
      {
        "nameHe": "S2000",
        "nameEn": "S2000",
        "slug": "s2000",
        "image": "/newKey/honda-s2000-2000.jpg"
      },
      {
        "nameHe": "סיוויק IMA היברידית",
        "nameEn": "Civic-ima-hybrid",
        "slug": "civic-ima-hybrid",
        "image": "/newKey/honda-civic-ima-hybrid-2006.jpg"
      },
      {
        "nameHe": "אקורד סטיישן",
        "nameEn": "Accord-station",
        "slug": "accord-station",
        "image": "/newKey/honda-accord-station-2008.jpg"
      },
      {
        "nameHe": "אינסייט",
        "nameEn": "Insight",
        "slug": "insight",
        "image": "/newKey/honda-insight-2009.jpg"
      },
      {
        "nameHe": "ג'אז היברידית",
        "nameEn": "Jazz-hybrid",
        "slug": "jazz-hybrid",
        "image": "/newKey/honda-jazz-hybrid-new.jpg"
      },
      {
        "nameHe": "CRZ",
        "nameEn": "Crz",
        "slug": "crz",
        "image": "/newKey/honda-crz-2010.jpg"
      },
      {
        "nameHe": "סיוויק סטיישן",
        "nameEn": "Civic-station",
        "slug": "civic-station",
        "image": "/newKey/honda-civic-station-2014.jpg"
      },
      {
        "nameHe": "אקורד היברידית",
        "nameEn": "Accord-hybrid",
        "slug": "accord-hybrid",
        "image": "/newKey/honda-accord-hybrid-2014.jpg"
      },
      {
        "nameHe": "סיוויק קופה",
        "nameEn": "Civic-coupe",
        "slug": "civic-coupe",
        "image": "/newKey/honda-civic-coupe-2015.jpg"
      },
      {
        "nameHe": "אודיסיי",
        "nameEn": "Odyssey",
        "slug": "odyssey",
        "image": "/newKey/honda-odyssey-2015.jpg"
      }
    ]
  },
  {
    "slug": "hongqi",
    "names": {
      "he": "הונגצ'י",
      "en": "Hongqi",
      "es": "Hongqi"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "E-HS9",
        "nameEn": "E-hs9",
        "slug": "e-hs9",
        "image": "/newKey/hongqi-e-hs9-new.jpg"
      },
      {
        "nameHe": "EH7",
        "nameEn": "Eh7",
        "slug": "eh7",
        "image": "/newKey/hongqi-eh7-new.jpg"
      },
      {
        "nameHe": "EHS7",
        "nameEn": "Ehs7",
        "slug": "ehs7",
        "image": "/newKey/hongqi-ehs7-new.jpg"
      }
    ]
  },
  {
    "slug": "hummer",
    "names": {
      "he": "האמר",
      "en": "Hummer",
      "es": "Hummer"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "H2",
        "nameEn": "H2",
        "slug": "h2",
        "image": "/newKey/hummer-h2-2006.jpg"
      },
      {
        "nameHe": "H3",
        "nameEn": "H3",
        "slug": "h3",
        "image": "/newKey/hummer-h3-2006.jpg"
      }
    ]
  },
  {
    "slug": "daihatsu",
    "names": {
      "he": "דייהטסו",
      "en": "Daihatsu",
      "es": "Daihatsu"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "מאטריה",
        "nameEn": "Materia",
        "slug": "materia",
        "image": "/newKey/daihatsu-materia-2007.jpg"
      },
      {
        "nameHe": "סיריון",
        "nameEn": "Sirion",
        "slug": "sirion",
        "image": "/newKey/daihatsu-sirion-1999.jpg"
      },
      {
        "nameHe": "טריוס",
        "nameEn": "Terios",
        "slug": "terios",
        "image": "/newKey/daihatsu-terios-1998.jpg"
      },
      {
        "nameHe": "YRV",
        "nameEn": "Yrv",
        "slug": "yrv",
        "image": "/newKey/daihatsu-yrv-2001.jpg"
      }
    ]
  },
  {
    "slug": "dongfeng",
    "names": {
      "he": "דונגפנג",
      "en": "Dongfeng",
      "es": "Dongfeng"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "M-Hero",
        "nameEn": "Mhero",
        "slug": "mhero",
        "image": "/newKey/dongfeng-mhero-new.jpg"
      },
      {
        "nameHe": "בוקס",
        "nameEn": "Box",
        "slug": "box",
        "image": "/newKey/dongfeng-box-new.jpg"
      }
    ]
  },
  {
    "slug": "dodge",
    "names": {
      "he": "דודג'",
      "en": "Dodge",
      "es": "Dodge"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "אוונג'ר",
        "nameEn": "Avenger",
        "slug": "avenger",
        "image": "/newKey/dodge-avenger-2008.jpg"
      },
      {
        "nameHe": "ג'רני",
        "nameEn": "Journey",
        "slug": "journey",
        "image": "/newKey/dodge-journey-2008.jpg"
      },
      {
        "nameHe": "נייטרו",
        "nameEn": "Nitro",
        "slug": "nitro",
        "image": "/newKey/dodge-nitro-2007.jpg"
      },
      {
        "nameHe": "קאליבר",
        "nameEn": "Caliber",
        "slug": "caliber",
        "image": "/newKey/dodge-caliber-2007.jpg"
      },
      {
        "nameHe": "ראם",
        "nameEn": "Ram",
        "slug": "ram",
        "image": "/newKey/dodge-ram-2010.jpg"
      }
    ]
  },
  {
    "slug": "dacia",
    "names": {
      "he": "דאצ'יה",
      "en": "Dacia",
      "es": "Dacia"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "סנדרו Stepway",
        "nameEn": "Sandero-stepway",
        "slug": "sandero-stepway",
        "image": "/newKey/dacia-sandero-stepway-new.jpg"
      },
      {
        "nameHe": "דאסטר",
        "nameEn": "Duster",
        "slug": "duster",
        "image": "/newKey/dacia-duster-new.jpg"
      },
      {
        "nameHe": "לודג'י",
        "nameEn": "Lodgy",
        "slug": "lodgy",
        "image": "/newKey/dacia-lodgy-2015.jpg"
      },
      {
        "nameHe": "דוקר",
        "nameEn": "Dokker",
        "slug": "dokker",
        "image": "/newKey/dacia-dokker-2015.jpg"
      },
      {
        "nameHe": "לוגאן",
        "nameEn": "Logan",
        "slug": "logan",
        "image": "/newKey/dacia-logan-new.jpg"
      },
      {
        "nameHe": "סנדרו",
        "nameEn": "Sandero",
        "slug": "sandero",
        "image": "/newKey/dacia-sandero-2016.jpg"
      },
      {
        "nameHe": "לוגאן MCV",
        "nameEn": "Logan-mcv",
        "slug": "logan-mcv",
        "image": "/newKey/dacia-logan-mcv-2016.jpg"
      },
      {
        "nameHe": "ג'וגר",
        "nameEn": "Jogger",
        "slug": "jogger",
        "image": "/newKey/dacia-jogger-new.jpg"
      },
      {
        "nameHe": "ביגסטר",
        "nameEn": "Bigster",
        "slug": "bigster",
        "image": "/newKey/dacia-bigster-new.jpg"
      }
    ]
  },
  {
    "slug": "great-wall",
    "names": {
      "he": "גרייט וול",
      "en": "Great Wall",
      "es": "Great Wall"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "סטיד",
        "nameEn": "Wall-steed",
        "slug": "wall-steed",
        "image": "/newKey/great-wall-steed-2011.jpg"
      },
      {
        "nameHe": "C10",
        "nameEn": "Wall-c10",
        "slug": "wall-c10",
        "image": "/newKey/great-wall-c10-2013.jpg"
      }
    ]
  },
  {
    "slug": "genesis",
    "names": {
      "he": "ג'נסיס",
      "en": "Genesis",
      "es": "Genesis"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "G80",
        "nameEn": "G80",
        "slug": "g80",
        "image": "/newKey/genesis-g80-new.jpg"
      },
      {
        "nameHe": "GV80",
        "nameEn": "Gv80",
        "slug": "gv80",
        "image": "/newKey/genesis-gv80-new.jpg"
      },
      {
        "nameHe": "GV70",
        "nameEn": "Gv70",
        "slug": "gv70",
        "image": "/newKey/genesis-gv70-new.jpg"
      },
      {
        "nameHe": "G90",
        "nameEn": "G90",
        "slug": "g90",
        "image": "/newKey/genesis-g90-2021.jpg"
      },
      {
        "nameHe": "G70",
        "nameEn": "G70",
        "slug": "g70",
        "image": "/newKey/genesis-g70-2021.jpg"
      },
      {
        "nameHe": "GV60",
        "nameEn": "Gv60",
        "slug": "gv60",
        "image": "/newKey/genesis-gv60-new.jpg"
      },
      {
        "nameHe": "GV80 קופה",
        "nameEn": "Gv80-coupe",
        "slug": "gv80-coupe",
        "image": "/newKey/genesis-gv80-coupe-new.jpg"
      }
    ]
  },
  {
    "slug": "jeep",
    "names": {
      "he": "ג'יפ",
      "en": "Jeep",
      "es": "Jeep"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "גרנד צ'רוקי",
        "nameEn": "Grand-cherokee",
        "slug": "grand-cherokee",
        "image": "/newKey/jeep-grand-cherokee-2005.jpg"
      },
      {
        "nameHe": "קומנדר",
        "nameEn": "Commander",
        "slug": "commander",
        "image": "/newKey/jeep-commander-2007.jpg"
      },
      {
        "nameHe": "רנגלר",
        "nameEn": "Wrangler",
        "slug": "wrangler",
        "image": "/newKey/jeep-wrangler-new.jpg"
      },
      {
        "nameHe": "קומפאס",
        "nameEn": "Compass",
        "slug": "compass",
        "image": "/newKey/jeep-compass-new.jpg"
      },
      {
        "nameHe": "פטריוט",
        "nameEn": "Patriot",
        "slug": "patriot",
        "image": "/newKey/jeep-patriot-2008.jpg"
      },
      {
        "nameHe": "צ'רוקי - ליברטי",
        "nameEn": "Cherokee-liberty",
        "slug": "cherokee-liberty",
        "image": "/newKey/jeep-cherokee-liberty-2008.jpg"
      },
      {
        "nameHe": "צ'ירוקי",
        "nameEn": "Cherokee",
        "slug": "cherokee",
        "image": "/newKey/jeep-cherokee-2014.jpg"
      },
      {
        "nameHe": "רנגייד",
        "nameEn": "Renegade",
        "slug": "renegade",
        "image": "/newKey/jeep-renegade-2016.jpg"
      },
      {
        "nameHe": "גלדיאטור",
        "nameEn": "Gladiator",
        "slug": "gladiator",
        "image": "/newKey/jeep-gladiator-new.jpg"
      },
      {
        "nameHe": "אוונג'ר",
        "nameEn": "Avenger",
        "slug": "avenger",
        "image": "/newKey/dodge-avenger-2008.jpg"
      }
    ]
  },
  {
    "slug": "geely",
    "names": {
      "he": "ג'ילי",
      "en": "Geely",
      "es": "Geely"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "גיאומטרי C",
        "nameEn": "Geometry-c",
        "slug": "geometry-c",
        "image": "/newKey/geely-geometry-c-new.jpg"
      },
      {
        "nameHe": "EX5",
        "nameEn": "Ex5",
        "slug": "ex5",
        "image": "/newKey/geely-ex5-new.jpg"
      }
    ]
  },
  {
    "slug": "jaecoo",
    "names": {
      "he": "ג'אקו",
      "en": "Jaecoo",
      "es": "Jaecoo"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "7",
        "nameEn": "7",
        "slug": "7",
        "image": "/newKey/jaecoo-7-new.jpg"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5",
        "image": "/newKey/jaecoo-5-new.jpg"
      }
    ]
  },
  {
    "slug": "bentley",
    "names": {
      "he": "בנטלי",
      "en": "Bentley",
      "es": "Bentley"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "קונטיננטל GT",
        "nameEn": "Continental",
        "slug": "continental",
        "image": "/newKey/bentley-continental-new.jpg"
      },
      {
        "nameHe": "פליינג ספור",
        "nameEn": "Flying-spur",
        "slug": "flying-spur",
        "image": "/newKey/bentley-flying-spur-new.jpg"
      },
      {
        "nameHe": "בנטאיגה",
        "nameEn": "Bentayga",
        "slug": "bentayga",
        "image": "/newKey/bentley-bentayga-new.jpg"
      },
      {
        "nameHe": "מולסאן",
        "nameEn": "Mulsanne",
        "slug": "mulsanne",
        "image": "/newKey/bentley-mulsanne-2019.jpg"
      }
    ]
  },
  {
    "slug": "buick",
    "names": {
      "he": "ביואיק",
      "en": "Buick",
      "es": "Buick"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "לה קרוס",
        "nameEn": "La-crosse",
        "slug": "la-crosse",
        "image": "/newKey/buick-la-crosse-2006.jpg"
      },
      {
        "nameHe": "לוצרן",
        "nameEn": "Lucerne",
        "slug": "lucerne",
        "image": "/newKey/buick-lucerne-2006.jpg"
      }
    ]
  },
  {
    "slug": "bmw",
    "names": {
      "he": "ב.מ.וו",
      "en": "BMW",
      "es": "BMW"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "סדרה 1",
        "nameEn": "1-series",
        "slug": "1-series",
        "image": "/newKey/bmw-1-series-2012.jpg"
      },
      {
        "nameHe": "סדרה 3",
        "nameEn": "3-series",
        "slug": "3-series",
        "image": "/newKey/bmw-3-series-new.jpg"
      },
      {
        "nameHe": "סדרה 5",
        "nameEn": "5-series",
        "slug": "5-series",
        "image": "/newKey/bmw-5-series-2004.jpg"
      },
      {
        "nameHe": "סדרה 7",
        "nameEn": "7-series",
        "slug": "7-series",
        "image": "/newKey/bmw-7-series-2003.jpg"
      },
      {
        "nameHe": "X3",
        "nameEn": "X3",
        "slug": "x3",
        "image": "/newKey/bmw-x3-new.jpg"
      },
      {
        "nameHe": "X5",
        "nameEn": "X5",
        "slug": "x5",
        "image": "/newKey/bmw-x5-new.jpg"
      },
      {
        "nameHe": "Z4",
        "nameEn": "Z4",
        "slug": "z4",
        "image": "/newKey/bmw-z4-2003.jpg"
      },
      {
        "nameHe": "X6",
        "nameEn": "X6",
        "slug": "x6",
        "image": "/newKey/bmw-x6-new.jpg"
      },
      {
        "nameHe": "X1",
        "nameEn": "X1",
        "slug": "x1",
        "image": "/newKey/bmw-x1-new.jpg"
      },
      {
        "nameHe": "סדרה 3 קופה",
        "nameEn": "3-series-coupe",
        "slug": "3-series-coupe",
        "image": "/newKey/bmw-3-series-coupe-2007.jpg"
      },
      {
        "nameHe": "סדרה 6 קופה",
        "nameEn": "6-series-coupe",
        "slug": "6-series-coupe",
        "image": "/newKey/bmw-6-series-coupe-2004.jpg"
      },
      {
        "nameHe": "סדרה 1 קבריולה",
        "nameEn": "1-series-cabriolet",
        "slug": "1-series-cabriolet",
        "image": "/newKey/bmw-1-series-cabriolet-2008.jpg"
      },
      {
        "nameHe": "סדרה 3 קבריולה",
        "nameEn": "3-series-cabriolet",
        "slug": "3-series-cabriolet",
        "image": "/newKey/bmw-3-series-cabriolet-2007.jpg"
      },
      {
        "nameHe": "M5",
        "nameEn": "M5",
        "slug": "m5",
        "image": "/newKey/seres-m5-new.jpg"
      },
      {
        "nameHe": "סדרה 6 קבריולה",
        "nameEn": "6-series-cabriolet",
        "slug": "6-series-cabriolet",
        "image": "/newKey/bmw-6-series-cabriolet-2005.jpg"
      },
      {
        "nameHe": "M1 קופה",
        "nameEn": "M1-coupe",
        "slug": "m1-coupe",
        "image": "/newKey/bmw-M1-coupe-2011.jpg"
      },
      {
        "nameHe": "סדרה 1 קופה",
        "nameEn": "1-series-coupe",
        "slug": "1-series-coupe",
        "image": "/newKey/bmw-1-series-coupe-2011.jpg"
      },
      {
        "nameHe": "סדרה 5 גראן טוריסמו",
        "nameEn": "5-series-gran-turismo",
        "slug": "5-series-gran-turismo",
        "image": "/newKey/bmw-5-series-gran-turismo-2010.jpg"
      },
      {
        "nameHe": "סדרה 6 גראן קופה",
        "nameEn": "6-series-gran-coupe",
        "slug": "6-series-gran-coupe",
        "image": "/newKey/bmw-6-series-gran-coupe-2012.jpg"
      },
      {
        "nameHe": "סדרה 4",
        "nameEn": "4-series",
        "slug": "4-series",
        "image": "/newKey/bmw-4-series-new.jpg"
      },
      {
        "nameHe": "סדרה 3 סטיישן",
        "nameEn": "3-series-station",
        "slug": "3-series-station",
        "image": "/newKey/bmw-3-series-station-2013.jpg"
      },
      {
        "nameHe": "סדרה 5 סטיישן",
        "nameEn": "5-series-station",
        "slug": "5-series-station",
        "image": "/newKey/bmw-5-series-station-2013.jpg"
      },
      {
        "nameHe": "M6",
        "nameEn": "M6",
        "slug": "m6",
        "image": "/newKey/bmw-m6-2013.jpg"
      },
      {
        "nameHe": "סדרה 2",
        "nameEn": "2-series",
        "slug": "2-series",
        "image": "/newKey/bmw-2-series-new.jpg"
      },
      {
        "nameHe": "סדרה 4 קבריולה",
        "nameEn": "4-series-cabriolet",
        "slug": "4-series-cabriolet",
        "image": "/newKey/bmw-4-series-cabriolet-new.jpg"
      },
      {
        "nameHe": "X4",
        "nameEn": "X4",
        "slug": "x4",
        "image": "/newKey/bmw-x4-new.jpg"
      },
      {
        "nameHe": "M3",
        "nameEn": "M3",
        "slug": "m3",
        "image": "/newKey/bmw-m3-new.jpg"
      },
      {
        "nameHe": "M4",
        "nameEn": "M4",
        "slug": "m4",
        "image": "/newKey/bmw-m4-new.jpg"
      },
      {
        "nameHe": "סדרה 3 גראן טוריסמו",
        "nameEn": "3-series-gran-turismo",
        "slug": "3-series-gran-turismo",
        "image": "/newKey/bmw-3-series-gran-turismo-2014.jpg"
      },
      {
        "nameHe": "סדרה 4 גראן קופה",
        "nameEn": "4-series-gran-coupe",
        "slug": "4-series-gran-coupe",
        "image": "/newKey/bmw-4-series-gran-coupe-2014.jpg"
      },
      {
        "nameHe": "M4 קבריולה",
        "nameEn": "M4-cabriolet",
        "slug": "m4-cabriolet",
        "image": "/newKey/bmw-m4-cabriolet-2014.jpg"
      },
      {
        "nameHe": "M2",
        "nameEn": "M2",
        "slug": "m2",
        "image": "/newKey/bmw-m2-new.jpg"
      },
      {
        "nameHe": "סדרה 2 קבריולה",
        "nameEn": "2-series-cabriolet",
        "slug": "2-series-cabriolet",
        "image": "/newKey/bmw-2-series-cabriolet-2015.jpg"
      },
      {
        "nameHe": "סדרה 2 גראן טורר",
        "nameEn": "2-series-gran-tourer",
        "slug": "2-series-gran-tourer",
        "image": "/newKey/bmw-2-series-gran-tourer-2016.jpg"
      },
      {
        "nameHe": "i3",
        "nameEn": "I3",
        "slug": "i3",
        "image": "/newKey/bmw-i3-2016.jpg"
      },
      {
        "nameHe": "i8",
        "nameEn": "I8",
        "slug": "i8",
        "image": "/newKey/bmw-i8-2016.jpg"
      },
      {
        "nameHe": "X2",
        "nameEn": "X2",
        "slug": "x2",
        "image": "/newKey/bmw-x2-new.jpg"
      },
      {
        "nameHe": "סדרה 8",
        "nameEn": "8-series",
        "slug": "8-series",
        "image": "/newKey/bmw-8-series-new.jpg"
      },
      {
        "nameHe": "X7",
        "nameEn": "X7",
        "slug": "x7",
        "image": "/newKey/bmw-x7-new.jpg"
      },
      {
        "nameHe": "סדרה 8 גראן קופה",
        "nameEn": "8-series-gran-coupe",
        "slug": "8-series-gran-coupe",
        "image": "/newKey/bmw-8-series-gran-coupe-new.jpg"
      },
      {
        "nameHe": "סדרה 2 גראן קופה",
        "nameEn": "2-series-gran-coupe",
        "slug": "2-series-gran-coupe",
        "image": "/newKey/bmw-2-series-gran-coupe-new.jpg"
      },
      {
        "nameHe": "M8",
        "nameEn": "M8",
        "slug": "m8",
        "image": "/newKey/bmw-m8-2020.jpg"
      },
      {
        "nameHe": "iX3",
        "nameEn": "Ix3",
        "slug": "ix3",
        "image": "/newKey/bmw-ix3-new.jpg"
      },
      {
        "nameHe": "iX",
        "nameEn": "Ix",
        "slug": "ix",
        "image": "/newKey/bmw-ix-new.jpg"
      },
      {
        "nameHe": "i4",
        "nameEn": "I4",
        "slug": "i4",
        "image": "/newKey/bmw-i4-new.jpg"
      },
      {
        "nameHe": "i7",
        "nameEn": "I7",
        "slug": "i7",
        "image": "/newKey/bmw-i7-new.jpg"
      },
      {
        "nameHe": "iX1",
        "nameEn": "Ix1",
        "slug": "ix1",
        "image": "/newKey/bmw-ix1-new.jpg"
      },
      {
        "nameHe": "XM",
        "nameEn": "Xm",
        "slug": "xm",
        "image": "/newKey/bmw-xm-new.jpg"
      },
      {
        "nameHe": "i5",
        "nameEn": "I5",
        "slug": "i5",
        "image": "/newKey/bmw-i5-new.jpg"
      },
      {
        "nameHe": "iX2",
        "nameEn": "Ix2",
        "slug": "ix2",
        "image": "/newKey/bmw-ix2-new.jpg"
      }
    ]
  },
  {
    "slug": "xpeng",
    "names": {
      "he": "אקספנג",
      "en": "XPENG",
      "es": "XPENG"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "P7",
        "nameEn": "P7",
        "slug": "p7",
        "image": "/newKey/xpeng-p7-new.jpg"
      },
      {
        "nameHe": "G9",
        "nameEn": "G9",
        "slug": "g9",
        "image": "/newKey/xpeng-g9-new.jpg"
      },
      {
        "nameHe": "G6",
        "nameEn": "G6",
        "slug": "g6",
        "image": "/newKey/xpeng-g6-new.jpg"
      }
    ]
  },
  {
    "slug": "aston-martin",
    "names": {
      "he": "אסטון מרטין",
      "en": "Aston Martin",
      "es": "Aston Martin"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "ונטאג'",
        "nameEn": "Martin-vantage",
        "slug": "martin-vantage",
        "image": "/newKey/aston-martin-vantage-new.jpg"
      },
      {
        "nameHe": "DB9",
        "nameEn": "Martin-db9",
        "slug": "martin-db9",
        "image": "/newKey/aston-martin-db9-2014.jpg"
      },
      {
        "nameHe": "ואנקוויש",
        "nameEn": "Martin-vanquish",
        "slug": "martin-vanquish",
        "image": "/newKey/aston-martin-vanquish-new.jpg"
      },
      {
        "nameHe": "ראפיד",
        "nameEn": "Martin-rapide",
        "slug": "martin-rapide",
        "image": "/newKey/aston-martin-rapide-2015.jpg"
      },
      {
        "nameHe": "DB11",
        "nameEn": "Martin-db11",
        "slug": "martin-db11",
        "image": "/newKey/aston-martin-db11-2017.jpg"
      },
      {
        "nameHe": "DBX",
        "nameEn": "Martin-dbx",
        "slug": "martin-dbx",
        "image": "/newKey/aston-martin-dbx-new.jpg"
      },
      {
        "nameHe": "DB12",
        "nameEn": "Martin-db12",
        "slug": "martin-db12",
        "image": "/newKey/aston-martin-db12-new.jpg"
      }
    ]
  },
  {
    "slug": "alpine",
    "names": {
      "he": "אלפין",
      "en": "Alpine",
      "es": "Alpine"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "A110",
        "nameEn": "A110",
        "slug": "a110",
        "image": "/newKey/alpine-a110-new.jpg"
      }
    ]
  },
  {
    "slug": "alfa-romeo",
    "names": {
      "he": "אלפא רומיאו",
      "en": "Alfa Romeo",
      "es": "Alfa Romeo"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "147",
        "nameEn": "Romeo-147",
        "slug": "romeo-147",
        "image": "/newKey/alfa-romeo-147-2002.jpg"
      },
      {
        "nameHe": "בררה",
        "nameEn": "Romeo-brera",
        "slug": "romeo-brera",
        "image": "/newKey/alfa-romeo-brera-2006.jpg"
      },
      {
        "nameHe": "156",
        "nameEn": "Romeo",
        "slug": "romeo",
        "image": "/logo/alfa-romeo.png"
      },
      {
        "nameHe": "GT",
        "nameEn": "Romeo-gt",
        "slug": "romeo-gt",
        "image": "/newKey/alfa-romeo-gt-2005.jpg"
      },
      {
        "nameHe": "ספיידר",
        "nameEn": "Romeo-spider",
        "slug": "romeo-spider",
        "image": "/newKey/alfa-romeo-spider-2007.jpg"
      },
      {
        "nameHe": "159 סטיישן",
        "nameEn": "Romeo-159-station",
        "slug": "romeo-159-station",
        "image": "/newKey/alfa-romeo-159-station-2007.jpg"
      },
      {
        "nameHe": "159",
        "nameEn": "Romeo-159",
        "slug": "romeo-159",
        "image": "/newKey/alfa-romeo-159-2007.jpg"
      },
      {
        "nameHe": "מיטו",
        "nameEn": "Romeo-mito",
        "slug": "romeo-mito",
        "image": "/newKey/alfa-romeo-mito-2009.jpg"
      },
      {
        "nameHe": "ג'ולייטה",
        "nameEn": "Romeo-giulietta",
        "slug": "romeo-giulietta",
        "image": "/newKey/alfa-romeo-giulietta-2010.jpg"
      },
      {
        "nameHe": "4c",
        "nameEn": "Romeo-4c",
        "slug": "romeo-4c",
        "image": "/newKey/alfa-romeo-4c-2014.jpg"
      },
      {
        "nameHe": "ג'וליה",
        "nameEn": "Romeo-giulia",
        "slug": "romeo-giulia",
        "image": "/newKey/alfa-romeo-giulia-new.jpg"
      },
      {
        "nameHe": "סטלביו",
        "nameEn": "Romeo-stelvio",
        "slug": "romeo-stelvio",
        "image": "/newKey/alfa-romeo-stelvio-new.jpg"
      },
      {
        "nameHe": "טונאלה",
        "nameEn": "Romeo-tonale",
        "slug": "romeo-tonale",
        "image": "/newKey/alfa-romeo-tonale-new.jpg"
      },
      {
        "nameHe": "ג'וניור",
        "nameEn": "Romeo-junior",
        "slug": "romeo-junior",
        "image": "/newKey/alfa-romeo-junior-new.jpg"
      }
    ]
  },
  {
    "slug": "isuzu",
    "names": {
      "he": "איסוזו",
      "en": "Isuzu",
      "es": "Isuzu"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "די מקס",
        "nameEn": "D-max",
        "slug": "d-max",
        "image": "/newKey/isuzu-d-max-new.jpg"
      }
    ]
  },
  {
    "slug": "infiniti",
    "names": {
      "he": "אינפיניטי",
      "en": "Infiniti",
      "es": "Infiniti"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "G37",
        "nameEn": "G37",
        "slug": "g37",
        "image": "/newKey/infiniti-g37-2009.jpg"
      },
      {
        "nameHe": "FX37",
        "nameEn": "Fx37",
        "slug": "fx37",
        "image": "/newKey/infiniti-fx37-2009.jpg"
      },
      {
        "nameHe": "EX",
        "nameEn": "Ex",
        "slug": "ex",
        "image": "/newKey/infiniti-ex-2009.jpg"
      },
      {
        "nameHe": "M37",
        "nameEn": "M37",
        "slug": "m37",
        "image": "/newKey/infiniti-m37-2010.jpg"
      },
      {
        "nameHe": "G37 קופה",
        "nameEn": "G37-coupe",
        "slug": "g37-coupe",
        "image": "/newKey/infiniti-g37-coupe-2008.jpg"
      },
      {
        "nameHe": "G37 קונברטיבל",
        "nameEn": "G37-convertible",
        "slug": "g37-convertible",
        "image": "/newKey/infiniti-g37-convertible-2009.jpg"
      },
      {
        "nameHe": "FX50",
        "nameEn": "Fx50",
        "slug": "fx50",
        "image": "/newKey/infiniti-fx50-2009.jpg"
      },
      {
        "nameHe": "FX30d",
        "nameEn": "Fx30d",
        "slug": "fx30d",
        "image": "/newKey/infiniti-fx30d-2010.jpg"
      },
      {
        "nameHe": "QX60",
        "nameEn": "Qx60",
        "slug": "qx60",
        "image": "/newKey/infiniti-qx60-new.jpg"
      },
      {
        "nameHe": "Q50",
        "nameEn": "Q50",
        "slug": "q50",
        "image": "/newKey/infiniti-q50-2014.jpg"
      },
      {
        "nameHe": "Q70",
        "nameEn": "Q70",
        "slug": "q70",
        "image": "/newKey/infiniti-q70-2014.jpg"
      },
      {
        "nameHe": "QX70",
        "nameEn": "Qx70",
        "slug": "qx70",
        "image": "/newKey/infiniti-qx70-2014.jpg"
      },
      {
        "nameHe": "QX50",
        "nameEn": "Qx50",
        "slug": "qx50",
        "image": "/newKey/infiniti-qx50-2014.jpg"
      },
      {
        "nameHe": "Q30",
        "nameEn": "Q30",
        "slug": "q30",
        "image": "/newKey/infiniti-q30-2017.jpg"
      },
      {
        "nameHe": "Q60",
        "nameEn": "Q60",
        "slug": "q60",
        "image": "/newKey/infiniti-q60-2017.jpg"
      },
      {
        "nameHe": "QX30",
        "nameEn": "Qx30",
        "slug": "qx30",
        "image": "/newKey/infiniti-qx30-2018.jpg"
      },
      {
        "nameHe": "QX55",
        "nameEn": "Qx55",
        "slug": "qx55",
        "image": "/newKey/infiniti-qx55-new.jpg"
      }
    ]
  },
  {
    "slug": "iveco",
    "names": {
      "he": "איווקו",
      "en": "Iveco",
      "es": "Iveco"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "דיילי",
        "nameEn": "Daily",
        "slug": "daily",
        "image": "/newKey/iveco-daily-new.jpg"
      }
    ]
  },
  {
    "slug": "aiways",
    "names": {
      "he": "איווייז",
      "en": "Aiways",
      "es": "Aiways"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "U5",
        "nameEn": "U5",
        "slug": "u5",
        "image": "/newKey/aiways-u5-new.jpg"
      },
      {
        "nameHe": "U6",
        "nameEn": "U6",
        "slug": "u6",
        "image": "/newKey/aiways-u6-new.jpg"
      }
    ]
  },
  {
    "slug": "ora",
    "names": {
      "he": "אורה",
      "en": "ORA",
      "es": "ORA"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "03",
        "nameEn": "Funky-cat",
        "slug": "funky-cat",
        "image": "/newKey/ora-funky-cat-new.jpg"
      },
      {
        "nameHe": "07",
        "nameEn": "07",
        "slug": "07",
        "image": "/newKey/ora-07-new.jpg"
      }
    ]
  },
  {
    "slug": "opel",
    "names": {
      "he": "אופל",
      "en": "Opel",
      "es": "Opel"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "קורסה",
        "nameEn": "Corsa",
        "slug": "corsa",
        "image": "/newKey/opel-corsa-new.jpg"
      },
      {
        "nameHe": "אסטרה",
        "nameEn": "Astra",
        "slug": "astra",
        "image": "/newKey/opel-astra-new.jpg"
      },
      {
        "nameHe": "וקטרה",
        "nameEn": "Vectra",
        "slug": "vectra",
        "image": "/newKey/opel-vectra-2003.jpg"
      },
      {
        "nameHe": "אינסיגניה",
        "nameEn": "Insignia",
        "slug": "insignia",
        "image": "/newKey/opel-insignia-2011.jpg"
      },
      {
        "nameHe": "אסטרה סטיישן",
        "nameEn": "Astra-station",
        "slug": "astra-station",
        "image": "/newKey/opel-astra-station-2011.jpg"
      },
      {
        "nameHe": "אינסיגניה סטיישן",
        "nameEn": "Insignia-station",
        "slug": "insignia-station",
        "image": "/newKey/opel-insignia-station-2011.jpg"
      },
      {
        "nameHe": "זאפירה",
        "nameEn": "Zafira",
        "slug": "zafira",
        "image": "/newKey/opel-zafira-2012.jpg"
      },
      {
        "nameHe": "אסטרה ברלינה",
        "nameEn": "Astra-berlina",
        "slug": "astra-berlina",
        "image": "/newKey/opel-astra-berlina-2012.jpg"
      },
      {
        "nameHe": "קורסה OPC",
        "nameEn": "Corsa-opc",
        "slug": "corsa-opc",
        "image": "/newKey/opel-corsa-opc-2012.jpg"
      },
      {
        "nameHe": "אסטרה GTC",
        "nameEn": "Astra-gtc",
        "slug": "astra-gtc",
        "image": "/newKey/opel-astra-gtc-2012.jpg"
      },
      {
        "nameHe": "אינסיגניה OPC",
        "nameEn": "Insignia-OPC",
        "slug": "insignia-opc",
        "image": "/newKey/opel-insignia-OPC-2011.jpg"
      },
      {
        "nameHe": "מוקה",
        "nameEn": "Mokka",
        "slug": "mokka",
        "image": "/newKey/opel-mokka-new.jpg"
      },
      {
        "nameHe": "אדם",
        "nameEn": "Adam",
        "slug": "adam",
        "image": "/newKey/opel-adam-2014.jpg"
      },
      {
        "nameHe": "מריבה",
        "nameEn": "Meriva",
        "slug": "meriva",
        "image": "/newKey/opel-meriva-2014.jpg"
      },
      {
        "nameHe": "קסקדה",
        "nameEn": "Cascada",
        "slug": "cascada",
        "image": "/newKey/opel-cascada-2014.jpg"
      },
      {
        "nameHe": "אדם רוקס",
        "nameEn": "Adam-rocks",
        "slug": "adam-rocks",
        "image": "/newKey/opel-adam-rocks-2015.jpg"
      },
      {
        "nameHe": "ויוארו ",
        "nameEn": "Vivaro",
        "slug": "vivaro",
        "image": "/newKey/opel-vivaro-2015.jpg"
      },
      {
        "nameHe": "גרנדלנד",
        "nameEn": "Grandland",
        "slug": "grandland",
        "image": "/newKey/opel-grandland-new.jpg"
      },
      {
        "nameHe": "קרוסלנד X",
        "nameEn": "Crossland",
        "slug": "crossland",
        "image": "/newKey/opel-crossland-2018.jpg"
      },
      {
        "nameHe": "גרנדלנד X",
        "nameEn": "Grandland-x",
        "slug": "grandland-x",
        "image": "/newKey/opel-grandland-x-2018.jpg"
      },
      {
        "nameHe": "קומבו",
        "nameEn": "Combo",
        "slug": "combo",
        "image": "/newKey/opel-combo-new.jpg"
      }
    ]
  },
  {
    "slug": "avatr",
    "names": {
      "he": "אווטאר",
      "en": "Avatr",
      "es": "Avatr"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "11",
        "nameEn": "11",
        "slug": "11",
        "image": "/newKey/avatr-11-new.jpg"
      }
    ]
  },
  {
    "slug": "audi",
    "names": {
      "he": "אודי",
      "en": "Audi",
      "es": "Audi"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "A3",
        "nameEn": "A3",
        "slug": "a3",
        "image": "/newKey/audi-a3-new.jpg"
      },
      {
        "nameHe": "A8",
        "nameEn": "A8",
        "slug": "a8",
        "image": "/newKey/audi-a8-new.jpg"
      },
      {
        "nameHe": "A6",
        "nameEn": "A6",
        "slug": "a6",
        "image": "/newKey/audi-a6-new.jpg"
      },
      {
        "nameHe": "RS6 - S6",
        "nameEn": "S6-rs6",
        "slug": "s6-rs6",
        "image": "/newKey/audi-s6-rs6-2007.jpg"
      },
      {
        "nameHe": "TT",
        "nameEn": "Tt",
        "slug": "tt",
        "image": "/newKey/audi-tt-new.jpg"
      },
      {
        "nameHe": "S8",
        "nameEn": "S8",
        "slug": "s8",
        "image": "/newKey/audi-s8-2007.jpg"
      },
      {
        "nameHe": "Q7",
        "nameEn": "Q7",
        "slug": "q7",
        "image": "/newKey/audi-q7-new.jpg"
      },
      {
        "nameHe": "S5",
        "nameEn": "S5",
        "slug": "s5",
        "image": "/newKey/audi-s5-new.jpg"
      },
      {
        "nameHe": "Q5",
        "nameEn": "Q5",
        "slug": "q5",
        "image": "/newKey/audi-q5-new.jpg"
      },
      {
        "nameHe": "TTS",
        "nameEn": "Tts",
        "slug": "tts",
        "image": "/newKey/audi-tts-new.jpg"
      },
      {
        "nameHe": "A4",
        "nameEn": "A4",
        "slug": "a4",
        "image": "/newKey/audi-a4-1995.jpg"
      },
      {
        "nameHe": "S3",
        "nameEn": "S3",
        "slug": "s3",
        "image": "/newKey/audi-s3-2007.jpg"
      },
      {
        "nameHe": "A5 קופה",
        "nameEn": "A5-coupe",
        "slug": "a5-coupe",
        "image": "/newKey/audi-a5-coupe-2008.jpg"
      },
      {
        "nameHe": "A3 קבריולה",
        "nameEn": "A3-cabriolet",
        "slug": "a3-cabriolet",
        "image": "/newKey/audi-a3-cabriolet-2008.jpg"
      },
      {
        "nameHe": "S4",
        "nameEn": "S4",
        "slug": "s4",
        "image": "/newKey/audi-s4-2009.jpg"
      },
      {
        "nameHe": "A5 ספורטבק",
        "nameEn": "A5-sportback",
        "slug": "a5-sportback",
        "image": "/newKey/audi-a5-sportback-2009.jpg"
      },
      {
        "nameHe": "S5 קבריולה",
        "nameEn": "S5-cabriolet",
        "slug": "s5-cabriolet",
        "image": "/newKey/audi-s5-cabriolet-2009.jpg"
      },
      {
        "nameHe": "A1",
        "nameEn": "A1",
        "slug": "a1",
        "image": "/newKey/audi-a1-new.jpg"
      },
      {
        "nameHe": "A7",
        "nameEn": "A7",
        "slug": "a7",
        "image": "/newKey/audi-a7-new.jpg"
      },
      {
        "nameHe": "Q3",
        "nameEn": "Q3",
        "slug": "q3",
        "image": "/newKey/audi-q3-new.jpg"
      },
      {
        "nameHe": "A5 קבריולה",
        "nameEn": "A5-cabriolet",
        "slug": "a5-cabriolet",
        "image": "/newKey/audi-a5-cabriolet-2009.jpg"
      },
      {
        "nameHe": "R8",
        "nameEn": "R8",
        "slug": "r8",
        "image": "/newKey/audi-r8-2008.jpg"
      },
      {
        "nameHe": "S7",
        "nameEn": "S7",
        "slug": "s7",
        "image": "/newKey/forthing-s7-new.jpg"
      },
      {
        "nameHe": "A3 סדאן",
        "nameEn": "A3-sedan",
        "slug": "a3-sedan",
        "image": "/newKey/audi-a3-sedan-new.jpg"
      },
      {
        "nameHe": "Q3 RS",
        "nameEn": "Q3-rs",
        "slug": "q3-rs",
        "image": "/newKey/audi-q3-rs-new.jpg"
      },
      {
        "nameHe": "SQ5",
        "nameEn": "Sq5",
        "slug": "sq5",
        "image": "/newKey/audi-sq5-new.jpg"
      },
      {
        "nameHe": "S1",
        "nameEn": "S1",
        "slug": "s1",
        "image": "/newKey/audi-s1-2014.jpg"
      },
      {
        "nameHe": "Q2",
        "nameEn": "Q2",
        "slug": "q2",
        "image": "/newKey/audi-q2-new.jpg"
      },
      {
        "nameHe": "SQ7",
        "nameEn": "Sq7",
        "slug": "sq7",
        "image": "/newKey/audi-sq7-2017.jpg"
      },
      {
        "nameHe": "Q8",
        "nameEn": "Q8",
        "slug": "q8",
        "image": "/newKey/audi-q8-new.jpg"
      },
      {
        "nameHe": "e-tron",
        "nameEn": "E-tron",
        "slug": "e-tron",
        "image": "/newKey/audi-e-tron-2019.jpg"
      },
      {
        "nameHe": "Q3 ספורטבק",
        "nameEn": "Q3-sportback",
        "slug": "q3-sportback",
        "image": "/newKey/audi-q3-sportback-new.jpg"
      },
      {
        "nameHe": "Q5 ספורטבק",
        "nameEn": "Q5-sportback",
        "slug": "q5-sportback",
        "image": "/newKey/audi-q5-sportback-new.jpg"
      },
      {
        "nameHe": "Q4 e-tron",
        "nameEn": "Q4-e-tron",
        "slug": "q4-e-tron",
        "image": "/newKey/audi-q4-e-tron-new.jpg"
      },
      {
        "nameHe": "Q4 e-tron ספורטבק",
        "nameEn": "Q4-e-tron-sportback",
        "slug": "q4-e-tron-sportback",
        "image": "/newKey/audi-q4-e-tron-sportback-new.jpg"
      },
      {
        "nameHe": "e-tron GT",
        "nameEn": "E-tron-gt",
        "slug": "e-tron-gt",
        "image": "/newKey/audi-e-tron-gt-new.jpg"
      },
      {
        "nameHe": "e-tron ספורטבק",
        "nameEn": "E-tron-sportback",
        "slug": "e-tron-sportback",
        "image": "/newKey/audi-e-tron-sportback-2021.jpg"
      },
      {
        "nameHe": "e-tron S",
        "nameEn": "E-tron-s",
        "slug": "e-tron-s",
        "image": "/newKey/audi-e-tron-s-new.jpg"
      },
      {
        "nameHe": "Q8 e-tron",
        "nameEn": "Q8-e-tron",
        "slug": "q8-e-tron",
        "image": "/newKey/audi-q8-e-tron-new.jpg"
      },
      {
        "nameHe": "Q8 e-tron ספורטבק",
        "nameEn": "Q8-e-tron-sportback",
        "slug": "q8-e-tron-sportback",
        "image": "/newKey/audi-q8-e-tron-sportback-new.jpg"
      },
      {
        "nameHe": "A5",
        "nameEn": "A5",
        "slug": "a5",
        "image": "/newKey/audi-a5-new.jpg"
      },
      {
        "nameHe": "Q6 e-tron",
        "nameEn": "Q6-e-tron",
        "slug": "q6-e-tron",
        "image": "/newKey/audi-q6-e-tron-new.jpg"
      },
      {
        "nameHe": "A6 e-tron",
        "nameEn": "A6-e-tron",
        "slug": "a6-e-tron",
        "image": "/newKey/audi-a6-e-tron-new.jpg"
      },
      {
        "nameHe": "S6 e-tron",
        "nameEn": "S6-e-tron",
        "slug": "s6-e-tron",
        "image": "/newKey/audi-s6-e-tron-new.jpg"
      },
      {
        "nameHe": "Q6 e-tron ספורטבק",
        "nameEn": "Q6-e-tron-sportback",
        "slug": "q6-e-tron-sportback",
        "image": "/newKey/audi-q6-e-tron-sportback-new.jpg"
      }
    ]
  },
  {
    "slug": "abarth",
    "names": {
      "he": "אבארט",
      "en": "Abarth",
      "es": "Abarth"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "500",
        "nameEn": "500e",
        "slug": "500e",
        "image": "/newKey/abarth-500e-new.jpg"
      },
      {
        "nameHe": "500 קבריולה",
        "nameEn": "500e-cabriolet",
        "slug": "500e-cabriolet",
        "image": "/newKey/abarth-500e-cabriolet-new.jpg"
      },
      {
        "nameHe": "פונטו איבו",
        "nameEn": "Punto-evo",
        "slug": "punto-evo",
        "image": "/newKey/abarth-punto-evo-2010.jpg"
      },
      {
        "nameHe": "124 ספיידר",
        "nameEn": "124-spider",
        "slug": "124-spider",
        "image": "/newKey/abarth-124-spider-2017.jpg"
      }
    ]
  },
  {
    "slug": "wey",
    "names": {
      "he": "WEY",
      "en": "WEY",
      "es": "WEY"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "קופי 01",
        "nameEn": "Coffee-01",
        "slug": "coffee-01",
        "image": "/newKey/wey-coffee-01-new.jpg"
      },
      {
        "nameHe": "קופי 02",
        "nameEn": "Coffee-02",
        "slug": "coffee-02",
        "image": "/newKey/wey-coffee-02-new.jpg"
      }
    ]
  },
  {
    "slug": "seres",
    "names": {
      "he": "SERES",
      "en": "SERES",
      "es": "SERES"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "3",
        "nameEn": "3",
        "slug": "3",
        "image": "/newKey/mg-3-new.jpg"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5",
        "image": "/newKey/jaecoo-5-new.jpg"
      },
      {
        "nameHe": "M5",
        "nameEn": "M5",
        "slug": "m5",
        "image": "/newKey/seres-m5-new.jpg"
      }
    ]
  },
  {
    "slug": "kgm",
    "names": {
      "he": "KGM",
      "en": "KGM",
      "es": "KGM"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "רקסטון",
        "nameEn": "Rexton",
        "slug": "rexton",
        "image": "/newKey/kgm-rexton-new.jpg"
      },
      {
        "nameHe": "מוסו",
        "nameEn": "Musso",
        "slug": "musso",
        "image": "/newKey/kgm-musso-new.jpg"
      },
      {
        "nameHe": "טורס",
        "nameEn": "Torres",
        "slug": "torres",
        "image": "/newKey/kgm-torres-new.jpg"
      },
      {
        "nameHe": "טיבולי",
        "nameEn": "Tivoli",
        "slug": "tivoli",
        "image": "/newKey/ssangyong-tivoli-2016.jpg"
      }
    ]
  },
  {
    "slug": "jac",
    "names": {
      "he": "JAC",
      "en": "JAC",
      "es": "JAC"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "30",
        "nameEn": "30",
        "slug": "30",
        "image": "/newKey/jac-30-new.jpg"
      },
      {
        "nameHe": "40",
        "nameEn": "40",
        "slug": "40",
        "image": "/newKey/jac-40-new.jpg"
      }
    ]
  },
  {
    "slug": "gac",
    "names": {
      "he": "GAC",
      "en": "GAC",
      "es": "GAC"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "GE3",
        "nameEn": "Ge3",
        "slug": "ge3",
        "image": "/newKey/GAC-ge3-2020.jpg"
      }
    ]
  },
  {
    "slug": "eveasy",
    "names": {
      "he": "EVEASY",
      "en": "Eveasy",
      "es": "Eveasy"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "לימו",
        "nameEn": "Limo",
        "slug": "limo",
        "image": "/newKey/eveasy-limo-new.jpg"
      }
    ]
  },
  {
    "slug": "ds",
    "names": {
      "he": "DS",
      "en": "DS Automobiles",
      "es": "DS Automobiles"
    },
    "popular": false,
    "models": [
      {
        "nameHe": "3",
        "nameEn": "3",
        "slug": "3",
        "image": "/newKey/mg-3-new.jpg"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5",
        "image": "/newKey/jaecoo-5-new.jpg"
      },
      {
        "nameHe": "7 קרוסבק",
        "nameEn": "DS7-crossback",
        "slug": "ds7-crossback",
        "image": "/newKey/DS-DS7-crossback-2018.jpg"
      },
      {
        "nameHe": "3 קרוסבק",
        "nameEn": "DS3-crossback",
        "slug": "ds3-crossback",
        "image": "/newKey/DS-DS3-crossback-2019.jpg"
      },
      {
        "nameHe": "4",
        "nameEn": "4",
        "slug": "4",
        "image": "/newKey/ds-4-new.jpg"
      },
      {
        "nameHe": "7",
        "nameEn": "7",
        "slug": "7",
        "image": "/newKey/jaecoo-7-new.jpg"
      }
    ]
  },
  {
    "slug": "byd",
    "names": {
      "he": "BYD",
      "en": "BYD",
      "es": "BYD"
    },
    "popular": true,
    "models": [
      {
        "nameHe": "אטו 3",
        "nameEn": "Atto3",
        "slug": "atto-3",
        "image": "/newKey/byd-atto3-new.jpg"
      },
      {
        "nameHe": "טאנג",
        "nameEn": "Tang",
        "slug": "tang",
        "image": "/newKey/byd-tang-new.jpg"
      },
      {
        "nameHe": "דולפין",
        "nameEn": "Dolphin",
        "slug": "dolphin",
        "image": "/newKey/byd-dolphin-new.jpg"
      },
      {
        "nameHe": "האן",
        "nameEn": "Han",
        "slug": "han",
        "image": "/newKey/byd-han-new.jpg"
      },
      {
        "nameHe": "סיל",
        "nameEn": "Seal",
        "slug": "seal",
        "image": "/newKey/byd-seal-new.jpg"
      },
      {
        "nameHe": "סיל U",
        "nameEn": "Seal-u",
        "slug": "seal-u",
        "image": "/newKey/byd-seal-u-new.jpg"
      },
      {
        "nameHe": "סיל 5",
        "nameEn": "Seal",
        "slug": "seal-2",
        "image": "/newKey/byd-seal-5.jpg"
      },
      {
        "nameHe": "דולפין סרף",
        "nameEn": "Dolphin-surf",
        "slug": "dolphin-surf",
        "image": "/newKey/byd-dolphin-surf-new.jpg"
      },
      {
        "nameHe": "סיליון 7",
        "nameEn": "Sealion-7",
        "slug": "sealion-7",
        "image": "/newKey/byd-sealion-7-new.jpg"
      }
    ]
  }
];

export function getAllBrands(): VehicleBrand[] {
  return vehicleBrands;
}

export function getPopularBrands(): VehicleBrand[] {
  return vehicleBrands.filter((b) => b.popular);
}

function normalizeStr(str: string): string {
  try {
    return decodeURIComponent(str).toLowerCase().trim().replace(/[\s_\-]+/g, '');
  } catch {
    return str.toLowerCase().trim().replace(/[\s_\-]+/g, '');
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
