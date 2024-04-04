'use client';
import Right from "@/components/icons/Right";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  return (
    <section className="hero mt-4 ml-14">
      <div className="py-8 md:py-12 pl-2">
        <h1 className="font-extrabold text-7xl font-sans text-gray-600">
          Everything's<br />
          better with<br />
          <span className="text-primary text-9xl">
            Pizza...
          </span>
        </h1>
        <p className="my-6 text-gray-400 text-xl font-sans">
          "Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity."
        </p>
        <div className="flex gap-4 text-m">
          <button 
          onClick={() => router.push('/contact')}
          className="flex justify-center text-white bg-primary hover:shadow-xl border-2 border-primary items-center gap-2 px-4 py-3 rounded-full w-52 text-lg hover:scale-105 duration-300 hover:border-gray-400">
            Contact
            <Right />
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <Image src={'/pizza.png'} width={580} height={580} className="ml-32 mt-4" />
      </div>
    </section>
  );
}