import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/img/Horizontal-Logo-White.png";
import { MdDashboard, MdOutlineHistory } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import Modal from "../../../Modal";
import { Button } from "../../../Button";
import { useState } from "react";
import { CiMobile2 } from "react-icons/ci";
import { HiOutlineCash } from "react-icons/hi";
import { PiTelevisionLight } from "react-icons/pi";
import NewLogo from "../../../../assets/img/Logo-white.png";
import { useAppInfo } from "../../../../provider/contexts/appInfoContext";

export const UserSidebar = () => {
  const [open, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const { logout } = useAppInfo();
  const navigate = useNavigate();

  function handleCancel() {
    setIsOpen(false);
  }

  function handleLogout() {
    logout();
    navigate("/auth");
  }
  return (
    <>
      <Modal
        open={open}
        cancel={handleCancel}
        className="bg-[#111111] p-5 rounded-xl"
      >
        <div className="space-y-20">
          <p className="text-lg text-white font-fontMont font-normal">
            You are about to log out. Do you want to proceed?
          </p>
          <div className="flex gap-10 justify-center">
            <Button as="btn" className="w-32" onClick={handleLogout}>
              Log out
            </Button>
            <Button
              as="btn"
              bgColor="bg-black"
              className="border border-borderColor w-32"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
      <div className="md:flex flex-col gap-5 justify-between py-10 hidden relative">
        <img
          src={Logo}
          alt=""
          className="w-[13rem] xl:inline-block hidden mx-auto"
        />
        <img
          src={NewLogo}
          alt=""
          className="w-[2.3rem] h-[2rem] xl:hidden inline-block mx-auto"
        />

        <nav>
          <ul className="flex flex-col gap-5 font-fontMont dashboard-nav">
            <li>
              <NavLink
                to="/app/dashboard"
                className="xl:flex hidden items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple "
              >
                <MdDashboard className="text-white" />
                Dashboard
              </NavLink>
              <NavLink
                to="/app/dashboard"
                className="xl:hidden flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple "
              >
                <MdDashboard className="text-white" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app/fund-account"
                className="xl:flex hidden items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg  duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <IoWalletOutline className="text-white" /> Fund Wallet
              </NavLink>
              <NavLink
                to="/app/fund-account"
                className="xl:hidden flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg  duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <IoWalletOutline className="text-white" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app/airtime-vtu"
                className="xl:flex hidden items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <CiMobile2 className="text-white" />
                Airtime VTU
              </NavLink>
              <NavLink
                to="/app/airtime-vtu"
                className="xl:hidden flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <CiMobile2 className="text-white" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app/data-subscriptions"
                className="xl:flex hidden items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <TbWorld className="text-white" />
                Data Subscription
              </NavLink>
              <NavLink
                to="/app/data-subscriptions"
                className="xl:hidden flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <TbWorld className="text-white" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app/utilities"
                className="xl:flex hidden items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <HiOutlineCash className="text-white" />
                Utilities
              </NavLink>
              <NavLink
                to="/app/utilities"
                className="xl:hidden flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <HiOutlineCash className="text-white" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app/cable-subscriptions"
                className="xl:flex hidden items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <PiTelevisionLight className="text-white" />
                Cable Subscription
              </NavLink>
              <NavLink
                to="/app/cable-subscriptions"
                className="xl:hidden flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <PiTelevisionLight className="text-white" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app/transaction-history"
                className="xl:flex hidden items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <MdOutlineHistory className="text-white" />
                Transaction History
              </NavLink>
              <NavLink
                to="/app/transaction-history"
                className="xl:hidden flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <MdOutlineHistory className="text-white" />
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => setIsOpen(true)}
                className="xl:flex hidden items-center w-full font-semibold gap-5 px-8 py-5 rounded-tr-lg border-none bg-transparent rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <BiLogOut className="text-white" />
                Logout
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="xl:hidden flex items-center w-full font-semibold gap-5 px-8 py-5 rounded-tr-lg border-none bg-transparent rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <BiLogOut className="text-white" />
              </button>
            </li>
          </ul>
        </nav>

        <div className="px-2 py-5 border border-slate-800 rounded-tr-lg rounded-br-lg text-center">
          <span className="text-white hidden xl:block font-fontMont text-sm text-center">
            Member since 2020
          </span>
        </div>
      </div>
      <div className="flex justify-between border-2 border-borderColor sm:m-10 m-3 p-5 md:hidden rounded-lg h-[75px] relative">
        <img src={Logo} alt="" className="w-36" />
        <div className="nav__icon md:hidden md:invisible block visible">
          <input
            type="checkbox"
            className={`navigation__checkbox none`}
            id="navi-toggle"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label
            htmlFor="navi-toggle"
            className={`navigation__button h-[2rem] absolute z-20 w-[2rem] right-6 top-1 text-center cursor-pointer`}
          >
            <span className={`navigation__icon relative mt-[2rem]`}>
              &nbsp;
            </span>
          </label>
        </div>
      </div>
      <nav
        className={`fixed w-full bg-black z-30 top-[6rem] duration-100 overflow-y-auto ${
          checked ? "h-screen" : "h-0"
        }`}
      >
        <ul
          className={`flex flex-col overflow-y-auto sm:gap-5 gap-2 sm:px-10 px-3 font-fontMont dashboard-nav duration-100 items-center transform ${
            checked ? "translate-y-0" : "-translate-y-[50rem]"
          }`}
        >
          <li className="w-full">
            <NavLink
              to="/app/dashboard"
              className="w-full flex items-center justify-center font-semibold gap-5 px-8 sm:py-5 py-3 rounded-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              onClick={() => setChecked(false)}
            >
              <MdDashboard className="text-white" />
              Dashboard
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/app/fund-account"
              className="w-full flex items-center justify-center font-semibold gap-5 px-8 sm:py-6 py-3 rounded-lg  duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              onClick={() => setChecked(false)}
            >
              <IoWalletOutline className="text-white" /> Fund Wallet
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/app/airtime-vtu"
              className="w-full flex items-center justify-center font-semibold gap-5 px-8 sm:py-6 py-3 rounded-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              onClick={() => setChecked(false)}
            >
              <CiMobile2 className="text-white" />
              Airtime VTU
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/app/data-subscriptions"
              className="w-full flex items-center justify-center font-semibold gap-5 px-8 sm:py-6 py-3 rounded-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              onClick={() => setChecked(false)}
            >
              <TbWorld className="text-white" />
              Data Subscription
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/app/utilities"
              className="w-full flex items-center justify-center font-semibold gap-5 px-8 sm:py-6 py-3 rounded-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              onClick={() => setChecked(false)}
            >
              <HiOutlineCash className="text-white" />
              Utilities
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/app/cable-subscriptions"
              className="w-full flex items-center justify-center font-semibold gap-5 px-8 sm:py-6 py-3 rounded-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              onClick={() => setChecked(false)}
            >
              <PiTelevisionLight className="text-white" />
              Cable Subscription
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink
              to="/app/transaction-history"
              className="w-full flex items-center justify-center font-semibold gap-5 px-8 sm:py-6 py-3 rounded-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              onClick={() => setChecked(false)}
            >
              <MdOutlineHistory className="text-white" />
              Transaction History
            </NavLink>
          </li>

          <li className="w-full">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center w-full font-semibold gap-5 px-8 sm:py-6 py-3 rounded-lg border-none bg-transparent rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
            >
              <BiLogOut className="text-white" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
