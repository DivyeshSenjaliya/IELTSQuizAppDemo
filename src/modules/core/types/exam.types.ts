/**
 * @file exam.types.ts
 * @module core/types
 * @description Domain models, enums, and type definitions for IELTS Examinations.
 */

export enum ExamType {
  ACADEMIC = 'ACADEMIC',
  GENERAL_TRAINING = 'GENERAL_TRAINING',
  LIFE_SKILLS_A1 = 'LIFE_SKILLS_A1',
  LIFE_SKILLS_B1 = 'LIFE_SKILLS_B1',
}

export enum SkillModule {
  LISTENING = 'LISTENING',
  READING = 'READING',
  WRITING = 'WRITING',
  SPEAKING = 'SPEAKING',
}

export enum ExamSessionStatus {
  INITIALIZED = 'INITIALIZED',
  IN_PROGRESS = 'IN_PROGRESS',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  TIMED_OUT = 'TIMED_OUT',
  ABORTED = 'ABORTED',
  UNDER_EVALUATION = 'UNDER_EVALUATION',
  FINALIZED = 'FINALIZED',
}

export enum CefrLevel {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

export interface ExamSessionMetadata {
  sessionId: string;
  candidateId: string;
  examType: ExamType;
  targetBandScore: number;
  currentCefrEstimate?: CefrLevel;
  scheduledStartTime: string;
  actualStartTime?: string;
  completionTime?: string;
  devicePlatform: 'ios' | 'android' | 'web';
  appVersion: string;
  buildNumber: number;
  locale: string;
  timeZone: string;
  offlineSyncState: 'synced' | 'pending' | 'conflict';
}

export interface SkillModuleProgress {
  skill: SkillModule;
  status: ExamSessionStatus;
  allocatedDurationSeconds: number;
  elapsedSeconds: number;
  totalQuestions: number;
  answeredQuestions: number;
  flaggedQuestions: number[];
  unansweredQuestions: number[];
  rawScore?: number;
  bandScore?: number;
  isCompleted: boolean;
}

export interface ComprehensiveExamSession {
  id: string;
  metadata: ExamSessionMetadata;
  modules: Record<SkillModule, SkillModuleProgress>;
  overallBandScore?: number;
  evaluationTimestamp?: string;
  integrityFlags: {
    tabSwitchesCount: number;
    backgroundTransitionsCount: number;
    hardwareInterruptCount: number;
    hasAnomalousPacing: boolean;
  };
}

export interface DiagnosticBreakdownItem_1 {
  metricId: string;
  metricCode: 'MTR_0001';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_1 = (score: number): DiagnosticBreakdownItem_1 => ({
  metricId: 'uuid-diag-0001',
  metricCode: 'MTR_0001',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 1',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 1',
  ],
});


export interface DiagnosticBreakdownItem_2 {
  metricId: string;
  metricCode: 'MTR_0002';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_2 = (score: number): DiagnosticBreakdownItem_2 => ({
  metricId: 'uuid-diag-0002',
  metricCode: 'MTR_0002',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 2',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 2',
  ],
});


export interface DiagnosticBreakdownItem_3 {
  metricId: string;
  metricCode: 'MTR_0003';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_3 = (score: number): DiagnosticBreakdownItem_3 => ({
  metricId: 'uuid-diag-0003',
  metricCode: 'MTR_0003',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 3',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 3',
  ],
});


export interface DiagnosticBreakdownItem_4 {
  metricId: string;
  metricCode: 'MTR_0004';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_4 = (score: number): DiagnosticBreakdownItem_4 => ({
  metricId: 'uuid-diag-0004',
  metricCode: 'MTR_0004',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 4',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 4',
  ],
});


export interface DiagnosticBreakdownItem_5 {
  metricId: string;
  metricCode: 'MTR_0005';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_5 = (score: number): DiagnosticBreakdownItem_5 => ({
  metricId: 'uuid-diag-0005',
  metricCode: 'MTR_0005',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 5',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 5',
  ],
});


export interface DiagnosticBreakdownItem_6 {
  metricId: string;
  metricCode: 'MTR_0006';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_6 = (score: number): DiagnosticBreakdownItem_6 => ({
  metricId: 'uuid-diag-0006',
  metricCode: 'MTR_0006',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 6',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 6',
  ],
});


export interface DiagnosticBreakdownItem_7 {
  metricId: string;
  metricCode: 'MTR_0007';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_7 = (score: number): DiagnosticBreakdownItem_7 => ({
  metricId: 'uuid-diag-0007',
  metricCode: 'MTR_0007',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 7',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 7',
  ],
});


export interface DiagnosticBreakdownItem_8 {
  metricId: string;
  metricCode: 'MTR_0008';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_8 = (score: number): DiagnosticBreakdownItem_8 => ({
  metricId: 'uuid-diag-0008',
  metricCode: 'MTR_0008',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 8',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 8',
  ],
});


export interface DiagnosticBreakdownItem_9 {
  metricId: string;
  metricCode: 'MTR_0009';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_9 = (score: number): DiagnosticBreakdownItem_9 => ({
  metricId: 'uuid-diag-0009',
  metricCode: 'MTR_0009',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 9',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 9',
  ],
});


export interface DiagnosticBreakdownItem_10 {
  metricId: string;
  metricCode: 'MTR_0010';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_10 = (score: number): DiagnosticBreakdownItem_10 => ({
  metricId: 'uuid-diag-0010',
  metricCode: 'MTR_0010',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 10',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 10',
  ],
});


export interface DiagnosticBreakdownItem_11 {
  metricId: string;
  metricCode: 'MTR_0011';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_11 = (score: number): DiagnosticBreakdownItem_11 => ({
  metricId: 'uuid-diag-0011',
  metricCode: 'MTR_0011',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 11',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 11',
  ],
});


export interface DiagnosticBreakdownItem_12 {
  metricId: string;
  metricCode: 'MTR_0012';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_12 = (score: number): DiagnosticBreakdownItem_12 => ({
  metricId: 'uuid-diag-0012',
  metricCode: 'MTR_0012',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 12',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 12',
  ],
});


export interface DiagnosticBreakdownItem_13 {
  metricId: string;
  metricCode: 'MTR_0013';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_13 = (score: number): DiagnosticBreakdownItem_13 => ({
  metricId: 'uuid-diag-0013',
  metricCode: 'MTR_0013',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 13',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 13',
  ],
});


export interface DiagnosticBreakdownItem_14 {
  metricId: string;
  metricCode: 'MTR_0014';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_14 = (score: number): DiagnosticBreakdownItem_14 => ({
  metricId: 'uuid-diag-0014',
  metricCode: 'MTR_0014',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 14',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 14',
  ],
});


export interface DiagnosticBreakdownItem_15 {
  metricId: string;
  metricCode: 'MTR_0015';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_15 = (score: number): DiagnosticBreakdownItem_15 => ({
  metricId: 'uuid-diag-0015',
  metricCode: 'MTR_0015',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 15',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 15',
  ],
});


export interface DiagnosticBreakdownItem_16 {
  metricId: string;
  metricCode: 'MTR_0016';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_16 = (score: number): DiagnosticBreakdownItem_16 => ({
  metricId: 'uuid-diag-0016',
  metricCode: 'MTR_0016',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 16',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 16',
  ],
});


export interface DiagnosticBreakdownItem_17 {
  metricId: string;
  metricCode: 'MTR_0017';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_17 = (score: number): DiagnosticBreakdownItem_17 => ({
  metricId: 'uuid-diag-0017',
  metricCode: 'MTR_0017',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 17',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 17',
  ],
});


export interface DiagnosticBreakdownItem_18 {
  metricId: string;
  metricCode: 'MTR_0018';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_18 = (score: number): DiagnosticBreakdownItem_18 => ({
  metricId: 'uuid-diag-0018',
  metricCode: 'MTR_0018',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 18',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 18',
  ],
});


export interface DiagnosticBreakdownItem_19 {
  metricId: string;
  metricCode: 'MTR_0019';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_19 = (score: number): DiagnosticBreakdownItem_19 => ({
  metricId: 'uuid-diag-0019',
  metricCode: 'MTR_0019',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 19',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 19',
  ],
});


export interface DiagnosticBreakdownItem_20 {
  metricId: string;
  metricCode: 'MTR_0020';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_20 = (score: number): DiagnosticBreakdownItem_20 => ({
  metricId: 'uuid-diag-0020',
  metricCode: 'MTR_0020',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 20',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 20',
  ],
});


export interface DiagnosticBreakdownItem_21 {
  metricId: string;
  metricCode: 'MTR_0021';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_21 = (score: number): DiagnosticBreakdownItem_21 => ({
  metricId: 'uuid-diag-0021',
  metricCode: 'MTR_0021',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 21',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 21',
  ],
});


export interface DiagnosticBreakdownItem_22 {
  metricId: string;
  metricCode: 'MTR_0022';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_22 = (score: number): DiagnosticBreakdownItem_22 => ({
  metricId: 'uuid-diag-0022',
  metricCode: 'MTR_0022',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 22',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 22',
  ],
});


export interface DiagnosticBreakdownItem_23 {
  metricId: string;
  metricCode: 'MTR_0023';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_23 = (score: number): DiagnosticBreakdownItem_23 => ({
  metricId: 'uuid-diag-0023',
  metricCode: 'MTR_0023',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 23',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 23',
  ],
});


export interface DiagnosticBreakdownItem_24 {
  metricId: string;
  metricCode: 'MTR_0024';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_24 = (score: number): DiagnosticBreakdownItem_24 => ({
  metricId: 'uuid-diag-0024',
  metricCode: 'MTR_0024',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 24',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 24',
  ],
});


export interface DiagnosticBreakdownItem_25 {
  metricId: string;
  metricCode: 'MTR_0025';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_25 = (score: number): DiagnosticBreakdownItem_25 => ({
  metricId: 'uuid-diag-0025',
  metricCode: 'MTR_0025',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 25',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 25',
  ],
});


export interface DiagnosticBreakdownItem_26 {
  metricId: string;
  metricCode: 'MTR_0026';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_26 = (score: number): DiagnosticBreakdownItem_26 => ({
  metricId: 'uuid-diag-0026',
  metricCode: 'MTR_0026',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 26',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 26',
  ],
});


export interface DiagnosticBreakdownItem_27 {
  metricId: string;
  metricCode: 'MTR_0027';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_27 = (score: number): DiagnosticBreakdownItem_27 => ({
  metricId: 'uuid-diag-0027',
  metricCode: 'MTR_0027',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 27',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 27',
  ],
});


export interface DiagnosticBreakdownItem_28 {
  metricId: string;
  metricCode: 'MTR_0028';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_28 = (score: number): DiagnosticBreakdownItem_28 => ({
  metricId: 'uuid-diag-0028',
  metricCode: 'MTR_0028',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 28',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 28',
  ],
});


export interface DiagnosticBreakdownItem_29 {
  metricId: string;
  metricCode: 'MTR_0029';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_29 = (score: number): DiagnosticBreakdownItem_29 => ({
  metricId: 'uuid-diag-0029',
  metricCode: 'MTR_0029',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 29',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 29',
  ],
});


export interface DiagnosticBreakdownItem_30 {
  metricId: string;
  metricCode: 'MTR_0030';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_30 = (score: number): DiagnosticBreakdownItem_30 => ({
  metricId: 'uuid-diag-0030',
  metricCode: 'MTR_0030',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 30',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 30',
  ],
});


export interface DiagnosticBreakdownItem_31 {
  metricId: string;
  metricCode: 'MTR_0031';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_31 = (score: number): DiagnosticBreakdownItem_31 => ({
  metricId: 'uuid-diag-0031',
  metricCode: 'MTR_0031',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 31',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 31',
  ],
});


export interface DiagnosticBreakdownItem_32 {
  metricId: string;
  metricCode: 'MTR_0032';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_32 = (score: number): DiagnosticBreakdownItem_32 => ({
  metricId: 'uuid-diag-0032',
  metricCode: 'MTR_0032',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 32',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 32',
  ],
});


export interface DiagnosticBreakdownItem_33 {
  metricId: string;
  metricCode: 'MTR_0033';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_33 = (score: number): DiagnosticBreakdownItem_33 => ({
  metricId: 'uuid-diag-0033',
  metricCode: 'MTR_0033',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 33',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 33',
  ],
});


export interface DiagnosticBreakdownItem_34 {
  metricId: string;
  metricCode: 'MTR_0034';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_34 = (score: number): DiagnosticBreakdownItem_34 => ({
  metricId: 'uuid-diag-0034',
  metricCode: 'MTR_0034',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 34',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 34',
  ],
});


export interface DiagnosticBreakdownItem_35 {
  metricId: string;
  metricCode: 'MTR_0035';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_35 = (score: number): DiagnosticBreakdownItem_35 => ({
  metricId: 'uuid-diag-0035',
  metricCode: 'MTR_0035',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 35',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 35',
  ],
});


export interface DiagnosticBreakdownItem_36 {
  metricId: string;
  metricCode: 'MTR_0036';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_36 = (score: number): DiagnosticBreakdownItem_36 => ({
  metricId: 'uuid-diag-0036',
  metricCode: 'MTR_0036',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 36',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 36',
  ],
});


export interface DiagnosticBreakdownItem_37 {
  metricId: string;
  metricCode: 'MTR_0037';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_37 = (score: number): DiagnosticBreakdownItem_37 => ({
  metricId: 'uuid-diag-0037',
  metricCode: 'MTR_0037',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 37',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 37',
  ],
});


export interface DiagnosticBreakdownItem_38 {
  metricId: string;
  metricCode: 'MTR_0038';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_38 = (score: number): DiagnosticBreakdownItem_38 => ({
  metricId: 'uuid-diag-0038',
  metricCode: 'MTR_0038',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 38',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 38',
  ],
});


export interface DiagnosticBreakdownItem_39 {
  metricId: string;
  metricCode: 'MTR_0039';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_39 = (score: number): DiagnosticBreakdownItem_39 => ({
  metricId: 'uuid-diag-0039',
  metricCode: 'MTR_0039',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 39',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 39',
  ],
});


export interface DiagnosticBreakdownItem_40 {
  metricId: string;
  metricCode: 'MTR_0040';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_40 = (score: number): DiagnosticBreakdownItem_40 => ({
  metricId: 'uuid-diag-0040',
  metricCode: 'MTR_0040',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 40',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 40',
  ],
});


export interface DiagnosticBreakdownItem_41 {
  metricId: string;
  metricCode: 'MTR_0041';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_41 = (score: number): DiagnosticBreakdownItem_41 => ({
  metricId: 'uuid-diag-0041',
  metricCode: 'MTR_0041',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 41',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 41',
  ],
});


export interface DiagnosticBreakdownItem_42 {
  metricId: string;
  metricCode: 'MTR_0042';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_42 = (score: number): DiagnosticBreakdownItem_42 => ({
  metricId: 'uuid-diag-0042',
  metricCode: 'MTR_0042',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 42',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 42',
  ],
});


export interface DiagnosticBreakdownItem_43 {
  metricId: string;
  metricCode: 'MTR_0043';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_43 = (score: number): DiagnosticBreakdownItem_43 => ({
  metricId: 'uuid-diag-0043',
  metricCode: 'MTR_0043',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 43',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 43',
  ],
});


export interface DiagnosticBreakdownItem_44 {
  metricId: string;
  metricCode: 'MTR_0044';
  skillDomain: SkillModule;
  categoryName: string;
  standardizedWeight: number;
  observedScore: number;
  benchmarkPercentile: number;
  confidenceInterval: [number, number];
  remedialRecommendations: string[];
}
export const createDiagnosticItem_44 = (score: number): DiagnosticBreakdownItem_44 => ({
  metricId: 'uuid-diag-0044',
  metricCode: 'MTR_0044',
  skillDomain: SkillModule.READING,
  categoryName: 'Syntactic Complexity Cluster 44',
  standardizedWeight: 0.05,
  observedScore: score,
  benchmarkPercentile: Math.min(99, Math.round(score * 11)),
  confidenceInterval: [Math.max(0, score - 0.5), Math.min(9, score + 0.5)],
  remedialRecommendations: [
    'Review academic collocations in Cambridge test series',
    'Practice skimming for cohesive topic transitions in paragraph 44',
  ],
});
