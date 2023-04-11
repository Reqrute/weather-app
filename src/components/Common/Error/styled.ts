import styled from 'styled-components'

export const ErrorContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    `
export const ErrorTitle = styled.div`
      color: ${({ theme }) => theme.colors.error};
      font-family: "Barlow", sans-serif;
      font-size: 40px;
      font-weight: 700;
    `
export const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.error};
    font-family: "Barlow", sans-serif;
    font-size: 40px;

  `
