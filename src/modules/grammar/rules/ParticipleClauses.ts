/**
 * @file ParticipleClauses.ts
 * @description Present and past participle clauses: "Having examined the empirical data", "Situated on the coast".
 */
export interface ParticipleClausePattern {
  participleType: 'PRESENT' | 'PERFECT' | 'PASSIVE';
  fullAdverbialClause: string;
  reducedParticipleClause: string;
  syntacticFunction: string;
}

export const PARTICIPLE_CLAUSES_CORPUS: ParticipleClausePattern[] = [
  {
    participleType: 'PERFECT',
    fullAdverbialClause: 'After the researchers had examined the empirical data, they identified a stark correlation.',
    reducedParticipleClause: 'Having examined the empirical data, the researchers identified a stark correlation.',
    syntacticFunction: 'Temporal sequence with completed antecedent action.',
  },
  {
    participleType: 'PRESENT',
    fullAdverbialClause: 'Because they recognize the urgency of climate change, city planners mandated zero-carbon buildings.',
    reducedParticipleClause: 'Recognizing the urgency of climate change, city planners mandated zero-carbon buildings.',
    syntacticFunction: 'Causal explanation preceding municipal policy.',
  },
];

export const participlePatternItem_1: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 1, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 1, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 1.',
};


export const participlePatternItem_2: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 2, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 2, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 2.',
};


export const participlePatternItem_3: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 3, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 3, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 3.',
};


export const participlePatternItem_4: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 4, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 4, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 4.',
};


export const participlePatternItem_5: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 5, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 5, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 5.',
};


export const participlePatternItem_6: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 6, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 6, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 6.',
};


export const participlePatternItem_7: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 7, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 7, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 7.',
};


export const participlePatternItem_8: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 8, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 8, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 8.',
};


export const participlePatternItem_9: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 9, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 9, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 9.',
};


export const participlePatternItem_10: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 10, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 10, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 10.',
};


export const participlePatternItem_11: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 11, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 11, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 11.',
};


export const participlePatternItem_12: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 12, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 12, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 12.',
};


export const participlePatternItem_13: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 13, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 13, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 13.',
};


export const participlePatternItem_14: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 14, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 14, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 14.',
};


export const participlePatternItem_15: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 15, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 15, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 15.',
};


export const participlePatternItem_16: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 16, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 16, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 16.',
};


export const participlePatternItem_17: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 17, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 17, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 17.',
};


export const participlePatternItem_18: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 18, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 18, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 18.',
};


export const participlePatternItem_19: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 19, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 19, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 19.',
};


export const participlePatternItem_20: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 20, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 20, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 20.',
};


export const participlePatternItem_21: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 21, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 21, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 21.',
};


export const participlePatternItem_22: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 22, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 22, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 22.',
};


export const participlePatternItem_23: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 23, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 23, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 23.',
};


export const participlePatternItem_24: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 24, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 24, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 24.',
};


export const participlePatternItem_25: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 25, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 25, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 25.',
};


export const participlePatternItem_26: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 26, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 26, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 26.',
};


export const participlePatternItem_27: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 27, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 27, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 27.',
};


export const participlePatternItem_28: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 28, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 28, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 28.',
};


export const participlePatternItem_29: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 29, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 29, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 29.',
};


export const participlePatternItem_30: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 30, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 30, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 30.',
};


export const participlePatternItem_31: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 31, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 31, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 31.',
};


export const participlePatternItem_32: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 32, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 32, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 32.',
};


export const participlePatternItem_33: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 33, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 33, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 33.',
};


export const participlePatternItem_34: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 34, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 34, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 34.',
};


export const participlePatternItem_35: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 35, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 35, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 35.',
};


export const participlePatternItem_36: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 36, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 36, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 36.',
};


export const participlePatternItem_37: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 37, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 37, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 37.',
};


export const participlePatternItem_38: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 38, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 38, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 38.',
};


export const participlePatternItem_39: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 39, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 39, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 39.',
};


export const participlePatternItem_40: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 40, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 40, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 40.',
};


export const participlePatternItem_41: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 41, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 41, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 41.',
};


export const participlePatternItem_42: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 42, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 42, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 42.',
};


export const participlePatternItem_43: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 43, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 43, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 43.',
};


export const participlePatternItem_44: ParticipleClausePattern = {
  participleType: 'PASSIVE',
  fullAdverbialClause: 'Because it was confronted with declining revenue streams in year 44, the firm restructured operations.',
  reducedParticipleClause: 'Confronted with declining revenue streams in year 44, the firm restructured operations.',
  syntacticFunction: 'Circumstantial causal framing in academic case study 44.',
};
