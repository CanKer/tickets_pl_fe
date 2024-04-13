import { Button, Card, Typography } from "../mtComponents";
import { EventType } from "../types";

interface Props {
  event: EventType;
  setStep: any;
  setSubEventId: any;
}

export default function ChooseSubEvent({
  event,
  setStep,
  setSubEventId,
}: Props) {
  const handleOnClick = (id: string) => {
    setStep("chooseSection");
    setSubEventId(id);
  };
  return event?.subEvents.map((element) => (
    <Card
      placeholder="ticket card"
      className="flex flex-row justify-between items-center bg-[#041936] border-2 border-[#ffffff] px-16 py-6 mb-12 shadow-[2px_2px_16px_rgba(0,0,0,1)]"
      key={element.id}
    >
      <div className="text-[#ffffff] text-2xl flex flex-col items-center">
        <Typography
          placeholder="Event day"
          variant="paragraph"
          className="text-2xl"
        >
          {element.date.slice(0, -8)}
        </Typography>
        <Typography
          placeholder="Event month"
          variant="paragraph"
          className="text-2xl"
        >
          {/* {element.date.slice(3, -5)} */}
          lipca
        </Typography>
        <Typography
          placeholder="Event year"
          variant="paragraph"
          className="text-2xl"
        >
          {element.date.slice(6)}
        </Typography>
      </div>
      <Typography
        placeholder="Event city"
        variant="paragraph"
        className="text-[#ffffff] uppercase text-2xl"
      >
        {element.city}
      </Typography>
      <Button
        placeholder="kup bilet"
        className="text-[#ffffff] uppercase bg-[#FB8360] text-2xl"
        onClick={() => handleOnClick(element.id)}
      >
        kup bilet
      </Button>
    </Card>
  ));
}
