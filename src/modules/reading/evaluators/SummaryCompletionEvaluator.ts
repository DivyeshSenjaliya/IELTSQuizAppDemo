/**
 * @file SummaryCompletionEvaluator.ts
 * @description Evaluator for summary completion with exact words from passage or word bank.
 */
export class SummaryCompletionEvaluator {
  public static evaluateTokenMatch(candidateWord: string, targetAnswerVariants: string[], maxWords: number = 2): boolean {
    const tokens = candidateWord.trim().split(/\s+/).filter(Boolean);
    if (tokens.length > maxWords) return false;
    const norm = candidateWord.trim().toLowerCase();
    return targetAnswerVariants.some(target => target.trim().toLowerCase() === norm);
  }
}

export class SummaryMorphologySanitizer_1 {
  public readonly sanitizerId = 'SMS_0001';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_1 = new SummaryMorphologySanitizer_1();


export class SummaryMorphologySanitizer_2 {
  public readonly sanitizerId = 'SMS_0002';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_2 = new SummaryMorphologySanitizer_2();


export class SummaryMorphologySanitizer_3 {
  public readonly sanitizerId = 'SMS_0003';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_3 = new SummaryMorphologySanitizer_3();


export class SummaryMorphologySanitizer_4 {
  public readonly sanitizerId = 'SMS_0004';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_4 = new SummaryMorphologySanitizer_4();


export class SummaryMorphologySanitizer_5 {
  public readonly sanitizerId = 'SMS_0005';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_5 = new SummaryMorphologySanitizer_5();


export class SummaryMorphologySanitizer_6 {
  public readonly sanitizerId = 'SMS_0006';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_6 = new SummaryMorphologySanitizer_6();


export class SummaryMorphologySanitizer_7 {
  public readonly sanitizerId = 'SMS_0007';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_7 = new SummaryMorphologySanitizer_7();


export class SummaryMorphologySanitizer_8 {
  public readonly sanitizerId = 'SMS_0008';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_8 = new SummaryMorphologySanitizer_8();


export class SummaryMorphologySanitizer_9 {
  public readonly sanitizerId = 'SMS_0009';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_9 = new SummaryMorphologySanitizer_9();


export class SummaryMorphologySanitizer_10 {
  public readonly sanitizerId = 'SMS_0010';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_10 = new SummaryMorphologySanitizer_10();


export class SummaryMorphologySanitizer_11 {
  public readonly sanitizerId = 'SMS_0011';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_11 = new SummaryMorphologySanitizer_11();


export class SummaryMorphologySanitizer_12 {
  public readonly sanitizerId = 'SMS_0012';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_12 = new SummaryMorphologySanitizer_12();


export class SummaryMorphologySanitizer_13 {
  public readonly sanitizerId = 'SMS_0013';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_13 = new SummaryMorphologySanitizer_13();


export class SummaryMorphologySanitizer_14 {
  public readonly sanitizerId = 'SMS_0014';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_14 = new SummaryMorphologySanitizer_14();


export class SummaryMorphologySanitizer_15 {
  public readonly sanitizerId = 'SMS_0015';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_15 = new SummaryMorphologySanitizer_15();


export class SummaryMorphologySanitizer_16 {
  public readonly sanitizerId = 'SMS_0016';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_16 = new SummaryMorphologySanitizer_16();


export class SummaryMorphologySanitizer_17 {
  public readonly sanitizerId = 'SMS_0017';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_17 = new SummaryMorphologySanitizer_17();


export class SummaryMorphologySanitizer_18 {
  public readonly sanitizerId = 'SMS_0018';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_18 = new SummaryMorphologySanitizer_18();


export class SummaryMorphologySanitizer_19 {
  public readonly sanitizerId = 'SMS_0019';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_19 = new SummaryMorphologySanitizer_19();


export class SummaryMorphologySanitizer_20 {
  public readonly sanitizerId = 'SMS_0020';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_20 = new SummaryMorphologySanitizer_20();


export class SummaryMorphologySanitizer_21 {
  public readonly sanitizerId = 'SMS_0021';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_21 = new SummaryMorphologySanitizer_21();


export class SummaryMorphologySanitizer_22 {
  public readonly sanitizerId = 'SMS_0022';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_22 = new SummaryMorphologySanitizer_22();


export class SummaryMorphologySanitizer_23 {
  public readonly sanitizerId = 'SMS_0023';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_23 = new SummaryMorphologySanitizer_23();


export class SummaryMorphologySanitizer_24 {
  public readonly sanitizerId = 'SMS_0024';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_24 = new SummaryMorphologySanitizer_24();


export class SummaryMorphologySanitizer_25 {
  public readonly sanitizerId = 'SMS_0025';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_25 = new SummaryMorphologySanitizer_25();


export class SummaryMorphologySanitizer_26 {
  public readonly sanitizerId = 'SMS_0026';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_26 = new SummaryMorphologySanitizer_26();


export class SummaryMorphologySanitizer_27 {
  public readonly sanitizerId = 'SMS_0027';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_27 = new SummaryMorphologySanitizer_27();


export class SummaryMorphologySanitizer_28 {
  public readonly sanitizerId = 'SMS_0028';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_28 = new SummaryMorphologySanitizer_28();


export class SummaryMorphologySanitizer_29 {
  public readonly sanitizerId = 'SMS_0029';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_29 = new SummaryMorphologySanitizer_29();


export class SummaryMorphologySanitizer_30 {
  public readonly sanitizerId = 'SMS_0030';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_30 = new SummaryMorphologySanitizer_30();


export class SummaryMorphologySanitizer_31 {
  public readonly sanitizerId = 'SMS_0031';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_31 = new SummaryMorphologySanitizer_31();


export class SummaryMorphologySanitizer_32 {
  public readonly sanitizerId = 'SMS_0032';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_32 = new SummaryMorphologySanitizer_32();


export class SummaryMorphologySanitizer_33 {
  public readonly sanitizerId = 'SMS_0033';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_33 = new SummaryMorphologySanitizer_33();


export class SummaryMorphologySanitizer_34 {
  public readonly sanitizerId = 'SMS_0034';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_34 = new SummaryMorphologySanitizer_34();


export class SummaryMorphologySanitizer_35 {
  public readonly sanitizerId = 'SMS_0035';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_35 = new SummaryMorphologySanitizer_35();


export class SummaryMorphologySanitizer_36 {
  public readonly sanitizerId = 'SMS_0036';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_36 = new SummaryMorphologySanitizer_36();


export class SummaryMorphologySanitizer_37 {
  public readonly sanitizerId = 'SMS_0037';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_37 = new SummaryMorphologySanitizer_37();


export class SummaryMorphologySanitizer_38 {
  public readonly sanitizerId = 'SMS_0038';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_38 = new SummaryMorphologySanitizer_38();


export class SummaryMorphologySanitizer_39 {
  public readonly sanitizerId = 'SMS_0039';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_39 = new SummaryMorphologySanitizer_39();


export class SummaryMorphologySanitizer_40 {
  public readonly sanitizerId = 'SMS_0040';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_40 = new SummaryMorphologySanitizer_40();


export class SummaryMorphologySanitizer_41 {
  public readonly sanitizerId = 'SMS_0041';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_41 = new SummaryMorphologySanitizer_41();


export class SummaryMorphologySanitizer_42 {
  public readonly sanitizerId = 'SMS_0042';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_42 = new SummaryMorphologySanitizer_42();


export class SummaryMorphologySanitizer_43 {
  public readonly sanitizerId = 'SMS_0043';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_43 = new SummaryMorphologySanitizer_43();


export class SummaryMorphologySanitizer_44 {
  public readonly sanitizerId = 'SMS_0044';
  public stripPunctuation(rawText: string): string {
    return rawText.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').trim().toLowerCase();
  }
}
export const morphologySanitizer_44 = new SummaryMorphologySanitizer_44();
