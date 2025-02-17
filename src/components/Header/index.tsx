import { useState } from "react";
import { Button } from "../Button";
import Logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useWindowScroll } from "../../hooks/useWindowScroll";
import { IoTriangle } from "react-icons/io5";
import { TfiAngleDown } from "react-icons/tfi";

interface DownloadButtonProps {
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className }) => {
  const handleDownload = () => {
    const userAgent = window.navigator.userAgent;
    
    if (/android/i.test(userAgent)) {
      window.location.href = "http://play.google.com/store/apps/details?id=com.techitcheap.app";
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = "https://apps.apple.com/ng/app/techitcheap-tech-it-cheap/id6449785424";
    } else {
      window.location.href = "http://play.google.com/store/apps/details?id=com.techitcheap.app";
    }
  };

  return (
    <Button
      onClick={handleDownload}
      className={className}
      size="lg"
      as="btn"
      bgColor="bg-colorGold"
      hoverBgColor="hover:bg-[#ef5400cb]"
    >
      Download App
    </Button>
  );
};

export const Header = (): JSX.Element => {
  const [checked, setChecked] = useState(false);
  const { scrollHeight } = useWindowScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-transparent flex fixed w-full z-20 justify-between items-center h-[80px] min-[400px]:px-10 px-5 bg-white bg-opacity-[0.05] backdrop-filter backdrop-blur-lg">
      <figure className="w-[150px]">
        <img src={Logo} alt="accessivo logo" className="w-full h-full" />
      </figure>

      {isOpen && (
        <div
          className="absolute top-16 bg-white w-[70vw] rounded-md right-1/2 left-1/2 transform -translate-x-1/2 hidden lg:block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full h-full relative">
            <IoTriangle
              className="absolute right-1/2 left-1/2 transform -translate-x-1/2 -mt-4"
              color="#FFF8FE"
              size={30}
            />
            <ul className="grid grid-cols-3">
              <li className="text-primaryPurple p-5 inline-block text-3xl font-medium">
                <span className="text-black">Our</span> Services
              </li>
              <li className="font-normal cursor-pointer flex flex-col gap-3 p-5">
  <NavLink
    className="font-fontMont inline-block w-full text-black hover:text-primaryPurple"
    to="/dollar-card"
  >
    Dollar Card
    <p className="text-sm text-gray-500 mt-1">Manage your international spending with ease.</p>
  </NavLink>
  <div className="bg-primaryPurple w-[2px] h-10"></div>
</li>

<li className="font-normal cursor-pointer p-5 flex flex-col gap-3">
  <NavLink
    className="font-fontMont inline-block w-full text-black hover:text-primaryPurple"
    to="/foreign-account"
  >
    Foreign Account
    <p className="text-sm text-gray-500 mt-1">Open and manage accounts in different currencies.</p>
  </NavLink>
  <div className="bg-primaryPurple w-[2px] h-10"></div>
</li>

<li className="font-normal cursor-pointer flex flex-col gap-3 p-5">
  <NavLink
    className="font-fontMont inline-block w-full text-black hover:text-primaryPurple"
    to="/digital-banking"
  >
    Digital Banking
    <p className="text-sm text-gray-500 mt-1">Bank anytime, anywhere with our secure platform.</p>
  </NavLink>
  <div className="bg-primaryPurple w-[2px] h-10"></div>
</li>

<li className="font-normal cursor-pointer flex flex-col gap-3 p-5">
  <NavLink
    className="font-fontMont inline-block w-full text-black hover:text-primaryPurple"
    to="/airtime-VTU"
  >
    Airtime VTU
    <p className="text-sm text-gray-500 mt-1">Top up your phone or others' instantly.</p>
  </NavLink>
  <div className="bg-primaryPurple w-[2px] h-10"></div>
</li>

<li className="font-normal cursor-pointer flex flex-col gap-3 p-5">
  <NavLink
    className="font-fontMont inline-block w-full text-black hover:text-primaryPurple"
    to="/data-subscription"
  >
    Data Subscription
    <p className="text-sm text-gray-500 mt-1">Subscribe to data plans with just a click.</p>
  </NavLink>
  <div className="bg-primaryPurple w-[2px] h-10"></div>
</li>

<li className="font-normal cursor-pointer flex flex-col gap-3 p-5">
  <NavLink
    className="font-fontMont inline-block w-full text-black hover:text-primaryPurple"
    to="/bill-payment"
  >
    Bill Payment
    <p className="text-sm text-gray-500 mt-1">Pay all your bills conveniently online.</p>
  </NavLink>
  <div className="bg-primaryPurple w-[2px] h-10"></div>
</li>

<li className="font-normal cursor-pointer flex flex-col gap-3 p-5">
  <NavLink
    className="font-fontMont inline-block w-full text-black hover:text-primaryPurple"
    to="/cable-subscription"
  >
    Cable Subscription
    <p className="text-sm text-gray-500 mt-1">Never miss your favorite shows with easy subscriptions.</p>
  </NavLink>
  <div className="bg-primaryPurple w-[2px] h-10"></div>
</li>
            </ul>
          </div>
        </div>
      )}
      <ul className="hidden lg:flex xl:gap-10 gap-5 items-center py-3 px-6 xl:px-14 rounded-3xl text-base font-fontMont">
        <li>
          <NavLink
            className="text-white font-normal hover:text-primary "
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-white font-normal hover:text-primary "
            to="/"
          >
            About
          </NavLink>
        </li>
        <li
          className="flex items-center gap-1  text-white font-normal hover:text-primary cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Our Services
          <TfiAngleDown color="#fff" className="cursor-pointer " />
        </li>

        <li>
          <NavLink
            className="text-white font-normal hover:text-primary "
            to="/contact-support"
          >
            Contact Support
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-white font-normal hover:text-primary "
            to="/"
          >
            Event
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`font-normal hover:text-primary ${({ isActive }: any) =>
              isActive ? "text-primary" : "text-white"}`}
            to="/unilorin-shuttle"
          >
            UNILORIN Shuttle
          </NavLink>
        </li>
      </ul>
      <div className="nav__icon lg:hidden lg:invisible block visible">
        <input
          type="checkbox"
          className={`navigation__checkbox none`}
          id="navi-toggle"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label
          htmlFor="navi-toggle"
          className={`navigation__button h-[2rem] absolute z-50 w-[2rem] sm:right-6 right-4 min-[400px]:top-3 top-2 text-center cursor-pointer`}
        >
          <span className={`navigation__icon relative mt-[2rem]`}>&nbsp;</span>
        </label>
      </div>
      <div>
        <ul
          className={`flex flex-col gap-10 text-lg fixed z-40 bg-black bg-opacity-[0.8] backdrop-filter backdrop-blur-lg right-0 h-screen px-10 overflow-y-auto py-32 top-0 transform transition-transform duration-300 ${
            checked ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <NavLink className="text-white" to="/about-us">
              About us
            </NavLink>
          </li>
          <li>
            <button
              className="flex items-center gap-1 text-white "
              onClick={() => setServiceOpen(!serviceOpen)}
            >
              Our Services
              <span
                className={`transform ${
                  serviceOpen ? "rotate-180" : "rotate-0"
                } transition-transform`}
              >
                <TfiAngleDown color="#fff" />
              </span>
            </button>
            <div
              className={`overflow-hidden flex flex-col gap-4 duration-300 text-white transition-max-height ${
                serviceOpen ? "max-h-screen p-5 pb-0" : "max-h-0"
              } ease-in-out`}
            >
              <NavLink to="/dollar-card" className="font-fontMont text-sm">
                Dollar Card
              </NavLink>
              <NavLink className="font-fontMont text-sm" to="/foreign-account">
                Foreign Account
              </NavLink>
              <NavLink className=" font-fontMont text-sm" to="/digital-banking">
                Digital Banking
              </NavLink>
              <NavLink className=" font-fontMont text-sm" to="/airtime-VTU">
                Airtime VTU
              </NavLink>
              <NavLink
                className=" font-fontMont text-sm"
                to="/data-subscription"
              >
                Data Subscription
              </NavLink>
              <NavLink className=" font-fontMont text-sm" to="/bill-payment">
                Bill Payment
              </NavLink>
              <NavLink
                className=" font-fontMont text-sm"
                to="/cable-subscription"
              >
                Cable Subscription
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink className="text-white" to="/contact-support">
              Contact Support
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white" to="/unilorin-shuttle">
              UNILORIN Shuttle
            </NavLink>
          </li>
          <DownloadButton className="!w-full" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
