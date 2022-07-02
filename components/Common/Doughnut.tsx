/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import {
  blueGrey,
} from '@mui/material/colors'


interface Props {
  color: string
  border: string
}

const Doughnut = ({ color, border, ...rest }: Props): JSX.Element => {
  return (
    <div
      css={{
        border: `${!border ? '30px' : border } solid ${!color ? blueGrey[100] : color }`,
        borderRadius: '100px',
        height: '100px',
        width: '100px',
      }}
      {...rest}
    />
  )
}

export default Doughnut
