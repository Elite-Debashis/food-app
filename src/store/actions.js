import {firebaseAuth} from "@/firebase";

export const signIn =  async ({ commit }, user) => {
    try {
        await firebaseAuth.signInWithEmailAndPassword(
            this.email,
            this.password
        )
    } catch (error){
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode === 'auth/wrong-password'){
            alert("Wrong password")
        } else {
            alert(errorMessage)
        }
    }
}