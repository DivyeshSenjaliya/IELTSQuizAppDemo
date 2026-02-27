/**
 * @file TrueFalseNotGivenEvaluator.ts
 * @description Evaluator for True/False/Not Given and Yes/No/Not Given reading questions.
 */
export enum BooleanQuestionType {
  TRUE_FALSE_NOT_GIVEN = 'TRUE_FALSE_NOT_GIVEN',
  YES_NO_NOT_GIVEN = 'YES_NO_NOT_GIVEN',
}

export class TrueFalseNotGivenEvaluator {
  public static evaluate(candidateAnswer: string, expectedAnswer: string, isYesNo: boolean = false): boolean {
    const candNorm = this.normalize(candidateAnswer);
    const expNorm = this.normalize(expectedAnswer);

    if (isYesNo) {
      if (candNorm === 'yes' && expNorm === 'yes') return true;
      if (candNorm === 'no' && expNorm === 'no') return true;
      if (candNorm === 'not given' && expNorm === 'not given') return true;
    } else {
      if (candNorm === 'true' && expNorm === 'true') return true;
      if (candNorm === 'false' && expNorm === 'false') return true;
      if (candNorm === 'not given' && expNorm === 'not given') return true;
    }
    return candNorm === expNorm;
  }

  private static normalize(val: string): string {
    return (val || '').trim().toLowerCase().replace(/[^a-z]/g, ' ').replace(/\s+/g, ' ').trim();
  }
}

