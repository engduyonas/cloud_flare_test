import Container from "@/app/_components/container";
import { BLOG_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {BLOG_NAME} &mdash; Built with{" "}
            <a
              href="https://nextjs.org/"
              className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Next.js
            </a>{" "}
            and deployed on{" "}
            <a
              href="https://workers.cloudflare.com/"
              className="underline underline-offset-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Cloudflare Workers
            </a>
          </p>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
            className="text-sm text-neutral-500 dark:text-neutral-400 underline underline-offset-2 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Source on GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
