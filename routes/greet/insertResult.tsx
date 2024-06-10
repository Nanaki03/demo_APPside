import Home from "../../islands/Home.tsx";
import {
  Client,
  QueryArrayResult,
} from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

const client = new Client({
  user: "postgres",
  database: "postgres",
  password: "postgres",
  hostname: "db",
  port: 5432,
});

await client.connect();

interface UserOne {
  id: number;
  name: string;
}

export const handler: Handlers<UserOne> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const sid = url.searchParams.get("userID") || "";
    const id = Number(sid);
    const name = url.searchParams.get("userName") || "";

    if (id !== 0) {
      const qr = await client.queryObject<
        [number, string]
      >`INSERT INTO people VALUES(${id}, ${name})`;
    }

    return ctx.render({ id, name });
  },
};

export default function Page({ data }: PageProps<UserOne>) {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { id, name } = data;
  console.log(data);
  console.log(id);
  console.log(name);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <form>
        <a>ID:</a>
        <input
          class="object-center rounded border-2"
          type="text"
          name="userID"
        />
        <br></br>
        <a>名前:</a>
        <input
          class="object-center rounded border-2"
          type="text"
          name="userName"
        />
        <br></br>
        <button
          class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
          type="submit"
        >
          Insert
        </button>
      </form>
      {id !== 0 && <h1>ID:{id}に"{name}"を追加しました。</h1>}
      <Home />
    </div>
  );
}
