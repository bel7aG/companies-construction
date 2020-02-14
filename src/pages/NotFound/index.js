import { useEffect } from 'react'

const NotFound = ({ navigate }) => {
  useEffect(() => {
    navigate('/')
  }, [])

  return null
}

export default NotFound
