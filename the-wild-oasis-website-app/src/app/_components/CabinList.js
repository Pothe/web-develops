import { getCabins } from "../_lib/data-service"
import CabinCard from "./CabinCard"


export default async function CabinList({filter}) {
      const cabins = await getCabins()      
      if(!cabins.length) return null

      // filter data 

       let filterCabins;
       if(filter==="all") filterCabins= cabins
       if(filter==="small") filterCabins= cabins.filter((cabin)=>cabin.maxCapacity<=4)
        if(filter==="medium") filterCabins= cabins.filter((cabin)=>cabin.maxCapacity >4 && cabin.maxCapacity<=8)
        if(filter==="large") filterCabins= cabins.filter(cabin=>cabin.maxCapacity>8)
 
    return(
        <div>
             {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {filterCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
        </div>
    )
}
