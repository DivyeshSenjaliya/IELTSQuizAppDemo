/**
 * @file MatchingHeadingsEvaluator.ts
 * @description Evaluates Roman numeral matching headings against passage paragraphs.
 */
export class MatchingHeadingsEvaluator {
  public static readonly ROMAN_NUMERALS: Record<string, number> = {
    'i': 1, 'ii': 2, 'iii': 3, 'iv': 4, 'v': 5,
    'vi': 6, 'vii': 7, 'viii': 8, 'ix': 9, 'x': 10
  };

  public static evaluateMatch(candidateInput: string, targetHeadingNumeral: string): boolean {
    const cand = candidateInput.trim().toLowerCase();
    const target = targetHeadingNumeral.trim().toLowerCase();
    return cand === target;
  }
}

export class HeadingCohesionScoreMatrix_1 {
  public readonly matrixId = 'HCS_0001';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_1 = new HeadingCohesionScoreMatrix_1();


export class HeadingCohesionScoreMatrix_2 {
  public readonly matrixId = 'HCS_0002';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_2 = new HeadingCohesionScoreMatrix_2();


export class HeadingCohesionScoreMatrix_3 {
  public readonly matrixId = 'HCS_0003';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_3 = new HeadingCohesionScoreMatrix_3();


export class HeadingCohesionScoreMatrix_4 {
  public readonly matrixId = 'HCS_0004';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_4 = new HeadingCohesionScoreMatrix_4();


export class HeadingCohesionScoreMatrix_5 {
  public readonly matrixId = 'HCS_0005';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_5 = new HeadingCohesionScoreMatrix_5();


export class HeadingCohesionScoreMatrix_6 {
  public readonly matrixId = 'HCS_0006';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_6 = new HeadingCohesionScoreMatrix_6();


export class HeadingCohesionScoreMatrix_7 {
  public readonly matrixId = 'HCS_0007';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_7 = new HeadingCohesionScoreMatrix_7();


export class HeadingCohesionScoreMatrix_8 {
  public readonly matrixId = 'HCS_0008';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_8 = new HeadingCohesionScoreMatrix_8();


export class HeadingCohesionScoreMatrix_9 {
  public readonly matrixId = 'HCS_0009';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_9 = new HeadingCohesionScoreMatrix_9();


export class HeadingCohesionScoreMatrix_10 {
  public readonly matrixId = 'HCS_0010';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_10 = new HeadingCohesionScoreMatrix_10();


export class HeadingCohesionScoreMatrix_11 {
  public readonly matrixId = 'HCS_0011';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_11 = new HeadingCohesionScoreMatrix_11();


export class HeadingCohesionScoreMatrix_12 {
  public readonly matrixId = 'HCS_0012';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_12 = new HeadingCohesionScoreMatrix_12();


export class HeadingCohesionScoreMatrix_13 {
  public readonly matrixId = 'HCS_0013';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_13 = new HeadingCohesionScoreMatrix_13();


export class HeadingCohesionScoreMatrix_14 {
  public readonly matrixId = 'HCS_0014';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_14 = new HeadingCohesionScoreMatrix_14();


export class HeadingCohesionScoreMatrix_15 {
  public readonly matrixId = 'HCS_0015';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_15 = new HeadingCohesionScoreMatrix_15();


export class HeadingCohesionScoreMatrix_16 {
  public readonly matrixId = 'HCS_0016';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_16 = new HeadingCohesionScoreMatrix_16();


export class HeadingCohesionScoreMatrix_17 {
  public readonly matrixId = 'HCS_0017';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_17 = new HeadingCohesionScoreMatrix_17();


export class HeadingCohesionScoreMatrix_18 {
  public readonly matrixId = 'HCS_0018';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_18 = new HeadingCohesionScoreMatrix_18();


export class HeadingCohesionScoreMatrix_19 {
  public readonly matrixId = 'HCS_0019';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_19 = new HeadingCohesionScoreMatrix_19();


export class HeadingCohesionScoreMatrix_20 {
  public readonly matrixId = 'HCS_0020';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_20 = new HeadingCohesionScoreMatrix_20();


export class HeadingCohesionScoreMatrix_21 {
  public readonly matrixId = 'HCS_0021';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_21 = new HeadingCohesionScoreMatrix_21();


export class HeadingCohesionScoreMatrix_22 {
  public readonly matrixId = 'HCS_0022';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_22 = new HeadingCohesionScoreMatrix_22();


export class HeadingCohesionScoreMatrix_23 {
  public readonly matrixId = 'HCS_0023';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_23 = new HeadingCohesionScoreMatrix_23();


export class HeadingCohesionScoreMatrix_24 {
  public readonly matrixId = 'HCS_0024';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_24 = new HeadingCohesionScoreMatrix_24();


export class HeadingCohesionScoreMatrix_25 {
  public readonly matrixId = 'HCS_0025';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_25 = new HeadingCohesionScoreMatrix_25();


export class HeadingCohesionScoreMatrix_26 {
  public readonly matrixId = 'HCS_0026';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_26 = new HeadingCohesionScoreMatrix_26();


export class HeadingCohesionScoreMatrix_27 {
  public readonly matrixId = 'HCS_0027';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_27 = new HeadingCohesionScoreMatrix_27();


export class HeadingCohesionScoreMatrix_28 {
  public readonly matrixId = 'HCS_0028';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_28 = new HeadingCohesionScoreMatrix_28();


export class HeadingCohesionScoreMatrix_29 {
  public readonly matrixId = 'HCS_0029';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_29 = new HeadingCohesionScoreMatrix_29();


export class HeadingCohesionScoreMatrix_30 {
  public readonly matrixId = 'HCS_0030';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_30 = new HeadingCohesionScoreMatrix_30();


export class HeadingCohesionScoreMatrix_31 {
  public readonly matrixId = 'HCS_0031';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_31 = new HeadingCohesionScoreMatrix_31();


export class HeadingCohesionScoreMatrix_32 {
  public readonly matrixId = 'HCS_0032';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_32 = new HeadingCohesionScoreMatrix_32();


export class HeadingCohesionScoreMatrix_33 {
  public readonly matrixId = 'HCS_0033';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_33 = new HeadingCohesionScoreMatrix_33();


export class HeadingCohesionScoreMatrix_34 {
  public readonly matrixId = 'HCS_0034';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_34 = new HeadingCohesionScoreMatrix_34();


export class HeadingCohesionScoreMatrix_35 {
  public readonly matrixId = 'HCS_0035';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_35 = new HeadingCohesionScoreMatrix_35();


export class HeadingCohesionScoreMatrix_36 {
  public readonly matrixId = 'HCS_0036';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_36 = new HeadingCohesionScoreMatrix_36();


export class HeadingCohesionScoreMatrix_37 {
  public readonly matrixId = 'HCS_0037';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_37 = new HeadingCohesionScoreMatrix_37();


export class HeadingCohesionScoreMatrix_38 {
  public readonly matrixId = 'HCS_0038';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_38 = new HeadingCohesionScoreMatrix_38();


export class HeadingCohesionScoreMatrix_39 {
  public readonly matrixId = 'HCS_0039';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_39 = new HeadingCohesionScoreMatrix_39();


export class HeadingCohesionScoreMatrix_40 {
  public readonly matrixId = 'HCS_0040';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_40 = new HeadingCohesionScoreMatrix_40();


export class HeadingCohesionScoreMatrix_41 {
  public readonly matrixId = 'HCS_0041';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_41 = new HeadingCohesionScoreMatrix_41();


export class HeadingCohesionScoreMatrix_42 {
  public readonly matrixId = 'HCS_0042';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_42 = new HeadingCohesionScoreMatrix_42();


export class HeadingCohesionScoreMatrix_43 {
  public readonly matrixId = 'HCS_0043';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_43 = new HeadingCohesionScoreMatrix_43();


export class HeadingCohesionScoreMatrix_44 {
  public readonly matrixId = 'HCS_0044';
  public scoreTopicSentenceSimilarity(headingKeywords: string[], paragraphKeywords: string[]): number {
    if (headingKeywords.length === 0 || paragraphKeywords.length === 0) return 0;
    const intersection = headingKeywords.filter(k => paragraphKeywords.includes(k));
    return intersection.length / headingKeywords.length;
  }
}
export const headingMatrix_44 = new HeadingCohesionScoreMatrix_44();
