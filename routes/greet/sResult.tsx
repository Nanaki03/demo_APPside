import Search from "../../islands/Search.tsx";
import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import { Handlers, PageProps } from "$fresh/server.ts";


const client = new Client({
  user: "postgres",
  database: "postgres",
  password: "postgres",
  hostname: "db",
  port: 5432,
});
await client.connect();

// export const handler: Handlers<string> = {
//   async GET(req, ctx) {
//     return ctx.render({ userName:"username", });
//   },
// };

export default async function Home() {
  const result = await client.queryArray("SELECT * FROM people WHERE id=2");

  //const count = useSignal(3);

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">{result.rows}</h1>
        
        <Search/>
      </div>
    </div>
  );
}
