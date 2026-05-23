/**
 * @file GrammarTransformationBank.ts
 * @description Interactive challenge exercises testing sentence combining and syntactic elevation.
 */
export interface GrammarTransformationChallenge {
  id: string;
  sourceSentence: string;
  targetConstraint: string; // e.g. "Begin with: Not only..."
  validAnswers: string[];
  explanation: string;
}

export const TRANSFORMATION_CHALLENGES: GrammarTransformationChallenge[] = [
  {
    id: 'gt-01',
    sourceSentence: 'The economy stagnated, and inflation also soared to double digits.',
    targetConstraint: 'Rewrite beginning with: Not only...',
    validAnswers: [
      'Not only did the economy stagnate, but inflation also soared to double digits.',
      'Not only did the economy stagnate, but inflation also soared.',
    ],
    explanation: 'Fronting "Not only" triggers auxiliary "did" insertion before subject "the economy".',
  },
];

export const transformationChallengeItem_1: GrammarTransformationChallenge = {
  id: 'gt-chall-0001',
  sourceSentence: 'If the university had secured research grants in round 1, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 1, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 1.',
};


export const transformationChallengeItem_2: GrammarTransformationChallenge = {
  id: 'gt-chall-0002',
  sourceSentence: 'If the university had secured research grants in round 2, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 2, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 2.',
};


export const transformationChallengeItem_3: GrammarTransformationChallenge = {
  id: 'gt-chall-0003',
  sourceSentence: 'If the university had secured research grants in round 3, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 3, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 3.',
};


export const transformationChallengeItem_4: GrammarTransformationChallenge = {
  id: 'gt-chall-0004',
  sourceSentence: 'If the university had secured research grants in round 4, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 4, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 4.',
};


export const transformationChallengeItem_5: GrammarTransformationChallenge = {
  id: 'gt-chall-0005',
  sourceSentence: 'If the university had secured research grants in round 5, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 5, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 5.',
};


export const transformationChallengeItem_6: GrammarTransformationChallenge = {
  id: 'gt-chall-0006',
  sourceSentence: 'If the university had secured research grants in round 6, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 6, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 6.',
};


export const transformationChallengeItem_7: GrammarTransformationChallenge = {
  id: 'gt-chall-0007',
  sourceSentence: 'If the university had secured research grants in round 7, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 7, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 7.',
};


export const transformationChallengeItem_8: GrammarTransformationChallenge = {
  id: 'gt-chall-0008',
  sourceSentence: 'If the university had secured research grants in round 8, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 8, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 8.',
};


export const transformationChallengeItem_9: GrammarTransformationChallenge = {
  id: 'gt-chall-0009',
  sourceSentence: 'If the university had secured research grants in round 9, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 9, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 9.',
};


export const transformationChallengeItem_10: GrammarTransformationChallenge = {
  id: 'gt-chall-0010',
  sourceSentence: 'If the university had secured research grants in round 10, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 10, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 10.',
};


export const transformationChallengeItem_11: GrammarTransformationChallenge = {
  id: 'gt-chall-0011',
  sourceSentence: 'If the university had secured research grants in round 11, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 11, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 11.',
};


export const transformationChallengeItem_12: GrammarTransformationChallenge = {
  id: 'gt-chall-0012',
  sourceSentence: 'If the university had secured research grants in round 12, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 12, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 12.',
};


export const transformationChallengeItem_13: GrammarTransformationChallenge = {
  id: 'gt-chall-0013',
  sourceSentence: 'If the university had secured research grants in round 13, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 13, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 13.',
};


export const transformationChallengeItem_14: GrammarTransformationChallenge = {
  id: 'gt-chall-0014',
  sourceSentence: 'If the university had secured research grants in round 14, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 14, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 14.',
};


export const transformationChallengeItem_15: GrammarTransformationChallenge = {
  id: 'gt-chall-0015',
  sourceSentence: 'If the university had secured research grants in round 15, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 15, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 15.',
};


export const transformationChallengeItem_16: GrammarTransformationChallenge = {
  id: 'gt-chall-0016',
  sourceSentence: 'If the university had secured research grants in round 16, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 16, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 16.',
};


export const transformationChallengeItem_17: GrammarTransformationChallenge = {
  id: 'gt-chall-0017',
  sourceSentence: 'If the university had secured research grants in round 17, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 17, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 17.',
};


export const transformationChallengeItem_18: GrammarTransformationChallenge = {
  id: 'gt-chall-0018',
  sourceSentence: 'If the university had secured research grants in round 18, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 18, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 18.',
};


export const transformationChallengeItem_19: GrammarTransformationChallenge = {
  id: 'gt-chall-0019',
  sourceSentence: 'If the university had secured research grants in round 19, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 19, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 19.',
};


export const transformationChallengeItem_20: GrammarTransformationChallenge = {
  id: 'gt-chall-0020',
  sourceSentence: 'If the university had secured research grants in round 20, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 20, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 20.',
};


