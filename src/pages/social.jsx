import React from 'react'
import Navbar from './navbar'
import {Gmail, Github, Linkedin, Medium, Twitter, Trailhead} from '../images/social'
const social = () => {
  const mystyle={
    body: {
      background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%) no-repeat ',
      minHeight:'100vh'
    },

    card_cont:{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },

    card:{
      background:'#fff',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px',
      logo:{
        width: '200px',
      }
    }
  }

  const data = [
    { link: 'https://www.linkedin.com/in/sangam-sai-sri-vinay-r-77490b190/', imageSource: Linkedin },
    { link: 'https://github.com/sangamsaisrivinay', imageSource: Github },
    { link: 'https://twitter.com/saisrivinay1729', imageSource: Twitter },
    { link: 'https://medium.com/@saisrivinay', imageSource: Medium },
    { link: 'mailto:sssvinayr@gmail.com', imageSource: Gmail },
    { link: 'https://trailblazer.me/id/sreddy3114', imageSource: Trailhead },
  ];
  

  return (
    <div style={mystyle.body}>
        <Navbar></Navbar>
        <div className="container" style={mystyle.card_cont}>
          {data.map((item, index) => (
          <a key={index} href={item.link}>
            <div style={mystyle.card} >  
            <img src={item.imageSource} style={mystyle.card.logo}
             alt={`Image ${index + 1}`}/>
            </div>
          </a>
        ))}
        </div>
        <br /><br /><br />
        </div>
  )
}

export default social