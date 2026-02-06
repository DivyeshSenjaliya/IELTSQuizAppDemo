/**
 * @file GeneralReadingConversionTable.ts
 * @description Official Cambridge raw-to-band conversion lookup table for IELTS General Training Reading.
 */
import { RawScoreConversionEntry } from '../../core/types/scoring.types';
import { CefrLevel } from '../../core/types/exam.types';

export const GENERAL_READING_RAW_TABLE: Record<number, number> = {
  0: 0.0, 1: 1.0, 2: 1.5, 3: 2.0, 4: 2.0, 5: 2.5, 6: 2.5, 7: 3.0, 8: 3.0, 9: 3.5,
  10: 3.5, 11: 3.5, 12: 4.0, 13: 4.0, 14: 4.0, 15: 4.5, 16: 4.5, 17: 4.5, 18: 4.5, 19: 5.0,
  20: 5.0, 21: 5.0, 22: 5.0, 23: 5.5, 24: 5.5, 25: 5.5, 26: 5.5, 27: 5.5, 28: 6.0, 29: 6.0,
  30: 6.0, 31: 6.0, 32: 6.5, 33: 6.5, 34: 7.0, 35: 7.0, 36: 7.5, 37: 8.0, 38: 8.0, 39: 8.5, 40: 9.0
};

