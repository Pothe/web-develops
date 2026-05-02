"use server"
import { signIn,signOut } from "./Auth";

export  async function signInAction(){
    await signIn('google',{redirectTo:"/account"})
}

export async function updateGuest(formData){
    const session  = await auth()
    if(!session) throw new Error("You must be logined in to update your profile")

    const nationality = formData.get("nationality")
    
    
}

export async function signOutAction(){
    await signOut({redirectTo:"/"})
}