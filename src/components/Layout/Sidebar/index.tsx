import { NavLink } from "react-router-dom";
import Logo from "../../../assets/img/Horizontal-Logo-White.png";
import NewLogo from "../../../assets/img/new-logo.png";
import { MdDashboard } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { HiOutlineCash } from "react-icons/hi";
import { PiTelevisionLight } from "react-icons/pi";
import { MdOutlineHistory } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Modal from "../../modal";
import { useState } from "react";
import { Button } from "../../button";
import { AdminSidebar } from "./AdminSidebar";
import { UserSidebar } from "./UserSidebar";

interface SidebarProps {
  isAdmin?: boolean;
}
function Sidebar({ isAdmin }: SidebarProps) {
  const [open, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

 

  function handleCancel() {
    setIsOpen(false);
  }

  if (isAdmin)
    return (
     <AdminSidebar />
    );

  return (
   <UserSidebar />
  );
}

export default Sidebar;
