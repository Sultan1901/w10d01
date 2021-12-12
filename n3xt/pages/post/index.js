import Link from "next/link";
export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    props: { post: data }
  };
}

const Posts = ({ post }) => {
  return (
    <div>
      <h1>Posts</h1>
      {post.map((item) => (
        <Link href={`post/${item.id}`} key={item.id}>
          <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
