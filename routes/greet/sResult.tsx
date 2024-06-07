import Search from "../../islands/Search.tsx";
import { Client,QueryArrayResult } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import { h, PageProps } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";


const client = new Client({
  user: "postgres",
  database: "postgres",
  password: "postgres",
  hostname: "db",
  port: 5432,
});
console.log("a");
await client.connect();
console.log("b");

interface User{
  rID:number[];
  rName:string[];

}


export const handler: Handlers<User> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const sid = url.searchParams.get('userID') || "";
    const id=Number(sid);
    let array: Array<[number, string]>;
    if(id!==0){
      const qr = await client.queryArray<[number,string]>(`SELECT * FROM people WHERE id = $1`,[id]);
      array=qr.rows;
   }else{
     const qr = await client.queryArray<[number,string]>(`SELECT * FROM people`);
     array=qr.rows;
   }
    const rID:number[] = array.map(row=>row[0]);
    const rName:string[] = array.map(row=>row[1]);
    return ctx.render({rID,rName});
  },
};

export default function Page({ data }: PageProps<User>) {
  const { rID, rName } = data;
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <form>
        <input class="object-center border-solid rounded border-2" type="text" name="userID"/><br></br>
        <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors" type="submit">Search</button>
      </form>
      <ul>
       {rName.map((foo) => <li key={foo}>{foo}</li>)}
      </ul>
    </div>
  );
}
