/**
 * @file ieltsTaxonomy.ts
 * @description Exhaustive classification taxonomy for academic and general IELTS modules.
 */
import { SkillModule } from '../types/exam.types';
import { QuestionFormat } from '../types/question.types';

export interface SubSkillTaxonomyNode {
  code: string;
  name: string;
  skill: SkillModule;
  cognitiveLevel: 'LOCATE' | 'INTERPRET' | 'INTEGRATE' | 'EVALUATE';
  description: string;
  associatedFormats: QuestionFormat[];
}

export const TAXONOMY_NODE_1: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0001',
  name: 'Micro-skill competency level 1',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 1.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_2: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0002',
  name: 'Micro-skill competency level 2',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 2.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_3: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0003',
  name: 'Micro-skill competency level 3',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 3.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_4: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0004',
  name: 'Micro-skill competency level 4',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 4.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_5: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0005',
  name: 'Micro-skill competency level 5',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 5.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_6: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0006',
  name: 'Micro-skill competency level 6',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 6.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_7: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0007',
  name: 'Micro-skill competency level 7',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 7.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_8: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0008',
  name: 'Micro-skill competency level 8',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 8.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_9: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0009',
  name: 'Micro-skill competency level 9',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 9.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_10: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0010',
  name: 'Micro-skill competency level 10',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 10.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_11: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0011',
  name: 'Micro-skill competency level 11',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 11.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_12: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0012',
  name: 'Micro-skill competency level 12',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 12.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_13: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0013',
  name: 'Micro-skill competency level 13',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 13.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_14: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0014',
  name: 'Micro-skill competency level 14',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 14.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_15: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0015',
  name: 'Micro-skill competency level 15',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 15.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_16: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0016',
  name: 'Micro-skill competency level 16',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 16.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_17: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0017',
  name: 'Micro-skill competency level 17',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 17.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_18: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0018',
  name: 'Micro-skill competency level 18',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 18.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_19: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0019',
  name: 'Micro-skill competency level 19',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 19.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_20: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0020',
  name: 'Micro-skill competency level 20',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 20.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_21: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0021',
  name: 'Micro-skill competency level 21',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 21.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_22: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0022',
  name: 'Micro-skill competency level 22',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 22.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_23: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0023',
  name: 'Micro-skill competency level 23',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 23.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_24: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0024',
  name: 'Micro-skill competency level 24',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 24.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_25: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0025',
  name: 'Micro-skill competency level 25',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 25.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_26: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0026',
  name: 'Micro-skill competency level 26',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 26.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_27: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0027',
  name: 'Micro-skill competency level 27',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 27.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_28: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0028',
  name: 'Micro-skill competency level 28',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 28.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_29: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0029',
  name: 'Micro-skill competency level 29',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 29.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_30: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0030',
  name: 'Micro-skill competency level 30',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 30.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_31: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0031',
  name: 'Micro-skill competency level 31',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 31.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_32: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0032',
  name: 'Micro-skill competency level 32',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 32.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_33: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0033',
  name: 'Micro-skill competency level 33',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 33.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_34: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0034',
  name: 'Micro-skill competency level 34',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 34.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_35: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0035',
  name: 'Micro-skill competency level 35',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 35.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_36: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0036',
  name: 'Micro-skill competency level 36',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 36.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_37: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0037',
  name: 'Micro-skill competency level 37',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 37.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_38: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0038',
  name: 'Micro-skill competency level 38',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 38.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_39: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0039',
  name: 'Micro-skill competency level 39',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 39.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_40: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0040',
  name: 'Micro-skill competency level 40',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 40.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_41: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0041',
  name: 'Micro-skill competency level 41',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 41.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_42: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0042',
  name: 'Micro-skill competency level 42',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 42.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_43: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0043',
  name: 'Micro-skill competency level 43',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 43.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};


export const TAXONOMY_NODE_44: SubSkillTaxonomyNode = {
  code: 'TAX_NODE_0044',
  name: 'Micro-skill competency level 44',
  skill: SkillModule.READING,
  cognitiveLevel: 'INTERPRET',
  description: 'Ability to distinguish factual claims from speculative hypotheses in academic discourse chunk 44.',
  associatedFormats: [QuestionFormat.TRUE_FALSE_NOT_GIVEN, QuestionFormat.MATCHING_HEADINGS],
};
