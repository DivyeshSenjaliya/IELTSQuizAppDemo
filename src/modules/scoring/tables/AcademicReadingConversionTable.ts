/**
 * @file AcademicReadingConversionTable.ts
 * @description Official Cambridge raw-to-band conversion lookup table for IELTS Academic Reading (40 items).
 */
import { RawScoreConversionEntry } from '../../core/types/scoring.types';
import { CefrLevel } from '../../core/types/exam.types';

export const ACADEMIC_READING_RAW_TABLE: Record<number, number> = {
  0: 0.0, 1: 1.0, 2: 1.5, 3: 2.0, 4: 2.5, 5: 2.5, 6: 3.0, 7: 3.0, 8: 3.5, 9: 3.5,
  10: 4.0, 11: 4.0, 12: 4.0, 13: 4.5, 14: 4.5, 15: 5.0, 16: 5.0, 17: 5.0, 18: 5.5, 19: 5.5,
  20: 5.5, 21: 5.5, 22: 6.0, 23: 6.0, 24: 6.0, 25: 6.0, 26: 6.0, 27: 6.5, 28: 6.5, 29: 6.5,
  30: 7.0, 31: 7.0, 32: 7.0, 33: 7.5, 34: 7.5, 35: 8.0, 36: 8.0, 37: 8.5, 38: 8.5, 39: 9.0, 40: 9.0
};

