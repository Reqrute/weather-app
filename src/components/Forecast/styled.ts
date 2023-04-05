import styled from 'styled-components'

export const ForecastContainer = styled.div`
  width: 100%;
  height: 35%;
  backdrop-filter: blur(3px); 
  box-sizing: padding-box;
  -moz-box-sizing: padding-box;
  -webkit-box-sizing: padding-box;
  display: flex;
  justify-content: end;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    width: 100%;
    height: 45%;
    justify-content: space-evenly;
  }
`

export const ButtonContainer = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  margin-right: 30px;
  display: flex;
  justify-content: end;
  align-items:end;
`
