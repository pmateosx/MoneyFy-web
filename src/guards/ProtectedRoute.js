import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuthContext } from "../contexts/AuthContext"

const ProtectedRoute = () => {
  const { user, isAuthenticationFetched } = useAuthContext()
  let location = useLocation()


  if (isAuthenticationFetched && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoute