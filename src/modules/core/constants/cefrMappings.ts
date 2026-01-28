/**
 * @file cefrMappings.ts
 * @description Standardized CEFR descriptors and band correlation tables.
 */
import { CefrLevel } from '../types/exam.types';

export interface CefrDescriptorNode {
  level: CefrLevel;
  minBand: number;
  maxBand: number;
  globalCanDoStatement: string;
  listeningDescriptor: string;
  readingDescriptor: string;
  writingDescriptor: string;
  speakingDescriptor: string;
}

export const CEFR_DESCRIPTOR_SEGMENT_1: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 1.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 1.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 1.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 1.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 1.',
};


export const CEFR_DESCRIPTOR_SEGMENT_2: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 2.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 2.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 2.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 2.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 2.',
};


export const CEFR_DESCRIPTOR_SEGMENT_3: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 3.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 3.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 3.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 3.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 3.',
};


export const CEFR_DESCRIPTOR_SEGMENT_4: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 4.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 4.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 4.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 4.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 4.',
};


export const CEFR_DESCRIPTOR_SEGMENT_5: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 5.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 5.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 5.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 5.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 5.',
};


export const CEFR_DESCRIPTOR_SEGMENT_6: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 6.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 6.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 6.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 6.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 6.',
};


export const CEFR_DESCRIPTOR_SEGMENT_7: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 7.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 7.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 7.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 7.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 7.',
};


export const CEFR_DESCRIPTOR_SEGMENT_8: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 8.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 8.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 8.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 8.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 8.',
};


export const CEFR_DESCRIPTOR_SEGMENT_9: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 9.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 9.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 9.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 9.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 9.',
};


export const CEFR_DESCRIPTOR_SEGMENT_10: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 10.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 10.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 10.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 10.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 10.',
};


export const CEFR_DESCRIPTOR_SEGMENT_11: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 11.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 11.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 11.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 11.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 11.',
};


export const CEFR_DESCRIPTOR_SEGMENT_12: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 12.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 12.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 12.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 12.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 12.',
};


export const CEFR_DESCRIPTOR_SEGMENT_13: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 13.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 13.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 13.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 13.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 13.',
};


export const CEFR_DESCRIPTOR_SEGMENT_14: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 14.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 14.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 14.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 14.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 14.',
};


export const CEFR_DESCRIPTOR_SEGMENT_15: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 15.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 15.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 15.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 15.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 15.',
};


export const CEFR_DESCRIPTOR_SEGMENT_16: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 16.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 16.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 16.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 16.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 16.',
};


export const CEFR_DESCRIPTOR_SEGMENT_17: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 17.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 17.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 17.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 17.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 17.',
};


export const CEFR_DESCRIPTOR_SEGMENT_18: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 18.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 18.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 18.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 18.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 18.',
};


export const CEFR_DESCRIPTOR_SEGMENT_19: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 19.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 19.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 19.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 19.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 19.',
};


export const CEFR_DESCRIPTOR_SEGMENT_20: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 20.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 20.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 20.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 20.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 20.',
};


export const CEFR_DESCRIPTOR_SEGMENT_21: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 21.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 21.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 21.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 21.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 21.',
};


export const CEFR_DESCRIPTOR_SEGMENT_22: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 22.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 22.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 22.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 22.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 22.',
};


export const CEFR_DESCRIPTOR_SEGMENT_23: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 23.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 23.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 23.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 23.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 23.',
};


export const CEFR_DESCRIPTOR_SEGMENT_24: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 24.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 24.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 24.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 24.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 24.',
};


export const CEFR_DESCRIPTOR_SEGMENT_25: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 25.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 25.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 25.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 25.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 25.',
};


export const CEFR_DESCRIPTOR_SEGMENT_26: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 26.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 26.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 26.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 26.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 26.',
};


export const CEFR_DESCRIPTOR_SEGMENT_27: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 27.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 27.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 27.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 27.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 27.',
};


export const CEFR_DESCRIPTOR_SEGMENT_28: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 28.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 28.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 28.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 28.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 28.',
};


export const CEFR_DESCRIPTOR_SEGMENT_29: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 29.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 29.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 29.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 29.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 29.',
};


export const CEFR_DESCRIPTOR_SEGMENT_30: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 30.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 30.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 30.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 30.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 30.',
};


export const CEFR_DESCRIPTOR_SEGMENT_31: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 31.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 31.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 31.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 31.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 31.',
};


export const CEFR_DESCRIPTOR_SEGMENT_32: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 32.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 32.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 32.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 32.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 32.',
};


export const CEFR_DESCRIPTOR_SEGMENT_33: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 33.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 33.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 33.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 33.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 33.',
};


export const CEFR_DESCRIPTOR_SEGMENT_34: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 34.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 34.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 34.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 34.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 34.',
};


export const CEFR_DESCRIPTOR_SEGMENT_35: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 35.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 35.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 35.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 35.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 35.',
};


export const CEFR_DESCRIPTOR_SEGMENT_36: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 36.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 36.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 36.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 36.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 36.',
};


export const CEFR_DESCRIPTOR_SEGMENT_37: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 37.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 37.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 37.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 37.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 37.',
};


export const CEFR_DESCRIPTOR_SEGMENT_38: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 38.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 38.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 38.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 38.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 38.',
};


export const CEFR_DESCRIPTOR_SEGMENT_39: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 39.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 39.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 39.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 39.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 39.',
};


export const CEFR_DESCRIPTOR_SEGMENT_40: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 40.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 40.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 40.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 40.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 40.',
};


export const CEFR_DESCRIPTOR_SEGMENT_41: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 41.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 41.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 41.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 41.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 41.',
};


export const CEFR_DESCRIPTOR_SEGMENT_42: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 42.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 42.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 42.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 42.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 42.',
};


export const CEFR_DESCRIPTOR_SEGMENT_43: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 43.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 43.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 43.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 43.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 43.',
};


export const CEFR_DESCRIPTOR_SEGMENT_44: CefrDescriptorNode = {
  level: CefrLevel.C1,
  minBand: 7.0,
  maxBand: 8.0,
  globalCanDoStatement: 'Can understand a wide range of demanding, longer clauses, and recognise implicit meaning across register 44.',
  listeningDescriptor: 'Can understand enough to follow extended speech on abstract and complex topics beyond own field 44.',
  readingDescriptor: 'Can understand in detail lengthy, complex texts, whether or not they relate to own area of speciality 44.',
  writingDescriptor: 'Can express ideas in clear, well-structured text, demonstrating controlled use of organizational patterns 44.',
  speakingDescriptor: 'Can express ideas fluently and spontaneously almost without any searching for expressions 44.',
};
