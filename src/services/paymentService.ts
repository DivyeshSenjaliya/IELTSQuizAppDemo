/**
 * Payment Service
 * Handles Razorpay integration and payment processing
 */

import RazorpayCheckout from 'react-native-razorpay';
import { config } from './config';
import { paymentAPI, authAPI } from './supabase';
import { Payment } from '../types';

const PAYMENT_AMOUNT = 99; // Amount in rupees (₹99)

/**
 * Open Razorpay checkout
 */
export const openRazorpayCheckout = async (
  userId: string,
  userEmail: string,
  userName: string
): Promise<Payment | null> => {
  return new Promise((resolve, reject) => {
    const options: any = {
      description: 'IELTS Quiz Report Unlock',
      currency: 'INR',
      key: "rzp_test_T4gOWkML32k09q",
      amount: PAYMENT_AMOUNT * 100, // Amount in paise
      name: 'IELTS Quiz App',
      theme: { color: '#007AFF' },
    };

    RazorpayCheckout.open(options)
      .then(async (data: any) => {
        try {
          // Payment successful
          const payment = await paymentAPI.savePayment(
            userId,
            data.razorpay_payment_id,
            data.razorpay_order_id || '',
            PAYMENT_AMOUNT,
            'completed'
          );

          // Update user's payment status
          await authAPI.updatePaymentStatus(userId, true);

          resolve({
            id: payment.id,
            userId: payment.user_id,
            razorpayPaymentId: payment.razorpay_payment_id,
            razorpayOrderId: payment.razorpay_order_id,
            amount: payment.amount,
            status: payment.status,
            createdAt: payment.created_at,
          });
        } catch (error) {
          console.error('Error saving payment:', error);
          reject(new Error('Failed to save payment details'));
        }
      })
      .catch((error: any) => {
        if (error.code !== -1) {
          // -1 is user cancellation
          console.error('Razorpay error:', error);

          // Save failed payment attempt
          paymentAPI.savePayment(userId, '', '', PAYMENT_AMOUNT, 'failed').catch((err) =>
            console.error('Error saving failed payment:', err)
          );

          reject(new Error(error.description || 'Payment failed'));
        } else {
          reject(new Error('Payment cancelled'));
        }
      });
  });
};

/**
 * Get latest payment for user
 */
export const getLatestPayment = async (userId: string): Promise<Payment | null> => {
  try {
    const data = await paymentAPI.getLatestPayment(userId);

    if (!data) return null;

    return {
      id: data.id,
      userId: data.user_id,
      razorpayPaymentId: data.razorpay_payment_id,
      razorpayOrderId: data.razorpay_order_id,
      amount: data.amount,
      status: data.status,
      createdAt: data.created_at,
    };
  } catch (error) {
    console.error('Error fetching payment:', error);
    throw error;
  }
};

/**
 * Check if user has completed payment
 */
export const hasUserPaid = async (userId: string): Promise<boolean> => {
  try {
    const isPaid = await authAPI.checkIfUserPaid(userId);
    return isPaid;
  } catch (error) {
    console.error('Error checking payment status:', error);
    return false;
  }
};

/**
 * Verify payment with Razorpay (should be done on backend)
 */
export const verifyPayment = async (
  paymentId: string,
  signature: string,
  orderId: string
): Promise<boolean> => {
  try {
    // In production, this should be called from your backend
    // to verify the signature securely
    console.log('Payment verification:', { paymentId, orderId });
    return true;
  } catch (error) {
    console.error('Error verifying payment:', error);
    return false;
  }
};

/**
 * Get payment amount
 */
export const getPaymentAmount = (): number => {
  return PAYMENT_AMOUNT;
};
