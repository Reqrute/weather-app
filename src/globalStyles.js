import { createGlobalStyle } from 'styled-components'
import img from './assets/image/day.jpg'

import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: ${theme.font};
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }
  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('${img}');
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #root {
    display: flex;
  }
  `
