import styled from 'styled-components'

export const YourContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;

  a {
    text-decoration: none;
    color: white;
    margin-top: 2rem;

    :hover {
      color: red;
    }
  }

  .teste {
    width: 80px;
    height: 80px;
  }
`
