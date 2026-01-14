declare module 'react-native-razorpay' {
  interface RazorpayOptions {
    description: string;
    image?: string;
    currency: string;
    key_id: string;
    amount: number;
    name: string;
    order_id?: string;
    prefill?: {
      email?: string;
      contact?: string;
      name?: string;
    };
    theme?: {
      color?: string;
    };
    [key: string]: any;
  }

  interface RazorpayPaymentData {
    razorpay_payment_id: string;
    razorpay_order_id?: string;
    razorpay_signature?: string;
  }

  const RazorpayCheckout: {
    open(options: RazorpayOptions): Promise<RazorpayPaymentData>;
  };

  export default RazorpayCheckout;
}
