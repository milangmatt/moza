import { useMemo } from "react";

const Property1Default11 = ({
  untitled11,
  uvrFd1,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div
      className="w-[1440px] h-[861px] overflow-hidden"
      style={property1DefaultStyle}
    >
      <div className="absolute top-[0px] left-[-22px] w-[2944.83px] h-[861px]">
        <img
          className="absolute top-[10.76px] left-[467.95px] w-[584.42px] h-[839.07px] object-cover"
          alt=""
          src={untitled11}
        />
        <img
          className="absolute top-[10.76px] left-[935.89px] w-[584.93px] h-[839.07px] object-cover"
          alt=""
          src={uvrFd1}
        />
        <img
          className="absolute top-[9.41px] left-[1853.82px] w-[586.28px] h-[843.11px] object-cover"
          alt=""
          src="/ss-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[2323.11px] w-[599.72px] h-[861px] object-cover"
          alt=""
          src="/zf-1@2x.png"
        />
        <img
          className="absolute top-[10.76px] left-[22px] w-[584.93px] h-[839.07px] object-cover"
          alt=""
          src="/sss-1@2x.png"
        />
        <img
          className="absolute top-[8.07px] left-[1403.84px] w-[588.97px] h-[844.45px] object-cover"
          alt=""
          src="/s-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Property1Default11;
