import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider=({children})=>{
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)
	useEffect(()=>{
		const unsubscriber=auth.onAuthStateChanged(user=>{
			setCurrentUser(user)
			setLoading(false)
		})
		return unsubscriber
	},[])

	function signup(email,password){
		return auth.createUserWithEmailAndPassword(email,password);
	}

	function login(email,password){
		return auth.signInWithEmailAndPassword(email,password);
	}

	const value={
		currentUser,
		signup,
		login
	}
	return(
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}