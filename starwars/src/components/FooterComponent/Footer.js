import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  background: white;
  height: 60px;
  text-align: center;
  margin: 0 auto;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <footer>Copyright 2019</footer>
    </FooterStyle>
  );
}
