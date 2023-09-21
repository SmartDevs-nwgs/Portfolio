import { StyledLeftContent } from './style'
import {
  AiFillPlayCircle,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import useScrollPosition from '@/hooks/scroll'

const LeftContent = ({ setShowAnimation }) => {
  const scrollSize = useScrollPosition()

  return (
    <StyledLeftContent>
      <div className="spacing">
        <h2>INNOVATION, COFFEE & CODES.</h2>
        <div className="start">
          <span className="line"></span>
          <p>Lets start?</p>
          <AiFillPlayCircle />
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
