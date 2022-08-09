import { useState } from 'react'
import styled from 'styled-components'
import reactLogo from './assets/react.svg'
import './App.css'

export const App = ({
  children,
  large = false,
}: {
  children?: React.ReactNode
  large?: boolean
}): JSX.Element => {
  const [count, setCount] = useState(0)
  const Title = styled.h1`
    font-size: ${large ? '2.5rem' : '1.5rem'};
    text-align: center;
    color: palevioletred;
  `
  const TomatoTitle = styled(Title)`
    color: tomato;
  `
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <TomatoTitle>Vite + React + Styled Components</TomatoTitle>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
