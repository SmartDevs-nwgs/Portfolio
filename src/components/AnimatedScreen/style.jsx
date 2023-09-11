import styled from 'styled-components'

export const StyledAnimatedScreen = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  z-index: -100;
  animation: start 1s linear;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  background-color: var(--background);
  opacity: 0;

  @keyframes start {
    0% {
      width: 0;
      height: 0;
      z-index: -100;
      opacity: 0;
    }
    100% {
      width: 100vw;
      height: 100vh;
      background-color: var(--white);
      z-index: 1000000;
      opacity: 1;
    }
  }
`
