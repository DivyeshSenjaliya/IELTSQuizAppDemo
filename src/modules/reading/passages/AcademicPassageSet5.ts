/**
 * @file AcademicPassageSet5.ts
 * @description Cambridge Academic Reading Passages 16 through 20: Decipherment of Ancient Scripts and Epigraphy.
 */
import { ReadingPassageDocument } from '../parsers/PassageParser';
import { BaseQuestionDefinition, QuestionFormat } from '../../core/types/question.types';
import { SkillModule } from '../../core/types/exam.types';

export const PASSAGE_LINEAR_B_DECIPHERMENT: ReadingPassageDocument = {
  id: 'acad-p5-linear-b-epigraphy',
  title: 'Michael Ventris and the Decipherment of the Mycenaean Linear B Script',
  topicDomain: 'Linguistics & Classical Archaeology',
  totalWordCount: 940,
  paragraphs: [
    {
      label: 'A',
      paragraphIndex: 0,
      content: 'When Sir Arthur Evans excavated the Palace of Minos at Knossos in Crete in 1900, he unearthed thousands of inscribed clay tablets. Evans identified three distinct writing systems: a hieroglyphic script, followed by Linear A, and ultimately Linear B. Convinced that the Minoans spoke an indigenous Mediterranean language unrelated to Greek, Evans jealously guarded the tablets, stymieing external scholarly analysis for decades.',
      wordCount: 63,
      keyConcepts: ['Palace of Minos', 'Knossos', 'Linear A', 'Linear B', 'Sir Arthur Evans'],
    },
    {
      label: 'B',
      paragraphIndex: 1,
      content: 'The breakthrough arrived through the meticulous statistical work of Alice Kober, who cataloged inflectional patterns in sign clusters, proving Linear B was an inflected language. Following Kober untimely passing, an English architect named Michael Ventris constructed phonetic grids correlating syllabic signs. In 1952, Ventris made the startling discovery that Linear B was an archaic Mycenaean dialect of Greek, five centuries older than Homer.',
      wordCount: 65,
      keyConcepts: ['Alice Kober', 'inflectional patterns', 'Michael Ventris', 'Mycenaean dialect', 'phonetic grids'],
    },
  ],
};

