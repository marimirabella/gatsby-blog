import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  margin-bottom: 10px;
  font-size: 1.1rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  min-width: 240px;
`;

const NavItem = styled.li`
  display: block;
`;

const Navlink = styled(Link)`
  text-decoration: none;
  color: #db1fde;
`;

const NavLink = props => (
  <NavItem>
    <Navlink to={props.to}>{props.children}</Navlink>
  </NavItem>
);

const Nav = () => (
  <NavHeader>
    <Link to="/">
      <h3>GatsbyBlog</h3>
    </Link>
    <NavList>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </NavList>
  </NavHeader>
);

export default Nav;