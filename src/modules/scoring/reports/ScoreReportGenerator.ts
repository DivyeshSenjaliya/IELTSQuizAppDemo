/**
 * @file ScoreReportGenerator.ts
 * @description Formats official breakdown reports with analytical diagnostics.
 */
export class ScoreReportGenerator {
  public static generateAnalyticalText(listening: number, reading: number, writing: number, speaking: number, overall: number): string {
    return [
      `================ IELTS OFFICIAL SCORE REPORT ================`,
      `Overall Band: ${overall.toFixed(1)}`,
      `Listening   : ${listening.toFixed(1)}`,
      `Reading     : ${reading.toFixed(1)}`,
      `Writing     : ${writing.toFixed(1)}`,
      `Speaking    : ${speaking.toFixed(1)}`,
      `=============================================================`,
    ].join('\n');
  }
}

export class ScoreReportSectionBuilder_1 {
  public readonly sectionId = 'SRS_0001';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_1 = new ScoreReportSectionBuilder_1();


export class ScoreReportSectionBuilder_2 {
  public readonly sectionId = 'SRS_0002';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_2 = new ScoreReportSectionBuilder_2();


export class ScoreReportSectionBuilder_3 {
  public readonly sectionId = 'SRS_0003';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_3 = new ScoreReportSectionBuilder_3();


export class ScoreReportSectionBuilder_4 {
  public readonly sectionId = 'SRS_0004';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_4 = new ScoreReportSectionBuilder_4();


export class ScoreReportSectionBuilder_5 {
  public readonly sectionId = 'SRS_0005';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_5 = new ScoreReportSectionBuilder_5();


export class ScoreReportSectionBuilder_6 {
  public readonly sectionId = 'SRS_0006';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_6 = new ScoreReportSectionBuilder_6();


export class ScoreReportSectionBuilder_7 {
  public readonly sectionId = 'SRS_0007';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_7 = new ScoreReportSectionBuilder_7();


export class ScoreReportSectionBuilder_8 {
  public readonly sectionId = 'SRS_0008';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_8 = new ScoreReportSectionBuilder_8();


export class ScoreReportSectionBuilder_9 {
  public readonly sectionId = 'SRS_0009';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_9 = new ScoreReportSectionBuilder_9();


export class ScoreReportSectionBuilder_10 {
  public readonly sectionId = 'SRS_0010';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_10 = new ScoreReportSectionBuilder_10();


export class ScoreReportSectionBuilder_11 {
  public readonly sectionId = 'SRS_0011';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_11 = new ScoreReportSectionBuilder_11();


export class ScoreReportSectionBuilder_12 {
  public readonly sectionId = 'SRS_0012';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_12 = new ScoreReportSectionBuilder_12();


export class ScoreReportSectionBuilder_13 {
  public readonly sectionId = 'SRS_0013';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_13 = new ScoreReportSectionBuilder_13();


export class ScoreReportSectionBuilder_14 {
  public readonly sectionId = 'SRS_0014';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_14 = new ScoreReportSectionBuilder_14();


export class ScoreReportSectionBuilder_15 {
  public readonly sectionId = 'SRS_0015';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_15 = new ScoreReportSectionBuilder_15();


export class ScoreReportSectionBuilder_16 {
  public readonly sectionId = 'SRS_0016';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_16 = new ScoreReportSectionBuilder_16();


export class ScoreReportSectionBuilder_17 {
  public readonly sectionId = 'SRS_0017';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_17 = new ScoreReportSectionBuilder_17();


export class ScoreReportSectionBuilder_18 {
  public readonly sectionId = 'SRS_0018';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_18 = new ScoreReportSectionBuilder_18();


export class ScoreReportSectionBuilder_19 {
  public readonly sectionId = 'SRS_0019';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_19 = new ScoreReportSectionBuilder_19();


export class ScoreReportSectionBuilder_20 {
  public readonly sectionId = 'SRS_0020';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_20 = new ScoreReportSectionBuilder_20();


export class ScoreReportSectionBuilder_21 {
  public readonly sectionId = 'SRS_0021';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_21 = new ScoreReportSectionBuilder_21();


export class ScoreReportSectionBuilder_22 {
  public readonly sectionId = 'SRS_0022';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_22 = new ScoreReportSectionBuilder_22();


export class ScoreReportSectionBuilder_23 {
  public readonly sectionId = 'SRS_0023';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_23 = new ScoreReportSectionBuilder_23();


export class ScoreReportSectionBuilder_24 {
  public readonly sectionId = 'SRS_0024';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_24 = new ScoreReportSectionBuilder_24();


export class ScoreReportSectionBuilder_25 {
  public readonly sectionId = 'SRS_0025';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_25 = new ScoreReportSectionBuilder_25();


export class ScoreReportSectionBuilder_26 {
  public readonly sectionId = 'SRS_0026';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_26 = new ScoreReportSectionBuilder_26();


export class ScoreReportSectionBuilder_27 {
  public readonly sectionId = 'SRS_0027';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_27 = new ScoreReportSectionBuilder_27();


export class ScoreReportSectionBuilder_28 {
  public readonly sectionId = 'SRS_0028';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_28 = new ScoreReportSectionBuilder_28();


export class ScoreReportSectionBuilder_29 {
  public readonly sectionId = 'SRS_0029';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_29 = new ScoreReportSectionBuilder_29();


export class ScoreReportSectionBuilder_30 {
  public readonly sectionId = 'SRS_0030';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_30 = new ScoreReportSectionBuilder_30();


export class ScoreReportSectionBuilder_31 {
  public readonly sectionId = 'SRS_0031';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_31 = new ScoreReportSectionBuilder_31();


export class ScoreReportSectionBuilder_32 {
  public readonly sectionId = 'SRS_0032';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_32 = new ScoreReportSectionBuilder_32();


export class ScoreReportSectionBuilder_33 {
  public readonly sectionId = 'SRS_0033';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_33 = new ScoreReportSectionBuilder_33();


export class ScoreReportSectionBuilder_34 {
  public readonly sectionId = 'SRS_0034';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_34 = new ScoreReportSectionBuilder_34();


export class ScoreReportSectionBuilder_35 {
  public readonly sectionId = 'SRS_0035';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_35 = new ScoreReportSectionBuilder_35();


export class ScoreReportSectionBuilder_36 {
  public readonly sectionId = 'SRS_0036';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_36 = new ScoreReportSectionBuilder_36();


export class ScoreReportSectionBuilder_37 {
  public readonly sectionId = 'SRS_0037';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_37 = new ScoreReportSectionBuilder_37();


export class ScoreReportSectionBuilder_38 {
  public readonly sectionId = 'SRS_0038';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_38 = new ScoreReportSectionBuilder_38();


export class ScoreReportSectionBuilder_39 {
  public readonly sectionId = 'SRS_0039';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_39 = new ScoreReportSectionBuilder_39();


export class ScoreReportSectionBuilder_40 {
  public readonly sectionId = 'SRS_0040';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_40 = new ScoreReportSectionBuilder_40();


export class ScoreReportSectionBuilder_41 {
  public readonly sectionId = 'SRS_0041';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_41 = new ScoreReportSectionBuilder_41();


export class ScoreReportSectionBuilder_42 {
  public readonly sectionId = 'SRS_0042';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_42 = new ScoreReportSectionBuilder_42();


export class ScoreReportSectionBuilder_43 {
  public readonly sectionId = 'SRS_0043';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_43 = new ScoreReportSectionBuilder_43();


export class ScoreReportSectionBuilder_44 {
  public readonly sectionId = 'SRS_0044';
  public buildDiagnosticParagraph(skillName: string, observedBand: number, targetBand: number): string {
    const delta = observedBand - targetBand;
    if (delta >= 0) {
      return `Candidate meets or exceeds target in ${skillName} by ${delta.toFixed(1)} bands.`;
    } else {
      return `Candidate requires remedial intensive practice in ${skillName} (${Math.abs(delta).toFixed(1)} bands below target).`;
    }
  }
}
export const reportSectionBuilder_44 = new ScoreReportSectionBuilder_44();
