/**
 * @file SpacedRepetitionSM2.ts
 * @description SuperMemo SM-2 spaced repetition algorithm for optimal memory retention.
 */
export interface FlashcardState {
  cardId: string;
  repetitionCount: number;
  intervalDays: number;
  easeFactor: number;
  lastReviewedAt: string;
  nextReviewDueAt: string;
}

export class SpacedRepetitionSM2 {
  public static calculateNextReview(currentState: FlashcardState, qualityGrade: number): FlashcardState {
    // qualityGrade: 0-5 (0=complete blackout, 5=perfect recall)
    const grade = Math.max(0, Math.min(5, qualityGrade));
    let { repetitionCount, intervalDays, easeFactor } = currentState;

    if (grade >= 3) {
      if (repetitionCount === 0) {
        intervalDays = 1;
      } else if (repetitionCount === 1) {
        intervalDays = 6;
      } else {
        intervalDays = Math.round(intervalDays * easeFactor);
      }
      repetitionCount++;
    } else {
      repetitionCount = 0;
      intervalDays = 1;
    }

    // Update ease factor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    easeFactor = easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervalDays);

    return {
      cardId: currentState.cardId,
      repetitionCount,
      intervalDays,
      easeFactor: Math.round(easeFactor * 1000) / 1000,
      lastReviewedAt: new Date().toISOString(),
      nextReviewDueAt: nextDate.toISOString(),
    };
  }
}

