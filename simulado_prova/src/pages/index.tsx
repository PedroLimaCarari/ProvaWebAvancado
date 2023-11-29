import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex">

      <div className='hidden lg:block relative w-2/3 bg-gradient-to-bl from-red-500 via-red-700 via-blue-700 to-blue-500'>
      </div>

      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white">

        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-semibold text-blue-700">Home</h2>
            <div>
            <h3 className="mt-6 text-2xl font-semibold text-blue-700"> Prova CC5M</h3>
            </div>
          </div>
          <button
            type='button' onClick={()=> router.push('/login')} className='inline-block w-full py-4 px-8 leading-none text-white bg-blue-700 hover:bg-blue-900 font-semibold rounded shadow'>Login (/login)</button>
        </div>
      </div>
    </main>
  );
}
