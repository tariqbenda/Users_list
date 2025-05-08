import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <Link href="/" className="absolute top-0 left-0 m-4 p-2 bg-blue-500 text-white rounded">
        Go to Home Page
    </Link>
  )
}

export default page