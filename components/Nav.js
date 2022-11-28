import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <button className="text-lg font-medium">Creative Minds</button>
      </Link>
      <ul className="flex items-center gap-10">
        <Link
          href={"/auth/login"}
          className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8"
        >
          Join Now
        </Link>
      </ul>
    </nav>
  );
}

//currently at 27:13 with https://www.youtube.com/watch?v=o7jTN4s78GQ&t=16s
