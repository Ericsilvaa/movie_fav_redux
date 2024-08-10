import { useEffect, useMemo, useState } from 'react'
import { getItem, setItem } from '../utils/localstorage'

const STALE_TIME = 5 * 60 * 1000 // 5 minutes

const useCachedData = (key) => {
  const [data, setData] = useState(null)
  console.log('🚀 ~ useCachedData ~ data:', data)

  const storageKey = useMemo(() => {
    let newKey = `cachedData-sixtyMoviesFetch`

    newKey = !key ? newKey : `cachedData-${key}`

    console.log('🚀 ~ storageKey ~ newKey:', newKey)
    return newKey
  }, [key])

  const fetchMovies = () => {
    const currentTime = new Date().getTime()
    const cachedData = getItem(storageKey)

    if (cachedData && currentTime - cachedData.lastFetched < STALE_TIME) {
      console.log('cachedData without request', cachedData)
      setData(cachedData.data)
      return false
    }

    return true
  }

  useEffect(() => {
    if (!data) return

    setItem(storageKey, {
      lastFetched: new Date().getTime(),
      data
    })
  }, [data, storageKey])

  return { data, fetchMovies }
}

export default useCachedData
