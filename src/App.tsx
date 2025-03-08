import { useState } from "react";
import logo from '../src/assets/images/wlogo.png';
import profilepic from '../src/assets/images/profilepicturejpg.jpg';
import github from '../src/assets/images/GithubIcon.png';
import linkedin from '../src/assets/images/linkedinIcon.png';
import facebook from '../src/assets/images/facebookIcon.png';
import whatsapp from '../src/assets/images/whatsappIcon.png';
import star from '../src/assets/images/star.png';
import download from '../src/assets/images/download.png';
import "./App.css"; // Import CSS file

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"home" | "portfolio" | "about" | "resume" | "connect">("home");

  return (
    <div id="container">
      <div className="container left">
        {/* Profile Container */}
          <div className='logo'>
            <img id='logo' src={logo} alt="logo" />
            <h1 id='name'>wanda</h1>
          </div>
          <img id='profilePicture' src={profilepic} alt="profile picture" />
          <p id='skill'>Specialization: <br /><span id='skill2'> Designer and Frontend Developer </span></p>
          <p id='location'>Located in: <br /> Pangasinan, Philippines</p>
          
          <div id='socialicons'>
            <button className='icon github'><img id='githubicon' src={github} alt="" /></button>
            <button className='icon linkedin'><img id='linkedinicon' src={linkedin} alt="" /></button>
            <button className='icon facebook'><img id='facebookicon' src={facebook} alt="" /></button>
            <button className='icon whatsapp'><img id='whatsappicon' src={whatsapp} alt="" /></button>
          </div>
          <button id='connect'>Let's Work Together!</button>
      </div>

      <div className="container right">
        {/* Navigation Buttons */}
        <nav className="navbar">
          <button onClick={() => setActiveSection("home")}>Home</button>
          <button onClick={() => setActiveSection("portfolio")}>Portfolio</button>
          <button onClick={() => setActiveSection("about")}>About</button>
          <button onClick={() => setActiveSection("resume")}>Resume</button>
          <button onClick={() => setActiveSection("connect")}>Connect</button>
        </nav>

        {/* Sections */}
        <div className="sections">
          {/* Home */}
          {activeSection === "home" && <div className="section home">
            <button id="meet"><img id="staricon" src={star} /> Let's meet! </button>
            <h1>I'm Jara Wanda <br /> 3D Artist, Illustrator, and <br /> Frontend Developer</h1>
            <button id="CV"><img id="downloadicon" src={download} alt="" />Download CV</button>
          </div>}


          {activeSection === "portfolio" && <div className="section portfolio">
            <button id="portfolio"><img id="staricon" src={star} />Portfolio</button>
            <div id="3Dcont">
              <h2 id="threedtitle">ᯓ 3D Characters</h2>
              <div id="models">
                <div className="model one">model1</div>
                <div className="model two">model2</div>
                <div className="model three">model3</div>
                <div className="model four">model4</div>
                <div className="model five">model5</div>
                <div className="model six">model6</div>
              </div>
            </div>
          </div>}
          {activeSection === "about" && <div className="section about">ℹ️ About Section</div>}
          {activeSection === "resume" && <div className="section resume"> Resumehuhu</div>}
          {activeSection === "connect" && <div className="section connect"> Connect with meeee</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
