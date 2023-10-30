import { useState, useEffect } from 'react'

const DistritsAPI = () => {
  const [districtsData, setDistrictsData] = useState({})

  const baseUrl = `https://api.ipma.pt/open-data/distrits-islands`

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((response) => response.json())
      .then((distritsData) => {
        distritsData.data.sort((a, b) => a.local.localeCompare(b.local))
        setDistrictsData(distritsData)
      })
  }, [baseUrl])

  return {
    districtsData,
  }
}

export default DistritsAPI
