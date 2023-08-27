import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const ProtectRoute = ({children}:{children: React.ReactNode}) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  useEffect(() => {
    if(!isLoggedIn) {
      window.location.href = '/'
    }
  }, [])
  return (
    !isLoggedIn ? <div>You are not logged in</div>
    : children
  )
}

export default ProtectRoute