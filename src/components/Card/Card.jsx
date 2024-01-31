import './Tag/Tag.css'
import Tag from './Tag/Tag'

function Card(props) {
  //console.log(props)

  const item = props.item
  //console.log(props)

  const tag1 = {
    text: 'Status: Vivo'
  }
  const tag2 = {
    text: 'Espécie: Humano'
  }
  const tag3 = {
    text: 'Origem: Terra C-137'
  }

  const tags = [tag1, tag2, tag3]
    

  return (
      <>
          <div className="card">
            <h2>{item.name}</h2>
            <div className="infos">
              {tags.map((tag,i) => <Tag tag={tag} key={i}/>)}
            </div>
            <img src={item.image} />
          </div>
      </>
  )
}

export default Card