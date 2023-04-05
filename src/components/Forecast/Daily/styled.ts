import styled from 'styled-components'

export const DailyElement = styled.div`
  margin: auto 15px;
  height: 80%;
  box-sizing: padding-box;
  -moz-box-sizing: padding-box;
  -webkit-box-sizing: padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    margin: auto 15px ;
    height: 50%;
    width: 15%;
    font-size:20px;
  }
 `
export const FirstDailyBox = styled.div`
  margin: auto auto auto 30px;
  width: 25%;
  height: 80%;
  box-sizing: padding-box;
  -moz-box-sizing: padding-box;
  -webkit-box-sizing: padding-box;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    margin: auto 15px;
    height: 50%;
    width: 15%;
    width: 1fr;
    font-size:20px;
    flex-direction: column;
  }
`

export const FirstDailyText = styled.div`
  margin: auto auto auto 30px;
  width: 25%;
  height: 80%;
  box-sizing: padding-box;
  -moz-box-sizing: padding-box;
  -webkit-box-sizing: padding-box;
  display: flex;
  align-items: center;
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
  @media (max-width: 700px) {
    padding: 0;
    width: 40px;
    height: 40px;
  }
`
