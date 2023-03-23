import React from 'react'
import { Button } from '../../../constants/style/styled'
import { SearchBlock, Input } from './styled'

export const Search = () => {
  return (
    <SearchBlock>
     <Input type={'text'}/>
      <Button style={{ margin: 'auto' }}>
        Search
      </Button>
    </SearchBlock>
  )
}
