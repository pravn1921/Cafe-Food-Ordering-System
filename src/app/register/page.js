"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      setUserCreated(true);
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 font-extrabold font-sans">
        Sign Up
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.<br />
          <Link className="font-semibold" href={'/login'}>Sign In</Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          Error.<br />
          Try again later
        </div>
      )}
      <form className="block max-w-sm mx-auto border border-gray-300 rounded-2xl p-8 shadow-md bg-blue-100" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="Email" value={email}
          disabled={creatingUser}
          onChange={ev => setEmail(ev.target.value)} />
        <input type="password" placeholder="Password" value={password}
          disabled={creatingUser}
          onChange={ev => setPassword(ev.target.value)} />
        <button type="submit" className="mt-5 w-44 mx-auto rounded-full shadow-md shadow-blue-300" disabled={creatingUser}>
          Sign Up
        </button>
        <div className="my-4 text-center text-gray-500">
          or SignIn with
        </div>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="flex gap-4 justify-center rounded-full w-60 mx-auto bg-white shadow-md shadow-gray-300">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t border-gray-300 pt-4">
          Already a User?{' '}
          <Link className="font-semibold" href={'/login'}>Sign In</Link>
        </div>
      </form>
    </section>
  );
}