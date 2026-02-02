/**
 * @file ListeningConversionTable.ts
 * @description Official Cambridge raw-to-band conversion lookup table for IELTS Listening (40 items).
 */
import { RawScoreConversionEntry } from '../../core/types/scoring.types';
import { CefrLevel } from '../../core/types/exam.types';

export const LISTENING_RAW_TABLE: Record<number, number> = {
  0: 0.0, 1: 1.0, 2: 1.5, 3: 2.0, 4: 2.5, 5: 3.0, 6: 3.5, 7: 3.5, 8: 3.5, 9: 4.0,
  10: 4.0, 11: 4.0, 12: 4.0, 13: 4.5, 14: 4.5, 15: 4.5, 16: 5.0, 17: 5.0, 18: 5.5, 19: 5.5,
  20: 5.5, 21: 5.5, 22: 5.5, 23: 6.0, 24: 6.0, 25: 6.0, 26: 6.5, 27: 6.5, 28: 6.5, 29: 6.5,
  30: 7.0, 31: 7.0, 32: 7.5, 33: 7.5, 34: 7.5, 35: 8.0, 36: 8.0, 37: 8.5, 38: 8.5, 39: 9.0, 40: 9.0
};

export const listeningCalibrationNode_0: RawScoreConversionEntry = {
  rawScore: 0,
  bandScore: LISTENING_RAW_TABLE[0] || 5.0,
  cefrEquivalent: 0 >= 30 ? CefrLevel.C1 : (0 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (0 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (0 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((0 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_1: RawScoreConversionEntry = {
  rawScore: 1,
  bandScore: LISTENING_RAW_TABLE[1] || 5.0,
  cefrEquivalent: 1 >= 30 ? CefrLevel.C1 : (1 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (1 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (1 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((1 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_2: RawScoreConversionEntry = {
  rawScore: 2,
  bandScore: LISTENING_RAW_TABLE[2] || 5.0,
  cefrEquivalent: 2 >= 30 ? CefrLevel.C1 : (2 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (2 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (2 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((2 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_3: RawScoreConversionEntry = {
  rawScore: 3,
  bandScore: LISTENING_RAW_TABLE[3] || 5.0,
  cefrEquivalent: 3 >= 30 ? CefrLevel.C1 : (3 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (3 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (3 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((3 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_4: RawScoreConversionEntry = {
  rawScore: 4,
  bandScore: LISTENING_RAW_TABLE[4] || 5.0,
  cefrEquivalent: 4 >= 30 ? CefrLevel.C1 : (4 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (4 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (4 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((4 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_5: RawScoreConversionEntry = {
  rawScore: 5,
  bandScore: LISTENING_RAW_TABLE[5] || 5.0,
  cefrEquivalent: 5 >= 30 ? CefrLevel.C1 : (5 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (5 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (5 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((5 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_6: RawScoreConversionEntry = {
  rawScore: 6,
  bandScore: LISTENING_RAW_TABLE[6] || 5.0,
  cefrEquivalent: 6 >= 30 ? CefrLevel.C1 : (6 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (6 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (6 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((6 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_7: RawScoreConversionEntry = {
  rawScore: 7,
  bandScore: LISTENING_RAW_TABLE[7] || 5.0,
  cefrEquivalent: 7 >= 30 ? CefrLevel.C1 : (7 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (7 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (7 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((7 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_8: RawScoreConversionEntry = {
  rawScore: 8,
  bandScore: LISTENING_RAW_TABLE[8] || 5.0,
  cefrEquivalent: 8 >= 30 ? CefrLevel.C1 : (8 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (8 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (8 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((8 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_9: RawScoreConversionEntry = {
  rawScore: 9,
  bandScore: LISTENING_RAW_TABLE[9] || 5.0,
  cefrEquivalent: 9 >= 30 ? CefrLevel.C1 : (9 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (9 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (9 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((9 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_10: RawScoreConversionEntry = {
  rawScore: 10,
  bandScore: LISTENING_RAW_TABLE[10] || 5.0,
  cefrEquivalent: 10 >= 30 ? CefrLevel.C1 : (10 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (10 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (10 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((10 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_11: RawScoreConversionEntry = {
  rawScore: 11,
  bandScore: LISTENING_RAW_TABLE[11] || 5.0,
  cefrEquivalent: 11 >= 30 ? CefrLevel.C1 : (11 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (11 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (11 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((11 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_12: RawScoreConversionEntry = {
  rawScore: 12,
  bandScore: LISTENING_RAW_TABLE[12] || 5.0,
  cefrEquivalent: 12 >= 30 ? CefrLevel.C1 : (12 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (12 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (12 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((12 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_13: RawScoreConversionEntry = {
  rawScore: 13,
  bandScore: LISTENING_RAW_TABLE[13] || 5.0,
  cefrEquivalent: 13 >= 30 ? CefrLevel.C1 : (13 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (13 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (13 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((13 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_14: RawScoreConversionEntry = {
  rawScore: 14,
  bandScore: LISTENING_RAW_TABLE[14] || 5.0,
  cefrEquivalent: 14 >= 30 ? CefrLevel.C1 : (14 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (14 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (14 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((14 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_15: RawScoreConversionEntry = {
  rawScore: 15,
  bandScore: LISTENING_RAW_TABLE[15] || 5.0,
  cefrEquivalent: 15 >= 30 ? CefrLevel.C1 : (15 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (15 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (15 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((15 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_16: RawScoreConversionEntry = {
  rawScore: 16,
  bandScore: LISTENING_RAW_TABLE[16] || 5.0,
  cefrEquivalent: 16 >= 30 ? CefrLevel.C1 : (16 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (16 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (16 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((16 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_17: RawScoreConversionEntry = {
  rawScore: 17,
  bandScore: LISTENING_RAW_TABLE[17] || 5.0,
  cefrEquivalent: 17 >= 30 ? CefrLevel.C1 : (17 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (17 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (17 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((17 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_18: RawScoreConversionEntry = {
  rawScore: 18,
  bandScore: LISTENING_RAW_TABLE[18] || 5.0,
  cefrEquivalent: 18 >= 30 ? CefrLevel.C1 : (18 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (18 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (18 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((18 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_19: RawScoreConversionEntry = {
  rawScore: 19,
  bandScore: LISTENING_RAW_TABLE[19] || 5.0,
  cefrEquivalent: 19 >= 30 ? CefrLevel.C1 : (19 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (19 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (19 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((19 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_20: RawScoreConversionEntry = {
  rawScore: 20,
  bandScore: LISTENING_RAW_TABLE[20] || 5.0,
  cefrEquivalent: 20 >= 30 ? CefrLevel.C1 : (20 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (20 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (20 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((20 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_21: RawScoreConversionEntry = {
  rawScore: 21,
  bandScore: LISTENING_RAW_TABLE[21] || 5.0,
  cefrEquivalent: 21 >= 30 ? CefrLevel.C1 : (21 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (21 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (21 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((21 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_22: RawScoreConversionEntry = {
  rawScore: 22,
  bandScore: LISTENING_RAW_TABLE[22] || 5.0,
  cefrEquivalent: 22 >= 30 ? CefrLevel.C1 : (22 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (22 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (22 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((22 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_23: RawScoreConversionEntry = {
  rawScore: 23,
  bandScore: LISTENING_RAW_TABLE[23] || 5.0,
  cefrEquivalent: 23 >= 30 ? CefrLevel.C1 : (23 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (23 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (23 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((23 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_24: RawScoreConversionEntry = {
  rawScore: 24,
  bandScore: LISTENING_RAW_TABLE[24] || 5.0,
  cefrEquivalent: 24 >= 30 ? CefrLevel.C1 : (24 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (24 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (24 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((24 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_25: RawScoreConversionEntry = {
  rawScore: 25,
  bandScore: LISTENING_RAW_TABLE[25] || 5.0,
  cefrEquivalent: 25 >= 30 ? CefrLevel.C1 : (25 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (25 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (25 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((25 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_26: RawScoreConversionEntry = {
  rawScore: 26,
  bandScore: LISTENING_RAW_TABLE[26] || 5.0,
  cefrEquivalent: 26 >= 30 ? CefrLevel.C1 : (26 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (26 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (26 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((26 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_27: RawScoreConversionEntry = {
  rawScore: 27,
  bandScore: LISTENING_RAW_TABLE[27] || 5.0,
  cefrEquivalent: 27 >= 30 ? CefrLevel.C1 : (27 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (27 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (27 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((27 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_28: RawScoreConversionEntry = {
  rawScore: 28,
  bandScore: LISTENING_RAW_TABLE[28] || 5.0,
  cefrEquivalent: 28 >= 30 ? CefrLevel.C1 : (28 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (28 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (28 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((28 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_29: RawScoreConversionEntry = {
  rawScore: 29,
  bandScore: LISTENING_RAW_TABLE[29] || 5.0,
  cefrEquivalent: 29 >= 30 ? CefrLevel.C1 : (29 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (29 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (29 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((29 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_30: RawScoreConversionEntry = {
  rawScore: 30,
  bandScore: LISTENING_RAW_TABLE[30] || 5.0,
  cefrEquivalent: 30 >= 30 ? CefrLevel.C1 : (30 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (30 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (30 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((30 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_31: RawScoreConversionEntry = {
  rawScore: 31,
  bandScore: LISTENING_RAW_TABLE[31] || 5.0,
  cefrEquivalent: 31 >= 30 ? CefrLevel.C1 : (31 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (31 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (31 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((31 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_32: RawScoreConversionEntry = {
  rawScore: 32,
  bandScore: LISTENING_RAW_TABLE[32] || 5.0,
  cefrEquivalent: 32 >= 30 ? CefrLevel.C1 : (32 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (32 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (32 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((32 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_33: RawScoreConversionEntry = {
  rawScore: 33,
  bandScore: LISTENING_RAW_TABLE[33] || 5.0,
  cefrEquivalent: 33 >= 30 ? CefrLevel.C1 : (33 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (33 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (33 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((33 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_34: RawScoreConversionEntry = {
  rawScore: 34,
  bandScore: LISTENING_RAW_TABLE[34] || 5.0,
  cefrEquivalent: 34 >= 30 ? CefrLevel.C1 : (34 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (34 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (34 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((34 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_35: RawScoreConversionEntry = {
  rawScore: 35,
  bandScore: LISTENING_RAW_TABLE[35] || 5.0,
  cefrEquivalent: 35 >= 30 ? CefrLevel.C1 : (35 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (35 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (35 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((35 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_36: RawScoreConversionEntry = {
  rawScore: 36,
  bandScore: LISTENING_RAW_TABLE[36] || 5.0,
  cefrEquivalent: 36 >= 30 ? CefrLevel.C1 : (36 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (36 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (36 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((36 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_37: RawScoreConversionEntry = {
  rawScore: 37,
  bandScore: LISTENING_RAW_TABLE[37] || 5.0,
  cefrEquivalent: 37 >= 30 ? CefrLevel.C1 : (37 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (37 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (37 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((37 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_38: RawScoreConversionEntry = {
  rawScore: 38,
  bandScore: LISTENING_RAW_TABLE[38] || 5.0,
  cefrEquivalent: 38 >= 30 ? CefrLevel.C1 : (38 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (38 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (38 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((38 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_39: RawScoreConversionEntry = {
  rawScore: 39,
  bandScore: LISTENING_RAW_TABLE[39] || 5.0,
  cefrEquivalent: 39 >= 30 ? CefrLevel.C1 : (39 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (39 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (39 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((39 / 40) * 100 * 10) / 10),
};


export const listeningCalibrationNode_40: RawScoreConversionEntry = {
  rawScore: 40,
  bandScore: LISTENING_RAW_TABLE[40] || 5.0,
  cefrEquivalent: 40 >= 30 ? CefrLevel.C1 : (40 >= 23 ? CefrLevel.B2 : CefrLevel.B1),
  confidenceLowerBound: Math.max(0, (40 / 40) * 9 - 0.2),
  confidenceUpperBound: Math.min(9, (40 / 40) * 9 + 0.2),
  percentileRank: Math.min(99.9, Math.round((40 / 40) * 100 * 10) / 10),
};

export class ListeningAcousticItemCharacteristicCurve_1 {
  public readonly curveId = 'ICC_LST_0001';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (1 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_1 = new ListeningAcousticItemCharacteristicCurve_1();


export class ListeningAcousticItemCharacteristicCurve_2 {
  public readonly curveId = 'ICC_LST_0002';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (2 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_2 = new ListeningAcousticItemCharacteristicCurve_2();


export class ListeningAcousticItemCharacteristicCurve_3 {
  public readonly curveId = 'ICC_LST_0003';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (3 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_3 = new ListeningAcousticItemCharacteristicCurve_3();


export class ListeningAcousticItemCharacteristicCurve_4 {
  public readonly curveId = 'ICC_LST_0004';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (4 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_4 = new ListeningAcousticItemCharacteristicCurve_4();


export class ListeningAcousticItemCharacteristicCurve_5 {
  public readonly curveId = 'ICC_LST_0005';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (5 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_5 = new ListeningAcousticItemCharacteristicCurve_5();


export class ListeningAcousticItemCharacteristicCurve_6 {
  public readonly curveId = 'ICC_LST_0006';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (6 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_6 = new ListeningAcousticItemCharacteristicCurve_6();


export class ListeningAcousticItemCharacteristicCurve_7 {
  public readonly curveId = 'ICC_LST_0007';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (7 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_7 = new ListeningAcousticItemCharacteristicCurve_7();


export class ListeningAcousticItemCharacteristicCurve_8 {
  public readonly curveId = 'ICC_LST_0008';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (8 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_8 = new ListeningAcousticItemCharacteristicCurve_8();


export class ListeningAcousticItemCharacteristicCurve_9 {
  public readonly curveId = 'ICC_LST_0009';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (9 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_9 = new ListeningAcousticItemCharacteristicCurve_9();


export class ListeningAcousticItemCharacteristicCurve_10 {
  public readonly curveId = 'ICC_LST_0010';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (10 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_10 = new ListeningAcousticItemCharacteristicCurve_10();


export class ListeningAcousticItemCharacteristicCurve_11 {
  public readonly curveId = 'ICC_LST_0011';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (11 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_11 = new ListeningAcousticItemCharacteristicCurve_11();


export class ListeningAcousticItemCharacteristicCurve_12 {
  public readonly curveId = 'ICC_LST_0012';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (12 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_12 = new ListeningAcousticItemCharacteristicCurve_12();


export class ListeningAcousticItemCharacteristicCurve_13 {
  public readonly curveId = 'ICC_LST_0013';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (13 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_13 = new ListeningAcousticItemCharacteristicCurve_13();


export class ListeningAcousticItemCharacteristicCurve_14 {
  public readonly curveId = 'ICC_LST_0014';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (14 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_14 = new ListeningAcousticItemCharacteristicCurve_14();


export class ListeningAcousticItemCharacteristicCurve_15 {
  public readonly curveId = 'ICC_LST_0015';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (15 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_15 = new ListeningAcousticItemCharacteristicCurve_15();


export class ListeningAcousticItemCharacteristicCurve_16 {
  public readonly curveId = 'ICC_LST_0016';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (16 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_16 = new ListeningAcousticItemCharacteristicCurve_16();


export class ListeningAcousticItemCharacteristicCurve_17 {
  public readonly curveId = 'ICC_LST_0017';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (17 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_17 = new ListeningAcousticItemCharacteristicCurve_17();


export class ListeningAcousticItemCharacteristicCurve_18 {
  public readonly curveId = 'ICC_LST_0018';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (18 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_18 = new ListeningAcousticItemCharacteristicCurve_18();


export class ListeningAcousticItemCharacteristicCurve_19 {
  public readonly curveId = 'ICC_LST_0019';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (19 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_19 = new ListeningAcousticItemCharacteristicCurve_19();


export class ListeningAcousticItemCharacteristicCurve_20 {
  public readonly curveId = 'ICC_LST_0020';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (20 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_20 = new ListeningAcousticItemCharacteristicCurve_20();


export class ListeningAcousticItemCharacteristicCurve_21 {
  public readonly curveId = 'ICC_LST_0021';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (21 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_21 = new ListeningAcousticItemCharacteristicCurve_21();


export class ListeningAcousticItemCharacteristicCurve_22 {
  public readonly curveId = 'ICC_LST_0022';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (22 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_22 = new ListeningAcousticItemCharacteristicCurve_22();


export class ListeningAcousticItemCharacteristicCurve_23 {
  public readonly curveId = 'ICC_LST_0023';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (23 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_23 = new ListeningAcousticItemCharacteristicCurve_23();


export class ListeningAcousticItemCharacteristicCurve_24 {
  public readonly curveId = 'ICC_LST_0024';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (24 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_24 = new ListeningAcousticItemCharacteristicCurve_24();


export class ListeningAcousticItemCharacteristicCurve_25 {
  public readonly curveId = 'ICC_LST_0025';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (25 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_25 = new ListeningAcousticItemCharacteristicCurve_25();


export class ListeningAcousticItemCharacteristicCurve_26 {
  public readonly curveId = 'ICC_LST_0026';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (26 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_26 = new ListeningAcousticItemCharacteristicCurve_26();


export class ListeningAcousticItemCharacteristicCurve_27 {
  public readonly curveId = 'ICC_LST_0027';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (27 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_27 = new ListeningAcousticItemCharacteristicCurve_27();


export class ListeningAcousticItemCharacteristicCurve_28 {
  public readonly curveId = 'ICC_LST_0028';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (28 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_28 = new ListeningAcousticItemCharacteristicCurve_28();


export class ListeningAcousticItemCharacteristicCurve_29 {
  public readonly curveId = 'ICC_LST_0029';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (29 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_29 = new ListeningAcousticItemCharacteristicCurve_29();


export class ListeningAcousticItemCharacteristicCurve_30 {
  public readonly curveId = 'ICC_LST_0030';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (30 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_30 = new ListeningAcousticItemCharacteristicCurve_30();


export class ListeningAcousticItemCharacteristicCurve_31 {
  public readonly curveId = 'ICC_LST_0031';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (31 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_31 = new ListeningAcousticItemCharacteristicCurve_31();


export class ListeningAcousticItemCharacteristicCurve_32 {
  public readonly curveId = 'ICC_LST_0032';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (32 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_32 = new ListeningAcousticItemCharacteristicCurve_32();


export class ListeningAcousticItemCharacteristicCurve_33 {
  public readonly curveId = 'ICC_LST_0033';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (33 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_33 = new ListeningAcousticItemCharacteristicCurve_33();


export class ListeningAcousticItemCharacteristicCurve_34 {
  public readonly curveId = 'ICC_LST_0034';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (34 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_34 = new ListeningAcousticItemCharacteristicCurve_34();


export class ListeningAcousticItemCharacteristicCurve_35 {
  public readonly curveId = 'ICC_LST_0035';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (35 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_35 = new ListeningAcousticItemCharacteristicCurve_35();


export class ListeningAcousticItemCharacteristicCurve_36 {
  public readonly curveId = 'ICC_LST_0036';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (36 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_36 = new ListeningAcousticItemCharacteristicCurve_36();


export class ListeningAcousticItemCharacteristicCurve_37 {
  public readonly curveId = 'ICC_LST_0037';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (37 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_37 = new ListeningAcousticItemCharacteristicCurve_37();


export class ListeningAcousticItemCharacteristicCurve_38 {
  public readonly curveId = 'ICC_LST_0038';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (38 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_38 = new ListeningAcousticItemCharacteristicCurve_38();


export class ListeningAcousticItemCharacteristicCurve_39 {
  public readonly curveId = 'ICC_LST_0039';
  public getProbabilityOfSuccess(theta: number): number {
    const discrimination = 1.15;
    const difficulty = (39 - 20) / 10;
    const guessing = 0.05;
    return guessing + (1 - guessing) / (1 + Math.exp(-1.7 * discrimination * (theta - difficulty)));
  }
}
export const listeningIcc_39 = new ListeningAcousticItemCharacteristicCurve_39();
