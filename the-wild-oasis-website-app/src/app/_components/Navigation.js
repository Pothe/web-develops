

import Link from "next/link";
// import { usePathname } from "next/navigation";
import { auth } from "../_lib/Auth";
import { useActionState } from "react";
import Image from "next/image";

// const NavLinks =[
//   {name:"Cabins", href:'/cabins'},
//    {name:"about", href:'/about'},
//     {name:"Guest Area", href:'/account'},

// ]

export default async function Navigation() {
  const session= await auth()

  // const pathname=  usePathname()
 
  return (
    <nav className="z-10 text-xl items-center">
      <ul className="flex gap-16 items-center">
            <li><Link href={'/cabins'} >Cabins</Link></li>
            <li><Link href={'/about'}>about us</Link></li>
           {session?.user?.name? <div className="flex gap-4 items-center"> 
              <img className="rounded-full w-8"
              src={session.user.image}           
              alt="Picture of the author"
              referrerPolicy="no-referrer"
             
              />
            <span> <Link href={'/account'}>{session.user.name}</Link></span>
            </div>
           :
           <span><Link href={'/account'}>Guest Area</Link></span>}   
      </ul>
    </nav>
  );
}
