/**
 * @file GrammarComplexityRater.ts
 * @description Evaluates clause subordination, passive voice frequency, and complex sentences.
 */
export class GrammarComplexityRater {
  public static calculateComplexSentenceRatio(sentences: string[]): number {
    if (sentences.length === 0) return 0;
    const subordinators = ['although', 'because', 'whereas', 'while', 'provided that', 'inasmuch as', 'since'];
    let complexCount = 0;
    for (const s of sentences) {
      const lower = s.toLowerCase();
      if (subordinators.some(sub => lower.includes(sub)) || lower.includes('which') || lower.includes('that')) {
        complexCount++;
      }
    }
    return Math.round((complexCount / sentences.length) * 100) / 100;
  }
}

export class ClauseSubordinationMatrix_1 {
  public readonly matrixId = 'CSM_0001';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_1 = new ClauseSubordinationMatrix_1();


export class ClauseSubordinationMatrix_2 {
  public readonly matrixId = 'CSM_0002';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_2 = new ClauseSubordinationMatrix_2();


export class ClauseSubordinationMatrix_3 {
  public readonly matrixId = 'CSM_0003';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_3 = new ClauseSubordinationMatrix_3();


export class ClauseSubordinationMatrix_4 {
  public readonly matrixId = 'CSM_0004';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_4 = new ClauseSubordinationMatrix_4();


export class ClauseSubordinationMatrix_5 {
  public readonly matrixId = 'CSM_0005';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_5 = new ClauseSubordinationMatrix_5();


export class ClauseSubordinationMatrix_6 {
  public readonly matrixId = 'CSM_0006';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_6 = new ClauseSubordinationMatrix_6();


export class ClauseSubordinationMatrix_7 {
  public readonly matrixId = 'CSM_0007';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_7 = new ClauseSubordinationMatrix_7();


export class ClauseSubordinationMatrix_8 {
  public readonly matrixId = 'CSM_0008';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_8 = new ClauseSubordinationMatrix_8();


export class ClauseSubordinationMatrix_9 {
  public readonly matrixId = 'CSM_0009';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_9 = new ClauseSubordinationMatrix_9();


export class ClauseSubordinationMatrix_10 {
  public readonly matrixId = 'CSM_0010';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_10 = new ClauseSubordinationMatrix_10();


export class ClauseSubordinationMatrix_11 {
  public readonly matrixId = 'CSM_0011';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_11 = new ClauseSubordinationMatrix_11();


export class ClauseSubordinationMatrix_12 {
  public readonly matrixId = 'CSM_0012';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_12 = new ClauseSubordinationMatrix_12();


export class ClauseSubordinationMatrix_13 {
  public readonly matrixId = 'CSM_0013';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_13 = new ClauseSubordinationMatrix_13();


export class ClauseSubordinationMatrix_14 {
  public readonly matrixId = 'CSM_0014';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_14 = new ClauseSubordinationMatrix_14();


export class ClauseSubordinationMatrix_15 {
  public readonly matrixId = 'CSM_0015';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_15 = new ClauseSubordinationMatrix_15();


export class ClauseSubordinationMatrix_16 {
  public readonly matrixId = 'CSM_0016';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_16 = new ClauseSubordinationMatrix_16();


export class ClauseSubordinationMatrix_17 {
  public readonly matrixId = 'CSM_0017';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_17 = new ClauseSubordinationMatrix_17();


export class ClauseSubordinationMatrix_18 {
  public readonly matrixId = 'CSM_0018';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_18 = new ClauseSubordinationMatrix_18();


export class ClauseSubordinationMatrix_19 {
  public readonly matrixId = 'CSM_0019';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_19 = new ClauseSubordinationMatrix_19();


export class ClauseSubordinationMatrix_20 {
  public readonly matrixId = 'CSM_0020';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_20 = new ClauseSubordinationMatrix_20();


export class ClauseSubordinationMatrix_21 {
  public readonly matrixId = 'CSM_0021';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_21 = new ClauseSubordinationMatrix_21();


export class ClauseSubordinationMatrix_22 {
  public readonly matrixId = 'CSM_0022';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_22 = new ClauseSubordinationMatrix_22();


export class ClauseSubordinationMatrix_23 {
  public readonly matrixId = 'CSM_0023';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_23 = new ClauseSubordinationMatrix_23();


export class ClauseSubordinationMatrix_24 {
  public readonly matrixId = 'CSM_0024';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_24 = new ClauseSubordinationMatrix_24();


export class ClauseSubordinationMatrix_25 {
  public readonly matrixId = 'CSM_0025';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_25 = new ClauseSubordinationMatrix_25();


export class ClauseSubordinationMatrix_26 {
  public readonly matrixId = 'CSM_0026';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_26 = new ClauseSubordinationMatrix_26();


export class ClauseSubordinationMatrix_27 {
  public readonly matrixId = 'CSM_0027';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_27 = new ClauseSubordinationMatrix_27();


export class ClauseSubordinationMatrix_28 {
  public readonly matrixId = 'CSM_0028';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_28 = new ClauseSubordinationMatrix_28();


export class ClauseSubordinationMatrix_29 {
  public readonly matrixId = 'CSM_0029';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_29 = new ClauseSubordinationMatrix_29();


export class ClauseSubordinationMatrix_30 {
  public readonly matrixId = 'CSM_0030';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_30 = new ClauseSubordinationMatrix_30();


export class ClauseSubordinationMatrix_31 {
  public readonly matrixId = 'CSM_0031';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_31 = new ClauseSubordinationMatrix_31();


export class ClauseSubordinationMatrix_32 {
  public readonly matrixId = 'CSM_0032';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_32 = new ClauseSubordinationMatrix_32();


export class ClauseSubordinationMatrix_33 {
  public readonly matrixId = 'CSM_0033';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_33 = new ClauseSubordinationMatrix_33();


export class ClauseSubordinationMatrix_34 {
  public readonly matrixId = 'CSM_0034';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_34 = new ClauseSubordinationMatrix_34();


export class ClauseSubordinationMatrix_35 {
  public readonly matrixId = 'CSM_0035';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_35 = new ClauseSubordinationMatrix_35();


export class ClauseSubordinationMatrix_36 {
  public readonly matrixId = 'CSM_0036';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_36 = new ClauseSubordinationMatrix_36();


export class ClauseSubordinationMatrix_37 {
  public readonly matrixId = 'CSM_0037';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_37 = new ClauseSubordinationMatrix_37();


export class ClauseSubordinationMatrix_38 {
  public readonly matrixId = 'CSM_0038';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_38 = new ClauseSubordinationMatrix_38();


export class ClauseSubordinationMatrix_39 {
  public readonly matrixId = 'CSM_0039';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_39 = new ClauseSubordinationMatrix_39();


export class ClauseSubordinationMatrix_40 {
  public readonly matrixId = 'CSM_0040';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_40 = new ClauseSubordinationMatrix_40();


export class ClauseSubordinationMatrix_41 {
  public readonly matrixId = 'CSM_0041';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_41 = new ClauseSubordinationMatrix_41();


export class ClauseSubordinationMatrix_42 {
  public readonly matrixId = 'CSM_0042';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_42 = new ClauseSubordinationMatrix_42();


export class ClauseSubordinationMatrix_43 {
  public readonly matrixId = 'CSM_0043';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_43 = new ClauseSubordinationMatrix_43();


export class ClauseSubordinationMatrix_44 {
  public readonly matrixId = 'CSM_0044';
  public countRelativeClauses(text: string): number {
    const matches = text.match(/\b(which|who|whom|whose|whereby)\b/gi);
    return matches ? matches.length : 0;
  }
}
export const clauseMatrix_44 = new ClauseSubordinationMatrix_44();
