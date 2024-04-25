import Image from "next/image";

export const metadata = {
  title: "Y Phan' Learning Curve",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-xl font-bold mb-4">
        hey, I&apos;m Y Phan{" "}
        <span className="text-sm font-light text-blue-500">/ee fan/</span> 👋
      </h1>
      <div>
        Welcome to my digital space. I'm a web developer, and creator from
        Saigon, Vietnam. And here, I share what I've been working on recently
        and things I learned along the way.
      </div>
      <br />
      <h2 className="font-bold">Latest updates</h2>
      <ul className="py-2"></ul>
    </main>
  );
}
