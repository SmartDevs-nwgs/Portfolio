import { StyledTopContent } from './style'
import StartSection from '../StartSection'
import Image from 'next/image'
import logo from '../../assets/images/logo.png'

const TopContent = () => {
  return (
    <StyledTopContent>
      <div className="container">
        <Image src={logo} alt="logo" className="logo" />
        <StartSection />
      </div>
    </StyledTopContent>
  )
}

export default TopContent
