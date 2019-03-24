import React from 'react'

const CursoDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Titulo do projeto {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lorem eros. Praesent rutrum dui mauris, pellentesque congue orci hendrerit vitae. Aenean quis elit lobortis, vulputate sem et, pulvinar mi. Fusce egestas varius ligula, nec mollis sapien auctor at. Aliquam nisi magna, cursus eget consectetur in, mollis id neque. Etiam nunc diam, sodales non aliquam mattis, tempus ac arcu. Quisque elementum a orci vitae pretium.</p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Postado por seila</div>
          <div>Uma data aqui</div>
        </div>

      </div>
    </div>
  )
}

export default CursoDetails
