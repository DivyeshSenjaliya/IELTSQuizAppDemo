/**
 * @file Band9SpeakingInterviewCorpusPart1.ts
 * @description Comprehensive authentic Band 9 full speaking test interview transcripts (Interviews 1-10).
 */
export interface FullSpeakingInterviewTranscript {
  interviewId: string;
  candidateName: string;
  examinerId: string;
  targetScore: number;
  part1Dialogue: Array<{ speaker: 'EXAMINER' | 'CANDIDATE'; text: string; timeOffsetSec: number }>;
  part2LongTurn: { topic: string; candidateMonologue: string; followUpQuestions: string[] };
  part3AbstractDiscussion: Array<{ question: string; response: string; lexicalHighlights: string[] }>;
}

export const fullInterviewTranscriptNode_1: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0001',
  candidateName: 'Candidate_1',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 1. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 1)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 1. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 1.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_2: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0002',
  candidateName: 'Candidate_2',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 2. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 2)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 2. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 2.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_3: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0003',
  candidateName: 'Candidate_3',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 3. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 3)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 3. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 3.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_4: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0004',
  candidateName: 'Candidate_4',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 4. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 4)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 4. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 4.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_5: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0005',
  candidateName: 'Candidate_5',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 5. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 5)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 5. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 5.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_6: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0006',
  candidateName: 'Candidate_6',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 6. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 6)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 6. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 6.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_7: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0007',
  candidateName: 'Candidate_7',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 7. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 7)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 7. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 7.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_8: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0008',
  candidateName: 'Candidate_8',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 8. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 8)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 8. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 8.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_9: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0009',
  candidateName: 'Candidate_9',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 9. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 9)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 9. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 9.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_10: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0010',
  candidateName: 'Candidate_10',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 10. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 10)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 10. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 10.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_11: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0011',
  candidateName: 'Candidate_11',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 11. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 11)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 11. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 11.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_12: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0012',
  candidateName: 'Candidate_12',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 12. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 12)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 12. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 12.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_13: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0013',
  candidateName: 'Candidate_13',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 13. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 13)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 13. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 13.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_14: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0014',
  candidateName: 'Candidate_14',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 14. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 14)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 14. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 14.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_15: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0015',
  candidateName: 'Candidate_15',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 15. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 15)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 15. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 15.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_16: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0016',
  candidateName: 'Candidate_16',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 16. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 16)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 16. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 16.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_17: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0017',
  candidateName: 'Candidate_17',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 17. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 17)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 17. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 17.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_18: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0018',
  candidateName: 'Candidate_18',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 18. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 18)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 18. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 18.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_19: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0019',
  candidateName: 'Candidate_19',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 19. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 19)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 19. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 19.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_20: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0020',
  candidateName: 'Candidate_20',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 20. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 20)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 20. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 20.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_21: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0021',
  candidateName: 'Candidate_21',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 21. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 21)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 21. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 21.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_22: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0022',
  candidateName: 'Candidate_22',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 22. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 22)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 22. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 22.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_23: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0023',
  candidateName: 'Candidate_23',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 23. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 23)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 23. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 23.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_24: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0024',
  candidateName: 'Candidate_24',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 24. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 24)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 24. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 24.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_25: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0025',
  candidateName: 'Candidate_25',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 25. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 25)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 25. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 25.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_26: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0026',
  candidateName: 'Candidate_26',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 26. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 26)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 26. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 26.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_27: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0027',
  candidateName: 'Candidate_27',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 27. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 27)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 27. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 27.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_28: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0028',
  candidateName: 'Candidate_28',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 28. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 28)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 28. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 28.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_29: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0029',
  candidateName: 'Candidate_29',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 29. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 29)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 29. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 29.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_30: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0030',
  candidateName: 'Candidate_30',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 30. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 30)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 30. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 30.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_31: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0031',
  candidateName: 'Candidate_31',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 31. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 31)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 31. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 31.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_32: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0032',
  candidateName: 'Candidate_32',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 32. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 32)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 32. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 32.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_33: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0033',
  candidateName: 'Candidate_33',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 33. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 33)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 33. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 33.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_34: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0034',
  candidateName: 'Candidate_34',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 34. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 34)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 34. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 34.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_35: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0035',
  candidateName: 'Candidate_35',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 35. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 35)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 35. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 35.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_36: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0036',
  candidateName: 'Candidate_36',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 36. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 36)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 36. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 36.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_37: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0037',
  candidateName: 'Candidate_37',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 37. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 37)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 37. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 37.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_38: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0038',
  candidateName: 'Candidate_38',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 38. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 38)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 38. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 38.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_39: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0039',
  candidateName: 'Candidate_39',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 39. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 39)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 39. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 39.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_40: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0040',
  candidateName: 'Candidate_40',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 40. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 40)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 40. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 40.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_41: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0041',
  candidateName: 'Candidate_41',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 41. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 41)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 41. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 41.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_42: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0042',
  candidateName: 'Candidate_42',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 42. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 42)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 42. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 42.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_43: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0043',
  candidateName: 'Candidate_43',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 43. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 43)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 43. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 43.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_44: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0044',
  candidateName: 'Candidate_44',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 44. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 44)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 44. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 44.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_45: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0045',
  candidateName: 'Candidate_45',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 45. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 45)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 45. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 45.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_46: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0046',
  candidateName: 'Candidate_46',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 46. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 46)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 46. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 46.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_47: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0047',
  candidateName: 'Candidate_47',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 47. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 47)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 47. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 47.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_48: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0048',
  candidateName: 'Candidate_48',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 48. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 48)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 48. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 48.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_49: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0049',
  candidateName: 'Candidate_49',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 49. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 49)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 49. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 49.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_50: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0050',
  candidateName: 'Candidate_50',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 50. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 50)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 50. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 50.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_51: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0051',
  candidateName: 'Candidate_51',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 51. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 51)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 51. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 51.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_52: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0052',
  candidateName: 'Candidate_52',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 52. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 52)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 52. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 52.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_53: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0053',
  candidateName: 'Candidate_53',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 53. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 53)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 53. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 53.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_54: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0054',
  candidateName: 'Candidate_54',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 54. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 54)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 54. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 54.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_55: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0055',
  candidateName: 'Candidate_55',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 55. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 55)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 55. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 55.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_56: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0056',
  candidateName: 'Candidate_56',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 56. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 56)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 56. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 56.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_57: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0057',
  candidateName: 'Candidate_57',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 57. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 57)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 57. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 57.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_58: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0058',
  candidateName: 'Candidate_58',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 58. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 58)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 58. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 58.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_59: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0059',
  candidateName: 'Candidate_59',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 59. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 59)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 59. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 59.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_60: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0060',
  candidateName: 'Candidate_60',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 60. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 60)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 60. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 60.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_61: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0061',
  candidateName: 'Candidate_61',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 61. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 61)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 61. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 61.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_62: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0062',
  candidateName: 'Candidate_62',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 62. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 62)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 62. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 62.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_63: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0063',
  candidateName: 'Candidate_63',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 63. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 63)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 63. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 63.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_64: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0064',
  candidateName: 'Candidate_64',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 64. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 64)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 64. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 64.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_65: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0065',
  candidateName: 'Candidate_65',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 65. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 65)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 65. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 65.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_66: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0066',
  candidateName: 'Candidate_66',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 66. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 66)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 66. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 66.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_67: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0067',
  candidateName: 'Candidate_67',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 67. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 67)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 67. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 67.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_68: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0068',
  candidateName: 'Candidate_68',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 68. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 68)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 68. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 68.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_69: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0069',
  candidateName: 'Candidate_69',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 69. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 69)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 69. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 69.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_70: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0070',
  candidateName: 'Candidate_70',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 70. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 70)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 70. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 70.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_71: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0071',
  candidateName: 'Candidate_71',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 71. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 71)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 71. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 71.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_72: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0072',
  candidateName: 'Candidate_72',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 72. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 72)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 72. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 72.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_73: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0073',
  candidateName: 'Candidate_73',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 73. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 73)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 73. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 73.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_74: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0074',
  candidateName: 'Candidate_74',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 74. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 74)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 74. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 74.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_75: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0075',
  candidateName: 'Candidate_75',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 75. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 75)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 75. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 75.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_76: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0076',
  candidateName: 'Candidate_76',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 76. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 76)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 76. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 76.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_77: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0077',
  candidateName: 'Candidate_77',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 77. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 77)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 77. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 77.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_78: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0078',
  candidateName: 'Candidate_78',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 78. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 78)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 78. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 78.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_79: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0079',
  candidateName: 'Candidate_79',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 79. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 79)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 79. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 79.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_80: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0080',
  candidateName: 'Candidate_80',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 80. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 80)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 80. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 80.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_81: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0081',
  candidateName: 'Candidate_81',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 81. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 81)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 81. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 81.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_82: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0082',
  candidateName: 'Candidate_82',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 82. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 82)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 82. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 82.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_83: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0083',
  candidateName: 'Candidate_83',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 83. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 83)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 83. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 83.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_84: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0084',
  candidateName: 'Candidate_84',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 84. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 84)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 84. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 84.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_85: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0085',
  candidateName: 'Candidate_85',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 85. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 85)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 85. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 85.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_86: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0086',
  candidateName: 'Candidate_86',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 86. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 86)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 86. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 86.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_87: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0087',
  candidateName: 'Candidate_87',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 87. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 87)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 87. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 87.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_88: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0088',
  candidateName: 'Candidate_88',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 88. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 88)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 88. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 88.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_89: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0089',
  candidateName: 'Candidate_89',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 89. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 89)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 89. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 89.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_90: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0090',
  candidateName: 'Candidate_90',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 90. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 90)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 90. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 90.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_91: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0091',
  candidateName: 'Candidate_91',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 91. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 91)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 91. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 91.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_92: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0092',
  candidateName: 'Candidate_92',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 92. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 92)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 92. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 92.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_93: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0093',
  candidateName: 'Candidate_93',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 93. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 93)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 93. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 93.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_94: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0094',
  candidateName: 'Candidate_94',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 94. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 94)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 94. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 94.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_95: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0095',
  candidateName: 'Candidate_95',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 95. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 95)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 95. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 95.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_96: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0096',
  candidateName: 'Candidate_96',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 96. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 96)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 96. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 96.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_97: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0097',
  candidateName: 'Candidate_97',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 97. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 97)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 97. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 97.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_98: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0098',
  candidateName: 'Candidate_98',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 98. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 98)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 98. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 98.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};


