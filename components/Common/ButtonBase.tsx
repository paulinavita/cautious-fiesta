import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface Props {
  text: string
  [x: string]: any
}

const ButtonBase = ({ text, ...rest }: Props): JSX.Element => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: 2,
        my: 1,
        py: 1,
        px: 4,
        boxShadow: 0,
      }}
      {...rest}
    >
      <Typography
        variant="body1"
        sx={{
          color: 'text.white',
          fontWeight: 600,
        }}
      >
        {text}
      </Typography>
    </Button>
  )
}

export default ButtonBase