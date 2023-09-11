import { StyledTopContent } from './style'
import StartSection from '../StartSection'
import LeftContent from '../LeftContent'
import AnimatedScreen from '../AnimatedScreen'
import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'

const TopContent = ({ showAnimation, setShowAnimation }) => {
  return (
    <div>
      <StyledTopContent>
        <div className="container">
          <Image src={logo} alt="logo" className="logo" />
          <StartSection />
          <LeftContent setShowAnimation={setShowAnimation} />
        </div>
      </StyledTopContent>
      {/* {showAnimation && <AnimatedScreen />} */}
    </div>
  )
}

export default TopContent
