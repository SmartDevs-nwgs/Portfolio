import styled from 'styled-components'

export const StyledWeDoContent = styled.div`
  z-index: 10;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .block {
      display: flex;
      justify-content: space-between;
      margin: 0;
      .stars {
        margin: 0;
      }
      h2 {
        margin: 0;
        text-align: center;
        width: 69px;
        height: 69px;
        background-color: var(--black);
        padding: 20px;
        color: white;
      }
    }
    .stars {
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
        border: 1px solid var(--dark);
      }
    }
  }

  @media screen and (min-width: 350px) {
    .container {
      .content {
        gap: 15px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, auto);
        .card {
          width: 160px;
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 15px;

          .card-img {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background-color: var(--white);
            padding: 10px;
            border-radius: 5px;
          }

          h1 {
            font-size: 14px;
          }
          background-color: var(--card);
        }
        .card:hover {
          transform: scale(1);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          border: 1px solid var(--grey);
          .card-img {
            background-color: var(--smart);
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
          width: 250px;
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 15px;

          .card-img {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background-color: var(--white);
            padding: 10px;
            border-radius: 5px;
          }

          h1 {
            font-size: 22px;
          }
          background-color: var(--card);
        }
        .card:hover {
          transform: scale(1.05);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          border: 1px solid var(--grey);
          .card-img {
            background-color: var(--smart);
          }
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    z-index: 10;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    animation: init 6s alternate ease-in-out;
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .block {
        margin-left: 0;
        h2 {
          text-align: center;
          width: 69px;
          background-color: var(--black);
          padding: 20px;
          color: white;
        }
      }
      .stars {
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
          transition: transform 1s linear;

          .card-img {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            background-color: var(--white);
            padding: 10px;
            border-radius: 5px;
          }

          h1 {
            font-size: 22px;
          }
          background-color: var(--card);
        }
        .card:hover {
          transform: scale(1.05);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          border: 1px solid var(--grey);
          .card-img {
            background-color: var(--smart);
          }
        }
      }
    }
  }
`
