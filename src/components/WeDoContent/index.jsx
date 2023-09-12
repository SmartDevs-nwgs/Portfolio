import { useState } from 'react'
import { StyledWeDoContent } from './style'
import stars from '../../assets/images/stars.png'
import cube from '../../assets/images/cube.png'
import database from '../../assets/images/database.png'
import edit from '../../assets/images/edit.png'
import phone from '../../assets/images/phone.png'
import web from '../../assets/images/web.png'
import pc from '../../assets/images/pc.png'
import nodeImg from '../../assets/images/node.png'
import Image from 'next/image'
const WeDoContent = ({ showAnimation }) => {
  const whatWeDo = [
    {
      img: nodeImg,
      title: 'CRUD API',
      text: "We create Apis's with CRUD, databases and microservices",
    },
    {
      img: phone,
      title: 'APP DEVELOPMENT',
      text: 'We develop amazing mobile apps with a unique and intuitive design',
    },
    {
      img: web,
      title: 'WEB DEVELOPMENT',
      text:
        'We are specialists in the development of websites aimed at capturing leads',
    },
    {
      img: pc,
      title: 'SYSTEM DEVELOPMENT',
      text: 'We develop systems thinking about the needs of your business',
    },
    {
      img: edit,
      title: 'UI/UX DESIGN',
      text:
        'We create the visual identity of your website, providing experiences for your customer',
    },
    {
      img: database,
      title: 'DATABASE',
      text:
        'We create databases ensuring the safety of your customers and your company',
    },
  ]

  return (
    <StyledWeDoContent>
      {showAnimation && (
        <div className="container">
          <div className="block">
            <h2>2</h2>
          </div>
          <div className="stars">
            <Image src={stars} alt="stars" />
          </div>
          <div className="center">
            <Image src={cube} alt="cube" />
            <h2>WHAT WE DO</h2>
            <h1>OUR SERVICES</h1>
          </div>
          <div className="content">
            {whatWeDo.map((card, index) => {
              return (
                <div key={index} className="card">
                  <Image
                    src={card.img}
                    alt={card.img}
                    style={
                      index === 1
                        ? { backgroundColor: '#808080', borderRadius: '10px' }
                        : null
                    }
                  />
                  <h1>{card.title}</h1>
                  <p>{card.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </StyledWeDoContent>
  )
}

export default WeDoContent
