import React, { useCallback, useMemo } from 'react'
import Navbar from './navbar'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
//import { loadFull } from 'tsparticles'
const mystyle={
    body: {
      
      background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
        height:'100vh',
       
    }
}
const Banner = () => {
  const [text] = useTypewriter({
    words: [ 'a Student', 'a Learner', 'ML & Web3 Enthusiast!'],
    backgroundColor: 'red',
    loop: 10,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  const options=useMemo(()=>{
    return {
      interactivity:{
        events:{
          onClick:{
            enable:true,
            mode:"push",
          },
          
        }
      },
      moves:{
        push:{
          quantity:10
        },
        repulse:{
          duration:0.4,
          distance:100
        }
      },
      particles:{
        color:{
          value:["#fff"],
          enable:true
        },
        links:{
          color:{
            enable:true,
            value:['#fff']
          },
          enable:false,
          distance:100
        },
        move:{
          enable:true,
          speed:1
        },
        size:{
          value:{min:1,max:5}
        },
        opacity:{
          value:{min:0.3, max:0.7}
        }
      },
    };
  },[])
  const particlesInit=useCallback((engine)=>{
    loadSlim(engine);
  },[])
  return (
    <div style={mystyle.body}>
        <Navbar/>
        <Particles init={particlesInit} options={options}/>
        <div className="display-1 container">
         
          <h1>Hi there,</h1>
          <h2> I am Sangam Sai Sri Vinay Reddy</h2>
          <span style={{color:'black',fontWeight: 'bold',fontFamily:"'Poppins', sans-serif"}}>{text}</span>
          <Cursor/>

          
        </div>
    </div>
  )
}

export default Banner