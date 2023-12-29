import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Recipe() {
  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )

    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  return (
    <DetailWrapper>
      <h2>{details?.title}</h2>
      <img src={details?.image} alt=""/>
      <ButtonWrapper>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
      </ButtonWrapper>
      {activeTab === 'instructions' && (
        <div>
          <h3>Instructions</h3>
          <p dangerouslySetInnerHTML={{ __html: details?.instructions }}></p>
        </div>
      )}
      {activeTab === 'ingredients' && (
        <div>
          <h3>Ingredients</h3>
          <ul>
            {details?.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
      )}
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  img {
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  img:hover {
    box-shadow: 0 0 3em 0px rgba(0, 0, 0, 0.4);
    transform: scale(1);
  }

  ul {
    margin-top: 1rem;
    padding-left: 2rem;
  }

  li {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    margin-right: 0.5rem;
    background-color: #ebe2cd;
    border: none;
    color: #313131;
    border-radius: 1rem;
    padding: 1rem 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #68a67d;
      color: white;
    }
  }

  .active {
    background-color: #68a67d;
    color: white;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #353535;
  background: white;
  border: 2px solid black;
  font-weight: bold;
  margin-bottom: 0.5rem;

`

export default Recipe
