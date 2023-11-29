"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
export default function Dashboard() {
  const router = useRouter();
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-bl from-red-500 via-red-700 via-blue-700 to-blue-500'>

      {/* Header */}
      <div className='bg-white p-4 flex justify-between items-center'>
        <div className='text-3xl font-semibold text-gray-800'>Dashboard</div>
        <button type='button' onClick={()=> router.push('/login')} className='px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded shadow'>
          Sair
        </button>
      </div>

      {/* Content */}
      <div className='flex items-center justify-center flex-1 space-x-4'>
        {/* Card 1 */}
        <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold text-blue-700'>GRUPOS</h2>
            <p className='text-gray-600'>Vou de Van</p>
            <p className='text-gray-600'>Security Guard</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold text-blue-700'>Avaliadores</h2>
            <p className='text-gray-600'>Otavio.</p>
            <p className='text-gray-600'>Susi.</p>
            <p className='text-gray-600'>Saulo.</p>
            <p className='text-gray-600'>Abrantes.</p>
            <p className='text-gray-600'>Campones.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold text-blue-700'>DIAS</h2>
            <p className='text-gray-600'>Segunda-Feira 27/09.</p>
            <p className='text-gray-600'>Terça-Feira 28/09.</p>
            <p className='text-gray-600'>Quarta-Feira 29/09.</p>
            <p className='text-gray-600'>Quinta-Feira 30/09.</p>
            <p className='text-gray-600'>Sexta-Feira 01/10.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
