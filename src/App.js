import './app.scss'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome'
import Homepage from './pages/Homepage/Homepage'
import Signuppage from './pages/Signuppage/Signuppage';
import Verify from './pages/Verify/Verify'
import Messages from './pages/Messages/Messages';
import Profile from './pages/Profile/Profile';
import Initializing from './pages/Initializing/Initializing';
import Chat from './pages/Chat/Chat';
// import {AuthContextProvider } from './Context/Context'

function App() {
  return (
    <div className="App">
      {/* <AuthContextProvider>
        
      </AuthContextProvider> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Welcome/>}/>
        <Route path='/Homepage' element= {<Homepage/>}/>
        <Route path='/Signuppage' element= {<Signuppage/>}/>
         <Route path='/Verify' element= {<Verify/>}/>
          <Route path='/Messages' element= {<Messages/>}/>
          <Route path='/Profile' element= {<Profile/>}/>
          <Route path='/Initializing' element= {<Initializing/>}/>
           <Route path='/Chat' element= {<Chat/>}/>
          

      </Routes>
      </BrowserRouter>
      <welcome/>
     
    </div>
  );
}

export default App;
