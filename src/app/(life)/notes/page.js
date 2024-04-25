import Image from "next/image";

export const metadata = {
  title: 'My Notes'
}

export default function Notes() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-xl font-bold mb-4">my notes</h1>
      <br/>
    </main>
  );
}