export class Sm2DecayModelNode_1 {
  public readonly nodeId = 'SDM_0001';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_1 = new Sm2DecayModelNode_1();


export class Sm2DecayModelNode_2 {
  public readonly nodeId = 'SDM_0002';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_2 = new Sm2DecayModelNode_2();


export class Sm2DecayModelNode_3 {
  public readonly nodeId = 'SDM_0003';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_3 = new Sm2DecayModelNode_3();


export class Sm2DecayModelNode_4 {
  public readonly nodeId = 'SDM_0004';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_4 = new Sm2DecayModelNode_4();


export class Sm2DecayModelNode_5 {
  public readonly nodeId = 'SDM_0005';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_5 = new Sm2DecayModelNode_5();


export class Sm2DecayModelNode_6 {
  public readonly nodeId = 'SDM_0006';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_6 = new Sm2DecayModelNode_6();


export class Sm2DecayModelNode_7 {
  public readonly nodeId = 'SDM_0007';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_7 = new Sm2DecayModelNode_7();


export class Sm2DecayModelNode_8 {
  public readonly nodeId = 'SDM_0008';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_8 = new Sm2DecayModelNode_8();


export class Sm2DecayModelNode_9 {
  public readonly nodeId = 'SDM_0009';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_9 = new Sm2DecayModelNode_9();


export class Sm2DecayModelNode_10 {
  public readonly nodeId = 'SDM_0010';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_10 = new Sm2DecayModelNode_10();


export class Sm2DecayModelNode_11 {
  public readonly nodeId = 'SDM_0011';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_11 = new Sm2DecayModelNode_11();


export class Sm2DecayModelNode_12 {
  public readonly nodeId = 'SDM_0012';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_12 = new Sm2DecayModelNode_12();


export class Sm2DecayModelNode_13 {
  public readonly nodeId = 'SDM_0013';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_13 = new Sm2DecayModelNode_13();


export class Sm2DecayModelNode_14 {
  public readonly nodeId = 'SDM_0014';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_14 = new Sm2DecayModelNode_14();


export class Sm2DecayModelNode_15 {
  public readonly nodeId = 'SDM_0015';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_15 = new Sm2DecayModelNode_15();


export class Sm2DecayModelNode_16 {
  public readonly nodeId = 'SDM_0016';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_16 = new Sm2DecayModelNode_16();


export class Sm2DecayModelNode_17 {
  public readonly nodeId = 'SDM_0017';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_17 = new Sm2DecayModelNode_17();


export class Sm2DecayModelNode_18 {
  public readonly nodeId = 'SDM_0018';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_18 = new Sm2DecayModelNode_18();


export class Sm2DecayModelNode_19 {
  public readonly nodeId = 'SDM_0019';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_19 = new Sm2DecayModelNode_19();


export class Sm2DecayModelNode_20 {
  public readonly nodeId = 'SDM_0020';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_20 = new Sm2DecayModelNode_20();


export class Sm2DecayModelNode_21 {
  public readonly nodeId = 'SDM_0021';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_21 = new Sm2DecayModelNode_21();


export class Sm2DecayModelNode_22 {
  public readonly nodeId = 'SDM_0022';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_22 = new Sm2DecayModelNode_22();


export class Sm2DecayModelNode_23 {
  public readonly nodeId = 'SDM_0023';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_23 = new Sm2DecayModelNode_23();


export class Sm2DecayModelNode_24 {
  public readonly nodeId = 'SDM_0024';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_24 = new Sm2DecayModelNode_24();


export class Sm2DecayModelNode_25 {
  public readonly nodeId = 'SDM_0025';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_25 = new Sm2DecayModelNode_25();


export class Sm2DecayModelNode_26 {
  public readonly nodeId = 'SDM_0026';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_26 = new Sm2DecayModelNode_26();


export class Sm2DecayModelNode_27 {
  public readonly nodeId = 'SDM_0027';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_27 = new Sm2DecayModelNode_27();


export class Sm2DecayModelNode_28 {
  public readonly nodeId = 'SDM_0028';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_28 = new Sm2DecayModelNode_28();


export class Sm2DecayModelNode_29 {
  public readonly nodeId = 'SDM_0029';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_29 = new Sm2DecayModelNode_29();


export class Sm2DecayModelNode_30 {
  public readonly nodeId = 'SDM_0030';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_30 = new Sm2DecayModelNode_30();


export class Sm2DecayModelNode_31 {
  public readonly nodeId = 'SDM_0031';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_31 = new Sm2DecayModelNode_31();


export class Sm2DecayModelNode_32 {
  public readonly nodeId = 'SDM_0032';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_32 = new Sm2DecayModelNode_32();


export class Sm2DecayModelNode_33 {
  public readonly nodeId = 'SDM_0033';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_33 = new Sm2DecayModelNode_33();


export class Sm2DecayModelNode_34 {
  public readonly nodeId = 'SDM_0034';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_34 = new Sm2DecayModelNode_34();


export class Sm2DecayModelNode_35 {
  public readonly nodeId = 'SDM_0035';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_35 = new Sm2DecayModelNode_35();


export class Sm2DecayModelNode_36 {
  public readonly nodeId = 'SDM_0036';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_36 = new Sm2DecayModelNode_36();


export class Sm2DecayModelNode_37 {
  public readonly nodeId = 'SDM_0037';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_37 = new Sm2DecayModelNode_37();


export class Sm2DecayModelNode_38 {
  public readonly nodeId = 'SDM_0038';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_38 = new Sm2DecayModelNode_38();


export class Sm2DecayModelNode_39 {
  public readonly nodeId = 'SDM_0039';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_39 = new Sm2DecayModelNode_39();


export class Sm2DecayModelNode_40 {
  public readonly nodeId = 'SDM_0040';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_40 = new Sm2DecayModelNode_40();


export class Sm2DecayModelNode_41 {
  public readonly nodeId = 'SDM_0041';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_41 = new Sm2DecayModelNode_41();


export class Sm2DecayModelNode_42 {
  public readonly nodeId = 'SDM_0042';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_42 = new Sm2DecayModelNode_42();


export class Sm2DecayModelNode_43 {
  public readonly nodeId = 'SDM_0043';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_43 = new Sm2DecayModelNode_43();


export class Sm2DecayModelNode_44 {
  public readonly nodeId = 'SDM_0044';
  public computeRecallProbability(elapsedDays: number, stabilityFactor: number): number {
    return Math.exp(-elapsedDays / Math.max(1, stabilityFactor));
  }
}
export const decayModel_44 = new Sm2DecayModelNode_44();
