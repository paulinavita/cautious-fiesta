import React, { useEffect, useState } from 'react'
import { TypeDetail } from "interfaces"
import { Table, TableBody, TableContainer, TableRow, Paper } from '@mui/material'
import PokeCellCard from '@components/Type/PokeCellCard';

interface Props {
  pokemons?: {
    pokemon: TypeDetail
  }[]
}

const TypeList = ({ pokemons = [] }: Props): JSX.Element => {
  return (
    <TableContainer sx={{ borderRadius: 2}} component={Paper}>
     <Table aria-label="table">
       <TableBody>
         {pokemons?.map((pokeObj, i) => (
           <TableRow key={i}>
             <PokeCellCard pokemon={pokeObj?.pokemon}/>
           </TableRow>
         ))}
       </TableBody>
     </Table>
  </TableContainer>
  )
}

export default TypeList