const CardContainer = ({ imageAltText, articleTitle }) => {
  return (
    <div className="relative w-[677px] h-[592px] text-left text-lg text-darkslategray-100 font-roboto">
      <img
        className="absolute top-[0px] left-[0px] w-[677px] h-[524px] object-cover"
        alt=""
        src={imageAltText}
      />
      <div className="absolute top-[262px] left-[32px] rounded-tl-12xl rounded-tr-15xl rounded-b-11xl bg-white shadow-[0px_20px_35px_rgba(167,_167,_167,_0.25)] flex flex-col items-center justify-start pt-[46px] px-[57px] pb-[60px]">
        <div className="w-[499px] flex flex-col items-start justify-start gap-[15px]">
          <div className="relative w-[137px] h-[21px]">
            <div className="absolute top-[0px] left-[26px]">By Rachi Card</div>
            <img
              className="absolute h-[95.24%] w-[13.14%] top-[0%] right-[86.86%] bottom-[4.76%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="w-[465px] flex flex-col items-start justify-start gap-[2px] text-6xl">
            <div className="relative font-extrabold">{articleTitle}</div>
            <div className="relative text-lg leading-[165.4%] font-open-sans text-dimgray inline-block w-[444px] h-[62px] shrink-0">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </div>
          </div>
          <div className="rounded-2xl bg-khaki flex flex-col items-center justify-center pt-7 px-[47px] pb-[29px] text-xl">
            <div className="flex flex-row items-center justify-center gap-[9px]">
              <b className="relative">Read More</b>
              <img
                className="relative w-[19px] h-[19px]"
                alt=""
                src="/aerrow.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[43px] left-[32px] w-[82px] h-[82px] text-center text-6xl">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[82px] h-[82px]" />
        <div className="absolute top-[15px] left-[23px] font-extrabold">
          <p className="m-0">25</p>
          <p className="m-0 text-xl">Nov</p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
