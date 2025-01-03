import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-c-neutral-900 p-250">
      <Button />
    </div>
  );
}
