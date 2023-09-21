import { useState } from 'react'
import { StyledWeDoContent } from './style'
import stars from '../../assets/images/stars.png'
import cube from '../../assets/images/cube.png'
import database from '../../assets/images/database.png'
import whiteDatabase from '../../assets/images/database-white.png'
import edit from '../../assets/images/edit.png'
import whiteEdit from '../../assets/images/edit-white.png'
import phone from '../../assets/images/phone.png'
import whitePhone from '../../assets/images/phone-white.png'
import web from '../../assets/images/web.png'
import whiteWeb from '../../assets/images/web-white.png'
import pc from '../../assets/images/pc.png'
import whitePc from '../../assets/images/pc-white.png'
import nodeImg from '../../assets/images/node.png'
import whiteNodeImg from '../../assets/images/node-white.png'
import Image from 'next/image'
import useWidthPosition from '@/hooks/useWidth'
const WeDoContent = ({ showAnimation }) => {
  const screenWidth = useWidthPosition()
  const [hoveredCard, setHoveredCard] = useState(null)

  const possibleNodeImg = [nodeImg, whiteNodeImg]

  const possiblePhoneImg = [phone, whitePhone]

  const possibleWebImg = [web, whiteWeb]

  const possiblePcImg = [pc, whitePc]

  const possibleEditImg = [edit, whiteEdit]

  const possibleDatabaseImg = [database, whiteDatabase]

  const whatWeDo = [
    {
      img: possibleNodeImg,
      title: 'CRUD API',
      text: "We create Apis's with CRUD, databases and microservices",
    },
    {
      img: possiblePhoneImg,
      title: 'APP DEVELOPMENT',
      text: 'We develop amazing mobile apps with a unique and intuitive design',
    },
    {
      img: possibleWebImg,
      title: 'WEB DEVELOPMENT',
      text:
        'We are specialists in the development of websites aimed at capturing leads',
    },
    {
      img: possiblePcImg,
      title: 'SYSTEM DEVELOPMENT',
      text: 'We develop systems thinking about the needs of your business',
    },
    {
      img: possibleEditImg,
      title: 'UI/UX DESIGN',
      text:
        'We create the visual identity of your website, providing experiences for your customer',
    },
    {
      img: possibleDatabaseImg,
      title: 'DATABASE',
      text:
        'We create databases ensuring the safety of your customers and your company',
    },
  ]

  return (
    <StyledWeDoContent>
      <div className="container">
        {screenWidth > 1200 ? (
          <div className="block">
            <h2>2</h2>
            <div className="stars">
              <Image src={stars} alt="stars" />
            </div>
          </div>
        ) : null}

        <div className="center">
          <Image src={cube} alt="cube" />
          <h2>WHAT WE DO</h2>
          <h1>OUR SERVICES</h1>
        </div>
        <div className="content">
          {whatWeDo.map((card, index) => {
            return (
              <div
                key={index}
                className={`card ${hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-img">
                  <Image
                    src={card.img[hoveredCard === index ? 1 : 0]}
                    alt={card.img}
                  />
                </div>

                <h1>{card.title}</h1>
                {screenWidth > 850 && <p>{card.text}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </StyledWeDoContent>
  )
}

export default WeDoContent
