import { h } from '../pragma'
import { LikeComponent } from './like'

export const App = (
  <main className="hello">
    <h1 class="text-3xl font-bold underline">
      Hello Vanilla TSX + Tailwind CSS!
    </h1>
    <LikeComponent big />
  </main>
)
