import React from 'react';
import logo from './logo.svg';
import './App.css';

export const App = ({
    children,
    background,
    large = false,
  }: {
    children?: React.ReactNode
    background?: string
    large?: boolean
  }): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>{children}</button>
      </header>
      <style jsx>{`
      p {
        color: red;
      }
      `}</style>
      <style jsx>{`
        button {
          color: #999;
          display: inline-block;
          font-size: 2em;
        }
      `}</style>
      <style jsx>{`
        button {
          padding: ${large ? '50' : '20'}px;
          background: ${background};
        }
      `}</style>
    </div>
  )
}
