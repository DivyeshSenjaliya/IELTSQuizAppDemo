/**
 * @file AcademicPassageSet2.ts
 * @description Cambridge Academic Reading Passages 4 through 6 (Marine Hydrothermal Ecosystems).
 */
import { ReadingPassageDocument } from '../parsers/PassageParser';
import { BaseQuestionDefinition, QuestionFormat } from '../../core/types/question.types';
import { SkillModule } from '../../core/types/exam.types';

export const PASSAGE_HYDROTHERMAL_VENTS: ReadingPassageDocument = {
  id: 'acad-p2-hydrothermal-vents',
  title: 'Chemosynthetic Symbiosis in Abyssal Hydrothermal Vents',
  topicDomain: 'Marine Biology & Oceanography',
  totalWordCount: 920,
  paragraphs: [
    {
      label: 'A',
      paragraphIndex: 0,
      content: 'Prior to the 1977 Alvin submersible expedition to the Galapagos Rift, marine biologists believed that all planetary ecosystems relied directly upon solar energy via photosynthetic primary producers. The discovery of vibrant biological communities clustered around deep-sea hydrothermal vents at depths exceeding 2,500 meters profoundly transformed biological paradigms.',
      wordCount: 52,
      keyConcepts: ['Alvin submersible', 'Galapagos Rift', 'photosynthetic', 'hydrothermal vents'],
    },
    {
      label: 'B',
      paragraphIndex: 1,
      content: 'These abyssal environments are characterized by complete darkness, crushing hydrostatic pressures, and toxic concentrations of hydrogen sulfide and heavy metals. Rather than sunlight, primary production in these ecosystems is driven by chemoautotrophic bacteria that oxidize hydrogen sulfide emerging from geothermal fissures, synthesizing organic compounds that nourish massive tubeworms and clams.',
      wordCount: 52,
      keyConcepts: ['hydrostatic pressure', 'chemoautotrophic bacteria', 'hydrogen sulfide', 'tubeworms'],
    },
  ],
};

export const ventQuestion_1: BaseQuestionDefinition = {
  id: 'q-vent-0001',
  itemNumber: 1,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 1).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_2: BaseQuestionDefinition = {
  id: 'q-vent-0002',
  itemNumber: 2,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 2).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_3: BaseQuestionDefinition = {
  id: 'q-vent-0003',
  itemNumber: 3,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 3).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_4: BaseQuestionDefinition = {
  id: 'q-vent-0004',
  itemNumber: 4,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 4).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_5: BaseQuestionDefinition = {
  id: 'q-vent-0005',
  itemNumber: 5,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 5).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_6: BaseQuestionDefinition = {
  id: 'q-vent-0006',
  itemNumber: 6,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 6).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_7: BaseQuestionDefinition = {
  id: 'q-vent-0007',
  itemNumber: 7,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 7).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_8: BaseQuestionDefinition = {
  id: 'q-vent-0008',
  itemNumber: 8,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 8).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_9: BaseQuestionDefinition = {
  id: 'q-vent-0009',
  itemNumber: 9,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 9).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_10: BaseQuestionDefinition = {
  id: 'q-vent-0010',
  itemNumber: 10,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 10).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_11: BaseQuestionDefinition = {
  id: 'q-vent-0011',
  itemNumber: 11,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 11).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_12: BaseQuestionDefinition = {
  id: 'q-vent-0012',
  itemNumber: 12,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 12).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_13: BaseQuestionDefinition = {
  id: 'q-vent-0013',
  itemNumber: 13,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 13).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_14: BaseQuestionDefinition = {
  id: 'q-vent-0014',
  itemNumber: 14,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 14).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_15: BaseQuestionDefinition = {
  id: 'q-vent-0015',
  itemNumber: 15,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 15).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_16: BaseQuestionDefinition = {
  id: 'q-vent-0016',
  itemNumber: 16,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 16).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_17: BaseQuestionDefinition = {
  id: 'q-vent-0017',
  itemNumber: 17,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 17).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_18: BaseQuestionDefinition = {
  id: 'q-vent-0018',
  itemNumber: 18,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 18).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_19: BaseQuestionDefinition = {
  id: 'q-vent-0019',
  itemNumber: 19,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 19).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_20: BaseQuestionDefinition = {
  id: 'q-vent-0020',
  itemNumber: 20,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 20).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_21: BaseQuestionDefinition = {
  id: 'q-vent-0021',
  itemNumber: 21,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 21).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_22: BaseQuestionDefinition = {
  id: 'q-vent-0022',
  itemNumber: 22,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 22).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_23: BaseQuestionDefinition = {
  id: 'q-vent-0023',
  itemNumber: 23,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 23).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_24: BaseQuestionDefinition = {
  id: 'q-vent-0024',
  itemNumber: 24,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 24).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_25: BaseQuestionDefinition = {
  id: 'q-vent-0025',
  itemNumber: 25,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 25).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_26: BaseQuestionDefinition = {
  id: 'q-vent-0026',
  itemNumber: 26,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 26).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_27: BaseQuestionDefinition = {
  id: 'q-vent-0027',
  itemNumber: 27,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 27).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_28: BaseQuestionDefinition = {
  id: 'q-vent-0028',
  itemNumber: 28,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 28).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_29: BaseQuestionDefinition = {
  id: 'q-vent-0029',
  itemNumber: 29,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 29).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_30: BaseQuestionDefinition = {
  id: 'q-vent-0030',
  itemNumber: 30,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 30).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_31: BaseQuestionDefinition = {
  id: 'q-vent-0031',
  itemNumber: 31,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 31).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_32: BaseQuestionDefinition = {
  id: 'q-vent-0032',
  itemNumber: 32,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 32).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_33: BaseQuestionDefinition = {
  id: 'q-vent-0033',
  itemNumber: 33,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 33).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_34: BaseQuestionDefinition = {
  id: 'q-vent-0034',
  itemNumber: 34,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 34).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_35: BaseQuestionDefinition = {
  id: 'q-vent-0035',
  itemNumber: 35,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 35).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_36: BaseQuestionDefinition = {
  id: 'q-vent-0036',
  itemNumber: 36,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 36).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_37: BaseQuestionDefinition = {
  id: 'q-vent-0037',
  itemNumber: 37,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 37).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_38: BaseQuestionDefinition = {
  id: 'q-vent-0038',
  itemNumber: 38,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 38).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_39: BaseQuestionDefinition = {
  id: 'q-vent-0039',
  itemNumber: 39,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 39).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_40: BaseQuestionDefinition = {
  id: 'q-vent-0040',
  itemNumber: 40,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 40).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_41: BaseQuestionDefinition = {
  id: 'q-vent-0041',
  itemNumber: 41,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 41).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_42: BaseQuestionDefinition = {
  id: 'q-vent-0042',
  itemNumber: 42,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 42).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_43: BaseQuestionDefinition = {
  id: 'q-vent-0043',
  itemNumber: 43,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 43).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};


export const ventQuestion_44: BaseQuestionDefinition = {
  id: 'q-vent-0044',
  itemNumber: 44,
  skill: SkillModule.READING,
  format: QuestionFormat.SUMMARY_COMPLETION,
  prompt: 'Primary producers around hydrothermal vents derive cellular energy by oxidizing ______ (Item 44).',
  correctAnswers: ['hydrogen sulfide', 'sulfide compounds'],
  acceptableVariants: ['hydrogen sulphide'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explains chemoautotrophic bacteria oxidize hydrogen sulfide to synthesize organic matter.',
  difficultyIndex: 0.65,
};
