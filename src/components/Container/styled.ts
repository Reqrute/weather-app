import styled from 'styled-components'

export const Card = styled.div`
margin: auto;
  width: 80%;
  height: 80%;
  backdrop-filter: blur(3px); 
  background:${({ theme }) => theme.colors.whiteBack}; 
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 700px) {
    flex-direction: column;
  width: 90%;
  height: 90%;
  }
`
