import { FC, useState } from "react";
import Typography from "../components/typography";
import Navbar from "../components/navbar_main_page";
import Button from "../components/button";

const WebThree: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Navbar openModal={openModal} setOpenModal={setOpenModal}>
      <section className="min-h-screen w-screen bg-gradient-to-t to-cyan-200 from-white flex items-center justify-center">
        {/* <div className="  rounded-lg flex items-center flex-col"> */}
        <div className="w-2/3 flex flex-col items-center gap-y-4">
          <Typography.h1 className="text-center text-rose-600 uppercase">WEB 3</Typography.h1>
          <Typography.h1 className="text-center text-rose-500">Read - Write - Own </Typography.h1>
          <button className="bg-gradient-to-r from-rose-300 to-rose-100 px-16 py-2 hover:pb-2.5 hover:pt-1.5 text-white text-2xl rounded-full">
            Start
          </button>
        </div>

        {/* <div className="w-full h-full bg-blue-100 flex">
          <div className="w-1/2">
            <Typography.p>I've been interested in web3 for a year</Typography.p>
          </div>
          <div className="w-1/2 bg-green-100"></div>
        </div>
      </div> */}
      </section>
      <section className="bg-white h-screen"></section>
    </Navbar>
  );
};

export default WebThree;
