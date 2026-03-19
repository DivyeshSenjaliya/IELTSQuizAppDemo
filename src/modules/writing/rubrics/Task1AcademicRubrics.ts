/**
 * @file Task1AcademicRubrics.ts
 * @description Official IELTS Task 1 Academic scoring criteria: Task Achievement, Coherence, Lexical, Grammar.
 */
export interface Task1RubricBandDescriptor {
  band: number;
  taskAchievement: string;
  coherenceAndCohesion: string;
  lexicalResource: string;
  grammaticalRange: string;
}

export const TASK_1_ACADEMIC_DESCRIPTORS: Record<number, Task1RubricBandDescriptor> = {
  9: {
    band: 9,
    taskAchievement: 'Fully satisfies all requirements with comprehensive overview and precise trend selection.',
    coherenceAndCohesion: 'Uses cohesion in such a way that it attracts no attention; skillfully manages paragraphing.',
    lexicalResource: 'Uses a wide range of vocabulary with very natural and sophisticated control of lexical features.',
    grammaticalRange: 'Uses a wide range of structures with full flexibility and accuracy; rare minor errors occur only as slips.',
  },
  8: {
    band: 8,
    taskAchievement: 'Covers all requirements appropriately; presents a clear overview of main trends, differences or stages.',
    coherenceAndCohesion: 'Sequences information and ideas logically; manages all aspects of cohesion well.',
    lexicalResource: 'Uses a wide range of vocabulary fluently and flexibly to convey precise meanings; skillful in collocations.',
    grammaticalRange: 'Uses a wide variety of structures; the majority of sentences are error-free with good punctuation.',
  },
  7: {
    band: 7,
    taskAchievement: 'Covers the requirements of the task; presents a clear overview of main trends, differences or stages.',
    coherenceAndCohesion: 'Logically organizes information and ideas; clear progression throughout; uses a range of cohesive devices.',
    lexicalResource: 'Uses a sufficient range of vocabulary to allow some flexibility and precision; uses less common lexical items.',
    grammaticalRange: 'Uses a variety of complex structures; produces frequent error-free sentences with good control.',
  },
};

