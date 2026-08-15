import { Locale } from '@/lib/i18n';

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
        "nameEn": "אפיקה",
        "slug": "אפיקה"
      },
      {
        "nameHe": "טראוורס",
        "nameEn": "טראוורס",
        "slug": "טראוורס"
      },
      {
        "nameHe": "ויואנט",
        "nameEn": "ויואנט",
        "slug": "ויואנט"
      },
      {
        "nameHe": "מאליבו",
        "nameEn": "מאליבו",
        "slug": "מאליבו"
      },
      {
        "nameHe": "אפלנדר",
        "nameEn": "אפלנדר",
        "slug": "אפלנדר"
      },
      {
        "nameHe": "טריילבלייזר",
        "nameEn": "טריילבלייזר",
        "slug": "טריילבלייזר"
      },
      {
        "nameHe": "סילברדו",
        "nameEn": "סילברדו",
        "slug": "סילברדו"
      },
      {
        "nameHe": "קרוז",
        "nameEn": "קרוז",
        "slug": "קרוז"
      },
      {
        "nameHe": "קפטיבה",
        "nameEn": "קפטיבה",
        "slug": "קפטיבה"
      },
      {
        "nameHe": "אבאו 5",
        "nameEn": "אבאו 5",
        "slug": "אבאו-5"
      },
      {
        "nameHe": "אבאו סדאן",
        "nameEn": "אבאו סדאן",
        "slug": "אבאו-סדאן"
      },
      {
        "nameHe": "אופטרה",
        "nameEn": "אופטרה",
        "slug": "אופטרה"
      },
      {
        "nameHe": "ספארק",
        "nameEn": "ספארק",
        "slug": "ספארק"
      },
      {
        "nameHe": "סוניק",
        "nameEn": "סוניק",
        "slug": "סוניק"
      },
      {
        "nameHe": "סוניק סדאן",
        "nameEn": "סוניק סדאן",
        "slug": "סוניק-סדאן"
      },
      {
        "nameHe": "אורלנדו",
        "nameEn": "אורלנדו",
        "slug": "אורלנדו"
      },
      {
        "nameHe": "קפטיבה ספורט",
        "nameEn": "קפטיבה ספורט",
        "slug": "קפטיבה-ספורט"
      },
      {
        "nameHe": "טראקס",
        "nameEn": "טראקס",
        "slug": "טראקס"
      },
      {
        "nameHe": "סוואנה",
        "nameEn": "סוואנה",
        "slug": "סוואנה"
      },
      {
        "nameHe": "קרוז האצ'בק",
        "nameEn": "קרוז האצ'בק",
        "slug": "קרוז-האצבק"
      },
      {
        "nameHe": "קרוז סטיישן",
        "nameEn": "קרוז סטיישן",
        "slug": "קרוז-סטיישן"
      },
      {
        "nameHe": "אימפלה",
        "nameEn": "אימפלה",
        "slug": "אימפלה"
      },
      {
        "nameHe": "אקווינוקס",
        "nameEn": "אקווינוקס",
        "slug": "אקווינוקס"
      },
      {
        "nameHe": "קאמרו",
        "nameEn": "קאמרו",
        "slug": "קאמרו"
      },
      {
        "nameHe": "קאמרו קבריולה",
        "nameEn": "קאמרו קבריולה",
        "slug": "קאמרו-קבריולה"
      },
      {
        "nameHe": "בלייזר",
        "nameEn": "בלייזר",
        "slug": "בלייזר"
      },
      {
        "nameHe": "קורבט",
        "nameEn": "קורבט",
        "slug": "קורבט"
      },
      {
        "nameHe": "קולורדו",
        "nameEn": "קולורדו",
        "slug": "קולורדו"
      },
      {
        "nameHe": "סילברדו EV",
        "nameEn": "סילברדו EV",
        "slug": "סילברדו-ev"
      },
      {
        "nameHe": "טאהו",
        "nameEn": "טאהו",
        "slug": "טאהו"
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
        "nameEn": "מגאן ספורט",
        "slug": "מגאן-ספורט"
      },
      {
        "nameHe": "קליאו",
        "nameEn": "קליאו",
        "slug": "קליאו"
      },
      {
        "nameHe": "מגאן",
        "nameEn": "מגאן",
        "slug": "מגאן"
      },
      {
        "nameHe": "לגונה",
        "nameEn": "לגונה",
        "slug": "לגונה"
      },
      {
        "nameHe": "קנגו",
        "nameEn": "קנגו",
        "slug": "קנגו"
      },
      {
        "nameHe": "פלואנס",
        "nameEn": "פלואנס",
        "slug": "פלואנס"
      },
      {
        "nameHe": "קולאוס",
        "nameEn": "קולאוס",
        "slug": "קולאוס"
      },
      {
        "nameHe": "קליאו ספורט",
        "nameEn": "קליאו ספורט",
        "slug": "קליאו-ספורט"
      },
      {
        "nameHe": "לוגאן MCV",
        "nameEn": "לוגאן MCV",
        "slug": "לוגאן-mcv"
      },
      {
        "nameHe": "סימבול",
        "nameEn": "סימבול",
        "slug": "סימבול"
      },
      {
        "nameHe": "מגאן פלואנס",
        "nameEn": "מגאן פלואנס",
        "slug": "מגאן-פלואנס"
      },
      {
        "nameHe": "גרנד סניק",
        "nameEn": "גרנד סניק",
        "slug": "גרנד-סניק"
      },
      {
        "nameHe": "סניק",
        "nameEn": "סניק",
        "slug": "סניק"
      },
      {
        "nameHe": "מגאן קופה",
        "nameEn": "מגאן קופה",
        "slug": "מגאן-קופה"
      },
      {
        "nameHe": "פלואנס החשמלית",
        "nameEn": "פלואנס החשמלית",
        "slug": "פלואנס-החשמלית"
      },
      {
        "nameHe": "קפצ'ור",
        "nameEn": "קפצ'ור",
        "slug": "קפצור"
      },
      {
        "nameHe": "מאסטר",
        "nameEn": "מאסטר",
        "slug": "מאסטר"
      },
      {
        "nameHe": "מגאן סטיישן",
        "nameEn": "מגאן סטיישן",
        "slug": "מגאן-סטיישן"
      },
      {
        "nameHe": "לאטיטוד",
        "nameEn": "לאטיטוד",
        "slug": "לאטיטוד"
      },
      {
        "nameHe": "טראפיק",
        "nameEn": "טראפיק",
        "slug": "טראפיק"
      },
      {
        "nameHe": "קליאו סטיישן",
        "nameEn": "קליאו סטיישן",
        "slug": "קליאו-סטיישן"
      },
      {
        "nameHe": "קדג'אר",
        "nameEn": "קדג'אר",
        "slug": "קדגאר"
      },
      {
        "nameHe": "זואי",
        "nameEn": "זואי",
        "slug": "זואי"
      },
      {
        "nameHe": "טווינגו",
        "nameEn": "טווינגו",
        "slug": "טווינגו"
      },
      {
        "nameHe": "גרנד קופה",
        "nameEn": "גרנד קופה",
        "slug": "גרנד-קופה"
      },
      {
        "nameHe": "ארקנה",
        "nameEn": "ארקנה",
        "slug": "ארקנה"
      },
      {
        "nameHe": "אוסטרל",
        "nameEn": "אוסטרל",
        "slug": "אוסטרל"
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
        "slug": "2500"
      },
      {
        "nameHe": "3500",
        "nameEn": "3500",
        "slug": "3500"
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
        "nameEn": "PT קרוזר",
        "slug": "pt-קרוזר"
      },
      {
        "nameHe": "300C",
        "nameEn": "300C",
        "slug": "300c"
      },
      {
        "nameHe": "וויאג'ר",
        "nameEn": "וויאג'ר",
        "slug": "וויאגר"
      },
      {
        "nameHe": "קרוספייר",
        "nameEn": "קרוספייר",
        "slug": "קרוספייר"
      },
      {
        "nameHe": "סברינג",
        "nameEn": "סברינג",
        "slug": "סברינג"
      },
      {
        "nameHe": "גרנד וויאג'ר",
        "nameEn": "גרנד וויאג'ר",
        "slug": "גרנד-וויאגר"
      },
      {
        "nameHe": "פסיפיקה",
        "nameEn": "פסיפיקה",
        "slug": "פסיפיקה"
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
        "nameEn": "סראטו",
        "slug": "סראטו"
      },
      {
        "nameHe": "מג'נטיס",
        "nameEn": "מג'נטיס",
        "slug": "מגנטיס"
      },
      {
        "nameHe": "סורנטו",
        "nameEn": "סורנטו",
        "slug": "סורנטו"
      },
      {
        "nameHe": "ספורטז'",
        "nameEn": "ספורטז'",
        "slug": "ספורטז"
      },
      {
        "nameHe": "סיד סטיישן SW",
        "nameEn": "סיד סטיישן SW",
        "slug": "סיד-סטיישן-sw"
      },
      {
        "nameHe": "קרניבל",
        "nameEn": "קרניבל",
        "slug": "קרניבל"
      },
      {
        "nameHe": "פורטה",
        "nameEn": "פורטה",
        "slug": "פורטה"
      },
      {
        "nameHe": "סיד",
        "nameEn": "סיד",
        "slug": "סיד"
      },
      {
        "nameHe": "פרוסיד",
        "nameEn": "פרוסיד",
        "slug": "פרוסיד"
      },
      {
        "nameHe": "ריו",
        "nameEn": "ריו",
        "slug": "ריו"
      },
      {
        "nameHe": "קארנס",
        "nameEn": "קארנס",
        "slug": "קארנס"
      },
      {
        "nameHe": "פיקנטו",
        "nameEn": "פיקנטו",
        "slug": "פיקנטו"
      },
      {
        "nameHe": "סול",
        "nameEn": "סול",
        "slug": "סול"
      },
      {
        "nameHe": "אופטימה",
        "nameEn": "אופטימה",
        "slug": "אופטימה"
      },
      {
        "nameHe": "נירו",
        "nameEn": "נירו",
        "slug": "נירו"
      },
      {
        "nameHe": "סטוניק",
        "nameEn": "סטוניק",
        "slug": "סטוניק"
      },
      {
        "nameHe": "סטינגר",
        "nameEn": "סטינגר",
        "slug": "סטינגר"
      },
      {
        "nameHe": "סלטוס",
        "nameEn": "סלטוס",
        "slug": "סלטוס"
      },
      {
        "nameHe": "אקסיד",
        "nameEn": "אקסיד",
        "slug": "אקסיד"
      },
      {
        "nameHe": "K2500",
        "nameEn": "K2500",
        "slug": "k2500"
      },
      {
        "nameHe": "נירו פלוס",
        "nameEn": "נירו פלוס",
        "slug": "נירו-פלוס"
      },
      {
        "nameHe": "EV6",
        "nameEn": "EV6",
        "slug": "ev6"
      },
      {
        "nameHe": "EV9",
        "nameEn": "EV9",
        "slug": "ev9"
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
        "nameEn": "אטקה",
        "slug": "אטקה"
      },
      {
        "nameHe": "לאון",
        "nameEn": "לאון",
        "slug": "לאון"
      },
      {
        "nameHe": "פורמנטור",
        "nameEn": "פורמנטור",
        "slug": "פורמנטור"
      },
      {
        "nameHe": "טווסקאן",
        "nameEn": "טווסקאן",
        "slug": "טווסקאן"
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
        "nameEn": "STS",
        "slug": "sts"
      },
      {
        "nameHe": "SRX",
        "nameEn": "SRX",
        "slug": "srx"
      },
      {
        "nameHe": "CTS",
        "nameEn": "CTS",
        "slug": "cts"
      },
      {
        "nameHe": "CTS-V",
        "nameEn": "CTS-V",
        "slug": "cts-v"
      },
      {
        "nameHe": "CTS קופה",
        "nameEn": "CTS קופה",
        "slug": "cts-קופה"
      },
      {
        "nameHe": "CTS-V קופה",
        "nameEn": "CTS-V קופה",
        "slug": "cts-v-קופה"
      },
      {
        "nameHe": "ATS",
        "nameEn": "ATS",
        "slug": "ats"
      },
      {
        "nameHe": "ATS-V",
        "nameEn": "ATS-V",
        "slug": "ats-v"
      },
      {
        "nameHe": "CT6",
        "nameEn": "CT6",
        "slug": "ct6"
      },
      {
        "nameHe": "XT5",
        "nameEn": "XT5",
        "slug": "xt5"
      },
      {
        "nameHe": "אסקלייד",
        "nameEn": "אסקלייד",
        "slug": "אסקלייד"
      },
      {
        "nameHe": "XT4",
        "nameEn": "XT4",
        "slug": "xt4"
      },
      {
        "nameHe": "XT6",
        "nameEn": "XT6",
        "slug": "xt6"
      },
      {
        "nameHe": "CT5",
        "nameEn": "CT5",
        "slug": "ct5"
      },
      {
        "nameHe": "ליריק",
        "nameEn": "ליריק",
        "slug": "ליריק"
      },
      {
        "nameHe": "אופטיק",
        "nameEn": "אופטיק",
        "slug": "אופטיק"
      },
      {
        "nameHe": "אסקלייד IQ",
        "nameEn": "אסקלייד IQ",
        "slug": "אסקלייד-iq"
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
        "nameEn": "FX",
        "slug": "fx"
      },
      {
        "nameHe": "טיגו 7 פרו",
        "nameEn": "טיגו 7 פרו",
        "slug": "טיגו-7-פרו"
      },
      {
        "nameHe": "טיגו 8 פרו",
        "nameEn": "טיגו 8 פרו",
        "slug": "טיגו-8-פרו"
      },
      {
        "nameHe": "אריזו 8",
        "nameEn": "אריזו 8",
        "slug": "אריזו-8"
      },
      {
        "nameHe": "טיגו 4 פרו",
        "nameEn": "טיגו 4 פרו",
        "slug": "טיגו-4-פרו"
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
        "nameEn": "דיפאל S07",
        "slug": "דיפאל-s07"
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
        "nameEn": "קליפורניה",
        "slug": "קליפורניה"
      },
      {
        "nameHe": "458 איטליה",
        "nameEn": "458 איטליה",
        "slug": "458-איטליה"
      },
      {
        "nameHe": "458 ספיידר",
        "nameEn": "458 ספיידר",
        "slug": "458-ספיידר"
      },
      {
        "nameHe": "FF",
        "nameEn": "FF",
        "slug": "ff"
      },
      {
        "nameHe": "F12 ברלינטה",
        "nameEn": "F12 ברלינטה",
        "slug": "f12-ברלינטה"
      },
      {
        "nameHe": "פורטופינו",
        "nameEn": "פורטופינו",
        "slug": "פורטופינו"
      },
      {
        "nameHe": "488",
        "nameEn": "488",
        "slug": "488"
      },
      {
        "nameHe": "GTC4Lusso",
        "nameEn": "GTC4Lusso",
        "slug": "gtc4lusso"
      },
      {
        "nameHe": "812 סופרפאסט",
        "nameEn": "812 סופרפאסט",
        "slug": "812-סופרפאסט"
      },
      {
        "nameHe": "רומא",
        "nameEn": "רומא",
        "slug": "רומא"
      },
      {
        "nameHe": "F8",
        "nameEn": "F8",
        "slug": "f8"
      },
      {
        "nameHe": "296",
        "nameEn": "296",
        "slug": "296"
      },
      {
        "nameHe": "פורוסאנגווה",
        "nameEn": "פורוסאנגווה",
        "slug": "פורוסאנגווה"
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
        "slug": "607"
      },
      {
        "nameHe": "307CC",
        "nameEn": "307CC",
        "slug": "307cc"
      },
      {
        "nameHe": "407 קופה",
        "nameEn": "407 קופה",
        "slug": "407-קופה"
      },
      {
        "nameHe": "307SW",
        "nameEn": "307SW",
        "slug": "307sw"
      },
      {
        "nameHe": "3008",
        "nameEn": "3008",
        "slug": "3008"
      },
      {
        "nameHe": "406",
        "nameEn": "406",
        "slug": "406"
      },
      {
        "nameHe": "207 GTI",
        "nameEn": "207 GTI",
        "slug": "207-gti"
      },
      {
        "nameHe": "308",
        "nameEn": "308",
        "slug": "308"
      },
      {
        "nameHe": "308 SW",
        "nameEn": "308 SW",
        "slug": "308-sw"
      },
      {
        "nameHe": "107",
        "nameEn": "107",
        "slug": "107"
      },
      {
        "nameHe": "פרטנר",
        "nameEn": "פרטנר",
        "slug": "פרטנר"
      },
      {
        "nameHe": "207",
        "nameEn": "207",
        "slug": "207"
      },
      {
        "nameHe": "5008",
        "nameEn": "5008",
        "slug": "5008"
      },
      {
        "nameHe": "407",
        "nameEn": "407",
        "slug": "407"
      },
      {
        "nameHe": "307",
        "nameEn": "307",
        "slug": "307"
      },
      {
        "nameHe": "206",
        "nameEn": "206",
        "slug": "206"
      },
      {
        "nameHe": "508",
        "nameEn": "508",
        "slug": "508"
      },
      {
        "nameHe": "308CC",
        "nameEn": "308CC",
        "slug": "308cc"
      },
      {
        "nameHe": "206+",
        "nameEn": "206+",
        "slug": "206"
      },
      {
        "nameHe": "RCZ",
        "nameEn": "RCZ",
        "slug": "rcz"
      },
      {
        "nameHe": "207CC",
        "nameEn": "207CC",
        "slug": "207cc"
      },
      {
        "nameHe": "208",
        "nameEn": "208",
        "slug": "208"
      },
      {
        "nameHe": "508 סטיישן SW",
        "nameEn": "508 סטיישן SW",
        "slug": "508-סטיישן-sw"
      },
      {
        "nameHe": "ביפר",
        "nameEn": "ביפר",
        "slug": "ביפר"
      },
      {
        "nameHe": "2008",
        "nameEn": "2008",
        "slug": "2008"
      },
      {
        "nameHe": "בוקסר",
        "nameEn": "בוקסר",
        "slug": "בוקסר"
      },
      {
        "nameHe": "301",
        "nameEn": "301",
        "slug": "301"
      },
      {
        "nameHe": "208 GTI",
        "nameEn": "208 GTI",
        "slug": "208-gti"
      },
      {
        "nameHe": "108",
        "nameEn": "108",
        "slug": "108"
      },
      {
        "nameHe": "308 GTI",
        "nameEn": "308 GTI",
        "slug": "308-gti"
      },
      {
        "nameHe": "408",
        "nameEn": "408",
        "slug": "408"
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
        "nameEn": "500 קבריולה",
        "slug": "500-קבריולה"
      },
      {
        "nameHe": "מולטיפלה",
        "nameEn": "מולטיפלה",
        "slug": "מולטיפלה"
      },
      {
        "nameHe": "דובלו",
        "nameEn": "דובלו",
        "slug": "דובלו"
      },
      {
        "nameHe": "פנדה 4X4",
        "nameEn": "פנדה 4X4",
        "slug": "פנדה-4x4"
      },
      {
        "nameHe": "500",
        "nameEn": "500",
        "slug": "500"
      },
      {
        "nameHe": "פונטו",
        "nameEn": "פונטו",
        "slug": "פונטו"
      },
      {
        "nameHe": "פיורינו",
        "nameEn": "פיורינו",
        "slug": "פיורינו"
      },
      {
        "nameHe": "כרומה",
        "nameEn": "כרומה",
        "slug": "כרומה"
      },
      {
        "nameHe": "בראבו",
        "nameEn": "בראבו",
        "slug": "בראבו"
      },
      {
        "nameHe": "גרנדה פונטו",
        "nameEn": "גרנדה פונטו",
        "slug": "גרנדה-פונטו"
      },
      {
        "nameHe": "פנדה",
        "nameEn": "פנדה",
        "slug": "פנדה"
      },
      {
        "nameHe": "פונטו איבו",
        "nameEn": "פונטו איבו",
        "slug": "פונטו-איבו"
      },
      {
        "nameHe": "סדיצ'י",
        "nameEn": "סדיצ'י",
        "slug": "סדיצי"
      },
      {
        "nameHe": "קובו",
        "nameEn": "קובו",
        "slug": "קובו"
      },
      {
        "nameHe": "דוקטו",
        "nameEn": "דוקטו",
        "slug": "דוקטו"
      },
      {
        "nameHe": "500L",
        "nameEn": "500L",
        "slug": "500l"
      },
      {
        "nameHe": "500L ליווינג",
        "nameEn": "500L ליווינג",
        "slug": "500l-ליווינג"
      },
      {
        "nameHe": "500X",
        "nameEn": "500X",
        "slug": "500x"
      },
      {
        "nameHe": "טיפו",
        "nameEn": "טיפו",
        "slug": "טיפו"
      },
      {
        "nameHe": "פולבאק",
        "nameEn": "פולבאק",
        "slug": "פולבאק"
      },
      {
        "nameHe": "טיפו האצ'בק",
        "nameEn": "טיפו האצ'בק",
        "slug": "טיפו-האצבק"
      },
      {
        "nameHe": "טיפו סטיישן",
        "nameEn": "טיפו סטיישן",
        "slug": "טיפו-סטיישן"
      },
      {
        "nameHe": "סקודו",
        "nameEn": "סקודו",
        "slug": "סקודו"
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
        "nameEn": "פריידיי",
        "slug": "פריידיי"
      },
      {
        "nameHe": "S7",
        "nameEn": "S7",
        "slug": "s7"
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
        "nameEn": "911 קבריולה",
        "slug": "911-קבריולה"
      },
      {
        "nameHe": "בוקסטר",
        "nameEn": "בוקסטר",
        "slug": "בוקסטר"
      },
      {
        "nameHe": "קאיימן",
        "nameEn": "קאיימן",
        "slug": "קאיימן"
      },
      {
        "nameHe": "911",
        "nameEn": "911",
        "slug": "911"
      },
      {
        "nameHe": "קאיין",
        "nameEn": "קאיין",
        "slug": "קאיין"
      },
      {
        "nameHe": "פנמרה",
        "nameEn": "פנמרה",
        "slug": "פנמרה"
      },
      {
        "nameHe": "מקאן",
        "nameEn": "מקאן",
        "slug": "מקאן"
      },
      {
        "nameHe": "קאיין קופה",
        "nameEn": "קאיין קופה",
        "slug": "קאיין-קופה"
      },
      {
        "nameHe": "טייקן",
        "nameEn": "טייקן",
        "slug": "טייקן"
      },
      {
        "nameHe": "טייקן קרוס טוריסמו",
        "nameEn": "טייקן קרוס טוריסמו",
        "slug": "טייקן-קרוס-טוריסמו"
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
        "nameEn": "אקספלורר",
        "slug": "אקספלורר"
      },
      {
        "nameHe": "פוקוס קופה - קבריולה",
        "nameEn": "פוקוס קופה - קבריולה",
        "slug": "פוקוס-קופה-קבריולה"
      },
      {
        "nameHe": "F-350 סופר-דיוטי",
        "nameEn": "F-350 סופר-דיוטי",
        "slug": "f-350-סופר-דיוטי"
      },
      {
        "nameHe": "פוקוס סטיישן",
        "nameEn": "פוקוס סטיישן",
        "slug": "פוקוס-סטיישן"
      },
      {
        "nameHe": "פוקוס",
        "nameEn": "פוקוס",
        "slug": "פוקוס"
      },
      {
        "nameHe": "מונדיאו",
        "nameEn": "מונדיאו",
        "slug": "מונדיאו"
      },
      {
        "nameHe": "EDGE אדג'",
        "nameEn": "EDGE אדג'",
        "slug": "edge-אדג"
      },
      {
        "nameHe": "מונדיאו סטיישן",
        "nameEn": "מונדיאו סטיישן",
        "slug": "מונדיאו-סטיישן"
      },
      {
        "nameHe": "פיאסטה",
        "nameEn": "פיאסטה",
        "slug": "פיאסטה"
      },
      {
        "nameHe": "טורנאו קונקט",
        "nameEn": "טורנאו קונקט",
        "slug": "טורנאו-קונקט"
      },
      {
        "nameHe": "S MAX",
        "nameEn": "S MAX",
        "slug": "s-max"
      },
      {
        "nameHe": "גלאקסי",
        "nameEn": "גלאקסי",
        "slug": "גלאקסי"
      },
      {
        "nameHe": "פוקוס ST",
        "nameEn": "פוקוס ST",
        "slug": "פוקוס-st"
      },
      {
        "nameHe": "קוגה",
        "nameEn": "קוגה",
        "slug": "קוגה"
      },
      {
        "nameHe": "טרנזיט",
        "nameEn": "טרנזיט",
        "slug": "טרנזיט"
      },
      {
        "nameHe": "טרנזיט קסטום",
        "nameEn": "טרנזיט קסטום",
        "slug": "טרנזיט-קסטום"
      },
      {
        "nameHe": "F-250",
        "nameEn": "F-250",
        "slug": "f-250"
      },
      {
        "nameHe": "פוקוס אקטיב",
        "nameEn": "פוקוס אקטיב",
        "slug": "פוקוס-אקטיב"
      },
      {
        "nameHe": "פוקוס אקטיב סטיישן",
        "nameEn": "פוקוס אקטיב סטיישן",
        "slug": "פוקוס-אקטיב-סטיישן"
      },
      {
        "nameHe": "ברונקו",
        "nameEn": "ברונקו",
        "slug": "ברונקו"
      },
      {
        "nameHe": "פומה",
        "nameEn": "פומה",
        "slug": "פומה"
      },
      {
        "nameHe": "ריינג'ר",
        "nameEn": "ריינג'ר",
        "slug": "ריינגר"
      },
      {
        "nameHe": "מוסטנג",
        "nameEn": "מוסטנג",
        "slug": "מוסטנג"
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
        "nameEn": "טיגואן",
        "slug": "טיגואן"
      },
      {
        "nameHe": "פולו",
        "nameEn": "פולו",
        "slug": "פולו"
      },
      {
        "nameHe": "גולף",
        "nameEn": "גולף",
        "slug": "גולף"
      },
      {
        "nameHe": "גולף +",
        "nameEn": "גולף +",
        "slug": "גולף"
      },
      {
        "nameHe": "גולף GTI",
        "nameEn": "גולף GTI",
        "slug": "גולף-gti"
      },
      {
        "nameHe": "איוס",
        "nameEn": "איוס",
        "slug": "איוס"
      },
      {
        "nameHe": "קאדי",
        "nameEn": "קאדי",
        "slug": "קאדי"
      },
      {
        "nameHe": "טוארג",
        "nameEn": "טוארג",
        "slug": "טוארג"
      },
      {
        "nameHe": "פולו GTI",
        "nameEn": "פולו GTI",
        "slug": "פולו-gti"
      },
      {
        "nameHe": "פאסאט סטיישן",
        "nameEn": "פאסאט סטיישן",
        "slug": "פאסאט-סטיישן"
      },
      {
        "nameHe": "בורה",
        "nameEn": "בורה",
        "slug": "בורה"
      },
      {
        "nameHe": "טוראן",
        "nameEn": "טוראן",
        "slug": "טוראן"
      },
      {
        "nameHe": "שירוקו",
        "nameEn": "שירוקו",
        "slug": "שירוקו"
      },
      {
        "nameHe": "ג'טה",
        "nameEn": "ג'טה",
        "slug": "גטה"
      },
      {
        "nameHe": "פאסאט",
        "nameEn": "פאסאט",
        "slug": "פאסאט"
      },
      {
        "nameHe": "פאסאט CC",
        "nameEn": "פאסאט CC",
        "slug": "פאסאט-cc"
      },
      {
        "nameHe": "אמארוק",
        "nameEn": "אמארוק",
        "slug": "אמארוק"
      },
      {
        "nameHe": "קראפטר",
        "nameEn": "קראפטר",
        "slug": "קראפטר"
      },
      {
        "nameHe": "טרנספורטר",
        "nameEn": "טרנספורטר",
        "slug": "טרנספורטר"
      },
      {
        "nameHe": "קראוול",
        "nameEn": "קראוול",
        "slug": "קראוול"
      },
      {
        "nameHe": "אפ",
        "nameEn": "אפ",
        "slug": "אפ"
      },
      {
        "nameHe": "חיפושית",
        "nameEn": "חיפושית",
        "slug": "חיפושית"
      },
      {
        "nameHe": "גולף ספורטוואן",
        "nameEn": "גולף ספורטוואן",
        "slug": "גולף-ספורטוואן"
      },
      {
        "nameHe": "טי קרוס",
        "nameEn": "טי קרוס",
        "slug": "טי-קרוס"
      },
      {
        "nameHe": "ID.4",
        "nameEn": "ID.4",
        "slug": "id4"
      },
      {
        "nameHe": "טיגואן אולספייס",
        "nameEn": "טיגואן אולספייס",
        "slug": "טיגואן-אולספייס"
      },
      {
        "nameHe": "טי רוק",
        "nameEn": "טי רוק",
        "slug": "טי-רוק"
      },
      {
        "nameHe": "ID.5",
        "nameEn": "ID.5",
        "slug": "id5"
      },
      {
        "nameHe": "טאיגו",
        "nameEn": "טאיגו",
        "slug": "טאיגו"
      },
      {
        "nameHe": "ID.7",
        "nameEn": "ID.7",
        "slug": "id7"
      },
      {
        "nameHe": "ID.BUZZ",
        "nameEn": "ID.BUZZ",
        "slug": "idbuzz"
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
        "slug": "2"
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
        "nameEn": "ET5",
        "slug": "et5"
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
        "nameEn": "פאביה",
        "slug": "פאביה"
      },
      {
        "nameHe": "אוקטביה",
        "nameEn": "אוקטביה",
        "slug": "אוקטביה"
      },
      {
        "nameHe": "סופרב",
        "nameEn": "סופרב",
        "slug": "סופרב"
      },
      {
        "nameHe": "רומסטר",
        "nameEn": "רומסטר",
        "slug": "רומסטר"
      },
      {
        "nameHe": "פאביה ספייס",
        "nameEn": "פאביה ספייס",
        "slug": "פאביה-ספייס"
      },
      {
        "nameHe": "אוקטביה קומבי",
        "nameEn": "אוקטביה קומבי",
        "slug": "אוקטביה-קומבי"
      },
      {
        "nameHe": "יטי",
        "nameEn": "יטי",
        "slug": "יטי"
      },
      {
        "nameHe": "סופרב קומבי",
        "nameEn": "סופרב קומבי",
        "slug": "סופרב-קומבי"
      },
      {
        "nameHe": "אוקטביה RS",
        "nameEn": "אוקטביה RS",
        "slug": "אוקטביה-rs"
      },
      {
        "nameHe": "סיטיגו",
        "nameEn": "סיטיגו",
        "slug": "סיטיגו"
      },
      {
        "nameHe": "ראפיד",
        "nameEn": "ראפיד",
        "slug": "ראפיד"
      },
      {
        "nameHe": "ראפיד ספייסבק",
        "nameEn": "ראפיד ספייסבק",
        "slug": "ראפיד-ספייסבק"
      },
      {
        "nameHe": "קודיאק",
        "nameEn": "קודיאק",
        "slug": "קודיאק"
      },
      {
        "nameHe": "קארוק",
        "nameEn": "קארוק",
        "slug": "קארוק"
      },
      {
        "nameHe": "סקאלה",
        "nameEn": "סקאלה",
        "slug": "סקאלה"
      },
      {
        "nameHe": "קאמיק",
        "nameEn": "קאמיק",
        "slug": "קאמיק"
      },
      {
        "nameHe": "אניאק",
        "nameEn": "אניאק",
        "slug": "אניאק"
      },
      {
        "nameHe": "אניאק קופה",
        "nameEn": "אניאק קופה",
        "slug": "אניאק-קופה"
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
        "nameEn": "פורטו",
        "slug": "פורטו"
      },
      {
        "nameHe": "פורטו קבריולה",
        "nameEn": "פורטו קבריולה",
        "slug": "פורטו-קבריולה"
      },
      {
        "nameHe": "פורפור",
        "nameEn": "פורפור",
        "slug": "פורפור"
      },
      {
        "nameHe": "1",
        "nameEn": "1",
        "slug": "1"
      },
      {
        "nameHe": "3",
        "nameEn": "3",
        "slug": "3"
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
        "slug": "c2"
      },
      {
        "nameHe": "C3",
        "nameEn": "C3",
        "slug": "c3"
      },
      {
        "nameHe": "C4",
        "nameEn": "C4",
        "slug": "c4"
      },
      {
        "nameHe": "C5",
        "nameEn": "C5",
        "slug": "c5"
      },
      {
        "nameHe": "ברלינגו",
        "nameEn": "ברלינגו",
        "slug": "ברלינגו"
      },
      {
        "nameHe": "קסארה",
        "nameEn": "קסארה",
        "slug": "קסארה"
      },
      {
        "nameHe": "C קרוסר",
        "nameEn": "C קרוסר",
        "slug": "c-קרוסר"
      },
      {
        "nameHe": "C1",
        "nameEn": "C1",
        "slug": "c1"
      },
      {
        "nameHe": "C4 גראנד פיקאסו",
        "nameEn": "C4 גראנד פיקאסו",
        "slug": "c4-גראנד-פיקאסו"
      },
      {
        "nameHe": "C5 סטיישן",
        "nameEn": "C5 סטיישן",
        "slug": "c5-סטיישן"
      },
      {
        "nameHe": "C6",
        "nameEn": "C6",
        "slug": "c6"
      },
      {
        "nameHe": "C3 פיקאסו",
        "nameEn": "C3 פיקאסו",
        "slug": "c3-פיקאסו"
      },
      {
        "nameHe": "DS3",
        "nameEn": "DS3",
        "slug": "ds3"
      },
      {
        "nameHe": "DS4",
        "nameEn": "DS4",
        "slug": "ds4"
      },
      {
        "nameHe": "DS5",
        "nameEn": "DS5",
        "slug": "ds5"
      },
      {
        "nameHe": "נמו",
        "nameEn": "נמו",
        "slug": "נמו"
      },
      {
        "nameHe": "ג'מפי",
        "nameEn": "ג'מפי",
        "slug": "גמפי"
      },
      {
        "nameHe": "C אליזה",
        "nameEn": "C אליזה",
        "slug": "c-אליזה"
      },
      {
        "nameHe": "DS3 קבריולה",
        "nameEn": "DS3 קבריולה",
        "slug": "ds3-קבריולה"
      },
      {
        "nameHe": "קקטוס",
        "nameEn": "קקטוס",
        "slug": "קקטוס"
      },
      {
        "nameHe": "C4 פיקאסו",
        "nameEn": "C4 פיקאסו",
        "slug": "c4-פיקאסו"
      },
      {
        "nameHe": "C3 איירקרוס",
        "nameEn": "C3 איירקרוס",
        "slug": "c3-איירקרוס"
      },
      {
        "nameHe": "C4 ספייסטורר",
        "nameEn": "C4 ספייסטורר",
        "slug": "c4-ספייסטורר"
      },
      {
        "nameHe": "C5 איירקרוס",
        "nameEn": "C5 איירקרוס",
        "slug": "c5-איירקרוס"
      },
      {
        "nameHe": "C4 X",
        "nameEn": "C4 X",
        "slug": "c4-x"
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
        "nameEn": "איביזה",
        "slug": "איביזה"
      },
      {
        "nameHe": "קורדובה",
        "nameEn": "קורדובה",
        "slug": "קורדובה"
      },
      {
        "nameHe": "טולדו",
        "nameEn": "טולדו",
        "slug": "טולדו"
      },
      {
        "nameHe": "איביזה FR",
        "nameEn": "איביזה FR",
        "slug": "איביזה-fr"
      },
      {
        "nameHe": "אלתיאה XL",
        "nameEn": "אלתיאה XL",
        "slug": "אלתיאה-xl"
      },
      {
        "nameHe": "לאון",
        "nameEn": "לאון",
        "slug": "לאון"
      },
      {
        "nameHe": "איביזה SC",
        "nameEn": "איביזה SC",
        "slug": "איביזה-sc"
      },
      {
        "nameHe": "איביזה קופרה",
        "nameEn": "איביזה קופרה",
        "slug": "איביזה-קופרה"
      },
      {
        "nameHe": "לאון FR",
        "nameEn": "לאון FR",
        "slug": "לאון-fr"
      },
      {
        "nameHe": "לאון קופרה",
        "nameEn": "לאון קופרה",
        "slug": "לאון-קופרה"
      },
      {
        "nameHe": "אלתיאה",
        "nameEn": "אלתיאה",
        "slug": "אלתיאה"
      },
      {
        "nameHe": "איביזה סטיישן FLOW",
        "nameEn": "איביזה סטיישן FLOW",
        "slug": "איביזה-סטיישן-flow"
      },
      {
        "nameHe": "מי",
        "nameEn": "מי",
        "slug": "מי"
      },
      {
        "nameHe": "אלהמברה",
        "nameEn": "אלהמברה",
        "slug": "אלהמברה"
      },
      {
        "nameHe": "לאון סטיישן",
        "nameEn": "לאון סטיישן",
        "slug": "לאון-סטיישן"
      },
      {
        "nameHe": "אטקה",
        "nameEn": "אטקה",
        "slug": "אטקה"
      },
      {
        "nameHe": "ארונה",
        "nameEn": "ארונה",
        "slug": "ארונה"
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
        "nameEn": "סוויפט",
        "slug": "סוויפט"
      },
      {
        "nameHe": "ליאנה",
        "nameEn": "ליאנה",
        "slug": "ליאנה"
      },
      {
        "nameHe": "איגניס",
        "nameEn": "איגניס",
        "slug": "איגניס"
      },
      {
        "nameHe": "אלטו",
        "nameEn": "אלטו",
        "slug": "אלטו"
      },
      {
        "nameHe": "ספלאש",
        "nameEn": "ספלאש",
        "slug": "ספלאש"
      },
      {
        "nameHe": "SX4",
        "nameEn": "SX4",
        "slug": "sx4"
      },
      {
        "nameHe": "ג'ימני",
        "nameEn": "ג'ימני",
        "slug": "גימני"
      },
      {
        "nameHe": "גרנד ויטרה קצר",
        "nameEn": "גרנד ויטרה קצר",
        "slug": "גרנד-ויטרה-קצר"
      },
      {
        "nameHe": "גרנד ויטרה",
        "nameEn": "גרנד ויטרה",
        "slug": "גרנד-ויטרה"
      },
      {
        "nameHe": "SX4 האצ'בק",
        "nameEn": "SX4 האצ'בק",
        "slug": "sx4-האצבק"
      },
      {
        "nameHe": "קרוסאובר",
        "nameEn": "קרוסאובר",
        "slug": "קרוסאובר"
      },
      {
        "nameHe": "ויטרה",
        "nameEn": "ויטרה",
        "slug": "ויטרה"
      },
      {
        "nameHe": "סלריו",
        "nameEn": "סלריו",
        "slug": "סלריו"
      },
      {
        "nameHe": "בלנו",
        "nameEn": "בלנו",
        "slug": "בלנו"
      },
      {
        "nameHe": "S-Cross",
        "nameEn": "S-Cross",
        "slug": "s-cross"
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
        "slug": "b4"
      },
      {
        "nameHe": "פורסטר",
        "nameEn": "פורסטר",
        "slug": "פורסטר"
      },
      {
        "nameHe": "אאוטבק",
        "nameEn": "אאוטבק",
        "slug": "אאוטבק"
      },
      {
        "nameHe": "אימפרזה B3 STi",
        "nameEn": "אימפרזה B3 STi",
        "slug": "אימפרזה-b3-sti"
      },
      {
        "nameHe": "B4 סטיישן",
        "nameEn": "B4 סטיישן",
        "slug": "b4-סטיישן"
      },
      {
        "nameHe": "אימפרזה",
        "nameEn": "אימפרזה",
        "slug": "אימפרזה"
      },
      {
        "nameHe": "טרייבקה",
        "nameEn": "טרייבקה",
        "slug": "טרייבקה"
      },
      {
        "nameHe": "B3",
        "nameEn": "B3",
        "slug": "b3"
      },
      {
        "nameHe": "B3 סדאן",
        "nameEn": "B3 סדאן",
        "slug": "b3-סדאן"
      },
      {
        "nameHe": "אימפרזה STi סדאן",
        "nameEn": "אימפרזה STi סדאן",
        "slug": "אימפרזה-sti-סדאן"
      },
      {
        "nameHe": "XV",
        "nameEn": "XV",
        "slug": "xv"
      },
      {
        "nameHe": "BRZ",
        "nameEn": "BRZ",
        "slug": "brz"
      },
      {
        "nameHe": "אימפרזה WRX STi",
        "nameEn": "אימפרזה WRX STi",
        "slug": "אימפרזה-wrx-sti"
      },
      {
        "nameHe": "לבורג",
        "nameEn": "לבורג",
        "slug": "לבורג"
      },
      {
        "nameHe": "איוולטיס",
        "nameEn": "איוולטיס",
        "slug": "איוולטיס"
      },
      {
        "nameHe": "קרוסטרק",
        "nameEn": "קרוסטרק",
        "slug": "קרוסטרק"
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
        "slug": "אקטיון"
      },
      {
        "nameHe": "קיירון",
        "nameEn": "קיירון",
        "slug": "קיירון"
      },
      {
        "nameHe": "רודיוס",
        "nameEn": "רודיוס",
        "slug": "רודיוס"
      },
      {
        "nameHe": "רקסטון",
        "nameEn": "רקסטון",
        "slug": "רקסטון"
      },
      {
        "nameHe": "אקטיון ספורט",
        "nameEn": "אקטיון ספורט",
        "slug": "אקטיון-ספורט"
      },
      {
        "nameHe": "קוראנדו",
        "nameEn": "קוראנדו",
        "slug": "קוראנדו"
      },
      {
        "nameHe": "טיבולי",
        "nameEn": "טיבולי",
        "slug": "טיבולי"
      },
      {
        "nameHe": "XLV",
        "nameEn": "XLV",
        "slug": "xlv"
      },
      {
        "nameHe": "מוסו",
        "nameEn": "מוסו",
        "slug": "מוסו"
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
        "nameEn": "550",
        "slug": "550"
      },
      {
        "nameHe": "350",
        "nameEn": "350",
        "slug": "350"
      },
      {
        "nameHe": "3",
        "nameEn": "3",
        "slug": "3"
      },
      {
        "nameHe": "ZS",
        "nameEn": "ZS",
        "slug": "zs"
      },
      {
        "nameHe": "HS",
        "nameEn": "HS",
        "slug": "hs"
      },
      {
        "nameHe": "4",
        "nameEn": "4",
        "slug": "4"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5"
      },
      {
        "nameHe": "מארוול R",
        "nameEn": "מארוול R",
        "slug": "מארוול-r"
      },
      {
        "nameHe": "סייברסטר",
        "nameEn": "סייברסטר",
        "slug": "סייברסטר"
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
        "slug": "9-5"
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
        "nameEn": "פטרול",
        "slug": "פטרול"
      },
      {
        "nameHe": "מוראנו",
        "nameEn": "מוראנו",
        "slug": "מוראנו"
      },
      {
        "nameHe": "קשקאי",
        "nameEn": "קשקאי",
        "slug": "קשקאי"
      },
      {
        "nameHe": "פרימרה",
        "nameEn": "פרימרה",
        "slug": "פרימרה"
      },
      {
        "nameHe": "מייקרה C+C",
        "nameEn": "מייקרה C+C",
        "slug": "מייקרה-cc"
      },
      {
        "nameHe": "אקס טרייל",
        "nameEn": "אקס טרייל",
        "slug": "אקס-טרייל"
      },
      {
        "nameHe": "אלמרה",
        "nameEn": "אלמרה",
        "slug": "אלמרה"
      },
      {
        "nameHe": "ג'וק",
        "nameEn": "ג'וק",
        "slug": "גוק"
      },
      {
        "nameHe": "פאתפיינדר",
        "nameEn": "פאתפיינדר",
        "slug": "פאתפיינדר"
      },
      {
        "nameHe": "נבארה",
        "nameEn": "נבארה",
        "slug": "נבארה"
      },
      {
        "nameHe": "ווינר",
        "nameEn": "ווינר",
        "slug": "ווינר"
      },
      {
        "nameHe": "מייקרה",
        "nameEn": "מייקרה",
        "slug": "מייקרה"
      },
      {
        "nameHe": "טידה",
        "nameEn": "טידה",
        "slug": "טידה"
      },
      {
        "nameHe": "נוט",
        "nameEn": "נוט",
        "slug": "נוט"
      },
      {
        "nameHe": "קשקאי+2",
        "nameEn": "קשקאי+2",
        "slug": "קשקאי2"
      },
      {
        "nameHe": "370Z",
        "nameEn": "370Z",
        "slug": "370z"
      },
      {
        "nameHe": "GT-R",
        "nameEn": "GT-R",
        "slug": "gt-r"
      },
      {
        "nameHe": "NV200",
        "nameEn": "NV200",
        "slug": "nv200"
      },
      {
        "nameHe": "ליף",
        "nameEn": "ליף",
        "slug": "ליף"
      },
      {
        "nameHe": "370Z רודסטר",
        "nameEn": "370Z רודסטר",
        "slug": "370z-רודסטר"
      },
      {
        "nameHe": "אלטימה",
        "nameEn": "אלטימה",
        "slug": "אלטימה"
      },
      {
        "nameHe": "מקסימה",
        "nameEn": "מקסימה",
        "slug": "מקסימה"
      },
      {
        "nameHe": "קבסטאר",
        "nameEn": "קבסטאר",
        "slug": "קבסטאר"
      },
      {
        "nameHe": "סנטרה",
        "nameEn": "סנטרה",
        "slug": "סנטרה"
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
        "nameEn": "ET5",
        "slug": "et5"
      },
      {
        "nameHe": "ET7",
        "nameEn": "ET7",
        "slug": "et7"
      },
      {
        "nameHe": "EL7",
        "nameEn": "EL7",
        "slug": "el7"
      },
      {
        "nameHe": "EL6",
        "nameEn": "EL6",
        "slug": "el6"
      },
      {
        "nameHe": "EL8",
        "nameEn": "EL8",
        "slug": "el8"
      },
      {
        "nameHe": "ES8",
        "nameEn": "ES8",
        "slug": "es8"
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
        "nameEn": "C קלאס",
        "slug": "c-קלאס"
      },
      {
        "nameHe": "E קלאס",
        "nameEn": "E קלאס",
        "slug": "e-קלאס"
      },
      {
        "nameHe": "S קלאס",
        "nameEn": "S קלאס",
        "slug": "s-קלאס"
      },
      {
        "nameHe": "SL",
        "nameEn": "SL",
        "slug": "sl"
      },
      {
        "nameHe": "C קלאס קופה",
        "nameEn": "C קלאס קופה",
        "slug": "c-קלאס-קופה"
      },
      {
        "nameHe": "CLS",
        "nameEn": "CLS",
        "slug": "cls"
      },
      {
        "nameHe": "ML",
        "nameEn": "ML",
        "slug": "ml"
      },
      {
        "nameHe": "SLK",
        "nameEn": "SLK",
        "slug": "slk"
      },
      {
        "nameHe": "B קלאס",
        "nameEn": "B קלאס",
        "slug": "b-קלאס"
      },
      {
        "nameHe": "GL",
        "nameEn": "GL",
        "slug": "gl"
      },
      {
        "nameHe": "GLK",
        "nameEn": "GLK",
        "slug": "glk"
      },
      {
        "nameHe": "S400 הייבריד",
        "nameEn": "S400 הייבריד",
        "slug": "s400-הייבריד"
      },
      {
        "nameHe": "E קלאס קופה",
        "nameEn": "E קלאס קופה",
        "slug": "e-קלאס-קופה"
      },
      {
        "nameHe": "CL",
        "nameEn": "CL",
        "slug": "cl"
      },
      {
        "nameHe": "E קלאס קבריולה",
        "nameEn": "E קלאס קבריולה",
        "slug": "e-קלאס-קבריולה"
      },
      {
        "nameHe": "R קלאס",
        "nameEn": "R קלאס",
        "slug": "r-קלאס"
      },
      {
        "nameHe": "C63 AMG",
        "nameEn": "C63 AMG",
        "slug": "c63-amg"
      },
      {
        "nameHe": "SLS",
        "nameEn": "SLS",
        "slug": "sls"
      },
      {
        "nameHe": "A קלאס",
        "nameEn": "A קלאס",
        "slug": "a-קלאס"
      },
      {
        "nameHe": "CLA",
        "nameEn": "CLA",
        "slug": "cla"
      },
      {
        "nameHe": "ספרינטר",
        "nameEn": "ספרינטר",
        "slug": "ספרינטר"
      },
      {
        "nameHe": "GLA",
        "nameEn": "GLA",
        "slug": "gla"
      },
      {
        "nameHe": "GLC",
        "nameEn": "GLC",
        "slug": "glc"
      },
      {
        "nameHe": "GLE",
        "nameEn": "GLE",
        "slug": "gle"
      },
      {
        "nameHe": "GLE קופה",
        "nameEn": "GLE קופה",
        "slug": "gle-קופה"
      },
      {
        "nameHe": "S קלאס קופה",
        "nameEn": "S קלאס קופה",
        "slug": "s-קלאס-קופה"
      },
      {
        "nameHe": "AMG GT",
        "nameEn": "AMG GT",
        "slug": "amg-gt"
      },
      {
        "nameHe": "GLS",
        "nameEn": "GLS",
        "slug": "gls"
      },
      {
        "nameHe": "GLC קופה",
        "nameEn": "GLC קופה",
        "slug": "glc-קופה"
      },
      {
        "nameHe": "SLC",
        "nameEn": "SLC",
        "slug": "slc"
      },
      {
        "nameHe": "G קלאס",
        "nameEn": "G קלאס",
        "slug": "g-קלאס"
      },
      {
        "nameHe": "A קלאס סדאן",
        "nameEn": "A קלאס סדאן",
        "slug": "a-קלאס-סדאן"
      },
      {
        "nameHe": "GLB",
        "nameEn": "GLB",
        "slug": "glb"
      },
      {
        "nameHe": "EQA",
        "nameEn": "EQA",
        "slug": "eqa"
      },
      {
        "nameHe": "EQC",
        "nameEn": "EQC",
        "slug": "eqc"
      },
      {
        "nameHe": "EQV",
        "nameEn": "EQV",
        "slug": "eqv"
      },
      {
        "nameHe": "ויטו",
        "nameEn": "ויטו",
        "slug": "ויטו"
      },
      {
        "nameHe": "V קלאס",
        "nameEn": "V קלאס",
        "slug": "v-קלאס"
      },
      {
        "nameHe": "EQE",
        "nameEn": "EQE",
        "slug": "eqe"
      },
      {
        "nameHe": "EQB",
        "nameEn": "EQB",
        "slug": "eqb"
      },
      {
        "nameHe": "EQS",
        "nameEn": "EQS",
        "slug": "eqs"
      },
      {
        "nameHe": "EQS SUV",
        "nameEn": "EQS SUV",
        "slug": "eqs-suv"
      },
      {
        "nameHe": "EQE SUV",
        "nameEn": "EQE SUV",
        "slug": "eqe-suv"
      },
      {
        "nameHe": "CLE",
        "nameEn": "CLE",
        "slug": "cle"
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
        "nameEn": "E-יוניק 5",
        "slug": "e-יוניק-5"
      },
      {
        "nameHe": "E-דליבר 3",
        "nameEn": "E-דליבר 3",
        "slug": "e-דליבר-3"
      },
      {
        "nameHe": "E-יוניק 6",
        "nameEn": "E-יוניק 6",
        "slug": "e-יוניק-6"
      },
      {
        "nameHe": "V80",
        "nameEn": "V80",
        "slug": "v80"
      },
      {
        "nameHe": "מיפה 7",
        "nameEn": "מיפה 7",
        "slug": "מיפה-7"
      },
      {
        "nameHe": "מיפה 9",
        "nameEn": "מיפה 9",
        "slug": "מיפה-9"
      },
      {
        "nameHe": "E-דליבר 5",
        "nameEn": "E-דליבר 5",
        "slug": "e-דליבר-5"
      },
      {
        "nameHe": "E-דליבר 7",
        "nameEn": "E-דליבר 7",
        "slug": "e-דליבר-7"
      },
      {
        "nameHe": "E-דליבר 9",
        "nameEn": "E-דליבר 9",
        "slug": "e-דליבר-9"
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
        "nameEn": "לאנסר",
        "slug": "לאנסר"
      },
      {
        "nameHe": "לאנסר אבולושן",
        "nameEn": "לאנסר אבולושן",
        "slug": "לאנסר-אבולושן"
      },
      {
        "nameHe": "אאוטלנדר",
        "nameEn": "אאוטלנדר",
        "slug": "אאוטלנדר"
      },
      {
        "nameHe": "כריזמה",
        "nameEn": "כריזמה",
        "slug": "כריזמה"
      },
      {
        "nameHe": "פאג'רו",
        "nameEn": "פאג'רו",
        "slug": "פאגרו"
      },
      {
        "nameHe": "האנטר",
        "nameEn": "האנטר",
        "slug": "האנטר"
      },
      {
        "nameHe": "לאנסר ראליארט",
        "nameEn": "לאנסר ראליארט",
        "slug": "לאנסר-ראליארט"
      },
      {
        "nameHe": "לאנסר ספורטבק",
        "nameEn": "לאנסר ספורטבק",
        "slug": "לאנסר-ספורטבק"
      },
      {
        "nameHe": "גרנדיס",
        "nameEn": "גרנדיס",
        "slug": "גרנדיס"
      },
      {
        "nameHe": "ספייס סטאר",
        "nameEn": "ספייס סטאר",
        "slug": "ספייס-סטאר"
      },
      {
        "nameHe": "אטראז'",
        "nameEn": "אטראז'",
        "slug": "אטראז"
      },
      {
        "nameHe": "אאוטלנדר PHEV",
        "nameEn": "אאוטלנדר PHEV",
        "slug": "אאוטלנדר-phev"
      },
      {
        "nameHe": "טרייטון",
        "nameEn": "טרייטון",
        "slug": "טרייטון"
      },
      {
        "nameHe": "ASX",
        "nameEn": "ASX",
        "slug": "asx"
      },
      {
        "nameHe": "אקליפס קרוס",
        "nameEn": "אקליפס קרוס",
        "slug": "אקליפס-קרוס"
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
        "nameEn": "קופר",
        "slug": "קופר"
      },
      {
        "nameHe": "קופר קבריולה",
        "nameEn": "קופר קבריולה",
        "slug": "קופר-קבריולה"
      },
      {
        "nameHe": "קלאבמן",
        "nameEn": "קלאבמן",
        "slug": "קלאבמן"
      },
      {
        "nameHe": "קאנטרימן",
        "nameEn": "קאנטרימן",
        "slug": "קאנטרימן"
      },
      {
        "nameHe": "קופה",
        "nameEn": "קופה",
        "slug": "קופה"
      },
      {
        "nameHe": "רודסטר",
        "nameEn": "רודסטר",
        "slug": "רודסטר"
      },
      {
        "nameHe": "פייסמן",
        "nameEn": "פייסמן",
        "slug": "פייסמן"
      },
      {
        "nameHe": "אייסמן",
        "nameEn": "אייסמן",
        "slug": "אייסמן"
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
        "nameEn": "גראן טוריסמו",
        "slug": "גראן-טוריסמו"
      },
      {
        "nameHe": "קוואטרופורטה",
        "nameEn": "קוואטרופורטה",
        "slug": "קוואטרופורטה"
      },
      {
        "nameHe": "גיבלי",
        "nameEn": "גיבלי",
        "slug": "גיבלי"
      },
      {
        "nameHe": "גראן קבריו",
        "nameEn": "גראן קבריו",
        "slug": "גראן-קבריו"
      },
      {
        "nameHe": "לבנטה",
        "nameEn": "לבנטה",
        "slug": "לבנטה"
      },
      {
        "nameHe": "MC20",
        "nameEn": "MC20",
        "slug": "mc20"
      },
      {
        "nameHe": "גרקאלה",
        "nameEn": "גרקאלה",
        "slug": "גרקאלה"
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
        "nameEn": "TGE",
        "slug": "tge"
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
        "slug": "3"
      },
      {
        "nameHe": "6",
        "nameEn": "6",
        "slug": "6"
      },
      {
        "nameHe": "MPV",
        "nameEn": "MPV",
        "slug": "mpv"
      },
      {
        "nameHe": "323 לאנטיס",
        "nameEn": "323 לאנטיס",
        "slug": "323-לאנטיס"
      },
      {
        "nameHe": "BT50",
        "nameEn": "BT50",
        "slug": "bt50"
      },
      {
        "nameHe": "2",
        "nameEn": "2",
        "slug": "2"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5"
      },
      {
        "nameHe": "MX5",
        "nameEn": "MX5",
        "slug": "mx5"
      },
      {
        "nameHe": "2 סדאן",
        "nameEn": "2 סדאן",
        "slug": "2-סדאן"
      },
      {
        "nameHe": "CX5",
        "nameEn": "CX5",
        "slug": "cx5"
      },
      {
        "nameHe": "6 סטיישן",
        "nameEn": "6 סטיישן",
        "slug": "6-סטיישן"
      },
      {
        "nameHe": "דמיו",
        "nameEn": "דמיו",
        "slug": "דמיו"
      },
      {
        "nameHe": "CX3",
        "nameEn": "CX3",
        "slug": "cx3"
      },
      {
        "nameHe": "CX30",
        "nameEn": "CX30",
        "slug": "cx30"
      },
      {
        "nameHe": "CX-90",
        "nameEn": "CX-90",
        "slug": "cx-90"
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
        "nameEn": "RX350",
        "slug": "rx350"
      },
      {
        "nameHe": "SC430",
        "nameEn": "SC430",
        "slug": "sc430"
      },
      {
        "nameHe": "RX450h",
        "nameEn": "RX450h",
        "slug": "rx450h"
      },
      {
        "nameHe": "IS250",
        "nameEn": "IS250",
        "slug": "is250"
      },
      {
        "nameHe": "GS300",
        "nameEn": "GS300",
        "slug": "gs300"
      },
      {
        "nameHe": "LS460",
        "nameEn": "LS460",
        "slug": "ls460"
      },
      {
        "nameHe": "GS450h",
        "nameEn": "GS450h",
        "slug": "gs450h"
      },
      {
        "nameHe": "CT200h",
        "nameEn": "CT200h",
        "slug": "ct200h"
      },
      {
        "nameHe": "IS250 C",
        "nameEn": "IS250 C",
        "slug": "is250-c"
      },
      {
        "nameHe": "LS600h L",
        "nameEn": "LS600h L",
        "slug": "ls600h-l"
      },
      {
        "nameHe": "GS250",
        "nameEn": "GS250",
        "slug": "gs250"
      },
      {
        "nameHe": "IS300h",
        "nameEn": "IS300h",
        "slug": "is300h"
      },
      {
        "nameHe": "NX",
        "nameEn": "NX",
        "slug": "nx"
      },
      {
        "nameHe": "GS300h",
        "nameEn": "GS300h",
        "slug": "gs300h"
      },
      {
        "nameHe": "RC-F",
        "nameEn": "RC-F",
        "slug": "rc-f"
      },
      {
        "nameHe": "RC",
        "nameEn": "RC",
        "slug": "rc"
      },
      {
        "nameHe": "LS500",
        "nameEn": "LS500",
        "slug": "ls500"
      },
      {
        "nameHe": "RX200t",
        "nameEn": "RX200t",
        "slug": "rx200t"
      },
      {
        "nameHe": "LC",
        "nameEn": "LC",
        "slug": "lc"
      },
      {
        "nameHe": "ES",
        "nameEn": "ES",
        "slug": "es"
      },
      {
        "nameHe": "UX",
        "nameEn": "UX",
        "slug": "ux"
      },
      {
        "nameHe": "RX-L",
        "nameEn": "RX-L",
        "slug": "rx-l"
      },
      {
        "nameHe": "RX",
        "nameEn": "RX",
        "slug": "rx"
      },
      {
        "nameHe": "IS",
        "nameEn": "IS",
        "slug": "is"
      },
      {
        "nameHe": "RZ",
        "nameEn": "RZ",
        "slug": "rz"
      },
      {
        "nameHe": "LM",
        "nameEn": "LM",
        "slug": "lm"
      },
      {
        "nameHe": "LBX",
        "nameEn": "LBX",
        "slug": "lbx"
      },
      {
        "nameHe": "LX",
        "nameEn": "LX",
        "slug": "lx"
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
        "nameEn": "דלתא",
        "slug": "דלתא"
      },
      {
        "nameHe": "אפסילון",
        "nameEn": "אפסילון",
        "slug": "אפסילון"
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
        "nameEn": "דיסקברי",
        "slug": "דיסקברי"
      },
      {
        "nameHe": "ריינג' רובר",
        "nameEn": "ריינג' רובר",
        "slug": "ריינג-רובר"
      },
      {
        "nameHe": "ריינג' רובר ספורט",
        "nameEn": "ריינג' רובר ספורט",
        "slug": "ריינג-רובר-ספורט"
      },
      {
        "nameHe": "דיפנדר",
        "nameEn": "דיפנדר",
        "slug": "דיפנדר"
      },
      {
        "nameHe": "פרילנדר",
        "nameEn": "פרילנדר",
        "slug": "פרילנדר"
      },
      {
        "nameHe": "ריינג' רובר איווק",
        "nameEn": "ריינג' רובר איווק",
        "slug": "ריינג-רובר-איווק"
      },
      {
        "nameHe": "דיסקברי ספורט",
        "nameEn": "דיסקברי ספורט",
        "slug": "דיסקברי-ספורט"
      },
      {
        "nameHe": "ריינג' רובר וולאר",
        "nameEn": "ריינג' רובר וולאר",
        "slug": "ריינג-רובר-וולאר"
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
        "slug": "t03"
      },
      {
        "nameHe": "C10",
        "nameEn": "C10",
        "slug": "c10"
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
        "nameEn": "01",
        "slug": "01"
      },
      {
        "nameHe": "02",
        "nameEn": "02",
        "slug": "02"
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
        "nameEn": "טוסון",
        "slug": "טוסון"
      },
      {
        "nameHe": "סנטה פה",
        "nameEn": "סנטה פה",
        "slug": "סנטה-פה"
      },
      {
        "nameHe": "קופה",
        "nameEn": "קופה",
        "slug": "קופה"
      },
      {
        "nameHe": "מטריקס",
        "nameEn": "מטריקס",
        "slug": "מטריקס"
      },
      {
        "nameHe": "אקסנט",
        "nameEn": "אקסנט",
        "slug": "אקסנט"
      },
      {
        "nameHe": "אלנטרה",
        "nameEn": "אלנטרה",
        "slug": "אלנטרה"
      },
      {
        "nameHe": "טרג'ט",
        "nameEn": "טרג'ט",
        "slug": "טרגט"
      },
      {
        "nameHe": "סונטה",
        "nameEn": "סונטה",
        "slug": "סונטה"
      },
      {
        "nameHe": "טראקאן",
        "nameEn": "טראקאן",
        "slug": "טראקאן"
      },
      {
        "nameHe": "i30",
        "nameEn": "i30",
        "slug": "i30"
      },
      {
        "nameHe": "i10",
        "nameEn": "i10",
        "slug": "i10"
      },
      {
        "nameHe": "i20",
        "nameEn": "i20",
        "slug": "i20"
      },
      {
        "nameHe": "i30 סטיישן CW",
        "nameEn": "i30 סטיישן CW",
        "slug": "i30-סטיישן-cw"
      },
      {
        "nameHe": "גטס",
        "nameEn": "גטס",
        "slug": "גטס"
      },
      {
        "nameHe": "i800",
        "nameEn": "i800",
        "slug": "i800"
      },
      {
        "nameHe": "ix35",
        "nameEn": "ix35",
        "slug": "ix35"
      },
      {
        "nameHe": "i25",
        "nameEn": "i25",
        "slug": "i25"
      },
      {
        "nameHe": "ולוסטר",
        "nameEn": "ולוסטר",
        "slug": "ולוסטר"
      },
      {
        "nameHe": "i35",
        "nameEn": "i35",
        "slug": "i35"
      },
      {
        "nameHe": "i40",
        "nameEn": "i40",
        "slug": "i40"
      },
      {
        "nameHe": "i40 סטיישן CW",
        "nameEn": "i40 סטיישן CW",
        "slug": "i40-סטיישן-cw"
      },
      {
        "nameHe": "סונטה היברידית",
        "nameEn": "סונטה היברידית",
        "slug": "סונטה-היברידית"
      },
      {
        "nameHe": "i20 קרוס",
        "nameEn": "i20 קרוס",
        "slug": "i20-קרוס"
      },
      {
        "nameHe": "קונה",
        "nameEn": "קונה",
        "slug": "קונה"
      },
      {
        "nameHe": "איוניק",
        "nameEn": "איוניק",
        "slug": "איוניק"
      },
      {
        "nameHe": "H350",
        "nameEn": "H350",
        "slug": "h350"
      },
      {
        "nameHe": "i30N",
        "nameEn": "i30N",
        "slug": "i30n"
      },
      {
        "nameHe": "וניו",
        "nameEn": "וניו",
        "slug": "וניו"
      },
      {
        "nameHe": "איוניק 5",
        "nameEn": "איוניק 5",
        "slug": "איוניק-5"
      },
      {
        "nameHe": "פליסייד",
        "nameEn": "פליסייד",
        "slug": "פליסייד"
      },
      {
        "nameHe": "סטאריה",
        "nameEn": "סטאריה",
        "slug": "סטאריה"
      },
      {
        "nameHe": "באיון",
        "nameEn": "באיון",
        "slug": "באיון"
      },
      {
        "nameHe": "איוניק 6",
        "nameEn": "איוניק 6",
        "slug": "איוניק-6"
      },
      {
        "nameHe": "i20N",
        "nameEn": "i20N",
        "slug": "i20n"
      },
      {
        "nameHe": "איוניק 5N",
        "nameEn": "איוניק 5N",
        "slug": "איוניק-5n"
      },
      {
        "nameHe": "אלנטרה N",
        "nameEn": "אלנטרה N",
        "slug": "אלנטרה-n"
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
        "nameEn": "X-TYPE",
        "slug": "x-type"
      },
      {
        "nameHe": "S-TYPE",
        "nameEn": "S-TYPE",
        "slug": "s-type"
      },
      {
        "nameHe": "XJ",
        "nameEn": "XJ",
        "slug": "xj"
      },
      {
        "nameHe": "XK קופה",
        "nameEn": "XK קופה",
        "slug": "xk-קופה"
      },
      {
        "nameHe": "XF",
        "nameEn": "XF",
        "slug": "xf"
      },
      {
        "nameHe": "XK קונברטיבל",
        "nameEn": "XK קונברטיבל",
        "slug": "xk-קונברטיבל"
      },
      {
        "nameHe": "F-Type",
        "nameEn": "F-Type",
        "slug": "f-type"
      },
      {
        "nameHe": "XE",
        "nameEn": "XE",
        "slug": "xe"
      },
      {
        "nameHe": "F-Pace",
        "nameEn": "F-Pace",
        "slug": "f-pace"
      },
      {
        "nameHe": "E-Pace",
        "nameEn": "E-Pace",
        "slug": "e-pace"
      },
      {
        "nameHe": "I-Pace",
        "nameEn": "I-Pace",
        "slug": "i-pace"
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
        "nameEn": "מודל 3",
        "slug": "מודל-3"
      },
      {
        "nameHe": "מודל S",
        "nameEn": "מודל S",
        "slug": "מודל-s"
      },
      {
        "nameHe": "מודל X",
        "nameEn": "מודל X",
        "slug": "מודל-x"
      },
      {
        "nameHe": "מודל Y",
        "nameEn": "מודל Y",
        "slug": "מודל-y"
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
        "nameEn": "פריוס",
        "slug": "פריוס"
      },
      {
        "nameHe": "אוונסיס",
        "nameEn": "אוונסיס",
        "slug": "אוונסיס"
      },
      {
        "nameHe": "לנד קרוזר",
        "nameEn": "לנד קרוזר",
        "slug": "לנד-קרוזר"
      },
      {
        "nameHe": "היילקס",
        "nameEn": "היילקס",
        "slug": "היילקס"
      },
      {
        "nameHe": "לנד קרוזר V8",
        "nameEn": "לנד קרוזר V8",
        "slug": "לנד-קרוזר-v8"
      },
      {
        "nameHe": "קורולה",
        "nameEn": "קורולה",
        "slug": "קורולה"
      },
      {
        "nameHe": "יאריס",
        "nameEn": "יאריס",
        "slug": "יאריס"
      },
      {
        "nameHe": "אוריס",
        "nameEn": "אוריס",
        "slug": "אוריס"
      },
      {
        "nameHe": "קאמרי",
        "nameEn": "קאמרי",
        "slug": "קאמרי"
      },
      {
        "nameHe": "ורסו",
        "nameEn": "ורסו",
        "slug": "ורסו"
      },
      {
        "nameHe": "אוונסיס סטיישן",
        "nameEn": "אוונסיס סטיישן",
        "slug": "אוונסיס-סטיישן"
      },
      {
        "nameHe": "ראב 4",
        "nameEn": "ראב 4",
        "slug": "ראב-4"
      },
      {
        "nameHe": "ספייס ורסו",
        "nameEn": "ספייס ורסו",
        "slug": "ספייס-ורסו"
      },
      {
        "nameHe": "אוריס היברידית",
        "nameEn": "אוריס היברידית",
        "slug": "אוריס-היברידית"
      },
      {
        "nameHe": "יאריס היברידית",
        "nameEn": "יאריס היברידית",
        "slug": "יאריס-היברידית"
      },
      {
        "nameHe": "אייגו",
        "nameEn": "אייגו",
        "slug": "אייגו"
      },
      {
        "nameHe": "קאמרי הייבריד - יבוא אישי",
        "nameEn": "קאמרי הייבריד - יבוא אישי",
        "slug": "קאמרי-הייבריד-יבוא-אישי"
      },
      {
        "nameHe": "קאמרי היברידית",
        "nameEn": "קאמרי היברידית",
        "slug": "קאמרי-היברידית"
      },
      {
        "nameHe": "פריוס +",
        "nameEn": "פריוס +",
        "slug": "פריוס"
      },
      {
        "nameHe": "GT86",
        "nameEn": "GT86",
        "slug": "gt86"
      },
      {
        "nameHe": "היילנדר",
        "nameEn": "היילנדר",
        "slug": "היילנדר"
      },
      {
        "nameHe": "אוריס סטיישן",
        "nameEn": "אוריס סטיישן",
        "slug": "אוריס-סטיישן"
      },
      {
        "nameHe": "סיינה",
        "nameEn": "סיינה",
        "slug": "סיינה"
      },
      {
        "nameHe": "אבלון",
        "nameEn": "אבלון",
        "slug": "אבלון"
      },
      {
        "nameHe": "ראב 4 היברידית",
        "nameEn": "ראב 4 היברידית",
        "slug": "ראב-4-היברידית"
      },
      {
        "nameHe": "פרואייס",
        "nameEn": "פרואייס",
        "slug": "פרואייס"
      },
      {
        "nameHe": "C-HR",
        "nameEn": "C-HR",
        "slug": "c-hr"
      },
      {
        "nameHe": "קורולה סטיישן",
        "nameEn": "קורולה סטיישן",
        "slug": "קורולה-סטיישן"
      },
      {
        "nameHe": "קורולה האצ'בק",
        "nameEn": "קורולה האצ'בק",
        "slug": "קורולה-האצבק"
      },
      {
        "nameHe": "סיטי",
        "nameEn": "סיטי",
        "slug": "סיטי"
      },
      {
        "nameHe": "יאריס קרוס",
        "nameEn": "יאריס קרוס",
        "slug": "יאריס-קרוס"
      },
      {
        "nameHe": "אייגו X",
        "nameEn": "אייגו X",
        "slug": "אייגו-x"
      },
      {
        "nameHe": "קורולה קרוס",
        "nameEn": "קורולה קרוס",
        "slug": "קורולה-קרוס"
      },
      {
        "nameHe": "bZ4X",
        "nameEn": "bZ4X",
        "slug": "bz4x"
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
        "slug": "x"
      },
      {
        "nameHe": "001",
        "nameEn": "001",
        "slug": "001"
      },
      {
        "nameHe": "7X",
        "nameEn": "7X",
        "slug": "7x"
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
        "slug": "s60"
      },
      {
        "nameHe": "XC90",
        "nameEn": "XC90",
        "slug": "xc90"
      },
      {
        "nameHe": "XC60",
        "nameEn": "XC60",
        "slug": "xc60"
      },
      {
        "nameHe": "S80",
        "nameEn": "S80",
        "slug": "s80"
      },
      {
        "nameHe": "V50",
        "nameEn": "V50",
        "slug": "v50"
      },
      {
        "nameHe": "V70",
        "nameEn": "V70",
        "slug": "v70"
      },
      {
        "nameHe": "XC70",
        "nameEn": "XC70",
        "slug": "xc70"
      },
      {
        "nameHe": "S40",
        "nameEn": "S40",
        "slug": "s40"
      },
      {
        "nameHe": "C70",
        "nameEn": "C70",
        "slug": "c70"
      },
      {
        "nameHe": "C30",
        "nameEn": "C30",
        "slug": "c30"
      },
      {
        "nameHe": "V60",
        "nameEn": "V60",
        "slug": "v60"
      },
      {
        "nameHe": "V40",
        "nameEn": "V40",
        "slug": "v40"
      },
      {
        "nameHe": "V40 קרוס קאנטרי",
        "nameEn": "V40 קרוס קאנטרי",
        "slug": "v40-קרוס-קאנטרי"
      },
      {
        "nameHe": "XC40",
        "nameEn": "XC40",
        "slug": "xc40"
      },
      {
        "nameHe": "S90",
        "nameEn": "S90",
        "slug": "s90"
      },
      {
        "nameHe": "C40",
        "nameEn": "C40",
        "slug": "c40"
      },
      {
        "nameHe": "EX30",
        "nameEn": "EX30",
        "slug": "ex30"
      },
      {
        "nameHe": "EX90",
        "nameEn": "EX90",
        "slug": "ex90"
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
        "nameEn": "פרי",
        "slug": "פרי"
      },
      {
        "nameHe": "דרים",
        "nameEn": "דרים",
        "slug": "דרים"
      },
      {
        "nameHe": "קארג'",
        "nameEn": "קארג'",
        "slug": "קארג"
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
        "nameEn": "ג'אז",
        "slug": "גאז"
      },
      {
        "nameHe": "סיוויק הצ'בק",
        "nameEn": "סיוויק הצ'בק",
        "slug": "סיוויק-הצבק"
      },
      {
        "nameHe": "FR-V",
        "nameEn": "FR-V",
        "slug": "fr-v"
      },
      {
        "nameHe": "סיוויק סדאן",
        "nameEn": "סיוויק סדאן",
        "slug": "סיוויק-סדאן"
      },
      {
        "nameHe": "אקורד",
        "nameEn": "אקורד",
        "slug": "אקורד"
      },
      {
        "nameHe": "HR-V",
        "nameEn": "HR-V",
        "slug": "hr-v"
      },
      {
        "nameHe": "CRV",
        "nameEn": "CRV",
        "slug": "crv"
      },
      {
        "nameHe": "סיוויק TYPE-R",
        "nameEn": "סיוויק TYPE-R",
        "slug": "סיוויק-type-r"
      },
      {
        "nameHe": "לג'נד",
        "nameEn": "לג'נד",
        "slug": "לגנד"
      },
      {
        "nameHe": "S2000",
        "nameEn": "S2000",
        "slug": "s2000"
      },
      {
        "nameHe": "סיוויק IMA היברידית",
        "nameEn": "סיוויק IMA היברידית",
        "slug": "סיוויק-ima-היברידית"
      },
      {
        "nameHe": "אקורד סטיישן",
        "nameEn": "אקורד סטיישן",
        "slug": "אקורד-סטיישן"
      },
      {
        "nameHe": "אינסייט",
        "nameEn": "אינסייט",
        "slug": "אינסייט"
      },
      {
        "nameHe": "ג'אז היברידית",
        "nameEn": "ג'אז היברידית",
        "slug": "גאז-היברידית"
      },
      {
        "nameHe": "CRZ",
        "nameEn": "CRZ",
        "slug": "crz"
      },
      {
        "nameHe": "סיוויק סטיישן",
        "nameEn": "סיוויק סטיישן",
        "slug": "סיוויק-סטיישן"
      },
      {
        "nameHe": "אקורד היברידית",
        "nameEn": "אקורד היברידית",
        "slug": "אקורד-היברידית"
      },
      {
        "nameHe": "סיוויק קופה",
        "nameEn": "סיוויק קופה",
        "slug": "סיוויק-קופה"
      },
      {
        "nameHe": "אודיסיי",
        "nameEn": "אודיסיי",
        "slug": "אודיסיי"
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
        "nameEn": "E-HS9",
        "slug": "e-hs9"
      },
      {
        "nameHe": "EH7",
        "nameEn": "EH7",
        "slug": "eh7"
      },
      {
        "nameHe": "EHS7",
        "nameEn": "EHS7",
        "slug": "ehs7"
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
        "slug": "h2"
      },
      {
        "nameHe": "H3",
        "nameEn": "H3",
        "slug": "h3"
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
        "nameEn": "מאטריה",
        "slug": "מאטריה"
      },
      {
        "nameHe": "סיריון",
        "nameEn": "סיריון",
        "slug": "סיריון"
      },
      {
        "nameHe": "טריוס",
        "nameEn": "טריוס",
        "slug": "טריוס"
      },
      {
        "nameHe": "YRV",
        "nameEn": "YRV",
        "slug": "yrv"
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
        "nameEn": "M-Hero",
        "slug": "m-hero"
      },
      {
        "nameHe": "בוקס",
        "nameEn": "בוקס",
        "slug": "בוקס"
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
        "nameEn": "אוונג'ר",
        "slug": "אוונגר"
      },
      {
        "nameHe": "ג'רני",
        "nameEn": "ג'רני",
        "slug": "גרני"
      },
      {
        "nameHe": "נייטרו",
        "nameEn": "נייטרו",
        "slug": "נייטרו"
      },
      {
        "nameHe": "קאליבר",
        "nameEn": "קאליבר",
        "slug": "קאליבר"
      },
      {
        "nameHe": "ראם",
        "nameEn": "ראם",
        "slug": "ראם"
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
        "nameEn": "סנדרו Stepway",
        "slug": "סנדרו-stepway"
      },
      {
        "nameHe": "דאסטר",
        "nameEn": "דאסטר",
        "slug": "דאסטר"
      },
      {
        "nameHe": "לודג'י",
        "nameEn": "לודג'י",
        "slug": "לודגי"
      },
      {
        "nameHe": "דוקר",
        "nameEn": "דוקר",
        "slug": "דוקר"
      },
      {
        "nameHe": "לוגאן",
        "nameEn": "לוגאן",
        "slug": "לוגאן"
      },
      {
        "nameHe": "סנדרו",
        "nameEn": "סנדרו",
        "slug": "סנדרו"
      },
      {
        "nameHe": "לוגאן MCV",
        "nameEn": "לוגאן MCV",
        "slug": "לוגאן-mcv"
      },
      {
        "nameHe": "ג'וגר",
        "nameEn": "ג'וגר",
        "slug": "גוגר"
      },
      {
        "nameHe": "ביגסטר",
        "nameEn": "ביגסטר",
        "slug": "ביגסטר"
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
        "nameEn": "סטיד",
        "slug": "סטיד"
      },
      {
        "nameHe": "C10",
        "nameEn": "C10",
        "slug": "c10"
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
        "slug": "g80"
      },
      {
        "nameHe": "GV80",
        "nameEn": "GV80",
        "slug": "gv80"
      },
      {
        "nameHe": "GV70",
        "nameEn": "GV70",
        "slug": "gv70"
      },
      {
        "nameHe": "G90",
        "nameEn": "G90",
        "slug": "g90"
      },
      {
        "nameHe": "G70",
        "nameEn": "G70",
        "slug": "g70"
      },
      {
        "nameHe": "GV60",
        "nameEn": "GV60",
        "slug": "gv60"
      },
      {
        "nameHe": "GV80 קופה",
        "nameEn": "GV80 קופה",
        "slug": "gv80-קופה"
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
        "nameEn": "גרנד צ'רוקי",
        "slug": "גרנד-צרוקי"
      },
      {
        "nameHe": "קומנדר",
        "nameEn": "קומנדר",
        "slug": "קומנדר"
      },
      {
        "nameHe": "רנגלר",
        "nameEn": "רנגלר",
        "slug": "רנגלר"
      },
      {
        "nameHe": "קומפאס",
        "nameEn": "קומפאס",
        "slug": "קומפאס"
      },
      {
        "nameHe": "פטריוט",
        "nameEn": "פטריוט",
        "slug": "פטריוט"
      },
      {
        "nameHe": "צ'רוקי - ליברטי",
        "nameEn": "צ'רוקי - ליברטי",
        "slug": "צרוקי-ליברטי"
      },
      {
        "nameHe": "צ'ירוקי",
        "nameEn": "צ'ירוקי",
        "slug": "צירוקי"
      },
      {
        "nameHe": "רנגייד",
        "nameEn": "רנגייד",
        "slug": "רנגייד"
      },
      {
        "nameHe": "גלדיאטור",
        "nameEn": "גלדיאטור",
        "slug": "גלדיאטור"
      },
      {
        "nameHe": "אוונג'ר",
        "nameEn": "אוונג'ר",
        "slug": "אוונגר"
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
        "nameEn": "גיאומטרי C",
        "slug": "גיאומטרי-c"
      },
      {
        "nameHe": "EX5",
        "nameEn": "EX5",
        "slug": "ex5"
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
        "slug": "7"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5"
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
        "nameEn": "קונטיננטל GT",
        "slug": "קונטיננטל-gt"
      },
      {
        "nameHe": "פליינג ספור",
        "nameEn": "פליינג ספור",
        "slug": "פליינג-ספור"
      },
      {
        "nameHe": "בנטאיגה",
        "nameEn": "בנטאיגה",
        "slug": "בנטאיגה"
      },
      {
        "nameHe": "מולסאן",
        "nameEn": "מולסאן",
        "slug": "מולסאן"
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
        "nameEn": "לה קרוס",
        "slug": "לה-קרוס"
      },
      {
        "nameHe": "לוצרן",
        "nameEn": "לוצרן",
        "slug": "לוצרן"
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
        "nameEn": "סדרה 1",
        "slug": "סדרה-1"
      },
      {
        "nameHe": "סדרה 3",
        "nameEn": "סדרה 3",
        "slug": "סדרה-3"
      },
      {
        "nameHe": "סדרה 5",
        "nameEn": "סדרה 5",
        "slug": "סדרה-5"
      },
      {
        "nameHe": "סדרה 7",
        "nameEn": "סדרה 7",
        "slug": "סדרה-7"
      },
      {
        "nameHe": "X3",
        "nameEn": "X3",
        "slug": "x3"
      },
      {
        "nameHe": "X5",
        "nameEn": "X5",
        "slug": "x5"
      },
      {
        "nameHe": "Z4",
        "nameEn": "Z4",
        "slug": "z4"
      },
      {
        "nameHe": "X6",
        "nameEn": "X6",
        "slug": "x6"
      },
      {
        "nameHe": "X1",
        "nameEn": "X1",
        "slug": "x1"
      },
      {
        "nameHe": "סדרה 3 קופה",
        "nameEn": "סדרה 3 קופה",
        "slug": "סדרה-3-קופה"
      },
      {
        "nameHe": "סדרה 6 קופה",
        "nameEn": "סדרה 6 קופה",
        "slug": "סדרה-6-קופה"
      },
      {
        "nameHe": "סדרה 1 קבריולה",
        "nameEn": "סדרה 1 קבריולה",
        "slug": "סדרה-1-קבריולה"
      },
      {
        "nameHe": "סדרה 3 קבריולה",
        "nameEn": "סדרה 3 קבריולה",
        "slug": "סדרה-3-קבריולה"
      },
      {
        "nameHe": "M5",
        "nameEn": "M5",
        "slug": "m5"
      },
      {
        "nameHe": "סדרה 6 קבריולה",
        "nameEn": "סדרה 6 קבריולה",
        "slug": "סדרה-6-קבריולה"
      },
      {
        "nameHe": "M1 קופה",
        "nameEn": "M1 קופה",
        "slug": "m1-קופה"
      },
      {
        "nameHe": "סדרה 1 קופה",
        "nameEn": "סדרה 1 קופה",
        "slug": "סדרה-1-קופה"
      },
      {
        "nameHe": "סדרה 5 גראן טוריסמו",
        "nameEn": "סדרה 5 גראן טוריסמו",
        "slug": "סדרה-5-גראן-טוריסמו"
      },
      {
        "nameHe": "סדרה 6 גראן קופה",
        "nameEn": "סדרה 6 גראן קופה",
        "slug": "סדרה-6-גראן-קופה"
      },
      {
        "nameHe": "סדרה 4",
        "nameEn": "סדרה 4",
        "slug": "סדרה-4"
      },
      {
        "nameHe": "סדרה 3 סטיישן",
        "nameEn": "סדרה 3 סטיישן",
        "slug": "סדרה-3-סטיישן"
      },
      {
        "nameHe": "סדרה 5 סטיישן",
        "nameEn": "סדרה 5 סטיישן",
        "slug": "סדרה-5-סטיישן"
      },
      {
        "nameHe": "M6",
        "nameEn": "M6",
        "slug": "m6"
      },
      {
        "nameHe": "סדרה 2",
        "nameEn": "סדרה 2",
        "slug": "סדרה-2"
      },
      {
        "nameHe": "סדרה 4 קבריולה",
        "nameEn": "סדרה 4 קבריולה",
        "slug": "סדרה-4-קבריולה"
      },
      {
        "nameHe": "X4",
        "nameEn": "X4",
        "slug": "x4"
      },
      {
        "nameHe": "M3",
        "nameEn": "M3",
        "slug": "m3"
      },
      {
        "nameHe": "M4",
        "nameEn": "M4",
        "slug": "m4"
      },
      {
        "nameHe": "סדרה 3 גראן טוריסמו",
        "nameEn": "סדרה 3 גראן טוריסמו",
        "slug": "סדרה-3-גראן-טוריסמו"
      },
      {
        "nameHe": "סדרה 4 גראן קופה",
        "nameEn": "סדרה 4 גראן קופה",
        "slug": "סדרה-4-גראן-קופה"
      },
      {
        "nameHe": "M4 קבריולה",
        "nameEn": "M4 קבריולה",
        "slug": "m4-קבריולה"
      },
      {
        "nameHe": "M2",
        "nameEn": "M2",
        "slug": "m2"
      },
      {
        "nameHe": "סדרה 2 קבריולה",
        "nameEn": "סדרה 2 קבריולה",
        "slug": "סדרה-2-קבריולה"
      },
      {
        "nameHe": "סדרה 2 גראן טורר",
        "nameEn": "סדרה 2 גראן טורר",
        "slug": "סדרה-2-גראן-טורר"
      },
      {
        "nameHe": "i3",
        "nameEn": "i3",
        "slug": "i3"
      },
      {
        "nameHe": "i8",
        "nameEn": "i8",
        "slug": "i8"
      },
      {
        "nameHe": "X2",
        "nameEn": "X2",
        "slug": "x2"
      },
      {
        "nameHe": "סדרה 8",
        "nameEn": "סדרה 8",
        "slug": "סדרה-8"
      },
      {
        "nameHe": "X7",
        "nameEn": "X7",
        "slug": "x7"
      },
      {
        "nameHe": "סדרה 8 גראן קופה",
        "nameEn": "סדרה 8 גראן קופה",
        "slug": "סדרה-8-גראן-קופה"
      },
      {
        "nameHe": "סדרה 2 גראן קופה",
        "nameEn": "סדרה 2 גראן קופה",
        "slug": "סדרה-2-גראן-קופה"
      },
      {
        "nameHe": "M8",
        "nameEn": "M8",
        "slug": "m8"
      },
      {
        "nameHe": "iX3",
        "nameEn": "iX3",
        "slug": "ix3"
      },
      {
        "nameHe": "iX",
        "nameEn": "iX",
        "slug": "ix"
      },
      {
        "nameHe": "i4",
        "nameEn": "i4",
        "slug": "i4"
      },
      {
        "nameHe": "i7",
        "nameEn": "i7",
        "slug": "i7"
      },
      {
        "nameHe": "iX1",
        "nameEn": "iX1",
        "slug": "ix1"
      },
      {
        "nameHe": "XM",
        "nameEn": "XM",
        "slug": "xm"
      },
      {
        "nameHe": "i5",
        "nameEn": "i5",
        "slug": "i5"
      },
      {
        "nameHe": "iX2",
        "nameEn": "iX2",
        "slug": "ix2"
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
        "slug": "p7"
      },
      {
        "nameHe": "G9",
        "nameEn": "G9",
        "slug": "g9"
      },
      {
        "nameHe": "G6",
        "nameEn": "G6",
        "slug": "g6"
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
        "nameEn": "ונטאג'",
        "slug": "ונטאג"
      },
      {
        "nameHe": "DB9",
        "nameEn": "DB9",
        "slug": "db9"
      },
      {
        "nameHe": "ואנקוויש",
        "nameEn": "ואנקוויש",
        "slug": "ואנקוויש"
      },
      {
        "nameHe": "ראפיד",
        "nameEn": "ראפיד",
        "slug": "ראפיד"
      },
      {
        "nameHe": "DB11",
        "nameEn": "DB11",
        "slug": "db11"
      },
      {
        "nameHe": "DBX",
        "nameEn": "DBX",
        "slug": "dbx"
      },
      {
        "nameHe": "DB12",
        "nameEn": "DB12",
        "slug": "db12"
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
        "slug": "a110"
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
        "nameEn": "147",
        "slug": "147"
      },
      {
        "nameHe": "בררה",
        "nameEn": "בררה",
        "slug": "בררה"
      },
      {
        "nameHe": "156",
        "nameEn": "156",
        "slug": "156"
      },
      {
        "nameHe": "GT",
        "nameEn": "GT",
        "slug": "gt"
      },
      {
        "nameHe": "ספיידר",
        "nameEn": "ספיידר",
        "slug": "ספיידר"
      },
      {
        "nameHe": "159 סטיישן",
        "nameEn": "159 סטיישן",
        "slug": "159-סטיישן"
      },
      {
        "nameHe": "159",
        "nameEn": "159",
        "slug": "159"
      },
      {
        "nameHe": "מיטו",
        "nameEn": "מיטו",
        "slug": "מיטו"
      },
      {
        "nameHe": "ג'ולייטה",
        "nameEn": "ג'ולייטה",
        "slug": "גולייטה"
      },
      {
        "nameHe": "4c",
        "nameEn": "4c",
        "slug": "4c"
      },
      {
        "nameHe": "ג'וליה",
        "nameEn": "ג'וליה",
        "slug": "גוליה"
      },
      {
        "nameHe": "סטלביו",
        "nameEn": "סטלביו",
        "slug": "סטלביו"
      },
      {
        "nameHe": "טונאלה",
        "nameEn": "טונאלה",
        "slug": "טונאלה"
      },
      {
        "nameHe": "ג'וניור",
        "nameEn": "ג'וניור",
        "slug": "גוניור"
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
        "nameEn": "די מקס",
        "slug": "די-מקס"
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
        "slug": "g37"
      },
      {
        "nameHe": "FX37",
        "nameEn": "FX37",
        "slug": "fx37"
      },
      {
        "nameHe": "EX",
        "nameEn": "EX",
        "slug": "ex"
      },
      {
        "nameHe": "M37",
        "nameEn": "M37",
        "slug": "m37"
      },
      {
        "nameHe": "G37 קופה",
        "nameEn": "G37 קופה",
        "slug": "g37-קופה"
      },
      {
        "nameHe": "G37 קונברטיבל",
        "nameEn": "G37 קונברטיבל",
        "slug": "g37-קונברטיבל"
      },
      {
        "nameHe": "FX50",
        "nameEn": "FX50",
        "slug": "fx50"
      },
      {
        "nameHe": "FX30d",
        "nameEn": "FX30d",
        "slug": "fx30d"
      },
      {
        "nameHe": "QX60",
        "nameEn": "QX60",
        "slug": "qx60"
      },
      {
        "nameHe": "Q50",
        "nameEn": "Q50",
        "slug": "q50"
      },
      {
        "nameHe": "Q70",
        "nameEn": "Q70",
        "slug": "q70"
      },
      {
        "nameHe": "QX70",
        "nameEn": "QX70",
        "slug": "qx70"
      },
      {
        "nameHe": "QX50",
        "nameEn": "QX50",
        "slug": "qx50"
      },
      {
        "nameHe": "Q30",
        "nameEn": "Q30",
        "slug": "q30"
      },
      {
        "nameHe": "Q60",
        "nameEn": "Q60",
        "slug": "q60"
      },
      {
        "nameHe": "QX30",
        "nameEn": "QX30",
        "slug": "qx30"
      },
      {
        "nameHe": "QX55",
        "nameEn": "QX55",
        "slug": "qx55"
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
        "nameEn": "דיילי",
        "slug": "דיילי"
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
        "slug": "u5"
      },
      {
        "nameHe": "U6",
        "nameEn": "U6",
        "slug": "u6"
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
        "nameEn": "03",
        "slug": "03"
      },
      {
        "nameHe": "07",
        "nameEn": "07",
        "slug": "07"
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
        "nameEn": "קורסה",
        "slug": "קורסה"
      },
      {
        "nameHe": "אסטרה",
        "nameEn": "אסטרה",
        "slug": "אסטרה"
      },
      {
        "nameHe": "וקטרה",
        "nameEn": "וקטרה",
        "slug": "וקטרה"
      },
      {
        "nameHe": "אינסיגניה",
        "nameEn": "אינסיגניה",
        "slug": "אינסיגניה"
      },
      {
        "nameHe": "אסטרה סטיישן",
        "nameEn": "אסטרה סטיישן",
        "slug": "אסטרה-סטיישן"
      },
      {
        "nameHe": "אינסיגניה סטיישן",
        "nameEn": "אינסיגניה סטיישן",
        "slug": "אינסיגניה-סטיישן"
      },
      {
        "nameHe": "זאפירה",
        "nameEn": "זאפירה",
        "slug": "זאפירה"
      },
      {
        "nameHe": "אסטרה ברלינה",
        "nameEn": "אסטרה ברלינה",
        "slug": "אסטרה-ברלינה"
      },
      {
        "nameHe": "קורסה OPC",
        "nameEn": "קורסה OPC",
        "slug": "קורסה-opc"
      },
      {
        "nameHe": "אסטרה GTC",
        "nameEn": "אסטרה GTC",
        "slug": "אסטרה-gtc"
      },
      {
        "nameHe": "אינסיגניה OPC",
        "nameEn": "אינסיגניה OPC",
        "slug": "אינסיגניה-opc"
      },
      {
        "nameHe": "מוקה",
        "nameEn": "מוקה",
        "slug": "מוקה"
      },
      {
        "nameHe": "אדם",
        "nameEn": "אדם",
        "slug": "אדם"
      },
      {
        "nameHe": "מריבה",
        "nameEn": "מריבה",
        "slug": "מריבה"
      },
      {
        "nameHe": "קסקדה",
        "nameEn": "קסקדה",
        "slug": "קסקדה"
      },
      {
        "nameHe": "אדם רוקס",
        "nameEn": "אדם רוקס",
        "slug": "אדם-רוקס"
      },
      {
        "nameHe": "ויוארו ",
        "nameEn": "ויוארו ",
        "slug": "ויוארו"
      },
      {
        "nameHe": "גרנדלנד",
        "nameEn": "גרנדלנד",
        "slug": "גרנדלנד"
      },
      {
        "nameHe": "קרוסלנד X",
        "nameEn": "קרוסלנד X",
        "slug": "קרוסלנד-x"
      },
      {
        "nameHe": "גרנדלנד X",
        "nameEn": "גרנדלנד X",
        "slug": "גרנדלנד-x"
      },
      {
        "nameHe": "קומבו",
        "nameEn": "קומבו",
        "slug": "קומבו"
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
        "slug": "11"
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
        "slug": "a3"
      },
      {
        "nameHe": "A8",
        "nameEn": "A8",
        "slug": "a8"
      },
      {
        "nameHe": "A6",
        "nameEn": "A6",
        "slug": "a6"
      },
      {
        "nameHe": "RS6 - S6",
        "nameEn": "RS6 - S6",
        "slug": "rs6-s6"
      },
      {
        "nameHe": "TT",
        "nameEn": "TT",
        "slug": "tt"
      },
      {
        "nameHe": "S8",
        "nameEn": "S8",
        "slug": "s8"
      },
      {
        "nameHe": "Q7",
        "nameEn": "Q7",
        "slug": "q7"
      },
      {
        "nameHe": "S5",
        "nameEn": "S5",
        "slug": "s5"
      },
      {
        "nameHe": "Q5",
        "nameEn": "Q5",
        "slug": "q5"
      },
      {
        "nameHe": "TTS",
        "nameEn": "TTS",
        "slug": "tts"
      },
      {
        "nameHe": "A4",
        "nameEn": "A4",
        "slug": "a4"
      },
      {
        "nameHe": "S3",
        "nameEn": "S3",
        "slug": "s3"
      },
      {
        "nameHe": "A5 קופה",
        "nameEn": "A5 קופה",
        "slug": "a5-קופה"
      },
      {
        "nameHe": "A3 קבריולה",
        "nameEn": "A3 קבריולה",
        "slug": "a3-קבריולה"
      },
      {
        "nameHe": "S4",
        "nameEn": "S4",
        "slug": "s4"
      },
      {
        "nameHe": "A5 ספורטבק",
        "nameEn": "A5 ספורטבק",
        "slug": "a5-ספורטבק"
      },
      {
        "nameHe": "S5 קבריולה",
        "nameEn": "S5 קבריולה",
        "slug": "s5-קבריולה"
      },
      {
        "nameHe": "A1",
        "nameEn": "A1",
        "slug": "a1"
      },
      {
        "nameHe": "A7",
        "nameEn": "A7",
        "slug": "a7"
      },
      {
        "nameHe": "Q3",
        "nameEn": "Q3",
        "slug": "q3"
      },
      {
        "nameHe": "A5 קבריולה",
        "nameEn": "A5 קבריולה",
        "slug": "a5-קבריולה"
      },
      {
        "nameHe": "R8",
        "nameEn": "R8",
        "slug": "r8"
      },
      {
        "nameHe": "S7",
        "nameEn": "S7",
        "slug": "s7"
      },
      {
        "nameHe": "A3 סדאן",
        "nameEn": "A3 סדאן",
        "slug": "a3-סדאן"
      },
      {
        "nameHe": "Q3 RS",
        "nameEn": "Q3 RS",
        "slug": "q3-rs"
      },
      {
        "nameHe": "SQ5",
        "nameEn": "SQ5",
        "slug": "sq5"
      },
      {
        "nameHe": "S1",
        "nameEn": "S1",
        "slug": "s1"
      },
      {
        "nameHe": "Q2",
        "nameEn": "Q2",
        "slug": "q2"
      },
      {
        "nameHe": "SQ7",
        "nameEn": "SQ7",
        "slug": "sq7"
      },
      {
        "nameHe": "Q8",
        "nameEn": "Q8",
        "slug": "q8"
      },
      {
        "nameHe": "e-tron",
        "nameEn": "e-tron",
        "slug": "e-tron"
      },
      {
        "nameHe": "Q3 ספורטבק",
        "nameEn": "Q3 ספורטבק",
        "slug": "q3-ספורטבק"
      },
      {
        "nameHe": "Q5 ספורטבק",
        "nameEn": "Q5 ספורטבק",
        "slug": "q5-ספורטבק"
      },
      {
        "nameHe": "Q4 e-tron",
        "nameEn": "Q4 e-tron",
        "slug": "q4-e-tron"
      },
      {
        "nameHe": "Q4 e-tron ספורטבק",
        "nameEn": "Q4 e-tron ספורטבק",
        "slug": "q4-e-tron-ספורטבק"
      },
      {
        "nameHe": "e-tron GT",
        "nameEn": "e-tron GT",
        "slug": "e-tron-gt"
      },
      {
        "nameHe": "e-tron ספורטבק",
        "nameEn": "e-tron ספורטבק",
        "slug": "e-tron-ספורטבק"
      },
      {
        "nameHe": "e-tron S",
        "nameEn": "e-tron S",
        "slug": "e-tron-s"
      },
      {
        "nameHe": "Q8 e-tron",
        "nameEn": "Q8 e-tron",
        "slug": "q8-e-tron"
      },
      {
        "nameHe": "Q8 e-tron ספורטבק",
        "nameEn": "Q8 e-tron ספורטבק",
        "slug": "q8-e-tron-ספורטבק"
      },
      {
        "nameHe": "A5",
        "nameEn": "A5",
        "slug": "a5"
      },
      {
        "nameHe": "Q6 e-tron",
        "nameEn": "Q6 e-tron",
        "slug": "q6-e-tron"
      },
      {
        "nameHe": "A6 e-tron",
        "nameEn": "A6 e-tron",
        "slug": "a6-e-tron"
      },
      {
        "nameHe": "S6 e-tron",
        "nameEn": "S6 e-tron",
        "slug": "s6-e-tron"
      },
      {
        "nameHe": "Q6 e-tron ספורטבק",
        "nameEn": "Q6 e-tron ספורטבק",
        "slug": "q6-e-tron-ספורטבק"
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
        "nameEn": "500",
        "slug": "500"
      },
      {
        "nameHe": "500 קבריולה",
        "nameEn": "500 קבריולה",
        "slug": "500-קבריולה"
      },
      {
        "nameHe": "פונטו איבו",
        "nameEn": "פונטו איבו",
        "slug": "פונטו-איבו"
      },
      {
        "nameHe": "124 ספיידר",
        "nameEn": "124 ספיידר",
        "slug": "124-ספיידר"
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
        "nameEn": "קופי 01",
        "slug": "קופי-01"
      },
      {
        "nameHe": "קופי 02",
        "nameEn": "קופי 02",
        "slug": "קופי-02"
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
        "slug": "3"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5"
      },
      {
        "nameHe": "M5",
        "nameEn": "M5",
        "slug": "m5"
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
        "nameEn": "רקסטון",
        "slug": "רקסטון"
      },
      {
        "nameHe": "מוסו",
        "nameEn": "מוסו",
        "slug": "מוסו"
      },
      {
        "nameHe": "טורס",
        "nameEn": "טורס",
        "slug": "טורס"
      },
      {
        "nameHe": "טיבולי",
        "nameEn": "טיבולי",
        "slug": "טיבולי"
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
        "slug": "30"
      },
      {
        "nameHe": "40",
        "nameEn": "40",
        "slug": "40"
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
        "nameEn": "GE3",
        "slug": "ge3"
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
        "nameEn": "לימו",
        "slug": "לימו"
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
        "slug": "3"
      },
      {
        "nameHe": "5",
        "nameEn": "5",
        "slug": "5"
      },
      {
        "nameHe": "7 קרוסבק",
        "nameEn": "7 קרוסבק",
        "slug": "7-קרוסבק"
      },
      {
        "nameHe": "3 קרוסבק",
        "nameEn": "3 קרוסבק",
        "slug": "3-קרוסבק"
      },
      {
        "nameHe": "4",
        "nameEn": "4",
        "slug": "4"
      },
      {
        "nameHe": "7",
        "nameEn": "7",
        "slug": "7"
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
        "nameEn": "אטו 3",
        "slug": "אטו-3"
      },
      {
        "nameHe": "טאנג",
        "nameEn": "טאנג",
        "slug": "טאנג"
      },
      {
        "nameHe": "דולפין",
        "nameEn": "דולפין",
        "slug": "דולפין"
      },
      {
        "nameHe": "האן",
        "nameEn": "האן",
        "slug": "האן"
      },
      {
        "nameHe": "סיל",
        "nameEn": "סיל",
        "slug": "סיל"
      },
      {
        "nameHe": "סיל U",
        "nameEn": "סיל U",
        "slug": "סיל-u"
      },
      {
        "nameHe": "סיל 5",
        "nameEn": "סיל 5",
        "slug": "סיל-5"
      },
      {
        "nameHe": "דולפין סרף",
        "nameEn": "דולפין סרף",
        "slug": "דולפין-סרף"
      },
      {
        "nameHe": "סיליון 7",
        "nameEn": "סיליון 7",
        "slug": "סיליון-7"
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

export function getBrandBySlug(slug: string): VehicleBrand | undefined {
  return vehicleBrands.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
}

export function getModelBySlug(brandSlug: string, modelSlug: string): VehicleModel | undefined {
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return undefined;
  return brand.models.find((m) => m.slug.toLowerCase() === modelSlug.toLowerCase());
}
