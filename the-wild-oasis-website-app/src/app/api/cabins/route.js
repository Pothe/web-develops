import { getCabins } from "@/app/_lib/data-service"

export async function GET(){
     try{
        const Cabins = await getCabins()
        return Response.json(Cabins)
     }catch{
        retu
     }
}