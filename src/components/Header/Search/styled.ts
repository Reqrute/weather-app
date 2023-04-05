import styled from 'styled-components'
import { Button } from '@constants/style/styled'

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  @media (max-width: 700px) {
    flex-direction: row;
    margin-top: 10px;
  }
`
export const Input = styled.input`
    width: 280px;
    height: 40px;
    font-size: 25px;
    margin-bottom: 20px;
    
    @media (max-width: 700px) {
      width: 200px;
      height: 28px;
      font-size: 18px;
  }
`
export const SearchBtn = styled(Button)`
    margin:auto; 
    @media (max-width: 700px) {
    margin: 0px 20px 20px 20px;

  }
`
