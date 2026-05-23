/**
 * @file ComplexConditionals.ts
 * @description Inverted and mixed conditionals: "Had I known", "Were it not for", "Should you require".
 */
export interface ConditionalPatternNode {
  conditionalType: 'ZERO' | 'FIRST' | 'SECOND' | 'THIRD' | 'MIXED' | 'INVERTED';
  formula: string;
  standardForm: string;
  invertedForm?: string;
  academicContext: string;
}

export const CONDITIONAL_PATTERNS: ConditionalPatternNode[] = [
  {
    conditionalType: 'INVERTED',
    formula: 'Had + subject + past participle, subject + would have + past participle',
    standardForm: 'If policymakers had acted earlier, the recession would have been mitigated.',
    invertedForm: 'Had policymakers acted earlier, the recession would have been mitigated.',
    academicContext: 'Retrospective counterfactual analysis in Task 2 argumentative essays.',
  },
  {
    conditionalType: 'INVERTED',
    formula: 'Were it not for + noun phrase, subject + would + base verb',
    standardForm: 'If it were not for stringent emissions regulations, urban smog would be unmanageable.',
    invertedForm: 'Were it not for stringent emissions regulations, urban smog would be unmanageable.',
    academicContext: 'Hypothetical attribution of causality in environmental policy writing.',
  },
];

export const conditionalPatternNode_1: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 1)',
  standardForm: 'If the corporation had diversified its assets in year 1, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 1, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 1.',
};


export const conditionalPatternNode_2: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 2)',
  standardForm: 'If the corporation had diversified its assets in year 2, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 2, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 2.',
};


export const conditionalPatternNode_3: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 3)',
  standardForm: 'If the corporation had diversified its assets in year 3, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 3, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 3.',
};


export const conditionalPatternNode_4: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 4)',
  standardForm: 'If the corporation had diversified its assets in year 4, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 4, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 4.',
};


export const conditionalPatternNode_5: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 5)',
  standardForm: 'If the corporation had diversified its assets in year 5, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 5, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 5.',
};


export const conditionalPatternNode_6: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 6)',
  standardForm: 'If the corporation had diversified its assets in year 6, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 6, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 6.',
};


export const conditionalPatternNode_7: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 7)',
  standardForm: 'If the corporation had diversified its assets in year 7, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 7, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 7.',
};


export const conditionalPatternNode_8: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 8)',
  standardForm: 'If the corporation had diversified its assets in year 8, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 8, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 8.',
};


export const conditionalPatternNode_9: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 9)',
  standardForm: 'If the corporation had diversified its assets in year 9, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 9, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 9.',
};


export const conditionalPatternNode_10: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 10)',
  standardForm: 'If the corporation had diversified its assets in year 10, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 10, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 10.',
};


export const conditionalPatternNode_11: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 11)',
  standardForm: 'If the corporation had diversified its assets in year 11, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 11, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 11.',
};


export const conditionalPatternNode_12: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 12)',
  standardForm: 'If the corporation had diversified its assets in year 12, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 12, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 12.',
};


export const conditionalPatternNode_13: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 13)',
  standardForm: 'If the corporation had diversified its assets in year 13, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 13, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 13.',
};


export const conditionalPatternNode_14: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 14)',
  standardForm: 'If the corporation had diversified its assets in year 14, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 14, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 14.',
};


export const conditionalPatternNode_15: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 15)',
  standardForm: 'If the corporation had diversified its assets in year 15, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 15, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 15.',
};


export const conditionalPatternNode_16: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 16)',
  standardForm: 'If the corporation had diversified its assets in year 16, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 16, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 16.',
};


export const conditionalPatternNode_17: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 17)',
  standardForm: 'If the corporation had diversified its assets in year 17, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 17, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 17.',
};


export const conditionalPatternNode_18: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 18)',
  standardForm: 'If the corporation had diversified its assets in year 18, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 18, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 18.',
};


export const conditionalPatternNode_19: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 19)',
  standardForm: 'If the corporation had diversified its assets in year 19, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 19, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 19.',
};


