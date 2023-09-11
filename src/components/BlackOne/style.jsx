import styled from 'styled-components'

export const StyledBlackOne = styled.div`
  width: 350px;
  height: 600px;
  background-color: var(--black);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  bottom: 50px;
  z-index: -3;
  display: flex;
  align-items: end;
  margin-left: 50px;

  h2 {
    font-size: 34px;
    color: var(--white);
    width: 100%;
    text-align: end;
    padding: 8px 15px 8px 8px;
  }
`
