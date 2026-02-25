type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={picture}
        className="w-10 h-10 rounded-full object-cover ring-2 ring-neutral-100 dark:ring-neutral-800"
        alt={name}
      />
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {name}
      </span>
    </div>
  );
};

export default Avatar;
