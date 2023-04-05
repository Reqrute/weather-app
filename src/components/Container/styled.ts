import styled from 'styled-components'

const transparentWhite: string = 'rgba(255,255,255,0.2)'

export const Card = styled.div`
margin: auto;
  width: 75%;
  height: 75%;
  backdrop-filter: blur(3px); 
  background:${transparentWhite} ; 
  box-sizing: padding-box;
  -moz-box-sizing: padding-box;
  -webkit-box-sizing: padding-box;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    flex-direction: column;
  width: 90%;
  height: 90%;
  }
`
