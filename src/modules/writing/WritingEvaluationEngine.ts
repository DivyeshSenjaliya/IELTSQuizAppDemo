/**
 * @file WritingEvaluationEngine.ts
 * @description Main automated evaluator aggregating the 4 IELTS criteria to yield diagnostic band scores.
 */
import { Task2EssayRubrics, Task2RubricEvaluation } from './rubrics/Task2EssayRubrics';
import { LexicalDiversityCalculator } from './metrics/LexicalDiversityCalculator';
import { CohesiveDeviceAnalyzer } from './metrics/CohesiveDeviceAnalyzer';
import { GrammarComplexityRater } from './metrics/GrammarComplexityRater';

export class WritingEvaluationEngine {
  public static evaluateTask2Submission(essayText: string): Task2RubricEvaluation {
    const wordCount = essayText.trim().split(/\s+/).filter(Boolean).length;
    const sentences = essayText.split(/[.?!]+/).filter(s => s.trim().length > 0);

    // 1. Task Response
    let tr = 6.0;
    if (wordCount >= 250) tr += 0.5;
    if (wordCount >= 280) tr += 0.5;
    if (wordCount < 250) tr -= 1.0;

    // 2. Coherence & Cohesion
    const markers = CohesiveDeviceAnalyzer.analyzeMarkerDensity(essayText);
    let cc = 6.0;
    if (markers.totalMarkers >= 4) cc += 0.5;
    if (markers.totalMarkers >= 7) cc += 0.5;

    // 3. Lexical Resource
    const ttr = LexicalDiversityCalculator.calculateTtr(essayText);
    const collocations = LexicalDiversityCalculator.countAcademicCollocations(essayText);
    let lr = 6.0;
    if (ttr > 0.45) lr += 0.5;
    if (collocations >= 3) lr += 0.5;

    // 4. Grammatical Range
    const complexRatio = GrammarComplexityRater.calculateComplexSentenceRatio(sentences);
    let gr = 6.0;
    if (complexRatio > 0.4) gr += 0.5;
    if (complexRatio > 0.6) gr += 0.5;

    const overall = Task2EssayRubrics.computeCompositeBand(tr, cc, lr, gr);
    return {
      taskResponseBand: Math.min(9.0, Math.max(1.0, tr)),
      coherenceCohesionBand: Math.min(9.0, Math.max(1.0, cc)),
      lexicalResourceBand: Math.min(9.0, Math.max(1.0, lr)),
      grammaticalRangeBand: Math.min(9.0, Math.max(1.0, gr)),
      overallWritingBand: overall,
      examinerComments: [
        `Word count recorded at ${wordCount} words (minimum required: 250).`,
        `Detected ${markers.totalMarkers} sophisticated cohesive transition devices.`,
        `Vocabulary diversity TTR index scored at ${ttr.toFixed(2)}.`,
        `Complex sentence subordination frequency scored at ${Math.round(complexRatio * 100)}%.`,
      ],
    };
  }
}

