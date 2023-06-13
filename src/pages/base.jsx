import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Banner, About, Works, Social, Trainings, Schools} from './'

const base = () => {
  return (
    <>
    <Routes>
        <Route path='/' index element={<Banner/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/schools' element={<Schools/>}/>
        <Route path='/social' element={<Social/>}/>
        <Route path='/trainings' element={<Trainings/>}/>
        <Route path='/works' element={<Works/>}/>
    </Routes>
    </>
  )
}

export default base