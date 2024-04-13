"use client";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { FormEvent, useState } from "react";
import { Card, Typography } from "../mtComponents";
import { mockedData } from "../mockedData";
import { createPaymentIntent } from "../actions";
import AddressForm from "../components/AddressForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function Page() {
  const [clientSecret, setClientSecret] = useState("");
  const [step, setStep] = useState("address");
  const { order } = mockedData;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const data = await createPaymentIntent({
      tickets: [
        {
          id: "ticket_id1",
          amount: 2,
        },
        {
          id: "ticket_id2",
          amount: 3,
        },
      ],
      currency: "PLN",
      user: {
        name: event.target.name.value,
        surname: event.target.surname.value,
        email: event.target.email.value,
      },
    });
    setClientSecret(data.client_secret);
    console.log("data", data);
    setStep("payment");
  };

  const appearance: Appearance = {
    theme: "stripe",
    labels: "floating",
    rules: {
      ".Input": {
        backgroundColor: "#ffffff",
      },
    },

    variables: {
      colorPrimary: "#011936",
      colorBackground: "#F6F8FA",
      colorText: "#30313d",
      colorDanger: "#df1b41",
      fontFamily: ' "Inter", sans-serif',
      fontLineHeight: "1.5",
      borderRadius: "8px",
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 h-[100%]">
      <div className="col-span-3 hidden lg:block  m-auto">
        <Typography placeholder="Your order" variant="h4" className="pb-12">
          Your order
        </Typography>
        <div className="w-[350px] h-[150px] flex flex-row mb-12">
          <div className="bg-[url('/lennykravitz.jpg')] w-[140px] h-[100%] bg-cover bg-center"></div>
          <div className="w-[280px] p-3">
            <Typography
              variant="paragraph"
              placeholder="event name"
              className="font-semibold text-xl text-black"
            >
              {order.name}
            </Typography>
            <Typography variant="paragraph" placeholder="city">
              {order.city}
            </Typography>
            <Typography variant="paragraph" placeholder="date">
              {order.date}
            </Typography>
          </div>
        </div>
        {order.items.map((element) => (
          <Card
            placeholder="event card"
            key={element.section}
            className="w-[350px] p-4 mb-12 bg-[#EBF5EE]"
          >
            <Typography
              variant="paragraph"
              placeholder="amount"
              className="pr-4"
            >
              section: <span className="font-semibold">{element.section}</span>
            </Typography>
            <Typography variant="paragraph" placeholder="amount">
              amount: <span className="font-semibold">{element.amount}</span>
            </Typography>
            <Typography variant="paragraph" placeholder="amount">
              price: <span className="font-semibold">{element.totalPrice}</span>
            </Typography>
          </Card>
        ))}
        <Typography placeholder="Total" variant="h4" className="pb-12">
          Total: {mockedData.order.totalPrice}
        </Typography>
      </div>
      <div className="col-span-5 p-6 w-[90%] sm:w-[80%] xl:w-[70%] m-auto">
        <Typography
          placeholder="Payment details"
          variant="h4"
          className="mb-12"
        >
          Payment details
        </Typography>
        {step === "address" ? (
          <AddressForm handleSubmit={handleSubmit} />
        ) : (
          clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              : (
              <CheckoutForm />)
            </Elements>
          )
        )}
      </div>
    </div>
  );
}