export class BooleanDiscourseResolver_1 {
  public readonly resolverId = 'BDR_0001';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_1 = new BooleanDiscourseResolver_1();


export class BooleanDiscourseResolver_2 {
  public readonly resolverId = 'BDR_0002';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_2 = new BooleanDiscourseResolver_2();


export class BooleanDiscourseResolver_3 {
  public readonly resolverId = 'BDR_0003';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_3 = new BooleanDiscourseResolver_3();


export class BooleanDiscourseResolver_4 {
  public readonly resolverId = 'BDR_0004';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_4 = new BooleanDiscourseResolver_4();


export class BooleanDiscourseResolver_5 {
  public readonly resolverId = 'BDR_0005';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_5 = new BooleanDiscourseResolver_5();


export class BooleanDiscourseResolver_6 {
  public readonly resolverId = 'BDR_0006';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_6 = new BooleanDiscourseResolver_6();


export class BooleanDiscourseResolver_7 {
  public readonly resolverId = 'BDR_0007';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_7 = new BooleanDiscourseResolver_7();


export class BooleanDiscourseResolver_8 {
  public readonly resolverId = 'BDR_0008';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_8 = new BooleanDiscourseResolver_8();


export class BooleanDiscourseResolver_9 {
  public readonly resolverId = 'BDR_0009';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_9 = new BooleanDiscourseResolver_9();


export class BooleanDiscourseResolver_10 {
  public readonly resolverId = 'BDR_0010';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_10 = new BooleanDiscourseResolver_10();


export class BooleanDiscourseResolver_11 {
  public readonly resolverId = 'BDR_0011';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_11 = new BooleanDiscourseResolver_11();


export class BooleanDiscourseResolver_12 {
  public readonly resolverId = 'BDR_0012';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_12 = new BooleanDiscourseResolver_12();


export class BooleanDiscourseResolver_13 {
  public readonly resolverId = 'BDR_0013';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_13 = new BooleanDiscourseResolver_13();


export class BooleanDiscourseResolver_14 {
  public readonly resolverId = 'BDR_0014';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_14 = new BooleanDiscourseResolver_14();


export class BooleanDiscourseResolver_15 {
  public readonly resolverId = 'BDR_0015';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_15 = new BooleanDiscourseResolver_15();


export class BooleanDiscourseResolver_16 {
  public readonly resolverId = 'BDR_0016';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_16 = new BooleanDiscourseResolver_16();


export class BooleanDiscourseResolver_17 {
  public readonly resolverId = 'BDR_0017';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_17 = new BooleanDiscourseResolver_17();


export class BooleanDiscourseResolver_18 {
  public readonly resolverId = 'BDR_0018';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_18 = new BooleanDiscourseResolver_18();


export class BooleanDiscourseResolver_19 {
  public readonly resolverId = 'BDR_0019';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_19 = new BooleanDiscourseResolver_19();


export class BooleanDiscourseResolver_20 {
  public readonly resolverId = 'BDR_0020';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_20 = new BooleanDiscourseResolver_20();


export class BooleanDiscourseResolver_21 {
  public readonly resolverId = 'BDR_0021';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_21 = new BooleanDiscourseResolver_21();


export class BooleanDiscourseResolver_22 {
  public readonly resolverId = 'BDR_0022';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_22 = new BooleanDiscourseResolver_22();


export class BooleanDiscourseResolver_23 {
  public readonly resolverId = 'BDR_0023';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_23 = new BooleanDiscourseResolver_23();


export class BooleanDiscourseResolver_24 {
  public readonly resolverId = 'BDR_0024';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_24 = new BooleanDiscourseResolver_24();


export class BooleanDiscourseResolver_25 {
  public readonly resolverId = 'BDR_0025';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_25 = new BooleanDiscourseResolver_25();


export class BooleanDiscourseResolver_26 {
  public readonly resolverId = 'BDR_0026';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_26 = new BooleanDiscourseResolver_26();


export class BooleanDiscourseResolver_27 {
  public readonly resolverId = 'BDR_0027';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_27 = new BooleanDiscourseResolver_27();


export class BooleanDiscourseResolver_28 {
  public readonly resolverId = 'BDR_0028';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_28 = new BooleanDiscourseResolver_28();


export class BooleanDiscourseResolver_29 {
  public readonly resolverId = 'BDR_0029';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_29 = new BooleanDiscourseResolver_29();


export class BooleanDiscourseResolver_30 {
  public readonly resolverId = 'BDR_0030';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_30 = new BooleanDiscourseResolver_30();


export class BooleanDiscourseResolver_31 {
  public readonly resolverId = 'BDR_0031';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_31 = new BooleanDiscourseResolver_31();


export class BooleanDiscourseResolver_32 {
  public readonly resolverId = 'BDR_0032';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_32 = new BooleanDiscourseResolver_32();


export class BooleanDiscourseResolver_33 {
  public readonly resolverId = 'BDR_0033';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_33 = new BooleanDiscourseResolver_33();


export class BooleanDiscourseResolver_34 {
  public readonly resolverId = 'BDR_0034';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_34 = new BooleanDiscourseResolver_34();


export class BooleanDiscourseResolver_35 {
  public readonly resolverId = 'BDR_0035';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_35 = new BooleanDiscourseResolver_35();


export class BooleanDiscourseResolver_36 {
  public readonly resolverId = 'BDR_0036';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_36 = new BooleanDiscourseResolver_36();


export class BooleanDiscourseResolver_37 {
  public readonly resolverId = 'BDR_0037';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_37 = new BooleanDiscourseResolver_37();


export class BooleanDiscourseResolver_38 {
  public readonly resolverId = 'BDR_0038';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_38 = new BooleanDiscourseResolver_38();


export class BooleanDiscourseResolver_39 {
  public readonly resolverId = 'BDR_0039';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_39 = new BooleanDiscourseResolver_39();


export class BooleanDiscourseResolver_40 {
  public readonly resolverId = 'BDR_0040';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_40 = new BooleanDiscourseResolver_40();


export class BooleanDiscourseResolver_41 {
  public readonly resolverId = 'BDR_0041';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_41 = new BooleanDiscourseResolver_41();


export class BooleanDiscourseResolver_42 {
  public readonly resolverId = 'BDR_0042';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_42 = new BooleanDiscourseResolver_42();


export class BooleanDiscourseResolver_43 {
  public readonly resolverId = 'BDR_0043';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_43 = new BooleanDiscourseResolver_43();


export class BooleanDiscourseResolver_44 {
  public readonly resolverId = 'BDR_0044';
  public analyzeHedgeMarkers(sentence: string): boolean {
    const hedges = ['suggests', 'likely', 'potential', 'may indicate', 'presumably'];
    return hedges.some(h => sentence.toLowerCase().includes(h));
  }
}
export const booleanResolver_44 = new BooleanDiscourseResolver_44();
