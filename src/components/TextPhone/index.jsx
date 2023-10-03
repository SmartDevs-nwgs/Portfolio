import { StyledTextPhone } from './style'
import IcosahedronComponent from '../Icosahedron'

const TextPhone = ({ scrollRef }) => {
  const scrollToElement = (element) => {
    const elementPosition = element.getBoundingClientRect().top

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  }

  return (
    <StyledTextPhone>
      <div className="phone-content">
        <IcosahedronComponent />
        <div className="text">
          <div className="txt">
            <h2>A</h2>
            <h2 className="black-window">SOLUTION</h2>
            <h2>IN</h2>
            <h2>CODE FORM</h2>
          </div>
          <div className="button">
            <button
              onClick={() => {
                const weDoContentElement = scrollRef.current
                if (weDoContentElement) {
                  scrollToElement(weDoContentElement)
                }
              }}
            >
              ENJOY
            </button>
          </div>
        </div>
      </div>
    </StyledTextPhone>
  )
}

export default TextPhone
