import styled from 'styled-components'

export const DailyElement = styled.div`
  margin: auto;
  height: 80%;
  box-sizing: padding-box;
  -moz-box-sizing: padding-box;
  -webkit-box-sizing: padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fade 1s linear;
@keyframes fade {
  0% { opacity: 0 }
  50% { opacity: 0.5 }
  100% { opacity: 1 }
}
  @media (max-width: 700px) {
    height: 80%;
    font-size:25px
  }
 `
