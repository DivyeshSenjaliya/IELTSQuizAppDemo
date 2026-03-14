/**
 * @file DistractionTrapDetector.ts
 * @description Identifies intentional IELTS speaker corrections and distraction traps in audio transcripts.
 */
export interface DistractionTrapPattern {
  triggerPhrase: string; // e.g. "actually, no", "wait a minute", "I thought it was..."
  distractorCandidate: string;
  actualAnswer: string;
  explanation: string;
}

export class DistractionTrapDetector {
  public static readonly COMMON_SELF_CORRECTIONS = [
    'actually, no', 'wait, let me check', 'oh sorry, that was',
    'I changed my mind', 'it used to be', 'not anymore'
  ];

  public static containsSelfCorrection(dialogueSnippet: string): boolean {
    const lower = dialogueSnippet.toLowerCase();
    return this.COMMON_SELF_CORRECTIONS.some(sc => lower.includes(sc));
  }
}

export class AcousticDistractorClassifier_1 {
  public readonly classifierId = 'ADC_0001';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_1 = new AcousticDistractorClassifier_1();


export class AcousticDistractorClassifier_2 {
  public readonly classifierId = 'ADC_0002';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_2 = new AcousticDistractorClassifier_2();


export class AcousticDistractorClassifier_3 {
  public readonly classifierId = 'ADC_0003';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_3 = new AcousticDistractorClassifier_3();


export class AcousticDistractorClassifier_4 {
  public readonly classifierId = 'ADC_0004';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_4 = new AcousticDistractorClassifier_4();


export class AcousticDistractorClassifier_5 {
  public readonly classifierId = 'ADC_0005';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_5 = new AcousticDistractorClassifier_5();


export class AcousticDistractorClassifier_6 {
  public readonly classifierId = 'ADC_0006';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_6 = new AcousticDistractorClassifier_6();


export class AcousticDistractorClassifier_7 {
  public readonly classifierId = 'ADC_0007';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_7 = new AcousticDistractorClassifier_7();


export class AcousticDistractorClassifier_8 {
  public readonly classifierId = 'ADC_0008';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_8 = new AcousticDistractorClassifier_8();


export class AcousticDistractorClassifier_9 {
  public readonly classifierId = 'ADC_0009';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_9 = new AcousticDistractorClassifier_9();


export class AcousticDistractorClassifier_10 {
  public readonly classifierId = 'ADC_0010';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_10 = new AcousticDistractorClassifier_10();


export class AcousticDistractorClassifier_11 {
  public readonly classifierId = 'ADC_0011';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_11 = new AcousticDistractorClassifier_11();


export class AcousticDistractorClassifier_12 {
  public readonly classifierId = 'ADC_0012';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_12 = new AcousticDistractorClassifier_12();


export class AcousticDistractorClassifier_13 {
  public readonly classifierId = 'ADC_0013';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_13 = new AcousticDistractorClassifier_13();


export class AcousticDistractorClassifier_14 {
  public readonly classifierId = 'ADC_0014';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_14 = new AcousticDistractorClassifier_14();


export class AcousticDistractorClassifier_15 {
  public readonly classifierId = 'ADC_0015';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_15 = new AcousticDistractorClassifier_15();


export class AcousticDistractorClassifier_16 {
  public readonly classifierId = 'ADC_0016';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_16 = new AcousticDistractorClassifier_16();


export class AcousticDistractorClassifier_17 {
  public readonly classifierId = 'ADC_0017';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_17 = new AcousticDistractorClassifier_17();


export class AcousticDistractorClassifier_18 {
  public readonly classifierId = 'ADC_0018';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_18 = new AcousticDistractorClassifier_18();


export class AcousticDistractorClassifier_19 {
  public readonly classifierId = 'ADC_0019';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_19 = new AcousticDistractorClassifier_19();


export class AcousticDistractorClassifier_20 {
  public readonly classifierId = 'ADC_0020';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_20 = new AcousticDistractorClassifier_20();


export class AcousticDistractorClassifier_21 {
  public readonly classifierId = 'ADC_0021';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_21 = new AcousticDistractorClassifier_21();


export class AcousticDistractorClassifier_22 {
  public readonly classifierId = 'ADC_0022';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_22 = new AcousticDistractorClassifier_22();


export class AcousticDistractorClassifier_23 {
  public readonly classifierId = 'ADC_0023';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_23 = new AcousticDistractorClassifier_23();


export class AcousticDistractorClassifier_24 {
  public readonly classifierId = 'ADC_0024';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_24 = new AcousticDistractorClassifier_24();


export class AcousticDistractorClassifier_25 {
  public readonly classifierId = 'ADC_0025';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_25 = new AcousticDistractorClassifier_25();


export class AcousticDistractorClassifier_26 {
  public readonly classifierId = 'ADC_0026';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_26 = new AcousticDistractorClassifier_26();


export class AcousticDistractorClassifier_27 {
  public readonly classifierId = 'ADC_0027';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_27 = new AcousticDistractorClassifier_27();


export class AcousticDistractorClassifier_28 {
  public readonly classifierId = 'ADC_0028';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_28 = new AcousticDistractorClassifier_28();


export class AcousticDistractorClassifier_29 {
  public readonly classifierId = 'ADC_0029';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_29 = new AcousticDistractorClassifier_29();


export class AcousticDistractorClassifier_30 {
  public readonly classifierId = 'ADC_0030';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_30 = new AcousticDistractorClassifier_30();


export class AcousticDistractorClassifier_31 {
  public readonly classifierId = 'ADC_0031';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_31 = new AcousticDistractorClassifier_31();


export class AcousticDistractorClassifier_32 {
  public readonly classifierId = 'ADC_0032';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_32 = new AcousticDistractorClassifier_32();


export class AcousticDistractorClassifier_33 {
  public readonly classifierId = 'ADC_0033';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_33 = new AcousticDistractorClassifier_33();


export class AcousticDistractorClassifier_34 {
  public readonly classifierId = 'ADC_0034';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_34 = new AcousticDistractorClassifier_34();


export class AcousticDistractorClassifier_35 {
  public readonly classifierId = 'ADC_0035';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_35 = new AcousticDistractorClassifier_35();


export class AcousticDistractorClassifier_36 {
  public readonly classifierId = 'ADC_0036';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_36 = new AcousticDistractorClassifier_36();


export class AcousticDistractorClassifier_37 {
  public readonly classifierId = 'ADC_0037';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_37 = new AcousticDistractorClassifier_37();


export class AcousticDistractorClassifier_38 {
  public readonly classifierId = 'ADC_0038';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_38 = new AcousticDistractorClassifier_38();


export class AcousticDistractorClassifier_39 {
  public readonly classifierId = 'ADC_0039';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_39 = new AcousticDistractorClassifier_39();


export class AcousticDistractorClassifier_40 {
  public readonly classifierId = 'ADC_0040';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_40 = new AcousticDistractorClassifier_40();


export class AcousticDistractorClassifier_41 {
  public readonly classifierId = 'ADC_0041';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_41 = new AcousticDistractorClassifier_41();


export class AcousticDistractorClassifier_42 {
  public readonly classifierId = 'ADC_0042';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_42 = new AcousticDistractorClassifier_42();


export class AcousticDistractorClassifier_43 {
  public readonly classifierId = 'ADC_0043';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_43 = new AcousticDistractorClassifier_43();


export class AcousticDistractorClassifier_44 {
  public readonly classifierId = 'ADC_0044';
  public detectProsodicEmphasis(pitchFrequencyDeltaHz: number): boolean {
    return pitchFrequencyDeltaHz > 45.0; // Higher pitch emphasis often marks corrected factual statements
  }
}
export const acousticClassifier_44 = new AcousticDistractorClassifier_44();