export const linearBQuestionItem_1: BaseQuestionDefinition = {
  id: 'q-linb-0001',
  itemNumber: 1,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 1).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_2: BaseQuestionDefinition = {
  id: 'q-linb-0002',
  itemNumber: 2,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 2).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_3: BaseQuestionDefinition = {
  id: 'q-linb-0003',
  itemNumber: 3,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 3).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_4: BaseQuestionDefinition = {
  id: 'q-linb-0004',
  itemNumber: 4,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 4).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_5: BaseQuestionDefinition = {
  id: 'q-linb-0005',
  itemNumber: 5,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 5).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_6: BaseQuestionDefinition = {
  id: 'q-linb-0006',
  itemNumber: 6,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 6).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_7: BaseQuestionDefinition = {
  id: 'q-linb-0007',
  itemNumber: 7,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 7).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_8: BaseQuestionDefinition = {
  id: 'q-linb-0008',
  itemNumber: 8,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 8).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_9: BaseQuestionDefinition = {
  id: 'q-linb-0009',
  itemNumber: 9,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 9).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_10: BaseQuestionDefinition = {
  id: 'q-linb-0010',
  itemNumber: 10,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 10).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_11: BaseQuestionDefinition = {
  id: 'q-linb-0011',
  itemNumber: 11,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 11).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_12: BaseQuestionDefinition = {
  id: 'q-linb-0012',
  itemNumber: 12,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 12).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_13: BaseQuestionDefinition = {
  id: 'q-linb-0013',
  itemNumber: 13,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 13).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_14: BaseQuestionDefinition = {
  id: 'q-linb-0014',
  itemNumber: 14,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 14).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_15: BaseQuestionDefinition = {
  id: 'q-linb-0015',
  itemNumber: 15,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 15).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_16: BaseQuestionDefinition = {
  id: 'q-linb-0016',
  itemNumber: 16,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 16).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_17: BaseQuestionDefinition = {
  id: 'q-linb-0017',
  itemNumber: 17,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 17).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_18: BaseQuestionDefinition = {
  id: 'q-linb-0018',
  itemNumber: 18,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 18).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_19: BaseQuestionDefinition = {
  id: 'q-linb-0019',
  itemNumber: 19,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 19).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_20: BaseQuestionDefinition = {
  id: 'q-linb-0020',
  itemNumber: 20,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 20).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_21: BaseQuestionDefinition = {
  id: 'q-linb-0021',
  itemNumber: 21,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 21).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_22: BaseQuestionDefinition = {
  id: 'q-linb-0022',
  itemNumber: 22,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 22).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_23: BaseQuestionDefinition = {
  id: 'q-linb-0023',
  itemNumber: 23,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 23).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_24: BaseQuestionDefinition = {
  id: 'q-linb-0024',
  itemNumber: 24,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 24).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_25: BaseQuestionDefinition = {
  id: 'q-linb-0025',
  itemNumber: 25,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 25).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_26: BaseQuestionDefinition = {
  id: 'q-linb-0026',
  itemNumber: 26,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 26).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_27: BaseQuestionDefinition = {
  id: 'q-linb-0027',
  itemNumber: 27,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 27).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_28: BaseQuestionDefinition = {
  id: 'q-linb-0028',
  itemNumber: 28,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 28).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_29: BaseQuestionDefinition = {
  id: 'q-linb-0029',
  itemNumber: 29,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 29).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_30: BaseQuestionDefinition = {
  id: 'q-linb-0030',
  itemNumber: 30,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 30).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_31: BaseQuestionDefinition = {
  id: 'q-linb-0031',
  itemNumber: 31,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 31).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_32: BaseQuestionDefinition = {
  id: 'q-linb-0032',
  itemNumber: 32,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 32).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_33: BaseQuestionDefinition = {
  id: 'q-linb-0033',
  itemNumber: 33,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 33).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_34: BaseQuestionDefinition = {
  id: 'q-linb-0034',
  itemNumber: 34,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 34).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_35: BaseQuestionDefinition = {
  id: 'q-linb-0035',
  itemNumber: 35,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 35).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_36: BaseQuestionDefinition = {
  id: 'q-linb-0036',
  itemNumber: 36,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 36).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_37: BaseQuestionDefinition = {
  id: 'q-linb-0037',
  itemNumber: 37,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 37).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_38: BaseQuestionDefinition = {
  id: 'q-linb-0038',
  itemNumber: 38,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 38).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_39: BaseQuestionDefinition = {
  id: 'q-linb-0039',
  itemNumber: 39,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 39).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_40: BaseQuestionDefinition = {
  id: 'q-linb-0040',
  itemNumber: 40,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 40).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_41: BaseQuestionDefinition = {
  id: 'q-linb-0041',
  itemNumber: 41,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 41).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_42: BaseQuestionDefinition = {
  id: 'q-linb-0042',
  itemNumber: 42,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 42).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_43: BaseQuestionDefinition = {
  id: 'q-linb-0043',
  itemNumber: 43,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 43).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_44: BaseQuestionDefinition = {
  id: 'q-linb-0044',
  itemNumber: 44,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 44).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_45: BaseQuestionDefinition = {
  id: 'q-linb-0045',
  itemNumber: 45,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 45).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_46: BaseQuestionDefinition = {
  id: 'q-linb-0046',
  itemNumber: 46,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 46).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_47: BaseQuestionDefinition = {
  id: 'q-linb-0047',
  itemNumber: 47,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 47).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_48: BaseQuestionDefinition = {
  id: 'q-linb-0048',
  itemNumber: 48,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 48).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_49: BaseQuestionDefinition = {
  id: 'q-linb-0049',
  itemNumber: 49,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 49).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_50: BaseQuestionDefinition = {
  id: 'q-linb-0050',
  itemNumber: 50,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 50).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_51: BaseQuestionDefinition = {
  id: 'q-linb-0051',
  itemNumber: 51,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 51).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_52: BaseQuestionDefinition = {
  id: 'q-linb-0052',
  itemNumber: 52,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 52).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_53: BaseQuestionDefinition = {
  id: 'q-linb-0053',
  itemNumber: 53,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 53).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_54: BaseQuestionDefinition = {
  id: 'q-linb-0054',
  itemNumber: 54,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 54).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_55: BaseQuestionDefinition = {
  id: 'q-linb-0055',
  itemNumber: 55,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 55).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_56: BaseQuestionDefinition = {
  id: 'q-linb-0056',
  itemNumber: 56,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 56).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_57: BaseQuestionDefinition = {
  id: 'q-linb-0057',
  itemNumber: 57,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 57).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_58: BaseQuestionDefinition = {
  id: 'q-linb-0058',
  itemNumber: 58,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 58).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_59: BaseQuestionDefinition = {
  id: 'q-linb-0059',
  itemNumber: 59,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 59).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_60: BaseQuestionDefinition = {
  id: 'q-linb-0060',
  itemNumber: 60,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 60).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_61: BaseQuestionDefinition = {
  id: 'q-linb-0061',
  itemNumber: 61,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 61).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_62: BaseQuestionDefinition = {
  id: 'q-linb-0062',
  itemNumber: 62,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 62).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_63: BaseQuestionDefinition = {
  id: 'q-linb-0063',
  itemNumber: 63,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 63).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_64: BaseQuestionDefinition = {
  id: 'q-linb-0064',
  itemNumber: 64,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 64).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_65: BaseQuestionDefinition = {
  id: 'q-linb-0065',
  itemNumber: 65,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 65).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_66: BaseQuestionDefinition = {
  id: 'q-linb-0066',
  itemNumber: 66,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 66).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_67: BaseQuestionDefinition = {
  id: 'q-linb-0067',
  itemNumber: 67,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 67).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_68: BaseQuestionDefinition = {
  id: 'q-linb-0068',
  itemNumber: 68,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 68).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_69: BaseQuestionDefinition = {
  id: 'q-linb-0069',
  itemNumber: 69,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 69).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_70: BaseQuestionDefinition = {
  id: 'q-linb-0070',
  itemNumber: 70,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 70).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_71: BaseQuestionDefinition = {
  id: 'q-linb-0071',
  itemNumber: 71,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 71).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_72: BaseQuestionDefinition = {
  id: 'q-linb-0072',
  itemNumber: 72,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 72).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_73: BaseQuestionDefinition = {
  id: 'q-linb-0073',
  itemNumber: 73,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 73).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_74: BaseQuestionDefinition = {
  id: 'q-linb-0074',
  itemNumber: 74,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 74).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_75: BaseQuestionDefinition = {
  id: 'q-linb-0075',
  itemNumber: 75,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 75).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_76: BaseQuestionDefinition = {
  id: 'q-linb-0076',
  itemNumber: 76,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 76).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_77: BaseQuestionDefinition = {
  id: 'q-linb-0077',
  itemNumber: 77,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 77).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_78: BaseQuestionDefinition = {
  id: 'q-linb-0078',
  itemNumber: 78,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 78).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_79: BaseQuestionDefinition = {
  id: 'q-linb-0079',
  itemNumber: 79,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 79).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_80: BaseQuestionDefinition = {
  id: 'q-linb-0080',
  itemNumber: 80,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 80).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_81: BaseQuestionDefinition = {
  id: 'q-linb-0081',
  itemNumber: 81,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 81).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_82: BaseQuestionDefinition = {
  id: 'q-linb-0082',
  itemNumber: 82,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 82).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_83: BaseQuestionDefinition = {
  id: 'q-linb-0083',
  itemNumber: 83,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 83).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_84: BaseQuestionDefinition = {
  id: 'q-linb-0084',
  itemNumber: 84,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 84).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_85: BaseQuestionDefinition = {
  id: 'q-linb-0085',
  itemNumber: 85,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 85).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_86: BaseQuestionDefinition = {
  id: 'q-linb-0086',
  itemNumber: 86,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 86).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_87: BaseQuestionDefinition = {
  id: 'q-linb-0087',
  itemNumber: 87,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 87).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_88: BaseQuestionDefinition = {
  id: 'q-linb-0088',
  itemNumber: 88,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 88).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_89: BaseQuestionDefinition = {
  id: 'q-linb-0089',
  itemNumber: 89,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 89).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_90: BaseQuestionDefinition = {
  id: 'q-linb-0090',
  itemNumber: 90,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 90).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_91: BaseQuestionDefinition = {
  id: 'q-linb-0091',
  itemNumber: 91,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 91).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_92: BaseQuestionDefinition = {
  id: 'q-linb-0092',
  itemNumber: 92,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 92).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_93: BaseQuestionDefinition = {
  id: 'q-linb-0093',
  itemNumber: 93,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 93).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_94: BaseQuestionDefinition = {
  id: 'q-linb-0094',
  itemNumber: 94,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 94).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_95: BaseQuestionDefinition = {
  id: 'q-linb-0095',
  itemNumber: 95,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 95).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_96: BaseQuestionDefinition = {
  id: 'q-linb-0096',
  itemNumber: 96,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 96).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_97: BaseQuestionDefinition = {
  id: 'q-linb-0097',
  itemNumber: 97,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 97).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_98: BaseQuestionDefinition = {
  id: 'q-linb-0098',
  itemNumber: 98,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 98).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};


export const linearBQuestionItem_99: BaseQuestionDefinition = {
  id: 'q-linb-0099',
  itemNumber: 99,
  skill: SkillModule.READING,
  format: QuestionFormat.SENTENCE_COMPLETION,
  prompt: 'Michael Ventris identified that the Linear B tablets recorded an archaic dialect of ______ (Item 99).',
  correctAnswers: ['Greek', 'Mycenaean Greek'],
  maxWordsAllowed: 2,
  explanation: 'Paragraph B explicitly highlights that Linear B was an archaic Mycenaean dialect of Greek.',
  difficultyIndex: 0.58,
};
