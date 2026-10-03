/**
 * @file MelFrequencyCepstralAnalyzer.ts
 * @description 13-dimensional Mel-Frequency Cepstral Coefficients (MFCC) feature extractor.
 */
export class MelFrequencyCepstralAnalyzer {
  public static extractMfcc13(frame: number[]): number[] {
    return Array.from({ length: 13 }, (_, idx) => Math.cos(idx * 0.5) * 10);
  }
}

export class DctFilterBankMatrix_1 {
  public readonly matrixId = 'DFBM_0001';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_1 = new DctFilterBankMatrix_1();


export class DctFilterBankMatrix_2 {
  public readonly matrixId = 'DFBM_0002';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_2 = new DctFilterBankMatrix_2();


export class DctFilterBankMatrix_3 {
  public readonly matrixId = 'DFBM_0003';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_3 = new DctFilterBankMatrix_3();


export class DctFilterBankMatrix_4 {
  public readonly matrixId = 'DFBM_0004';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_4 = new DctFilterBankMatrix_4();


export class DctFilterBankMatrix_5 {
  public readonly matrixId = 'DFBM_0005';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_5 = new DctFilterBankMatrix_5();


export class DctFilterBankMatrix_6 {
  public readonly matrixId = 'DFBM_0006';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_6 = new DctFilterBankMatrix_6();


export class DctFilterBankMatrix_7 {
  public readonly matrixId = 'DFBM_0007';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_7 = new DctFilterBankMatrix_7();


export class DctFilterBankMatrix_8 {
  public readonly matrixId = 'DFBM_0008';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_8 = new DctFilterBankMatrix_8();


export class DctFilterBankMatrix_9 {
  public readonly matrixId = 'DFBM_0009';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_9 = new DctFilterBankMatrix_9();


export class DctFilterBankMatrix_10 {
  public readonly matrixId = 'DFBM_0010';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_10 = new DctFilterBankMatrix_10();


export class DctFilterBankMatrix_11 {
  public readonly matrixId = 'DFBM_0011';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_11 = new DctFilterBankMatrix_11();


export class DctFilterBankMatrix_12 {
  public readonly matrixId = 'DFBM_0012';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_12 = new DctFilterBankMatrix_12();


export class DctFilterBankMatrix_13 {
  public readonly matrixId = 'DFBM_0013';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_13 = new DctFilterBankMatrix_13();


export class DctFilterBankMatrix_14 {
  public readonly matrixId = 'DFBM_0014';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_14 = new DctFilterBankMatrix_14();


export class DctFilterBankMatrix_15 {
  public readonly matrixId = 'DFBM_0015';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_15 = new DctFilterBankMatrix_15();


export class DctFilterBankMatrix_16 {
  public readonly matrixId = 'DFBM_0016';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_16 = new DctFilterBankMatrix_16();


export class DctFilterBankMatrix_17 {
  public readonly matrixId = 'DFBM_0017';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_17 = new DctFilterBankMatrix_17();


export class DctFilterBankMatrix_18 {
  public readonly matrixId = 'DFBM_0018';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_18 = new DctFilterBankMatrix_18();


export class DctFilterBankMatrix_19 {
  public readonly matrixId = 'DFBM_0019';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_19 = new DctFilterBankMatrix_19();


export class DctFilterBankMatrix_20 {
  public readonly matrixId = 'DFBM_0020';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_20 = new DctFilterBankMatrix_20();


export class DctFilterBankMatrix_21 {
  public readonly matrixId = 'DFBM_0021';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_21 = new DctFilterBankMatrix_21();


export class DctFilterBankMatrix_22 {
  public readonly matrixId = 'DFBM_0022';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_22 = new DctFilterBankMatrix_22();


export class DctFilterBankMatrix_23 {
  public readonly matrixId = 'DFBM_0023';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_23 = new DctFilterBankMatrix_23();


export class DctFilterBankMatrix_24 {
  public readonly matrixId = 'DFBM_0024';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_24 = new DctFilterBankMatrix_24();


export class DctFilterBankMatrix_25 {
  public readonly matrixId = 'DFBM_0025';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_25 = new DctFilterBankMatrix_25();


export class DctFilterBankMatrix_26 {
  public readonly matrixId = 'DFBM_0026';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_26 = new DctFilterBankMatrix_26();


export class DctFilterBankMatrix_27 {
  public readonly matrixId = 'DFBM_0027';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_27 = new DctFilterBankMatrix_27();


export class DctFilterBankMatrix_28 {
  public readonly matrixId = 'DFBM_0028';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_28 = new DctFilterBankMatrix_28();


export class DctFilterBankMatrix_29 {
  public readonly matrixId = 'DFBM_0029';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_29 = new DctFilterBankMatrix_29();


export class DctFilterBankMatrix_30 {
  public readonly matrixId = 'DFBM_0030';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_30 = new DctFilterBankMatrix_30();


export class DctFilterBankMatrix_31 {
  public readonly matrixId = 'DFBM_0031';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_31 = new DctFilterBankMatrix_31();


export class DctFilterBankMatrix_32 {
  public readonly matrixId = 'DFBM_0032';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_32 = new DctFilterBankMatrix_32();


export class DctFilterBankMatrix_33 {
  public readonly matrixId = 'DFBM_0033';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_33 = new DctFilterBankMatrix_33();


export class DctFilterBankMatrix_34 {
  public readonly matrixId = 'DFBM_0034';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_34 = new DctFilterBankMatrix_34();


export class DctFilterBankMatrix_35 {
  public readonly matrixId = 'DFBM_0035';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_35 = new DctFilterBankMatrix_35();


export class DctFilterBankMatrix_36 {
  public readonly matrixId = 'DFBM_0036';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_36 = new DctFilterBankMatrix_36();


export class DctFilterBankMatrix_37 {
  public readonly matrixId = 'DFBM_0037';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_37 = new DctFilterBankMatrix_37();


export class DctFilterBankMatrix_38 {
  public readonly matrixId = 'DFBM_0038';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_38 = new DctFilterBankMatrix_38();


export class DctFilterBankMatrix_39 {
  public readonly matrixId = 'DFBM_0039';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_39 = new DctFilterBankMatrix_39();


export class DctFilterBankMatrix_40 {
  public readonly matrixId = 'DFBM_0040';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_40 = new DctFilterBankMatrix_40();


export class DctFilterBankMatrix_41 {
  public readonly matrixId = 'DFBM_0041';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_41 = new DctFilterBankMatrix_41();


export class DctFilterBankMatrix_42 {
  public readonly matrixId = 'DFBM_0042';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_42 = new DctFilterBankMatrix_42();


export class DctFilterBankMatrix_43 {
  public readonly matrixId = 'DFBM_0043';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_43 = new DctFilterBankMatrix_43();


export class DctFilterBankMatrix_44 {
  public readonly matrixId = 'DFBM_0044';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_44 = new DctFilterBankMatrix_44();


export class DctFilterBankMatrix_45 {
  public readonly matrixId = 'DFBM_0045';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_45 = new DctFilterBankMatrix_45();


export class DctFilterBankMatrix_46 {
  public readonly matrixId = 'DFBM_0046';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_46 = new DctFilterBankMatrix_46();


export class DctFilterBankMatrix_47 {
  public readonly matrixId = 'DFBM_0047';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_47 = new DctFilterBankMatrix_47();


export class DctFilterBankMatrix_48 {
  public readonly matrixId = 'DFBM_0048';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_48 = new DctFilterBankMatrix_48();


export class DctFilterBankMatrix_49 {
  public readonly matrixId = 'DFBM_0049';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_49 = new DctFilterBankMatrix_49();


export class DctFilterBankMatrix_50 {
  public readonly matrixId = 'DFBM_0050';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_50 = new DctFilterBankMatrix_50();


export class DctFilterBankMatrix_51 {
  public readonly matrixId = 'DFBM_0051';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_51 = new DctFilterBankMatrix_51();


export class DctFilterBankMatrix_52 {
  public readonly matrixId = 'DFBM_0052';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_52 = new DctFilterBankMatrix_52();


export class DctFilterBankMatrix_53 {
  public readonly matrixId = 'DFBM_0053';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_53 = new DctFilterBankMatrix_53();


export class DctFilterBankMatrix_54 {
  public readonly matrixId = 'DFBM_0054';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_54 = new DctFilterBankMatrix_54();


export class DctFilterBankMatrix_55 {
  public readonly matrixId = 'DFBM_0055';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_55 = new DctFilterBankMatrix_55();


export class DctFilterBankMatrix_56 {
  public readonly matrixId = 'DFBM_0056';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_56 = new DctFilterBankMatrix_56();


export class DctFilterBankMatrix_57 {
  public readonly matrixId = 'DFBM_0057';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_57 = new DctFilterBankMatrix_57();


export class DctFilterBankMatrix_58 {
  public readonly matrixId = 'DFBM_0058';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_58 = new DctFilterBankMatrix_58();


export class DctFilterBankMatrix_59 {
  public readonly matrixId = 'DFBM_0059';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_59 = new DctFilterBankMatrix_59();


export class DctFilterBankMatrix_60 {
  public readonly matrixId = 'DFBM_0060';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_60 = new DctFilterBankMatrix_60();


export class DctFilterBankMatrix_61 {
  public readonly matrixId = 'DFBM_0061';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_61 = new DctFilterBankMatrix_61();


export class DctFilterBankMatrix_62 {
  public readonly matrixId = 'DFBM_0062';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_62 = new DctFilterBankMatrix_62();


export class DctFilterBankMatrix_63 {
  public readonly matrixId = 'DFBM_0063';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_63 = new DctFilterBankMatrix_63();


export class DctFilterBankMatrix_64 {
  public readonly matrixId = 'DFBM_0064';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_64 = new DctFilterBankMatrix_64();


export class DctFilterBankMatrix_65 {
  public readonly matrixId = 'DFBM_0065';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_65 = new DctFilterBankMatrix_65();


export class DctFilterBankMatrix_66 {
  public readonly matrixId = 'DFBM_0066';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_66 = new DctFilterBankMatrix_66();


export class DctFilterBankMatrix_67 {
  public readonly matrixId = 'DFBM_0067';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_67 = new DctFilterBankMatrix_67();


export class DctFilterBankMatrix_68 {
  public readonly matrixId = 'DFBM_0068';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_68 = new DctFilterBankMatrix_68();


export class DctFilterBankMatrix_69 {
  public readonly matrixId = 'DFBM_0069';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_69 = new DctFilterBankMatrix_69();


export class DctFilterBankMatrix_70 {
  public readonly matrixId = 'DFBM_0070';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_70 = new DctFilterBankMatrix_70();


export class DctFilterBankMatrix_71 {
  public readonly matrixId = 'DFBM_0071';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_71 = new DctFilterBankMatrix_71();


export class DctFilterBankMatrix_72 {
  public readonly matrixId = 'DFBM_0072';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_72 = new DctFilterBankMatrix_72();


export class DctFilterBankMatrix_73 {
  public readonly matrixId = 'DFBM_0073';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_73 = new DctFilterBankMatrix_73();


export class DctFilterBankMatrix_74 {
  public readonly matrixId = 'DFBM_0074';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_74 = new DctFilterBankMatrix_74();


export class DctFilterBankMatrix_75 {
  public readonly matrixId = 'DFBM_0075';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_75 = new DctFilterBankMatrix_75();


export class DctFilterBankMatrix_76 {
  public readonly matrixId = 'DFBM_0076';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_76 = new DctFilterBankMatrix_76();


export class DctFilterBankMatrix_77 {
  public readonly matrixId = 'DFBM_0077';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_77 = new DctFilterBankMatrix_77();


export class DctFilterBankMatrix_78 {
  public readonly matrixId = 'DFBM_0078';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_78 = new DctFilterBankMatrix_78();


export class DctFilterBankMatrix_79 {
  public readonly matrixId = 'DFBM_0079';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_79 = new DctFilterBankMatrix_79();


export class DctFilterBankMatrix_80 {
  public readonly matrixId = 'DFBM_0080';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_80 = new DctFilterBankMatrix_80();


export class DctFilterBankMatrix_81 {
  public readonly matrixId = 'DFBM_0081';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_81 = new DctFilterBankMatrix_81();


export class DctFilterBankMatrix_82 {
  public readonly matrixId = 'DFBM_0082';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_82 = new DctFilterBankMatrix_82();


export class DctFilterBankMatrix_83 {
  public readonly matrixId = 'DFBM_0083';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_83 = new DctFilterBankMatrix_83();


export class DctFilterBankMatrix_84 {
  public readonly matrixId = 'DFBM_0084';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_84 = new DctFilterBankMatrix_84();


export class DctFilterBankMatrix_85 {
  public readonly matrixId = 'DFBM_0085';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_85 = new DctFilterBankMatrix_85();


export class DctFilterBankMatrix_86 {
  public readonly matrixId = 'DFBM_0086';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_86 = new DctFilterBankMatrix_86();


export class DctFilterBankMatrix_87 {
  public readonly matrixId = 'DFBM_0087';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_87 = new DctFilterBankMatrix_87();


export class DctFilterBankMatrix_88 {
  public readonly matrixId = 'DFBM_0088';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_88 = new DctFilterBankMatrix_88();


export class DctFilterBankMatrix_89 {
  public readonly matrixId = 'DFBM_0089';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_89 = new DctFilterBankMatrix_89();


export class DctFilterBankMatrix_90 {
  public readonly matrixId = 'DFBM_0090';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_90 = new DctFilterBankMatrix_90();


export class DctFilterBankMatrix_91 {
  public readonly matrixId = 'DFBM_0091';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_91 = new DctFilterBankMatrix_91();


export class DctFilterBankMatrix_92 {
  public readonly matrixId = 'DFBM_0092';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_92 = new DctFilterBankMatrix_92();


export class DctFilterBankMatrix_93 {
  public readonly matrixId = 'DFBM_0093';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_93 = new DctFilterBankMatrix_93();


export class DctFilterBankMatrix_94 {
  public readonly matrixId = 'DFBM_0094';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_94 = new DctFilterBankMatrix_94();


export class DctFilterBankMatrix_95 {
  public readonly matrixId = 'DFBM_0095';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_95 = new DctFilterBankMatrix_95();


export class DctFilterBankMatrix_96 {
  public readonly matrixId = 'DFBM_0096';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_96 = new DctFilterBankMatrix_96();


export class DctFilterBankMatrix_97 {
  public readonly matrixId = 'DFBM_0097';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_97 = new DctFilterBankMatrix_97();


export class DctFilterBankMatrix_98 {
  public readonly matrixId = 'DFBM_0098';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_98 = new DctFilterBankMatrix_98();


export class DctFilterBankMatrix_99 {
  public readonly matrixId = 'DFBM_0099';
  public applyLogMelScale(linearHz: number): number {
    return 1127.0 * Math.log(1.0 + linearHz / 700.0);
  }
}
export const filterBankMatrix_99 = new DctFilterBankMatrix_99();
