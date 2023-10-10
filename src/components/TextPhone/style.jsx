import { styled } from "styled-components"
import smartPhone from "../../assets/images/smart-phone.png"

export const StyledTextPhone = styled.div`
  .phone-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background-image: url("/smart-phone.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 277.5px;
    height: 450px;
    font-family: "Koulen", sans-serif;
    .text {
      text-align: center;
      position: absolute;
      height: 230px;
      gap: 20px;
      left: 25px;
      bottom: 50px;
      color: var(--black);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .txt {
        width: 225px;
      }
      h2 {
        width: 95%;
        font-size: 28px;
        line-height: 35px;
      }
      .black-window {
        color: var(--white);
        background-color: var(--black);
      }
      button {
        border: none;
        cursor: pointer;
        width: 120px;
        color: white;
        background-color: black;
        font-family: "Koulen", sans-serif;
        font-size: 24px;
        border-radius: 5px;
        transition: box-shadow 0.3s;
        transition: background-color 0.3s, color 0.3s;
      }
      button:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        color: #dcdcdc;
        background-color: #778899;
      }
    }
  }

  @media screen and (min-width: 350px) {
  }
`
