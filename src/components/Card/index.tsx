import { LiaBusSolid } from "react-icons/lia";
import RoundHour from "../../assets/round-hour.svg";
import { IoTicketOutline } from "react-icons/io5";
import { Button } from "../TransitButton";
export const Card = ({ img, title, transport, duration, price }: any) => {
  return (
    <div className="rounded-[15px] shadow-lg">
      <img
        src={img}
        className="lg:h-[400px] min-[900px]:h-[350px] sm:h-[300px] h-[250px] w-full rounded-t-[15px]"
      />

      <div className="p-4 flex flex-col gap-5">
        <h4 className="font-semibold min-[400px]:text-2xl text-xl">{title}</h4>
        <div className="flex items-center gap-1">
          <LiaBusSolid className="text-primary" />
          <p className="text-[#A9A9A9] text-sm">Transport: {transport}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={RoundHour} alt="" />
          <p className="text-[#A9A9A9] text-sm">Duration: {duration}</p>
        </div>
        <div className="flex items-center gap-1">
          <IoTicketOutline className="text-primary" />
          <p className="text-[#A9A9A9] text-sm">Ticket Price:</p>
          <h3 className="text-sm font-medium">{price}</h3>
        </div>
        <div className="mt-10">
          <Button as="btn" size="lg">
            Book Ticket
          </Button>
        </div>
      </div>
    </div>
  );
};
