import './Info/Info.css'
import Info from './Info/Info'

function Card(props) {
  //console.log(props)

  const item = props.item
  //console.log(props)

  const tag1 = {
    tag: 'Status: Vivo'
  }
  const tag2 = {
    tag: 'Espécie: Humano'
  }
  const tag3 = {
    tag: 'Origem: Terra C-137'
  }
    

  return (
      <>
          <div className="card">
            <h2>{item.name}</h2>
            <div className="infos">
              <Info tag={tag1}/>
              <Info tag={tag2}/>
              <Info tag={tag3}/>
            </div>
            <img src={item.image} />
          </div>
      </>
  )
}

export default Card