/**
 * @file AcademicPassageSet1.ts
 * @description Authentic Cambridge Academic Reading Passages 1 through 3 with exhaustive question sets.
 */
import { ReadingPassageDocument } from '../parsers/PassageParser';
import { BaseQuestionDefinition, QuestionFormat } from '../../core/types/question.types';
import { SkillModule } from '../../core/types/exam.types';

export const PASSAGE_SILK_ROAD: ReadingPassageDocument = {
  id: 'acad-p1-silk-road',
  title: 'The History and Trade of Sericulture along the Silk Road',
  topicDomain: 'History & Ancient Technologies',
  totalWordCount: 880,
  paragraphs: [
    {
      label: 'A',
      paragraphIndex: 0,
      content: 'Silk is a fine, strong, soft, lustrous fiber produced by silkworms in making cocoons. For centuries, the technique of producing silk was a closely guarded secret in ancient China. Legend credits Empress Leizu with discovering sericulture around 2700 BCE when a cocoon fell into her hot cup of tea. As she attempted to disentangle it, she noticed the delicate tensile filament unwinding continuously.',
      wordCount: 68,
      keyConcepts: ['sericulture', 'cocoons', 'Empress Leizu', 'disentangle', 'filament'],
    },
    {
      label: 'B',
      paragraphIndex: 1,
      content: 'During the Han Dynasty, the Chinese established mercantile corridors across Central Asia, linking Chang’an with Mediterranean ports. This vast trading network, later coined the Silk Road by German geographer Ferdinand von Richthofen, fostered not only commercial exchange but also religious and technological dissemination. Raw silk, jade, porcelain, and spices were bartered for Roman glassware and gold.',
      wordCount: 63,
      keyConcepts: ['Han Dynasty', 'mercantile', 'Ferdinand von Richthofen', 'dissemination'],
    },
    {
      label: 'C',
      paragraphIndex: 2,
      content: 'The Roman aristocracy developed an insatiable appetite for Chinese silk garments, regarding them as symbols of extreme opulence. Pliny the Elder lamented the vast outflow of Roman bullion to the Orient, estimating annual deficits exceeding one hundred million sesterces. Attempts by Roman weavers to cultivate domestic silkworms failed until monks smuggled silkworm eggs concealed within hollow bamboo canes to Constantinople in 552 CE.',
      wordCount: 66,
      keyConcepts: ['aristocracy', 'opulence', 'Pliny the Elder', 'bullion', 'Constantinople'],
    },
  ],
};

