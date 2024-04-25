import Image from "next/image";

export const metadata = {
  title: "My Works",
};

export default function Works() {
  return (
    <main className="flex min-h-screen flex-col">
      <h2 className="font-bold text-xl">My projects</h2>
      <ul className="py-2">
        <li className="py-2">
          <h3 className="font-semibold text-blue-500">
            doctiengthai.com <span className="text-gray-900">and</span>{" "}
            chunhatnhacthai.com
          </h3>
          <p className="text-gray-700">Lorem ipsum</p>
        </li>
        <li className="py-2">
          <h3 className="font-semibold text-blue-500">
            <span className="text-gray-900">
              Help clients promotes their services at{" "}
            </span>
            websitenhakhoa.com
          </h3>
          <p className="text-gray-700">Lorem ipsum</p>
        </li>
      </ul>
    </main>
  );
}
