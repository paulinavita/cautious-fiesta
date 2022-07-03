import React from 'react'
import { Stack } from '@mui/material';
import getStatsColor from '@utils/getStatsColor'
import { Stat } from 'interfaces'
import StatComp from '@components/Detail/Stat'

interface Props {
  stats: Stat[],
}

const StatList = ({ stats }: Props): JSX.Element => {
  
  return (
    <Stack position="relative" spacing={3} direction="row">
      {
        stats?.map((_stat, index) => (
          <StatComp color={getStatsColor[index]} key={index} stat={_stat}></StatComp>
          )
        )
      }
    </Stack>
  )
}

export default StatList