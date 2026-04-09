"use client"
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import SignOutButton from './SignOutButton';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'Home',
    href: '/account',
    icon: <HomeIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'Reservations',
    href: '/account/reservations',
    icon: <CalendarDaysIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'Guest profile',
    href: '/account/profile',
    icon: <UserIcon className='h-5 w-5 text-primary-600' />,
  },
];

function SideNavigation() {
  const pathName= usePathname()
  return (
    <nav className='border-r border-blue-400'>
      <ul className='flex flex-col gap-2 h-screen text-lg'>
        {navLinks.map((link) => (
          <li key={link.name} className={`hover:bg-blue-400 hover:-top-8  hover:-bottom-8    ${pathName===link.href?"bg-blue-400 -top-8  -bottom-8  ":""} `}>
            <a
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          </li>
        ))}

        <li className='mt-auto'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
