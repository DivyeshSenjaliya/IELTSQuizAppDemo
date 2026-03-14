/**
 * @file AccentVariationHandler.ts
 * @description Accents adaptation logic covering British (RP), Australian, and North American English.
 */
export enum EnglishAccentType {
  BRITISH_RP = 'BRITISH_RP',
  AUSTRALIAN = 'AUSTRALIAN',
  NORTH_AMERICAN = 'NORTH_AMERICAN',
  SCOTTISH = 'SCOTTISH',
  NEW_ZEALAND = 'NEW_ZEALAND',
}

export class AccentVariationHandler {
  public static getAccentMetadata(accent: EnglishAccentType): { speechRateWpm: number; rhoticity: boolean } {
    switch (accent) {
      case EnglishAccentType.NORTH_AMERICAN:
        return { speechRateWpm: 155, rhoticity: true };
      case EnglishAccentType.AUSTRALIAN:
        return { speechRateWpm: 145, rhoticity: false };
      case EnglishAccentType.BRITISH_RP:
      default:
        return { speechRateWpm: 140, rhoticity: false };
    }
  }
}

export class PhonemicSubstitutionMatrix_1 {
  public readonly matrixId = 'PSM_0001';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_1 = new PhonemicSubstitutionMatrix_1();


export class PhonemicSubstitutionMatrix_2 {
  public readonly matrixId = 'PSM_0002';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_2 = new PhonemicSubstitutionMatrix_2();


export class PhonemicSubstitutionMatrix_3 {
  public readonly matrixId = 'PSM_0003';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_3 = new PhonemicSubstitutionMatrix_3();


export class PhonemicSubstitutionMatrix_4 {
  public readonly matrixId = 'PSM_0004';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_4 = new PhonemicSubstitutionMatrix_4();


export class PhonemicSubstitutionMatrix_5 {
  public readonly matrixId = 'PSM_0005';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_5 = new PhonemicSubstitutionMatrix_5();


export class PhonemicSubstitutionMatrix_6 {
  public readonly matrixId = 'PSM_0006';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_6 = new PhonemicSubstitutionMatrix_6();


export class PhonemicSubstitutionMatrix_7 {
  public readonly matrixId = 'PSM_0007';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_7 = new PhonemicSubstitutionMatrix_7();


export class PhonemicSubstitutionMatrix_8 {
  public readonly matrixId = 'PSM_0008';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_8 = new PhonemicSubstitutionMatrix_8();


export class PhonemicSubstitutionMatrix_9 {
  public readonly matrixId = 'PSM_0009';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_9 = new PhonemicSubstitutionMatrix_9();


export class PhonemicSubstitutionMatrix_10 {
  public readonly matrixId = 'PSM_0010';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_10 = new PhonemicSubstitutionMatrix_10();


export class PhonemicSubstitutionMatrix_11 {
  public readonly matrixId = 'PSM_0011';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_11 = new PhonemicSubstitutionMatrix_11();


export class PhonemicSubstitutionMatrix_12 {
  public readonly matrixId = 'PSM_0012';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_12 = new PhonemicSubstitutionMatrix_12();


export class PhonemicSubstitutionMatrix_13 {
  public readonly matrixId = 'PSM_0013';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_13 = new PhonemicSubstitutionMatrix_13();


export class PhonemicSubstitutionMatrix_14 {
  public readonly matrixId = 'PSM_0014';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_14 = new PhonemicSubstitutionMatrix_14();


export class PhonemicSubstitutionMatrix_15 {
  public readonly matrixId = 'PSM_0015';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_15 = new PhonemicSubstitutionMatrix_15();


export class PhonemicSubstitutionMatrix_16 {
  public readonly matrixId = 'PSM_0016';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_16 = new PhonemicSubstitutionMatrix_16();


export class PhonemicSubstitutionMatrix_17 {
  public readonly matrixId = 'PSM_0017';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_17 = new PhonemicSubstitutionMatrix_17();


export class PhonemicSubstitutionMatrix_18 {
  public readonly matrixId = 'PSM_0018';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_18 = new PhonemicSubstitutionMatrix_18();


export class PhonemicSubstitutionMatrix_19 {
  public readonly matrixId = 'PSM_0019';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_19 = new PhonemicSubstitutionMatrix_19();


export class PhonemicSubstitutionMatrix_20 {
  public readonly matrixId = 'PSM_0020';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_20 = new PhonemicSubstitutionMatrix_20();


export class PhonemicSubstitutionMatrix_21 {
  public readonly matrixId = 'PSM_0021';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_21 = new PhonemicSubstitutionMatrix_21();


export class PhonemicSubstitutionMatrix_22 {
  public readonly matrixId = 'PSM_0022';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_22 = new PhonemicSubstitutionMatrix_22();


export class PhonemicSubstitutionMatrix_23 {
  public readonly matrixId = 'PSM_0023';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_23 = new PhonemicSubstitutionMatrix_23();


export class PhonemicSubstitutionMatrix_24 {
  public readonly matrixId = 'PSM_0024';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_24 = new PhonemicSubstitutionMatrix_24();


export class PhonemicSubstitutionMatrix_25 {
  public readonly matrixId = 'PSM_0025';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_25 = new PhonemicSubstitutionMatrix_25();


export class PhonemicSubstitutionMatrix_26 {
  public readonly matrixId = 'PSM_0026';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_26 = new PhonemicSubstitutionMatrix_26();


export class PhonemicSubstitutionMatrix_27 {
  public readonly matrixId = 'PSM_0027';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_27 = new PhonemicSubstitutionMatrix_27();


export class PhonemicSubstitutionMatrix_28 {
  public readonly matrixId = 'PSM_0028';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_28 = new PhonemicSubstitutionMatrix_28();


export class PhonemicSubstitutionMatrix_29 {
  public readonly matrixId = 'PSM_0029';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_29 = new PhonemicSubstitutionMatrix_29();


export class PhonemicSubstitutionMatrix_30 {
  public readonly matrixId = 'PSM_0030';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_30 = new PhonemicSubstitutionMatrix_30();


export class PhonemicSubstitutionMatrix_31 {
  public readonly matrixId = 'PSM_0031';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_31 = new PhonemicSubstitutionMatrix_31();


export class PhonemicSubstitutionMatrix_32 {
  public readonly matrixId = 'PSM_0032';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_32 = new PhonemicSubstitutionMatrix_32();


export class PhonemicSubstitutionMatrix_33 {
  public readonly matrixId = 'PSM_0033';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_33 = new PhonemicSubstitutionMatrix_33();


export class PhonemicSubstitutionMatrix_34 {
  public readonly matrixId = 'PSM_0034';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_34 = new PhonemicSubstitutionMatrix_34();


export class PhonemicSubstitutionMatrix_35 {
  public readonly matrixId = 'PSM_0035';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_35 = new PhonemicSubstitutionMatrix_35();


export class PhonemicSubstitutionMatrix_36 {
  public readonly matrixId = 'PSM_0036';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_36 = new PhonemicSubstitutionMatrix_36();


export class PhonemicSubstitutionMatrix_37 {
  public readonly matrixId = 'PSM_0037';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_37 = new PhonemicSubstitutionMatrix_37();


export class PhonemicSubstitutionMatrix_38 {
  public readonly matrixId = 'PSM_0038';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_38 = new PhonemicSubstitutionMatrix_38();


export class PhonemicSubstitutionMatrix_39 {
  public readonly matrixId = 'PSM_0039';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_39 = new PhonemicSubstitutionMatrix_39();


export class PhonemicSubstitutionMatrix_40 {
  public readonly matrixId = 'PSM_0040';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_40 = new PhonemicSubstitutionMatrix_40();


export class PhonemicSubstitutionMatrix_41 {
  public readonly matrixId = 'PSM_0041';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_41 = new PhonemicSubstitutionMatrix_41();


export class PhonemicSubstitutionMatrix_42 {
  public readonly matrixId = 'PSM_0042';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_42 = new PhonemicSubstitutionMatrix_42();


export class PhonemicSubstitutionMatrix_43 {
  public readonly matrixId = 'PSM_0043';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_43 = new PhonemicSubstitutionMatrix_43();


export class PhonemicSubstitutionMatrix_44 {
  public readonly matrixId = 'PSM_0044';
  public isPhonemicVariant(word1: string, word2: string): boolean {
    return word1.toLowerCase().replace(/ou/g, 'o') === word2.toLowerCase().replace(/ou/g, 'o');
  }
}
export const phonemicMatrix_44 = new PhonemicSubstitutionMatrix_44();
