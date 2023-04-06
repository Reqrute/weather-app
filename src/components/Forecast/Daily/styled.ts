import styled from 'styled-components'

export const DailyElement = styled.div`
  margin: auto 15px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fade 1s linear;
@keyframes fade {
  0% { opacity: 0 }
  50% { opacity: 0.5 }
  100% { opacity: 1 }
}
 `
export const FirstDailyBox = styled.div`
  margin: auto auto auto 30px;
  width: 25%;
  height: 80%;
  display: flex;
  align-items: center;
  animation: fade 1s linear;
@keyframes fade {
  0% { opacity: 0 }
  50% { opacity: 0.5 }
  100% { opacity: 1 }
}
  @media (max-width: 940px) {
    height: 80%;
    width: 1fr;
    font-size:20px;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    margin: 15px;
    height: 50%;
    width: 1fr;
    font-size:20px;
    flex-direction: column;
  }
`

export const FirstDailyText = styled.div`
  margin: auto auto auto 30px;
  width: 25%;
  height: 80%;
  display: flex;
  align-items: center;
  @media (max-width: 940px) {
    margin: auto 15px;
    height: 80%;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    font-size: 20px;
    margin: auto 15px;
    height: 50%;
    flex-direction: column;
  }
`

export const FirstDailyWearherPicture = styled.img`
  width: 160px;
  height: 160px;
  padding: auto;
  @media (max-width: 940px) {
    padding: 0;
    width: 90px;
    height: 90px;
  }
  @media (max-width: 700px) {
    padding: 0;
    width: 40px;
    height: 40px;
  }
`
