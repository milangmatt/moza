const Header = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200  w-full h-[115px] overflow-hidden flex flex-row items-center justify-center py-[26px] px-16 box-border gap-[550px] text-left text-11xl text-darkolivegreen font-josefin-sans-thin">
      <div className="flex flex-row items-center justify-center gap-[20px]">
        <img
          className="relative w- h-[62px] object-cover"
          alt=""
          src="/pic2removebgpreview-1@2x.png"
        />
        <div className="relative">
          <p className="m-0">
            <b>MOZA</b>
          </p>
          <p className="m-0 tracking-[0.38em] font-light">LIFE</p>
        </div>
      </div>
      <div className="w-[485px] h-12 flex flex-row items-center justify-start gap-[60px] text-6xl text-steelblue-300">
        <div className="relative font-light">HOME</div>
        <div className="relative font-light">ABOUT</div>
        <div className="rounded-8xs w-[300px] bg-steelblue-300 overflow-hidden flex flex-row items-start justify-center py-[15px] px-2.5 text-white">
          <div className="relative font-light">CONTACT US</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
