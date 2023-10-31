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
        <div className="svg-container">
          <a href="https://github.com/rodrigues-tiago/weather-app" target="_blank">
            <svg
              className="github-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 17 18"
              fill="none"
            >
              <path
                d="M16.2747 7.1226C16.2706 6.04168 15.8977 4.99452 15.2177 4.15427C15.4485 3.19361 15.3765 2.18506 15.0115 1.26696C14.9759 1.17972 14.9215 1.10144 14.8521 1.03775C14.7827 0.974073 14.7 0.926576 14.61 0.898683C14.3522 0.810296 13.3763 0.64457 11.3876 1.93355C10.5323 1.70782 9.64991 1.60124 8.76545 1.61683C7.87977 1.60104 6.99615 1.70762 6.13962 1.93355C4.09935 0.615108 3.03871 0.82871 2.82511 0.891317C2.73464 0.920457 2.65173 0.969246 2.58233 1.03419C2.51293 1.09913 2.45876 1.17862 2.42369 1.26696C2.05775 2.18207 1.98316 3.18782 2.21008 4.1469C1.50786 4.98294 1.13352 6.04576 1.15681 7.13733C1.15681 11.2105 3.48801 12.4405 5.62403 12.8751C5.51439 13.1433 5.43891 13.4241 5.39938 13.7111C5.39553 13.7417 5.39553 13.7726 5.39938 13.8032V14.9301C3.45487 15.0922 3.03871 13.9542 2.9982 13.8253C2.98877 13.7952 2.97771 13.7657 2.96506 13.7369C2.58948 12.9706 1.92834 12.3822 1.12366 12.098C0.961522 12.0438 0.78449 12.0563 0.631509 12.1326C0.478529 12.2089 0.362131 12.3429 0.307922 12.505C0.253713 12.6671 0.266134 12.8442 0.342452 12.9971C0.418769 13.1501 0.552732 13.2665 0.71487 13.3207C1.16079 13.4818 1.53266 13.8 1.76078 14.2157C2.01858 15.0516 3.07186 16.3738 5.39201 16.2265V17.2871C5.39201 17.458 5.45991 17.622 5.58078 17.7428C5.70164 17.8637 5.86557 17.9316 6.0365 17.9316C6.20743 17.9316 6.37136 17.8637 6.49222 17.7428C6.61309 17.622 6.68099 17.458 6.68099 17.2871V13.8511C6.72989 13.4758 6.8932 13.1248 7.1487 12.8457C7.23821 12.7619 7.3018 12.6542 7.33194 12.5353C7.36207 12.4165 7.35748 12.2915 7.31871 12.1752C7.27994 12.0589 7.20862 11.9561 7.11321 11.8791C7.0178 11.8021 6.9023 11.7541 6.78042 11.7408C4.53392 11.4793 2.45683 10.7391 2.45683 7.11155C2.4419 6.67367 2.51798 6.23746 2.68026 5.83049C2.84254 5.42353 3.08749 5.05465 3.39962 4.7472C3.48357 4.65685 3.54156 4.54552 3.56749 4.42496C3.59342 4.30439 3.58632 4.17906 3.54694 4.0622C3.32998 3.43176 3.31581 2.74922 3.50642 2.11032C4.29721 2.28886 5.03981 2.63692 5.68295 3.13045C5.7656 3.18515 5.8595 3.2205 5.9577 3.23389C6.05589 3.24728 6.15584 3.23836 6.2501 3.20779C7.06839 2.95873 7.92144 2.84308 8.7765 2.86529C9.63035 2.84303 10.4822 2.95868 11.2992 3.20779C11.3934 3.23863 11.4934 3.24769 11.5917 3.2343C11.6899 3.2209 11.7838 3.1854 11.8664 3.13045C12.4858 2.65583 13.1948 2.31134 13.9508 2.11769C14.1386 2.76365 14.1218 3.45189 13.9029 4.08798C13.8669 4.19413 13.8595 4.30791 13.8815 4.41783C13.9035 4.52776 13.9541 4.62994 14.0282 4.71405C14.6378 5.36501 14.9832 6.21976 14.9967 7.11155C14.9967 10.7317 12.8128 11.483 10.6731 11.7408C10.545 11.7551 10.4242 11.8076 10.3264 11.8916C10.2287 11.9756 10.1585 12.0871 10.1251 12.2116C10.0917 12.3361 10.0966 12.4678 10.1392 12.5894C10.1817 12.7111 10.26 12.8171 10.3638 12.8935C10.5921 13.0666 10.8573 13.5527 10.8573 14.3666V17.2834C10.8573 17.4543 10.9252 17.6183 11.046 17.7391C11.1669 17.86 11.3308 17.9279 11.5018 17.9279C11.6727 17.9279 11.8366 17.86 11.9575 17.7391C12.0783 17.6183 12.1462 17.4543 12.1462 17.2834V14.3666C12.153 13.8538 12.0591 13.3445 11.87 12.8677C13.601 12.4995 16.2747 11.3615 16.2747 7.1226Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