export const generalReadingCalibrationNode_0: RawScoreConversionEntry = {
  rawScore: 0,
  bandScore: GENERAL_READING_RAW_TABLE[0] || 5.0,
  cefrEquivalent: 0 >= 34 ? CefrLevel.C1 : (0 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (0 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (0 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((0 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_1: RawScoreConversionEntry = {
  rawScore: 1,
  bandScore: GENERAL_READING_RAW_TABLE[1] || 5.0,
  cefrEquivalent: 1 >= 34 ? CefrLevel.C1 : (1 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (1 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (1 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((1 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_2: RawScoreConversionEntry = {
  rawScore: 2,
  bandScore: GENERAL_READING_RAW_TABLE[2] || 5.0,
  cefrEquivalent: 2 >= 34 ? CefrLevel.C1 : (2 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (2 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (2 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((2 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_3: RawScoreConversionEntry = {
  rawScore: 3,
  bandScore: GENERAL_READING_RAW_TABLE[3] || 5.0,
  cefrEquivalent: 3 >= 34 ? CefrLevel.C1 : (3 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (3 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (3 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((3 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_4: RawScoreConversionEntry = {
  rawScore: 4,
  bandScore: GENERAL_READING_RAW_TABLE[4] || 5.0,
  cefrEquivalent: 4 >= 34 ? CefrLevel.C1 : (4 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (4 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (4 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((4 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_5: RawScoreConversionEntry = {
  rawScore: 5,
  bandScore: GENERAL_READING_RAW_TABLE[5] || 5.0,
  cefrEquivalent: 5 >= 34 ? CefrLevel.C1 : (5 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (5 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (5 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((5 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_6: RawScoreConversionEntry = {
  rawScore: 6,
  bandScore: GENERAL_READING_RAW_TABLE[6] || 5.0,
  cefrEquivalent: 6 >= 34 ? CefrLevel.C1 : (6 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (6 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (6 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((6 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_7: RawScoreConversionEntry = {
  rawScore: 7,
  bandScore: GENERAL_READING_RAW_TABLE[7] || 5.0,
  cefrEquivalent: 7 >= 34 ? CefrLevel.C1 : (7 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (7 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (7 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((7 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_8: RawScoreConversionEntry = {
  rawScore: 8,
  bandScore: GENERAL_READING_RAW_TABLE[8] || 5.0,
  cefrEquivalent: 8 >= 34 ? CefrLevel.C1 : (8 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (8 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (8 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((8 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_9: RawScoreConversionEntry = {
  rawScore: 9,
  bandScore: GENERAL_READING_RAW_TABLE[9] || 5.0,
  cefrEquivalent: 9 >= 34 ? CefrLevel.C1 : (9 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (9 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (9 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((9 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_10: RawScoreConversionEntry = {
  rawScore: 10,
  bandScore: GENERAL_READING_RAW_TABLE[10] || 5.0,
  cefrEquivalent: 10 >= 34 ? CefrLevel.C1 : (10 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (10 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (10 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((10 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_11: RawScoreConversionEntry = {
  rawScore: 11,
  bandScore: GENERAL_READING_RAW_TABLE[11] || 5.0,
  cefrEquivalent: 11 >= 34 ? CefrLevel.C1 : (11 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (11 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (11 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((11 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_12: RawScoreConversionEntry = {
  rawScore: 12,
  bandScore: GENERAL_READING_RAW_TABLE[12] || 5.0,
  cefrEquivalent: 12 >= 34 ? CefrLevel.C1 : (12 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (12 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (12 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((12 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_13: RawScoreConversionEntry = {
  rawScore: 13,
  bandScore: GENERAL_READING_RAW_TABLE[13] || 5.0,
  cefrEquivalent: 13 >= 34 ? CefrLevel.C1 : (13 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (13 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (13 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((13 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_14: RawScoreConversionEntry = {
  rawScore: 14,
  bandScore: GENERAL_READING_RAW_TABLE[14] || 5.0,
  cefrEquivalent: 14 >= 34 ? CefrLevel.C1 : (14 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (14 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (14 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((14 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_15: RawScoreConversionEntry = {
  rawScore: 15,
  bandScore: GENERAL_READING_RAW_TABLE[15] || 5.0,
  cefrEquivalent: 15 >= 34 ? CefrLevel.C1 : (15 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (15 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (15 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((15 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_16: RawScoreConversionEntry = {
  rawScore: 16,
  bandScore: GENERAL_READING_RAW_TABLE[16] || 5.0,
  cefrEquivalent: 16 >= 34 ? CefrLevel.C1 : (16 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (16 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (16 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((16 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_17: RawScoreConversionEntry = {
  rawScore: 17,
  bandScore: GENERAL_READING_RAW_TABLE[17] || 5.0,
  cefrEquivalent: 17 >= 34 ? CefrLevel.C1 : (17 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (17 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (17 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((17 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_18: RawScoreConversionEntry = {
  rawScore: 18,
  bandScore: GENERAL_READING_RAW_TABLE[18] || 5.0,
  cefrEquivalent: 18 >= 34 ? CefrLevel.C1 : (18 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (18 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (18 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((18 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_19: RawScoreConversionEntry = {
  rawScore: 19,
  bandScore: GENERAL_READING_RAW_TABLE[19] || 5.0,
  cefrEquivalent: 19 >= 34 ? CefrLevel.C1 : (19 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (19 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (19 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((19 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_20: RawScoreConversionEntry = {
  rawScore: 20,
  bandScore: GENERAL_READING_RAW_TABLE[20] || 5.0,
  cefrEquivalent: 20 >= 34 ? CefrLevel.C1 : (20 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (20 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (20 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((20 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_21: RawScoreConversionEntry = {
  rawScore: 21,
  bandScore: GENERAL_READING_RAW_TABLE[21] || 5.0,
  cefrEquivalent: 21 >= 34 ? CefrLevel.C1 : (21 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (21 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (21 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((21 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_22: RawScoreConversionEntry = {
  rawScore: 22,
  bandScore: GENERAL_READING_RAW_TABLE[22] || 5.0,
  cefrEquivalent: 22 >= 34 ? CefrLevel.C1 : (22 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (22 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (22 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((22 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_23: RawScoreConversionEntry = {
  rawScore: 23,
  bandScore: GENERAL_READING_RAW_TABLE[23] || 5.0,
  cefrEquivalent: 23 >= 34 ? CefrLevel.C1 : (23 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (23 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (23 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((23 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_24: RawScoreConversionEntry = {
  rawScore: 24,
  bandScore: GENERAL_READING_RAW_TABLE[24] || 5.0,
  cefrEquivalent: 24 >= 34 ? CefrLevel.C1 : (24 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (24 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (24 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((24 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_25: RawScoreConversionEntry = {
  rawScore: 25,
  bandScore: GENERAL_READING_RAW_TABLE[25] || 5.0,
  cefrEquivalent: 25 >= 34 ? CefrLevel.C1 : (25 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (25 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (25 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((25 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_26: RawScoreConversionEntry = {
  rawScore: 26,
  bandScore: GENERAL_READING_RAW_TABLE[26] || 5.0,
  cefrEquivalent: 26 >= 34 ? CefrLevel.C1 : (26 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (26 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (26 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((26 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_27: RawScoreConversionEntry = {
  rawScore: 27,
  bandScore: GENERAL_READING_RAW_TABLE[27] || 5.0,
  cefrEquivalent: 27 >= 34 ? CefrLevel.C1 : (27 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (27 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (27 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((27 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_28: RawScoreConversionEntry = {
  rawScore: 28,
  bandScore: GENERAL_READING_RAW_TABLE[28] || 5.0,
  cefrEquivalent: 28 >= 34 ? CefrLevel.C1 : (28 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (28 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (28 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((28 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_29: RawScoreConversionEntry = {
  rawScore: 29,
  bandScore: GENERAL_READING_RAW_TABLE[29] || 5.0,
  cefrEquivalent: 29 >= 34 ? CefrLevel.C1 : (29 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (29 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (29 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((29 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_30: RawScoreConversionEntry = {
  rawScore: 30,
  bandScore: GENERAL_READING_RAW_TABLE[30] || 5.0,
  cefrEquivalent: 30 >= 34 ? CefrLevel.C1 : (30 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (30 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (30 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((30 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_31: RawScoreConversionEntry = {
  rawScore: 31,
  bandScore: GENERAL_READING_RAW_TABLE[31] || 5.0,
  cefrEquivalent: 31 >= 34 ? CefrLevel.C1 : (31 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (31 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (31 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((31 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_32: RawScoreConversionEntry = {
  rawScore: 32,
  bandScore: GENERAL_READING_RAW_TABLE[32] || 5.0,
  cefrEquivalent: 32 >= 34 ? CefrLevel.C1 : (32 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (32 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (32 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((32 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_33: RawScoreConversionEntry = {
  rawScore: 33,
  bandScore: GENERAL_READING_RAW_TABLE[33] || 5.0,
  cefrEquivalent: 33 >= 34 ? CefrLevel.C1 : (33 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (33 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (33 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((33 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_34: RawScoreConversionEntry = {
  rawScore: 34,
  bandScore: GENERAL_READING_RAW_TABLE[34] || 5.0,
  cefrEquivalent: 34 >= 34 ? CefrLevel.C1 : (34 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (34 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (34 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((34 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_35: RawScoreConversionEntry = {
  rawScore: 35,
  bandScore: GENERAL_READING_RAW_TABLE[35] || 5.0,
  cefrEquivalent: 35 >= 34 ? CefrLevel.C1 : (35 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (35 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (35 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((35 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_36: RawScoreConversionEntry = {
  rawScore: 36,
  bandScore: GENERAL_READING_RAW_TABLE[36] || 5.0,
  cefrEquivalent: 36 >= 34 ? CefrLevel.C1 : (36 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (36 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (36 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((36 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_37: RawScoreConversionEntry = {
  rawScore: 37,
  bandScore: GENERAL_READING_RAW_TABLE[37] || 5.0,
  cefrEquivalent: 37 >= 34 ? CefrLevel.C1 : (37 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (37 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (37 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((37 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_38: RawScoreConversionEntry = {
  rawScore: 38,
  bandScore: GENERAL_READING_RAW_TABLE[38] || 5.0,
  cefrEquivalent: 38 >= 34 ? CefrLevel.C1 : (38 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (38 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (38 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((38 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_39: RawScoreConversionEntry = {
  rawScore: 39,
  bandScore: GENERAL_READING_RAW_TABLE[39] || 5.0,
  cefrEquivalent: 39 >= 34 ? CefrLevel.C1 : (39 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (39 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (39 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((39 / 40) * 100 * 10) / 10),
};


export const generalReadingCalibrationNode_40: RawScoreConversionEntry = {
  rawScore: 40,
  bandScore: GENERAL_READING_RAW_TABLE[40] || 5.0,
  cefrEquivalent: 40 >= 34 ? CefrLevel.C1 : (40 >= 28 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (40 / 40) * 9 - 0.3),
  confidenceUpperBound: Math.min(9, (40 / 40) * 9 + 0.3),
  percentileRank: Math.min(99.9, Math.round((40 / 40) * 100 * 10) / 10),
};

export class GeneralReadingCurvatureComparator_1 {
  public readonly curveComparatorId = 'GCC_0001';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_1 = new GeneralReadingCurvatureComparator_1();


export class GeneralReadingCurvatureComparator_2 {
  public readonly curveComparatorId = 'GCC_0002';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_2 = new GeneralReadingCurvatureComparator_2();


export class GeneralReadingCurvatureComparator_3 {
  public readonly curveComparatorId = 'GCC_0003';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_3 = new GeneralReadingCurvatureComparator_3();


export class GeneralReadingCurvatureComparator_4 {
  public readonly curveComparatorId = 'GCC_0004';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_4 = new GeneralReadingCurvatureComparator_4();


export class GeneralReadingCurvatureComparator_5 {
  public readonly curveComparatorId = 'GCC_0005';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_5 = new GeneralReadingCurvatureComparator_5();


export class GeneralReadingCurvatureComparator_6 {
  public readonly curveComparatorId = 'GCC_0006';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_6 = new GeneralReadingCurvatureComparator_6();


export class GeneralReadingCurvatureComparator_7 {
  public readonly curveComparatorId = 'GCC_0007';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_7 = new GeneralReadingCurvatureComparator_7();


export class GeneralReadingCurvatureComparator_8 {
  public readonly curveComparatorId = 'GCC_0008';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_8 = new GeneralReadingCurvatureComparator_8();


export class GeneralReadingCurvatureComparator_9 {
  public readonly curveComparatorId = 'GCC_0009';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_9 = new GeneralReadingCurvatureComparator_9();


export class GeneralReadingCurvatureComparator_10 {
  public readonly curveComparatorId = 'GCC_0010';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_10 = new GeneralReadingCurvatureComparator_10();


export class GeneralReadingCurvatureComparator_11 {
  public readonly curveComparatorId = 'GCC_0011';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_11 = new GeneralReadingCurvatureComparator_11();


export class GeneralReadingCurvatureComparator_12 {
  public readonly curveComparatorId = 'GCC_0012';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_12 = new GeneralReadingCurvatureComparator_12();


export class GeneralReadingCurvatureComparator_13 {
  public readonly curveComparatorId = 'GCC_0013';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_13 = new GeneralReadingCurvatureComparator_13();


export class GeneralReadingCurvatureComparator_14 {
  public readonly curveComparatorId = 'GCC_0014';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_14 = new GeneralReadingCurvatureComparator_14();


export class GeneralReadingCurvatureComparator_15 {
  public readonly curveComparatorId = 'GCC_0015';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_15 = new GeneralReadingCurvatureComparator_15();


export class GeneralReadingCurvatureComparator_16 {
  public readonly curveComparatorId = 'GCC_0016';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_16 = new GeneralReadingCurvatureComparator_16();


export class GeneralReadingCurvatureComparator_17 {
  public readonly curveComparatorId = 'GCC_0017';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_17 = new GeneralReadingCurvatureComparator_17();


export class GeneralReadingCurvatureComparator_18 {
  public readonly curveComparatorId = 'GCC_0018';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_18 = new GeneralReadingCurvatureComparator_18();


export class GeneralReadingCurvatureComparator_19 {
  public readonly curveComparatorId = 'GCC_0019';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_19 = new GeneralReadingCurvatureComparator_19();


export class GeneralReadingCurvatureComparator_20 {
  public readonly curveComparatorId = 'GCC_0020';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_20 = new GeneralReadingCurvatureComparator_20();


export class GeneralReadingCurvatureComparator_21 {
  public readonly curveComparatorId = 'GCC_0021';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_21 = new GeneralReadingCurvatureComparator_21();


export class GeneralReadingCurvatureComparator_22 {
  public readonly curveComparatorId = 'GCC_0022';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_22 = new GeneralReadingCurvatureComparator_22();


export class GeneralReadingCurvatureComparator_23 {
  public readonly curveComparatorId = 'GCC_0023';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_23 = new GeneralReadingCurvatureComparator_23();


export class GeneralReadingCurvatureComparator_24 {
  public readonly curveComparatorId = 'GCC_0024';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_24 = new GeneralReadingCurvatureComparator_24();


export class GeneralReadingCurvatureComparator_25 {
  public readonly curveComparatorId = 'GCC_0025';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_25 = new GeneralReadingCurvatureComparator_25();


export class GeneralReadingCurvatureComparator_26 {
  public readonly curveComparatorId = 'GCC_0026';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_26 = new GeneralReadingCurvatureComparator_26();


export class GeneralReadingCurvatureComparator_27 {
  public readonly curveComparatorId = 'GCC_0027';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_27 = new GeneralReadingCurvatureComparator_27();


export class GeneralReadingCurvatureComparator_28 {
  public readonly curveComparatorId = 'GCC_0028';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_28 = new GeneralReadingCurvatureComparator_28();


export class GeneralReadingCurvatureComparator_29 {
  public readonly curveComparatorId = 'GCC_0029';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_29 = new GeneralReadingCurvatureComparator_29();


export class GeneralReadingCurvatureComparator_30 {
  public readonly curveComparatorId = 'GCC_0030';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_30 = new GeneralReadingCurvatureComparator_30();


export class GeneralReadingCurvatureComparator_31 {
  public readonly curveComparatorId = 'GCC_0031';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_31 = new GeneralReadingCurvatureComparator_31();


export class GeneralReadingCurvatureComparator_32 {
  public readonly curveComparatorId = 'GCC_0032';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_32 = new GeneralReadingCurvatureComparator_32();


export class GeneralReadingCurvatureComparator_33 {
  public readonly curveComparatorId = 'GCC_0033';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_33 = new GeneralReadingCurvatureComparator_33();


export class GeneralReadingCurvatureComparator_34 {
  public readonly curveComparatorId = 'GCC_0034';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_34 = new GeneralReadingCurvatureComparator_34();


export class GeneralReadingCurvatureComparator_35 {
  public readonly curveComparatorId = 'GCC_0035';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_35 = new GeneralReadingCurvatureComparator_35();


export class GeneralReadingCurvatureComparator_36 {
  public readonly curveComparatorId = 'GCC_0036';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_36 = new GeneralReadingCurvatureComparator_36();


export class GeneralReadingCurvatureComparator_37 {
  public readonly curveComparatorId = 'GCC_0037';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_37 = new GeneralReadingCurvatureComparator_37();


export class GeneralReadingCurvatureComparator_38 {
  public readonly curveComparatorId = 'GCC_0038';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_38 = new GeneralReadingCurvatureComparator_38();


export class GeneralReadingCurvatureComparator_39 {
  public readonly curveComparatorId = 'GCC_0039';
  public compareAcademicVsGeneral(raw: number): { acadBand: number; genBand: number; delta: number } {
    const genBand = GENERAL_READING_RAW_TABLE[raw] || 0;
    const acadBand = Math.min(9.0, genBand + 0.5);
    return { acadBand, genBand, delta: acadBand - genBand };
  }
}
export const curvatureComparatorInstance_39 = new GeneralReadingCurvatureComparator_39();
