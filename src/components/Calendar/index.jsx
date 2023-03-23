// import React, { useEffect, useState } from 'react'
import React from 'react'
import { Button } from '../../constants/style/styled'
import { CalendarBox } from './styled'

export const Calendar = () => {
  return (
    <CalendarBox>
     <div>
      <Button>
        Sign In
      </Button>
      <Button>
        Sign Up
      </Button>
      </div>
      <div></div>
    </CalendarBox>
  )
}
