import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className=" mt-4 dark:text-white/80" key={id}>
      <Link href={`/posts/${id}`} className=" hover:underline">
        {title}
      </Link>
      <br />
      <p className=" text-sm mt-2">{formattedDate}</p>
    </li>
  );
}
