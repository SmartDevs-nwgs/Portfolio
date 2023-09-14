import { useState } from 'react'
import { StyledContactUs } from './style'
import Image from 'next/image'
import contact from '../../assets/images/contact.png'
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineClockCircle,
} from 'react-icons/ai'
import useWidthPosition from '@/hooks/useWidth'

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false)

  const screenWidth = useWidthPosition()

  setTimeout(() => {
    setIsVisible(true)
  }, 7000)

  return (
    isVisible && (
      <StyledContactUs>
        <div className="container">
          <div className="block">
            <h2>4</h2>
          </div>
          <div className="contact-us">
            <Image src={contact} alt="circle" />
            <h3>TALK WITH US</h3>
            <h2>CONTACT</h2>
          </div>
          <div className="content">
            <div className="box">
              <form action="" className="message-box">
                <h2>FEEL FREE TO SEND US A MESSAGE ANYTIME</h2>
                <div className="names">
                  {screenWidth > 800 ? (
                    <input type="text" placeholder="FIRST NAME" />
                  ) : (
                    <input type="text" placeholder="NAME" />
                  )}
                  {screenWidth > 800 && (
                    <input type="text" placeholder="LAST NAME" />
                  )}
                </div>
                <input type="email" placeholder="E-MAIL" />
                <textarea
                  type="text"
                  rows="4"
                  cols="50"
                  aria-expanded="false"
                  placeholder="MESSAGE"
                />
                <button>SEND</button>
              </form>
            </div>
            <div className="info">
              <h2>INFO</h2>
              <div className="content-info">
                <div className="email">
                  <AiOutlineMail />
                  <h2>SMARTDEVNWGS@GMAIL.COM</h2>
                </div>
                <div className="phone">
                  <AiOutlinePhone />
                  <h2>+55 44 991053179</h2>
                </div>
                <div className="clock">
                  <AiOutlineClockCircle />
                  <h2>09:00 - 18:00</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledContactUs>
    )
  )
}

export default ContactUs
