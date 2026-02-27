/**
 * @file AcademicPassageSet3.ts
 * @description Cambridge Academic Reading Passages 7 through 10 (Cognitive Neuroscience of Bilingualism).
 */
import { ReadingPassageDocument } from '../parsers/PassageParser';
import { BaseQuestionDefinition, QuestionFormat } from '../../core/types/question.types';
import { SkillModule } from '../../core/types/exam.types';

export const PASSAGE_BILINGUAL_COGNITION: ReadingPassageDocument = {
  id: 'acad-p3-bilingualism',
  title: 'Executive Control and Neural Plasticity in the Bilingual Brain',
  topicDomain: 'Cognitive Neuroscience & Psycholinguistics',
  totalWordCount: 950,
  paragraphs: [
    {
      label: 'A',
      paragraphIndex: 0,
      content: 'For decades, 20th-century educational dogma posited that multilingual child rearing caused cognitive delays, overburdening developing cerebral faculties. Contemporary neuroimaging techniques, notably functional magnetic resonance imaging (fMRI) and magnetoencephalography, have thoroughly dismantled this misconception, revealing significant cognitive dividends.',
      wordCount: 44,
      keyConcepts: ['multilingual', 'educational dogma', 'neuroimaging', 'fMRI'],
    },
    {
      label: 'B',
      paragraphIndex: 1,
      content: 'Bilingual individuals constantly engage executive control networks to suppress interference from the non-target language. This perpetual mental exercise strengthens the dorsolateral prefrontal cortex, leading to enhanced task-switching agility, robust working memory, and measurable resistance to neurodegenerative symptoms in later life.',
      wordCount: 43,
      keyConcepts: ['executive control', 'dorsolateral prefrontal cortex', 'task-switching', 'neurodegenerative'],
    },
  ],
};

export const bilingualQuestion_1: BaseQuestionDefinition = {
  id: 'q-bi-0001',
  itemNumber: 1,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 1)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_2: BaseQuestionDefinition = {
  id: 'q-bi-0002',
  itemNumber: 2,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 2)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_3: BaseQuestionDefinition = {
  id: 'q-bi-0003',
  itemNumber: 3,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 3)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_4: BaseQuestionDefinition = {
  id: 'q-bi-0004',
  itemNumber: 4,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 4)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_5: BaseQuestionDefinition = {
  id: 'q-bi-0005',
  itemNumber: 5,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 5)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_6: BaseQuestionDefinition = {
  id: 'q-bi-0006',
  itemNumber: 6,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 6)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_7: BaseQuestionDefinition = {
  id: 'q-bi-0007',
  itemNumber: 7,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 7)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_8: BaseQuestionDefinition = {
  id: 'q-bi-0008',
  itemNumber: 8,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 8)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_9: BaseQuestionDefinition = {
  id: 'q-bi-0009',
  itemNumber: 9,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 9)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_10: BaseQuestionDefinition = {
  id: 'q-bi-0010',
  itemNumber: 10,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 10)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_11: BaseQuestionDefinition = {
  id: 'q-bi-0011',
  itemNumber: 11,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 11)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_12: BaseQuestionDefinition = {
  id: 'q-bi-0012',
  itemNumber: 12,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 12)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_13: BaseQuestionDefinition = {
  id: 'q-bi-0013',
  itemNumber: 13,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 13)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_14: BaseQuestionDefinition = {
  id: 'q-bi-0014',
  itemNumber: 14,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 14)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_15: BaseQuestionDefinition = {
  id: 'q-bi-0015',
  itemNumber: 15,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 15)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_16: BaseQuestionDefinition = {
  id: 'q-bi-0016',
  itemNumber: 16,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 16)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_17: BaseQuestionDefinition = {
  id: 'q-bi-0017',
  itemNumber: 17,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 17)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_18: BaseQuestionDefinition = {
  id: 'q-bi-0018',
  itemNumber: 18,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 18)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_19: BaseQuestionDefinition = {
  id: 'q-bi-0019',
  itemNumber: 19,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 19)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_20: BaseQuestionDefinition = {
  id: 'q-bi-0020',
  itemNumber: 20,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 20)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_21: BaseQuestionDefinition = {
  id: 'q-bi-0021',
  itemNumber: 21,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 21)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_22: BaseQuestionDefinition = {
  id: 'q-bi-0022',
  itemNumber: 22,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 22)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_23: BaseQuestionDefinition = {
  id: 'q-bi-0023',
  itemNumber: 23,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 23)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_24: BaseQuestionDefinition = {
  id: 'q-bi-0024',
  itemNumber: 24,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 24)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_25: BaseQuestionDefinition = {
  id: 'q-bi-0025',
  itemNumber: 25,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 25)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_26: BaseQuestionDefinition = {
  id: 'q-bi-0026',
  itemNumber: 26,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 26)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_27: BaseQuestionDefinition = {
  id: 'q-bi-0027',
  itemNumber: 27,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 27)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_28: BaseQuestionDefinition = {
  id: 'q-bi-0028',
  itemNumber: 28,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 28)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_29: BaseQuestionDefinition = {
  id: 'q-bi-0029',
  itemNumber: 29,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 29)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_30: BaseQuestionDefinition = {
  id: 'q-bi-0030',
  itemNumber: 30,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 30)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_31: BaseQuestionDefinition = {
  id: 'q-bi-0031',
  itemNumber: 31,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 31)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_32: BaseQuestionDefinition = {
  id: 'q-bi-0032',
  itemNumber: 32,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 32)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_33: BaseQuestionDefinition = {
  id: 'q-bi-0033',
  itemNumber: 33,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 33)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_34: BaseQuestionDefinition = {
  id: 'q-bi-0034',
  itemNumber: 34,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 34)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_35: BaseQuestionDefinition = {
  id: 'q-bi-0035',
  itemNumber: 35,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 35)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_36: BaseQuestionDefinition = {
  id: 'q-bi-0036',
  itemNumber: 36,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 36)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_37: BaseQuestionDefinition = {
  id: 'q-bi-0037',
  itemNumber: 37,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 37)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_38: BaseQuestionDefinition = {
  id: 'q-bi-0038',
  itemNumber: 38,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 38)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_39: BaseQuestionDefinition = {
  id: 'q-bi-0039',
  itemNumber: 39,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 39)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_40: BaseQuestionDefinition = {
  id: 'q-bi-0040',
  itemNumber: 40,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 40)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_41: BaseQuestionDefinition = {
  id: 'q-bi-0041',
  itemNumber: 41,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 41)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_42: BaseQuestionDefinition = {
  id: 'q-bi-0042',
  itemNumber: 42,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 42)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_43: BaseQuestionDefinition = {
  id: 'q-bi-0043',
  itemNumber: 43,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 43)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};


export const bilingualQuestion_44: BaseQuestionDefinition = {
  id: 'q-bi-0044',
  itemNumber: 44,
  skill: SkillModule.READING,
  format: QuestionFormat.MATCHING_HEADINGS,
  prompt: 'Which paragraph outlines the neurological mechanisms underlying the bilingual cognitive advantage? (Item 44)',
  correctAnswers: ['B', 'Paragraph B'],
  explanation: 'Paragraph B explicitly describes executive control networks and dorsolateral prefrontal cortex activation.',
  difficultyIndex: 0.55,
};
