import styled from 'styled-components'

export const StyledLeftContent = styled.div`
  width: 350px;
  height: 450px;
  position: absolute;
  bottom: 130px;
  left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .social {
    width: 200px;
    a {
      user-select: none;
      text-decoration: none;
    }
    svg {
      width: 40px;
      height: auto;
      cursor: pointer;
      color: var(--black);
    }
  }

  .spacing {
    width: 200px;
    h2 {
      font-size: 36px;
    }

    .start {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .line {
        display: inline-block;
        width: 50px;
        border-bottom: 1px solid var(--black);
      }
      svg {
        width: 40px;
        height: auto;
        cursor: pointer;
        transition: color 0.3s;
      }
      svg:hover {
        color: #778899;
      }
    }
  }
`
