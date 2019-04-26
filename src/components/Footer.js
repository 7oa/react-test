import React from "react";
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  border-top: 1px solid #ccc;
  padding-top: 20px;
  padding-bottom: 20px;
`;

function Footer() {
  return (
    <FooterWrapper>
      This is footer
    </FooterWrapper>
  )
}

export default Footer;