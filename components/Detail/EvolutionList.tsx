import React, { useEffect, useState } from 'react';
import { SingleSpecies, EvolutionChain, Chain } from "interfaces";
import axios from 'axios'
import { Stack, Box } from '@mui/material'
import EvolutionCircle from '@components/Detail/EvolutionCircle';
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
interface Props {
  name: string
}

const EvolutionList = ({ name = '' }: Props): JSX.Element => {
  const [evolutionInfo, setEvolutionInfo] = useState<SingleSpecies[]>([])

  const getEvolutionChain = async () => {
    const arr = [] as Array<SingleSpecies>
    try {
      const res = await axios.get<SingleSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      const evol = await axios.get<EvolutionChain>(res.data.evolution_chain.url)
      arr.push(evol?.data.chain.species)
      if (evol.data.chain?.evolves_to){
        evol.data.chain?.evolves_to.map(elem => {
          const cb = (value: Chain) => {
            arr.push(value.species)
            value?.evolves_to.map(aux => cb(aux))
          }

          cb(elem)
        })
      } 
    } catch (error) {
      console.error(error)
    } 
    
    setEvolutionInfo(arr)
  }
  useEffect(() => {
    name && getEvolutionChain()
  })

  return (
    <Stack position="relative" spacing={3} direction="row">
      {
        evolutionInfo?.map((ev, i) => (
          <Link key={i} href={`/name/${ev.name}`}>
            <Box display={'flex'}>
              <a>
                <EvolutionCircle species={ev} index={i} />
                {/* { (i + 1 !== evolutionInfo.length) && <ArrowForwardIcon /> } */}
              </a>
            </Box>
          </Link>
        ))
      }
    </Stack>
  )
}

export default EvolutionList