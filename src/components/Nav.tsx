import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledNav = styled.nav`
  display: flex;
  width: 30%;
  background-color: #005bbb;
  padding: 1% 0;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 6%;
  width: 100%;
  gap: 2.5vw;
  list-style-type: none;
  margin: 0;
`;

const NavItem = styled.li`
  background-color: #ffffff;
  border-radius: 1vw;

  &:hover {
    background-color: #a7c1f9;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: calc(4px + 1.5vw);
  font-weight: bold;
  width: 90%;
  padding: 5%;
  color: #0033a0;
  text-decoration: none;

  &:hover {
    color: gold;
  }
`;

export function Nav() {
    return (
        <StyledNav>
            <NavList>
            <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/experiences">Experiences</NavLink></NavItem>
                <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
                <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
                <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
            </NavList>
        </StyledNav>
    )   
}