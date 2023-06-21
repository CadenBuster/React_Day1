import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Button from './components/Button.tsx'
import Animate from './components/Animate.tsx'
import Click from './components/Click.tsx'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
    <Click/>
    <Button/>
    <Animate/>
  </React.StrictMode>,
)
