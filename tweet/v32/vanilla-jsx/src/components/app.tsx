import { h } from "../pragma";
import { LikeComponent } from "./like";

export const App = (
  <main>
    <h1 class="text-3xl font-bold underline sm:hover:opacity-50">
      Hello Vanilla TSX + Tailwind CSS!
    </h1>
    <LikeComponent big={true} />
    <p class="text-2xs">sample app.</p>
    <p class="text-4xs">copyright, kght6123.</p>
    <label for="progressbar" class="block">Progress Bar<progress id="progressbar" max="100" value="70" class="supports-[accent-color]:accent-indigo-500 [appearance:progress-bar]">70%</progress></label>
    <label for="checkbox" class="block">CheckBox<input id="checkbox" type="checkbox" class="supports-[accent-color]:accent-indigo-500 " checked /></label>
  </main>
);
