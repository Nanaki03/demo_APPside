import { Button } from "../components/Button.tsx";

export default function Insert() {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => window.location.href = "greet/insertResult"}>
        Insert
      </Button>
    </div>
  );
}
