import {useState, useEffect} from 'react';
import { useSearchParams } from "react-router-dom";
import {
  Elements,
  useStripe,
} from "@stripe/react-stripe-js";

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51O7U7BH0RcyNpJtr2Qe54jJr0iVe4lOCrwwuI7LZWwoRYTmmoh2GpgFQyxleLjvnaZVXRdTBj6AeXSPDI6Uy85QN00HTJ6RyMc');

const PaymentSuccess = () => {
  const stripe = useStripe();
  let [searchParams, setSearchParams] = useSearchParams();
  const [messages, setMessages] = useState('');

  useEffect(() => {
    if(!stripe) {
      return '';
    }

    const clientSecret = searchParams.get('payment_intent_client_secret');
    stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
      setMessages(`${messages}
      Payment Intent: ${paymentIntent.id}`);
    })
  }, [stripe]);

  return (
    <div className="sr-root">
      <div className="sr-main">
        <h1>Success</h1>

        <div id="messages" style={{display: "block"}}>
          {messages}
        </div>
      </div>
    </div>
  );
}

const Success = ({stripePromise}) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentSuccess />
    </Elements>
  );
}

export {
  Success
};