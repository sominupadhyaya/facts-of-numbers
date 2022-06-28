import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  })
  useEffect(() => {
    
    fetch(url)
      .then((resp) => resp.text())
      .then((txt) => setState(currState => {
        return { 
          loading: false, data: txt
        }
        }))
  }, [url])

  return state
}
