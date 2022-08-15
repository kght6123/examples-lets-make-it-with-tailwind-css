import { h } from '../pragma'
import { LikeComponent } from './like'

export const App = (
  <main>
    <div class="container py-4 px-3 mx-auto backdrop-blur">
      <h1 class="fs-1 text-primary text-opacity-60">Hello, Bootstrap and Vite!</h1>
       {/* opacity-sm-60-hover は効かない */}
      <button class="btn btn-primary opacity-sm-60">Primary button</button>
      <LikeComponent big={true} />
      <p class="fs-5 text-decoration-underline w-10">sample app.</p>
      <p class="fs-6 invisible">copyright, kght6123.</p>
      <span class="position-fixed bg-danger p-2 top-75 start-25">Fixed</span>
    </div>
  </main>
)
