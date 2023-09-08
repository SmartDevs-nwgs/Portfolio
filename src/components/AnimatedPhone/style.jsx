import { styled } from 'styled-components'

export const StyledAnimatedPhone = styled.div`
  .phone {
    /* position: absolute; */
    animation: upAndDown 5s alternate ease-in-out;
    z-index: 10;
  }

  @keyframes upAndDown {
    0% {
      transform: rotate3d(0, 0, -10, 15deg);
    }
    100% {
      transform: rotate3d(0);
    }
  }
`
