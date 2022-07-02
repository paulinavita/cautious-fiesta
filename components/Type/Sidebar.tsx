import React, { useEffect, useState } from 'react'
import { TypeDetail } from "interfaces"
import { Typography, Box } from '@mui/material'
import getCapFirstLetter from '@utils/getCapitalFirstLetter'
import Link from 'next/link'
interface Props {
  types: TypeDetail[]
}

const Sidebar = ({ types }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <Typography fontWeight={700} pb={2}> Pokemon Types </Typography>
      {
        types?.map((_typeName, i) => (
          <Box display={'flex'} key={i}>
            <Link href={`/type/${_typeName.name}`}>
              <Typography color={'text.light'} fontWeight={500} pb={1}> ◦ {getCapFirstLetter(_typeName.name)}</Typography>
            </Link>
          </Box>
        ))
      }
    </React.Fragment>
  )
}

export default Sidebar