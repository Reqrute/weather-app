// import { css } from 'styled-components'
import Clouds from './assets/image/Clouds.jpg'
import Rain from './assets/image/Rain.jpg'
import Sun from './assets/image/Sun.jpg'
import Snow from './assets/image/Snow.jpg'
import Thunderstorm from './assets/image/Thunderstorm.jpg'
import Mist from './assets/image/Mist.jpg'

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

export const SunTheme = {
  boxShadows,
  font,
  backgroundImage: `${Sun}`,
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
export const MistTheme = {
  boxShadows,
  font,
  backgroundImage: `${Mist}`,
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

export const ThunderstormTheme = {
  boxShadows,
  font,
  backgroundImage: `${Thunderstorm}`,
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
export const SnowTheme = {
  boxShadows,
  font,
  backgroundImage: `${Snow}`,
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
export const RainTheme = {
  boxShadows,
  font,
  backgroundImage: `${Rain}`,
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

export const CloudsTheme = {
  boxShadows,
  font,
  backgroundImage: `${Clouds}`,
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
