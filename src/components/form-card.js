const FormCard = ({
  imageDimensions,
  productDimensions,
  productDescription,
  imageDimensionsUrl,
  productPrice,
  productPriceText,
  dimensionText,
}) => {
  return (
    <div className="relative w-[242.36px] h-[349.33px] text-center text-[14.47px] text-darkslategray-100 font-roboto">
      <div className="absolute top-[0px] left-[0px] rounded-2xl-7 bg-whitesmoke-100 w-[242.36px] h-[349.33px]" />
      <img
        className="absolute top-[314.26px] left-[21.7px] rounded-2xl-7 w-[198.89px] h-[0.72px]"
        alt=""
        src={imageDimensions}
      />
      <img
        className="absolute top-[0px] left-[0px] w-[242.29px] h-[349.33px] object-cover"
        alt=""
        src={productDimensions}
      />
      <div className="absolute top-[288.58px] left-[21.7px] rounded-2xl-7 w-[201.79px] flex flex-col items-start justify-start gap-[9.4px]">
        <div className="relative font-semibold">{productDescription}</div>
        <div className="w-[201.79px] flex flex-col items-start justify-start gap-[4.34px] text-[13.02px] font-open-sans">
          <img
            className="relative w-[198.89px] h-[0.72px]"
            alt=""
            src={imageDimensionsUrl}
          />
          <div className="w-[201.79px] flex flex-row items-center justify-start gap-[58.58px]">
            <div className="relative w-[81.67px] h-[18px]">
              <b className="absolute top-[0px] left-[42.67px]">
                {productPrice}
              </b>
              <div className="absolute top-[2.17px] left-[2.17px] text-[10.85px] font-semibold text-silver">
                {productPriceText}
              </div>
              <div className="absolute top-[9.4px] left-[0px] bg-silver w-[36.16px] h-[0.72px]" />
            </div>
            <img
              className="relative w-[60.75px] h-[13.29px]"
              alt=""
              src={dimensionText}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[20.97px] left-[21.7px] rounded-2xl-7 w-[69.43px] flex flex-row items-start justify-start text-[10.85px] text-whitesmoke-100 font-open-sans">
        <div className="rounded-[5.79px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.616286277770996px] px-[8.679085731506348px] pb-[4.339542865753174px]">
          <div className="relative font-semibold">Functional</div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
