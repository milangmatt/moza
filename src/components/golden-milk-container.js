const GoldenMilkContainer = ({ line, image, goldenMilk, line1, star }) => {
  return (
    <div className="relative w-[241.66px] h-[348.32px] text-center text-[14.42px] text-darkslategray-100 font-roboto">
      <div className="absolute top-[0px] left-[0px] rounded-[21.64px] bg-whitesmoke-100 w-[241.66px] h-[348.32px]" />
      <img
        className="absolute top-[313.35px] left-[21.64px] w-[198.31px] h-[0.72px]"
        alt=""
        src={line}
      />
      <img
        className="absolute top-[0px] left-[0px] w-[241.59px] h-[348.32px] object-cover"
        alt=""
        src={image}
      />
      <div className="absolute top-[287.75px] left-[21.64px] w-[201.2px] flex flex-col items-start justify-start gap-[9.38px]">
        <div className="relative font-semibold">{goldenMilk}</div>
        <div className="w-[201.2px] flex flex-col items-start justify-start gap-[4.33px] text-[12.98px] font-open-sans">
          <img
            className="relative w-[198.31px] h-[0.72px]"
            alt=""
            src={line1}
          />
          <div className="w-[201.2px] flex flex-row items-center justify-start gap-[58.41px]">
            <div className="relative w-[76.15px] h-[18px]">
              <b className="absolute top-[0px] left-[46.15px]">$500</b>
              <div className="absolute top-[2.16px] left-[8.65px] text-[10.82px] font-semibold text-silver">
                480
              </div>
              <div className="absolute top-[9.37px] left-[0px] bg-silver w-[36.06px] h-[0.72px]" />
            </div>
            <img
              className="relative w-[60.58px] h-[13.25px]"
              alt=""
              src={star}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[20.91px] left-[21.64px] w-[69.23px] flex flex-row items-start justify-start text-[10.82px] text-white font-open-sans">
        <div className="rounded-[5.77px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.6058433055877686px] px-[8.654024124145508px] pb-[4.327012062072754px]">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-semibold">Functional</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldenMilkContainer;
