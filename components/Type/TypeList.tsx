import React, { useEffect, useState } from 'react'
import {TypeDetail } from "@interfaces"
import { Table, TableBody, TableContainer, TableRow, Paper } from '@mui/material'
import PokeCellCard from '@components/Type/PokeCellCard';
import Link from 'next/link'

interface Props {
  pokemons: TypeDetail[]
}

const TypeList = ({ pokemons }: Props): JSX.Element => {
  return (
    <TableContainer sx={{ borderRadius: 2}} component={Paper}>
     <Table aria-label="simple table">
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