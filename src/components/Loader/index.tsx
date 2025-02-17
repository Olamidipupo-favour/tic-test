import { BallTriangle } from "react-loader-spinner";
export const Loader: React.FC = () => {
    return (
      <div className="w-full h-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg flex justify-center items-center fixed top-0 left-0 z-[100]">
        <BallTriangle
          color="#82006F"
          height={200}
          width={200}
          radius={5}
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    );
}