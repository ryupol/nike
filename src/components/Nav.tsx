import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

function Nav() {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img
            src={headerLogo}
            alt="Nike Logo"
            width={129}
            height={29}
            className="m-0"
          />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg leading-normal text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="leading-normnal flex justify-between gap-2 font-montserrat text-lg font-medium max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden cursor-pointer max-lg:block">
          <img src={hamburger} alt="hamburger icon" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
