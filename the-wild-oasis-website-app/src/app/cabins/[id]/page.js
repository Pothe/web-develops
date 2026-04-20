import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

// PLACEHOLDER DATA
export async function generateMetadata({params}){
  const cabin = await getCabin(params.id)
  return {
    title:`cabin ${cabin.name}`,
    description:`${cabin.description}`
  }
}

// pre rendering 
export async function generateStaticParams(){
  const cabins = await getCabins()
  const result = cabins.map(c=>({id: String(c.id)}))
  console.log("cabin id",result)
  return result;
}

export default async function Page({params}) {
    const cabin = await getCabin(params.id)
    

 
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin}/>

      <div>
        <h2 className="text-5xl font-semibold text-center mb-5 ">
          Reserve {cabin.name}. Pay on arrival.
        </h2>

    <Suspense fallback={<Spinner/>}>
     <Reservation cabin={cabin}/>
     </Suspense>
      </div>
       
    </div>
  );
}
