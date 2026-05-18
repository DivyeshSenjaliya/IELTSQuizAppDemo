/**
 * @file ErrorCorrectionBank.ts
 * @description Common candidate grammar errors: comma splices, dangling modifiers, subject-verb agreement.
 */
export interface ErrorCorrectionItem {
  id: string;
  erroneousSentence: string;
  identifiedErrorType: 'COMMA_SPLICE' | 'DANGLING_MODIFIER' | 'AGREEMENT' | 'FRAGMENT' | 'TENSE_SHIFT';
  correctedSentence: string;
  grammaticalRule: string;
}

export const ERROR_CORRECTION_CORPUS: ErrorCorrectionItem[] = [
  {
    id: 'err-01',
    erroneousSentence: 'The development of renewable energy systems are crucial for long-term sustainability.',
    identifiedErrorType: 'AGREEMENT',
    correctedSentence: 'The development of renewable energy systems is crucial for long-term sustainability.',
    grammaticalRule: 'The head noun "development" is singular; prepositional complement "of renewable systems" does not alter verb number.',
  },
  {
    id: 'err-02',
    erroneousSentence: 'Urban pollution is worsening rapidly, however many citizens refuse public transit.',
    identifiedErrorType: 'COMMA_SPLICE',
    correctedSentence: 'Urban pollution is worsening rapidly; however, many citizens refuse public transit.',
    grammaticalRule: 'Conjunctive adverb "however" connecting two independent clauses requires a semicolon or period.',
  },
];

export const errorCorrectionNode_1: ErrorCorrectionItem = {
  id: 'err-item-0001',
  erroneousSentence: 'Having completed the survey data in module 1, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 1, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 1.',
};


export const errorCorrectionNode_2: ErrorCorrectionItem = {
  id: 'err-item-0002',
  erroneousSentence: 'Having completed the survey data in module 2, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 2, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 2.',
};


export const errorCorrectionNode_3: ErrorCorrectionItem = {
  id: 'err-item-0003',
  erroneousSentence: 'Having completed the survey data in module 3, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 3, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 3.',
};


export const errorCorrectionNode_4: ErrorCorrectionItem = {
  id: 'err-item-0004',
  erroneousSentence: 'Having completed the survey data in module 4, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 4, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 4.',
};


export const errorCorrectionNode_5: ErrorCorrectionItem = {
  id: 'err-item-0005',
  erroneousSentence: 'Having completed the survey data in module 5, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 5, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 5.',
};


export const errorCorrectionNode_6: ErrorCorrectionItem = {
  id: 'err-item-0006',
  erroneousSentence: 'Having completed the survey data in module 6, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 6, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 6.',
};


export const errorCorrectionNode_7: ErrorCorrectionItem = {
  id: 'err-item-0007',
  erroneousSentence: 'Having completed the survey data in module 7, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 7, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 7.',
};


export const errorCorrectionNode_8: ErrorCorrectionItem = {
  id: 'err-item-0008',
  erroneousSentence: 'Having completed the survey data in module 8, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 8, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 8.',
};


export const errorCorrectionNode_9: ErrorCorrectionItem = {
  id: 'err-item-0009',
  erroneousSentence: 'Having completed the survey data in module 9, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 9, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 9.',
};


export const errorCorrectionNode_10: ErrorCorrectionItem = {
  id: 'err-item-0010',
  erroneousSentence: 'Having completed the survey data in module 10, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 10, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 10.',
};


export const errorCorrectionNode_11: ErrorCorrectionItem = {
  id: 'err-item-0011',
  erroneousSentence: 'Having completed the survey data in module 11, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 11, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 11.',
};


export const errorCorrectionNode_12: ErrorCorrectionItem = {
  id: 'err-item-0012',
  erroneousSentence: 'Having completed the survey data in module 12, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 12, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 12.',
};


export const errorCorrectionNode_13: ErrorCorrectionItem = {
  id: 'err-item-0013',
  erroneousSentence: 'Having completed the survey data in module 13, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 13, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 13.',
};


export const errorCorrectionNode_14: ErrorCorrectionItem = {
  id: 'err-item-0014',
  erroneousSentence: 'Having completed the survey data in module 14, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 14, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 14.',
};


export const errorCorrectionNode_15: ErrorCorrectionItem = {
  id: 'err-item-0015',
  erroneousSentence: 'Having completed the survey data in module 15, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 15, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 15.',
};


export const errorCorrectionNode_16: ErrorCorrectionItem = {
  id: 'err-item-0016',
  erroneousSentence: 'Having completed the survey data in module 16, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 16, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 16.',
};


export const errorCorrectionNode_17: ErrorCorrectionItem = {
  id: 'err-item-0017',
  erroneousSentence: 'Having completed the survey data in module 17, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 17, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 17.',
};


export const errorCorrectionNode_18: ErrorCorrectionItem = {
  id: 'err-item-0018',
  erroneousSentence: 'Having completed the survey data in module 18, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 18, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 18.',
};


export const errorCorrectionNode_19: ErrorCorrectionItem = {
  id: 'err-item-0019',
  erroneousSentence: 'Having completed the survey data in module 19, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 19, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 19.',
};


