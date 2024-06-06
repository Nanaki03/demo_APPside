import { useSignal } from "@preact/signals";
import type { Signal } from "@preact/signals";
import Search from "../islands/Search.tsx";
import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";

const client = new Client({
  user: "postgres",
  database: "postgres",
  password: "postgres",
  hostname: "db",
  port: 5432,
});
await client.connect();


export default async function Home() {
  const result = await client.queryArray("SELECT * FROM people WHERE id=1");

  //const count = useSignal(3);

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> {result.rows}
        </p>
        <form action="/sResult" method="get">
        <input type="text" name="username"></input>
        <Search/>
        </form>
      </div>
    </div>
  );
}
