import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";

function Footer() {
  return (
    <footer id="contact-us" className="max-container">
      <div className="flex items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="nike logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 font-montserrat leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex gap-4">
            {socialMedia.map((social, index) => (
              <div
                key={index}
                className="flex h-12 w-12 justify-center rounded-full bg-white"
              >
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 flex justify-between font-montserrat max-sm:flex-col max-sm:items-center">
        <div className="flex gap-2">
          <img src={copyrightSign} alt="copyright sign" />
          <p className="text-white-400 ">Copyright. All rights reserved.</p>
        </div>
        <p className="text-white-400">Term & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
