"use server"
import { signIn,signOut,auth } from "./Auth";
import { supabase } from "./supabase";

export  async function signInAction(){
    await signIn('google',{redirectTo:"/account"})
}

export async function updateGuest(formData){
    const session  = await auth()
    if(!session) throw new Error("You must be logined in to update your profile")

 const  NationalID= formData.get("NationalID")
   
    const [nationality, countryFlag]= formData.get("nationality").split("%")
 
    if(!/^[a-zA-Z0-9]{6,12}$/.test(NationalID)) throw new Error("Provide a valid national ID (6-12 alphanumeric characters)")
    
    const updateProfle ={NationalID,nationality,countryFlag}
    const { data, error } = await supabase
       .from('guests')
       .update(updateProfle)
       .eq('id', session.user.userid) 
     if (error) {
       console.error(error);
       throw new Error('Guest could not be updated');
     }
   
}

export async function signOutAction(){
    await signOut({redirectTo:"/"})
}