import { useMemo } from "react";
import Content2 from "./content2";
import Content1 from "./content1";

const Component3 = ({
  image,
  star,
  navigation1,
  component3Position,
  component3Top,
  component3Left,
  headingWidth,
  headingHeight,
  whatOurCustomerFontWeight,
  whatOurCustomerFontFamily,
  testimonialLeft,
  testimonialFontFamily,
  testimonialColor,
  testimonialDisplay,
}) => {
  const component3Style = useMemo(() => {
    return {
      position: component3Position,
      top: component3Top,
      left: component3Left,
    };
  }, [component3Position, component3Top, component3Left]);

  const headingStyle = useMemo(() => {
    return {
      width: headingWidth,
      height: headingHeight,
    };
  }, [headingWidth, headingHeight]);

  const whatOurCustomerStyle = useMemo(() => {
    return {
      fontWeight: whatOurCustomerFontWeight,
      fontFamily: whatOurCustomerFontFamily,
    };
  }, [whatOurCustomerFontWeight, whatOurCustomerFontFamily]);

  const testimonialStyle = useMemo(() => {
    return {
      left: testimonialLeft,
      fontFamily: testimonialFontFamily,
      color: testimonialColor,
      display: testimonialDisplay,
    };
  }, [
    testimonialLeft,
    testimonialFontFamily,
    testimonialColor,
    testimonialDisplay,
  ]);

  return (
    <div
      className="flex flex-row items-center justify-center gap-[11px] text-center text-31xl text-darkslategray-100 font-roboto"
      style={component3Style}
    >
      <Content2
        image="/image@2x.png"
        star="/star1.svg"
        navigation1="/navigation.svg"
        contentHeight="523.75px"
        headingWidth="633px"
        headingHeight="116px"
        whatOurCustomerFontWeight="800"
        whatOurCustomerFontFamily="Roboto"
        testimonialLeft="246px"
        testimonialFontFamily="Yellowtail"
        testimonialColor="#7eb693"
        testimonialDisplay="inline-block"
      />
      <Content1 star="/star1.svg" contentHeight="523.75px" />
      <div className="w-[780px] h-[523.75px] flex flex-col items-center justify-center gap-[60px]">
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
              src="/star1.svg"
            />
            <div className="relative leading-[165.4%] inline-block w-[780px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </div>
          </div>
          <div className="w-[126px] flex flex-col items-center justify-start gap-[19px] text-left text-6xl text-darkslategray-100 font-roboto">
            <div className="w-[126px] flex flex-col items-center justify-start">
              <div className="relative font-semibold">Claire Taylor</div>
              <div className="relative text-mini leading-[165.4%] font-open-sans text-dimgray">
                Consumer
              </div>
            </div>
            <img
              className="relative w-[35px] h-2"
              alt=""
              src="/navigation.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component3;
