import { h } from '../pragma'
import { LikeComponent } from './like'
import imagePath from '../assets/rinmon_D8S426520150807_TP_V4.jpg'

export const App = (
  <main style={`background-image: url(${imagePath})`}>
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
    <div class="container py-4 px-3 mx-auto backdrop-blur-xl backdrop">
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
