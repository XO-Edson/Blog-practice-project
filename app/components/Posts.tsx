import { getPostsMeta } from "@/lib/posts";
import ListItem from "./ListItem";

export default async function Posts() {
  const posts = await getPostsMeta();
  //console.log(posts);

  if (!posts) {
    return <p>Sorry, no posts available</p>;
  }

  return (
    <section className=" mt-6 mx-auto max-w-2xl">
      <h2 className="text-3xl font-bold dark:text-white/80">Blog</h2>
      <ul className=" w-full list-none">
        {posts?.map((post) => {
          return <ListItem key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
