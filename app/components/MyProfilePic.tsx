import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className=" w-full mx-auto">
      <Image
        className=" rounded-full border-4 border-black dark:border-slate-500 drop-shadow-xl mx-auto mt-8 border-solid"
        src="/images/pfp.jpeg"
        width={200}
        height={200}
        alt="profile picture"
        priority={true}
      />
    </section>
  );
}
