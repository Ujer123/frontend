// Navbar.js (Server Component)
import Link from 'next/link';
import MobileMenu from './MobileMenu'; // Client Component
import SearchBar from './SearchBar'; // Client Component
import Image from 'next/image';
import LogoS from '@/public/images/Logo-copy.jpg'



function Navbar() {
  return (
    <div className='bg-white border-b-2 py-4 fixed top-0 w-full flex flex-col md:flex-row justify-between items-center px-5 z-50'>
      <div className='flex justify-between w-full md:w-auto items-center'>
        {/* <h2 className='text-lg font-bold'>Daniyal</h2> */}
        <Image
        src={LogoS}
        // height={40}
        // width={200}
        alt="Picture of the author"
        className='rounded-none w-auto sm:h-12 h-8'
        priority
      />            
        <MobileMenu />
      </div>

      {/* Centered Menu Links */}
      <div className='hidden md:block'>
      <ul className="flex-col md:flex-row flex gap-5 mt-2 md:mt-0 mx-auto font-semibold">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/Blogs'}>Blog</Link></li>
        <li><Link href={'/products'}>Our Products</Link></li>
        <li><Link href={'/signup'}>Signup</Link></li>
      </ul>
      </div>

      <SearchBar />
    
    </div>
  );
}

export default Navbar;
