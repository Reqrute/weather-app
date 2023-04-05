import styled from 'styled-components'

export const LoaderElem = styled.div`
    margin: auto;
    border: 4px solid white;
    border-radius: 50%;
    border-top: 4px solid black;
    width: 100px;
    height: 100px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    @media (max-width: 700px) {
      width: 40px;
      height: 40px;
  }
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
