import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2'
const useFetch = <T>(query: string) => {  
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get<T>(`${baseUrl}${query}`)
      .then(res => {
        setData(res.data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [query])

  return { data, loading, error }
}

export default useFetch