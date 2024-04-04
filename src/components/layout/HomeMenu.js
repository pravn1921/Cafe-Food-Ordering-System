'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { useEffect, useState } from "react";
import Right from "../icons/Right";
import { useRouter } from 'next/navigation';

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);

  return (
    <section className="flex flex-col items-center mt-16">
      <div className="text-center mb-6">
        <SectionHeaders
          subHeader={'Recommended'}
          mainHeader={'Must Try..'} />
      </div>
      <div className="grid grid-cols-3 xl:w-[1200px] m-auto mt-8">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
      </div>
      <div className="mt-12">
        <button 
        onClick={() => router.push('/menu')}
        className="rounded-full py-3 px-14 text-primary border-primary border-2 hover:bg-primary hover:text-white hover:scale-105 duration-300 items-center text-lg hover:border-gray-400">
          View All
          <Right />
        </button>
      </div>
    </section>
  );
}