export const transformationChallengeItem_21: GrammarTransformationChallenge = {
  id: 'gt-chall-0021',
  sourceSentence: 'If the university had secured research grants in round 21, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 21, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 21.',
};


export const transformationChallengeItem_22: GrammarTransformationChallenge = {
  id: 'gt-chall-0022',
  sourceSentence: 'If the university had secured research grants in round 22, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 22, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 22.',
};


export const transformationChallengeItem_23: GrammarTransformationChallenge = {
  id: 'gt-chall-0023',
  sourceSentence: 'If the university had secured research grants in round 23, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 23, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 23.',
};


export const transformationChallengeItem_24: GrammarTransformationChallenge = {
  id: 'gt-chall-0024',
  sourceSentence: 'If the university had secured research grants in round 24, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 24, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 24.',
};


export const transformationChallengeItem_25: GrammarTransformationChallenge = {
  id: 'gt-chall-0025',
  sourceSentence: 'If the university had secured research grants in round 25, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 25, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 25.',
};


export const transformationChallengeItem_26: GrammarTransformationChallenge = {
  id: 'gt-chall-0026',
  sourceSentence: 'If the university had secured research grants in round 26, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 26, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 26.',
};


export const transformationChallengeItem_27: GrammarTransformationChallenge = {
  id: 'gt-chall-0027',
  sourceSentence: 'If the university had secured research grants in round 27, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 27, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 27.',
};


export const transformationChallengeItem_28: GrammarTransformationChallenge = {
  id: 'gt-chall-0028',
  sourceSentence: 'If the university had secured research grants in round 28, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 28, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 28.',
};


export const transformationChallengeItem_29: GrammarTransformationChallenge = {
  id: 'gt-chall-0029',
  sourceSentence: 'If the university had secured research grants in round 29, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 29, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 29.',
};


export const transformationChallengeItem_30: GrammarTransformationChallenge = {
  id: 'gt-chall-0030',
  sourceSentence: 'If the university had secured research grants in round 30, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 30, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 30.',
};


export const transformationChallengeItem_31: GrammarTransformationChallenge = {
  id: 'gt-chall-0031',
  sourceSentence: 'If the university had secured research grants in round 31, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 31, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 31.',
};


export const transformationChallengeItem_32: GrammarTransformationChallenge = {
  id: 'gt-chall-0032',
  sourceSentence: 'If the university had secured research grants in round 32, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 32, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 32.',
};


export const transformationChallengeItem_33: GrammarTransformationChallenge = {
  id: 'gt-chall-0033',
  sourceSentence: 'If the university had secured research grants in round 33, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 33, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 33.',
};


export const transformationChallengeItem_34: GrammarTransformationChallenge = {
  id: 'gt-chall-0034',
  sourceSentence: 'If the university had secured research grants in round 34, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 34, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 34.',
};


export const transformationChallengeItem_35: GrammarTransformationChallenge = {
  id: 'gt-chall-0035',
  sourceSentence: 'If the university had secured research grants in round 35, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 35, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 35.',
};


export const transformationChallengeItem_36: GrammarTransformationChallenge = {
  id: 'gt-chall-0036',
  sourceSentence: 'If the university had secured research grants in round 36, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 36, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 36.',
};


export const transformationChallengeItem_37: GrammarTransformationChallenge = {
  id: 'gt-chall-0037',
  sourceSentence: 'If the university had secured research grants in round 37, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 37, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 37.',
};


export const transformationChallengeItem_38: GrammarTransformationChallenge = {
  id: 'gt-chall-0038',
  sourceSentence: 'If the university had secured research grants in round 38, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 38, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 38.',
};


export const transformationChallengeItem_39: GrammarTransformationChallenge = {
  id: 'gt-chall-0039',
  sourceSentence: 'If the university had secured research grants in round 39, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 39, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 39.',
};


export const transformationChallengeItem_40: GrammarTransformationChallenge = {
  id: 'gt-chall-0040',
  sourceSentence: 'If the university had secured research grants in round 40, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 40, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 40.',
};


export const transformationChallengeItem_41: GrammarTransformationChallenge = {
  id: 'gt-chall-0041',
  sourceSentence: 'If the university had secured research grants in round 41, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 41, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 41.',
};


export const transformationChallengeItem_42: GrammarTransformationChallenge = {
  id: 'gt-chall-0042',
  sourceSentence: 'If the university had secured research grants in round 42, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 42, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 42.',
};


export const transformationChallengeItem_43: GrammarTransformationChallenge = {
  id: 'gt-chall-0043',
  sourceSentence: 'If the university had secured research grants in round 43, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 43, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 43.',
};


export const transformationChallengeItem_44: GrammarTransformationChallenge = {
  id: 'gt-chall-0044',
  sourceSentence: 'If the university had secured research grants in round 44, it would have hired more staff.',
  targetConstraint: 'Rewrite using inverted conditional without "if":',
  validAnswers: [
    'Had the university secured research grants in round 44, it would have hired more staff.',
  ],
  explanation: 'Invert auxiliary "Had" with subject "the university" in third conditional clause 44.',
};
