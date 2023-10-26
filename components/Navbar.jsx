import Image from "next/image";
import Link from "next/link";
import hilinkLogo from "../public/hilink-logo.svg";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" py-5 flexBetween max-container padding-container">
      <Link href="/">
        <Image src={hilinkLogo} alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flexCenter text-gray-50 pd-1.5 cursor-pointer hover:font-bold transition-all"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden z-20">
        <Button
          type="button"
          title="Login"
          variant="btn_dark_green"
          icon="/user.svg"
        />
      </div>

      <Image
        src="/menu.svg"
        width={32}
        height={32}
        alt="menu"
        className="inline-block lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
