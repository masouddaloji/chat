
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description: "صفحه اصلی چیت چت"
}

export default function Home() {
  return (
    <>
      <h1 className=''>صفحه اصلی</h1>
      <Link href="/chat"><h2>چت</h2></Link>
    </>
  )
}
