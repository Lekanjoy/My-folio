"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import location from "@/public/assets/Icon-location.svg";
import github from "@/public/assets/Icon-github.svg";
import twitter from "@/public/assets/Icon-twitter.svg";
import online from "@/public/assets/Icon-online.svg";
import olalekan from "@/public/assets/olalekan.jpg";

const Hero = () => {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <section
      id="hero"
      className={` ${themeStyles} w-full min-h-screen flex flex-col-reverse items-center justify-between px-4 pb-8 md:flex-row lg:px-20`}
    >
      <div className="flex flex-col  lg:w-1/2">
        <div>
          <h1 className="text-4xl font-semibold mb-2">Hi, I'm Olalekan 👋 </h1>
          <p className="text-sm">
            I'm a Frontend Developer with a focus on creating exceptional
            digital experiences that are fast, accessible, visually appealing,
            and responsive.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-y-1 mt-12 mb-2">
          <div className="flex items-center gap-x-2">
            <Image src={location} width={12} height={12} alt="Location Icon" />
            <p className="text-sm md:text-base">Lagos, Nigeria</p>
          </div>
          <div className="flex items-center gap-x-2">
            <Image src={online} width={10} height={10} alt="online Icon" />
            <p className="text-sm md:text-base">Available for new projects</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <Link href="https://github.com/Lekanjoy">
            <Image src={github} width={30} height={30} alt="github Icon" />
          </Link>
          <Link href="https://twitter.com/Olalaykun">
            <Image src={twitter} width={30} height={30} alt="twitter Icon" />
          </Link>
        </div>
      </div>

      <div className="relative flex justify-center items-center mt-16 z-[1] before:z-[-1] before:absolute before:bg-[#374151] before:w-[110%] before:h-full before:top-4 md:mt-0 lg:w-1/2 lg:before:w-[35%] lg:before:top-[25px] lg:before:right-[155px]">
        <Image src={olalekan} alt="Olalekan Alabi" />
      </div>
    </section>
  );
};

export default Hero;
