import React from 'react';
import Metricas from './Metricas.js';

const data = [
	{
		color: 'primary',
		title: 'Movies in Data Base',
		valor: 21,
		icono: 'fa-film',
	},
	{
		color: 'success',
		title: 'Total awards',
		valor: 79,
		icono: 'fa-award',
	},
	{
		color: 'warning',
		title: 'Actors quantity',
		valor: 49,
		icono: 'fa-user',
	}
]

const Contentrowmovie = () => {
  return (
    <div className="row">
			{/*Itero todas las props del objeto*/}
			{
				data.map((item, index) => {
					return <Metricas
						key={index + item.title}
						color={item.color}
						title={item.title}
						value={item.value}
						icono={item.icono}
					/>
				})
			}     
					</div>
  );
}

export default Contentrowmovie;