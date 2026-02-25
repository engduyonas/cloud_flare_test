import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
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

export function HeroPost({
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
    <section className="mb-16 md:mb-24">
      <div className="mb-6 md:mb-8 rounded-2xl overflow-hidden">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        <div>
          <h2 className="mb-3 text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
            <Link
              href={`/posts/${slug}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {title}
            </Link>
          </h2>
          <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            <DateFormatter dateString={date} />
            {readingTime && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 mb-4">
            {excerpt}
          </p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
