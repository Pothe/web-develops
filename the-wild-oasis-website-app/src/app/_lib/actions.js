"use server"
import { revalidatePath } from "next/cache";
import { signIn,signOut,auth } from "./Auth";
import { getBookings } from "./data-service";
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


export async function getBooking(userid){
    const session = await auth()
   if(!session) throw new Error("Please login first!");
  const { data, error, count } = await supabase
    .from('Bookings')
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)'
    )
    .eq('guestId', session.user.userid)
    .order('startDate');

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }
  return data;
}


export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");
  const {error } = await supabase.from("Bookings").delete().eq('id',bookingId)
  if(error) throw new Error("Can not delete"); 
  revalidatePath('account/reservations')
}


export async function signOutAction(){
    await signOut({redirectTo:"/"})
}