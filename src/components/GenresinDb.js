import React from 'react';
import Genre from './Genre'

const genres = ['Acción', 'Animazión', 'Aventura', 'Ciencia ficción', 'Comedia', 'Documental', 'Drama', 'Fantasía', 'Infantiles', 'Musical']

const Genresindb = () => {
  return (
    <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">
										{/*Filter y forEach no se usan*/}
										{/*Itero para traer el componete hijo varias veces*/}
										{genres.map((item, index)=>{
											return	<Genre genre = {item} key={item+index}/>
										})}
									</div>
								</div>
							</div>
						</div>
  );
}

export default Genresindb;