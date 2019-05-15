import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 10px;
  border-right: 1px solid darkblue;
  padding-right: 10px;
  :first-of-type{
    border-left: 1px solid darkblue;
    padding-left: 10px;
  }
  a {
    color: darkblue;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    &.selected {
      color: darkred;
      text-decoration: underline;
    }
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavLink to="/" activeClassName="selected" exact={true}>
            Todo App
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/meme/" activeClassName="selected">
            MemeGenerator App
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/form/" activeClassName="selected">
            Form
          </NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}

export default Nav;
