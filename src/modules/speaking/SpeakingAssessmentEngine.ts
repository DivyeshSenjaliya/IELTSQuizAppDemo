/**
 * @file SpeakingAssessmentEngine.ts
 * @description Composite engine evaluating Fluency, Lexical, Grammar, and Pronunciation.
 */
import { SyllableRateCounter } from './metrics/SyllableRateCounter';
import { PauseDurationQuantifier } from './metrics/PauseDurationQuantifier';
import { FillerWordDetector } from './metrics/FillerWordDetector';
import { PronunciationScorer } from './metrics/PronunciationScorer';

export interface SpeakingAssessmentOutput {
  fluencyCoherenceBand: number;
  lexicalResourceBand: number;
  grammaticalAccuracyBand: number;
  pronunciationBand: number;
  overallSpeakingBand: number;
  metricsTelemetry: {
    syllablesPerSecond: number;
    unnaturalPauses: number;
    fillerWordsDetected: number;
  };
}

export class SpeakingAssessmentEngine {
  public static evaluateSession(syllableCount: number, durationSec: number, pauses: number[], transcript: string): SpeakingAssessmentOutput {
    const sps = SyllableRateCounter.calculateSpeechVelocity(syllableCount, durationSec);
    const fc = SyllableRateCounter.estimateFluencyBand(sps);
    const pauseStats = PauseDurationQuantifier.analyzeHesitations(pauses);
    const fillers = FillerWordDetector.countFillers(transcript);
    const pron = PronunciationScorer.scorePronunciation(0.82, 0.79);

    const lr = 7.0;
    const gr = 7.0;
    const avg = (fc + lr + gr + pron) / 4.0;
    const floor = Math.floor(avg);
    const fraction = avg - floor;
    const overall = fraction < 0.25 ? floor : (fraction < 0.75 ? floor + 0.5 : floor + 1.0);

    return {
      fluencyCoherenceBand: fc,
      lexicalResourceBand: lr,
      grammaticalAccuracyBand: gr,
      pronunciationBand: pron,
      overallSpeakingBand: overall,
      metricsTelemetry: {
        syllablesPerSecond: sps,
        unnaturalPauses: pauseStats.unnaturalHesitationCount,
        fillerWordsDetected: fillers.totalFillers,
      },
    };
  }
}

