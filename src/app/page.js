import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="ml-12 mr-10">
        <Image src={'/ban.png'} width={700} height={700} className="w-[1500px] h-[300px] rounded-xl shadow-2xl border-4 border-gray-200" />
      </div>
      <Hero />
      <HomeMenu />
      <section className="text-center mt-28">
        <SectionHeaders
          subHeader={'About us'}
          mainHeader={'Our Services'}
        />
        

        {/* about */}
        <div className="flex flex-row justify-evenly mx-16">
          <div>
            <Image src={'/ill1.jpg'} width={5000} height={4500} alt="Illustration"/>
          </div>
          <div className="text-gray-500 ml-8 font-sans text-lg flex flex-col gap-y-8 text-justify mt-16">
            <p className="indent-14">
              Welcome to Blue Forest Cafe, where we offer a delectable array of starters, cakes, juices, and other delicious treats to satisfy your
              cravings. Our menu is carefully curated to include a variety of options to suit all tastes and preferences. Whether you&apos;re in the mood
              for a savory starter to kick off your meal, a decadent slice of cake for a sweet treat, or a refreshing juice to quench your thirst, we&apos;ve
              got you covered. Our products are made with the finest ingredients and crafted with love and care to ensure a truly delightful dining experience.
              Order from Blue Forest Cafe online and let us bring the flavors of our cafe right to your doorstep. Enjoy a taste of our culinary creations today!
            </p>
            <p className="indent-14">
            Blue Forest Cafe is a popular dining spot in Madurai, Tamil Nadu, India, with multiple locations in the city. 
            One branch is situated at 170, E Veli St, StreetMadurai, and offering a diverse menu and 
            another location can be found at Noyes Complex, Narimedu.
            The cafe is known for its Butter Chicken Burger and Cheesy Pizza.
            </p>
          </div>
        </div>

        {/* services */}
        <div className="flex flex-row justify-evenly mt-6 font-sans ml-7">
          <div className="flex flex-col items-center">
            <Image src={'/s1.png'} width={200} height={200} alt="" />
            <h3 className="mt-3 font-bold text-primary text-xl">Easy Order</h3>
            <p className="text-gray-500 text-[17px] max-w-60">You only need few steps to order food</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={'/s2.png'} width={190} height={190} alt="" />
            <h3 className="mt-3.5 font-bold text-primary text-xl">Fast Delivery</h3>
            <p className="text-gray-500 text-[17px] max-w-60">Delivery that is always on time, even faster</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={'/s3.png'} width={210} height={210} alt="" />
            <h3 className="mt-3 font-bold text-primary text-xl">Quality Food</h3>
            <p className="text-gray-500 text-[17px] max-w-60">Quality is our atmost concern than any other</p>
          </div>
        </div>
      </section>
    </>
  )
}
