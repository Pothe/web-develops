import Link from "next/link";


export default function Navigation() {
    return (
       <ul className="flex flex-row gap-5">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>About us</Link></li>
        <li><Link href={'/academics'}>Academics</Link></li>
         <li><Link href={'/admission'}>Admissions</Link></li>
       </ul>
    )
}
