import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SearchBlock, Input, SearchBtn } from './styled'
import { updateForecast, isLoad } from '@store/actions/forecastAction'
import { changePosition } from '@store/actions/positionAction'
import { useTranslation } from 'react-i18next'
import { type CityState, type PositionState } from './interface'
import cities from './by-cities.json'

export const Search: React.FC = () => {
  const city = useSelector((state: CityState) => state.forecastReducer?.city?.name)
  const { lat, lon: lng } = useSelector((state: PositionState) => state.positionReducer)
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const [search, useSearch] = useState('')
  console.log(Object.values(cities.map(el => el.name)))

  const searchBtn = (): void => {
    dispatch(isLoad(true))
    const result: { lat: number, lng: number } = cities.find(el => el.name === search) ?? { lat, lng }
    dispatch(changePosition(result.lat, result.lng))
    dispatch(updateForecast(result.lat, result.lng))
  }

  return (
    <SearchBlock>
     <Input type={'text'} defaultValue={city} onChange={function (e) { useSearch(e.target.value) }} list={'Cities'}/>
     <datalist id="Cities">
    { (cities.map((item, id) => { return (<option key={id} value={item.name}></option>) }))}
   </datalist>
      <SearchBtn onClick={function () { searchBtn() }}>
      {t('buttons.Search')}
      </SearchBtn>
    </SearchBlock>
  )
}
