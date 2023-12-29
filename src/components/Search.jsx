import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input)
  };
  
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  // margin: 0rem 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    max-width: 100%;
    margin-bottom: 2rem;
  }
  input {
    border: none;
    background-image: linear-gradient(120deg, #be8a5e 0%, #dfb28a 100%);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`

export default Search
