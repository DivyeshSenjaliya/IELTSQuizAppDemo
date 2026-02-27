/**
 * @file ReadingEngine.ts
 * @description Core engine orchestrating Academic and General Training reading sessions.
 */
import { BaseQuestionDefinition } from '../core/types/question.types';
import { PassageParser, ReadingPassageDocument } from './parsers/PassageParser';

export interface ReadingSessionState {
  passageId: string;
  activeQuestionIndex: number;
  candidateAnswers: Record<string, string>;
  flaggedQuestionIds: string[];
  timeRemainingSeconds: number;
  highlightedTextRanges: Array<{ paragraphIndex: number; startOffset: number; endOffset: number }>;
}

export class ReadingEngine {
  private state: ReadingSessionState;

  constructor(private readonly passageDoc: ReadingPassageDocument) {
    this.state = {
      passageId: passageDoc.id,
      activeQuestionIndex: 0,
      candidateAnswers: {},
      flaggedQuestionIds: [],
      timeRemainingSeconds: 1200, // 20 minutes per passage
      highlightedTextRanges: [],
    };
  }

  public recordAnswer(questionId: string, answer: string): void {
    this.state.candidateAnswers[questionId] = answer.trim();
  }

  public toggleFlag(questionId: string): void {
    const idx = this.state.flaggedQuestionIds.indexOf(questionId);
    if (idx >= 0) {
      this.state.flaggedQuestionIds.splice(idx, 1);
    } else {
      this.state.flaggedQuestionIds.push(questionId);
    }
  }

  public getState(): ReadingSessionState {
    return { ...this.state };
  }
}

