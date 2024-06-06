import { Button } from "../components/Button.tsx";



export default function Search() {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => window.location.href="greet/sResult"}>Search</Button>
    </div>
  );
}