import { auth } from './firebase'

export const doSignIn = (email, pass) =>
    auth.signInWithEmailAndPassword(email, pass)

export const doSignOut = () => auth.signOut()