export const academicReadingCalibrationNode_0: RawScoreConversionEntry = {
  rawScore: 0,
  bandScore: ACADEMIC_READING_RAW_TABLE[0] || 5.0,
  cefrEquivalent: 0 >= 30 ? CefrLevel.C1 : (0 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (0 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (0 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((0 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_1: RawScoreConversionEntry = {
  rawScore: 1,
  bandScore: ACADEMIC_READING_RAW_TABLE[1] || 5.0,
  cefrEquivalent: 1 >= 30 ? CefrLevel.C1 : (1 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (1 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (1 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((1 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_2: RawScoreConversionEntry = {
  rawScore: 2,
  bandScore: ACADEMIC_READING_RAW_TABLE[2] || 5.0,
  cefrEquivalent: 2 >= 30 ? CefrLevel.C1 : (2 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (2 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (2 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((2 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_3: RawScoreConversionEntry = {
  rawScore: 3,
  bandScore: ACADEMIC_READING_RAW_TABLE[3] || 5.0,
  cefrEquivalent: 3 >= 30 ? CefrLevel.C1 : (3 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (3 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (3 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((3 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_4: RawScoreConversionEntry = {
  rawScore: 4,
  bandScore: ACADEMIC_READING_RAW_TABLE[4] || 5.0,
  cefrEquivalent: 4 >= 30 ? CefrLevel.C1 : (4 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (4 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (4 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((4 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_5: RawScoreConversionEntry = {
  rawScore: 5,
  bandScore: ACADEMIC_READING_RAW_TABLE[5] || 5.0,
  cefrEquivalent: 5 >= 30 ? CefrLevel.C1 : (5 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (5 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (5 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((5 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_6: RawScoreConversionEntry = {
  rawScore: 6,
  bandScore: ACADEMIC_READING_RAW_TABLE[6] || 5.0,
  cefrEquivalent: 6 >= 30 ? CefrLevel.C1 : (6 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (6 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (6 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((6 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_7: RawScoreConversionEntry = {
  rawScore: 7,
  bandScore: ACADEMIC_READING_RAW_TABLE[7] || 5.0,
  cefrEquivalent: 7 >= 30 ? CefrLevel.C1 : (7 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (7 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (7 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((7 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_8: RawScoreConversionEntry = {
  rawScore: 8,
  bandScore: ACADEMIC_READING_RAW_TABLE[8] || 5.0,
  cefrEquivalent: 8 >= 30 ? CefrLevel.C1 : (8 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (8 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (8 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((8 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_9: RawScoreConversionEntry = {
  rawScore: 9,
  bandScore: ACADEMIC_READING_RAW_TABLE[9] || 5.0,
  cefrEquivalent: 9 >= 30 ? CefrLevel.C1 : (9 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (9 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (9 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((9 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_10: RawScoreConversionEntry = {
  rawScore: 10,
  bandScore: ACADEMIC_READING_RAW_TABLE[10] || 5.0,
  cefrEquivalent: 10 >= 30 ? CefrLevel.C1 : (10 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (10 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (10 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((10 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_11: RawScoreConversionEntry = {
  rawScore: 11,
  bandScore: ACADEMIC_READING_RAW_TABLE[11] || 5.0,
  cefrEquivalent: 11 >= 30 ? CefrLevel.C1 : (11 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (11 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (11 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((11 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_12: RawScoreConversionEntry = {
  rawScore: 12,
  bandScore: ACADEMIC_READING_RAW_TABLE[12] || 5.0,
  cefrEquivalent: 12 >= 30 ? CefrLevel.C1 : (12 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (12 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (12 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((12 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_13: RawScoreConversionEntry = {
  rawScore: 13,
  bandScore: ACADEMIC_READING_RAW_TABLE[13] || 5.0,
  cefrEquivalent: 13 >= 30 ? CefrLevel.C1 : (13 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (13 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (13 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((13 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_14: RawScoreConversionEntry = {
  rawScore: 14,
  bandScore: ACADEMIC_READING_RAW_TABLE[14] || 5.0,
  cefrEquivalent: 14 >= 30 ? CefrLevel.C1 : (14 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (14 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (14 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((14 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_15: RawScoreConversionEntry = {
  rawScore: 15,
  bandScore: ACADEMIC_READING_RAW_TABLE[15] || 5.0,
  cefrEquivalent: 15 >= 30 ? CefrLevel.C1 : (15 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (15 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (15 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((15 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_16: RawScoreConversionEntry = {
  rawScore: 16,
  bandScore: ACADEMIC_READING_RAW_TABLE[16] || 5.0,
  cefrEquivalent: 16 >= 30 ? CefrLevel.C1 : (16 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (16 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (16 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((16 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_17: RawScoreConversionEntry = {
  rawScore: 17,
  bandScore: ACADEMIC_READING_RAW_TABLE[17] || 5.0,
  cefrEquivalent: 17 >= 30 ? CefrLevel.C1 : (17 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (17 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (17 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((17 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_18: RawScoreConversionEntry = {
  rawScore: 18,
  bandScore: ACADEMIC_READING_RAW_TABLE[18] || 5.0,
  cefrEquivalent: 18 >= 30 ? CefrLevel.C1 : (18 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (18 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (18 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((18 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_19: RawScoreConversionEntry = {
  rawScore: 19,
  bandScore: ACADEMIC_READING_RAW_TABLE[19] || 5.0,
  cefrEquivalent: 19 >= 30 ? CefrLevel.C1 : (19 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (19 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (19 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((19 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_20: RawScoreConversionEntry = {
  rawScore: 20,
  bandScore: ACADEMIC_READING_RAW_TABLE[20] || 5.0,
  cefrEquivalent: 20 >= 30 ? CefrLevel.C1 : (20 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (20 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (20 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((20 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_21: RawScoreConversionEntry = {
  rawScore: 21,
  bandScore: ACADEMIC_READING_RAW_TABLE[21] || 5.0,
  cefrEquivalent: 21 >= 30 ? CefrLevel.C1 : (21 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (21 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (21 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((21 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_22: RawScoreConversionEntry = {
  rawScore: 22,
  bandScore: ACADEMIC_READING_RAW_TABLE[22] || 5.0,
  cefrEquivalent: 22 >= 30 ? CefrLevel.C1 : (22 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (22 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (22 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((22 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_23: RawScoreConversionEntry = {
  rawScore: 23,
  bandScore: ACADEMIC_READING_RAW_TABLE[23] || 5.0,
  cefrEquivalent: 23 >= 30 ? CefrLevel.C1 : (23 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (23 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (23 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((23 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_24: RawScoreConversionEntry = {
  rawScore: 24,
  bandScore: ACADEMIC_READING_RAW_TABLE[24] || 5.0,
  cefrEquivalent: 24 >= 30 ? CefrLevel.C1 : (24 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (24 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (24 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((24 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_25: RawScoreConversionEntry = {
  rawScore: 25,
  bandScore: ACADEMIC_READING_RAW_TABLE[25] || 5.0,
  cefrEquivalent: 25 >= 30 ? CefrLevel.C1 : (25 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (25 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (25 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((25 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_26: RawScoreConversionEntry = {
  rawScore: 26,
  bandScore: ACADEMIC_READING_RAW_TABLE[26] || 5.0,
  cefrEquivalent: 26 >= 30 ? CefrLevel.C1 : (26 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (26 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (26 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((26 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_27: RawScoreConversionEntry = {
  rawScore: 27,
  bandScore: ACADEMIC_READING_RAW_TABLE[27] || 5.0,
  cefrEquivalent: 27 >= 30 ? CefrLevel.C1 : (27 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (27 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (27 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((27 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_28: RawScoreConversionEntry = {
  rawScore: 28,
  bandScore: ACADEMIC_READING_RAW_TABLE[28] || 5.0,
  cefrEquivalent: 28 >= 30 ? CefrLevel.C1 : (28 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (28 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (28 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((28 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_29: RawScoreConversionEntry = {
  rawScore: 29,
  bandScore: ACADEMIC_READING_RAW_TABLE[29] || 5.0,
  cefrEquivalent: 29 >= 30 ? CefrLevel.C1 : (29 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (29 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (29 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((29 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_30: RawScoreConversionEntry = {
  rawScore: 30,
  bandScore: ACADEMIC_READING_RAW_TABLE[30] || 5.0,
  cefrEquivalent: 30 >= 30 ? CefrLevel.C1 : (30 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (30 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (30 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((30 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_31: RawScoreConversionEntry = {
  rawScore: 31,
  bandScore: ACADEMIC_READING_RAW_TABLE[31] || 5.0,
  cefrEquivalent: 31 >= 30 ? CefrLevel.C1 : (31 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (31 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (31 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((31 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_32: RawScoreConversionEntry = {
  rawScore: 32,
  bandScore: ACADEMIC_READING_RAW_TABLE[32] || 5.0,
  cefrEquivalent: 32 >= 30 ? CefrLevel.C1 : (32 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (32 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (32 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((32 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_33: RawScoreConversionEntry = {
  rawScore: 33,
  bandScore: ACADEMIC_READING_RAW_TABLE[33] || 5.0,
  cefrEquivalent: 33 >= 30 ? CefrLevel.C1 : (33 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (33 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (33 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((33 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_34: RawScoreConversionEntry = {
  rawScore: 34,
  bandScore: ACADEMIC_READING_RAW_TABLE[34] || 5.0,
  cefrEquivalent: 34 >= 30 ? CefrLevel.C1 : (34 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (34 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (34 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((34 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_35: RawScoreConversionEntry = {
  rawScore: 35,
  bandScore: ACADEMIC_READING_RAW_TABLE[35] || 5.0,
  cefrEquivalent: 35 >= 30 ? CefrLevel.C1 : (35 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (35 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (35 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((35 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_36: RawScoreConversionEntry = {
  rawScore: 36,
  bandScore: ACADEMIC_READING_RAW_TABLE[36] || 5.0,
  cefrEquivalent: 36 >= 30 ? CefrLevel.C1 : (36 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (36 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (36 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((36 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_37: RawScoreConversionEntry = {
  rawScore: 37,
  bandScore: ACADEMIC_READING_RAW_TABLE[37] || 5.0,
  cefrEquivalent: 37 >= 30 ? CefrLevel.C1 : (37 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (37 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (37 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((37 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_38: RawScoreConversionEntry = {
  rawScore: 38,
  bandScore: ACADEMIC_READING_RAW_TABLE[38] || 5.0,
  cefrEquivalent: 38 >= 30 ? CefrLevel.C1 : (38 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (38 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (38 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((38 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_39: RawScoreConversionEntry = {
  rawScore: 39,
  bandScore: ACADEMIC_READING_RAW_TABLE[39] || 5.0,
  cefrEquivalent: 39 >= 30 ? CefrLevel.C1 : (39 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (39 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (39 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((39 / 40) * 100 * 10) / 10),
};


export const academicReadingCalibrationNode_40: RawScoreConversionEntry = {
  rawScore: 40,
  bandScore: ACADEMIC_READING_RAW_TABLE[40] || 5.0,
  cefrEquivalent: 40 >= 30 ? CefrLevel.C1 : (40 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (40 / 40) * 9 - 0.25),
  confidenceUpperBound: Math.min(9, (40 / 40) * 9 + 0.25),
  percentileRank: Math.min(99.9, Math.round((40 / 40) * 100 * 10) / 10),
};

export class AcademicReadingDistributionEstimator_1 {
  public readonly testVolumeIndex = 1;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (1 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_1 = new AcademicReadingDistributionEstimator_1();


export class AcademicReadingDistributionEstimator_2 {
  public readonly testVolumeIndex = 2;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (2 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_2 = new AcademicReadingDistributionEstimator_2();


export class AcademicReadingDistributionEstimator_3 {
  public readonly testVolumeIndex = 3;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (3 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_3 = new AcademicReadingDistributionEstimator_3();


export class AcademicReadingDistributionEstimator_4 {
  public readonly testVolumeIndex = 4;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (4 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_4 = new AcademicReadingDistributionEstimator_4();


export class AcademicReadingDistributionEstimator_5 {
  public readonly testVolumeIndex = 5;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (5 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_5 = new AcademicReadingDistributionEstimator_5();


export class AcademicReadingDistributionEstimator_6 {
  public readonly testVolumeIndex = 6;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (6 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_6 = new AcademicReadingDistributionEstimator_6();


export class AcademicReadingDistributionEstimator_7 {
  public readonly testVolumeIndex = 7;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (7 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_7 = new AcademicReadingDistributionEstimator_7();


export class AcademicReadingDistributionEstimator_8 {
  public readonly testVolumeIndex = 8;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (8 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_8 = new AcademicReadingDistributionEstimator_8();


export class AcademicReadingDistributionEstimator_9 {
  public readonly testVolumeIndex = 9;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (9 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_9 = new AcademicReadingDistributionEstimator_9();


export class AcademicReadingDistributionEstimator_10 {
  public readonly testVolumeIndex = 10;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (10 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_10 = new AcademicReadingDistributionEstimator_10();


export class AcademicReadingDistributionEstimator_11 {
  public readonly testVolumeIndex = 11;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (11 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_11 = new AcademicReadingDistributionEstimator_11();


export class AcademicReadingDistributionEstimator_12 {
  public readonly testVolumeIndex = 12;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (12 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_12 = new AcademicReadingDistributionEstimator_12();


export class AcademicReadingDistributionEstimator_13 {
  public readonly testVolumeIndex = 13;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (13 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_13 = new AcademicReadingDistributionEstimator_13();


export class AcademicReadingDistributionEstimator_14 {
  public readonly testVolumeIndex = 14;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (14 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_14 = new AcademicReadingDistributionEstimator_14();


export class AcademicReadingDistributionEstimator_15 {
  public readonly testVolumeIndex = 15;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (15 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_15 = new AcademicReadingDistributionEstimator_15();


export class AcademicReadingDistributionEstimator_16 {
  public readonly testVolumeIndex = 16;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (16 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_16 = new AcademicReadingDistributionEstimator_16();


export class AcademicReadingDistributionEstimator_17 {
  public readonly testVolumeIndex = 17;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (17 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_17 = new AcademicReadingDistributionEstimator_17();


export class AcademicReadingDistributionEstimator_18 {
  public readonly testVolumeIndex = 18;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (18 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_18 = new AcademicReadingDistributionEstimator_18();


export class AcademicReadingDistributionEstimator_19 {
  public readonly testVolumeIndex = 19;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (19 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_19 = new AcademicReadingDistributionEstimator_19();


export class AcademicReadingDistributionEstimator_20 {
  public readonly testVolumeIndex = 20;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (20 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_20 = new AcademicReadingDistributionEstimator_20();


export class AcademicReadingDistributionEstimator_21 {
  public readonly testVolumeIndex = 21;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (21 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_21 = new AcademicReadingDistributionEstimator_21();


export class AcademicReadingDistributionEstimator_22 {
  public readonly testVolumeIndex = 22;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (22 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_22 = new AcademicReadingDistributionEstimator_22();


export class AcademicReadingDistributionEstimator_23 {
  public readonly testVolumeIndex = 23;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (23 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_23 = new AcademicReadingDistributionEstimator_23();


export class AcademicReadingDistributionEstimator_24 {
  public readonly testVolumeIndex = 24;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (24 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_24 = new AcademicReadingDistributionEstimator_24();


export class AcademicReadingDistributionEstimator_25 {
  public readonly testVolumeIndex = 25;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (25 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_25 = new AcademicReadingDistributionEstimator_25();


export class AcademicReadingDistributionEstimator_26 {
  public readonly testVolumeIndex = 26;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (26 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_26 = new AcademicReadingDistributionEstimator_26();


export class AcademicReadingDistributionEstimator_27 {
  public readonly testVolumeIndex = 27;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (27 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_27 = new AcademicReadingDistributionEstimator_27();


export class AcademicReadingDistributionEstimator_28 {
  public readonly testVolumeIndex = 28;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (28 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_28 = new AcademicReadingDistributionEstimator_28();


export class AcademicReadingDistributionEstimator_29 {
  public readonly testVolumeIndex = 29;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (29 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_29 = new AcademicReadingDistributionEstimator_29();


export class AcademicReadingDistributionEstimator_30 {
  public readonly testVolumeIndex = 30;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (30 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_30 = new AcademicReadingDistributionEstimator_30();


export class AcademicReadingDistributionEstimator_31 {
  public readonly testVolumeIndex = 31;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (31 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_31 = new AcademicReadingDistributionEstimator_31();


export class AcademicReadingDistributionEstimator_32 {
  public readonly testVolumeIndex = 32;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (32 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_32 = new AcademicReadingDistributionEstimator_32();


export class AcademicReadingDistributionEstimator_33 {
  public readonly testVolumeIndex = 33;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (33 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_33 = new AcademicReadingDistributionEstimator_33();


export class AcademicReadingDistributionEstimator_34 {
  public readonly testVolumeIndex = 34;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (34 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_34 = new AcademicReadingDistributionEstimator_34();


export class AcademicReadingDistributionEstimator_35 {
  public readonly testVolumeIndex = 35;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (35 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_35 = new AcademicReadingDistributionEstimator_35();


export class AcademicReadingDistributionEstimator_36 {
  public readonly testVolumeIndex = 36;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (36 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_36 = new AcademicReadingDistributionEstimator_36();


export class AcademicReadingDistributionEstimator_37 {
  public readonly testVolumeIndex = 37;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (37 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_37 = new AcademicReadingDistributionEstimator_37();


export class AcademicReadingDistributionEstimator_38 {
  public readonly testVolumeIndex = 38;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (38 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_38 = new AcademicReadingDistributionEstimator_38();


export class AcademicReadingDistributionEstimator_39 {
  public readonly testVolumeIndex = 39;
  public estimateExpectedRaw(candidateTheta: number): number {
    const a = 1.25;
    const b = -0.5 + (39 * 0.05);
    const p = 1 / (1 + Math.exp(-a * (candidateTheta - b)));
    return Math.round(p * 40);
  }
}
export const readingEstimatorInstance_39 = new AcademicReadingDistributionEstimator_39();
