import Image from "next/image";
import Link from "next/link";
import sun from "@/public/assets/Icon-sun.svg";
import moon from "@/public/assets/Icon-moon.svg";

const NavItem = ({ themeStyles, showMenu, toggletheme, theme }) => {
  const navStyles =
    "absolute flex flex-col h-screen top-[64px] left-0  w-full md:hidden";
  const buttonStyles = "w-full rounded-xl py-[6px] mb-4";

  return (
    <>
      {showMenu && (
        <nav className={`${themeStyles} ${navStyles}`}>
          <div className="flex flex-col gap-y-4 px-4 border-b border-[#1F2937] pb-2 md:flex-row">
            <Link href="#">About</Link>
            <Link href="#">Work</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className="flex flex-col  px-4 gap-y-2 md:flex-row md:items-center">
            <div className="flex items-center justify-between py-2 cursor-pointer">
              <p className="md:hidden">Switch Theme</p>
              {theme === "Dark" ? (
                <Image onClick={toggletheme} src={moon} alt="moon icon" />
              ) : (
                <Image onClick={toggletheme} src={sun} alt="sun icon" />
              )}
            </div>
            <button
              className={
                theme === "Dark"
                  ? `${buttonStyles} bg-darkPrimaryBg text-lightPrimaryBg`
                  : `${buttonStyles} bg-lightPrimaryBg text-darkPrimaryBg`
              }
            >
              <Link href="/assets/resume.pdf" download={true}>
                Download Resume  
              </Link>
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavItem;
