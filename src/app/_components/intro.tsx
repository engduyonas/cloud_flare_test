import { BLOG_NAME, BLOG_DESCRIPTION } from "@/lib/constants";

export function Intro() {
  return (
    <section className="mt-16 mb-16 md:mb-20">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
        {BLOG_NAME}
      </h1>
      <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl">
        {BLOG_DESCRIPTION}
      </p>
    </section>
  );
}
