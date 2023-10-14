import { useMemo } from "react";

const Content1 = ({ star, contentHeight }) => {
  const content1Style = useMemo(() => {
    return {
      height: contentHeight,
    };
  }, [contentHeight]);

  return (
    <div
      className="w-[780px] flex flex-col items-center justify-center gap-[60px] text-center text-31xl text-darkslategray-100 font-roboto"
      style={content1Style}
    >
      <div className="relative w-[633px] h-[116px]">
        <div className="absolute top-[57px] left-[0px] font-extrabold">
          What Our Customer Saying?
        </div>
        <div className="absolute top-[0px] left-[246px] text-17xl font-yellowtail text-darkseagreen text-left">
          Testimonial
        </div>
      </div>
      <div className="w-[780px] flex flex-col items-center justify-start gap-[20px] text-lg text-dimgray font-open-sans">
        <img
          className="relative w-[115px] h-[115px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="w-[780px] flex flex-col items-center justify-start gap-[25px]">
          <img
            className="relative w-[122.28px] h-[26.75px]"
            alt=""
            src={star}
          />
          <div className="relative leading-[165.4%] inline-block w-[780px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </div>
        </div>
        <div className="w-[126px] flex flex-col items-center justify-start gap-[19px] text-left text-6xl text-darkslategray-100 font-roboto">
          <div className="w-[126px] flex flex-col items-center justify-start">
            <div className="relative font-semibold">Shanaya Taylor</div>
            <div className="relative text-mini leading-[165.4%] font-open-sans text-dimgray">
              Consumer
            </div>
          </div>
          <img className="relative w-[35px] h-2" alt="" src="/navigation.svg" />
        </div>
      </div>
    </div>
  );
};

export default Content1;
