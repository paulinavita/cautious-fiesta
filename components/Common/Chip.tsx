import { Chip, Typography } from '@mui/material'
import getTypeColor from '@utils/getTypeColor'

interface Props {
  name: string
}
const ChipType = ({ name }: Props): JSX.Element => {
  return (
    <Chip
      label={
        <Typography variant={'button'} color={'text.white'} sx={{ fontWeight: '700'}}>
          { name }
        </Typography>
      }
      sx={{ width: '100%', px: 0, py: 0, backgroundColor: getTypeColor(name)}}
    />
  )
}

export default ChipType