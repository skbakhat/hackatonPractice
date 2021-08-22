import { Link, BrowserRouter as Router } from "react-router-dom";
import "./NavbarStyle.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import logo from "../../assets/logo.png";


function CusNavbar() {
  return (
    <div className="mainNavbar">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="Tabs">
        <Router>
          <li>
            <Link id="ActiceTab" className="ChildLi" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="ChildLi" >
              Reservation
            </Link>
          </li>
          <li>
            <Link className="ChildLi" >
              Menu
            </Link>
          </li>
          <li>
            <Link className="ChildLi" >
              About
            </Link>
          </li>
          <li>
            <Link className="ChildLi hiding" >
              Blog
              <div className="DropDowns">
                <li>
                  <h5>Blog Pages</h5>
                </li>
                <li>
                  <Link className="ChildLi">Simple Blog</Link>
                </li>
                <li>
                  <Link className="ChildLi">With SideBar</Link>
                </li>
                <li>
                  <Link className="ChildLi">2 Column Layout</Link>
                </li>
              </div>
            </Link>
          </li>
          <li>
            <Link className="ChildLi" >
              Gallery
            </Link>
          </li>
          <li>
            <Link  className="ChildLi hiding" >
              Features
              <div style={{marginLeft:"500px", }} className="DropDowns">
                <li>
                  <h5>Shop Pages</h5>
                </li>
                <li>
                  <Link className="ChildLi">My account</Link>
                </li>
                <li>
                  <Link className="ChildLi">Chackout</Link>
                </li>
                <li>
                  <Link className="ChildLi">Cart</Link>
                </li>
              </div>
            </Link>
          </li>
          <li>
            <Link className="ChildLi" >
              Contect
            </Link>
          </li>
          <li>
            <Link  className="ChildLi hiding" >
              Users
              <div style={{marginLeft:"700px", }} className="DropDowns">
               
                <li>
                  <Link className="ChildLi"  to="/AdminLogin">Admin</Link>
                </li>
                <li>
                  <Link className="ChildLi" to="/CustomerLogin">Customer</Link>
                </li>
                </div>
            </Link>
          </li>
        </Router>
      </div>
      <div>
        <LocalMallIcon />
      </div>
    </div>
  );
}

export default CusNavbar;
