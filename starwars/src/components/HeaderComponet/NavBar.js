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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [showCharContent, setShowCharContent] = useState(false);
  const [showMovContent, setShowMovContent] = useState(false);

  function toggleCharContentHandler() {
    const doesCharShow = showCharContent;
    setShowCharContent(!doesCharShow);
    if (doesCharShow === true) {
      setShowMovContent(false);
    }
  }
  function toggleMovContentHandler() {
    const doesMovShow = showMovContent;
    setShowMovContent(!doesMovShow);
  }

  function selectCharHandler() {
    console.log(" from the select handler");
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
                  <FindChar onClick={selectCharHandler} />
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
