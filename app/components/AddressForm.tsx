"use client";
import { FormEvent } from "react";
import { Button, Input } from "../mtComponents";

export default function AddressForm({
  handleSubmit,
}: {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form id="address-form" onSubmit={handleSubmit}>
      <Input
        variant="outlined"
        label="Name"
        id="name"
        name="name"
        crossOrigin=""
      />
      <Input
        variant="outlined"
        label="Surname"
        name="surname"
        id="surname"
        crossOrigin=""
      />
      <Input
        variant="outlined"
        label="Email"
        name="email"
        id="email"
        crossOrigin=""
      />
      <Button
        placeholder="submit"
        id="submit"
        className="mt-8 bg-[#011936] w-[100%]"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
