import React from 'react'
import Navbar from './navbar'
const schools = () => {
  const mystyle={
    body: {
      background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
      minHeight:'100vh'
    },
    school:{
      padding:'20px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      border:'1px solid rgba(0,0,0, 0.3)',
      marginBottom:'20px',
      lineOne:{
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap',
        fontSize:'20px',
        fontWeight:'bold',
      },
      name:{
        fontWeight:'bold',
        textTransform:'uppercase',
      },
      yop:{
        fontWeight:'bold',
        background:'#000',
        color:'#fff',
        padding:'5px',
        borderRadius:'5px',
      },
      grade:{
        fontStyle:'italic',
        fontWeight:'bold',
      }
    },
  };

  const details={
    btech:{
      name:'Vasireddy Venkatadri Institute of Technology',
      year:'2019-2023',
      course:'B.Tech',
      branch:'Computer Science and Engineering',
      Board:'JNTU Kakinada',
      cgpa:'8.89',
    },
    inter:{
      name:'Sri Chaitanya Junior College',
      year:'2017-2019',
      course:'Intermediate',
      branch:'MPC',
      Board:'AP State Board (BIEAP)',
      cgpa:'9.94',
    },
    ssc:{
      name:'Bhashyam Educational Institutions',
      year:'2016-2017',
      course:'SSC',
      Board:'AP State Board (BSEAP)',
      cgpa:'9.8',
    },
  }

  return (
    <div style={mystyle.body}>
        <Navbar></Navbar>
        <div className="container">
          <div style={mystyle.school}>
            <div style={mystyle.school.lineOne}>
              <span style={mystyle.school.name}>{details.btech.name}</span>
              <span style={mystyle.school.yop}>{details.btech.year}</span>
            </div>
            <div>
              <span>{details.btech.Board}</span>
            </div>
            <div>
              <span>{details.btech.course}, {details.btech.branch}</span>
            </div>
            <div style={mystyle.school.grade}>
              <span>CGPA: {details.btech.cgpa}</span>
            </div>
          </div>

          <div style={mystyle.school}>
            <div style={mystyle.school.lineOne}>
              <span style={mystyle.school.name}>{details.inter.name}</span>
              <span style={mystyle.school.yop}>{details.inter.year}</span>
            </div>
            <div>
              <span>{details.inter.Board}</span>
            </div>
            <div>
              <span>{details.inter.course}, {details.inter.branch}</span>
            </div>
            <div style={mystyle.school.grade}>
              <span>CGPA: {details.inter.cgpa}</span>
            </div>
          </div>

          <div style={mystyle.school}>
            <div style={mystyle.school.lineOne}>
              <span style={mystyle.school.name}>{details.ssc.name}</span>
              <span style={mystyle.school.yop}>{details.ssc.year}</span>
            </div>
            <div>
              <span>{details.ssc.Board}</span>
            </div>
            <div>
              <span>{details.ssc.course}, {details.ssc.branch}</span>
            </div>
            <div style={mystyle.school.grade}>
              <span>CGPA: {details.ssc.cgpa}</span>
            </div>
          </div>

        <br /><br /><br />
        </div>
        </div>
  )
}

export default schools