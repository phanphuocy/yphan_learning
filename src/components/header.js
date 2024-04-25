"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const old = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "WORKS",
    path: "/works",
  },
  {
    name: "WORKFLOW",
    path: "/workflows",
  },
  {
    name: "SKILLS",
    path: "/",
  },
  {
    name: "NOTES",
    path: "/",
  },
  {
    name: "REELS",
    path: "/",
  },
  {
    name: "TRAININGS",
    path: "/trainings",
  },
  {
    name: "LONGFORMS",
    path: "/longforms",
  },
  {
    name: "MUSIC PLAYLIST",
    path: "/playlists",
  },
  {
    name: "CONTACT",
    path: "/",
  },
];

const newNav = [
  { name: "LIFE", path: "/" },
  { name: "what i do", path: "/what-i-do" },
  { name: "LEARNINGS", path: "/" },
];

const Header = () => {
  return (
    <header className="bg-white pt-12 pb-8 px-48 w-full flex flex-row justify-between items-center">
      <div className="flex flex-row gap-x-4">
        <div className="w-20 h-20 bg-black rounded-xl"></div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-xl">Y Phan's Learning Curve</h1>
          <TypeAnimation
            sequence={[
              "Carving myself out of stone",
              40000,
              "99% distraction, 1% doing things better",
              40000,
              "To live a life, to be a man, to think rightly",
              40000,
            ]}
            wrapper="span"
            speed={50}
            className="text-gray-700"
            repeat={Infinity}
          />
        </div>
      </div>
      <nav>
        <ul className="grid grid-cols-5 gap-x-1 gap-y-4">
          {old.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="px-3 py-1 border-2 border-white hover:border-2 hover:border-dashed hover:border-blue-600 active:border-solid active:border-blue-100"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
