import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchBlock, Input, SearchBtn } from './styled'
import { updateForecast } from '@store/actions/forecastAction'
import { changePosition } from '@store/actions/positionAction'
import { type CityState, type PositionState } from './interface'
import cities from './by-cities.json'

export const Search: React.FC = () => {
  const city = useSelector((state: CityState) => state.forecastReducer?.city?.name)
  const { lat, lon: lng } = useSelector((state: PositionState) => state.positionReducer)

  const dispatch = useDispatch()
  const [search, useSearch] = useState('')

  const searchBtn = (): void => {
    const result: { lat: number, lng: number } = cities.find(el => el.name === search) ?? { lat, lng }
    dispatch(changePosition(result.lat, result.lng))
    dispatch(updateForecast(result.lat, result.lng))
  }

  return (
    <SearchBlock>
     <Input type={'text'} defaultValue={city} onChange={function (e) { useSearch(e.target.value) }} list={'Cities'}/>
     <datalist id="Cities">
    { cities !== undefined
      ? (cities.map((item, id) => {
          return (<option key={id} value={item.name}></option>)
        }))
      : (null)}
   </datalist>
      <SearchBtn onClick={function () { searchBtn() }}>
        Search
      </SearchBtn>
    </SearchBlock>
  )
}
