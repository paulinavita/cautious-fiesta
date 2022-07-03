import {
  blue,
  brown,
  deepPurple,
  green,
  lightBlue,
  purple,
  red,
  yellow,
  pink,
  grey,
  blueGrey,
} from '@mui/material/colors'

interface Type {
  [x: string]: string
}

export const getTypeColor = (type: string) => {
  const types: Type = {
    normal: blueGrey[100],
    fire: red[300],
    water: blue[300],
    grass: green[300],
    electric: yellow[300],
    ice: lightBlue[400],
    fighting: red[900],
    poison: deepPurple[300],
    ground: brown[300],
    flying: purple[300],
    psychic: pink[300],
    bug: green[300],
    rock: grey[500],
    ghost: blueGrey[400],
    dark: grey[400],
    dragon: blue[400],
    steel: grey[700],
    fairy: pink[500],
  }

  return types[type] || grey[900]
}

export default getTypeColor