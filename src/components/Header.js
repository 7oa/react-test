import React from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  border-bottom: 1px solid #ccc;
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 10px;
  margin: 0;
  padding: 0;
`;

function Header() {
  return (
    <HeaderWrapper>
      <nav>
        <MenuList>
          <MenuItem>Menu1</MenuItem>
          <MenuItem>Menu2</MenuItem>
          <MenuItem>Menu3</MenuItem>
        </MenuList>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
