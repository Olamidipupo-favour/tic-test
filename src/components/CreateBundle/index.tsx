import { useState } from "react";
import Modal from "../Modal";
import { Button } from "../Button";
import { useApi } from "../../provider/API/call-services";
const CreateBundle = ({ showCreate, setShowCreate }: any) => {
  const {API} = useApi()
  const [dataDetails, setDataDetails] = useState({
    amount: "",
    description: "",
    active: "",
    code: "",
    control:""
  });
  function closeModal() {
    setShowCreate(false);
  }

  async function createPlan() {
    await API.createDataBundle(dataDetails);
    setShowCreate(false)
  }
  return (
    <Modal
      open={showCreate}
      cancel={closeModal}
      className="font-fontMont text-white bg-[#111111] p-5 rounded-xl  w-[500px]"
    >
      <h1 className="text-2xl font-semibold">Create Data Bundle</h1>
      <div className="flex flex-col gap-2 mt-10">
        <label htmlFor="amount" className="text-lg">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          value={dataDetails.amount}
          className="bg-[#191919] focus:outline-none p-2 px-4 rounded-md"
          onChange={(e) =>
            setDataDetails({
              ...dataDetails,
              amount: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <label htmlFor="description" className="text-lg">
          Description
        </label>
        <input
          type="text"
          name="description"
          value={dataDetails.description}
          className="bg-[#191919] focus:outline-none p-2 px-4 rounded-md"
          onChange={(e) =>
            setDataDetails({
              ...dataDetails,
              description: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <label htmlFor="Description" className="text-lg">
          Code
        </label>
        <input
          type="text"
          name="description"
          value={dataDetails.code}
          className="bg-[#191919] focus:outline-none p-2 px-4 rounded-md"
          onChange={(e) =>
            setDataDetails({
              ...dataDetails,
              code: e.target.value,
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="active" className="text-lg">
          Status
        </label>
        <select
          name="active"
          id="active"
          value={dataDetails.active}
          className="bg-[#191919] focus:outline-none p-2 px-4 rounded-md"
          onChange={(e) =>
            setDataDetails({
              ...dataDetails,
              active: e.target.value,
            })
          }
        >
          <option>Select</option>
          <option value="0">Enable</option>
          <option value="1">Disable</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <label htmlFor="control" className="text-lg">
          Network
        </label>
        <select
          name="control"
          id="control"
          value={dataDetails.control}
          className="bg-[#191919] focus:outline-none p-2 px-4 rounded-md"
          onChange={(e) =>
            setDataDetails({
              ...dataDetails,
              control: e.target.value,
            })
          }
        >
          <option>Select</option>
          <option value="1">MTN</option>
          <option value="2">GLO</option>
          <option value="3">9Mobile</option>
          <option value="4">Airtel</option>
        </select>
      </div>
      <div className="mt-5 flex gap-3">
        <Button
          as="button"
          bgColor="bg-black"
          hoverBgColor="bg-black"
          className="border border-borderColor w-32"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button as="button" onClick={createPlan}>Create Plan</Button>
      </div>
    </Modal>
  );
};

export default CreateBundle;
