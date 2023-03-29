import React, { useState } from 'react'
import { Button } from '../../../constants/style/styled'
import { useSelector, useDispatch } from 'react-redux'
import { SearchBlock, Input } from './styled'
import { updateForecast } from '../../../store/actions/forecastAction'
import { changePosition } from '../../../store/actions/positionAction'
import cities from './by-cities.json'

export const Search = () => {
  const city = useSelector(state => state.forecastReducer?.city?.name)
  const { lat, lon: lng } = useSelector(state => state.positionReducer)
  console.log(lat, lng)
  const dispatch = useDispatch()
  const [search, useSearch] = useState('')
  const searchBtn = (e) => {
    const result = cities.find(el => el.name === search) || { lat, lng }
    dispatch(changePosition(result.lat, result.lng))
    dispatch(updateForecast(result.lat, result.lng))
    e.preventDefault()
  }
  let Helpers
  if (cities) {
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
