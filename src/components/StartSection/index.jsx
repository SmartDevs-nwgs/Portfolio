import { useEffect, useState } from 'react'
import AnimatedPhone from '../AnimatedPhone'
import BlackOne from '../BlackOne'
import { StyledStartSection } from './style'

const StartSection = () => {
  return (
    <StyledStartSection>
      <div className="content">
        <BlackOne />
        <AnimatedPhone />
        <span className="background-grey" />
        <span className="background-black" />
      </div>
    </StyledStartSection>
  )
}

export default StartSection
