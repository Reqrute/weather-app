// import { css } from 'styled-components'
import img from './assets/image/day.jpg'
import img1 from './assets/image/day1.jpg'

const font = '1.1em "Fira Sans", sans-serif'

// Color palette
const black = '#000000'
const white = '#ffffff'
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'
const grey = '#808080'
const darkGrey = '#666666'

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)'
]

let backgroundImage

export default {
  boxShadows,
  font,
  backgroundImage,
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    white,
    grey,
    darkGrey,
    error
  }
}

export const dayTheme = {
  boxShadows,
  font,
  backgroundImage: `${img}`,
  colors: {
    white,
    primary: white,
    secondary,
    secondaryLight,
    grey,
    darkGrey,
    black
  }
}

export const daySTheme = {
  boxShadows,
  font,
  backgroundImage: `${img1}`,
  colors: {
    white,
    primary: white,
    secondary,
    secondaryLight,
    grey,
    darkGrey,
    black
  }
}
