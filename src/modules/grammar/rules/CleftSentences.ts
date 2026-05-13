/**
 * @file CleftSentences.ts
 * @description Focus-shifting cleft sentences (it-clefts, wh-clefts, reversed clefts) for IELTS rhetorical emphasis.
 */
export interface CleftTransformationRule {
  cleftType: 'IT_CLEFT' | 'WH_CLEFT' | 'ALL_CLEFT' | 'REVERSED_WH';
  originalSentence: string;
  cleftTransformation: string;
  focusedElement: string;
}

export const CLEFT_TRANSFORMATIONS: CleftTransformationRule[] = [
  {
    cleftType: 'IT_CLEFT',
    originalSentence: 'Lack of municipal funding precipitated the collapse of the infrastructure.',
    cleftTransformation: 'It was the lack of municipal funding that precipitated the collapse of the infrastructure.',
    focusedElement: 'the lack of municipal funding (causative agent)',
  },
  {
    cleftType: 'WH_CLEFT',
    originalSentence: 'The government needs to overhaul antiquated tax incentives.',
    cleftTransformation: 'What the government needs to overhaul is antiquated tax incentives.',
    focusedElement: 'antiquated tax incentives (direct thematic focus)',
  },
];

export const cleftRuleItem_1: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 1.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 1.',
  focusedElement: 'human carbon emissions in sector 1',
};


export const cleftRuleItem_2: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 2.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 2.',
  focusedElement: 'human carbon emissions in sector 2',
};


export const cleftRuleItem_3: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 3.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 3.',
  focusedElement: 'human carbon emissions in sector 3',
};


export const cleftRuleItem_4: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 4.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 4.',
  focusedElement: 'human carbon emissions in sector 4',
};


export const cleftRuleItem_5: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 5.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 5.',
  focusedElement: 'human carbon emissions in sector 5',
};


export const cleftRuleItem_6: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 6.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 6.',
  focusedElement: 'human carbon emissions in sector 6',
};


export const cleftRuleItem_7: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 7.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 7.',
  focusedElement: 'human carbon emissions in sector 7',
};


export const cleftRuleItem_8: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 8.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 8.',
  focusedElement: 'human carbon emissions in sector 8',
};


export const cleftRuleItem_9: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 9.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 9.',
  focusedElement: 'human carbon emissions in sector 9',
};


export const cleftRuleItem_10: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 10.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 10.',
  focusedElement: 'human carbon emissions in sector 10',
};


export const cleftRuleItem_11: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 11.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 11.',
  focusedElement: 'human carbon emissions in sector 11',
};


export const cleftRuleItem_12: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 12.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 12.',
  focusedElement: 'human carbon emissions in sector 12',
};


export const cleftRuleItem_13: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 13.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 13.',
  focusedElement: 'human carbon emissions in sector 13',
};


export const cleftRuleItem_14: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 14.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 14.',
  focusedElement: 'human carbon emissions in sector 14',
};


export const cleftRuleItem_15: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 15.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 15.',
  focusedElement: 'human carbon emissions in sector 15',
};


export const cleftRuleItem_16: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 16.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 16.',
  focusedElement: 'human carbon emissions in sector 16',
};


export const cleftRuleItem_17: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 17.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 17.',
  focusedElement: 'human carbon emissions in sector 17',
};


export const cleftRuleItem_18: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 18.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 18.',
  focusedElement: 'human carbon emissions in sector 18',
};


export const cleftRuleItem_19: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 19.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 19.',
  focusedElement: 'human carbon emissions in sector 19',
};


export const cleftRuleItem_20: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 20.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 20.',
  focusedElement: 'human carbon emissions in sector 20',
};


export const cleftRuleItem_21: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 21.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 21.',
  focusedElement: 'human carbon emissions in sector 21',
};


export const cleftRuleItem_22: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 22.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 22.',
  focusedElement: 'human carbon emissions in sector 22',
};


export const cleftRuleItem_23: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 23.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 23.',
  focusedElement: 'human carbon emissions in sector 23',
};


export const cleftRuleItem_24: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 24.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 24.',
  focusedElement: 'human carbon emissions in sector 24',
};


export const cleftRuleItem_25: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 25.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 25.',
  focusedElement: 'human carbon emissions in sector 25',
};


export const cleftRuleItem_26: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 26.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 26.',
  focusedElement: 'human carbon emissions in sector 26',
};


export const cleftRuleItem_27: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 27.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 27.',
  focusedElement: 'human carbon emissions in sector 27',
};


export const cleftRuleItem_28: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 28.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 28.',
  focusedElement: 'human carbon emissions in sector 28',
};


export const cleftRuleItem_29: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 29.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 29.',
  focusedElement: 'human carbon emissions in sector 29',
};


export const cleftRuleItem_30: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 30.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 30.',
  focusedElement: 'human carbon emissions in sector 30',
};


export const cleftRuleItem_31: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 31.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 31.',
  focusedElement: 'human carbon emissions in sector 31',
};


export const cleftRuleItem_32: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 32.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 32.',
  focusedElement: 'human carbon emissions in sector 32',
};


export const cleftRuleItem_33: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 33.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 33.',
  focusedElement: 'human carbon emissions in sector 33',
};


export const cleftRuleItem_34: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 34.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 34.',
  focusedElement: 'human carbon emissions in sector 34',
};


export const cleftRuleItem_35: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 35.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 35.',
  focusedElement: 'human carbon emissions in sector 35',
};


export const cleftRuleItem_36: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 36.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 36.',
  focusedElement: 'human carbon emissions in sector 36',
};


export const cleftRuleItem_37: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 37.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 37.',
  focusedElement: 'human carbon emissions in sector 37',
};


export const cleftRuleItem_38: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 38.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 38.',
  focusedElement: 'human carbon emissions in sector 38',
};


export const cleftRuleItem_39: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 39.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 39.',
  focusedElement: 'human carbon emissions in sector 39',
};


export const cleftRuleItem_40: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 40.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 40.',
  focusedElement: 'human carbon emissions in sector 40',
};


export const cleftRuleItem_41: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 41.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 41.',
  focusedElement: 'human carbon emissions in sector 41',
};


export const cleftRuleItem_42: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 42.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 42.',
  focusedElement: 'human carbon emissions in sector 42',
};


export const cleftRuleItem_43: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 43.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 43.',
  focusedElement: 'human carbon emissions in sector 43',
};


export const cleftRuleItem_44: CleftTransformationRule = {
  cleftType: 'IT_CLEFT',
  originalSentence: 'Human carbon emissions drive global warming trends in sector 44.',
  cleftTransformation: 'It is human carbon emissions that drive global warming trends in sector 44.',
  focusedElement: 'human carbon emissions in sector 44',
};
