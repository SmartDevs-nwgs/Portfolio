import styled from 'styled-components'

export const StyledAboutUs = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
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
    .about-us {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .smart-devs {
        width: 50%;
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
            font-weight: bold;
            font-size: 24px;
            border-radius: 8px;
            padding: 20px 80px 20px 80px;
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
          margin: 0;
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
          justify-content: space-around;
          text-align: start;
          span {
            font-weight: bold;
            color: var(--black);
          }
          h3 {
            margin-left: 0;
            color: var(--dark);
          }
        }
      }
    }
  }
`
