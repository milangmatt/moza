const NewsCard1 = () => {
  return (
    <div className="absolute top-[7690px] left-[22px] w-[1397px] h-[127px] text-left text-17xl text-steelblue-100 font-josefin-sans">
      <div className="absolute top-[0px] left-[0px] w-[1397px] h-[127px] flex flex-row items-end justify-start gap-[478px]">
        <div className="w-[702px] flex flex-col items-start justify-start gap-[8px]">
          <div className="relative">News</div>
          <b className="relative text-31xl inline-block text-darkslategray-100 w-[702px]">{`Discover weekly content about organic food, & more`}</b>
        </div>
        <div className="rounded-2xl bg-white flex flex-col items-center justify-center pt-7 px-[45px] pb-[29px] text-xl text-darkslategray-100 font-roboto border-[2px] border-solid border-darkslategray-100">
          <div className="flex flex-row items-center justify-start gap-[9px]">
            <b className="relative">More News</b>
            <img
              className="relative w-[19px] h-[19px]"
              alt=""
              src="/aerrow.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard1;
