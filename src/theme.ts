/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Clouds from '@assets/image/Clouds.jpg'
import Rain from '@assets/image/Rain.jpg'
import Sun from '@assets/image/Sun.jpg'
import Snow from '@assets/image/Snow.jpg'
import Thunderstorm from '@assets/image/Thunderstorm.jpg'
import Mist from '@assets/image/Mist.jpg'
declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundImage?: string
    colors: {
      whiteBack: string
      buttonEffect: string
      error: string
      black: string
      white: string
      brightBlue: string
      blackBack: string
    }

  }
}

const font: string = '25px "Fira Sans", sans-serif'

// Color palette
const black: string = '#000000'
const white: string = '#ffffff'
const error: string = '#c86464'
const brightBlue: string = '#00008b'
const blackBack: string = 'rgba(26, 24, 47, 0.15)'
const whiteBack: string = 'rgba(255,255,255,0.2)'
const buttonEffect: string = '#151515'
const buttonEffectAlt: string = '#eaeaea'

const boxShadows: string[] = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)'
]

let backgroundImage

export default {
  boxShadows,
  font,
  backgroundImage,
  colors: {
    error,
    black,
    white,
    brightBlue,
    blackBack,
    whiteBack,
    buttonEffect

  }
}

export const SunTheme = {
  backgroundImage: `${Sun}`
}
export const MistTheme = {
  backgroundImage: `${Mist}`
}

export const ThunderstormTheme = {
  backgroundImage: `${Thunderstorm}`
}

export const SnowTheme = {
  backgroundImage: `${Snow}`
}

export const RainTheme = {
  backgroundImage: `${Rain}`
}

export const CloudsTheme = {
  backgroundImage: `${Clouds}`
}

export const LightTheme = {
  colors: {
    white,
    brightBlue,
    blackBack,
    whiteBack,
    buttonEffect,
    black,
    error
  }
}

export const DarkTheme = {
  colors: {
    white: black,
    black: white,
    brightBlue,
    blackBack: whiteBack,
    whiteBack: blackBack,
    buttonEffect: buttonEffectAlt,
    error
  }
}
