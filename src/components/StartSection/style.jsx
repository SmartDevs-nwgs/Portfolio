import { styled } from 'styled-components'

export const StyledStartSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  .content {
    position: relative;
    display: flex;
    align-items: center;
    left: 300px;
  }

  .background-grey,
  .background-black {
    position: absolute;
    width: 80px;
    height: 400px;
    border-radius: 30px;
    background-color: var(--grey);
    transform: rotate3d(0, 0, -10, 15deg);
    z-index: -1;
  }
  .background-grey {
    left: -12px;
    bottom: 0;
    transform: rotate3d(0, 0, -10, 15deg);
    animation: showBg 5s alternate ease-in-out;
  }

  .background-black {
    background-color: var(--dark);
    transform: rotate3d(0, 0, -10, 5deg);
    animation: showBg 8s alternate ease-in-out;
  }
  @media screen and (min-width: 500px) {
    display: none;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    .content {
      position: relative;
      display: flex;
      align-items: center;
      left: 300px;
    }

    .background-grey,
    .background-black {
      position: absolute;
      width: 80px;
      height: 400px;
      border-radius: 30px;
      background-color: var(--grey);
      transform: rotate3d(0, 0, -10, 15deg);
      z-index: -1;
    }
    .background-grey {
      left: -12px;
      bottom: 0;
      transform: rotate3d(0, 0, -10, 15deg);
      animation: showBg 5s alternate ease-in-out;
    }

    .background-black {
      background-color: var(--dark);
      transform: rotate3d(0, 0, -10, 5deg);
      animation: showBg 8s alternate ease-in-out;
    }
  }

  @keyframes showBg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
