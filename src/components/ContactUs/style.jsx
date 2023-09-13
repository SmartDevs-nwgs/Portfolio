import styled from 'styled-components'

export const StyledContactUs = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  bottom: -200%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  overflow: hidden;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
              border-bottom: 1px solid black;
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
            border-bottom: 1px solid black;
          }
          input::placeholder,
          textarea::placeholder {
            font-weight: bold;
            font-size: 14px;
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
`
