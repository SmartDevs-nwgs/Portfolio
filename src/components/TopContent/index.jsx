import { StyledTopContent } from './style'
import StartSection from '../StartSection'
import LeftContent from '../LeftContent'
import AnimatedScreen from '../AnimatedScreen'
import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import useWidthPosition from '@/hooks/useWidth'
import { useState } from 'react'

const TopContent = ({ scrollRef }) => {
  const screenWidth = useWidthPosition()

  return (
    <div>
      <StyledTopContent>
        <div className="container">
          <Image src={logo} alt="logo" className="logo" />
          {screenWidth > 500 ? <StartSection scrollRef={scrollRef} /> : null}
          <LeftContent scrollRef={scrollRef} />
        </div>
      </StyledTopContent>
    </div>
  )
}

export default TopContent
