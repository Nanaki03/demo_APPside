import { Button } from "../components/Button.tsx";

export default function Update() {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => window.location.href = "greet/updateResult"}>
        UPDATE
      </Button>
    </div>
  );
}
