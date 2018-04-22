import React from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import "../App.css";
import {Popover, OverlayTrigger} from "react-bootstrap"
// import { Link } from "react-router-dom"


const Footer = () => {
  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Using this app">
      <strong>Step 1.)</strong> Put ingredients in the search box separated by a comma.
      <br/>
      <i><strong>Hint..</strong> Ideally, ingredients listed should be something that has been lingering in the cupboard
        for a long time.</i>
      <br/>
      <strong>Step 2.)</strong> Select a Diet and Cuisine if you have something in mind.
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
  return (
    <div>
      <Navbar className="footer" style={{
        display: "flex",
        borderTopColor: "#9A3014",
        borderRightColor: "#9A3014",
        borderLeftColor: "#9A3014",
        backgroundColor: "#C6CBCC",
        width: "100%",

      }} collapseOnSelect>
        <Navbar.Header  style={{marginLeft: "48%", marginBottom: "5px"}}>
          <Navbar.Brand >
            <a href={"https://www.github.com/"}><img style={{ height: "2em"}} src="http://www.iconninja.com/files/587/807/788/mark-octocat-fork-github-icon.svg" /></a>
            {/*<a href={"https://www.github.com/"}><img style={{ height: "2em"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqttnupIvCvZBrmr6AFmx8J697qnLUZm2smzxE_znkTcnCsiMG" /></a>*/}

            {/*<img style={{ height: "4em"}} src="http://www.iconninja.com/files/587/807/788/mark-octocat-fork-github-icon.svg" />*/}
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/search" style={{color: "#777777"}}>
              {/*Home*/}
              {/*<a style={{color: "#777777"}}> Home </a>*/}
            </NavItem>
            <NavItem eventKey={2} href="#">
              {/*About*/}
            </NavItem>
          </Nav>
          <Nav pullRight>
            {/*<OverlayTrigger eventKey={1} trigger="click" placement="bottom" href="" overlay={popoverBottom}>*/}
              {/*<NavItem>Instructions</NavItem>*/}
            {/*</OverlayTrigger>*/}
            <NavItem>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Footer;
