import { styled } from 'styled-components'
import smartPhone from '../../assets/images/smart-phone.png'

export const StyledTextPhone = styled.div`
  .phone-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-image: url('/smart-phone.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 185px;
    height: 300px;
    .text {
      text-align: center;
      position: absolute;
      gap: 20px;
      left: 17px;
      bottom: 50px;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .txt {
        width: 150px;
      }
      h2 {
        width: 95%;
        font-size: 20px;
      }
      .black-window {
        color: white;
        background-color: black;
      }
      button {
        border: none;
        cursor: pointer;
        padding: 8px 18px 8px 18px;
        color: white;
        background-color: black;
        border-radius: 5px;
      }
    }
  }
`
