import Link from "next/link";
import { BLOG_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="flex items-center justify-between mt-8 mb-16">
      <h2 className="text-xl font-bold tracking-tight">
        <Link
          href="/"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          {BLOG_NAME}
        </Link>
      </h2>
    </header>
  );
};

export default Header;
