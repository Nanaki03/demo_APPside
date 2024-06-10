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

interface User {
  rID: number[];
  rName: string[];
}

export const handler: Handlers<User> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const sid = url.searchParams.get("userID") || "";
    const id = Number(sid);
    const username=url.searchParams.get("userName") || "";
    const usernameAfter=url.searchParams.get("userNameAfter") || "";

    const a=await client.queryArray<[string]>`UPDATE people SET name=${usernameAfter} WHERE id=${id} AND name=${username}`;



    let array: Array<[number, string]>;
    const qr = await client.queryArray<[number, string]>(
        `SELECT * FROM people`,
        );
      array = qr.rows;
    const rID: number[] = array.map((row) => row[0]);
    const rName: string[] = array.map((row) => row[1]);
    return ctx.render({ rID, rName });
  },
};

export default function Page({ data }: PageProps<User>) {
  const { rID, rName } = data;
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <form>
      <a>変更するID:</a>
        <input
          class="object-center rounded border-2"
          type="text"
          name="userID"
        />
        <br></br>
        <a>変更前の名前:</a>
        <input
          class="object-center rounded border-2"
          type="text"
          name="userName"
        />
        <br></br>
        <a>変更後の名前:</a>
        <input
          class="object-center rounded border-2"
          type="text"
          name="userNameAfter"
        />
        <br></br>
        <button
          class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
          type="submit"
        >UPDATE</button>
      </form>
      <ul>
        {rID.map((id, index) => (
          <li key={id}>
            <a>{id}: {rName[index]}</a>
          </li>
        ))}
      </ul>
      <Home />
    </div>
  );
}
