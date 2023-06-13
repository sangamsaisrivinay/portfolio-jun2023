import React from 'react'
import Navbar from './navbar'
import Photo from '../images/photo.jpg'
const about = () => {
  const mystyle={
    body: {
      background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%) ',
        minHeight:'100vh'
    },
    para:{
      color:'black',
      fontSize:'20px',
      textAlign:'justify',
      fontWeight:'bold',
      padding:'20px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      border:'1px solid rgba(255, 255, 255, 0.3)',
    
    },
    photo:{
      boxShadow:'0 0 10px 0 rgba(0,0,0,0.6)',
      height:'200px',
      width:'200px',
      marginBottom:'20px',
      marginTop:'10px',
      border:'20px groove #E61158',
    }
  }
  return (
    <div style={mystyle.body}>
      <div className="container">
        <h1 className="display-1">About Me</h1><br />
          <div  style={mystyle.para}>
        <img src={Photo} style={mystyle.photo} class=" mx-auto d-block rounded-circle" alt="face not loaded"/>
           I am an aspiring software engineer with a passion for cutting-edge technologies such as blockchain, web development, and artificial intelligence. As a fresher in the industry, I bring a fresh perspective and a hunger to learn and grow. I am fascinated by the potential of blockchain to revolutionize various sectors and enhance data security. In addition, I enjoy creating engaging and user-friendly web applications that provide seamless experiences. Exploring the depths of artificial intelligence excites me, as it presents limitless possibilities for innovation. I am eager to contribute my skills, adaptability, and problem-solving abilities to the field of software engineering. Join me on this journey as we shape the future through technology!
       </div>
       <br /><br /><br />
        </div>
      </div>
  )
}

export default about