export interface ActionA {
  type: string
}
export interface ActionB {
  type: string
  payload: object
}

export interface ActionC {
  type: string
  lat: number
  lon: number
}

export interface ActionD {
  type: string
  payload: {
    lat: number
    lon: number
  }
}
