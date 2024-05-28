import { useState, useEffect } from 'react'

export function useFetch (url) {
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((results) => setCharacter(results))
      .finally(() => setLoading(false))
  }, [])

  return { character, loading }
}
