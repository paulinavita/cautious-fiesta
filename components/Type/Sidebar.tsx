import React from 'react'
import { TypeDetail } from "interfaces";
import { Typography, Box } from '@mui/material'
import getCapFirstLetter from '@utils/getCapitalFirstLetter'
import Link from 'next/link'
interface Props {
  results: TypeDetail[]
}

const Sidebar = ({ results }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <Typography fontWeight={700} pb={2}> Pokemon Types </Typography>
      {
        results?.map((_typeName: any, i) => (
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