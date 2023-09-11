import { StyledTopContent } from './style'
import StartSection from '../StartSection'
import LeftContent from '../LeftContent'
import AnimatedScreen from '../AnimatedScreen'
import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'

const TopContent = () => {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <StyledTopContent>
      <div className="container">
        <Image
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => {
            setShowAnimation(false)
          }}
        />
        <StartSection />
        <LeftContent setShowAnimation={setShowAnimation} />
        {showAnimation ? <AnimatedScreen /> : null}
      </div>
    </StyledTopContent>
  )
}

export default TopContent
