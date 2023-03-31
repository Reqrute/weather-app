import React, { useState } from 'react'
import { Button } from '@constants/style/styled'
import { useSelector, useDispatch } from 'react-redux'
import { SearchBlock, Input } from './styled'
import { updateForecast } from '@store/actions/forecastAction'
import { changePosition } from '@store/actions/positionAction'
import cities from './by-cities.json'

export const Search: React.FC = () => {
  interface PosState {
    positionReducer: { lat: number
      lon: number }
  }
  interface ForState {
    forecastReducer: { city: {
      name: string
    } }
  }
  const city = useSelector((state: ForState) => state.forecastReducer?.city?.name)
  const { lat, lon: lng } = useSelector((state: PosState) => state.positionReducer)
  console.log(lat, lng)
  const dispatch = useDispatch()
  const [search, useSearch] = useState('')
  const searchBtn = (e): void => {
    const result: { lat: number, lng: number } = cities.find(el => el.name === search) ?? { lat, lng }
    dispatch(changePosition(result.lat, result.lng))
    dispatch(updateForecast(result.lat, result.lng))
    e.preventDefault()
  }
  let Helpers: any
  if (cities !== undefined) {
    Helpers = cities.map((a, id) => {
      return (
          <option key={id} value={a.name}></option>)
    })
  }

  return (
    <SearchBlock>
     <Input type={'text'} defaultValue={city} onChange={(e) => { useSearch(e.target.value) }} list={'Cities'}/>
     <datalist id="Cities">
    {Helpers}
   </datalist>
      <Button style={{ margin: 'auto' }} onClick={searchBtn}>
        Search
      </Button>
    </SearchBlock>
  )
}
