import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/pages/Layout';
import SignIn from './assets/pages/SignIn';



function App() {

  return (
   <div>
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route exact path="/SignIn" component={SignIn} />
       
          
          
        </Route>
      </Routes>
    </Router>
    </>
   </div>
   
  )
}

export default App
