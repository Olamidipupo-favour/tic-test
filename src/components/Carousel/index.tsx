import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { VTU } from "../../assets/svgs/vtu";
import { DigitalBanking } from "../../assets/svgs/digital-banking";
import { DollarCard } from "../../assets/svgs/dollar-card";
import { ForeignAccount } from "../../assets/svgs/foreign-account";
import StayConnected from "../../assets/img/stay-connected.png";
import { BarStick } from "../../assets/svgs/bar-stick";
import { Button } from "../Button";
export const Carousel = () => {
  return (
    <Swiper modules={[Autoplay]} autoplay={{delay: 7000}}>
      <SwiperSlide >
        <div>
          <div className="flex justify-between sm:px-10 px-0">
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <VTU className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-primaryPurple text-center sm:text-base xs:text-sm text-[10px]">
                Airtime VTU/Data
              </h4>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 items-center">
              <DigitalBanking className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Digital Banking
              </h4>
            </div>
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <DollarCard className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Dollar Card
              </h4>
            </div>
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <ForeignAccount className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Foreign Account
              </h4>
            </div>
          </div>

          <div className="flex w-full lg:w-[60vw] 2xl:w-[45vw] mx-auto mt-10">
            <div className="space-y-10 pt-10">
              <h3 className="text-white text-xl sm:text-2xl font-normal">
                Stay connected connected on call 24/7 with Accessivo.
              </h3>
              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Create an account or Login for free.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Fund your Teachitcheap account.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Select a network provider.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Enter the number to be recharged.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Recharge your number
                </p>
              </div>
              <h3 className="text-white text-2xl font-normal">
                Stay connected!
              </h3>
              <Button as="button" size="lg">
                Try now
              </Button>
            </div>
            <div className="self-start sm:block hidden">
              <img src={StayConnected} alt="" className="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="flex justify-between sm:px-10 px-0">
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <VTU
                className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]"
                color="#fff"
              />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Airtime VTU/Data
              </h4>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 items-center">
              <DigitalBanking
                className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]"
                color="#82006F"
              />
              <h4 className="text-primaryPurple text-center sm:text-base xs:text-sm text-[10px]">
                Digital Banking
              </h4>
            </div>
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <DollarCard className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Dollar Card
              </h4>
            </div>
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <ForeignAccount className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Foreign Account
              </h4>
            </div>
          </div>

          <div className="flex w-full lg:w-[60vw] 2xl:w-[45vw] mx-auto mt-10">
            <div className="space-y-10 pt-10">
              <h3 className="text-white text-xl sm:text-2xl font-normal">
                Stay connected connected on call 24/7 with Accessivo.
              </h3>
              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Create an account or Login for free.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Fund your Teachitcheap account.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Select a network provider.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Enter the number to be recharged.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Recharge your number
                </p>
              </div>
              <h3 className="text-white text-2xl font-normal">
                Stay connected!
              </h3>
              <Button as="button" size="lg">
                Try now
              </Button>
            </div>
            <div className="self-start sm:block hidden">
              <img src={StayConnected} alt="" className="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="flex justify-between sm:px-10 px-0">
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <VTU
                className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]"
                color="#fff"
              />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Airtime VTU/Data
              </h4>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 items-center">
              <DigitalBanking className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Digital Banking
              </h4>
            </div>
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <DollarCard
                className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]"
                color="#82006F"
              />
              <h4 className="text-primaryPurple text-center sm:text-base xs:text-sm text-[10px]">
                Dollar Card
              </h4>
            </div>
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <ForeignAccount className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Foreign Account
              </h4>
            </div>
          </div>

          <div className="flex w-full lg:w-[60vw] 2xl:w-[45vw] mx-auto mt-10">
            <div className="space-y-10 pt-10">
              <h3 className="text-white text-xl sm:text-2xl font-normal">
                Stay connected connected on call 24/7 with Accessivo.
              </h3>
              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Create an account or Login for free.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Fund your Teachitcheap account.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Select a network provider.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Enter the number to be recharged.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Recharge your number
                </p>
              </div>
              <h3 className="text-white text-2xl font-normal">
                Stay connected!
              </h3>
              <Button as="button" size="lg">
                Try now
              </Button>
            </div>
            <div className="self-start sm:block hidden">
              <img src={StayConnected} alt="" className="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="flex justify-between sm:px-10 px-0">
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <VTU
                className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]"
                color="#fff"
              />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Airtime VTU/Data
              </h4>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 items-center">
              <DigitalBanking className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Digital Banking
              </h4>
            </div>
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <DollarCard className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]" />
              <h4 className="text-white text-center sm:text-base xs:text-sm text-[10px]">
                Dollar Card
              </h4>
            </div>
            <div className="flex flex-col  gap-2 sm:gap-5 items-center">
              <ForeignAccount
                className="xs:h-[40px] xs:w-[40px] sm:w-[60px] sm:h-[60px] w-[20px] h-[20px]"
                color="#82006F"
              />
              <h4 className="text-primaryPurple text-center sm:text-base xs:text-sm text-[10px]">
                Foreign Account
              </h4>
            </div>
          </div>

          <div className="flex w-full lg:w-[60vw] 2xl:w-[45vw] mx-auto mt-10">
            <div className="space-y-10 pt-10">
              <h3 className="text-white text-xl sm:text-2xl font-normal">
                Stay connected connected on call 24/7 with Accessivo.
              </h3>
              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Create an account or Login for free.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Fund your Teachitcheap account.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Select a network provider.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Enter the number to be recharged.
                </p>
              </div>

              <div className="flex gap-5 items-center">
                <BarStick color="#82006F" size={20} />
                <p className="text-white font-light sm:text-xl text-lg">
                  Recharge your number
                </p>
              </div>
              <h3 className="text-white text-2xl font-normal">
                Stay connected!
              </h3>
              <Button as="button" size="lg">
                Try now
              </Button>
            </div>
            <div className="self-start sm:block hidden">
              <img src={StayConnected} alt="" className="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