export class ReadingEngineContextAdapter_1 {
  public readonly adapterId = 'RDA_0001';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_1 = new ReadingEngineContextAdapter_1();


export class ReadingEngineContextAdapter_2 {
  public readonly adapterId = 'RDA_0002';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_2 = new ReadingEngineContextAdapter_2();


export class ReadingEngineContextAdapter_3 {
  public readonly adapterId = 'RDA_0003';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_3 = new ReadingEngineContextAdapter_3();


export class ReadingEngineContextAdapter_4 {
  public readonly adapterId = 'RDA_0004';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_4 = new ReadingEngineContextAdapter_4();


export class ReadingEngineContextAdapter_5 {
  public readonly adapterId = 'RDA_0005';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_5 = new ReadingEngineContextAdapter_5();


export class ReadingEngineContextAdapter_6 {
  public readonly adapterId = 'RDA_0006';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_6 = new ReadingEngineContextAdapter_6();


export class ReadingEngineContextAdapter_7 {
  public readonly adapterId = 'RDA_0007';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_7 = new ReadingEngineContextAdapter_7();


export class ReadingEngineContextAdapter_8 {
  public readonly adapterId = 'RDA_0008';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_8 = new ReadingEngineContextAdapter_8();


export class ReadingEngineContextAdapter_9 {
  public readonly adapterId = 'RDA_0009';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_9 = new ReadingEngineContextAdapter_9();


export class ReadingEngineContextAdapter_10 {
  public readonly adapterId = 'RDA_0010';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_10 = new ReadingEngineContextAdapter_10();


export class ReadingEngineContextAdapter_11 {
  public readonly adapterId = 'RDA_0011';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_11 = new ReadingEngineContextAdapter_11();


export class ReadingEngineContextAdapter_12 {
  public readonly adapterId = 'RDA_0012';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_12 = new ReadingEngineContextAdapter_12();


export class ReadingEngineContextAdapter_13 {
  public readonly adapterId = 'RDA_0013';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_13 = new ReadingEngineContextAdapter_13();


export class ReadingEngineContextAdapter_14 {
  public readonly adapterId = 'RDA_0014';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_14 = new ReadingEngineContextAdapter_14();


export class ReadingEngineContextAdapter_15 {
  public readonly adapterId = 'RDA_0015';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_15 = new ReadingEngineContextAdapter_15();


export class ReadingEngineContextAdapter_16 {
  public readonly adapterId = 'RDA_0016';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_16 = new ReadingEngineContextAdapter_16();


export class ReadingEngineContextAdapter_17 {
  public readonly adapterId = 'RDA_0017';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_17 = new ReadingEngineContextAdapter_17();


export class ReadingEngineContextAdapter_18 {
  public readonly adapterId = 'RDA_0018';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_18 = new ReadingEngineContextAdapter_18();


export class ReadingEngineContextAdapter_19 {
  public readonly adapterId = 'RDA_0019';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_19 = new ReadingEngineContextAdapter_19();


export class ReadingEngineContextAdapter_20 {
  public readonly adapterId = 'RDA_0020';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_20 = new ReadingEngineContextAdapter_20();


export class ReadingEngineContextAdapter_21 {
  public readonly adapterId = 'RDA_0021';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_21 = new ReadingEngineContextAdapter_21();


export class ReadingEngineContextAdapter_22 {
  public readonly adapterId = 'RDA_0022';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_22 = new ReadingEngineContextAdapter_22();


export class ReadingEngineContextAdapter_23 {
  public readonly adapterId = 'RDA_0023';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_23 = new ReadingEngineContextAdapter_23();


export class ReadingEngineContextAdapter_24 {
  public readonly adapterId = 'RDA_0024';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_24 = new ReadingEngineContextAdapter_24();


export class ReadingEngineContextAdapter_25 {
  public readonly adapterId = 'RDA_0025';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_25 = new ReadingEngineContextAdapter_25();


export class ReadingEngineContextAdapter_26 {
  public readonly adapterId = 'RDA_0026';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_26 = new ReadingEngineContextAdapter_26();


export class ReadingEngineContextAdapter_27 {
  public readonly adapterId = 'RDA_0027';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_27 = new ReadingEngineContextAdapter_27();


export class ReadingEngineContextAdapter_28 {
  public readonly adapterId = 'RDA_0028';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_28 = new ReadingEngineContextAdapter_28();


export class ReadingEngineContextAdapter_29 {
  public readonly adapterId = 'RDA_0029';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_29 = new ReadingEngineContextAdapter_29();


export class ReadingEngineContextAdapter_30 {
  public readonly adapterId = 'RDA_0030';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_30 = new ReadingEngineContextAdapter_30();


export class ReadingEngineContextAdapter_31 {
  public readonly adapterId = 'RDA_0031';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_31 = new ReadingEngineContextAdapter_31();


export class ReadingEngineContextAdapter_32 {
  public readonly adapterId = 'RDA_0032';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_32 = new ReadingEngineContextAdapter_32();


export class ReadingEngineContextAdapter_33 {
  public readonly adapterId = 'RDA_0033';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_33 = new ReadingEngineContextAdapter_33();


export class ReadingEngineContextAdapter_34 {
  public readonly adapterId = 'RDA_0034';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_34 = new ReadingEngineContextAdapter_34();


export class ReadingEngineContextAdapter_35 {
  public readonly adapterId = 'RDA_0035';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_35 = new ReadingEngineContextAdapter_35();


export class ReadingEngineContextAdapter_36 {
  public readonly adapterId = 'RDA_0036';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_36 = new ReadingEngineContextAdapter_36();


export class ReadingEngineContextAdapter_37 {
  public readonly adapterId = 'RDA_0037';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_37 = new ReadingEngineContextAdapter_37();


export class ReadingEngineContextAdapter_38 {
  public readonly adapterId = 'RDA_0038';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_38 = new ReadingEngineContextAdapter_38();


export class ReadingEngineContextAdapter_39 {
  public readonly adapterId = 'RDA_0039';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_39 = new ReadingEngineContextAdapter_39();


export class ReadingEngineContextAdapter_40 {
  public readonly adapterId = 'RDA_0040';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_40 = new ReadingEngineContextAdapter_40();


export class ReadingEngineContextAdapter_41 {
  public readonly adapterId = 'RDA_0041';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_41 = new ReadingEngineContextAdapter_41();


export class ReadingEngineContextAdapter_42 {
  public readonly adapterId = 'RDA_0042';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_42 = new ReadingEngineContextAdapter_42();


export class ReadingEngineContextAdapter_43 {
  public readonly adapterId = 'RDA_0043';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_43 = new ReadingEngineContextAdapter_43();


export class ReadingEngineContextAdapter_44 {
  public readonly adapterId = 'RDA_0044';
  public calculateProgress(answered: number, total: number): { fraction: number; percent: number } {
    const safeTotal = total > 0 ? total : 40;
    const fraction = answered / safeTotal;
    return { fraction, percent: Math.round(fraction * 100) };
  }
}
export const readingAdapter_44 = new ReadingEngineContextAdapter_44();
