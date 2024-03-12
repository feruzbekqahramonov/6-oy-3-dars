import './index.css'

function Card(props) {
  const { author, country, language, link, pages, title, year } = props.data
  return (
    <>
    
       <div className="card">
          <h3 className='name'>{author}</h3>
          <h2 className='country'>{country}</h2>
          <h3 className='language'>{language}</h3>
          <a className='link' href={link}>link</a>
          <p className='pages'>{pages}</p>
          <h3 className='title'>{title}</h3>
          <p className='year'>{year}</p>
        </div>
       
       
 
    </>
  )
}

export default Card
