import { useContext, createContext } from 'react';
import firebase from './firebase';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

// create Context
const authContext = createContext();

// create ContextProvider component
export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// create hook consumer
export const useAuth = () => {
	return useContext(authContext);
};

// create ContextProviderFunction
function useProvideAuth() {
	const [user, loading, error] = useAuthState(firebase.auth());

	const signInwithGoogle = () => {
		firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};

	const signOut = () => {
		firebase.auth().signOut();
	};

	return {
		user,
		loading,
		error,
		signInwithGoogle,
		signOut,
	};
}
