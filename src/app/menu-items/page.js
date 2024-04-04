'use client';
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function MenuItemsPage() {

  const [menuItems, setMenuItems] = useState([]);
  const {loading, data} = useProfile();

  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setMenuItems(menuItems);
      });
    })
  }, []);

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin.';
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8 w-96 mx-auto items-center">
        <Link
          className="rounded-full flex gap-x-3 py-3 font-sans font-bold text-lg bg-primary text-white justify-center border-2 border-gray-300
          hover:scale-105 duration-300"
          href={'/menu-items/new'}>
          <span>Create new Item</span>
          <FaArrowAltCircleRight size={25} />
        </Link>
      </div>
      <div>
        <h2 className="text-lg font-bold text-primary font-sans mt-8 mb-3">Edit menu item:</h2>
        <div className="grid grid-cols-3 gap-2">
          {menuItems?.length > 0 && menuItems.map(item => (
            <Link
              key={item._id}
              href={'/menu-items/edit/'+item._id}
              className="bg-blue-100 rounded-3xl border-2 border-gray-300 p-4"
            >
              <div className="">
                <Image
                  className="rounded-lg w-52 h-44"
                  src={item.image} alt={''} width={200} height={200} />
              </div>
              <div className="text-center font-bold font-sans text-primary text-xl">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}