import styled from 'styled-components'

export const Button = styled.button`
  font-weight: 100;
  color: white;
  background: black;
  width: 80px;
  height: 35px;
  font-size: 15px;
  border: 1px solid grey;
  border-radius: 10px;
  margin-right: 1.5rem;
  @media (max-width: 550px) {
    margin:5px;
    font-size: 15px;
    width: 60px;
    height: 25px;
  }
`

export const WearherPicture = styled.img`
  width: 90px;
  height: 90px;
  @media (max-width: 550px) {
    width: 40px;
    height: 40px;
  }
`
