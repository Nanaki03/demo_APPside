import { useSignal } from "@preact/signals";
import type { Signal } from "@preact/signals";
import Search from "../islands/Search.tsx";
import Test from "../islands/Test.tsx";
import Insert from "../islands/Insert.tsx";
import Delete from "../islands/Delete.tsx";
import Update from "../islands/Update.tsx";


export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/taskhub.PNG"
          width="128"
          height="128"
          alt="taskhub logo"
        />
        <h1 class="text-4xl font-bold">Welcome to DBApp for CRUD</h1>
        <p class="my-4">
          Deno.js Fresh PostgreSQL tailwindCSSを用いた簡単なCRUD操作が可能なWebアプリケーション
        </p>
        <Search />
        <Insert />
        <Delete />
        <Update/>
      </div>
    </div>
  );
}
