import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Navbar from './component/navbar.jsx';
import Intro from './component/intro.jsx';
import AboutMe from './component/AboutMe.jsx';
import Services from './component/Services.jsx';
import RecentWork from './component/RecentWork.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div>
      <Navbar/>
      <Intro />
      <AboutMe />
      <Services />
      <RecentWork />

      

    </div>

  </React.StrictMode>,
);
