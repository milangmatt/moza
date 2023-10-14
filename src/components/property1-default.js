import { useMemo } from "react";

const Property1Default = ({
  whatsAppImage20231012At74,
  whatsAppImage20231012At741,
  whatsAppImage20231012At742,
  whatsAppImage20231012At743,
  whatsAppImage20231012At744,
  whatsAppImage20231012At745,
  whatsAppImage20231012At746,
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
      className="w-[1440px] h-[608px] overflow-hidden"
      style={property1DefaultStyle}
    >
      <div className="absolute top-[58px] left-[calc(50%_-_720px)] flex flex-row items-center justify-start py-0 px-[75px] gap-[150px]">
        <img
          className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
          alt=""
          src={whatsAppImage20231012At74}
        />
        <img
          className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
          alt=""
          src={whatsAppImage20231012At741}
        />
        <img
          className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
          alt=""
          src={whatsAppImage20231012At742}
        />
        <img
          className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
          alt=""
          src={whatsAppImage20231012At743}
        />
        <img
          className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
          alt=""
          src={whatsAppImage20231012At744}
        />
        <img
          className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
          alt=""
          src={whatsAppImage20231012At745}
        />
        <img
          className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
          alt=""
          src={whatsAppImage20231012At746}
        />
      </div>
    </div>
  );
};

export default Property1Default;
