"use client"

export default function Error({error,reset}) {
  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong with cabin</h1>
      <p className='text-lg text-red-500'>{error.message}</p>
      <button onClick={reset} className='inline-block bg-yellow-500 text-primary-800 px-6 py-3 text-lg'>
        Try again
      </button>
    </main>
  );
}
