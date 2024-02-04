import './components/Card/Card.css'
import Card from './components/Card/Card'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  // //carregamento de dados via codigo
  // const item1 = {
  //   name: 'Rick Sanchez',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  // }
  // const item2 = {
  //   name: 'Morty Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // }
  // const item3 = {
  //   name: 'Summer Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // }
  // const item4 = {
  //   name: 'Beth Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  // }

  // const itens = [item1, item2, item3, item4]

  //carregamento de dado via API
  
  const [itens, setItens] = useState([])
  const pageIni = 1
  console.log(pageIni)

  async function carregarDadosApi(pageIni) {
    const page = pageIni

    const apiURL = 'https://rickandmortyapi.com/api/character/?page=' + page
    
    // preparar requisição
    const response = await fetch(apiURL)
    
    const body = await response.json()
    // console.log(body)

    const results = body.results
    console.log(results)

    setItens(results)
  }

  useEffect(function () {
    carregarDadosApi(pageIni)   
  }, [])

  // document.addEventListener('scroll', function () {
  //   if (window.scrollY > '100'){
  //     carregarDadosApi(pageIni + 1)
  //   }   
  // }, [])
  // console.log(pageIni)


  return (
    <>
    <div className="cards">
      {itens.map((item,i) => <Card item={item} key={i} />)}

    </div>
    
    </>
  )

  
}

export default App
