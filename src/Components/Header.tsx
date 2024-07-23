import MvCLogo from "../assets/images/MvC2_logo.webp";
import "../css/Header.css";
export default function Header() {
  return (
    <div className="header-wrapper">
      <img id="header-img" src={MvCLogo} />
      <h1> ratio</h1>
    </div>
  );
}
