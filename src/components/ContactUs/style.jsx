import styled from 'styled-components'

export const StyledContactUs = styled.div`
  margin: 0;
  padding: 0;
  bottom: -300%;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  overflow: hidden;
  .success-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #4caf50; /* Cor de fundo verde (você pode personalizar) */
    color: white; /* Cor do texto */
    padding: 20px 40px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 9999; /* Para garantir que a mensagem esteja acima de outros elementos */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .success-message p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  .error {
    width: 100%;
    height: 10px;
    font-size: 12px;
    font-weight: bold;
    color: red;
  }
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #007bff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

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
    .contact-us {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .content {
      display: flex;
      justify-content: center;
      gap: 200px;
      margin: 0;
      .box {
        width: 30%;
        height: 500px;
        margin: 0;
        background-color: var(--white);
        border-radius: 20px;
        padding: 30px;
        text-align: center;
        .message-box {
          display: flex;
          flex-direction: column;
          gap: 70px;
          width: 100%;
          text-align: start;
          .names {
            width: 100%;
            display: flex;
            justify-content: space-between;
            input {
              border-bottom: 1px solid var(--grey);
            }
          }
          h2 {
            font-size: 18px;
            margin: 0;
          }
          input,
          textarea {
            resize: none;
            margin: 0;
            outline: 0;
            border-style: none;
            border-bottom: 1px solid var(--grey);
          }
          input::placeholder,
          textarea::placeholder {
            font-weight: bold;
            font-size: 16px;
          }
          textarea {
            border: 1px solid var(--card);
          }
          button {
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            border: none;
            width: 80%;
            padding: 15px;
            background-color: var(--smart);
            color: var(--white);
            border-radius: 8px;
          }
          button:hover {
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            color: #dcdcdc;
            background-color: #778899;
          }
        }
      }
      .info {
        color: var(--white);
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 500px;
        border-radius: 20px;
        padding: 30px;
        margin: 0;
        background-color: var(--smart);
        h2 {
          margin: 0;
        }
        .content-info {
          margin: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;

          .email,
          .phone,
          .clock {
            display: flex;
            align-items: center;
            margin: 0;
            gap: 14px;
            h2 {
              font-size: 20px;
            }
            svg {
              font-size: 42px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 350px) {
    .success-message {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #4caf50; /* Cor de fundo verde (você pode personalizar) */
      color: white; /* Cor do texto */
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      z-index: 9999; /* Para garantir que a mensagem esteja acima de outros elementos */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .success-message p {
      text-align: center;
      margin: 0;
      font-size: 12px;
      font-weight: bold;
    }
    .loading-spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
    }
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .contact-us {
        margin-bottom: 20px;
      }
      .content {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .box {
          width: 90%;
          height: 300px;
          .message-box {
            gap: 20px;
            h2 {
              font-size: 14px;
            }
            button {
              width: 100%;
              font-size: 14px;
              padding: 10px 10px 10px 10px;
            }
          }
        }
        .info {
          width: 90%;
          height: 200px;

          h2 {
            font-size: 14px;
            margin: 0;
          }
          .content-info {
            .email,
            .phone,
            .clock {
              gap: 8px;
              h2 {
                font-size: 12px;
              }
              svg {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    overflow: hidden;

    .container {
      width: 100%;
      padding-bottom: 50px;
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
      .contact-us {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 200px;
        margin: 0;
        .box {
          width: 35%;
          height: 530px;
          margin: 0;
          background-color: var(--white);
          border-radius: 20px;
          padding: 30px;
          .message-box {
            display: flex;
            flex-direction: column;
            gap: 70px;
            width: 100%;
            text-align: start;
            .names {
              width: 100%;
              display: flex;
              justify-content: space-between;
              input {
                border-bottom: 1px solid var(--grey);
              }
            }
            h2 {
              font-size: 22px;
              margin: 0;
            }
            input,
            textarea {
              resize: none;
              margin: 0;
              outline: 0;
              border-style: none;
              border-bottom: 1px solid var(--grey);
            }
            input::placeholder,
            textarea::placeholder {
              font-weight: bold;
              font-size: 14px;
            }
            textarea {
              border-bottom: 1px solid var(--card);
            }
            textarea::placeholder {
              font-size: 16px;
            }
            button {
              cursor: pointer;
              font-size: 20px;
              font-weight: bold;
              border: none;
              width: 100%;
              padding: 15px;
              background-color: var(--smart);
              color: var(--white);
              border-radius: 8px;
            }
            button:hover {
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
              color: #dcdcdc;
              background-color: #778899;
            }
          }
        }
        .info {
          color: var(--white);

          display: flex;
          flex-direction: column;
          width: 35%;
          height: 530px;
          border-radius: 20px;
          padding: 30px;
          margin: 0;
          background-color: var(--smart);
          h2 {
            font-size: 24px;
            margin: 0;
          }
          .content-info {
            margin: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;

            .email,
            .phone,
            .clock {
              display: flex;
              align-items: center;
              margin: 0;
              gap: 14px;
              h2 {
                font-size: 20px;
              }
              svg {
                font-size: 42px;
              }
            }
          }
        }
      }
    }
  }
  .success-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #4caf50; /* Cor de fundo verde (você pode personalizar) */
    color: white; /* Cor do texto */
    padding: 20px 40px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 9999; /* Para garantir que a mensagem esteja acima de outros elementos */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .success-message p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
`
