import { useEffect, useState } from 'react'
import { StyledContactUs } from './style'
import Image from 'next/image'
import contact from '../../assets/images/contact.png'
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineClockCircle,
} from 'react-icons/ai'
import useWidthPosition from '@/hooks/useWidth'
import React from 'react'
import emailValidator from '@/validators/emailValidator'
import emailjs from '@emailjs/browser'

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentError, setCurrentError] = useState(null)
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const screenWidth = useWidthPosition()
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name: fieldName, value } = e.target
    setFormData({
      ...formData,
      [fieldName]: value,
    })
  }

  const validateForm = async () => {
    try {
      await emailValidator().validate(formData, { abortEarly: false })
      return null
    } catch (validationErrors) {
      const errorMessages = validationErrors.inner.map((error) => error.message)
      setErrors({ ...errors, ...errorMessages })
      return errorMessages
    }
  }

  const data = {
    from_name: formData.name,
    message: formData.message,
    email: formData.email,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadingSubmit(true)
    const errors = await validateForm()

    if (errors === null) {
      emailjs
        .send('service_4szhr1j', 'template_tx54im2', data, 'L-11OZikE5tNfF2M9')
        .then((response) => {
          setCurrentError(null)
          console.log('enviado', response.status, response.text)
          setShowSuccessMessage(true)
          setTimeout(() => {
            setShowSuccessMessage(false)
          }, 2000)
          setLoadingSubmit(false)
          setFormData({
            name: '',
            lastName: '',
            email: '',
            message: '',
          })
        })
        .catch((err) => {
          console.error('Erro ao enviar e-mail:', err)
          setLoadingSubmit(false)
        })
    } else {
      setCurrentError(errors[0])
      setLoadingSubmit(false)
    }
  }

  setTimeout(() => {
    setIsVisible(true)
  }, 4000)

  return (
    isVisible && (
      <StyledContactUs>
        <div className="container">
          {showSuccessMessage && (
            <div className="success-message">
              <p>Email enviado com sucesso!</p>
            </div>
          )}
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
              {loadingSubmit ? (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="message-box">
                  <h2>FEEL FREE TO SEND US A MESSAGE ANYTIME</h2>
                  <div className="names">
                    {screenWidth > 800 ? (
                      <input
                        type="text"
                        name="name"
                        placeholder="FIRST NAME"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <input
                        type="text"
                        name="name"
                        placeholder="NAME"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    )}
                    {screenWidth > 800 && (
                      <input
                        type="text"
                        name="lastName"
                        placeholder="LAST NAME"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="E-MAIL"
                    value={formData.email}
                    onChange={handleInputChange}
                  />

                  <textarea
                    type="text"
                    rows="4"
                    cols="50"
                    aria-expanded="false"
                    name="message"
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleInputChange}
                  />

                  <button type="submit">SEND</button>
                </form>
              )}

              {currentError && (
                <div className="error-messages">
                  <p className="error">{currentError}</p>
                </div>
              )}
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
