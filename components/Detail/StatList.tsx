import React from 'react'
import { Box, Stack } from '@mui/material';
import { Stat } from '@interfaces'
import StatComp from '@components/detail/Stat'

interface Props {
  stats: Stat[],
}

const StatList = ({ stats }: Props): JSX.Element => {
  return (
    <Stack position="relative" spacing={3} direction="row">
      {
        stats?.map((_stat, index) => (
          <StatComp key={index} stat={_stat}></StatComp>
          )
        )
      }
    </Stack>
  )
}

export default StatList