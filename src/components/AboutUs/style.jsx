import styled from "styled-components"

export const StyledAboutUs = styled.div`
  margin: 0;
  padding: 0;
  bottom: -200%;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: "Roboto", sans-serif;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .about-us {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Koulen", sans-serif;

      h3 {
        font-size: 24px;
        color: var(--contact);
      }
      h2 {
        font-size: 32px;
      }
    }
    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .smart-devs {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .top-content {
          text-align: center;
          width: 100%;
          padding: 20px;
          height: 400px;
          overflow: hidden;
          background-color: var(--smart);
          border-top-right-radius: 20px;
          h1 {
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: white;
            font-size: 60px;
          }
          .white-text {
            color: var(--white);
          }
        }
        .bottom-content {
          display: flex;
          align-items: center;
          width: 100%;
          height: 200px;
          text-align: center;
          padding: 20px;
          background-color: var(--contact);
          border-bottom-right-radius: 20px;

          button {
            font-family: "Koulen", sans-serif;
            font-weight: bold;
            font-size: 28px;
            border-radius: 8px;
            width: 200px;
            background-color: var(--white);
            color: var(--black);
            border: none;
            cursor: pointer;
          }
          button:hover {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            color: #dcdcdc;
            background-color: #778899;
          }
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        width: 50%;
        padding-left: 80px;
        padding-right: 40px;
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
        .text {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          text-align: start;
          h1 {
            font-family: "Koulen", sans-serif;
            line-height: 30px;
          }
          span {
            font-weight: bold;
          }
          p {
            font-weight: light;
            margin-left: 0;
            /* color: var(--dark); */
          }
        }
      }
    }
  }

  @media screen and (min-width: 350px) {
    .container {
      justify-content: start;
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        height: 100%;
        .smart-devs {
          width: 70%;
          height: 50%;
          order: 2;
          .top-content {
            border-top-left-radius: 20px;
            height: 45%;
            h1 {
              font-size: 20px;
            }
          }
          .bottom-content {
            height: 30%;
            border-bottom-left-radius: 20px;
            button {
              padding: 10px;
              font-size: 12px;
            }
          }
        }
        .info {
          width: 100%;
          padding: 50px;
          padding-top: 0;
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
          .text {
            height: 100%;
            gap: 10px;
            h1 {
              font-size: 14px;
            }
            p {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 500px) {
    .container {
      .content {
        .info {
          padding-top: 0;
        }
        .smart-devs {
          height: 50%;
        }
      }
    }

    .text {
      width: 70%;
    }
  }
  @media screen and (min-width: 1200px) {
    margin: 0;
    padding: 0;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 50px;
      .about-us {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .smart-devs {
          order: 1;
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .top-content {
            text-align: center;
            width: 100%;
            padding: 20px;
            height: 400px;
            overflow: hidden;
            background-color: var(--smart);
            border-top-right-radius: 20px;
            border-top-left-radius: 0;
            h1 {
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: white;
              font-size: 60px;
            }
            .white-text {
              color: var(--white);
            }
          }
          .bottom-content {
            display: flex;
            align-items: center;
            width: 100%;
            height: 200px;
            text-align: center;
            padding: 20px;
            background-color: var(--contact);
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 0;
            button {
              font-weight: bold;
              font-size: 28px;
              border-radius: 8px;
              width: 350px;
              background-color: var(--white);
              color: var(--black);
              border: none;
              cursor: pointer;
            }
            button:hover {
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
              color: #dcdcdc;
              background-color: #778899;
            }
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          width: 50%;
          height: 100%;
          padding-left: 80px;
          padding-right: 100px;
          order: 1;
          padding-top: 0;
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
          .text {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: start;
            margin: 0;
            height: 70%;
            margin-top: 15px;
            span {
              font-weight: bold;
              color: var(--black);
            }
            h1 {
              font-size: 28px;
            }
            p {
              font-size: 24px;
              font-weight: light;
              margin-left: 0;
              /* color: var(--dark); */
            }
          }
        }
      }
    }
  }
`
