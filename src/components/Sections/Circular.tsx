import React from "react";

const Circular = () => {
  return (
    <div className="p-[50px] flex justify-center ">
      <div className="w-[270px] h-[270px] mx-[-50px] xxs:w-[320px] xxs:h-[320px] xs:w-[480px] xs:h-[480px] xsm:w-[600px] xsm:h-[600px] sm:w-[370px] sm:h-[370px] md:w-[640px] md:h-[640px] flex justify-center items-center rounded-full border-2 border-lBlue bg-gray-100">
        <div className="text-white font-lato flex flex-col p-5 justify-center items-center w-[250px] h-[250px] xxs:w-[300px] xxs:h-[300px] xs:w-[460px] xs:h-[460px]  xsm:w-[500px] xsm:h-[500px] sm:w-[350px] sm:h-[350px] md:w-[600px] md:h-[600px] rounded-full shadow-allcorners translate-z-[50px] bg-primary ">
          <h1 className="text-center text-white font-lato text-2xl mb-3">
            Crypto king fxtm has made many people rich and you can be one of
            them
          </h1>
          <p className=" mb-3">Trade with us today and make a lot</p>
          <p className=" mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <p className="text-un">
            Start now! <span className="text-2xl">👉</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Circular;
