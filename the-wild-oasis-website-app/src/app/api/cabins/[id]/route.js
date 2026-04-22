import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
export async function GET(req,{params}){ 
    
    try {
        const {id}= params
      const [cabin, bookedDate] = await Promise.all([getCabin(id),getBookedDatesByCabinId(id)])
      return Response.json(cabin,bookedDate)
        
    } catch (error) {
        return Response.json({message:"something error"})
    }
   
}