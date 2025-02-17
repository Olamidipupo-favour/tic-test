import Modal from "../Modal";
import { useVisibility } from "../../provider/contexts/visibilityContext";
import { Button } from "../Button";
import { useApi } from "../../provider/API/call-services";
import { useState } from "react";
import toast from "react-hot-toast";

export const VerifyModal = ({ email }: any) => {
  const { setModal, visibility } = useVisibility();
  const { API } = useApi();
  const [emailText, setEmailText] = useState("");
  const [code, setCode] = useState("");

  const closeModal = () => {
    setModal({ key: "showVerifyModal", value: false });
  };

  async function handleResendCode() {
    await API.resendCode({ email });
  }
  async function handleVerifyCode() {
    console.log(email, code)
    const response = await API.verifyCode({ email, code });
    if(response) setModal({key: 'showVerifyModal', value: false})
  }
  return (
    <Modal
      open={visibility.showVerifyModal}
      cancel={closeModal}
      className="bg-white"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-xl font-fontMont font-semibold">OTP REGISTER</h1>
        <p className="text-lg font-fontMont font-light">
          Please provide the OTP sent to your email for registration
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="otp" className="text-sm font-fontMont font-light">
          Enter OTP code
        </label>
        <input
          type="text"
          id="otp"
          className="bg-none focus:outline-none border border-slate-400 p-2 rounded-md"
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <span className="text-sm font-fontMont mt-3 inline-block">
        Didn't get otp?{" "}
        <button
          className="border-none bg-none text-primaryPurple "
          onClick={handleResendCode}
        >
          Resend
        </button>
      </span>

      <div className="mt-5">
        <Button as="btn" className="w-full" onClick={handleVerifyCode}>
          Verify
        </Button>
      </div>
    </Modal>
  );
};
