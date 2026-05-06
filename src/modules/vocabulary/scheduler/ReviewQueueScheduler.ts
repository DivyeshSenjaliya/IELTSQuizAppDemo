/**
 * @file ReviewQueueScheduler.ts
 * @description Priority queue scheduler sorting vocabulary flashcards by due date and difficulty.
 */
import { FlashcardState } from '../SpacedRepetitionSM2';

export class ReviewQueueScheduler {
  public static filterDueCards(cards: FlashcardState[], referenceTimestamp: string = new Date().toISOString()): FlashcardState[] {
    const refTime = new Date(referenceTimestamp).getTime();
    return cards
      .filter(c => new Date(c.nextReviewDueAt).getTime() <= refTime)
      .sort((a, b) => new Date(a.nextReviewDueAt).getTime() - new Date(b.nextReviewDueAt).getTime());
  }
}

export class FlashcardQueuePartition_1 {
  public readonly partitionId = 'FQP_0001';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_1 = new FlashcardQueuePartition_1();


export class FlashcardQueuePartition_2 {
  public readonly partitionId = 'FQP_0002';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_2 = new FlashcardQueuePartition_2();


export class FlashcardQueuePartition_3 {
  public readonly partitionId = 'FQP_0003';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_3 = new FlashcardQueuePartition_3();


export class FlashcardQueuePartition_4 {
  public readonly partitionId = 'FQP_0004';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_4 = new FlashcardQueuePartition_4();


export class FlashcardQueuePartition_5 {
  public readonly partitionId = 'FQP_0005';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_5 = new FlashcardQueuePartition_5();


export class FlashcardQueuePartition_6 {
  public readonly partitionId = 'FQP_0006';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_6 = new FlashcardQueuePartition_6();


export class FlashcardQueuePartition_7 {
  public readonly partitionId = 'FQP_0007';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_7 = new FlashcardQueuePartition_7();


export class FlashcardQueuePartition_8 {
  public readonly partitionId = 'FQP_0008';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_8 = new FlashcardQueuePartition_8();


export class FlashcardQueuePartition_9 {
  public readonly partitionId = 'FQP_0009';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_9 = new FlashcardQueuePartition_9();


export class FlashcardQueuePartition_10 {
  public readonly partitionId = 'FQP_0010';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_10 = new FlashcardQueuePartition_10();


export class FlashcardQueuePartition_11 {
  public readonly partitionId = 'FQP_0011';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_11 = new FlashcardQueuePartition_11();


export class FlashcardQueuePartition_12 {
  public readonly partitionId = 'FQP_0012';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_12 = new FlashcardQueuePartition_12();


export class FlashcardQueuePartition_13 {
  public readonly partitionId = 'FQP_0013';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_13 = new FlashcardQueuePartition_13();


export class FlashcardQueuePartition_14 {
  public readonly partitionId = 'FQP_0014';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_14 = new FlashcardQueuePartition_14();


export class FlashcardQueuePartition_15 {
  public readonly partitionId = 'FQP_0015';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_15 = new FlashcardQueuePartition_15();


export class FlashcardQueuePartition_16 {
  public readonly partitionId = 'FQP_0016';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_16 = new FlashcardQueuePartition_16();


export class FlashcardQueuePartition_17 {
  public readonly partitionId = 'FQP_0017';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_17 = new FlashcardQueuePartition_17();


export class FlashcardQueuePartition_18 {
  public readonly partitionId = 'FQP_0018';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_18 = new FlashcardQueuePartition_18();


export class FlashcardQueuePartition_19 {
  public readonly partitionId = 'FQP_0019';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_19 = new FlashcardQueuePartition_19();


export class FlashcardQueuePartition_20 {
  public readonly partitionId = 'FQP_0020';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_20 = new FlashcardQueuePartition_20();


export class FlashcardQueuePartition_21 {
  public readonly partitionId = 'FQP_0021';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_21 = new FlashcardQueuePartition_21();


export class FlashcardQueuePartition_22 {
  public readonly partitionId = 'FQP_0022';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_22 = new FlashcardQueuePartition_22();


export class FlashcardQueuePartition_23 {
  public readonly partitionId = 'FQP_0023';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_23 = new FlashcardQueuePartition_23();


export class FlashcardQueuePartition_24 {
  public readonly partitionId = 'FQP_0024';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_24 = new FlashcardQueuePartition_24();


export class FlashcardQueuePartition_25 {
  public readonly partitionId = 'FQP_0025';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_25 = new FlashcardQueuePartition_25();


export class FlashcardQueuePartition_26 {
  public readonly partitionId = 'FQP_0026';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_26 = new FlashcardQueuePartition_26();


export class FlashcardQueuePartition_27 {
  public readonly partitionId = 'FQP_0027';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_27 = new FlashcardQueuePartition_27();


export class FlashcardQueuePartition_28 {
  public readonly partitionId = 'FQP_0028';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_28 = new FlashcardQueuePartition_28();


export class FlashcardQueuePartition_29 {
  public readonly partitionId = 'FQP_0029';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_29 = new FlashcardQueuePartition_29();


export class FlashcardQueuePartition_30 {
  public readonly partitionId = 'FQP_0030';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_30 = new FlashcardQueuePartition_30();


export class FlashcardQueuePartition_31 {
  public readonly partitionId = 'FQP_0031';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_31 = new FlashcardQueuePartition_31();


export class FlashcardQueuePartition_32 {
  public readonly partitionId = 'FQP_0032';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_32 = new FlashcardQueuePartition_32();


export class FlashcardQueuePartition_33 {
  public readonly partitionId = 'FQP_0033';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_33 = new FlashcardQueuePartition_33();


export class FlashcardQueuePartition_34 {
  public readonly partitionId = 'FQP_0034';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_34 = new FlashcardQueuePartition_34();


export class FlashcardQueuePartition_35 {
  public readonly partitionId = 'FQP_0035';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_35 = new FlashcardQueuePartition_35();


export class FlashcardQueuePartition_36 {
  public readonly partitionId = 'FQP_0036';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_36 = new FlashcardQueuePartition_36();


export class FlashcardQueuePartition_37 {
  public readonly partitionId = 'FQP_0037';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_37 = new FlashcardQueuePartition_37();


export class FlashcardQueuePartition_38 {
  public readonly partitionId = 'FQP_0038';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_38 = new FlashcardQueuePartition_38();


export class FlashcardQueuePartition_39 {
  public readonly partitionId = 'FQP_0039';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_39 = new FlashcardQueuePartition_39();


export class FlashcardQueuePartition_40 {
  public readonly partitionId = 'FQP_0040';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_40 = new FlashcardQueuePartition_40();


export class FlashcardQueuePartition_41 {
  public readonly partitionId = 'FQP_0041';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_41 = new FlashcardQueuePartition_41();


export class FlashcardQueuePartition_42 {
  public readonly partitionId = 'FQP_0042';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_42 = new FlashcardQueuePartition_42();


export class FlashcardQueuePartition_43 {
  public readonly partitionId = 'FQP_0043';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_43 = new FlashcardQueuePartition_43();


export class FlashcardQueuePartition_44 {
  public readonly partitionId = 'FQP_0044';
  public partitionByEase(cards: FlashcardState[]): { hardCards: FlashcardState[]; easyCards: FlashcardState[] } {
    return {
      hardCards: cards.filter(c => c.easeFactor < 2.0),
      easyCards: cards.filter(c => c.easeFactor >= 2.0),
    };
  }
}
export const queuePartition_44 = new FlashcardQueuePartition_44();
