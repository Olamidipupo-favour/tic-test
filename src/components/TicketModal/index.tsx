import { useState } from "react";
import Modal from "../Modal";
import { Button } from "../TransitButton";
import BankTransfer from "../../ui/BankTransfer";
import axios from "axios";
import { TransitLoader } from "../TransitLoader";
import NotifierComponents from "react-pop-notifier";
import { LiaTimesSolid } from "react-icons/lia";
{
  /*import { AiOutlineBank } from "react-icons/ai";*/
}

const { useNotifier } = NotifierComponents;

interface FormData {
  email: string;
  name: string;
  phone_number: string;
}

interface TicketModalProps {
  modal: boolean;
  setModal: (state: boolean) => void;
  ticketResponse: {
    quantity: number;
    calculated_fare: number;
    start_location: string;
    destination: string;
  };
}

const TicketModal = ({ modal, setModal, ticketResponse }: TicketModalProps) => {
  const [option, setOption] = useState<"card" | "transfer">("card");
  const [isLoading, setIsLoading] = useState(false);
  const { notifier } = useNotifier();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    phone_number: "",
  });

  const BASE_URL = "https://accessivo.io/shuttle";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(`${BASE_URL}/ticket/checkout`, {
        ...formData,
        quantity: ticketResponse.quantity,
        price: ticketResponse.calculated_fare,
        start_location: ticketResponse.start_location,
        destination: ticketResponse.destination,
      });
      setIsLoading(false);
      const data = response.data;
      console.log(data);
      if (data.isOK) {
        const authUrl = data?.data?.paystack?.data?.authorization_url;
        console.log(authUrl);
        setModal(false);
        notifier.show("Redirecting to payment page...", "Booking", "success");
        window.location.href = authUrl;
      } else {
        notifier.show("Checkout failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error during checkout:", error);
      notifier.show("An error occurred during checkout. Please try again.");
    }
  };

  const closeModal = () => setModal(false);

  return (
    <Modal
      className="grid md:grid-cols-3 grid-cols-1 w-[800px] md:!h-[770px] h-[600px]"
      open={modal}
      cancel={closeModal}
    >
      <div className="bg-primary p-10 text-white rounded-l-3xl hidden md:block">
        {/* <h4 className="font-semibold">Select a Payment option</h4>

        <div className="flex flex-col gap-5 mt-10">
          <button
            onClick={() => setOption("card")}
            className={`w-[180px] h-[50px] rounded-md font-light px-2 text-sm flex gap-1 items-center ${
              option === "card"
                ? "bg-white text-black"
                : "border border-white text-white"
            }`}
          >
            Card
          </button>
          <button
            onClick={() => setOption("transfer")}
            className={`w-[180px] h-[50px] rounded-md font-light flex gap-1 text-sm items-center px-2 ${
              option === "transfer"
                ? "bg-white text-black"
                : "border border-white text-white"
            }`}
          >
            Bank Transfer
          </button>
        </div> */}
      </div>
      <div className="p-10 bg-white col-span-2 rounded-r-3xl md:rounded-l-none rounded-l-3xl relative overflow-y-auto md:overflow-y-hidden">
        {/* <div className="text-black rounded-l-3xl block md:hidden">
          <h4 className="font-semibold text-center">Select a Payment option</h4>

          <div className="flex gap-5 justify-center">
            <button
              onClick={() => setOption("card")}
              className={`rounded-md font-light p-2 text-sm w-[135px] justify-center flex gap-1 items-center ${
                option === "card"
                  ? "bg-primary text-white"
                  : "border border-primary text-black"
              }`}
            >
              Card
            </button>
            <button
              onClick={() => setOption("transfer")}
              className={`rounded-md font-light flex gap-1 text-sm items-center w-[135px] justify-center p-2 ${
                option === "transfer"
                  ? "bg-primary text-white"
                  : "border border-primary text-black"
              }`}
            >
              Bank Transfer
            </button>
          </div>
        </div> */}
        <button className="absolute right-5 top-5" onClick={closeModal}>
          <LiaTimesSolid />
        </button>

        {option === "card" ? (
          <>
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold">Identity details</h4>
              <p>Input your details to complete this transaction</p>
            </div>
            <form onSubmit={handleCheckout} className="mt-10 space-y-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="ex: John Doe"
                  className="border placeholder:text-sm bg-transparent p-2 h-[40px] rounded-md border-[#A9A9A9] duration-100 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-medium text-sm">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ex: address@gmail.com"
                  className="border bg-transparent p-2 h-[40px] placeholder:text-sm rounded-md border-[#A9A9A9] duration-100 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone_number" className="font-medium text-sm">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  placeholder="ex: 08012345678"
                  className="border bg-transparent p-2 h-[40px] placeholder:text-sm rounded-md border-[#A9A9A9] duration-100 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button
                className="w-full disabled:opacity-50"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <TransitLoader />
                ) : (
                  ` Pay ${ticketResponse?.calculated_fare}.00NGN`
                )}
              </Button>
            </form>
          </>
        ) : (
          <BankTransfer />
        )}
      </div>
    </Modal>
  );
};

export default TicketModal;
