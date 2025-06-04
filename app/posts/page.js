import Todo from "../comonents/Todo";
import React from "react";
import Link from "next/link";
async function Posts_page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120, // إعادة التحقق كل 120 ثانية
    },
    // cache: 'force-cache' // SSG
    // cache: 'no-store'    // SSR
  });

  if (!response.ok) {
    throw new Error("فشل في جلب البيانات");
  }

  const posts = await response.json();
  const postjsx = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} style={{ width: "70%" }}>
        <div
          style={{
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });
  console.log(posts);

  return (
    <div>
      <h1 style={{ color: "white" }}>Posts_page</h1>
      {/*posts */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postjsx}
      </div>
      {/*<div>
        <Todo />
      </div>*/}
    </div>
  );
}

export default Posts_page;
