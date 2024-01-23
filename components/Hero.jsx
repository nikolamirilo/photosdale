import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] w-full relative bg-cover bg-center">
      <Image
        src="https://th.bing.com/th/id/R.2eb49b488649169af48c1328ebbaaa87?rik=bBgfXiEA7zMBQw&pid=ImgRaw&r=0"
        alt="Hero"
        priority={true}
        fill
        className="object-center object-cover z-0 filter brightness-50"
      />
      <div className="z-10 flex flex-col justify-center items-center gap-10 h-full w-1/2">
        <h1 className="text-4xl uppercase font-bold text-white text-center">
          Welcome to the official website of instagram account @photosdale!
        </h1>
        <p className="text-xl text-white text-center">
          Check out my posts and contribute to my work!
        </p>
        <button
          type="button"
          className="text-lg bg-primary hover:bg-blue-600 px-5 py-2 text-white rounded-md"
        >
          <Link href="/contribute"> Contribute</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
