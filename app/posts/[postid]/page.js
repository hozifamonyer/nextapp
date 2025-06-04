import PageDetails from '@/app/comonents/PostDetails'
import { Suspense } from 'react';

export default async function PostDetailsPage({ params }) {
  const { postid } = params;
 const lodingjsx=(
  <div><h1 style={{color:"white"}}>Loding...</h1></div> )
  return (
    <div>
      <h1 style={{ color: "red" }}>تفاصيل المنشور</h1>
      <Suspense fallback={lodingjsx}> 
      <PageDetails postid={postid} />
      </Suspense>
    </div>
  );
}
