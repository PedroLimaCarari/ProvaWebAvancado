"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function Login() {
    const router = useRouter();
      
    return (
        <div className='min-h-screen bg-white flex'>


        
        <div className='hidden lg:block relative w-2/3 bg-gradient-to-bl from-red-500 via-red-700 via-blue-700 to-blue-500'>
            
        </div> 


        <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
            <div className='mx-auto w-full max-w-sm lg:w-96'>
                <div>
                    <img src="./image/profile.svg" alt=""className='lg:hidden h-20 w-auto' />
                    <h2 className='mt-6 text-3x1 font-semibold text-blue-700'>Entrar</h2>
                    <p className="mt-2 text-sm text-gray-600 max-w">Novo por aqui? <a href="registro" className="font-medium text-blue-700">Cadastre-se.</a></p>
                </div>
                <div className='mt-6'>
                    <form action="">
                        <div className='mb-4'>
                            <input type="text" placeholder='E-MAIL' className='apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus: outline-none' />
                        </div>
                        <div className='mb-4'>
                            <input type="password" placeholder='SENHA' className='apperance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus: outline-none'/>
                        </div>
                        <div className='mb-4'>
                            <button type='button' onClick={()=> router.push('/dashboard')} className='inline-block w-full py-4 px-8 leading-none text-white bg-blue-700 hover:bg-blue-900 font-semibold rounded shadow'>Entrar</button>
                        </div>
                        <div className='mb-4'>
                            <p> <a href="recover" className='text-blue-700'> Esqueci minha senha</a></p>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>

    </div>
    )
}