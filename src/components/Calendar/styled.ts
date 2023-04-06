import styled from 'styled-components'

const black: string = 'rgba(26, 24, 47, 0.15)'
const navyBlue: string = '#1A182F'
const brightBlue: string = '#00008b'

export const CalendarBox = styled.div`
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 700px) {
    flex-direction: row-reverse;
    font-size: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
`
export const ButtonBox = styled.div`
  margin-bottom: 20px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    aligh-items: center;
    justify-content: center;
  }
`

export const EventBox = styled.div`
  width: 60%;
  height:50%;
  backdrop-filter: blur(3px); 
  margin-right: auto;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: ${black};
    border-radius: 5px;
}
&::-webkit-scrollbar-thumb {
    background: ${navyBlue};
    border-radius: 5px;
}
@media (max-width: 700px) {
    width: 400px;
    height: 80px;
  }
`
export const EventElements = styled.div`
  display: flex;
  margin:15px;
`
export const EventTime = styled.div`
  width: 60px;
  height: 40px;
  margin-right: 30px;
  border-radius:20px;
  background-color:${brightBlue};
  color: white;
  font-size: 18px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
  width: 50px;
  height: 30px;
  font-size: 15px;   
  }
`
export const EventTitle = styled.div`
  font-size: 25px;
  @media (max-width: 700px) {
  font-size: 20px;
 
  }
`
