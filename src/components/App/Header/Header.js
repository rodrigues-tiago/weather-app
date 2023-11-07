import './Header.scss'
import { useState, useEffect, useRef } from 'react'

function Header() {
  const [backgroundColor, setBackgroundColor] = useState('#111111')
  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    const root = document.documentElement
    if (root) {
      root?.style.setProperty('--background-clr', backgroundColor)
      root?.style.setProperty('--clr-primary', color)
    }
  }, [backgroundColor, color])

  return (
    <header>
      <div>
        <h1 className="title">Weather App</h1>
      </div>
      <div className="header-options">
        <div>
          <input
            className="input-color"
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          ></input>
          <input
            className="input-color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          ></input>
        </div>
        <a href="https://github.com/rodrigues-tiago/weather-app" target="_blank">
          <button className="github-btn">Github</button>
        </a>
      </div>
    </header>
  )
}

export default Header
