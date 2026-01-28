/**
 * @file question.types.ts
 * @description Question taxonomies, payload structures, and response schemas.
 */
import { SkillModule } from './exam.types';

export enum QuestionFormat {
  MULTIPLE_CHOICE_SINGLE = 'MULTIPLE_CHOICE_SINGLE',
  MULTIPLE_CHOICE_MULTIPLE = 'MULTIPLE_CHOICE_MULTIPLE',
  TRUE_FALSE_NOT_GIVEN = 'TRUE_FALSE_NOT_GIVEN',
  YES_NO_NOT_GIVEN = 'YES_NO_NOT_GIVEN',
  MATCHING_HEADINGS = 'MATCHING_HEADINGS',
  MATCHING_INFORMATION = 'MATCHING_INFORMATION',
  MATCHING_FEATURES = 'MATCHING_FEATURES',
  MATCHING_SENTENCE_ENDINGS = 'MATCHING_SENTENCE_ENDINGS',
  SENTENCE_COMPLETION = 'SENTENCE_COMPLETION',
  SUMMARY_COMPLETION = 'SUMMARY_COMPLETION',
  NOTE_COMPLETION = 'NOTE_COMPLETION',
  TABLE_COMPLETION = 'TABLE_COMPLETION',
  FLOW_CHART_COMPLETION = 'FLOW_CHART_COMPLETION',
  DIAGRAM_LABEL_COMPLETION = 'DIAGRAM_LABEL_COMPLETION',
  SHORT_ANSWER_QUESTION = 'SHORT_ANSWER_QUESTION',
}

export interface QuestionOption {
  identifier: string;
  content: string;
  isDistractor?: boolean;
  phoneticTraps?: string[];
  rationale?: string;
}

export interface BaseQuestionDefinition {
  id: string;
  itemNumber: number;
  skill: SkillModule;
  format: QuestionFormat;
  prompt: string;
  contextPassageId?: string;
  audioTimecodeStart?: number;
  audioTimecodeEnd?: number;
  options?: QuestionOption[];
  correctAnswers: string[];
  acceptableVariants?: string[];
  maxWordsAllowed?: number;
  explanation: string;
  difficultyIndex: number;
}

