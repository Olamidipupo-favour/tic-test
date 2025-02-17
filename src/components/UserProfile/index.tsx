import { useAppInfo } from "../../provider/contexts/appInfoContext";
import { formatMoney } from "../../utils/helpers";
import Avatar from "../../assets/img/avatar.jpg";
import { formatDateToMonthDayYear } from "../../utils/utility";
import { Button } from "../Button";
import Modal from "../Modal";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useApi } from "../../provider/API/call-services";
import NotifierComponents from "react-pop-notifier";
import inputValidator from "../../utils/helpers";
import TransactionTable from "../UserTransactions";

const { useNotifier } = NotifierComponents;
const UserProfile = ({ setShowProfile }: any) => {
  const { notifier } = useNotifier();
  const {
    info: { user },
  } = useAppInfo();
  const { API } = useApi();
  const [showFundModal, setShowFundModal] = useState(false);
  const [fundDetails, setFundDetails] = useState({ amount: "", password: "" });

  function closeShowFundModal() {
    setShowFundModal(false);
  }
  async function handleFund() {
    const validation = inputValidator(fundDetails);
    if (!validation.isValidated)
      return notifier.show(validation.message, "Validation error", "error");
    const response = await API.adminFundWallet(fundDetails, user?.user?.id);
    if (response) setShowFundModal(false);
  }

  async function handleTransactions(action: any) {
    await API.updateTransactions(user?.user?.id, { action });
  }
  return (
    <>
      <Modal
        open={showFundModal}
        cancel={closeShowFundModal}
        className="text-white bg-[#111111] p-5 rounded-xl font-fontMont w-[400px]"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-lg">
            Amount
          </label>
          <input
            type="text"
            name="amount"
            className="bg-[#191919] focus:outline-none p-2 px-4 rounded-md"
            onChange={(e) =>
              setFundDetails({ ...fundDetails, amount: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="amount" className="text-lg">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="bg-[#191919] focus:outline-none p-2 px-4 rounded-md"
            onChange={(e) =>
              setFundDetails({ ...fundDetails, password: e.target.value })
            }
          />
        </div>
        <div className="mt-5">
          <Button as="button" size="md" onClick={handleFund}>
            Fund User
          </Button>
        </div>
      </Modal>
      <div className="text-white font-fontMont">
        <button
          className="flex gap-2 items-center mb-10 focus:outline-none border-none bg-none"
          onClick={() => setShowProfile(false)}
        >
          <IoIosArrowRoundBack size={30} />
          <span>Back</span>
        </button>
        <div className="flex gap-10">
          <div className="card-bg rounded-xl flex flex-col gap-5 justify-center items-center px-10 h-[230px] py-2 border border-borderColor w-[450px]">
            <p className="font-medium text-lg">Account Balance</p>

            <p className="text-2xl font-bold">
              {formatMoney(user?.user?.balance)}
            </p>

            <p className="text-lg">ID : {user?.user?.id}</p>
          </div>
          <div className="rounded-xl flex gap-5  items-center px-10 h-[230px] py-2 border border-borderColor w-[450px]">
            <img
              src={Avatar}
              alt="avatar"
              className="w-[100px] h-[100px] rounded-full object-cover"
            />
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">
                {user?.user?.last_name} {user?.user?.first_name}
              </h2>
              <p className="text-lg">{user?.user?.email}</p>
              <p className="text-primaryPurple">
                User since: {formatDateToMonthDayYear(user?.user?.date_joined)}
              </p>
              <div className="flex gap-2">
                <button
                  className="text-base rounded-md bg-primaryPurple px-4 py-1"
                  onClick={() => setShowFundModal(true)}
                >
                  Fund
                </button>
                <button className="text-base rounded-md bg-[#F158F9] px-4 py-1">
                  Deduct
                </button>
              </div>
              <div className="flex gap-2">
                {user.user.active ? (
                  <button
                    className="text-base rounded-md bg-[#D9D9D9] px-4 py-1 text-gray-600"
                    onClick={() => handleTransactions("restrict-transaction")}
                  >
                    Restrict
                  </button>
                ) : (
                  <button
                    className="text-base rounded-md bg-[#D9D9D9] px-4 py-1 text-gray-600"
                    onClick={() => handleTransactions("allow-transaction")}
                  >
                    Allow
                  </button>
                )}
                {user?.user?.can_sign_in ? (
                  <button
                    className="text-base rounded-md bg-colorGold px-4 py-1"
                    onClick={() => handleTransactions("deactivate")}
                  >
                    Deactivate
                  </button>
                ) : (
                  <button
                    className="text-base rounded-md bg-colorGold px-4 py-1"
                    onClick={() => handleTransactions("activate")}
                  >
                    Activate
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <TransactionTable />
      </div>
    </>
  );
};
export default UserProfile;