export class Task1AcademicTrendAnalyzer_1 {
  public readonly analyzerId = 'T1ATA_0001';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_1 = new Task1AcademicTrendAnalyzer_1();


export class Task1AcademicTrendAnalyzer_2 {
  public readonly analyzerId = 'T1ATA_0002';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_2 = new Task1AcademicTrendAnalyzer_2();


export class Task1AcademicTrendAnalyzer_3 {
  public readonly analyzerId = 'T1ATA_0003';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_3 = new Task1AcademicTrendAnalyzer_3();


export class Task1AcademicTrendAnalyzer_4 {
  public readonly analyzerId = 'T1ATA_0004';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_4 = new Task1AcademicTrendAnalyzer_4();


export class Task1AcademicTrendAnalyzer_5 {
  public readonly analyzerId = 'T1ATA_0005';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_5 = new Task1AcademicTrendAnalyzer_5();


export class Task1AcademicTrendAnalyzer_6 {
  public readonly analyzerId = 'T1ATA_0006';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_6 = new Task1AcademicTrendAnalyzer_6();


export class Task1AcademicTrendAnalyzer_7 {
  public readonly analyzerId = 'T1ATA_0007';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_7 = new Task1AcademicTrendAnalyzer_7();


export class Task1AcademicTrendAnalyzer_8 {
  public readonly analyzerId = 'T1ATA_0008';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_8 = new Task1AcademicTrendAnalyzer_8();


export class Task1AcademicTrendAnalyzer_9 {
  public readonly analyzerId = 'T1ATA_0009';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_9 = new Task1AcademicTrendAnalyzer_9();


export class Task1AcademicTrendAnalyzer_10 {
  public readonly analyzerId = 'T1ATA_0010';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_10 = new Task1AcademicTrendAnalyzer_10();


export class Task1AcademicTrendAnalyzer_11 {
  public readonly analyzerId = 'T1ATA_0011';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_11 = new Task1AcademicTrendAnalyzer_11();


export class Task1AcademicTrendAnalyzer_12 {
  public readonly analyzerId = 'T1ATA_0012';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_12 = new Task1AcademicTrendAnalyzer_12();


export class Task1AcademicTrendAnalyzer_13 {
  public readonly analyzerId = 'T1ATA_0013';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_13 = new Task1AcademicTrendAnalyzer_13();


export class Task1AcademicTrendAnalyzer_14 {
  public readonly analyzerId = 'T1ATA_0014';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_14 = new Task1AcademicTrendAnalyzer_14();


export class Task1AcademicTrendAnalyzer_15 {
  public readonly analyzerId = 'T1ATA_0015';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_15 = new Task1AcademicTrendAnalyzer_15();


export class Task1AcademicTrendAnalyzer_16 {
  public readonly analyzerId = 'T1ATA_0016';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_16 = new Task1AcademicTrendAnalyzer_16();


export class Task1AcademicTrendAnalyzer_17 {
  public readonly analyzerId = 'T1ATA_0017';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_17 = new Task1AcademicTrendAnalyzer_17();


export class Task1AcademicTrendAnalyzer_18 {
  public readonly analyzerId = 'T1ATA_0018';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_18 = new Task1AcademicTrendAnalyzer_18();


export class Task1AcademicTrendAnalyzer_19 {
  public readonly analyzerId = 'T1ATA_0019';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_19 = new Task1AcademicTrendAnalyzer_19();


export class Task1AcademicTrendAnalyzer_20 {
  public readonly analyzerId = 'T1ATA_0020';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_20 = new Task1AcademicTrendAnalyzer_20();


export class Task1AcademicTrendAnalyzer_21 {
  public readonly analyzerId = 'T1ATA_0021';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_21 = new Task1AcademicTrendAnalyzer_21();


export class Task1AcademicTrendAnalyzer_22 {
  public readonly analyzerId = 'T1ATA_0022';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_22 = new Task1AcademicTrendAnalyzer_22();


export class Task1AcademicTrendAnalyzer_23 {
  public readonly analyzerId = 'T1ATA_0023';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_23 = new Task1AcademicTrendAnalyzer_23();


export class Task1AcademicTrendAnalyzer_24 {
  public readonly analyzerId = 'T1ATA_0024';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_24 = new Task1AcademicTrendAnalyzer_24();


export class Task1AcademicTrendAnalyzer_25 {
  public readonly analyzerId = 'T1ATA_0025';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_25 = new Task1AcademicTrendAnalyzer_25();


export class Task1AcademicTrendAnalyzer_26 {
  public readonly analyzerId = 'T1ATA_0026';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_26 = new Task1AcademicTrendAnalyzer_26();


export class Task1AcademicTrendAnalyzer_27 {
  public readonly analyzerId = 'T1ATA_0027';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_27 = new Task1AcademicTrendAnalyzer_27();


export class Task1AcademicTrendAnalyzer_28 {
  public readonly analyzerId = 'T1ATA_0028';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_28 = new Task1AcademicTrendAnalyzer_28();


export class Task1AcademicTrendAnalyzer_29 {
  public readonly analyzerId = 'T1ATA_0029';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_29 = new Task1AcademicTrendAnalyzer_29();


export class Task1AcademicTrendAnalyzer_30 {
  public readonly analyzerId = 'T1ATA_0030';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_30 = new Task1AcademicTrendAnalyzer_30();


export class Task1AcademicTrendAnalyzer_31 {
  public readonly analyzerId = 'T1ATA_0031';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_31 = new Task1AcademicTrendAnalyzer_31();


export class Task1AcademicTrendAnalyzer_32 {
  public readonly analyzerId = 'T1ATA_0032';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_32 = new Task1AcademicTrendAnalyzer_32();


export class Task1AcademicTrendAnalyzer_33 {
  public readonly analyzerId = 'T1ATA_0033';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_33 = new Task1AcademicTrendAnalyzer_33();


export class Task1AcademicTrendAnalyzer_34 {
  public readonly analyzerId = 'T1ATA_0034';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_34 = new Task1AcademicTrendAnalyzer_34();


export class Task1AcademicTrendAnalyzer_35 {
  public readonly analyzerId = 'T1ATA_0035';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_35 = new Task1AcademicTrendAnalyzer_35();


export class Task1AcademicTrendAnalyzer_36 {
  public readonly analyzerId = 'T1ATA_0036';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_36 = new Task1AcademicTrendAnalyzer_36();


export class Task1AcademicTrendAnalyzer_37 {
  public readonly analyzerId = 'T1ATA_0037';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_37 = new Task1AcademicTrendAnalyzer_37();


export class Task1AcademicTrendAnalyzer_38 {
  public readonly analyzerId = 'T1ATA_0038';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_38 = new Task1AcademicTrendAnalyzer_38();


export class Task1AcademicTrendAnalyzer_39 {
  public readonly analyzerId = 'T1ATA_0039';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_39 = new Task1AcademicTrendAnalyzer_39();


export class Task1AcademicTrendAnalyzer_40 {
  public readonly analyzerId = 'T1ATA_0040';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_40 = new Task1AcademicTrendAnalyzer_40();


export class Task1AcademicTrendAnalyzer_41 {
  public readonly analyzerId = 'T1ATA_0041';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_41 = new Task1AcademicTrendAnalyzer_41();


export class Task1AcademicTrendAnalyzer_42 {
  public readonly analyzerId = 'T1ATA_0042';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_42 = new Task1AcademicTrendAnalyzer_42();


export class Task1AcademicTrendAnalyzer_43 {
  public readonly analyzerId = 'T1ATA_0043';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_43 = new Task1AcademicTrendAnalyzer_43();


export class Task1AcademicTrendAnalyzer_44 {
  public readonly analyzerId = 'T1ATA_0044';
  public detectTrendKeywords(essayBody: string): string[] {
    const trendTerms = ['surged', 'peaked at', 'fluctuated markedly', 'plateaued', 'declined precipitously', 'levelled off'];
    return trendTerms.filter(t => essayBody.toLowerCase().includes(t));
  }
}
export const trendAnalyzerInstance_44 = new Task1AcademicTrendAnalyzer_44();
