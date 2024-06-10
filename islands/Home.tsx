import { Button } from "../components/Button.tsx";

export default function Home() {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => window.location.href = "/"}>
        Home
      </Button>
    </div>
  );
}
