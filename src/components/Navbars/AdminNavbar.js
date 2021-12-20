import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateColor);
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white"
      });
    } else {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent"
      });
    } else {
      this.setState({
        color: "bg-white"
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch
    });
  };
  render() {
    return (
      <>
        <Navbar
          className={classNames("navbar-absolute", this.state.color)}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames("navbar-toggle d-inline", {
                  toggled: this.props.sidebarOpened
                })}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.props.toggleSidebar}
                >
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              
            </div>
            <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav navbar>
              <form>
                <div className="input-group no-border">
                  <input type="text" className="search-bar" placeholder="Search Farmer/SICCA device" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <i className="tim-icons icon-zoom-split"></i>
                    </div>
                  </div>
                </div>
              </form>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                    {/* <div className="notification d-none d-lg-block d-xl-block" /> */}
                    <i className="tim-icons icon-bell-55" />
                    <p className="d-lg-none">Notifications</p>
                  </DropdownToggle>
                  {/* <DropdownMenu className="dropdown-navbar notifications" right tag="ul">
                  </DropdownMenu> */}
                </UncontrolledDropdown>
                <li><a className="nav-link" href="#">
                  <i className="tim-icons icon-settings-gear-63"></i>
                </a></li>  
                <li className="separator d-lg-none" />
              </Nav>
              <p className="adminName">Hi, Admin</p>
              <div className="photo">
                <img alt="..." src={require("assets/img/anime3.png")} />
              </div>
            </Collapse>
            
          </Container>
        </Navbar>
      
      </>
    );
  }
}

export default AdminNavbar;