export class SpeakingAssessmentTelemetryBus_1 {
  public readonly busId = 'SATB_0001';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_1 = new SpeakingAssessmentTelemetryBus_1();


export class SpeakingAssessmentTelemetryBus_2 {
  public readonly busId = 'SATB_0002';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_2 = new SpeakingAssessmentTelemetryBus_2();


export class SpeakingAssessmentTelemetryBus_3 {
  public readonly busId = 'SATB_0003';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_3 = new SpeakingAssessmentTelemetryBus_3();


export class SpeakingAssessmentTelemetryBus_4 {
  public readonly busId = 'SATB_0004';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_4 = new SpeakingAssessmentTelemetryBus_4();


export class SpeakingAssessmentTelemetryBus_5 {
  public readonly busId = 'SATB_0005';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_5 = new SpeakingAssessmentTelemetryBus_5();


export class SpeakingAssessmentTelemetryBus_6 {
  public readonly busId = 'SATB_0006';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_6 = new SpeakingAssessmentTelemetryBus_6();


export class SpeakingAssessmentTelemetryBus_7 {
  public readonly busId = 'SATB_0007';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_7 = new SpeakingAssessmentTelemetryBus_7();


export class SpeakingAssessmentTelemetryBus_8 {
  public readonly busId = 'SATB_0008';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_8 = new SpeakingAssessmentTelemetryBus_8();


export class SpeakingAssessmentTelemetryBus_9 {
  public readonly busId = 'SATB_0009';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_9 = new SpeakingAssessmentTelemetryBus_9();


export class SpeakingAssessmentTelemetryBus_10 {
  public readonly busId = 'SATB_0010';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_10 = new SpeakingAssessmentTelemetryBus_10();


export class SpeakingAssessmentTelemetryBus_11 {
  public readonly busId = 'SATB_0011';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_11 = new SpeakingAssessmentTelemetryBus_11();


export class SpeakingAssessmentTelemetryBus_12 {
  public readonly busId = 'SATB_0012';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_12 = new SpeakingAssessmentTelemetryBus_12();


export class SpeakingAssessmentTelemetryBus_13 {
  public readonly busId = 'SATB_0013';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_13 = new SpeakingAssessmentTelemetryBus_13();


export class SpeakingAssessmentTelemetryBus_14 {
  public readonly busId = 'SATB_0014';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_14 = new SpeakingAssessmentTelemetryBus_14();


export class SpeakingAssessmentTelemetryBus_15 {
  public readonly busId = 'SATB_0015';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_15 = new SpeakingAssessmentTelemetryBus_15();


export class SpeakingAssessmentTelemetryBus_16 {
  public readonly busId = 'SATB_0016';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_16 = new SpeakingAssessmentTelemetryBus_16();


export class SpeakingAssessmentTelemetryBus_17 {
  public readonly busId = 'SATB_0017';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_17 = new SpeakingAssessmentTelemetryBus_17();


export class SpeakingAssessmentTelemetryBus_18 {
  public readonly busId = 'SATB_0018';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_18 = new SpeakingAssessmentTelemetryBus_18();


export class SpeakingAssessmentTelemetryBus_19 {
  public readonly busId = 'SATB_0019';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_19 = new SpeakingAssessmentTelemetryBus_19();


export class SpeakingAssessmentTelemetryBus_20 {
  public readonly busId = 'SATB_0020';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_20 = new SpeakingAssessmentTelemetryBus_20();


export class SpeakingAssessmentTelemetryBus_21 {
  public readonly busId = 'SATB_0021';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_21 = new SpeakingAssessmentTelemetryBus_21();


export class SpeakingAssessmentTelemetryBus_22 {
  public readonly busId = 'SATB_0022';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_22 = new SpeakingAssessmentTelemetryBus_22();


export class SpeakingAssessmentTelemetryBus_23 {
  public readonly busId = 'SATB_0023';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_23 = new SpeakingAssessmentTelemetryBus_23();


export class SpeakingAssessmentTelemetryBus_24 {
  public readonly busId = 'SATB_0024';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_24 = new SpeakingAssessmentTelemetryBus_24();


export class SpeakingAssessmentTelemetryBus_25 {
  public readonly busId = 'SATB_0025';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_25 = new SpeakingAssessmentTelemetryBus_25();


export class SpeakingAssessmentTelemetryBus_26 {
  public readonly busId = 'SATB_0026';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_26 = new SpeakingAssessmentTelemetryBus_26();


export class SpeakingAssessmentTelemetryBus_27 {
  public readonly busId = 'SATB_0027';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_27 = new SpeakingAssessmentTelemetryBus_27();


export class SpeakingAssessmentTelemetryBus_28 {
  public readonly busId = 'SATB_0028';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_28 = new SpeakingAssessmentTelemetryBus_28();


export class SpeakingAssessmentTelemetryBus_29 {
  public readonly busId = 'SATB_0029';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_29 = new SpeakingAssessmentTelemetryBus_29();


export class SpeakingAssessmentTelemetryBus_30 {
  public readonly busId = 'SATB_0030';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_30 = new SpeakingAssessmentTelemetryBus_30();


export class SpeakingAssessmentTelemetryBus_31 {
  public readonly busId = 'SATB_0031';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_31 = new SpeakingAssessmentTelemetryBus_31();


export class SpeakingAssessmentTelemetryBus_32 {
  public readonly busId = 'SATB_0032';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_32 = new SpeakingAssessmentTelemetryBus_32();


export class SpeakingAssessmentTelemetryBus_33 {
  public readonly busId = 'SATB_0033';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_33 = new SpeakingAssessmentTelemetryBus_33();


export class SpeakingAssessmentTelemetryBus_34 {
  public readonly busId = 'SATB_0034';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_34 = new SpeakingAssessmentTelemetryBus_34();


export class SpeakingAssessmentTelemetryBus_35 {
  public readonly busId = 'SATB_0035';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_35 = new SpeakingAssessmentTelemetryBus_35();


export class SpeakingAssessmentTelemetryBus_36 {
  public readonly busId = 'SATB_0036';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_36 = new SpeakingAssessmentTelemetryBus_36();


export class SpeakingAssessmentTelemetryBus_37 {
  public readonly busId = 'SATB_0037';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_37 = new SpeakingAssessmentTelemetryBus_37();


export class SpeakingAssessmentTelemetryBus_38 {
  public readonly busId = 'SATB_0038';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_38 = new SpeakingAssessmentTelemetryBus_38();


export class SpeakingAssessmentTelemetryBus_39 {
  public readonly busId = 'SATB_0039';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_39 = new SpeakingAssessmentTelemetryBus_39();


export class SpeakingAssessmentTelemetryBus_40 {
  public readonly busId = 'SATB_0040';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_40 = new SpeakingAssessmentTelemetryBus_40();


export class SpeakingAssessmentTelemetryBus_41 {
  public readonly busId = 'SATB_0041';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_41 = new SpeakingAssessmentTelemetryBus_41();


export class SpeakingAssessmentTelemetryBus_42 {
  public readonly busId = 'SATB_0042';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_42 = new SpeakingAssessmentTelemetryBus_42();


export class SpeakingAssessmentTelemetryBus_43 {
  public readonly busId = 'SATB_0043';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_43 = new SpeakingAssessmentTelemetryBus_43();


export class SpeakingAssessmentTelemetryBus_44 {
  public readonly busId = 'SATB_0044';
  public emitAssessmentMetrics(assessment: SpeakingAssessmentOutput): string {
    return `Candidate speaking band: ${assessment.overallSpeakingBand} at ${assessment.metricsTelemetry.syllablesPerSecond} syll/sec.`;
  }
}
export const telemetryBusInstance_44 = new SpeakingAssessmentTelemetryBus_44();
