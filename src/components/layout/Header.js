'use client';
import {CartContext} from "@/components/AppContext";
import Bars2 from "@/components/icons/Bars2";
import { FaCartShopping } from "react-icons/fa6";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useContext, useState} from "react";

function AuthLinks({status, userName}) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'}>
          {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-primary rounded-full text-white px-6 py-2 border-2">
          Sign Out
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={'/login'}>Sign In</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2 border-2">
          Sign Up
        </Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName =  <Image src={userData?.image || '/placeholder.jpg'} width={90} height={90} alt={''} className="rounded-full border-2" /> || userData?.name || userData?.email;
  const {cartProducts} = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName?.name && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  return (
    <header className="px-12 pt-2 pb-2 bg-white sticky top-0 drop-shadow-sm">
      <div className="flex items-center md:hidden justify-between">
        <Link className="text-primary font-semibold text-2xl" href="/">
          <Image src={'/bflogo.png'} width={180} height={180} className="p-2" alt="home"/>
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={'/cart'} className="relative">
            <FaCartShopping size={25}/>
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
            {cartProducts.length}
          </span>
            )}
          </Link>
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen(prev => !prev)}>
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 items-center font-bold font-sans text-lg">
          <Link href={'/'} className="hover:border-b-2 hover:border-gray-400 hover:scale-110 hover:text-primary duration-100">Home</Link>
          <Link href={'/menu'} className="hover:border-b-2 hover:border-gray-300 hover:scale-110 hover:text-primary duration-100">Menu Items</Link>
          <Link href={'/contact'} className="hover:border-b-2 hover:border-gray-300 hover:scale-110 hover:text-primary duration-100">Contact</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href="/">
          <Image src={'/bflogo.png'} width={180} height={180} className="p-2" alt="home"/>
        </Link>
        <nav className="flex items-center gap-x-14 ml-[85px] text-gray-500 font-extrabold font-sans text-lg">
          <Link href={'/'} className="hover:text-primary hover:border-b-2 hover:border-primary duration-100">Home</Link>
          <Link href={'/menu'} className="hover:text-primary hover:border-b-2 hover:border-primary duration-100">Menu Items</Link>
          <Link href={'/contact'} className="hover:text-primary hover:border-b-2 hover:border-primary duration-100">Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <AuthLinks status={status} userName={userName} />
          <Link href={'/cart'} className="relative">
            <FaCartShopping size={25} className="text-black" />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
            {cartProducts.length}
          </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}