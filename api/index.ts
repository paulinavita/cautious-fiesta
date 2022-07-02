import axios from 'axios'
import { useQuery } from 'react-query'

// @interfaces
import { PokemonInfo, PokemonsList } from '../interfaces'

const baseUrl = 'https://pokeapi.co/api/v2'

export const getPokemons = () => axios.get<PokemonsList>(`${baseUrl}/pokemon?limit=15`).then((res) => res.data)
export const getType = () => axios.get<PokemonsList>(`${baseUrl}/type`).then((res) => res.data)
export const getPokemon = (name: string) => axios.get<PokemonInfo>(`${baseUrl}/pokemon/${name}`).then((res) => res.data)

// export const getPokemonByNames = (names?: string[]) => {
//   const promises = names?.map((name) => axios.get<PokemonInfo>(`${baseUrl}/pokemon/${name}`))

//   return Promise.all(promises || []).then((res) => res)
// }

export const useFetchPokemons = () =>
  useQuery<PokemonsList, Error>('getPokemons', getPokemons)

export const useFetchPokemonType = () => useQuery<PokemonsList, Error>('getPokemonType', getType)


// export const useFetchPokemon = (name: string) =>
//   useQuery<PokemonInfo, Error>(['pokemon', name], () => getPokemon(name))

// export const useFetchPokemonsByNames = (names: string[]) =>
//   useQuery(['pokemon', names], () => getPokemonByNames(names))