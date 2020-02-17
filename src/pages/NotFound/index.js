import { useEffect } from 'react'

const NotFound = ({ navigate }) => {
  useEffect(() => {
    navigate('/app')
  }, [])

  return null
}

export default NotFound
