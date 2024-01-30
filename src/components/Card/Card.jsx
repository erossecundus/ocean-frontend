import './Info/Info.css'
import Info from './Info/Info'

function Card(props) {
  //console.log(props)

  const item = props.item
  //console.log(props)
  return (
      <>
          <div className="card">
            <h2>{item.name}</h2>
            <div className="infos">
              <Info />
              <Info />
              <Info />
            </div>
            <img src={item.image} />
          </div>
      </>
  )
}

export default Card