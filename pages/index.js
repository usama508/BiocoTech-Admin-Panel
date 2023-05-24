/* eslint-disable react-hooks/rules-of-hooks */
import React,{useEffect} from 'react'
//import PrivateRoute from '../Components/PrivateRoute'
//import SideBar from '../../Components/SideBar'
import SideBars from '../Components/SideBars'
//import { useRouter } from 'next/router';
//import { AuthContext } from '../context/Route';
//import {isUserAuthenticated} from 'next-auth'
import {useRouter} from 'next/router'





function Index() {
  const router = useRouter()
    if (router.isFallback) {
      return (
        <h3>Loading...</h3>
      )
  
  
    }

   

 {/*} const router = useRouter();
  const authContext = React.useContext(AuthContext);

React.useEffect(() => {
  // checks if the user is authenticated
  authContext.isUserAuthenticated()
  ? router.push("/")
  : router.push("/login");
}, []);*/}
  return (
 
      <SideBars />

    

  )
}

export default Index