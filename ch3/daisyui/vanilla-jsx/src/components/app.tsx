import { h } from '../pragma'
import { LikeComponent } from './like'

export const App = (
  <main>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <div class="modal-action">
          <label for="my-modal" class="btn">Yay!</label>
        </div>
      </div>
    </div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello Vanilla TSX + daisyUI!</h1>
          <p class="py-6">sample daisyui app<LikeComponent big={true} /></p>
          <label for="my-modal" class="btn btn-primary modal-button border-2 border-solid border-gray-100 rounded-full">Get Started!</label>
        </div>
      </div>
    </div>
  </main>
)
