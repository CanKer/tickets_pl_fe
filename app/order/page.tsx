"use client";
import { Button } from "../mtComponents";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <Button placeholder="order" onClick={() => router.push("/checkout")}>
      confirm order
    </Button>
  );
}
