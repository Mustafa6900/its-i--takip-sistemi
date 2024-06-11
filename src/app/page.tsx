import React from 'react';
import Link from 'next/link';
export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold mb-8">Welcome to Its</h1>
      <Link href={`/login`} className={`m-8 w-64 h-64 hover:bg-teal-400 flex items-center justify-center bg-black rounded-3xl shadow-lg text-white transition-transform transform hover:scale-105  active:scale-95`}>
          Login
       </Link>      
    </main>
  );
}
