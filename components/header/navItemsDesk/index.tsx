import Link from "next/link";
import Image from "next/image";
import sun from "@/public/assets/Icon-sun.svg";
import moon from "@/public/assets/Icon-moon.svg";

const NavItemsDesk = ({ toggletheme, theme }) => {
  return (
    <nav className="hidden gap-x-4 items-center md:flex lg:gap-x-6">
      <div className="flex gap-x-2 font-medium">
        <Link href="#">About</Link>
        <Link href="#">Work</Link>
        <Link href="#">Testimonials</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className="flex items-center cursor-pointer gap-x-4">
        {theme === "Dark" ? (
          <Image onClick={toggletheme} src={moon} alt="moon icon" />
        ) : (
          <Image onClick={toggletheme} src={sun} alt="sun icon" />
        )}
        <button
          className={
            theme === "Dark"
              ? `w-full rounded-xl px-4 py-[6px]  bg-darkPrimaryBg text-lightPrimaryBg`
              : `w-full rounded-xl px-4 py-[6px] bg-lightPrimaryBg text-darkPrimaryBg`
          }
        >
          <Link href="/assets/resume.pdf" download={true}>
            Download Resume
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default NavItemsDesk;
