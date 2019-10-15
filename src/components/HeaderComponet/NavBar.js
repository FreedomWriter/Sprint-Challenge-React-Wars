import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import CharCardList from "../CharCardComponents/CharCardList";
import MovCardList from "../MovCardComponent/MovieCardList";
import FindChar from "../FindComponent/FindChar";
import FindMov from "../FindComponent/FindMov";

export default function NavBar() {
  {
    /*This is the menu list toggle in the nav bar*/
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  {
    /*End of Nav menu list toggle in the nav bar*/
  }

  {
    /*Logic which handles the conditional rendering returned in the JSX */
  }
  const [showCharContent, setShowCharContent] = useState(false);
  const [showMovContent, setShowMovContent] = useState(false);

  function toggleCharContentHandler() {
    const doesCharShow = showCharContent;
    setShowCharContent(!doesCharShow);
  }
  function toggleMovContentHandler() {
    const doesMovShow = showMovContent;
    setShowMovContent(!doesMovShow);
  }
  {
    /*End of cpnditional rendering logic */
  }
  return (
    <div>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="https://reactjs.org/docs/getting-started.html">
            ReactWars
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Characters
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Learn More</DropdownItem>
                  <FindChar />
                  <DropdownItem divider />
                  <DropdownItem onClick={toggleCharContentHandler}>
                    Show/Hide Character Cards
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  Movies
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Learn More</DropdownItem>
                  <FindMov />
                  <DropdownItem divider />
                  <DropdownItem onClick={toggleMovContentHandler}>
                    Show All/Hide Movie Summaries
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      <div>
        {/*Conditional rendering to determine whether Character or Movie Cards will show */}
        {showCharContent ? (
          <div>
            <CharCardList />
          </div>
        ) : null}
        {showMovContent ? (
          <div>
            <MovCardList />
          </div>
        ) : null}
      </div>
    </div>
  );
}