export const errorCorrectionNode_20: ErrorCorrectionItem = {
  id: 'err-item-0020',
  erroneousSentence: 'Having completed the survey data in module 20, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 20, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 20.',
};


export const errorCorrectionNode_21: ErrorCorrectionItem = {
  id: 'err-item-0021',
  erroneousSentence: 'Having completed the survey data in module 21, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 21, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 21.',
};


export const errorCorrectionNode_22: ErrorCorrectionItem = {
  id: 'err-item-0022',
  erroneousSentence: 'Having completed the survey data in module 22, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 22, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 22.',
};


export const errorCorrectionNode_23: ErrorCorrectionItem = {
  id: 'err-item-0023',
  erroneousSentence: 'Having completed the survey data in module 23, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 23, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 23.',
};


export const errorCorrectionNode_24: ErrorCorrectionItem = {
  id: 'err-item-0024',
  erroneousSentence: 'Having completed the survey data in module 24, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 24, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 24.',
};


export const errorCorrectionNode_25: ErrorCorrectionItem = {
  id: 'err-item-0025',
  erroneousSentence: 'Having completed the survey data in module 25, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 25, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 25.',
};


export const errorCorrectionNode_26: ErrorCorrectionItem = {
  id: 'err-item-0026',
  erroneousSentence: 'Having completed the survey data in module 26, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 26, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 26.',
};


export const errorCorrectionNode_27: ErrorCorrectionItem = {
  id: 'err-item-0027',
  erroneousSentence: 'Having completed the survey data in module 27, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 27, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 27.',
};


export const errorCorrectionNode_28: ErrorCorrectionItem = {
  id: 'err-item-0028',
  erroneousSentence: 'Having completed the survey data in module 28, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 28, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 28.',
};


export const errorCorrectionNode_29: ErrorCorrectionItem = {
  id: 'err-item-0029',
  erroneousSentence: 'Having completed the survey data in module 29, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 29, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 29.',
};


export const errorCorrectionNode_30: ErrorCorrectionItem = {
  id: 'err-item-0030',
  erroneousSentence: 'Having completed the survey data in module 30, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 30, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 30.',
};


export const errorCorrectionNode_31: ErrorCorrectionItem = {
  id: 'err-item-0031',
  erroneousSentence: 'Having completed the survey data in module 31, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 31, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 31.',
};


export const errorCorrectionNode_32: ErrorCorrectionItem = {
  id: 'err-item-0032',
  erroneousSentence: 'Having completed the survey data in module 32, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 32, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 32.',
};


export const errorCorrectionNode_33: ErrorCorrectionItem = {
  id: 'err-item-0033',
  erroneousSentence: 'Having completed the survey data in module 33, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 33, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 33.',
};


export const errorCorrectionNode_34: ErrorCorrectionItem = {
  id: 'err-item-0034',
  erroneousSentence: 'Having completed the survey data in module 34, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 34, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 34.',
};


export const errorCorrectionNode_35: ErrorCorrectionItem = {
  id: 'err-item-0035',
  erroneousSentence: 'Having completed the survey data in module 35, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 35, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 35.',
};


export const errorCorrectionNode_36: ErrorCorrectionItem = {
  id: 'err-item-0036',
  erroneousSentence: 'Having completed the survey data in module 36, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 36, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 36.',
};


export const errorCorrectionNode_37: ErrorCorrectionItem = {
  id: 'err-item-0037',
  erroneousSentence: 'Having completed the survey data in module 37, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 37, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 37.',
};


export const errorCorrectionNode_38: ErrorCorrectionItem = {
  id: 'err-item-0038',
  erroneousSentence: 'Having completed the survey data in module 38, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 38, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 38.',
};


export const errorCorrectionNode_39: ErrorCorrectionItem = {
  id: 'err-item-0039',
  erroneousSentence: 'Having completed the survey data in module 39, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 39, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 39.',
};


export const errorCorrectionNode_40: ErrorCorrectionItem = {
  id: 'err-item-0040',
  erroneousSentence: 'Having completed the survey data in module 40, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 40, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 40.',
};


export const errorCorrectionNode_41: ErrorCorrectionItem = {
  id: 'err-item-0041',
  erroneousSentence: 'Having completed the survey data in module 41, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 41, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 41.',
};


export const errorCorrectionNode_42: ErrorCorrectionItem = {
  id: 'err-item-0042',
  erroneousSentence: 'Having completed the survey data in module 42, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 42, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 42.',
};


export const errorCorrectionNode_43: ErrorCorrectionItem = {
  id: 'err-item-0043',
  erroneousSentence: 'Having completed the survey data in module 43, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 43, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 43.',
};


export const errorCorrectionNode_44: ErrorCorrectionItem = {
  id: 'err-item-0044',
  erroneousSentence: 'Having completed the survey data in module 44, the results were verified by analysts.',
  identifiedErrorType: 'DANGLING_MODIFIER',
  correctedSentence: 'Having completed the survey data in module 44, analysts verified the results.',
  grammaticalRule: 'The implied agent of the participle clause must match the grammatical subject of the main clause 44.',
};