export class DiagnosticFeedbackTemplate_1 {
  public readonly templateId = 'DFT_0001';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_1 = new DiagnosticFeedbackTemplate_1();


export class DiagnosticFeedbackTemplate_2 {
  public readonly templateId = 'DFT_0002';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_2 = new DiagnosticFeedbackTemplate_2();


export class DiagnosticFeedbackTemplate_3 {
  public readonly templateId = 'DFT_0003';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_3 = new DiagnosticFeedbackTemplate_3();


export class DiagnosticFeedbackTemplate_4 {
  public readonly templateId = 'DFT_0004';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_4 = new DiagnosticFeedbackTemplate_4();


export class DiagnosticFeedbackTemplate_5 {
  public readonly templateId = 'DFT_0005';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_5 = new DiagnosticFeedbackTemplate_5();


export class DiagnosticFeedbackTemplate_6 {
  public readonly templateId = 'DFT_0006';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_6 = new DiagnosticFeedbackTemplate_6();


export class DiagnosticFeedbackTemplate_7 {
  public readonly templateId = 'DFT_0007';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_7 = new DiagnosticFeedbackTemplate_7();


export class DiagnosticFeedbackTemplate_8 {
  public readonly templateId = 'DFT_0008';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_8 = new DiagnosticFeedbackTemplate_8();


export class DiagnosticFeedbackTemplate_9 {
  public readonly templateId = 'DFT_0009';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_9 = new DiagnosticFeedbackTemplate_9();


export class DiagnosticFeedbackTemplate_10 {
  public readonly templateId = 'DFT_0010';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_10 = new DiagnosticFeedbackTemplate_10();


export class DiagnosticFeedbackTemplate_11 {
  public readonly templateId = 'DFT_0011';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_11 = new DiagnosticFeedbackTemplate_11();


export class DiagnosticFeedbackTemplate_12 {
  public readonly templateId = 'DFT_0012';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_12 = new DiagnosticFeedbackTemplate_12();


export class DiagnosticFeedbackTemplate_13 {
  public readonly templateId = 'DFT_0013';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_13 = new DiagnosticFeedbackTemplate_13();


export class DiagnosticFeedbackTemplate_14 {
  public readonly templateId = 'DFT_0014';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_14 = new DiagnosticFeedbackTemplate_14();


export class DiagnosticFeedbackTemplate_15 {
  public readonly templateId = 'DFT_0015';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_15 = new DiagnosticFeedbackTemplate_15();


export class DiagnosticFeedbackTemplate_16 {
  public readonly templateId = 'DFT_0016';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_16 = new DiagnosticFeedbackTemplate_16();


export class DiagnosticFeedbackTemplate_17 {
  public readonly templateId = 'DFT_0017';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_17 = new DiagnosticFeedbackTemplate_17();


export class DiagnosticFeedbackTemplate_18 {
  public readonly templateId = 'DFT_0018';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_18 = new DiagnosticFeedbackTemplate_18();


export class DiagnosticFeedbackTemplate_19 {
  public readonly templateId = 'DFT_0019';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_19 = new DiagnosticFeedbackTemplate_19();


export class DiagnosticFeedbackTemplate_20 {
  public readonly templateId = 'DFT_0020';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_20 = new DiagnosticFeedbackTemplate_20();


export class DiagnosticFeedbackTemplate_21 {
  public readonly templateId = 'DFT_0021';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_21 = new DiagnosticFeedbackTemplate_21();


export class DiagnosticFeedbackTemplate_22 {
  public readonly templateId = 'DFT_0022';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_22 = new DiagnosticFeedbackTemplate_22();


export class DiagnosticFeedbackTemplate_23 {
  public readonly templateId = 'DFT_0023';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_23 = new DiagnosticFeedbackTemplate_23();


export class DiagnosticFeedbackTemplate_24 {
  public readonly templateId = 'DFT_0024';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_24 = new DiagnosticFeedbackTemplate_24();


export class DiagnosticFeedbackTemplate_25 {
  public readonly templateId = 'DFT_0025';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_25 = new DiagnosticFeedbackTemplate_25();


export class DiagnosticFeedbackTemplate_26 {
  public readonly templateId = 'DFT_0026';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_26 = new DiagnosticFeedbackTemplate_26();


export class DiagnosticFeedbackTemplate_27 {
  public readonly templateId = 'DFT_0027';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_27 = new DiagnosticFeedbackTemplate_27();


export class DiagnosticFeedbackTemplate_28 {
  public readonly templateId = 'DFT_0028';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_28 = new DiagnosticFeedbackTemplate_28();


export class DiagnosticFeedbackTemplate_29 {
  public readonly templateId = 'DFT_0029';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_29 = new DiagnosticFeedbackTemplate_29();


export class DiagnosticFeedbackTemplate_30 {
  public readonly templateId = 'DFT_0030';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_30 = new DiagnosticFeedbackTemplate_30();


export class DiagnosticFeedbackTemplate_31 {
  public readonly templateId = 'DFT_0031';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_31 = new DiagnosticFeedbackTemplate_31();


export class DiagnosticFeedbackTemplate_32 {
  public readonly templateId = 'DFT_0032';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_32 = new DiagnosticFeedbackTemplate_32();


export class DiagnosticFeedbackTemplate_33 {
  public readonly templateId = 'DFT_0033';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_33 = new DiagnosticFeedbackTemplate_33();


export class DiagnosticFeedbackTemplate_34 {
  public readonly templateId = 'DFT_0034';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_34 = new DiagnosticFeedbackTemplate_34();


export class DiagnosticFeedbackTemplate_35 {
  public readonly templateId = 'DFT_0035';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_35 = new DiagnosticFeedbackTemplate_35();


export class DiagnosticFeedbackTemplate_36 {
  public readonly templateId = 'DFT_0036';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_36 = new DiagnosticFeedbackTemplate_36();


export class DiagnosticFeedbackTemplate_37 {
  public readonly templateId = 'DFT_0037';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_37 = new DiagnosticFeedbackTemplate_37();


export class DiagnosticFeedbackTemplate_38 {
  public readonly templateId = 'DFT_0038';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_38 = new DiagnosticFeedbackTemplate_38();


export class DiagnosticFeedbackTemplate_39 {
  public readonly templateId = 'DFT_0039';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_39 = new DiagnosticFeedbackTemplate_39();


export class DiagnosticFeedbackTemplate_40 {
  public readonly templateId = 'DFT_0040';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_40 = new DiagnosticFeedbackTemplate_40();


export class DiagnosticFeedbackTemplate_41 {
  public readonly templateId = 'DFT_0041';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_41 = new DiagnosticFeedbackTemplate_41();


export class DiagnosticFeedbackTemplate_42 {
  public readonly templateId = 'DFT_0042';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_42 = new DiagnosticFeedbackTemplate_42();


export class DiagnosticFeedbackTemplate_43 {
  public readonly templateId = 'DFT_0043';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_43 = new DiagnosticFeedbackTemplate_43();


export class DiagnosticFeedbackTemplate_44 {
  public readonly templateId = 'DFT_0044';
  public generateTargetedGuidance(band: number): string {
    if (band >= 8.0) return 'Maintain sophisticated lexical precision and nuanced task response argument.';
    if (band >= 7.0) return 'Focus on eliminating minor slips in punctuation and expanding rare collocations.';
    return 'Expand sentence variety with conditional clauses and avoid overusing repetitive linkers.';
  }
}
export const feedbackTemplate_44 = new DiagnosticFeedbackTemplate_44();
