import { Spinner } from "../../assets/svgs/spinner";
import { useVisibility } from "../../provider/contexts/visibilityContext";
import Modal from "../Modal";

function CreateAccountModal() {
  const { visibility, setModal } = useVisibility();

  function handleCancel() {
    setModal({key:"showCreateAccountModal", value:false});
  }
  return (
    <Modal
      className="flex gap-5 items-center w-[43rem] "
      open={visibility.showCreateAccountModal}
      cancel={handleCancel}
    >
      <Spinner className="animate-spin" height="40px" width="40px" />
    <div>
        <h2 className="font-bold text-xl sm:text-2xl">Create an account</h2>
        <p className="font-thin text-sm sm:text-base">Let’s help you find your perfect match. Your love story awaits you, and we're here to guide you every step of the way.</p>
    </div>
    </Modal>
  );
}

export default CreateAccountModal;
