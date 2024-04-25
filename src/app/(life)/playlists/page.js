import Image from "next/image";

export const metadata = {
  title: "My Works",
};

export default function Works() {
  return (
    <main className="flex min-h-screen flex-col">
      <h2 className="font-bold text-xl">My earworms</h2>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NaJ_eoNHyag?si=EynliGDGQQldvw-5"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </main>
  );
}
