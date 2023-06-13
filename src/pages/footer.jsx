import React from 'react'



const footer = () => {
  const mystyle={
    bg:{
      background:'#000'
    }
  }
  return (
    <div className="fixed-bottom" style={mystyle.bg}>
    <div className="text-center text-light p-3" >
        Made with 🖤 by Vinay
        </div>
        
  </div>
  )
}

export default footer