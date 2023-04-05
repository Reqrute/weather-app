import styled from 'styled-components'

const lightDark: string = '#151515'

export const Button = styled.button`
  font-weight: 100;
  color: white;
  background: black;
  width: 80px;
  height: 35px;
  font-size: 15px;
  border: 1px solid grey;
  border-radius: 10px;
  margin-right: 30px;
  @media (max-width: 700px) {
    margin:5px;
    font-size: 10px;
    width: 60px;
    height: 25px;
  }
  &:hover {background-color:${lightDark}}

  &:active {
  background-color: ${lightDark};
  transform: translateY(2px);
}
`

export const WearherPicture = styled.img`
  width: 90px;
  height: 90px;
  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
  }
`
