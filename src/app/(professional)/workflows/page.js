import Image from "next/image";

export const metadata = {
  title: "My Works",
};

export default function Works() {
  return (
    <main className="flex min-h-screen flex-col">
      <h2 className="font-bold text-xl">My workflows</h2>
      <ul className="py-2 grid grid-cols-2 gap-x-6">
        <li className="py-2">
          <h3 className="font-semibold text-blue-500">
            Website: from Design-&gt;Deployment
          </h3>
          <p className="text-gray-700">Lorem ipsum</p>
        </li>
        <li className="py-2">
          <h3 className="font-semibold text-blue-500">
            <h3 className="font-semibold text-blue-500">
              WebApp: Ruby on Rails, Python
            </h3>
          </h3>
          <p className="text-gray-700">Lorem ipsum</p>
        </li>
        <li className="py-2">
          <h3 className="font-semibold text-blue-500">
            <h3 className="font-semibold text-blue-500">Motion & 3D design</h3>
          </h3>
          <p className="text-gray-700">Lorem ipsum</p>
        </li>
      </ul>
    </main>
  );
}
