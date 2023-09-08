import { StyledAnimatedPhone } from './style'
import TextPhone from '../TextPhone'
import Image from 'next/image'
import phone from '../../assets/images/smart-phone.png'

const AnimatedPhone = () => {
  return (
    <StyledAnimatedPhone>
      <div className="phone">
        <TextPhone />
      </div>
    </StyledAnimatedPhone>
  )
}

export default AnimatedPhone
