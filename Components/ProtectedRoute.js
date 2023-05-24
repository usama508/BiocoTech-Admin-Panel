import React, { Children } from 'react'
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";


function ProtectedRoute(props) {
    const {currentUser} = useAuth()
    const router = useRouter()
 
    if(!currentUser){
     return router.push('/login')
    }
   return (
   {...props}
   )
}

export default ProtectedRoute