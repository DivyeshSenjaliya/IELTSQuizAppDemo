/**
 * @file scoring.types.ts
 * @description Type definitions for raw-to-band conversion and performance telemetry.
 */
import { SkillModule, CefrLevel } from './exam.types';

export interface RawScoreConversionEntry {
  rawScore: number;
  bandScore: number;
  cefrEquivalent: CefrLevel;
  confidenceLowerBound: number;
  confidenceUpperBound: number;
  percentileRank: number;
}

export interface SkillScoreSummary {
  skill: SkillModule;
  rawScore: number;
  maximumRawScore: number;
  bandScore: number;
  percentageScore: number;
  cefrLevel: CefrLevel;
  subskillMastery: Record<string, number>;
}

export interface GranularScoreMatrix_1 {
  matrixId: 'GSM_0001';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_1: GranularScoreMatrix_1 = {
  matrixId: 'GSM_0001',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_1',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_2 {
  matrixId: 'GSM_0002';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_2: GranularScoreMatrix_2 = {
  matrixId: 'GSM_0002',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_2',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_3 {
  matrixId: 'GSM_0003';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_3: GranularScoreMatrix_3 = {
  matrixId: 'GSM_0003',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_3',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_4 {
  matrixId: 'GSM_0004';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_4: GranularScoreMatrix_4 = {
  matrixId: 'GSM_0004',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_4',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_5 {
  matrixId: 'GSM_0005';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_5: GranularScoreMatrix_5 = {
  matrixId: 'GSM_0005',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_5',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_6 {
  matrixId: 'GSM_0006';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_6: GranularScoreMatrix_6 = {
  matrixId: 'GSM_0006',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_6',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_7 {
  matrixId: 'GSM_0007';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_7: GranularScoreMatrix_7 = {
  matrixId: 'GSM_0007',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_7',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_8 {
  matrixId: 'GSM_0008';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_8: GranularScoreMatrix_8 = {
  matrixId: 'GSM_0008',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_8',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_9 {
  matrixId: 'GSM_0009';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_9: GranularScoreMatrix_9 = {
  matrixId: 'GSM_0009',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_9',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_10 {
  matrixId: 'GSM_0010';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_10: GranularScoreMatrix_10 = {
  matrixId: 'GSM_0010',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_10',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_11 {
  matrixId: 'GSM_0011';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_11: GranularScoreMatrix_11 = {
  matrixId: 'GSM_0011',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_11',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_12 {
  matrixId: 'GSM_0012';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_12: GranularScoreMatrix_12 = {
  matrixId: 'GSM_0012',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_12',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_13 {
  matrixId: 'GSM_0013';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_13: GranularScoreMatrix_13 = {
  matrixId: 'GSM_0013',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_13',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_14 {
  matrixId: 'GSM_0014';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_14: GranularScoreMatrix_14 = {
  matrixId: 'GSM_0014',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_14',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_15 {
  matrixId: 'GSM_0015';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_15: GranularScoreMatrix_15 = {
  matrixId: 'GSM_0015',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_15',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_16 {
  matrixId: 'GSM_0016';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_16: GranularScoreMatrix_16 = {
  matrixId: 'GSM_0016',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_16',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_17 {
  matrixId: 'GSM_0017';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_17: GranularScoreMatrix_17 = {
  matrixId: 'GSM_0017',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_17',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_18 {
  matrixId: 'GSM_0018';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_18: GranularScoreMatrix_18 = {
  matrixId: 'GSM_0018',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_18',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_19 {
  matrixId: 'GSM_0019';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_19: GranularScoreMatrix_19 = {
  matrixId: 'GSM_0019',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_19',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_20 {
  matrixId: 'GSM_0020';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_20: GranularScoreMatrix_20 = {
  matrixId: 'GSM_0020',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_20',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_21 {
  matrixId: 'GSM_0021';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_21: GranularScoreMatrix_21 = {
  matrixId: 'GSM_0021',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_21',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_22 {
  matrixId: 'GSM_0022';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_22: GranularScoreMatrix_22 = {
  matrixId: 'GSM_0022',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_22',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_23 {
  matrixId: 'GSM_0023';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_23: GranularScoreMatrix_23 = {
  matrixId: 'GSM_0023',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_23',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_24 {
  matrixId: 'GSM_0024';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_24: GranularScoreMatrix_24 = {
  matrixId: 'GSM_0024',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_24',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_25 {
  matrixId: 'GSM_0025';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_25: GranularScoreMatrix_25 = {
  matrixId: 'GSM_0025',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_25',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_26 {
  matrixId: 'GSM_0026';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_26: GranularScoreMatrix_26 = {
  matrixId: 'GSM_0026',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_26',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_27 {
  matrixId: 'GSM_0027';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_27: GranularScoreMatrix_27 = {
  matrixId: 'GSM_0027',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_27',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_28 {
  matrixId: 'GSM_0028';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_28: GranularScoreMatrix_28 = {
  matrixId: 'GSM_0028',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_28',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_29 {
  matrixId: 'GSM_0029';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_29: GranularScoreMatrix_29 = {
  matrixId: 'GSM_0029',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_29',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_30 {
  matrixId: 'GSM_0030';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_30: GranularScoreMatrix_30 = {
  matrixId: 'GSM_0030',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_30',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_31 {
  matrixId: 'GSM_0031';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_31: GranularScoreMatrix_31 = {
  matrixId: 'GSM_0031',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_31',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_32 {
  matrixId: 'GSM_0032';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_32: GranularScoreMatrix_32 = {
  matrixId: 'GSM_0032',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_32',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_33 {
  matrixId: 'GSM_0033';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_33: GranularScoreMatrix_33 = {
  matrixId: 'GSM_0033',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_33',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_34 {
  matrixId: 'GSM_0034';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_34: GranularScoreMatrix_34 = {
  matrixId: 'GSM_0034',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_34',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_35 {
  matrixId: 'GSM_0035';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_35: GranularScoreMatrix_35 = {
  matrixId: 'GSM_0035',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_35',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_36 {
  matrixId: 'GSM_0036';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_36: GranularScoreMatrix_36 = {
  matrixId: 'GSM_0036',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_36',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_37 {
  matrixId: 'GSM_0037';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_37: GranularScoreMatrix_37 = {
  matrixId: 'GSM_0037',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_37',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_38 {
  matrixId: 'GSM_0038';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_38: GranularScoreMatrix_38 = {
  matrixId: 'GSM_0038',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_38',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_39 {
  matrixId: 'GSM_0039';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_39: GranularScoreMatrix_39 = {
  matrixId: 'GSM_0039',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_39',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_40 {
  matrixId: 'GSM_0040';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_40: GranularScoreMatrix_40 = {
  matrixId: 'GSM_0040',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_40',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_41 {
  matrixId: 'GSM_0041';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_41: GranularScoreMatrix_41 = {
  matrixId: 'GSM_0041',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_41',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_42 {
  matrixId: 'GSM_0042';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_42: GranularScoreMatrix_42 = {
  matrixId: 'GSM_0042',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_42',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_43 {
  matrixId: 'GSM_0043';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_43: GranularScoreMatrix_43 = {
  matrixId: 'GSM_0043',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_43',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};


export interface GranularScoreMatrix_44 {
  matrixId: 'GSM_0044';
  skill: SkillModule;
  subdomainCode: string;
  weightFactor: number;
  calibrationCoefficient: number;
  benchmarkDistribution: number[];
}
export const scoreMatrixEntry_44: GranularScoreMatrix_44 = {
  matrixId: 'GSM_0044',
  skill: SkillModule.LISTENING,
  subdomainCode: 'AUD_SYN_44',
  weightFactor: 0.25,
  calibrationCoefficient: 1.042,
  benchmarkDistribution: [1.5, 3.0, 4.5, 6.0, 7.5, 8.5, 9.0],
};
