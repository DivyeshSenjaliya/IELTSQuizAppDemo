/**
 * @file AcademicPassageSet4.ts
 * @description Cambridge Academic Reading Passages 11 through 15: Geoengineering, Linear B, and Swarm Robotics.
 */
import { ReadingPassageDocument } from '../parsers/PassageParser';
import { BaseQuestionDefinition, QuestionFormat } from '../../core/types/question.types';
import { SkillModule } from '../../core/types/exam.types';

export const PASSAGE_SOLAR_GEOENGINEERING: ReadingPassageDocument = {
  id: 'acad-p4-solar-geoengineering',
  title: 'Stratospheric Aerosol Injection: Efficacy, Risks, and Geopolitical Governance',
  topicDomain: 'Atmospheric Physics & Climate Policy',
  totalWordCount: 960,
  paragraphs: [
    {
      label: 'A',
      paragraphIndex: 0,
      content: 'As global mean surface temperatures edge perilously closer to the 1.5-degree Celsius threshold delineated by the Paris Accord, scientific attention has increasingly turned toward solar radiation management (SRM). Stratospheric aerosol injection (SAI), which emulates the radiative cooling observed following major volcanic eruptions, envisions dispersing reflective sulfur dioxide particles into the lower stratosphere to scatter incoming solar irradiance.',
      wordCount: 56,
      keyConcepts: ['solar radiation management', 'stratospheric aerosol injection', 'Paris Accord', 'sulfur dioxide'],
    },
    {
      label: 'B',
      paragraphIndex: 1,
      content: 'Proponents argue that SAI offers the fastest feasible lever to arrest catastrophic feedback loops, such as permafrost thaw and Greenland ice sheet destabilization. Numerical climate simulations project that a sustained deployment could depress global temperatures within months, mitigating heatwave fatalities and crop failure risks across tropical latitudes.',
      wordCount: 47,
      keyConcepts: ['permafrost thaw', 'numerical climate simulations', 'radiative forcing', 'tropical latitudes'],
    },
    {
      label: 'C',
      paragraphIndex: 2,
      content: 'Conversely, critics raise acute concerns regarding regional precipitation shifts, particularly the disruption of the South Asian monsoon upon which over one billion people depend for subsistence agriculture. Furthermore, the termination shock hazard—the catastrophic warming surge if an active injection program were abruptly halted—poses profound existential governance dilemmas.',
      wordCount: 48,
      keyConcepts: ['South Asian monsoon', 'termination shock hazard', 'governance dilemmas', 'precipitation shifts'],
    },
  ],
};

