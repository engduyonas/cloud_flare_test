import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  readingTime?: number;
  tags?: string[];
};

export function PostHeader({
  title,
  coverImage,
  date,
  author,
  readingTime,
  tags,
}: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Avatar name={author.name} picture={author.picture} />
          <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <DateFormatter dateString={date} />
            {readingTime && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>{readingTime} min read</span>
              </>
            )}
          </div>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
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
      <div className="mb-12 md:mb-16 rounded-2xl overflow-hidden">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
