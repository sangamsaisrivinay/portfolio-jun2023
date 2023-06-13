
import React from 'react'
import Navbar from './navbar'
const trainings = () => {
  const mystyle={
    body: {
      background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%) no-repeat',
      minHeight:'100vh'
    },
    card:{
      padding:'20px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      border:'1px solid rgba(0,0,0, 0.3)',
      marginBottom:'20px',
      header:{
        fontSize:'20px',
        fontWeight:'bold',
        marginBottom:'10px',
      },
      element:{
        marginBottom:'10px',
        marginLeft:'5px',
        paddingBottom:'10px',
        borderBottom:'1px solid rgba(0,0,0, 0.3)',
        textTransform:'capitalize',
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap',
        certification:{
          issuer:{
            fontWeight:'bold',
            fontStyle:'italic',
            textTransform:'capitalize',
          }
        }
      }
    }
  }

  const data={
    courses:['data structures and algorithms',
     'database management systems',
    'web development', 
    'computer networks', 
    'operating systems',
    'probability and statistics',
    'Full Stack Development',
    'Machine Learning',
    ],
    certifications:{
      coursera:['Introduction to HTML5', 
      'Introduction to CSS3',
      'AI For Everyone',
      'C for Everyone: Programming Fundamentals',
      'Programming for Everybody (Getting Started with Python)',],
      microsoft:['Introduction to Python: Absolute Beginner','AZ-900: Microsoft Azure Fundamentals'],
      NPTEL:['Blockchain and its Applications'],
    }
    
  }


  return (
    <div style={mystyle.body}>
        <Navbar></Navbar>
        <div className="container">
                    {/* certifications */}
          <div style={mystyle.card}>
            <div style={mystyle.card.header}>
              <span>Certifications</span>
            </div>
            <div>
              {/* coursera */}
              {data.certifications.coursera.map((course, index) => (  
                <div style={mystyle.card.element} key={index}>
                  <div>{course}</div>
                  <div style={mystyle.card.element.certification.issuer}>
                    issuer: coursera
                  </div>
                  </div>
              ))}

              {/* microsoft */}
              {data.certifications.microsoft.map((course, index) => (  
                <div style={mystyle.card.element} key={index}>
                  <div>{course}</div>
                  <div style={mystyle.card.element.certification.issuer}>
                    issuer: microsoft
                  </div>
                  </div>
              ))} 

              {/* NPTEL */}
              {data.certifications.NPTEL.map((course, index) => (  
                <div style={mystyle.card.element} key={index}>
                  <div>{course}</div>
                  <div style={mystyle.card.element.certification.issuer}>
                    issuer: NPTEL
                  </div>
                  </div>
              ))} 

            </div>
          </div>
                    {/* courses */}
          <div style={mystyle.card}>
            <div style={mystyle.card.header}>
              <span>Courses</span>
            </div>
            <div>
              {data.courses.map((course, index) => (
                <div style={mystyle.card.element} key={index}>
                  <span>{course}</span>
                  </div>
              ))}
            </div>
          </div>

        </div>
        <br /><br /><br />
        </div>
  )
}



export default trainings

