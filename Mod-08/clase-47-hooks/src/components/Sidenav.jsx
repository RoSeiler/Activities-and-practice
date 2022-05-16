import { Link } from 'react-router-dom';

import LogoDH from "../images/logo-DH.png";

function Sidenav (props) {
  return (
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
          <img className="w-100" src={LogoDH} alt="Digital House"/>
        </div>
      </a>
      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - DH movies</span></a>
      </li>

      <li className="nav-item active">
        <Link to="/" className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Home</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/test" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Test</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/genres/1" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Genre con ID: 1</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/soy-javi" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Conoce a Javi</span>
        </Link>
      </li>

      <hr className="sidebar-divider"/>

      <div className="sidebar-heading">Actions</div>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span></a>
      </li>
      <hr className="sidebar-divider d-none d-md-block"/>
    </ul>
  )
}

export default Sidenav;