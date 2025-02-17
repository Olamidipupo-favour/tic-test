import { TailSpin} from "react-loader-spinner";
export const TransitLoader: React.FC = () => {
  return (
    <TailSpin
      color="#fff"
      height={20}
      width={20}
      radius="1"
      ariaLabel="tail-spin-loading"
      visible={true}
    />
  );
};
