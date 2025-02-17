import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/img/Horizontal-Logo-White.png";
import { MdDashboard, MdOutlineHistory } from "react-icons/md";
import { IoWalletOutline,IoAlarmOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import Modal from "../../../Modal";
import { Button } from "../../../Button";
import { useState } from "react";
import { useAppInfo } from "../../../../provider/contexts/appInfoContext";
import { AiOutlineAudit } from "react-icons/ai";
import { TfiAngleDown } from "react-icons/tfi";
export const AdminSidebar = () => {
  const [open, setIsOpen] = useState(false);
  const [airtimeOpen, setAirtimeOpen] = useState(false);
  const [tvOpen, setTvOpen] = useState(false);
  const [electricityOpen, setElectricityOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [dataOpen, setDataOpen] = useState(false)
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
      <div className="flex flex-col gap-10  py-10 overflow-y-auto">
        <img src={Logo} alt="" className="w-[13rem] inline-block mx-auto" />

        <nav>
          <ul className="flex flex-col gap-5 font-fontMont dashboard-nav">
            <li>
              <NavLink
                to="/admin/dashboard"
                className="flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple "
              >
                <MdDashboard className="text-white" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/manage-users"
                className="flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg  duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <IoWalletOutline className="text-white" /> Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/transactions"
                className="flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <MdOutlineHistory className="text-white" />
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/revenue"
                className="flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <MdOutlineHistory className="text-white" />
                Revenue Stream
              </NavLink>
            </li>

            <li>
              <button
                className="flex items-center w-full font-semibold justify-between px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
                onClick={() => setNotifyOpen(!notifyOpen)}
              >
                <div className="flex gap-5">
                  <IoAlarmOutline className="text-white" />
                  Notify
                </div>
                <span
                  className={`transform ${
                    notifyOpen ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                >
                  <TfiAngleDown />
                </span>
              </button>
              <div
                className={`overflow-hidden px-16 pt-4 flex flex-col gap-4 duration-300 text-white transition-max-height ${
                  notifyOpen ? "max-h-screen" : "max-h-0"
                } ease-in-out`}
              >
                <Link
                  to="/admin/notify/all"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Send
                </Link>
                <Link
                  to="/admin/notify/circular"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Circular
                </Link>
              </div>
            </li>
            <li>
              <button
                className="flex items-center w-full font-semibold justify-between px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
                onClick={() => setAirtimeOpen(!airtimeOpen)}
              >
                <div className="flex gap-5">
                  <MdOutlineHistory className="text-white" />
                  Airtime
                </div>
                <span
                  className={`transform ${
                    airtimeOpen ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                >
                  <TfiAngleDown />
                </span>
              </button>
              <div
                className={`overflow-hidden px-16 pt-4 flex flex-col gap-4 duration-300 text-white transition-max-height ${
                  airtimeOpen ? "max-h-screen" : "max-h-0"
                } ease-in-out`}
              >
                <Link
                  to="/admin/manage-airtime"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Manage
                </Link>
                <Link
                  to="/admin/airtime-transactions"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Transaction
                </Link>
              </div>
            </li>
            <li>
              <button
                className="flex items-center w-full font-semibold justify-between px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
                onClick={() => setTvOpen(!tvOpen)}
              >
                <div className="flex gap-5">
                  <MdOutlineHistory className="text-white" />
                  TV
                </div>
                <span
                  className={`transform ${
                    tvOpen ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                >
                  <TfiAngleDown />
                </span>
              </button>
              <div
                className={`overflow-hidden px-16 pt-4 flex flex-col gap-4 duration-300 text-white transition-max-height ${
                  tvOpen ? "max-h-screen" : "max-h-0"
                } ease-in-out`}
              >
                <Link
                  to="/admin/manage-tv"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Manage
                </Link>
                <Link
                  to="/admin/tv-transactions"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Transaction
                </Link>
              </div>
            </li>
            <li>
              <button
                className="flex items-center w-full font-semibold justify-between px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
                onClick={() => setElectricityOpen(!electricityOpen)}
              >
                <div className="flex gap-5">
                  <MdOutlineHistory className="text-white" />
                  Electricity
                </div>
                <span
                  className={`transform ${
                    electricityOpen ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                >
                  <TfiAngleDown />
                </span>
              </button>
              <div
                className={`overflow-hidden px-16 pt-4 flex flex-col gap-4 duration-300 text-white transition-max-height ${
                  electricityOpen ? "max-h-screen" : "max-h-0"
                } ease-in-out`}
              >
                <Link
                  to="/admin/manage-electricity"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Manage
                </Link>
                <Link
                  to="/admin/electricity-transactions"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Transaction
                </Link>
              </div>
            </li>
            <li>
              <button
                className="flex items-center w-full font-semibold justify-between px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
                onClick={() => setDataOpen(!dataOpen)}
              >
                <div className="flex gap-5">
                  <MdOutlineHistory className="text-white" />
                  Data Bundle
                </div>
                <span
                  className={`transform ${
                    dataOpen ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                >
                  <TfiAngleDown />
                </span>
              </button>
              <div
                className={`overflow-hidden px-16 pt-4 flex flex-col gap-4 duration-300 text-white transition-max-height ${
                  dataOpen ? "max-h-screen" : "max-h-0"
                } ease-in-out`}
              >
                <Link
                  to="/admin/manage-databundle/1"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  MTN
                </Link>
                <Link
                  to="/admin/manage-databundle/2"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  GLO
                </Link>
                <Link
                  to="/admin/manage-databundle/3"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  9Mobile
                </Link>
                <Link
                  to="/admin/manage-databundle/4"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Airtel
                </Link>
                <Link
                  to="/admin/databundle-transactions"
                  className="duration-100 hover:pl-2 hover:text-primaryPurple"
                >
                  Transaction
                </Link>
              </div>
            </li>
            <li>
              <NavLink
                to="/admin/audit"
                className="flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <AiOutlineAudit className="text-white" />
                Audit Log
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/referrals"
                className="flex items-center font-semibold gap-5 px-8 py-5 rounded-tr-lg rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <TbWorld className="text-white" />
                Referrals
              </NavLink>
            </li>

            <li>
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center w-full font-semibold gap-5 px-8 py-5 rounded-tr-lg border-none bg-transparent rounded-br-lg duration-300 hover:bg-[#191919] text-white hover:text-primaryPurple"
              >
                <BiLogOut className="text-white" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
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
      </div>
    </>
  );
};
