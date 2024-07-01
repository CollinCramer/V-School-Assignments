import React from "react"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute(props){

    const {token, children, redirectTo} = props

    // saying if there is no token, redirect. That way no one can access pages when they arent supposed to
    return token ? children : <Navigate to = {redirectTo} />
}
