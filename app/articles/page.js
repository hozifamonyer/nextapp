import React from 'react'
import Link from 'next/link';
function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <Link href="/posts">
       <button>Take me to the posts page</button>
      </Link>
    </div>

  )
}

export default Articles;