import React from 'react'
import CocktailsList from './CocktailsList'
import SearchForm from './SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <CocktailsList/>
    </main>
  )
}

export default Home
