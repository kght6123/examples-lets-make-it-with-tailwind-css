import { h } from "../../../src/pragma";
import { LikeComponent } from "./like";

export const App = (
  <main>
    <h1 class="text-3xl font-bold underline sm:hover:opacity-50">
      Hello Vanilla TSX + Tailwind CSS! For Admin
    </h1>
    <LikeComponent big={true} />
    <p class="text-3xs">sample app.</p>
    <p class="text-4xs">copyright, kght6123.</p>
  </main>
);
