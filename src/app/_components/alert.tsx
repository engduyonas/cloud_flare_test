import Container from "@/app/_components/container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  if (!preview) return null;

  return (
    <div
      className={cn(
        "border-b text-sm",
        "bg-amber-50 border-amber-200 text-amber-800",
        "dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-200"
      )}
    >
      <Container>
        <div className="py-2 text-center">
          This page is a preview.{" "}
          <a
            href="/api/exit-preview"
            className="underline underline-offset-2 hover:text-amber-600 dark:hover:text-amber-100 transition-colors"
          >
            Click here
          </a>{" "}
          to exit preview mode.
        </div>
      </Container>
    </div>
  );
};

export default Alert;
