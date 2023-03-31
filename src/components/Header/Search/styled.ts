import styled from 'styled-components'

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  @media (max-width: 550px) {
    flex-direction: row;
    margin-top: 10px;
    justify-content:start;
    align-items:start;
  }
`
export const Input = styled.input`
    width: 11rem;
    height: 2rem;
    font-size: 1.2rem;
    margin-bottom: 20px;
    @media (max-width: 550px) {
      margin-bottom: 0;
      font-size: 20px;
  }
`
