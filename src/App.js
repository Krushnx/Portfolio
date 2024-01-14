import CertificatePage from "./Comopnents/Certificate/CertificatePage";
import Eduaction from "./Comopnents/Education";
import Experince from "./Comopnents/Experince";
import Foot from "./Comopnents/Footer/footer";
import Skills from "./Comopnents/Skills";
import Navbar from "./Comopnents/navbar";
import Main from "./Main";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (

//Routing here
<Router>
  <Navbar />
    <Routes>
          <Route exact path='/' element={< Main />}></Route>
          <Route exact path='/certificate' element={<CertificatePage />}></Route>
          <Route exact path='/experince' element={<Experince />}></Route>
          <Route exact path='/skills' element={<Skills />}></Route>
          <Route exact path='/education' element={<Eduaction />}></Route>
          <Route exact path='/contactme' element={<Foot />}></Route>
   </Routes>   
</Router>
   
  );
}

export default App;
