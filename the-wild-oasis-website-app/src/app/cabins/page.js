
import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";
export const metadata={
  title:"All cabins",
  description:`Cozy yet luxurious cabins, located right in the heart of the Italian   Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise`
}

// export const revalidate =0;
export const revalidate =36000

export default  function Page({searchParams}) {
//noStore()

const filter = searchParams?.capacity?? "all"
  // CHANGE
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature &#768; s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className="flex justify-end">
        <Filter/>
      </div>      
      <Suspense fallback={<Spinner/>} key={filter}>     
      <CabinList filter={filter} />
      <ReservationReminder/>
   </Suspense>  
     
    </div>
  );
}
