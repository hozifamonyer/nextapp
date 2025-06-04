export default async function PageDetails({ postid }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
  const post = await response.json();

  return (
    <div
      style={{
        width: '100%',
        background: 'white',
        padding: '10px',
        borderRadius: '10px',
        marginTop: '20px',
      }}
    >
      <h2>{post.title}</h2>
      <hr />
      <p>{post.body}</p>
    </div>
  );
}
