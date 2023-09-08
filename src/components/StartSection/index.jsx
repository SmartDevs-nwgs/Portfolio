import { useEffect, useState } from 'react'
import AnimatedPhone from '../AnimatedPhone'
import { StyledStartSection } from './style'

const StartSection = () => {
  return (
    <StyledStartSection>
      <div className="content">
        <AnimatedPhone />
        <span className="background-grey" />

        <span className="background-black" />
      </div>
    </StyledStartSection>
  )
}

export default StartSection
