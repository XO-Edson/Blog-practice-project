import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className=" bg-slate-600 p-4 drop-shadow-xl sticky top-0 z-10">
      <div className="prose prose-xl flex justify-between flex-col sm:flex-row mx-auto">
        <h1 className=" w-full text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 sm:w-auto">
          <Link
            href="/"
            className=" text-white/90 no-underline hover:text-white"
          >
            Ed.
          </Link>
        </h1>

        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-4xl">
          <Link
            href="www.twitter.com"
            className=" text-white/80 hover:text-white"
          >
            <FaTwitter />
          </Link>
          <Link
            href="www.twitter.com"
            className=" text-white/80 hover:text-white"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="www.twitter.com"
            className=" text-white/80 hover:text-white"
          >
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  );
}
