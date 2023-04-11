import { createGlobalStyle, type DefaultTheme } from 'styled-components'
import theme from './theme'

export default createGlobalStyle <{ theme: DefaultTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: ${theme.font};
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
  #root {
    background-image:url( ${props => props.theme.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    display: flex;
  }
  `
