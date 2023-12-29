import React from "react"
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components"
import { Link } from "react-router-dom";
import {GiKnifeFork} from 'react-icons/gi'

function  App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Epicure</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
    </BrowserRouter>
      </div>
  )
};
 
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Grenze Gotisch', cursive;
  padding-left: 0.5rem;
`
const Nav = styled.div`
  padding: 3rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    color: #8FBF9F
    font-size: 2rem;
  }
`

export default App;
