import React from 'react'
import { TypeDetail } from "interfaces";
import { Typography, Box } from '@mui/material'
import { useRouter } from 'next/router'
import getCapFirstLetter from '@utils/getCapitalFirstLetter'
import getTypeColor from '@utils/getTypeColor'
import Link from 'next/link'
interface Props {
  results: TypeDetail[]
}

const Sidebar = ({ results }: Props): JSX.Element => {
  const r = useRouter()
  const isActive = (val: string) => {
    return r.query.type === val ? getTypeColor(val) : 'text.light'
  }

  return (
    <React.Fragment>
      <Typography fontWeight={700} pb={2}> Pokemon Types </Typography>
      {
        results?.map((_typeName: any, i) => (
          <Box display={'flex'} key={i}>
            <Link href={`/type/${_typeName.name}`}>
              <Typography color={isActive(_typeName.name)} fontWeight={500} pb={1}> ◦ {getCapFirstLetter(_typeName.name)}</Typography>
            </Link>
          </Box>
        ))
      }
    </React.Fragment>
  )
}

export default Sidebar