import './Info/Info.css'
import Info from './Info/Info'

function Card() {
  return (
      <>
          <div className="card">
            <h2>Rick Sanchez</h2>
            <div className="infos">
              <Info />
              <Info />
              <Info />
            </div>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
          </div>
      </>
  )
}

export default Card