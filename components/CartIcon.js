import React,{useState, useEffect} from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import Link from 'next/link';
import { FaCartFlatbed } from "react-icons/fa6";

function CartIcon() {
  const items = useAppSelector((state) => state.cart.items);
    const itemCount = items.length;
    const [hydrated, setHydrated] = useState(false);

    // Mark the component as hydrated after mounting
    useEffect(() => {
      setHydrated(true);
    }, []);
  return (
    <>
       <Link href={'/cart'}  className='mr-5'>
        <div className='relative'>
          <FaCartFlatbed className="text-lg" />
          <span suppressHydrationWarning className='absolute -top-4 -right-3 bg-zinc-700 rounded-full w-5 h-5 flex items-center justify-center font-medium text-sm text-white'>{hydrated ? items.length : 0}</span>
        </div>
        </Link>
    </>
  )
}

export default CartIcon
