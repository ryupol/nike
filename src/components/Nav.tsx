import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
// import { navLinks } from "../constants";

function Nav() {
  let tags = ["Home", "About Us", "Products", "Contact Us"];

  return (
    <div className="flex justify-between">
      <a href="/">
        <img
          src={headerLogo}
          alt="Nike Logo"
          className="m-0 h-[29px] w-[129px]"
        />
      </a>
      <ul>
        <li>
          {tags.map((tag) => (
            <a href="/">{tag}</a>
          ))}
        </li>
      </ul>
      <div className="p-4 pt-2 font-montserrat font-normal leading-normal text-red-200">
        <a href="/">Sign in</a>
        <span>/</span>
        <a href="/">Explore now</a>
      </div>
      <div className="hidden">
        <img
          src={hamburger}
          alt="hamburger icon"
          className="h-[25px] w-[25px]"
        />
      </div>
    </div>
  );
}

export default Nav;
