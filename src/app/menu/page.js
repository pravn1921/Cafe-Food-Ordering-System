'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import {useEffect, useState} from "react";
import { IoSearch } from "react-icons/io5";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => setCategories(categories))
    });
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => setMenuItems(menuItems));
    });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = menuItems.filter(item => item.name.toLowerCase().includes(query));
    setFilteredMenuItems(filtered);
  };

  return (
    <section className="mt-10 mx-14">
      <div className=" flex gap-x-2 w-[650px] mx-auto mb-6 sticky top-24">
      <input
      type="name"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
      className="rounded-full border-2 border-primary py-2.5 pl-4 w-full"
      />
      <div className="bg-primary rounded-full px-4 text-white pt-2">
        <IoSearch size={30} />
      </div>
      </div>
    {categories?.length > 0 && categories.map(c => (
      <div key={c._id}>
        <div className="text-center mb-10 font-sans font-extrabold text-primary text-5xl">
          {c.name} 
        </div>
        <div className="grid sm:grid-cols-3 gap-y-10 mb-12">
          {filteredMenuItems.length > 0 ? filteredMenuItems
            .filter(item => item.category === c._id)
            .map(item => (
              <MenuItem key={item._id} {...item} />
            ))
          : menuItems.filter(item => item.category === c._id)
              .map(item => (
                <MenuItem key={item._id} {...item} />
              ))}
        </div>
      </div>
    ))}
    </section>
  );
}