function Post({ post }) {
  return (
    <div>
      <h1>Post</h1>
      <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
      {" "}
    </div>
  )
}
export async function getStaticPaths() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await result.json();

  const paths = post.map((post) => ({
    params: { id: post.id.toString() },
  }));

  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}

export default Post;
