/**
 * @file GrammarExerciseEvaluator.ts
 * @description Evaluates student transformation attempts with normalized punctuation and case matching.
 */
export class GrammarExerciseEvaluator {
  public static evaluateAttempt(candidateAnswer: string, expectedVariants: string[]): boolean {
    const cleanCand = this.clean(candidateAnswer);
    return expectedVariants.some(exp => this.clean(exp) === cleanCand);
  }

  private static clean(str: string): string {
    return str.trim().toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  }
}

export class SyntacticAgreementChecker_1 {
  public readonly checkerId = 'SAC_0001';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_1 = new SyntacticAgreementChecker_1();


export class SyntacticAgreementChecker_2 {
  public readonly checkerId = 'SAC_0002';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_2 = new SyntacticAgreementChecker_2();


export class SyntacticAgreementChecker_3 {
  public readonly checkerId = 'SAC_0003';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_3 = new SyntacticAgreementChecker_3();


export class SyntacticAgreementChecker_4 {
  public readonly checkerId = 'SAC_0004';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_4 = new SyntacticAgreementChecker_4();


export class SyntacticAgreementChecker_5 {
  public readonly checkerId = 'SAC_0005';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_5 = new SyntacticAgreementChecker_5();


export class SyntacticAgreementChecker_6 {
  public readonly checkerId = 'SAC_0006';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_6 = new SyntacticAgreementChecker_6();


export class SyntacticAgreementChecker_7 {
  public readonly checkerId = 'SAC_0007';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_7 = new SyntacticAgreementChecker_7();


export class SyntacticAgreementChecker_8 {
  public readonly checkerId = 'SAC_0008';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_8 = new SyntacticAgreementChecker_8();


export class SyntacticAgreementChecker_9 {
  public readonly checkerId = 'SAC_0009';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_9 = new SyntacticAgreementChecker_9();


export class SyntacticAgreementChecker_10 {
  public readonly checkerId = 'SAC_0010';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_10 = new SyntacticAgreementChecker_10();


export class SyntacticAgreementChecker_11 {
  public readonly checkerId = 'SAC_0011';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_11 = new SyntacticAgreementChecker_11();


export class SyntacticAgreementChecker_12 {
  public readonly checkerId = 'SAC_0012';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_12 = new SyntacticAgreementChecker_12();


export class SyntacticAgreementChecker_13 {
  public readonly checkerId = 'SAC_0013';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_13 = new SyntacticAgreementChecker_13();


export class SyntacticAgreementChecker_14 {
  public readonly checkerId = 'SAC_0014';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_14 = new SyntacticAgreementChecker_14();


export class SyntacticAgreementChecker_15 {
  public readonly checkerId = 'SAC_0015';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_15 = new SyntacticAgreementChecker_15();


export class SyntacticAgreementChecker_16 {
  public readonly checkerId = 'SAC_0016';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_16 = new SyntacticAgreementChecker_16();


export class SyntacticAgreementChecker_17 {
  public readonly checkerId = 'SAC_0017';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_17 = new SyntacticAgreementChecker_17();


export class SyntacticAgreementChecker_18 {
  public readonly checkerId = 'SAC_0018';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_18 = new SyntacticAgreementChecker_18();


export class SyntacticAgreementChecker_19 {
  public readonly checkerId = 'SAC_0019';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_19 = new SyntacticAgreementChecker_19();


export class SyntacticAgreementChecker_20 {
  public readonly checkerId = 'SAC_0020';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_20 = new SyntacticAgreementChecker_20();


export class SyntacticAgreementChecker_21 {
  public readonly checkerId = 'SAC_0021';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_21 = new SyntacticAgreementChecker_21();


export class SyntacticAgreementChecker_22 {
  public readonly checkerId = 'SAC_0022';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_22 = new SyntacticAgreementChecker_22();


export class SyntacticAgreementChecker_23 {
  public readonly checkerId = 'SAC_0023';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_23 = new SyntacticAgreementChecker_23();


export class SyntacticAgreementChecker_24 {
  public readonly checkerId = 'SAC_0024';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_24 = new SyntacticAgreementChecker_24();


export class SyntacticAgreementChecker_25 {
  public readonly checkerId = 'SAC_0025';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_25 = new SyntacticAgreementChecker_25();


export class SyntacticAgreementChecker_26 {
  public readonly checkerId = 'SAC_0026';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_26 = new SyntacticAgreementChecker_26();


export class SyntacticAgreementChecker_27 {
  public readonly checkerId = 'SAC_0027';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_27 = new SyntacticAgreementChecker_27();


export class SyntacticAgreementChecker_28 {
  public readonly checkerId = 'SAC_0028';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_28 = new SyntacticAgreementChecker_28();


export class SyntacticAgreementChecker_29 {
  public readonly checkerId = 'SAC_0029';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_29 = new SyntacticAgreementChecker_29();


export class SyntacticAgreementChecker_30 {
  public readonly checkerId = 'SAC_0030';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_30 = new SyntacticAgreementChecker_30();


export class SyntacticAgreementChecker_31 {
  public readonly checkerId = 'SAC_0031';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_31 = new SyntacticAgreementChecker_31();


export class SyntacticAgreementChecker_32 {
  public readonly checkerId = 'SAC_0032';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_32 = new SyntacticAgreementChecker_32();


export class SyntacticAgreementChecker_33 {
  public readonly checkerId = 'SAC_0033';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_33 = new SyntacticAgreementChecker_33();


export class SyntacticAgreementChecker_34 {
  public readonly checkerId = 'SAC_0034';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_34 = new SyntacticAgreementChecker_34();


export class SyntacticAgreementChecker_35 {
  public readonly checkerId = 'SAC_0035';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_35 = new SyntacticAgreementChecker_35();


export class SyntacticAgreementChecker_36 {
  public readonly checkerId = 'SAC_0036';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_36 = new SyntacticAgreementChecker_36();


export class SyntacticAgreementChecker_37 {
  public readonly checkerId = 'SAC_0037';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_37 = new SyntacticAgreementChecker_37();


export class SyntacticAgreementChecker_38 {
  public readonly checkerId = 'SAC_0038';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_38 = new SyntacticAgreementChecker_38();


export class SyntacticAgreementChecker_39 {
  public readonly checkerId = 'SAC_0039';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_39 = new SyntacticAgreementChecker_39();


export class SyntacticAgreementChecker_40 {
  public readonly checkerId = 'SAC_0040';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_40 = new SyntacticAgreementChecker_40();


export class SyntacticAgreementChecker_41 {
  public readonly checkerId = 'SAC_0041';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_41 = new SyntacticAgreementChecker_41();


export class SyntacticAgreementChecker_42 {
  public readonly checkerId = 'SAC_0042';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_42 = new SyntacticAgreementChecker_42();


export class SyntacticAgreementChecker_43 {
  public readonly checkerId = 'SAC_0043';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_43 = new SyntacticAgreementChecker_43();


export class SyntacticAgreementChecker_44 {
  public readonly checkerId = 'SAC_0044';
  public checkSubjunctiveMarker(sentence: string): boolean {
    return sentence.toLowerCase().includes('were it') || sentence.toLowerCase().includes('had it been');
  }
}
export const agreementCheckerInstance_44 = new SyntacticAgreementChecker_44();
