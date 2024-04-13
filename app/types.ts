export type ItemType = {
  tickets: { id: string; amount: number }[];
  currency: string;
  user: {
    name: string;
    surname: string;
    email: string;
  };
};

export type EventType = {
  name: string;
  slug: string;
  image: string;
  city: string;
  date: string;
  description: string;
  organizator: string;
  subEvents: { id: string; city: string; date: string }[];
};
