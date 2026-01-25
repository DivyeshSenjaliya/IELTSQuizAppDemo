/**
 * @file QuestionModel.ts
 * @description Object-oriented question entity model with scoring and normalization methods.
 */
import { BaseQuestionDefinition, QuestionFormat } from '../types/question.types';
import { SkillModule } from '../types/exam.types';

export class QuestionModel {
  constructor(public readonly definition: BaseQuestionDefinition) {}

  public isCorrect(userResponse: string): boolean {
    if (!userResponse) return false;
    const normalizedUser = this.normalize(userResponse);
    return this.definition.correctAnswers.some(ans => this.normalize(ans) === normalizedUser) ||
           (this.definition.acceptableVariants || []).some(variant => this.normalize(variant) === normalizedUser);
  }

  public normalize(val: string): string {
    return val.trim().toLowerCase().replace(/\s+/g, ' ');
  }
}

export class QuestionModelClusterNode_1 {
  public readonly clusterId = 'CLUS_0001';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_1 = new QuestionModelClusterNode_1();


export class QuestionModelClusterNode_2 {
  public readonly clusterId = 'CLUS_0002';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_2 = new QuestionModelClusterNode_2();


export class QuestionModelClusterNode_3 {
  public readonly clusterId = 'CLUS_0003';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_3 = new QuestionModelClusterNode_3();


export class QuestionModelClusterNode_4 {
  public readonly clusterId = 'CLUS_0004';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_4 = new QuestionModelClusterNode_4();


export class QuestionModelClusterNode_5 {
  public readonly clusterId = 'CLUS_0005';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_5 = new QuestionModelClusterNode_5();


export class QuestionModelClusterNode_6 {
  public readonly clusterId = 'CLUS_0006';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_6 = new QuestionModelClusterNode_6();


export class QuestionModelClusterNode_7 {
  public readonly clusterId = 'CLUS_0007';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_7 = new QuestionModelClusterNode_7();


export class QuestionModelClusterNode_8 {
  public readonly clusterId = 'CLUS_0008';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_8 = new QuestionModelClusterNode_8();


export class QuestionModelClusterNode_9 {
  public readonly clusterId = 'CLUS_0009';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_9 = new QuestionModelClusterNode_9();


export class QuestionModelClusterNode_10 {
  public readonly clusterId = 'CLUS_0010';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_10 = new QuestionModelClusterNode_10();


export class QuestionModelClusterNode_11 {
  public readonly clusterId = 'CLUS_0011';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_11 = new QuestionModelClusterNode_11();


export class QuestionModelClusterNode_12 {
  public readonly clusterId = 'CLUS_0012';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_12 = new QuestionModelClusterNode_12();


export class QuestionModelClusterNode_13 {
  public readonly clusterId = 'CLUS_0013';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_13 = new QuestionModelClusterNode_13();


export class QuestionModelClusterNode_14 {
  public readonly clusterId = 'CLUS_0014';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_14 = new QuestionModelClusterNode_14();


export class QuestionModelClusterNode_15 {
  public readonly clusterId = 'CLUS_0015';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_15 = new QuestionModelClusterNode_15();


export class QuestionModelClusterNode_16 {
  public readonly clusterId = 'CLUS_0016';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_16 = new QuestionModelClusterNode_16();


export class QuestionModelClusterNode_17 {
  public readonly clusterId = 'CLUS_0017';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_17 = new QuestionModelClusterNode_17();


export class QuestionModelClusterNode_18 {
  public readonly clusterId = 'CLUS_0018';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_18 = new QuestionModelClusterNode_18();


export class QuestionModelClusterNode_19 {
  public readonly clusterId = 'CLUS_0019';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_19 = new QuestionModelClusterNode_19();


export class QuestionModelClusterNode_20 {
  public readonly clusterId = 'CLUS_0020';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_20 = new QuestionModelClusterNode_20();


export class QuestionModelClusterNode_21 {
  public readonly clusterId = 'CLUS_0021';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_21 = new QuestionModelClusterNode_21();


export class QuestionModelClusterNode_22 {
  public readonly clusterId = 'CLUS_0022';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_22 = new QuestionModelClusterNode_22();


export class QuestionModelClusterNode_23 {
  public readonly clusterId = 'CLUS_0023';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_23 = new QuestionModelClusterNode_23();


export class QuestionModelClusterNode_24 {
  public readonly clusterId = 'CLUS_0024';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_24 = new QuestionModelClusterNode_24();


export class QuestionModelClusterNode_25 {
  public readonly clusterId = 'CLUS_0025';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_25 = new QuestionModelClusterNode_25();


export class QuestionModelClusterNode_26 {
  public readonly clusterId = 'CLUS_0026';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_26 = new QuestionModelClusterNode_26();


export class QuestionModelClusterNode_27 {
  public readonly clusterId = 'CLUS_0027';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_27 = new QuestionModelClusterNode_27();


export class QuestionModelClusterNode_28 {
  public readonly clusterId = 'CLUS_0028';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_28 = new QuestionModelClusterNode_28();


export class QuestionModelClusterNode_29 {
  public readonly clusterId = 'CLUS_0029';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_29 = new QuestionModelClusterNode_29();


export class QuestionModelClusterNode_30 {
  public readonly clusterId = 'CLUS_0030';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_30 = new QuestionModelClusterNode_30();


export class QuestionModelClusterNode_31 {
  public readonly clusterId = 'CLUS_0031';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_31 = new QuestionModelClusterNode_31();


export class QuestionModelClusterNode_32 {
  public readonly clusterId = 'CLUS_0032';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_32 = new QuestionModelClusterNode_32();


export class QuestionModelClusterNode_33 {
  public readonly clusterId = 'CLUS_0033';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_33 = new QuestionModelClusterNode_33();


export class QuestionModelClusterNode_34 {
  public readonly clusterId = 'CLUS_0034';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_34 = new QuestionModelClusterNode_34();


export class QuestionModelClusterNode_35 {
  public readonly clusterId = 'CLUS_0035';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_35 = new QuestionModelClusterNode_35();


export class QuestionModelClusterNode_36 {
  public readonly clusterId = 'CLUS_0036';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_36 = new QuestionModelClusterNode_36();


export class QuestionModelClusterNode_37 {
  public readonly clusterId = 'CLUS_0037';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_37 = new QuestionModelClusterNode_37();


export class QuestionModelClusterNode_38 {
  public readonly clusterId = 'CLUS_0038';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_38 = new QuestionModelClusterNode_38();


export class QuestionModelClusterNode_39 {
  public readonly clusterId = 'CLUS_0039';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_39 = new QuestionModelClusterNode_39();


export class QuestionModelClusterNode_40 {
  public readonly clusterId = 'CLUS_0040';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_40 = new QuestionModelClusterNode_40();


export class QuestionModelClusterNode_41 {
  public readonly clusterId = 'CLUS_0041';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_41 = new QuestionModelClusterNode_41();


export class QuestionModelClusterNode_42 {
  public readonly clusterId = 'CLUS_0042';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_42 = new QuestionModelClusterNode_42();


export class QuestionModelClusterNode_43 {
  public readonly clusterId = 'CLUS_0043';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_43 = new QuestionModelClusterNode_43();


export class QuestionModelClusterNode_44 {
  public readonly clusterId = 'CLUS_0044';
  public readonly defaultFormat = QuestionFormat.MULTIPLE_CHOICE_SINGLE;
  public computeAccuracy(submissions: Array<{ candidate: string; correct: string }>): number {
    if (submissions.length === 0) return 0;
    const correctCount = submissions.filter(s => s.candidate.trim().toLowerCase() === s.correct.trim().toLowerCase()).length;
    return correctCount / submissions.length;
  }
}
export const clusterNodeInstance_44 = new QuestionModelClusterNode_44();