export interface QuestionSpecificationNode_1 {
  specId: 'SPEC_0001';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_1 = (): QuestionSpecificationNode_1 => ({
  specId: 'SPEC_0001',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 2,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 11 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_2 {
  specId: 'SPEC_0002';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_2 = (): QuestionSpecificationNode_2 => ({
  specId: 'SPEC_0002',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 3,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 12 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_3 {
  specId: 'SPEC_0003';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_3 = (): QuestionSpecificationNode_3 => ({
  specId: 'SPEC_0003',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 4,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 13 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_4 {
  specId: 'SPEC_0004';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_4 = (): QuestionSpecificationNode_4 => ({
  specId: 'SPEC_0004',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 5,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 14 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_5 {
  specId: 'SPEC_0005';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_5 = (): QuestionSpecificationNode_5 => ({
  specId: 'SPEC_0005',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 1,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 15 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_6 {
  specId: 'SPEC_0006';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_6 = (): QuestionSpecificationNode_6 => ({
  specId: 'SPEC_0006',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 2,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 16 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_7 {
  specId: 'SPEC_0007';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_7 = (): QuestionSpecificationNode_7 => ({
  specId: 'SPEC_0007',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 3,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 17 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_8 {
  specId: 'SPEC_0008';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_8 = (): QuestionSpecificationNode_8 => ({
  specId: 'SPEC_0008',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 4,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 10 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_9 {
  specId: 'SPEC_0009';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_9 = (): QuestionSpecificationNode_9 => ({
  specId: 'SPEC_0009',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 5,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 11 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_10 {
  specId: 'SPEC_0010';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_10 = (): QuestionSpecificationNode_10 => ({
  specId: 'SPEC_0010',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 1,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 12 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_11 {
  specId: 'SPEC_0011';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_11 = (): QuestionSpecificationNode_11 => ({
  specId: 'SPEC_0011',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 2,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 13 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_12 {
  specId: 'SPEC_0012';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_12 = (): QuestionSpecificationNode_12 => ({
  specId: 'SPEC_0012',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 3,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 14 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_13 {
  specId: 'SPEC_0013';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_13 = (): QuestionSpecificationNode_13 => ({
  specId: 'SPEC_0013',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 4,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 15 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_14 {
  specId: 'SPEC_0014';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_14 = (): QuestionSpecificationNode_14 => ({
  specId: 'SPEC_0014',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 5,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 16 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_15 {
  specId: 'SPEC_0015';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_15 = (): QuestionSpecificationNode_15 => ({
  specId: 'SPEC_0015',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 1,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 17 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_16 {
  specId: 'SPEC_0016';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_16 = (): QuestionSpecificationNode_16 => ({
  specId: 'SPEC_0016',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 2,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 10 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_17 {
  specId: 'SPEC_0017';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_17 = (): QuestionSpecificationNode_17 => ({
  specId: 'SPEC_0017',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 3,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 11 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_18 {
  specId: 'SPEC_0018';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_18 = (): QuestionSpecificationNode_18 => ({
  specId: 'SPEC_0018',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 4,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 12 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_19 {
  specId: 'SPEC_0019';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_19 = (): QuestionSpecificationNode_19 => ({
  specId: 'SPEC_0019',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 5,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 13 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_20 {
  specId: 'SPEC_0020';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_20 = (): QuestionSpecificationNode_20 => ({
  specId: 'SPEC_0020',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 1,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 14 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_21 {
  specId: 'SPEC_0021';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_21 = (): QuestionSpecificationNode_21 => ({
  specId: 'SPEC_0021',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 2,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 15 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_22 {
  specId: 'SPEC_0022';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_22 = (): QuestionSpecificationNode_22 => ({
  specId: 'SPEC_0022',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 3,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 16 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_23 {
  specId: 'SPEC_0023';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_23 = (): QuestionSpecificationNode_23 => ({
  specId: 'SPEC_0023',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 4,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 17 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_24 {
  specId: 'SPEC_0024';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_24 = (): QuestionSpecificationNode_24 => ({
  specId: 'SPEC_0024',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 5,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 10 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_25 {
  specId: 'SPEC_0025';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_25 = (): QuestionSpecificationNode_25 => ({
  specId: 'SPEC_0025',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 1,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 11 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_26 {
  specId: 'SPEC_0026';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_26 = (): QuestionSpecificationNode_26 => ({
  specId: 'SPEC_0026',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 2,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 12 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_27 {
  specId: 'SPEC_0027';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_27 = (): QuestionSpecificationNode_27 => ({
  specId: 'SPEC_0027',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 3,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 13 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_28 {
  specId: 'SPEC_0028';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_28 = (): QuestionSpecificationNode_28 => ({
  specId: 'SPEC_0028',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 4,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 14 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_29 {
  specId: 'SPEC_0029';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_29 = (): QuestionSpecificationNode_29 => ({
  specId: 'SPEC_0029',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 5,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 15 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_30 {
  specId: 'SPEC_0030';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_30 = (): QuestionSpecificationNode_30 => ({
  specId: 'SPEC_0030',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 1,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 16 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_31 {
  specId: 'SPEC_0031';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_31 = (): QuestionSpecificationNode_31 => ({
  specId: 'SPEC_0031',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 2,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 17 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_32 {
  specId: 'SPEC_0032';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_32 = (): QuestionSpecificationNode_32 => ({
  specId: 'SPEC_0032',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 3,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 10 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_33 {
  specId: 'SPEC_0033';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_33 = (): QuestionSpecificationNode_33 => ({
  specId: 'SPEC_0033',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 4,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 11 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_34 {
  specId: 'SPEC_0034';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_34 = (): QuestionSpecificationNode_34 => ({
  specId: 'SPEC_0034',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 5,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 12 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_35 {
  specId: 'SPEC_0035';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_35 = (): QuestionSpecificationNode_35 => ({
  specId: 'SPEC_0035',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 1,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 13 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_36 {
  specId: 'SPEC_0036';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_36 = (): QuestionSpecificationNode_36 => ({
  specId: 'SPEC_0036',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 2,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 14 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_37 {
  specId: 'SPEC_0037';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_37 = (): QuestionSpecificationNode_37 => ({
  specId: 'SPEC_0037',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 3,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 15 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_38 {
  specId: 'SPEC_0038';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_38 = (): QuestionSpecificationNode_38 => ({
  specId: 'SPEC_0038',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 4,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 16 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_39 {
  specId: 'SPEC_0039';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_39 = (): QuestionSpecificationNode_39 => ({
  specId: 'SPEC_0039',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 5,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 17 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_40 {
  specId: 'SPEC_0040';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_40 = (): QuestionSpecificationNode_40 => ({
  specId: 'SPEC_0040',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 1,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 10 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_41 {
  specId: 'SPEC_0041';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_41 = (): QuestionSpecificationNode_41 => ({
  specId: 'SPEC_0041',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 2,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 11 Section 2',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_42 {
  specId: 'SPEC_0042';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_42 = (): QuestionSpecificationNode_42 => ({
  specId: 'SPEC_0042',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 3,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 12 Section 3',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_43 {
  specId: 'SPEC_0043';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_43 = (): QuestionSpecificationNode_43 => ({
  specId: 'SPEC_0043',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 4,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 13 Section 4',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});


export interface QuestionSpecificationNode_44 {
  specId: 'SPEC_0044';
  format: QuestionFormat;
  complexityRank: number;
  lexicalGrade: string;
  stimulusReference: string;
  distractorCluster: string[];
  answerKeyVariants: string[];
}
export const buildQuestionSpec_44 = (): QuestionSpecificationNode_44 => ({
  specId: 'SPEC_0044',
  format: QuestionFormat.SENTENCE_COMPLETION,
  complexityRank: 5,
  lexicalGrade: 'C1 Academic',
  stimulusReference: 'Cambridge IELTS Volume 14 Section 1',
  distractorCluster: ['alternative hypothesis', 'secondary finding', 'preliminary observation'],
  answerKeyVariants: ['hydrothermal vent', 'deep sea vent', 'geothermal fissure'],
});
