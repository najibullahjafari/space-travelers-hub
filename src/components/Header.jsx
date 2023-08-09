import { NavLink } from 'react-router-dom';
import logo from './images/planet.png';
import MissionsPage from './missions/missionpage';

const Header = () => (
  <div className="Header">
    <header>
      <nav>
        <div className="nav-container">
          <img className="logo" alt="logo" src={logo} />
          <h2>Space Travelers&apos; Hub</h2>
        </div>
        <div>
          <ul className="navlist">
            <NavLink to="./myprofile">My Profile</NavLink>
            <NavLink to="/misions">Misions</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;
