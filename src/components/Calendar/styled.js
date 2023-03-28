import styled from 'styled-components'

export const CalendarBox = styled.div`
  margin-left: 3rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 550px) {
    flex-direction: row-reverse;
  }
`
export const ButtonBox = styled.div`
  margin-bottom: 20px;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    aligh-items: center;
    justify-content: center;
  }
`

export const EventBox = styled.div`
  width: 20rem;
  height:6rem;
  backdrop-filter: blur(3px); 
  margin-right: auto;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: rgba(26, 24, 47, 0.15);
    border-radius: 5px;
}
&::-webkit-scrollbar-thumb {
    background: #1A182F;
    border-radius: 5px;
}
`
export const EventElements = styled.div`
  display: flex;
  margin:15px;
`
export const EventTime = styled.div`
  weidth: 2.2rem;
  height: 1rem;
  margin-right: 2rem;
  border-radius:20px;
  background-color:#00008b;
  color: white;
  font-size: 0.8rem;
`
export const EventTitle = styled.div`
  font-size: 1rem;
`
