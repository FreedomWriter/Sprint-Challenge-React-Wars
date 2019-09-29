import React from 'react';
import {DropdownItem}from "reactstrap";
import FindChar from '../../FindComponent/FindChar';

export default function MovieDDItemComp() {

    // const [isOpen, setIsOpen] = useState(false);

    const [showCharContent, setShowCharContent] = useState(false);
  
    function toggleCharContentHandler() {
      const doesCharShow = showCharContent;
      setShowCharContent(!doesCharShow);
      if (doesCharShow === true) {
        setShowMovContent(false);
      }
    }

    return (
        <DropdownItem>Learn More</DropdownItem>
        <FindChar onClick={selectCharHandler} />
        <DropdownItem divider />
        <DropdownItem onClick={toggleCharContentHandler}>
          Show/Hide Character Cards
        </DropdownItem>
    )
}