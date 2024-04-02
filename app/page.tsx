import Posts from "./components/Posts";

//export const revalidate = 10;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>
        Hello and Welcome 👋&nbsp;
        <span className=" whitespace-nowrap">
          I&apos;m <span className=" font-bold"></span>Edson
        </span>
        .
      </h1>

      <Posts />
    </main>
  );
}
