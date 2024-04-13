'use client';
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import Link from "next/link";
import {useEffect, useState} from "react";
import { MutatingDots } from "react-loader-spinner";

export default function UsersPage() {

  const [users, setUsers] = useState([]);
  const {loading,data} = useProfile();

  useEffect(() => {
    fetch('/api/users').then(response => {
      response.json().then(users => {
        setUsers(users);
      });
    })
  }, []);

  if (loading) {
    return <div className="h-96 flex items-center justify-center ">
    <MutatingDots
    visible={true}
    height="100"
    width="100"
    color="#0074B7"
    secondaryColor="#0074B7"
    radius="12"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
    </div>;
  }

  if (!data.admin) {
    return 'Not an admin';
  }

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        {users?.length > 0 && users.map(user => (
          <div
            key={user._id}
            className="bg-gray-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4">
            <div className="flex flex-col">
              <div className="text-primary font-extrabold font-sans text-lg">
                {!!user.name && (<span>{user.name}</span>)}
                {!user.name && (<span className="italic">No name</span>)}
              </div>
              <div className="text-gray-500 font-sans">
                {user.email}
              </div>
            </div>
            <div className="ml-auto">
              <Link className="button" href={'/users/'+user._id}>
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}