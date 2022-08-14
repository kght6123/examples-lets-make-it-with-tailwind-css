import { h } from '../pragma'
import { LikeComponent } from './like'

export const App = (
  <main>
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>
    <LikeComponent big={true} />
    <p class="text-2xs">sample app.</p>
    <p class="text-3xs">copyright, kght6123.</p>
  </main>
)
