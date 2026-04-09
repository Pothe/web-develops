"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks =[
  {name:"Cabins", href:'/cabins'},
   {name:"about", href:'/about'},
    {name:"Guest Area", href:'/account'},
     {name:"Guest Area1", href:'/account'},
]

export default function Navigation() {
  const pathname=  usePathname()
  console.log(pathname)
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
                {NavLinks.map(link=><li key={link.name} className={ `relative inline-block cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:text-yellow-300 uppercase transition-colors ${pathname===link.href?"text-yellow-200":""}`}><Link href={link.href}>{link.name}</Link></li>)}
      </ul>
    </nav>
  );
}
