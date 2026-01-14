import { create } from 'zustand';
import { AuthState, User } from '../types';

/**
 * Auth Store - Manages user authentication and profile state
 */
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  setUser: (user: User) => set({ user, error: null }),

  clearUser: () => set({ user: null, error: null }),

  setLoading: (loading: boolean) => set({ isLoading: loading }),

  setError: (error: string | null) => set({ error }),
}));
