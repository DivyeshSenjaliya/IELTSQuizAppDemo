import { create } from 'zustand';
import { PaymentState, Payment } from '../types';

/**
 * Payment Store - Manages payment and unlock report state
 */
export const usePaymentStore = create<PaymentState>((set) => ({
  isPaid: false,
  isPaymentLoading: false,
  paymentError: null,
  lastPayment: null,

  setIsPaid: (isPaid: boolean) => set({ isPaid, paymentError: null }),

  setPaymentLoading: (loading: boolean) => set({ isPaymentLoading: loading }),

  setPaymentError: (error: string | null) => set({ paymentError: error }),

  setLastPayment: (payment: Payment) => set({ lastPayment: payment }),
}));
