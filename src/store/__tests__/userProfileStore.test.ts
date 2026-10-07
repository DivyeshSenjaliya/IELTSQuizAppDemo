/**
 * User Profile Store Unit Tests
 */

import { useUserProfileStore } from '../userProfileStore';

describe('useUserProfileStore', () => {
  beforeEach(() => {
    useUserProfileStore.getState().resetProfile();
  });

  it('updates target band with clamp boundaries between 1 and 9', () => {
    const { setTargetBand } = useUserProfileStore.getState();

    setTargetBand(8.5);
    expect(useUserProfileStore.getState().profile.targetBand).toBe(8.5);

    setTargetBand(10.5);
    expect(useUserProfileStore.getState().profile.targetBand).toBe(9.0);

    setTargetBand(0.5);
    expect(useUserProfileStore.getState().profile.targetBand).toBe(1.0);
  });

  it('toggles bookmarks reliably without duplicate IDs', () => {
    const { toggleBookmark } = useUserProfileStore.getState();
    const testId = 'TEST_Q_999';

    // Add bookmark
    toggleBookmark(testId);
    expect(useUserProfileStore.getState().profile.bookmarkedQuestionIds).toContain(testId);

    // Remove bookmark
    toggleBookmark(testId);
    expect(useUserProfileStore.getState().profile.bookmarkedQuestionIds).not.toContain(testId);
  });

  it('records mistakes and resolves them', () => {
    const { recordMistake, resolveMistake } = useUserProfileStore.getState();
    const errorId = 'ERR_Q_404';

    recordMistake(errorId);
    expect(useUserProfileStore.getState().profile.mistakeQuestionIds).toContain(errorId);

    // Should not duplicate
    recordMistake(errorId);
    const count = useUserProfileStore
      .getState()
      .profile.mistakeQuestionIds.filter((id) => id === errorId).length;
    expect(count).toBe(1);

    resolveMistake(errorId);
    expect(useUserProfileStore.getState().profile.mistakeQuestionIds).not.toContain(errorId);
  });

  it('records study session minutes correctly', () => {
    const { recordStudySession } = useUserProfileStore.getState();
    const initialMinutes = useUserProfileStore.getState().profile.totalStudyMinutes;

    recordStudySession(30);
    expect(useUserProfileStore.getState().profile.totalStudyMinutes).toBe(initialMinutes + 30);
  });

  it('records completed mock tests and updates estimated band', () => {
    const { recordCompletedMockTest } = useUserProfileStore.getState();
    const initialMocks = useUserProfileStore.getState().profile.completedMockTestsCount;

    recordCompletedMockTest(7.5);
    expect(useUserProfileStore.getState().profile.completedMockTestsCount).toBe(initialMocks + 1);
    expect(useUserProfileStore.getState().profile.currentEstimatedBand).toBe(7.5);
  });
});
