import { StyledLeftContent } from './style'
import {
  AiFillPlayCircle,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import useScrollPosition from '@/hooks/scroll'
import useWidthPosition from '@/hooks/useWidth'
import { useRef } from 'react'

const LeftContent = ({ scrollRef }) => {
  const scrollPosition = useScrollPosition()
  const screenWidth = useWidthPosition()

  const scrollToElement = (element) => {
    const elementPosition = element.getBoundingClientRect().top

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  }

  return (
    <StyledLeftContent>
      <div className="spacing">
        <h2>INNOVATION, COFFEE & CODES.</h2>
        <div className="start">
          <span className="line"></span>
          <p>Lets start?</p>
          <AiFillPlayCircle
            onClick={() => {
              const weDoContentElement = scrollRef.current
              if (weDoContentElement) {
                scrollToElement(weDoContentElement)
              }
            }}
          />
        </div>
      </div>
      <div className="social">
        <a
          href="https://www.instagram.com/smartdevsbr/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <AiOutlineInstagram className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/smart-devs-br/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <AiOutlineLinkedin className="icon" />
        </a>
      </div>
    </StyledLeftContent>
  )
}

export default LeftContent