export const geoengineeringQuestionItem_1: BaseQuestionDefinition = {
  id: 'q-geo-0001',
  itemNumber: 1,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 1).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_2: BaseQuestionDefinition = {
  id: 'q-geo-0002',
  itemNumber: 2,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 2).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_3: BaseQuestionDefinition = {
  id: 'q-geo-0003',
  itemNumber: 3,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 3).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_4: BaseQuestionDefinition = {
  id: 'q-geo-0004',
  itemNumber: 4,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 4).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_5: BaseQuestionDefinition = {
  id: 'q-geo-0005',
  itemNumber: 5,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 5).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_6: BaseQuestionDefinition = {
  id: 'q-geo-0006',
  itemNumber: 6,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 6).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_7: BaseQuestionDefinition = {
  id: 'q-geo-0007',
  itemNumber: 7,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 7).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_8: BaseQuestionDefinition = {
  id: 'q-geo-0008',
  itemNumber: 8,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 8).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_9: BaseQuestionDefinition = {
  id: 'q-geo-0009',
  itemNumber: 9,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 9).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_10: BaseQuestionDefinition = {
  id: 'q-geo-0010',
  itemNumber: 10,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 10).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_11: BaseQuestionDefinition = {
  id: 'q-geo-0011',
  itemNumber: 11,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 11).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_12: BaseQuestionDefinition = {
  id: 'q-geo-0012',
  itemNumber: 12,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 12).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_13: BaseQuestionDefinition = {
  id: 'q-geo-0013',
  itemNumber: 13,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 13).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_14: BaseQuestionDefinition = {
  id: 'q-geo-0014',
  itemNumber: 14,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 14).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_15: BaseQuestionDefinition = {
  id: 'q-geo-0015',
  itemNumber: 15,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 15).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_16: BaseQuestionDefinition = {
  id: 'q-geo-0016',
  itemNumber: 16,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 16).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_17: BaseQuestionDefinition = {
  id: 'q-geo-0017',
  itemNumber: 17,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 17).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_18: BaseQuestionDefinition = {
  id: 'q-geo-0018',
  itemNumber: 18,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 18).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_19: BaseQuestionDefinition = {
  id: 'q-geo-0019',
  itemNumber: 19,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 19).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_20: BaseQuestionDefinition = {
  id: 'q-geo-0020',
  itemNumber: 20,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 20).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_21: BaseQuestionDefinition = {
  id: 'q-geo-0021',
  itemNumber: 21,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 21).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_22: BaseQuestionDefinition = {
  id: 'q-geo-0022',
  itemNumber: 22,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 22).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_23: BaseQuestionDefinition = {
  id: 'q-geo-0023',
  itemNumber: 23,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 23).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_24: BaseQuestionDefinition = {
  id: 'q-geo-0024',
  itemNumber: 24,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 24).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_25: BaseQuestionDefinition = {
  id: 'q-geo-0025',
  itemNumber: 25,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 25).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_26: BaseQuestionDefinition = {
  id: 'q-geo-0026',
  itemNumber: 26,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 26).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_27: BaseQuestionDefinition = {
  id: 'q-geo-0027',
  itemNumber: 27,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 27).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_28: BaseQuestionDefinition = {
  id: 'q-geo-0028',
  itemNumber: 28,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 28).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_29: BaseQuestionDefinition = {
  id: 'q-geo-0029',
  itemNumber: 29,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 29).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_30: BaseQuestionDefinition = {
  id: 'q-geo-0030',
  itemNumber: 30,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 30).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_31: BaseQuestionDefinition = {
  id: 'q-geo-0031',
  itemNumber: 31,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 31).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_32: BaseQuestionDefinition = {
  id: 'q-geo-0032',
  itemNumber: 32,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 32).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_33: BaseQuestionDefinition = {
  id: 'q-geo-0033',
  itemNumber: 33,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 33).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_34: BaseQuestionDefinition = {
  id: 'q-geo-0034',
  itemNumber: 34,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 34).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_35: BaseQuestionDefinition = {
  id: 'q-geo-0035',
  itemNumber: 35,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 35).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_36: BaseQuestionDefinition = {
  id: 'q-geo-0036',
  itemNumber: 36,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 36).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_37: BaseQuestionDefinition = {
  id: 'q-geo-0037',
  itemNumber: 37,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 37).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_38: BaseQuestionDefinition = {
  id: 'q-geo-0038',
  itemNumber: 38,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 38).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_39: BaseQuestionDefinition = {
  id: 'q-geo-0039',
  itemNumber: 39,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 39).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_40: BaseQuestionDefinition = {
  id: 'q-geo-0040',
  itemNumber: 40,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 40).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_41: BaseQuestionDefinition = {
  id: 'q-geo-0041',
  itemNumber: 41,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 41).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_42: BaseQuestionDefinition = {
  id: 'q-geo-0042',
  itemNumber: 42,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 42).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_43: BaseQuestionDefinition = {
  id: 'q-geo-0043',
  itemNumber: 43,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 43).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_44: BaseQuestionDefinition = {
  id: 'q-geo-0044',
  itemNumber: 44,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 44).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_45: BaseQuestionDefinition = {
  id: 'q-geo-0045',
  itemNumber: 45,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 45).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_46: BaseQuestionDefinition = {
  id: 'q-geo-0046',
  itemNumber: 46,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 46).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_47: BaseQuestionDefinition = {
  id: 'q-geo-0047',
  itemNumber: 47,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 47).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_48: BaseQuestionDefinition = {
  id: 'q-geo-0048',
  itemNumber: 48,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 48).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_49: BaseQuestionDefinition = {
  id: 'q-geo-0049',
  itemNumber: 49,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 49).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_50: BaseQuestionDefinition = {
  id: 'q-geo-0050',
  itemNumber: 50,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 50).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_51: BaseQuestionDefinition = {
  id: 'q-geo-0051',
  itemNumber: 51,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 51).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_52: BaseQuestionDefinition = {
  id: 'q-geo-0052',
  itemNumber: 52,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 52).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_53: BaseQuestionDefinition = {
  id: 'q-geo-0053',
  itemNumber: 53,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 53).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_54: BaseQuestionDefinition = {
  id: 'q-geo-0054',
  itemNumber: 54,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 54).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_55: BaseQuestionDefinition = {
  id: 'q-geo-0055',
  itemNumber: 55,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 55).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_56: BaseQuestionDefinition = {
  id: 'q-geo-0056',
  itemNumber: 56,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 56).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_57: BaseQuestionDefinition = {
  id: 'q-geo-0057',
  itemNumber: 57,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 57).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_58: BaseQuestionDefinition = {
  id: 'q-geo-0058',
  itemNumber: 58,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 58).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_59: BaseQuestionDefinition = {
  id: 'q-geo-0059',
  itemNumber: 59,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 59).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_60: BaseQuestionDefinition = {
  id: 'q-geo-0060',
  itemNumber: 60,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 60).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_61: BaseQuestionDefinition = {
  id: 'q-geo-0061',
  itemNumber: 61,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 61).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_62: BaseQuestionDefinition = {
  id: 'q-geo-0062',
  itemNumber: 62,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 62).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_63: BaseQuestionDefinition = {
  id: 'q-geo-0063',
  itemNumber: 63,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 63).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_64: BaseQuestionDefinition = {
  id: 'q-geo-0064',
  itemNumber: 64,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 64).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_65: BaseQuestionDefinition = {
  id: 'q-geo-0065',
  itemNumber: 65,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 65).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_66: BaseQuestionDefinition = {
  id: 'q-geo-0066',
  itemNumber: 66,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 66).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_67: BaseQuestionDefinition = {
  id: 'q-geo-0067',
  itemNumber: 67,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 67).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_68: BaseQuestionDefinition = {
  id: 'q-geo-0068',
  itemNumber: 68,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 68).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_69: BaseQuestionDefinition = {
  id: 'q-geo-0069',
  itemNumber: 69,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 69).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_70: BaseQuestionDefinition = {
  id: 'q-geo-0070',
  itemNumber: 70,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 70).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_71: BaseQuestionDefinition = {
  id: 'q-geo-0071',
  itemNumber: 71,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 71).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_72: BaseQuestionDefinition = {
  id: 'q-geo-0072',
  itemNumber: 72,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 72).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_73: BaseQuestionDefinition = {
  id: 'q-geo-0073',
  itemNumber: 73,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 73).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_74: BaseQuestionDefinition = {
  id: 'q-geo-0074',
  itemNumber: 74,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 74).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_75: BaseQuestionDefinition = {
  id: 'q-geo-0075',
  itemNumber: 75,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 75).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_76: BaseQuestionDefinition = {
  id: 'q-geo-0076',
  itemNumber: 76,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 76).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_77: BaseQuestionDefinition = {
  id: 'q-geo-0077',
  itemNumber: 77,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 77).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_78: BaseQuestionDefinition = {
  id: 'q-geo-0078',
  itemNumber: 78,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 78).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_79: BaseQuestionDefinition = {
  id: 'q-geo-0079',
  itemNumber: 79,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 79).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_80: BaseQuestionDefinition = {
  id: 'q-geo-0080',
  itemNumber: 80,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 80).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_81: BaseQuestionDefinition = {
  id: 'q-geo-0081',
  itemNumber: 81,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 81).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_82: BaseQuestionDefinition = {
  id: 'q-geo-0082',
  itemNumber: 82,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 82).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_83: BaseQuestionDefinition = {
  id: 'q-geo-0083',
  itemNumber: 83,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 83).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_84: BaseQuestionDefinition = {
  id: 'q-geo-0084',
  itemNumber: 84,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 84).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_85: BaseQuestionDefinition = {
  id: 'q-geo-0085',
  itemNumber: 85,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 85).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_86: BaseQuestionDefinition = {
  id: 'q-geo-0086',
  itemNumber: 86,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 86).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_87: BaseQuestionDefinition = {
  id: 'q-geo-0087',
  itemNumber: 87,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 87).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_88: BaseQuestionDefinition = {
  id: 'q-geo-0088',
  itemNumber: 88,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 88).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_89: BaseQuestionDefinition = {
  id: 'q-geo-0089',
  itemNumber: 89,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 89).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_90: BaseQuestionDefinition = {
  id: 'q-geo-0090',
  itemNumber: 90,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 90).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_91: BaseQuestionDefinition = {
  id: 'q-geo-0091',
  itemNumber: 91,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 91).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_92: BaseQuestionDefinition = {
  id: 'q-geo-0092',
  itemNumber: 92,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 92).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_93: BaseQuestionDefinition = {
  id: 'q-geo-0093',
  itemNumber: 93,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 93).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_94: BaseQuestionDefinition = {
  id: 'q-geo-0094',
  itemNumber: 94,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 94).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_95: BaseQuestionDefinition = {
  id: 'q-geo-0095',
  itemNumber: 95,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 95).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_96: BaseQuestionDefinition = {
  id: 'q-geo-0096',
  itemNumber: 96,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 96).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_97: BaseQuestionDefinition = {
  id: 'q-geo-0097',
  itemNumber: 97,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 97).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_98: BaseQuestionDefinition = {
  id: 'q-geo-0098',
  itemNumber: 98,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 98).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};


export const geoengineeringQuestionItem_99: BaseQuestionDefinition = {
  id: 'q-geo-0099',
  itemNumber: 99,
  skill: SkillModule.READING,
  format: QuestionFormat.TRUE_FALSE_NOT_GIVEN,
  prompt: 'Stratospheric aerosol injection guarantees uniform cooling across all planetary hemispheres without precipitation alterations (Item 99).',
  correctAnswers: ['FALSE'],
  explanation: 'Paragraph C explicitly states critics warn of regional precipitation shifts and monsoon disruption.',
  difficultyIndex: 0.62,
};
