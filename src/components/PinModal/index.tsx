import Modal from "../Modal";
import { useVisibility } from "../../provider/contexts/visibilityContext";
import { Button } from "../Button";
import { useApi } from "../../provider/API/call-services";
import { useState } from "react";

export const PinModal = ({ email }: any) => {
  const { setModal, visibility } = useVisibility();
  const { API } = useApi();
  const [pinDetails, setPinDetails] = useState({code:"", new_pin:""});

  const closeModal = () => {
    setModal({ key: "pinModal", value: false });
  };

  function handleChange(e:any) {

    setPinDetails({...pinDetails, [e.target.name]: e.target.value})
  }
  async function handleResendCode() {
    await API.resendCode({ email });
  }
  async function handleVerifyCode() {
    const response = await API.confirmResetPin(pinDetails);
    if (response) setModal({ key: "pinModal", value: false });
  }
  return (
    <Modal open={visibility.pinModal} cancel={closeModal} className="bg-white">
      <div className="space-y-2 text-center">
        <h1 className="text-xl font-fontMont font-semibold">
          Transaction Pin Reset
        </h1>
        <p className="text-lg font-fontMont font-light">
          Please provide the OTP sent to your email pin reset
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="code" className="text-sm font-fontMont font-light">
          Enter OTP code
        </label>
        <input
          type="text"
          id="otp"
          name="code"
          className="bg-none focus:outline-none border border-slate-400 p-2 rounded-md"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="new_pin" className="text-sm font-fontMont font-light">
          Enter new pin
        </label>
        <input
          type="text"
          id="new_pin"
          name="new_pin"
          className="bg-none focus:outline-none border border-slate-400 p-2 rounded-md"
          onChange={handleChange}
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
