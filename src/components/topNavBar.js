import React from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import "../App.css";
import {Popover, OverlayTrigger} from "react-bootstrap"
// import { Link } from "react-router-dom"


const topNavBar = () => {
  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Using this app">
      <strong>Step 1.)</strong> Put ingredients in the search box separated by a comma.
      <br/>
      <i><strong>Hint..</strong> Ideally, ingredients listed should be something that has been lingering in the cupboard
        for a long time.</i>
      <br/>
      <strong>Step 2.)</strong> Select a Diet and Cuisine if you have something in mind. Then click the Search button.
      <br/>
      <strong>Step 3.)</strong> Click the check box of the recipe you like.
      <br/>
      <strong>Step 4.)</strong> Click "Start Cooking" link.
      <br/>
      <strong>Step 5.)</strong> Click "Shopping List" link.
      <br/>
      <strong>Step 6.)</strong> When your ready to start cooking click the "Recipe" link for preparation instructions.
      <br/>
      <strong>Step 7.)</strong> Enjoy!
    </Popover>
  );
  const popoverContact = (
    <Popover id="contact" title="">
      <strong>contact@jongorman.top</strong>
    </Popover>
  );
  return (
    <div>
      <Navbar id="listSignIn" style={{
        borderBottomColor: "#9A3014",
        borderRightColor: "#9A3014",
        borderLeftColor: "#9A3014",
        backgroundColor: "#C6CBCC",
        width: "100%",
        fontSize: "16px"
      }} collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            {/*<a className="fab fa-github" style={{size: "4x"}}></a>*/}
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem  id="listSignIn"  href="/search"> Home
              {/*<a style={{color: "#777777"}}> Home </a>*/}
            </NavItem>
            <OverlayTrigger trigger="hover" href="" placement="bottom" overlay={popoverContact}>
            <NavItem id="listSignIn" >
              Contact
            </NavItem>
            </OverlayTrigger>
          </Nav>
          <Nav pullRight>
            <OverlayTrigger eventKey={1} trigger="hover" placement="bottom" href="" overlay={popoverBottom}>
              <NavItem id="listSignIn"> Instructions</NavItem>
            </OverlayTrigger>
            <NavItem>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default topNavBar;
