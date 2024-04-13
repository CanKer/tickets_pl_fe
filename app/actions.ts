"use server";

import { StripeElements } from "@stripe/stripe-js";
import { ItemType } from "./types";

const API_HOST = process.env.API_HOST;

export async function createUser(prevState: any, formData: FormData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const res = await fetch(`${API_HOST}/user`, {
      body: JSON.stringify(rawFormData),
      method: "POST",
    });
    return res.json();
    //  redirect(`/confirm`);
  } catch (error: any) {
    return {
      error:
        error.message === "user already exists"
          ? error.message
          : "Unable to create a user. Please try again later",
    };
  }
}

export async function createPaymentIntent(item: ItemType) {
  try {
    const res = await fetch(`${API_HOST}/payment/intent`, {
      body: JSON.stringify(item),
      method: "POST",
    });
    return res.json();
  } catch (error: any) {
    return {
      error: "Something went wrong. Please try again later",
    };
  }
}

export async function confirmPayment({
  elements,
  return_url,
}: {
  elements: StripeElements | null;
  return_url: string;
}) {
  try {
    const res = await fetch(`${API_HOST}/payment/confirm`, {
      body: JSON.stringify({
        elements,
        confirmParams: {
          return_url,
        },
      }),
      method: "POST",
    });
    return res.json();
  } catch (error: any) {
    return {
      error: "Something went wrong. Please try again later",
    };
  }
}
