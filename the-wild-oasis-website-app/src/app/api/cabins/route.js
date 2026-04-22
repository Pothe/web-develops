import { getCabins } from "@/app/_lib/data-service"

export async  function GET() {
    const data = await getCabins()
    return Response.json(data)
    
};
