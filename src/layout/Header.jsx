import Menu from "./Menu";
import { Link } from 'react-router-dom'
import ReactLogo from '../assets/hourglass.svg'
import "../css/Header.css"

const Header = () => {
  return (
    <header className="header">

      <Link className="header--links" to="/">
        <div className="header__home-link">
          <img src={ReactLogo} alt="Countdown Hall Logo"/>
          <span className="header__logo">COUNTDOWN HALL</span>
        </div>
      </Link>

      <Menu />
    </header>
  );
};

export default Header;