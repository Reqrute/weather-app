import React from 'react'
import { Title } from './Title'
import { Search } from './Search/Search'
import { Head } from './styled'

export const Header = () => {
  return (
    <Head>
        <Title/>
        <Search/>
    </Head>
  )
}
