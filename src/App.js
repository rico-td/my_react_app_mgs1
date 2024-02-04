import "./styles/App.css";
import "./styles/media.queries.css";
import "./components/logo/Logo.Module.css";
import Logo from "./components/logo/Logo.js";

import elevatorBg from "./assets/img/background.png";
import elevator from "./assets/img/elevator.png";
import character from "./assets/img/character2.png";
import Navbar from "./components/navbar/Navbar.js";
import WalkingBorderBtn from "./components/buttons/WalkingBorderBtn/WalkingBorderBtn.js";

function App() {
  return (
    <div className="app">
      <Navbar source="/" text={"About"} className="navbar" />
      <div className="wrapper-parallax">
        <header>
          {/* noch anschauen: Position des Logos richtig setzen, responsive! */}
          <div className="align-container">
            <div className="wrapper-logo">
              <Logo
                title="METAL GEAR"
                subtitle="SOLID"
                genre="TACTICAL ESPIONAGE ACTION"
              />
            </div>
          </div>
          <img
            className="elevator-bg"
            src={elevatorBg}
            alt="background elevator"
          />
          <img className="elevator" src={elevator} alt="elevator" />
          <img className="character" src={character} alt="solid snake" />
        </header>
        <article>
          <h3>The Threat of FOXHOUND</h3>

          <p>
            In the immersive world of Metal Gear Solid 1, the threat of FOXHOUND
            looms large. Solid Snake, a legendary soldier, is called back into
            action by the enigmatic Colonel Campbell to investigate suspicious
            activities on Shadow Moses Island. As Snake delves deeper into the
            heart of the island, he uncovers a web of deceit and intrigue, with
            FOXHOUND at its center.
          </p>
          <WalkingBorderBtn source="https://www.google.com" text="About" />
        </article>
      </div>
    </div>
  );
}
export default App;
