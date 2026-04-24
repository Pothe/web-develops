

import Link from "next/link";
// import { usePathname } from "next/navigation";
import { auth } from "../_lib/Auth";
import { useActionState } from "react";
import Image from "next/image";

const NavLinks =[
  {name:"Cabins", href:'/cabins'},
   {name:"about", href:'/about'},
    {name:"Guest Area", href:'/account'},

]

export default async function Navigation() {
  const userSession = await auth()
  console.log(userSession)
  // const pathname=  usePathname()
 
  return (
    <nav className="z-10 text-xl items-center">
      <ul className="flex gap-16 items-center">
            <li><Link href={'/cabins'}>Cabins</Link></li>
            <li><Link href={'/about'}>about us</Link></li>
           {userSession?.user?.name?     
            <span>{userSession?.user?.name}</span>
           :
           <span>Guest Area</span>}   
      </ul>
    </nav>
  );
}
