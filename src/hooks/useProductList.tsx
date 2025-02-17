import { IoBriefcase } from "react-icons/io5";
import { RiHandCoinFill } from "react-icons/ri";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { IProductList } from "../model";

export const useProductList = () => {
  const productList: IProductList[] = [
    {
      icon: <IoBriefcase size={20} color="#82006F" />,
      label: "BillPayment",
      content:
        "Simplify your life by scheduling and managing all your bill payments electronically through a secure and convenient platform.",
    },
    {
      icon: <RiHandCoinFill size={20} color="#82006F" />,
      label: "Investment Account",
      content:
        "Grow your wealth with our investment account options. We offer a variety of investment products to suit your risk tolerance and finacial goals.",
    },
    {
      icon: <BsFillPiggyBankFill size={20} color="#82006F" />,
      label: "Savings Account",
      content:
        "Save for your future with our competitive savings account rates. We offer a variety of savings accounts to help you reach your financial goals.",
    },
  ];

  return {
    productList,
  };
};
