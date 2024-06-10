import { Button } from "../components/Button.tsx";

export default function Delete() {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => window.location.href = "greet/deleteResult"}>
        Delete
      </Button>
    </div>
  );
}
