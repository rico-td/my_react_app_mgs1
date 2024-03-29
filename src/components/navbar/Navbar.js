import WalkingBorderBtn from "../buttons/WalkingBorderBtn/WalkingBorderBtn.js";
import "./Navbar.Module.css";

const Navbar = ({ text1, text2, text3, source }) => {
  return (
    <div className="navbar">
      <WalkingBorderBtn source={source} text={text1} />
      <WalkingBorderBtn source={source} text={text2} />
      <WalkingBorderBtn source={source} text={text3} />
    </div>
  );
};

export default Navbar;
