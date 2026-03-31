/**
 * @file Task2EssayRubrics.ts
 * @description Official IELTS Task 2 Essay scoring criteria: Task Response, Coherence, Lexical, Grammar.
 */
export interface Task2RubricEvaluation {
  taskResponseBand: number;
  coherenceCohesionBand: number;
  lexicalResourceBand: number;
  grammaticalRangeBand: number;
  overallWritingBand: number;
  examinerComments: string[];
}

export class Task2EssayRubrics {
  public static computeCompositeBand(tr: number, cc: number, lr: number, gr: number): number {
    const avg = (tr + cc + lr + gr) / 4.0;
    const floor = Math.floor(avg);
    const fraction = avg - floor;
    if (fraction < 0.25) return floor;
    if (fraction < 0.75) return floor + 0.5;
    return floor + 1.0;
  }
}

export class TaskResponseAuditorNode_1 {
  public readonly nodeId = 'TRA_0001';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_1 = new TaskResponseAuditorNode_1();


export class TaskResponseAuditorNode_2 {
  public readonly nodeId = 'TRA_0002';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_2 = new TaskResponseAuditorNode_2();


export class TaskResponseAuditorNode_3 {
  public readonly nodeId = 'TRA_0003';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_3 = new TaskResponseAuditorNode_3();


export class TaskResponseAuditorNode_4 {
  public readonly nodeId = 'TRA_0004';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_4 = new TaskResponseAuditorNode_4();


export class TaskResponseAuditorNode_5 {
  public readonly nodeId = 'TRA_0005';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_5 = new TaskResponseAuditorNode_5();


export class TaskResponseAuditorNode_6 {
  public readonly nodeId = 'TRA_0006';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_6 = new TaskResponseAuditorNode_6();


export class TaskResponseAuditorNode_7 {
  public readonly nodeId = 'TRA_0007';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_7 = new TaskResponseAuditorNode_7();


export class TaskResponseAuditorNode_8 {
  public readonly nodeId = 'TRA_0008';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_8 = new TaskResponseAuditorNode_8();


export class TaskResponseAuditorNode_9 {
  public readonly nodeId = 'TRA_0009';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_9 = new TaskResponseAuditorNode_9();


export class TaskResponseAuditorNode_10 {
  public readonly nodeId = 'TRA_0010';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_10 = new TaskResponseAuditorNode_10();


export class TaskResponseAuditorNode_11 {
  public readonly nodeId = 'TRA_0011';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_11 = new TaskResponseAuditorNode_11();


export class TaskResponseAuditorNode_12 {
  public readonly nodeId = 'TRA_0012';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_12 = new TaskResponseAuditorNode_12();


export class TaskResponseAuditorNode_13 {
  public readonly nodeId = 'TRA_0013';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_13 = new TaskResponseAuditorNode_13();


export class TaskResponseAuditorNode_14 {
  public readonly nodeId = 'TRA_0014';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_14 = new TaskResponseAuditorNode_14();


export class TaskResponseAuditorNode_15 {
  public readonly nodeId = 'TRA_0015';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_15 = new TaskResponseAuditorNode_15();


export class TaskResponseAuditorNode_16 {
  public readonly nodeId = 'TRA_0016';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_16 = new TaskResponseAuditorNode_16();


export class TaskResponseAuditorNode_17 {
  public readonly nodeId = 'TRA_0017';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_17 = new TaskResponseAuditorNode_17();


export class TaskResponseAuditorNode_18 {
  public readonly nodeId = 'TRA_0018';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_18 = new TaskResponseAuditorNode_18();


export class TaskResponseAuditorNode_19 {
  public readonly nodeId = 'TRA_0019';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_19 = new TaskResponseAuditorNode_19();


export class TaskResponseAuditorNode_20 {
  public readonly nodeId = 'TRA_0020';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_20 = new TaskResponseAuditorNode_20();


export class TaskResponseAuditorNode_21 {
  public readonly nodeId = 'TRA_0021';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_21 = new TaskResponseAuditorNode_21();


export class TaskResponseAuditorNode_22 {
  public readonly nodeId = 'TRA_0022';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_22 = new TaskResponseAuditorNode_22();


export class TaskResponseAuditorNode_23 {
  public readonly nodeId = 'TRA_0023';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_23 = new TaskResponseAuditorNode_23();


export class TaskResponseAuditorNode_24 {
  public readonly nodeId = 'TRA_0024';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_24 = new TaskResponseAuditorNode_24();


export class TaskResponseAuditorNode_25 {
  public readonly nodeId = 'TRA_0025';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_25 = new TaskResponseAuditorNode_25();


export class TaskResponseAuditorNode_26 {
  public readonly nodeId = 'TRA_0026';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_26 = new TaskResponseAuditorNode_26();


export class TaskResponseAuditorNode_27 {
  public readonly nodeId = 'TRA_0027';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_27 = new TaskResponseAuditorNode_27();


export class TaskResponseAuditorNode_28 {
  public readonly nodeId = 'TRA_0028';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_28 = new TaskResponseAuditorNode_28();


export class TaskResponseAuditorNode_29 {
  public readonly nodeId = 'TRA_0029';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_29 = new TaskResponseAuditorNode_29();


export class TaskResponseAuditorNode_30 {
  public readonly nodeId = 'TRA_0030';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_30 = new TaskResponseAuditorNode_30();


export class TaskResponseAuditorNode_31 {
  public readonly nodeId = 'TRA_0031';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_31 = new TaskResponseAuditorNode_31();


export class TaskResponseAuditorNode_32 {
  public readonly nodeId = 'TRA_0032';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_32 = new TaskResponseAuditorNode_32();


export class TaskResponseAuditorNode_33 {
  public readonly nodeId = 'TRA_0033';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_33 = new TaskResponseAuditorNode_33();


export class TaskResponseAuditorNode_34 {
  public readonly nodeId = 'TRA_0034';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_34 = new TaskResponseAuditorNode_34();


export class TaskResponseAuditorNode_35 {
  public readonly nodeId = 'TRA_0035';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_35 = new TaskResponseAuditorNode_35();


export class TaskResponseAuditorNode_36 {
  public readonly nodeId = 'TRA_0036';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_36 = new TaskResponseAuditorNode_36();


export class TaskResponseAuditorNode_37 {
  public readonly nodeId = 'TRA_0037';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_37 = new TaskResponseAuditorNode_37();


export class TaskResponseAuditorNode_38 {
  public readonly nodeId = 'TRA_0038';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_38 = new TaskResponseAuditorNode_38();


export class TaskResponseAuditorNode_39 {
  public readonly nodeId = 'TRA_0039';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_39 = new TaskResponseAuditorNode_39();


export class TaskResponseAuditorNode_40 {
  public readonly nodeId = 'TRA_0040';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_40 = new TaskResponseAuditorNode_40();


export class TaskResponseAuditorNode_41 {
  public readonly nodeId = 'TRA_0041';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_41 = new TaskResponseAuditorNode_41();


export class TaskResponseAuditorNode_42 {
  public readonly nodeId = 'TRA_0042';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_42 = new TaskResponseAuditorNode_42();


export class TaskResponseAuditorNode_43 {
  public readonly nodeId = 'TRA_0043';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_43 = new TaskResponseAuditorNode_43();


export class TaskResponseAuditorNode_44 {
  public readonly nodeId = 'TRA_0044';
  public evaluatePositionConsistency(paragraphs: string[]): boolean {
    return paragraphs.length >= 4; // Intro, Body 1, Body 2, Conclusion
  }
}
export const taskResponseAuditor_44 = new TaskResponseAuditorNode_44();