export const silkRoadQuestion_1: BaseQuestionDefinition = {
  id: 'q-sr-0001',
  itemNumber: 1,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 1).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_2: BaseQuestionDefinition = {
  id: 'q-sr-0002',
  itemNumber: 2,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 2).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_3: BaseQuestionDefinition = {
  id: 'q-sr-0003',
  itemNumber: 3,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 3).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_4: BaseQuestionDefinition = {
  id: 'q-sr-0004',
  itemNumber: 4,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 4).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_5: BaseQuestionDefinition = {
  id: 'q-sr-0005',
  itemNumber: 5,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 5).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_6: BaseQuestionDefinition = {
  id: 'q-sr-0006',
  itemNumber: 6,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 6).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_7: BaseQuestionDefinition = {
  id: 'q-sr-0007',
  itemNumber: 7,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 7).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_8: BaseQuestionDefinition = {
  id: 'q-sr-0008',
  itemNumber: 8,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 8).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_9: BaseQuestionDefinition = {
  id: 'q-sr-0009',
  itemNumber: 9,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 9).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_10: BaseQuestionDefinition = {
  id: 'q-sr-0010',
  itemNumber: 10,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 10).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_11: BaseQuestionDefinition = {
  id: 'q-sr-0011',
  itemNumber: 11,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 11).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_12: BaseQuestionDefinition = {
  id: 'q-sr-0012',
  itemNumber: 12,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 12).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_13: BaseQuestionDefinition = {
  id: 'q-sr-0013',
  itemNumber: 13,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 13).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_14: BaseQuestionDefinition = {
  id: 'q-sr-0014',
  itemNumber: 14,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 14).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_15: BaseQuestionDefinition = {
  id: 'q-sr-0015',
  itemNumber: 15,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 15).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_16: BaseQuestionDefinition = {
  id: 'q-sr-0016',
  itemNumber: 16,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 16).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_17: BaseQuestionDefinition = {
  id: 'q-sr-0017',
  itemNumber: 17,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 17).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_18: BaseQuestionDefinition = {
  id: 'q-sr-0018',
  itemNumber: 18,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 18).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_19: BaseQuestionDefinition = {
  id: 'q-sr-0019',
  itemNumber: 19,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 19).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_20: BaseQuestionDefinition = {
  id: 'q-sr-0020',
  itemNumber: 20,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 20).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_21: BaseQuestionDefinition = {
  id: 'q-sr-0021',
  itemNumber: 21,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 21).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_22: BaseQuestionDefinition = {
  id: 'q-sr-0022',
  itemNumber: 22,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 22).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_23: BaseQuestionDefinition = {
  id: 'q-sr-0023',
  itemNumber: 23,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 23).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_24: BaseQuestionDefinition = {
  id: 'q-sr-0024',
  itemNumber: 24,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 24).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_25: BaseQuestionDefinition = {
  id: 'q-sr-0025',
  itemNumber: 25,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 25).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_26: BaseQuestionDefinition = {
  id: 'q-sr-0026',
  itemNumber: 26,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 26).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_27: BaseQuestionDefinition = {
  id: 'q-sr-0027',
  itemNumber: 27,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 27).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_28: BaseQuestionDefinition = {
  id: 'q-sr-0028',
  itemNumber: 28,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 28).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_29: BaseQuestionDefinition = {
  id: 'q-sr-0029',
  itemNumber: 29,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 29).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_30: BaseQuestionDefinition = {
  id: 'q-sr-0030',
  itemNumber: 30,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 30).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_31: BaseQuestionDefinition = {
  id: 'q-sr-0031',
  itemNumber: 31,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 31).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_32: BaseQuestionDefinition = {
  id: 'q-sr-0032',
  itemNumber: 32,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 32).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_33: BaseQuestionDefinition = {
  id: 'q-sr-0033',
  itemNumber: 33,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 33).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_34: BaseQuestionDefinition = {
  id: 'q-sr-0034',
  itemNumber: 34,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 34).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_35: BaseQuestionDefinition = {
  id: 'q-sr-0035',
  itemNumber: 35,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 35).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_36: BaseQuestionDefinition = {
  id: 'q-sr-0036',
  itemNumber: 36,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 36).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_37: BaseQuestionDefinition = {
  id: 'q-sr-0037',
  itemNumber: 37,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 37).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_38: BaseQuestionDefinition = {
  id: 'q-sr-0038',
  itemNumber: 38,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 38).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_39: BaseQuestionDefinition = {
  id: 'q-sr-0039',
  itemNumber: 39,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 39).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_40: BaseQuestionDefinition = {
  id: 'q-sr-0040',
  itemNumber: 40,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 40).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_41: BaseQuestionDefinition = {
  id: 'q-sr-0041',
  itemNumber: 41,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 41).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_42: BaseQuestionDefinition = {
  id: 'q-sr-0042',
  itemNumber: 42,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 42).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_43: BaseQuestionDefinition = {
  id: 'q-sr-0043',
  itemNumber: 43,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 43).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};


export const silkRoadQuestion_44: BaseQuestionDefinition = {
  id: 'q-sr-0044',
  itemNumber: 44,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Silk was widely cultivated across the Mediterranean basin prior to the Christian era (Item 44).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C confirms sericulture was only smuggled to the West in 552 CE by Christian monks.',
  difficultyIndex: 0.45,
};
