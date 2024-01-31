import './components/Card/Card.css'
import Card from './components/Card/Card'
import './App.css'

function App() {
  //carregamento de dados via codigo
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  const item2 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  }
  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }
  const item4 = {
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  }

  const itens = [item1, item2, item3, item4]

  //carregamento de dado via API
  async function carregarDadosApi() {
    const apiURL = 'https://rickandmortyapi.com/api/character/'
    
    // preparar requisição
    const response = await fetch(apiURL)

    //console.log(response)
    
    const body = await response.json()
    console.log(body)

  }

  carregarDadosApi()

  return (
    <>
    <div className="cards">
      {itens.map((item,i) => <Card item={item} key={i} />)}
    </div>
      
    </>
  )
}

export default App
