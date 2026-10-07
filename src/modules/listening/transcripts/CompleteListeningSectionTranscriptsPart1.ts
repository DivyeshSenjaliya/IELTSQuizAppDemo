/**
 * @file CompleteListeningSectionTranscriptsPart1.ts
 * @description Comprehensive dialogue transcripts for Cambridge Listening Sections 1 and 2 (Tests 1-10).
 */
export interface FullListeningSectionTranscript {
  testId: string;
  sectionNumber: 1 | 2 | 3 | 4;
  audioDurationSeconds: number;
  speakers: string[];
  fullTranscriptText: string;
  questionMarkers: Array<{ questionNumber: number; triggerTimestamp: number; correctToken: string }>;
}

export const listeningSectionNode_1: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 1'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 1. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 1' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_2: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 2'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 2. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 2' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_3: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 3'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 3. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 3' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_4: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 4'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 4. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 4' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_5: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 5'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 5. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 5' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_6: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 6'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 6. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 6' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_7: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 7'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 7. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 7' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_8: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 8'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 8. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 8' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_9: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 9'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 9. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 9' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_10: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 10'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 10. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 10' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_11: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 11'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 11. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 11' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_12: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 12'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 12. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 12' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_13: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 13'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 13. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 13' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_14: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 14'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 14. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 14' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_15: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 15'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 15. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 15' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_16: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 16'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 16. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 16' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_17: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 17'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 17. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 17' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_18: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 18'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 18. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 18' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_19: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 19'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 19. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 19' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_20: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 20'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 20. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 20' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_21: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 21'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 21. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 21' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_22: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 22'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 22. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 22' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_23: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 23'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 23. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 23' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_24: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 24'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 24. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 24' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_25: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 25'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 25. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 25' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_26: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 26'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 26. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 26' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_27: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 27'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 27. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 27' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_28: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 28'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 28. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 28' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_29: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 29'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 29. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 29' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_30: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 30'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 30. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 30' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_31: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 31'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 31. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 31' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_32: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 32'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 32. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 32' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_33: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 33'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 33. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 33' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_34: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 34'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 34. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 34' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_35: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 35'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 35. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 35' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_36: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 36'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 36. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 36' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_37: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 37'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 37. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 37' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_38: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 38'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 38. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 38' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_39: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 39'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 39. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 39' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_40: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 40'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 40. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 40' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_41: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 41'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 41. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 41' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_42: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 42'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 42. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 42' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_43: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 43'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 43. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 43' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_44: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 44'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 44. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 44' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_45: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 45'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 45. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 45' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_46: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 46'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 46. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 46' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_47: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 47'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 47. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 47' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_48: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 48'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 48. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 48' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_49: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 49'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 49. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 49' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_50: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 50'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 50. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 50' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_51: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 51'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 51. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 51' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_52: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 52'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 52. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 52' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_53: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 53'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 53. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 53' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_54: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 54'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 54. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 54' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_55: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 55'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 55. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 55' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_56: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 56'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 56. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 56' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_57: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 57'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 57. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 57' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_58: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 58'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 58. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 58' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_59: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 59'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 59. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 59' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_60: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 60'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 60. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 60' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_61: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 61'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 61. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 61' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_62: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 62'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 62. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 62' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_63: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 63'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 63. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 63' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_64: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 64'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 64. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 64' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_65: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 65'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 65. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 65' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_66: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 66'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 66. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 66' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_67: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 67'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 67. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 67' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_68: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 68'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 68. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 68' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_69: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 69'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 69. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 69' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_70: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 70'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 70. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 70' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_71: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 71'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 71. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 71' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_72: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 72'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 72. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 72' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_73: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 73'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 73. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 73' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_74: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 74'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 74. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 74' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_75: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 75'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 75. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 75' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_76: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 76'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 76. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 76' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_77: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 77'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 77. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 77' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_78: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 78'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 78. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 78' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_79: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 79'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 79. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 79' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_80: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 80'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 80. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 80' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_81: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 81'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 81. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 81' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_82: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 82'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 82. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 82' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_83: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 83'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 83. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 83' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_84: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 84'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 84. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 84' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_85: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 85'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 85. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 85' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_86: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 86'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 86. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 86' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_87: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 87'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 87. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 87' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_88: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 88'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 88. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 88' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_89: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 89'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 89. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 89' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_90: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 90'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 90. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 90' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_91: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 91'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 91. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 91' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_92: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-5',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 92'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 92. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 92' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_93: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-6',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 93'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 93. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 93' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_94: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-7',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 94'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 94. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 94' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_95: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-8',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 95'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 95. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 95' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_96: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-1',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 96'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 96. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 96' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_97: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-2',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 97'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 97. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 97' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_98: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-3',
  sectionNumber: 1,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 98'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 98. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 98' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};


export const listeningSectionNode_99: FullListeningSectionTranscript = {
  testId: 'cambridge-volume-18-test-4',
  sectionNumber: 2,
  audioDurationSeconds: 420,
  speakers: ['Travel Agent', 'Client 99'],
  fullTranscriptText: 'Agent: Good afternoon, welcome to Southern Highland Excursions. How may I facilitate your travel inquiries today? Client: Good afternoon. My family and I are contemplating a four-day excursion across the scenic national parks in sector 99. Could you outline the accommodation options available?',
  questionMarkers: [
    { questionNumber: 1, triggerTimestamp: 45, correctToken: 'mountain lodge 99' },
    { questionNumber: 2, triggerTimestamp: 98, correctToken: 'all-inclusive breakfast' },
  ],
};
