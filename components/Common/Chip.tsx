import { Chip, Typography } from '@mui/material'
import getTypeColor from '@utils/getTypeColor'
import Link from 'next/link'
interface Props {
  name: string
}
const ChipType = ({ name }: Props): JSX.Element => {
  return (
    <Link href={`/type/${name}`} passHref>
      <a><Chip
        label={
          <Typography variant={'button'} color={'text.white'} sx={{ fontWeight: '700'}}>
            { name }
          </Typography>
        }
        sx={{ width: '100%', px: 0, py: 0, backgroundColor: getTypeColor(name)}}
      /></a>
    </Link>
  )
}

export default ChipType