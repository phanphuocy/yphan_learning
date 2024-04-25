import Link from "next/link";
import { getAllPosts } from "@/src/utils/longforms";

export const metadata = {
  title: "My Works",
};

export default async function LongformsPage() {
  const posts = await getAllPosts();

  return (
    <main className="flex min-h-screen flex-col">
      <h2 className="font-bold text-xl">Long-form articles</h2>
      <br />
      <h3 className="font-bold">2024</h3>
      <ul className="py-2">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="py-2 flex flex-row justify-between items-center"
          >
            <Link href={`longforms/${post.slug}`}>
              <h3 className="font-medium text-blue-500 hover:underline">
                {post.data.title}
              </h3>
            </Link>
            <span className="text-gray-700">{post.stats.text}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
