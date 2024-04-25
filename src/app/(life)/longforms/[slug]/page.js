import Link from "next/link";
import { Inter } from "next/font/google";
import { getAllPosts, getPostBySlug } from "@/src/utils/longforms";

const inter = Inter({ subsets: ["vietnamese"] });

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({ slug: post.data.slug }));
}

export default async function LongformPage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <div>
      <nav>
        <Link className="underline" href="/longforms">
          Longforms
        </Link>
      </nav>
      <article className="prose xl:prose-lg prose-blockquote:text-gray-700 prose-blockquote:font-light prose-blockquote:text-xl prose-blockquote:leading-relaxed prose-blockquote:pr-24 prose-blockquote:pl-12">
        <header>
          <h2>{post.data.title}</h2>
          <p>
            <small>{post.stats.text}</small>
          </p>
        </header>
        <main
          className={String.prototype.concat(inter.className, "")}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></main>
      </article>
    </div>
  );
}
