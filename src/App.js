
//import Particles from 'react-tsparticles';
import './App.css';
import Footer from './pages/footer'
import {Banner, About, Works, Social, Trainings, Schools} from './pages'
function App() {
  
  return (
    <div className="App">
    <Banner/>
     <About/>
     <Trainings/>
      <Schools/>
      <Works/>
      <Social/>
     
     <Footer></Footer> 
    </div>
  );
}

export default App;
