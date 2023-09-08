import { styled } from 'styled-components'
import smartPhone from '../../assets/images/smart-phone.png'

export const StyledTextPhone = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('/smart-phone.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 300px;
    .text {
      width: 150px;
      height: 230px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      position: absolute;
      left: 17px;
      color: black;

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
