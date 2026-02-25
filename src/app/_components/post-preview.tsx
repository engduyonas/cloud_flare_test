import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  readingTime?: number;
  tags?: string[];
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
  tags,
}: Props) {
  return (
    <div className="group">
      <div className="mb-4 rounded-xl overflow-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
        <DateFormatter dateString={date} />
        {readingTime && (
          <>
            <span aria-hidden="true">&middot;</span>
            <span>{readingTime} min read</span>
          </>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 leading-snug">
        <Link
          href={`/posts/${slug}`}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          {title}
        </Link>
      </h3>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 mb-3 line-clamp-3">
        {excerpt}
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
