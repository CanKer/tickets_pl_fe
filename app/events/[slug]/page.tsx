"use client";
import { Typography } from "../../mtComponents";
import Image from "next/image";
import { mockedData } from "../../mockedData";
import { useState } from "react";
import ChooseSubEvent from "@/app/components/ChooseSubEvent";

export default function Page({ params }: { params: { slug: string } }) {
  const [step, setStep] = useState("chooseEvent");
  const [subEventId, setSubEventId] = useState("");
  const event = mockedData.events.find(
    (element) => element.slug === params.slug
  );
  const subEvent = event?.subEvents.find(
    (element) => element.id === subEventId
  );

  return (
    <div className="min-h-[100%] bg-[#041936] px-24 py-12">
      <Typography
        placeholder="Event title"
        variant="h1"
        className="text-[#FB8360] pb-3 text-6xl font-normal"
      >
        {event?.name}
      </Typography>
      <Typography
        placeholder="Event city"
        variant="paragraph"
        className="text-[#ffffff] pb-3 text-xl"
      >
        {event?.city}
      </Typography>
      <Typography
        placeholder="Event date"
        variant="paragraph"
        className="text-[#ffffff] pb-12 text-xl"
      >
        {event?.date}
      </Typography>
      <div className="grid grid-cols-8">
        <div className="col-span-3">
          <Image
            alt="event poster"
            width="350"
            height="500"
            src={`/${event?.image}`}
            className="shadow-[2px_2px_16px_rgba(0,0,0,1)]"
          />
        </div>
        <div className="col-span-5 w-[70%] mx-auto">
          {event && step === "chooseEvent" ? (
            <ChooseSubEvent
              event={event}
              setStep={setStep}
              setSubEventId={setSubEventId}
            />
          ) : (
            <div>{subEvent?.city}</div>
          )}
        </div>
      </div>
      <Typography
        placeholder="Event description"
        variant="paragraph"
        className="text-[#ffffff] pt-12 text-xl"
      >
        {event?.description}
      </Typography>
      <Typography
        placeholder="Event organizator"
        variant="paragraph"
        className="text-[#ffffff] pt-12 text-xl"
      >
        Organizator: {event?.organizator}
      </Typography>
    </div>
  );
}
