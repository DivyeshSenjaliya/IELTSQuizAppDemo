/**
 * @file Part2CueCardsBank.ts
 * @description Long turn Cue Cards with 1-minute structured preparation timers and bullet point prompts.
 */
export interface CueCardDefinition {
  id: string;
  cueCardTitle: string;
  promptInstructions: string;
  bulletPoints: string[];
  preparationSeconds: number;
  speechDurationSeconds: number;
  modelLongTurnBand9: string;
}

export const CUE_CARD_MEMORABLE_JOURNEY: CueCardDefinition = {
  id: 'cue-01-journey',
  cueCardTitle: 'Describe a memorable journey that did not go according to plan',
  promptInstructions: 'You should say:\n- where you were travelling to\n- who you were with\n- what unexpected event occurred\nand explain how you resolved the dilemma.',
  bulletPoints: [
    'Where you were travelling to',
    'Who was accompanying you',
    'What unforeseen predicament arose',
    'How you navigated the challenge',
  ],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'I would like to recount an excursion to the rugged Scottish Highlands that occurred roughly two years ago. I was accompanied by two close university colleagues with whom I frequently embark on trekking expeditions...',
};

export const cueCardItem_1: CueCardDefinition = {
  id: 'cue-card-0001',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 1',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_2: CueCardDefinition = {
  id: 'cue-card-0002',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 2',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_3: CueCardDefinition = {
  id: 'cue-card-0003',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 3',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_4: CueCardDefinition = {
  id: 'cue-card-0004',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 4',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_5: CueCardDefinition = {
  id: 'cue-card-0005',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 5',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_6: CueCardDefinition = {
  id: 'cue-card-0006',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 6',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_7: CueCardDefinition = {
  id: 'cue-card-0007',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 7',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_8: CueCardDefinition = {
  id: 'cue-card-0008',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 8',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_9: CueCardDefinition = {
  id: 'cue-card-0009',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 9',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_10: CueCardDefinition = {
  id: 'cue-card-0010',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 10',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_11: CueCardDefinition = {
  id: 'cue-card-0011',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 11',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_12: CueCardDefinition = {
  id: 'cue-card-0012',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 12',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_13: CueCardDefinition = {
  id: 'cue-card-0013',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 13',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_14: CueCardDefinition = {
  id: 'cue-card-0014',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 14',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_15: CueCardDefinition = {
  id: 'cue-card-0015',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 15',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_16: CueCardDefinition = {
  id: 'cue-card-0016',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 16',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_17: CueCardDefinition = {
  id: 'cue-card-0017',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 17',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_18: CueCardDefinition = {
  id: 'cue-card-0018',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 18',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_19: CueCardDefinition = {
  id: 'cue-card-0019',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 19',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_20: CueCardDefinition = {
  id: 'cue-card-0020',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 20',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_21: CueCardDefinition = {
  id: 'cue-card-0021',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 21',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_22: CueCardDefinition = {
  id: 'cue-card-0022',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 22',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_23: CueCardDefinition = {
  id: 'cue-card-0023',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 23',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_24: CueCardDefinition = {
  id: 'cue-card-0024',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 24',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_25: CueCardDefinition = {
  id: 'cue-card-0025',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 25',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_26: CueCardDefinition = {
  id: 'cue-card-0026',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 26',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_27: CueCardDefinition = {
  id: 'cue-card-0027',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 27',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_28: CueCardDefinition = {
  id: 'cue-card-0028',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 28',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_29: CueCardDefinition = {
  id: 'cue-card-0029',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 29',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_30: CueCardDefinition = {
  id: 'cue-card-0030',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 30',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_31: CueCardDefinition = {
  id: 'cue-card-0031',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 31',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_32: CueCardDefinition = {
  id: 'cue-card-0032',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 32',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_33: CueCardDefinition = {
  id: 'cue-card-0033',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 33',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_34: CueCardDefinition = {
  id: 'cue-card-0034',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 34',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_35: CueCardDefinition = {
  id: 'cue-card-0035',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 35',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_36: CueCardDefinition = {
  id: 'cue-card-0036',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 36',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_37: CueCardDefinition = {
  id: 'cue-card-0037',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 37',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_38: CueCardDefinition = {
  id: 'cue-card-0038',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 38',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_39: CueCardDefinition = {
  id: 'cue-card-0039',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 39',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_40: CueCardDefinition = {
  id: 'cue-card-0040',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 40',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_41: CueCardDefinition = {
  id: 'cue-card-0041',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 41',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_42: CueCardDefinition = {
  id: 'cue-card-0042',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 42',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_43: CueCardDefinition = {
  id: 'cue-card-0043',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 43',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};


export const cueCardItem_44: CueCardDefinition = {
  id: 'cue-card-0044',
  cueCardTitle: 'Describe an influential mentor who shaped your academic outlook 44',
  promptInstructions: 'You should say:\n- who this individual was\n- how you first met them\n- what specific wisdom they imparted\nand explain how their guidance influenced your career path.',
  bulletPoints: ['Mentor identity', 'Initial encounter', 'Philosophical wisdom imparted', 'Long-term professional ramifications'],
  preparationSeconds: 60,
  speechDurationSeconds: 120,
  modelLongTurnBand9: 'Allow me to depict a distinguished professor of cognitive semantics whose pedagogical dedication revolutionized my intellectual curiosity during my formative undergraduate years...',
};
