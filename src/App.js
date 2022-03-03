import About from './components/About';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  const [mode,SetMode] = useState('light');
  const [alert,SetAlert] = useState(null);
  const showAlert=(message,type)=>{
    SetAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      SetAlert(null);
    },3000)
  }
  const toggleMode=() => {
    if(mode=== 'light'){
      SetMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
  <>
  <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/"
             element={<TextUtils showAlert={showAlert} heading="Enter the text to analyse"  mode={mode}/>}>
            </Route>
    </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
