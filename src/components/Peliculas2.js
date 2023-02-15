import React, { Component } from 'react'

export class Peliculas2 extends Component {
  state = {  
    peliculas:[
      {titulo: 'batman vs superman',image: 'https://th.bing.com/th/id/OIP.Z1boras3iHmVmL19ABEB6gHaEE?pid=ImgDet&rs=1'},
      {titulo: 'gran torino',image: 'https://i.ytimg.com/vi/fQmgKp48aRs/maxresdefault.jpg'},
      {titulo: 'deadpool',image: 'https://i.pinimg.com/736x/4a/f5/2f/4af52f984f62ee16dc38a198684128e0--deadpool--superheroes.jpg'},
    ],
    nombre: 'yorvis'
  } 
  render() { 
    return (
      <div id='peliculas'>
        <h2 className='subheader'> Peliculas2</h2>
        <p>Seleccion de la peliculas favoritas de {this.state.nombre}</p>

        {/* mostramos nuestras imagenes con los datos */}

        {this.state.peliculas.map((pelicula, i)=>{
          return(
            <article>
              <img src={pelicula.image} alt= {pelicula.titulo} />

            </article>
          )
        })}
      </div>
    );
  }
}


