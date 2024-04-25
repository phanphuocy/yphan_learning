import Image from "next/image";
import Link from "next/link";

import rd001 from "@/public/images/trainings/renders/rd-001.png";

export const metadata = {
  title: "My Works",
};

export default function LongformsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <h2 className="font-bold">Trainings</h2>
      <p>Works: bad and good</p>
      <ul className="py-2">
        <li className="py-2">
          <figure>
            <Image src={rd001} alt="Color layer in C4D's Redshift" />
            <figcaption>Color layer in C4D's Redshift</figcaption>
          </figure>
        </li>
      </ul>
    </main>
  );
}
