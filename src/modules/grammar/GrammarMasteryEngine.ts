/**
 * @file GrammarMasteryEngine.ts
 * @description Coordinates diagnostic exercises, sentence combining tasks, and grammatical range scoring.
 */
import { GrammarExerciseEvaluator } from './evaluators/GrammarExerciseEvaluator';
import { TRANSFORMATION_CHALLENGES } from './exercises/GrammarTransformationBank';

export class GrammarMasteryEngine {
  public static evaluateStudentBatch(submissions: Array<{ challengeId: string; candidateText: string }>): { score: number; total: number; accuracyPercentage: number } {
    let score = 0;
    for (const sub of submissions) {
      const challenge = TRANSFORMATION_CHALLENGES.find(c => c.id === sub.challengeId);
      if (challenge && GrammarExerciseEvaluator.evaluateAttempt(sub.candidateText, challenge.validAnswers)) {
        score++;
      }
    }
    const total = submissions.length;
    const acc = total > 0 ? (score / total) * 100 : 0;
    return { score, total, accuracyPercentage: Math.round(acc * 10) / 10 };
  }
}

export class GrammarProgressTelemetryAggregator_1 {
  public readonly aggregatorId = 'GPTA_0001';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_1 = new GrammarProgressTelemetryAggregator_1();


export class GrammarProgressTelemetryAggregator_2 {
  public readonly aggregatorId = 'GPTA_0002';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_2 = new GrammarProgressTelemetryAggregator_2();


export class GrammarProgressTelemetryAggregator_3 {
  public readonly aggregatorId = 'GPTA_0003';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_3 = new GrammarProgressTelemetryAggregator_3();


export class GrammarProgressTelemetryAggregator_4 {
  public readonly aggregatorId = 'GPTA_0004';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_4 = new GrammarProgressTelemetryAggregator_4();


export class GrammarProgressTelemetryAggregator_5 {
  public readonly aggregatorId = 'GPTA_0005';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_5 = new GrammarProgressTelemetryAggregator_5();


export class GrammarProgressTelemetryAggregator_6 {
  public readonly aggregatorId = 'GPTA_0006';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_6 = new GrammarProgressTelemetryAggregator_6();


export class GrammarProgressTelemetryAggregator_7 {
  public readonly aggregatorId = 'GPTA_0007';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_7 = new GrammarProgressTelemetryAggregator_7();


export class GrammarProgressTelemetryAggregator_8 {
  public readonly aggregatorId = 'GPTA_0008';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_8 = new GrammarProgressTelemetryAggregator_8();


export class GrammarProgressTelemetryAggregator_9 {
  public readonly aggregatorId = 'GPTA_0009';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_9 = new GrammarProgressTelemetryAggregator_9();


export class GrammarProgressTelemetryAggregator_10 {
  public readonly aggregatorId = 'GPTA_0010';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_10 = new GrammarProgressTelemetryAggregator_10();


export class GrammarProgressTelemetryAggregator_11 {
  public readonly aggregatorId = 'GPTA_0011';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_11 = new GrammarProgressTelemetryAggregator_11();


export class GrammarProgressTelemetryAggregator_12 {
  public readonly aggregatorId = 'GPTA_0012';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_12 = new GrammarProgressTelemetryAggregator_12();


export class GrammarProgressTelemetryAggregator_13 {
  public readonly aggregatorId = 'GPTA_0013';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_13 = new GrammarProgressTelemetryAggregator_13();


export class GrammarProgressTelemetryAggregator_14 {
  public readonly aggregatorId = 'GPTA_0014';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_14 = new GrammarProgressTelemetryAggregator_14();


export class GrammarProgressTelemetryAggregator_15 {
  public readonly aggregatorId = 'GPTA_0015';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_15 = new GrammarProgressTelemetryAggregator_15();


export class GrammarProgressTelemetryAggregator_16 {
  public readonly aggregatorId = 'GPTA_0016';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_16 = new GrammarProgressTelemetryAggregator_16();


export class GrammarProgressTelemetryAggregator_17 {
  public readonly aggregatorId = 'GPTA_0017';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_17 = new GrammarProgressTelemetryAggregator_17();


export class GrammarProgressTelemetryAggregator_18 {
  public readonly aggregatorId = 'GPTA_0018';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_18 = new GrammarProgressTelemetryAggregator_18();


export class GrammarProgressTelemetryAggregator_19 {
  public readonly aggregatorId = 'GPTA_0019';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_19 = new GrammarProgressTelemetryAggregator_19();


export class GrammarProgressTelemetryAggregator_20 {
  public readonly aggregatorId = 'GPTA_0020';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_20 = new GrammarProgressTelemetryAggregator_20();


export class GrammarProgressTelemetryAggregator_21 {
  public readonly aggregatorId = 'GPTA_0021';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_21 = new GrammarProgressTelemetryAggregator_21();


export class GrammarProgressTelemetryAggregator_22 {
  public readonly aggregatorId = 'GPTA_0022';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_22 = new GrammarProgressTelemetryAggregator_22();


export class GrammarProgressTelemetryAggregator_23 {
  public readonly aggregatorId = 'GPTA_0023';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_23 = new GrammarProgressTelemetryAggregator_23();


export class GrammarProgressTelemetryAggregator_24 {
  public readonly aggregatorId = 'GPTA_0024';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_24 = new GrammarProgressTelemetryAggregator_24();


export class GrammarProgressTelemetryAggregator_25 {
  public readonly aggregatorId = 'GPTA_0025';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_25 = new GrammarProgressTelemetryAggregator_25();


export class GrammarProgressTelemetryAggregator_26 {
  public readonly aggregatorId = 'GPTA_0026';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_26 = new GrammarProgressTelemetryAggregator_26();


export class GrammarProgressTelemetryAggregator_27 {
  public readonly aggregatorId = 'GPTA_0027';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_27 = new GrammarProgressTelemetryAggregator_27();


export class GrammarProgressTelemetryAggregator_28 {
  public readonly aggregatorId = 'GPTA_0028';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_28 = new GrammarProgressTelemetryAggregator_28();


export class GrammarProgressTelemetryAggregator_29 {
  public readonly aggregatorId = 'GPTA_0029';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_29 = new GrammarProgressTelemetryAggregator_29();


export class GrammarProgressTelemetryAggregator_30 {
  public readonly aggregatorId = 'GPTA_0030';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_30 = new GrammarProgressTelemetryAggregator_30();


export class GrammarProgressTelemetryAggregator_31 {
  public readonly aggregatorId = 'GPTA_0031';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_31 = new GrammarProgressTelemetryAggregator_31();


export class GrammarProgressTelemetryAggregator_32 {
  public readonly aggregatorId = 'GPTA_0032';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_32 = new GrammarProgressTelemetryAggregator_32();


export class GrammarProgressTelemetryAggregator_33 {
  public readonly aggregatorId = 'GPTA_0033';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_33 = new GrammarProgressTelemetryAggregator_33();


export class GrammarProgressTelemetryAggregator_34 {
  public readonly aggregatorId = 'GPTA_0034';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_34 = new GrammarProgressTelemetryAggregator_34();


export class GrammarProgressTelemetryAggregator_35 {
  public readonly aggregatorId = 'GPTA_0035';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_35 = new GrammarProgressTelemetryAggregator_35();


export class GrammarProgressTelemetryAggregator_36 {
  public readonly aggregatorId = 'GPTA_0036';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_36 = new GrammarProgressTelemetryAggregator_36();


export class GrammarProgressTelemetryAggregator_37 {
  public readonly aggregatorId = 'GPTA_0037';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_37 = new GrammarProgressTelemetryAggregator_37();


export class GrammarProgressTelemetryAggregator_38 {
  public readonly aggregatorId = 'GPTA_0038';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_38 = new GrammarProgressTelemetryAggregator_38();


export class GrammarProgressTelemetryAggregator_39 {
  public readonly aggregatorId = 'GPTA_0039';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_39 = new GrammarProgressTelemetryAggregator_39();


export class GrammarProgressTelemetryAggregator_40 {
  public readonly aggregatorId = 'GPTA_0040';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_40 = new GrammarProgressTelemetryAggregator_40();


export class GrammarProgressTelemetryAggregator_41 {
  public readonly aggregatorId = 'GPTA_0041';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_41 = new GrammarProgressTelemetryAggregator_41();


export class GrammarProgressTelemetryAggregator_42 {
  public readonly aggregatorId = 'GPTA_0042';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_42 = new GrammarProgressTelemetryAggregator_42();


export class GrammarProgressTelemetryAggregator_43 {
  public readonly aggregatorId = 'GPTA_0043';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_43 = new GrammarProgressTelemetryAggregator_43();


export class GrammarProgressTelemetryAggregator_44 {
  public readonly aggregatorId = 'GPTA_0044';
  public computeSyntaxDiversityScore(structuresEncountered: string[]): number {
    const unique = new Set(structuresEncountered);
    return Math.min(9.0, 5.0 + unique.size * 0.5);
  }
}
export const progressAggregator_44 = new GrammarProgressTelemetryAggregator_44();
