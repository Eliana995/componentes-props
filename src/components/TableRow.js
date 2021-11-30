import React from 'react'

const TableRow = ({ titulo, duracion, rating, genero, premios }) => {
  return (
    <tr>
      <td>{titulo}</td>
      <td>{duracion}</td>
      <td>{rating}</td>
      <td>{genero}</td>
      <td>{premios}</td>
    </tr>
  )
}
export default TableRow;