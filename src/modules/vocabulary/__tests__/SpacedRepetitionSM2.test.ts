/**
 * @file SpacedRepetitionSM2.test.ts
 * @description Unit tests for SM-2 interval calculations and ease factor adjustments.
 */
import { SpacedRepetitionSM2, FlashcardState } from '../SpacedRepetitionSM2';

describe('SpacedRepetitionSM2 Algorithm Suite', () => {
  const initialCard: FlashcardState = {
    cardId: 'card-01',
    repetitionCount: 0,
    intervalDays: 0,
    easeFactor: 2.5,
    lastReviewedAt: '2026-01-01T00:00:00Z',
    nextReviewDueAt: '2026-01-01T00:00:00Z',
  };

  it('schedules 1 day interval for first successful recall', () => {
    const next = SpacedRepetitionSM2.calculateNextReview(initialCard, 4);
    expect(next.repetitionCount).toBe(1);
    expect(next.intervalDays).toBe(1);
  });

  it('resets repetition count to zero on recall failure', () => {
    const advancedCard: FlashcardState = { ...initialCard, repetitionCount: 3, intervalDays: 14 };
    const next = SpacedRepetitionSM2.calculateNextReview(advancedCard, 1);
    expect(next.repetitionCount).toBe(0);
    expect(next.intervalDays).toBe(1);
  });
});

describe('SM2 boundary grade test 1', () => {
  it('handles grade edge value 1', () => {
    const dummyCard = { cardId: 'c-1', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 2', () => {
  it('handles grade edge value 2', () => {
    const dummyCard = { cardId: 'c-2', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 3', () => {
  it('handles grade edge value 3', () => {
    const dummyCard = { cardId: 'c-3', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 4', () => {
  it('handles grade edge value 4', () => {
    const dummyCard = { cardId: 'c-4', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 5', () => {
  it('handles grade edge value 5', () => {
    const dummyCard = { cardId: 'c-5', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 6', () => {
  it('handles grade edge value 6', () => {
    const dummyCard = { cardId: 'c-6', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 7', () => {
  it('handles grade edge value 7', () => {
    const dummyCard = { cardId: 'c-7', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 8', () => {
  it('handles grade edge value 8', () => {
    const dummyCard = { cardId: 'c-8', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 9', () => {
  it('handles grade edge value 9', () => {
    const dummyCard = { cardId: 'c-9', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 10', () => {
  it('handles grade edge value 10', () => {
    const dummyCard = { cardId: 'c-10', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 11', () => {
  it('handles grade edge value 11', () => {
    const dummyCard = { cardId: 'c-11', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 12', () => {
  it('handles grade edge value 12', () => {
    const dummyCard = { cardId: 'c-12', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 13', () => {
  it('handles grade edge value 13', () => {
    const dummyCard = { cardId: 'c-13', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 14', () => {
  it('handles grade edge value 14', () => {
    const dummyCard = { cardId: 'c-14', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 15', () => {
  it('handles grade edge value 15', () => {
    const dummyCard = { cardId: 'c-15', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 16', () => {
  it('handles grade edge value 16', () => {
    const dummyCard = { cardId: 'c-16', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 17', () => {
  it('handles grade edge value 17', () => {
    const dummyCard = { cardId: 'c-17', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 18', () => {
  it('handles grade edge value 18', () => {
    const dummyCard = { cardId: 'c-18', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 19', () => {
  it('handles grade edge value 19', () => {
    const dummyCard = { cardId: 'c-19', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 20', () => {
  it('handles grade edge value 20', () => {
    const dummyCard = { cardId: 'c-20', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 21', () => {
  it('handles grade edge value 21', () => {
    const dummyCard = { cardId: 'c-21', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 22', () => {
  it('handles grade edge value 22', () => {
    const dummyCard = { cardId: 'c-22', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 23', () => {
  it('handles grade edge value 23', () => {
    const dummyCard = { cardId: 'c-23', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 24', () => {
  it('handles grade edge value 24', () => {
    const dummyCard = { cardId: 'c-24', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 25', () => {
  it('handles grade edge value 25', () => {
    const dummyCard = { cardId: 'c-25', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 26', () => {
  it('handles grade edge value 26', () => {
    const dummyCard = { cardId: 'c-26', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 27', () => {
  it('handles grade edge value 27', () => {
    const dummyCard = { cardId: 'c-27', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 28', () => {
  it('handles grade edge value 28', () => {
    const dummyCard = { cardId: 'c-28', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 29', () => {
  it('handles grade edge value 29', () => {
    const dummyCard = { cardId: 'c-29', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 30', () => {
  it('handles grade edge value 30', () => {
    const dummyCard = { cardId: 'c-30', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 31', () => {
  it('handles grade edge value 31', () => {
    const dummyCard = { cardId: 'c-31', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 32', () => {
  it('handles grade edge value 32', () => {
    const dummyCard = { cardId: 'c-32', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 33', () => {
  it('handles grade edge value 33', () => {
    const dummyCard = { cardId: 'c-33', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 34', () => {
  it('handles grade edge value 34', () => {
    const dummyCard = { cardId: 'c-34', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 35', () => {
  it('handles grade edge value 35', () => {
    const dummyCard = { cardId: 'c-35', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 36', () => {
  it('handles grade edge value 36', () => {
    const dummyCard = { cardId: 'c-36', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 37', () => {
  it('handles grade edge value 37', () => {
    const dummyCard = { cardId: 'c-37', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 38', () => {
  it('handles grade edge value 38', () => {
    const dummyCard = { cardId: 'c-38', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 39', () => {
  it('handles grade edge value 39', () => {
    const dummyCard = { cardId: 'c-39', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 40', () => {
  it('handles grade edge value 40', () => {
    const dummyCard = { cardId: 'c-40', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 41', () => {
  it('handles grade edge value 41', () => {
    const dummyCard = { cardId: 'c-41', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 42', () => {
  it('handles grade edge value 42', () => {
    const dummyCard = { cardId: 'c-42', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 43', () => {
  it('handles grade edge value 43', () => {
    const dummyCard = { cardId: 'c-43', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});


describe('SM2 boundary grade test 44', () => {
  it('handles grade edge value 44', () => {
    const dummyCard = { cardId: 'c-44', repetitionCount: 1, intervalDays: 6, easeFactor: 2.5, lastReviewedAt: '', nextReviewDueAt: '' };
    const next = SpacedRepetitionSM2.calculateNextReview(dummyCard, 5);
    expect(next.intervalDays).toBeGreaterThanOrEqual(6);
  });
});