export const conditionalPatternNode_20: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 20)',
  standardForm: 'If the corporation had diversified its assets in year 20, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 20, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 20.',
};


export const conditionalPatternNode_21: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 21)',
  standardForm: 'If the corporation had diversified its assets in year 21, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 21, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 21.',
};


export const conditionalPatternNode_22: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 22)',
  standardForm: 'If the corporation had diversified its assets in year 22, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 22, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 22.',
};


export const conditionalPatternNode_23: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 23)',
  standardForm: 'If the corporation had diversified its assets in year 23, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 23, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 23.',
};


export const conditionalPatternNode_24: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 24)',
  standardForm: 'If the corporation had diversified its assets in year 24, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 24, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 24.',
};


export const conditionalPatternNode_25: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 25)',
  standardForm: 'If the corporation had diversified its assets in year 25, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 25, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 25.',
};


export const conditionalPatternNode_26: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 26)',
  standardForm: 'If the corporation had diversified its assets in year 26, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 26, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 26.',
};


export const conditionalPatternNode_27: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 27)',
  standardForm: 'If the corporation had diversified its assets in year 27, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 27, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 27.',
};


export const conditionalPatternNode_28: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 28)',
  standardForm: 'If the corporation had diversified its assets in year 28, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 28, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 28.',
};


export const conditionalPatternNode_29: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 29)',
  standardForm: 'If the corporation had diversified its assets in year 29, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 29, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 29.',
};


export const conditionalPatternNode_30: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 30)',
  standardForm: 'If the corporation had diversified its assets in year 30, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 30, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 30.',
};


export const conditionalPatternNode_31: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 31)',
  standardForm: 'If the corporation had diversified its assets in year 31, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 31, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 31.',
};


export const conditionalPatternNode_32: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 32)',
  standardForm: 'If the corporation had diversified its assets in year 32, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 32, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 32.',
};


export const conditionalPatternNode_33: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 33)',
  standardForm: 'If the corporation had diversified its assets in year 33, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 33, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 33.',
};


export const conditionalPatternNode_34: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 34)',
  standardForm: 'If the corporation had diversified its assets in year 34, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 34, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 34.',
};


export const conditionalPatternNode_35: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 35)',
  standardForm: 'If the corporation had diversified its assets in year 35, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 35, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 35.',
};


export const conditionalPatternNode_36: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 36)',
  standardForm: 'If the corporation had diversified its assets in year 36, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 36, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 36.',
};


export const conditionalPatternNode_37: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 37)',
  standardForm: 'If the corporation had diversified its assets in year 37, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 37, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 37.',
};


export const conditionalPatternNode_38: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 38)',
  standardForm: 'If the corporation had diversified its assets in year 38, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 38, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 38.',
};


export const conditionalPatternNode_39: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 39)',
  standardForm: 'If the corporation had diversified its assets in year 39, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 39, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 39.',
};


export const conditionalPatternNode_40: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 40)',
  standardForm: 'If the corporation had diversified its assets in year 40, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 40, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 40.',
};


export const conditionalPatternNode_41: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 41)',
  standardForm: 'If the corporation had diversified its assets in year 41, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 41, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 41.',
};


export const conditionalPatternNode_42: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 42)',
  standardForm: 'If the corporation had diversified its assets in year 42, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 42, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 42.',
};


export const conditionalPatternNode_43: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 43)',
  standardForm: 'If the corporation had diversified its assets in year 43, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 43, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 43.',
};


export const conditionalPatternNode_44: ConditionalPatternNode = {
  conditionalType: 'MIXED',
  formula: 'Had + subject + past participle, subject + would + base verb (Present outcome of past condition 44)',
  standardForm: 'If the corporation had diversified its assets in year 44, it would be resilient today.',
  invertedForm: 'Had the corporation diversified its assets in year 44, it would be resilient today.',
  academicContext: 'Economic analysis tracing current viability to historical decisions 44.',
};