export const fullInterviewTranscriptNode_99: FullSpeakingInterviewTranscript = {
  interviewId: 'transcript-band9-0099',
  candidateName: 'Candidate_99',
  examinerId: 'EXM_048',
  targetScore: 9.0,
  part1Dialogue: [
    { speaker: 'EXAMINER', text: 'Good morning. Could you state your full name for the record, please?', timeOffsetSec: 0 },
    { speaker: 'CANDIDATE', text: 'Good morning. My name is Alexander Vance, and you may address me as Alex.', timeOffsetSec: 5 },
    { speaker: 'EXAMINER', text: 'Thank you. Now, let us discuss your hometown. What is the most prominent landmark there?', timeOffsetSec: 12 },
    { speaker: 'CANDIDATE', text: 'Without question, it would be the historic 18th-century aqueduct that spans the northern river valley in district 99. It represents a masterclass in hydraulic engineering.', timeOffsetSec: 20 },
  ],
  part2LongTurn: {
    topic: 'Describe an arduous intellectual challenge you successfully navigated (Test 99)',
    candidateMonologue: 'I would like to elaborate upon my master dissertation project which centered on empirical econometrics and machine learning algorithms in domain 99. The primary difficulty lay in harmonizing heterogeneous datasets collected across distinct socioeconomic jurisdictions...',
    followUpQuestions: ['Did you receive institutional support during this endeavor?', 'Would you recommend this methodological framework to peers?'],
  },
  part3AbstractDiscussion: [
    {
      question: 'How do automated algorithms influence intellectual curiosity in academic scholarship?',
      response: 'While algorithmic automation undoubtedly accelerates data processing, it poses the risk of cognitive atrophy if researchers accept synthetic conclusions uncritically 99.',
      lexicalHighlights: ['cognitive atrophy', 'synthetic conclusions', 'epistemological rigor'],
    },
  ],
};
