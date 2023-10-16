import Navbar from "./component/navbar";
import Intro from "./component/intro";
import AboutMe from "./component/AboutMe";
import Services from "./component/Services";
import RecentWork from "./component/RecentWork";
import "./App.css"
function App() {
      return(
        <div>
          <Navbar/>
          <Intro />
          <AboutMe />
          <Services />
          <RecentWork />

        </div>

      );
}

export default App;