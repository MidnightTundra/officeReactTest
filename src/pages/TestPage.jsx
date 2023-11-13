import { Carousel, Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import { Success } from '../components/PaymentSuccess'
import {
    Elements,
    useStripe,
} from "@stripe/react-stripe-js";


export function TestPage() {


    return (

        <Success></Success>
    );
}