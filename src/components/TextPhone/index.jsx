import { StyledTextPhone } from './style'
import IcosahedronComponent from '../Icosahedron'

const TextPhone = () => {
  return (
    <StyledTextPhone>
      <div className="container">
        <div className="text">
          <IcosahedronComponent />
          <h2>A</h2>
          <h2 className="black-window">SOLUTION</h2>
          <h2>IN</h2>
          <h2>CODE FORM</h2>
          <button>ENJOY</button>
        </div>
      </div>
    </StyledTextPhone>
  )
}

export default TextPhone
