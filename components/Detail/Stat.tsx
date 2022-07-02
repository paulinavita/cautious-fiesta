import React from 'react'
import { CircularProgress, CircularProgressProps, Typography, Stack, Box } from '@mui/material';
import { Stat } from '@interfaces'

interface Props {
  stat: Stat,
}

const Stat = ({ stat: status }: Props): JSX.Element => {
  return (
    <Box position="relative">
      <CircularProgress
        thickness={7} 
        size='15vh'
        variant="determinate"
        value={status.base_stat} />
      <Box
        position="relative"
        sx={{
          top: 30,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textOverflow: "ellipsis",
          overflow: 'hidden',
          width: '100%'
        }}
      >
        <Typography
          variant="h4"
          sx={{ 
            fontWeight: '700'
          }}
          component="div"
          color="text.secondary"
        > { status.base_stat }
        </Typography>
        <Typography
          sx={{
            fontWeight: '500'
          }}
          variant="caption"
          component="div"
          color="text.secondary"
        > { (status?.stat?.name?.toUpperCase()) }
        </Typography>
      </Box>
    </Box>
  )
}

export default Stat