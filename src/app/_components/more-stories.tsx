import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold tracking-tight">
        More Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-24">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            readingTime={post.readingTime}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  );
}
