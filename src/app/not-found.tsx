import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
      <h2>404 Pge Not Found</h2>
      <Link href="/">go to Home Page</Link>
    </div>
  )
}