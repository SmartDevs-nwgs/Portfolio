import { useEffect, useState } from 'react'
import { StyledAboutUs } from './style'
import circle from '../../assets/images/circle.png'
import useWidthPosition from '@/hooks/useWidth'
import Image from 'next/image'

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const screenWidth = useWidthPosition()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <StyledAboutUs>
      <div className="container">
        <div className="about-us">
          <Image src={circle} alt="circle" />
          <h3>A LITTLE</h3>
          <h2>ABOUT US</h2>
        </div>
        <div className="content">
          <div className="smart-devs">
            <div className="top-content">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <h1
                  key={index}
                  className={index === currentIndex ? 'white-text' : ''}
                >
                  SMARTDEVS
                </h1>
              ))}
            </div>
            <div className="bottom-content">
              <a href="https://wa.me/5544991053179" target="_blank">
                <button onClick={() => {}}>CONTACT US NOW</button>
              </a>
            </div>
          </div>
          <div className="info">
            {screenWidth > 1200 ? (
              <div className="block">
                <h2>3</h2>
              </div>
            ) : null}
            <div className="text">
              <h1>
                Our company was born with the aim of democratizing quality
                technology, bringing the best in the market to companies.
              </h1>
              <p>
                The <span>Smart devs</span> development agency is a company
                focused on solving digital problems, working on the development
                of systems that meet the real needs of a company.
              </p>
              <p>
                Our mission is the commitment to our customers and the delivery
                of a quality service.
              </p>
              <p>There is a problem? We can solve</p>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutUs>
  )
}

export default AboutUs
