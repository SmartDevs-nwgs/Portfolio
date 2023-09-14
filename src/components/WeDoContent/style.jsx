import styled from 'styled-components'

export const StyledWeDoContent = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: init 6s alternate ease-in-out;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .block {
      position: absolute;
      top: 0;
      left: 0;
      h2 {
        text-align: center;
        width: 69px;
        background-color: var(--black);
        padding: 20px;
        color: white;
      }
    }
    .stars {
      position: absolute;
      top: 0;
      right: 0;
    }
    .center {
      text-align: center;
    }
    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 50px;
      margin-bottom: 50px;
      .card {
        width: 300px;
        padding: 20px;
        border-radius: 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 15px;
        h1 {
          font-size: 22px;
        }
        background-color: var(--card);
      }
      .card:hover {
        background-color: var(--dark);
      }
    }
  }

  @media screen and (min-width: 350px) {
    .container {
      .content {
        gap: 5px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, auto);
        .card {
          width: 130px;
          h1 {
            font-size: 12px;
          }
        }
      }
    }
  }
  @media screen and (min-width: 850px) {
    .container {
      .content {
        gap: 30px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);
        .card {
          width: 200px;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    z-index: 10;
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: init 6s alternate ease-in-out;
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .block {
        position: absolute;
        top: 0;
        left: 0;
        h2 {
          text-align: center;
          width: 69px;
          background-color: var(--black);
          padding: 20px;
          color: white;
        }
      }
      .stars {
        position: absolute;
        top: 0;
        right: 0;
      }
      .center {
        text-align: center;
      }
      .content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);
        gap: 50px;
        margin-bottom: 50px;
        .card {
          width: 300px;
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 15px;
          h1 {
            font-size: 22px;
          }
          background-color: var(--card);
        }
        .card:hover {
          background-color: var(--dark);
        }
      }
    }
  }

  @keyframes init {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
