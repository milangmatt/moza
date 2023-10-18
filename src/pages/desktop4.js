import { useCallback } from "react";

const Desktop4 = () => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktop2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-white w-full h-[10561px] overflow-hidden text-left text-31xl text-white font-josefin-sans-thin">
      <div className="absolute top-[228px] left-[68px] text-131xl leading-[130px] text-steelblue-300">
        <p className="m-0">
          <b className="font-josefin-sans-thin">MOZA</b>
        </p>
        <p className="m-0 tracking-[0.38em] font-light">LIFE</p>
      </div>
      <div className="absolute top-[507px] left-[89px] font-light text-darkslategray-200 inline-block w-[480px]">
        Choose the best healthier way of life
      </div>
      <div
        className="absolute top-[715.5px] left-[65.5px] rounded-21xl box-border w-[491px] overflow-hidden flex flex-row items-center justify-center py-5 px-2.5 gap-[10px] cursor-pointer text-6xl text-steelblue-300 border-[5px] border-solid border-steelblue-300"
        onClick={onFrameContainerClick}
      >
        <div className="relative">EXPLORE</div>
        <img
          className="relative w-9 h-9 overflow-hidden shrink-0"
          alt=""
          src="/solararrowuplineduotone.svg"
        />
      </div>
      <div className="absolute top-[635px] left-[68px] rounded-8xs bg-steelblue-300 w-[480px] overflow-hidden flex flex-row items-center justify-center py-[15px] px-[50px] box-border gap-[20px] text-6xl">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/akariconsleaf1.svg"
        />
        <div className="relative">100% Natural Food</div>
      </div>
      <img
        className="absolute top-[54px] left-[587px] w-[833px] h-[833px] object-cover"
        alt=""
        src="/table-1@2x.png"
      />
      <div className="absolute top-[361px] left-[865px] w-[34px] h-[34px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-black w-[34px] h-[34px]" />
        <div className="absolute top-[4.97px] left-[16.04px] bg-gainsboro w-[2.29px] h-[23.69px]" />
        <div className="absolute top-[15.66px] left-[29.03px] bg-gainsboro w-[2.29px] h-[23.69px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[289px] left-[1101px] w-[34px] h-[34px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-black w-[34px] h-[34px]" />
        <div className="absolute top-[4.97px] left-[16.04px] bg-gainsboro w-[2.29px] h-[23.69px]" />
        <div className="absolute top-[15.66px] left-[29.03px] bg-gainsboro w-[2.29px] h-[23.69px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[191px] left-[1171px] w-[34px] h-[34px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-black w-[34px] h-[34px]" />
        <div className="absolute top-[4.97px] left-[16.04px] bg-gainsboro w-[2.29px] h-[23.69px]" />
        <div className="absolute top-[15.66px] left-[29.03px] bg-gainsboro w-[2.29px] h-[23.69px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[390px] left-[1308px] w-[34px] h-[34px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-black w-[34px] h-[34px]" />
        <div className="absolute top-[4.97px] left-[16.04px] bg-gainsboro w-[2.29px] h-[23.69px]" />
        <div className="absolute top-[15.66px] left-[29.03px] bg-gainsboro w-[2.29px] h-[23.69px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
      </div>
      <div className="absolute top-[545px] left-[1067px] w-[34px] h-[34px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-black w-[34px] h-[34px]" />
        <div className="absolute top-[4.97px] left-[16.04px] bg-gainsboro w-[2.29px] h-[23.69px]" />
        <div className="absolute top-[15.66px] left-[29.03px] bg-gainsboro w-[2.29px] h-[23.69px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
      </div>
      <div
        className="absolute top-[830px] left-[-22px] w-[1701px] h-[1112px] overflow-hidden text-11xl"
        data-scroll-to="desktop2"
      >
        <div className="absolute top-[calc(50%_-_457px)] left-[74px] w-[678px] h-[570px] overflow-hidden flex flex-col items-center justify-center py-2.5 px-0 box-border gap-[100px]">
          <div className="rounded-8xs bg-steelblue-300 w-[623px] flex flex-row items-center justify-center py-[15px] px-[105px] box-border gap-[20px] text-center">
            <img
              className="relative w-[42px] h-[42px] overflow-hidden shrink-0"
              alt=""
              src="/streamlinenatureecologypottedtree2treeplantpot1.svg"
            />
            <div className="relative inline-block w-[480px] shrink-0">
              <p className="m-0">Discover Holistic Wellness Practices</p>
              <p className="m-0">That Transform Your Life</p>
            </div>
          </div>
          <b className="relative text-31xl inline-block text-steelblue-300 w-[642px]">
            Empower Your Journey to Wholeness
          </b>
          <div className="relative text-5xl leading-[165.4%] font-josefin-sans text-dimgray inline-block w-[624px]">
            Are you interested in living a healthier, more holistic life? Moza
            Life is here to help you achieve your wellness goals. We offer a
            variety of products and services to support your physical, mental,
            and emotional well-being.
          </div>
        </div>
        <img
          className="absolute top-[321px] left-[851px] w-[722px] h-[745px] overflow-hidden opacity-[0.21] mix-blend-normal"
          alt=""
          src="/leafsvgrepocom-11.svg"
        />
        <div className="absolute top-[264px] left-[684px] w-[1439px] h-[470px] overflow-hidden">
          <img
            className="absolute top-[calc(50%_-_235px)] left-[64px] w-[703px] h-[515px] object-cover"
            alt=""
            src="/ideogram-1-11@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[3014px] left-[81px] w-[1278px] h-[616.35px] text-[26.59px] text-darkslategray-100 font-roboto">
        <div className="absolute top-[0px] left-[0px] w-[1278px] h-[616.35px]">
          <div className="absolute top-[2px] left-[855px] w-[423px] flex flex-col items-start justify-center gap-[35.1px]">
            <div className="w-[421.19px] flex flex-col items-start justify-start gap-[5.32px]">
              <div className="relative w-[65.02px] h-[66.34px]">
                <div className="absolute top-[44.23px] left-[34.87px] rounded-[50%] bg-lemonchiffon w-[25.53px] h-[25.53px] [transform:_rotate(120deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[0px] left-[5.46px] w-[59.56px] h-[59.56px] object-cover"
                  alt=""
                  src="/natural-food@2x.png"
                />
              </div>
              <div className="relative w-[280px] h-[31px]">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Blood Sugar Regulation
                </div>
              </div>
              <div className="relative text-[19.15px] leading-[165.4%] font-open-sans text-dimgray inline-block w-[421.19px]">
                Ingredients that assist in managing blood sugar levels.
              </div>
            </div>
            <div className="w-[421.19px] flex flex-col items-start justify-start gap-[5.32px]">
              <div className="relative w-[61.83px] h-[59.96px]">
                <div className="absolute top-[37.85px] left-[34.87px] rounded-[50%] bg-lemonchiffon w-[25.53px] h-[25.53px] [transform:_rotate(120deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[0px] left-[10.77px] w-[51.05px] h-[51.05px] object-cover"
                  alt=""
                  src="/vegetables-bag@2x.png"
                />
              </div>
              <div className="relative w-[151px] h-[31px]">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Heart Health
                </div>
              </div>
              <div className="relative text-[19.15px] leading-[165.4%] font-open-sans text-dimgray inline-block w-[421.19px]">
                Ingredients that contribute to cardiovascular well-being, such
                as those rich in omega-3 fatty acids
              </div>
            </div>
            <div className="w-[423.32px] flex flex-col items-start justify-start gap-[5.32px]">
              <div className="relative w-[65.02px] h-[66.34px]">
                <div className="absolute top-[44.23px] left-[34.87px] rounded-[50%] bg-lemonchiffon w-[25.53px] h-[25.53px] [transform:_rotate(120deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[0px] left-[11.84px] w-[53.18px] h-[53.18px] object-cover"
                  alt=""
                  src="/radish@2x.png"
                />
              </div>
              <div className="relative w-[270px] h-[31px]">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Immune System Boost
                </div>
              </div>
              <div className="relative text-[19.15px] leading-[165.4%] font-open-sans text-dimgray inline-block w-[423.32px]">
                Supports a robust immune response with immune-boosting
                components.
              </div>
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[431.52px] w-[426.44px] h-[616.35px] mix-blend-normal"
            alt=""
            src="/image21.svg"
          />
          <div className="absolute top-[22px] left-[0px] w-[426px] flex flex-col items-start justify-center gap-[41.48px]">
            <div className="w-[421.19px] flex flex-col items-end justify-start gap-[5.32px]">
              <div className="relative w-14 h-[58.89px]">
                <div className="absolute top-[36.79px] left-[56px] rounded-[50%] bg-lemonchiffon w-[25.53px] h-[25.53px] [transform:_rotate(120deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[0px] left-[0px] w-[44.67px] h-[44.67px] object-cover"
                  alt=""
                  src="/milk-bottle@2x.png"
                />
              </div>
              <div className="relative w-[158px] h-[31px]">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Nutrient-Rich
                </div>
              </div>
              <div className="relative text-[19.15px] leading-[165.4%] font-open-sans text-dimgray text-right inline-block w-[421.19px]">
                Packed with essential vitamins, minerals, and antioxidants to
                support overall health.
              </div>
            </div>
            <div className="w-[421.19px] flex flex-col items-end justify-start gap-[5.32px] text-right">
              <div className="relative w-[54.94px] h-[58.89px]">
                <div className="absolute top-[36.79px] left-[54.94px] rounded-[50%] bg-lemonchiffon w-[25.53px] h-[25.53px] [transform:_rotate(120deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[0px] left-[0px] w-[48.93px] h-[48.93px] object-cover"
                  alt=""
                  src="/online-store@2x.png"
                />
              </div>
              <div className="relative w-[143px] h-[31px]">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Gut Friendly
                </div>
              </div>
              <div className="relative text-[19.15px] leading-[165.4%] font-open-sans text-dimgray inline-block w-[421.19px]">
                Promotes a healthy digestive system and balances gut microbiota.
              </div>
            </div>
            <div className="w-[421.19px] flex flex-col items-end justify-start gap-[5.32px]">
              <div className="relative w-[58.13px] h-[54.64px]">
                <div className="absolute top-[32.53px] left-[58.13px] rounded-[50%] bg-lemonchiffon w-[25.53px] h-[25.53px] [transform:_rotate(120deg)] [transform-origin:0_0]" />
                <img
                  className="absolute top-[0px] left-[0px] w-[48.93px] h-[48.93px] object-cover"
                  alt=""
                  src="/delivery@2x.png"
                />
              </div>
              <div className="relative w-[247px] h-[31px]">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Weight Management
                </div>
              </div>
              <div className="relative text-[19.15px] leading-[165.4%] font-open-sans text-dimgray text-right inline-block w-[421.19px]">
                <p className="m-0">{`Fiber rich food products helps in `}</p>
                <p className="m-0">weight loss and weight maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b className="absolute top-[2891.38px] left-[calc(50%_-_217px)] text-[53.18px] text-steelblue-200 text-center">
        <p className="m-0">Nourish with Us</p>
        <p className="m-0"> Flourish Forever!</p>
      </b>
      <div className="absolute top-[2813px] left-[calc(50%_-_106px)] rounded-8xs bg-steelblue-300 w-[212px] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[50px] box-border gap-[20px] text-6xl">
        <img
          className="relative w-9 h-9 overflow-hidden shrink-0"
          alt=""
          src="/mingcutehappyline1.svg"
        />
        <div className="relative">Join us</div>
      </div>
      <img
        className="absolute top-[3429px] left-[0px] w-[930.44px] h-[1336.25px] object-cover opacity-[0.2] mix-blend-normal"
        alt=""
        src="/image-4@2x.png"
      />
      <b className="absolute top-[3837.85px] left-[calc(50%_-_460px)] inline-block text-steelblue-300 text-center w-[911px]">
        Discover Simplified Holistic Wellness with MOZA LIFE
      </b>
      <b className="absolute top-[4665px] left-[calc(50%_-_460px)] inline-block text-steelblue-300 text-center w-[911px]">
        <p className="m-0">{`Explore our `}</p>
        <p className="m-0">Holistic health categories</p>
      </b>
      <div className="absolute top-[4828.97px] left-[calc(50%_-_705px)] w-[1411.07px] h-[660.33px] overflow-hidden text-[14.47px]">
        <div className="absolute top-[0px] left-[4.34px] rounded-[36.16px] bg-peru-200 w-[1403.12px] h-[660.33px]" />
        <img
          className="absolute top-[69.43px] left-[0px] w-[602.47px] h-[602.47px] object-cover opacity-[0.2] [mix-blend-mode:linear-dodge]"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className="absolute top-[0px] left-[752.36px] w-[658.71px] h-[639.19px] object-cover opacity-[0.2] [mix-blend-mode:linear-dodge]"
          alt=""
          src="/image-8@2x.png"
        />
        <div className="absolute top-[135.25px] left-[calc(50%_-_506.64px)] w-[1027.03px] h-[433.95px] text-center text-darkslategray-100 font-roboto">
          <div className="absolute top-[66.54px] left-[calc(50%_-_513.51px)] rounded-2xl-7 bg-burlywood w-[1027.03px] h-[367.41px] flex flex-col items-center justify-center">
            <div className="rounded-2xl-7 w-[1012.82px] flex flex-row items-center justify-center gap-[14.47px]">
              <div className="relative w-[242.36px] h-[349.33px]">
                <div className="absolute top-[0px] left-[0px] rounded-2xl-7 bg-whitesmoke-100 w-[242.36px] h-[349.33px]" />
                <img
                  className="absolute top-[314.26px] left-[21.7px] rounded-2xl-7 w-[198.89px] h-[0.72px]"
                  alt=""
                  src="/line31.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[242.29px] h-[349.33px] object-cover"
                  alt=""
                  src="/image22@2x.png"
                />
                <div className="absolute top-[288.58px] left-[21.7px] rounded-2xl-7 w-[201.79px] flex flex-col items-start justify-start gap-[9.4px]">
                  <div className="relative font-semibold">
                    Organic Black Pepper
                  </div>
                  <div className="w-[201.79px] flex flex-col items-start justify-start gap-[4.34px] text-[13.02px] font-open-sans">
                    <img
                      className="relative w-[198.89px] h-[0.72px]"
                      alt=""
                      src="/line32.svg"
                    />
                    <div className="w-[201.79px] flex flex-row items-center justify-start gap-[58.58px]">
                      <div className="relative w-[81.67px] h-[18px]">
                        <b className="absolute top-[0px] left-[42.67px]">
                          450 rs
                        </b>
                        <div className="absolute top-[2.17px] left-[2.17px] text-[10.85px] font-semibold text-silver">
                          500 rs
                        </div>
                        <div className="absolute top-[9.4px] left-[0px] bg-silver w-[36.16px] h-[0.72px]" />
                      </div>
                      <img
                        className="relative w-[60.75px] h-[13.29px]"
                        alt=""
                        src="/star20.svg"
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
              <div className="relative w-[242.36px] h-[349.33px]">
                <div className="absolute top-[0px] left-[0px] rounded-2xl-7 bg-whitesmoke-100 w-[242.36px] h-[349.33px]" />
                <img
                  className="absolute top-[314.26px] left-[21.7px] rounded-2xl-7 w-[198.89px] h-[0.72px]"
                  alt=""
                  src="/line33.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[242.29px] h-[349.33px] object-cover"
                  alt=""
                  src="/image23@2x.png"
                />
                <div className="absolute top-[288.58px] left-[21.7px] rounded-2xl-7 w-[201.79px] flex flex-col items-start justify-start gap-[9.4px]">
                  <div className="relative font-semibold">Ginger Powder</div>
                  <div className="w-[201.79px] flex flex-col items-start justify-start gap-[4.34px] text-[13.02px] font-open-sans">
                    <img
                      className="relative w-[198.89px] h-[0.72px]"
                      alt=""
                      src="/line34.svg"
                    />
                    <div className="w-[201.79px] flex flex-row items-center justify-start gap-[58.58px]">
                      <div className="relative w-[76.29px] h-[18px]">
                        <b className="absolute top-[0px] left-[46.29px]">
                          $500
                        </b>
                        <div className="absolute top-[2.17px] left-[8.68px] text-[10.85px] font-semibold text-silver">
                          480
                        </div>
                        <div className="absolute top-[9.4px] left-[0px] bg-silver w-[36.16px] h-[0.72px]" />
                      </div>
                      <img
                        className="relative w-[60.75px] h-[13.29px]"
                        alt=""
                        src="/star21.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[20.97px] left-[21.7px] rounded-2xl-7 w-[69.43px] flex flex-row items-start justify-start text-[10.85px] text-whitesmoke-100 font-open-sans">
                  <div className="rounded-[5.79px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.616286277770996px] px-[8.679085731506348px] pb-[4.339542865753174px]">
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative font-semibold">Functional</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[242.36px] h-[349.33px]">
                <div className="absolute top-[0px] left-[0px] rounded-2xl-7 bg-whitesmoke-100 w-[242.36px] h-[349.33px]" />
                <img
                  className="absolute top-[314.26px] left-[21.7px] rounded-2xl-7 w-[198.89px] h-[0.72px]"
                  alt=""
                  src="/line35.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[242.29px] h-[349.33px] object-cover"
                  alt=""
                  src="/image24@2x.png"
                />
                <div className="absolute top-[288.58px] left-[21.7px] rounded-2xl-7 w-[201.79px] flex flex-col items-start justify-start gap-[9.4px]">
                  <div className="relative font-semibold">Tumeric Powder</div>
                  <div className="w-[201.79px] flex flex-col items-start justify-start gap-[4.34px] text-[13.02px] font-open-sans">
                    <img
                      className="relative w-[198.89px] h-[0.72px]"
                      alt=""
                      src="/line36.svg"
                    />
                    <div className="w-[201.79px] flex flex-row items-center justify-start gap-[58.58px]">
                      <div className="relative w-[82.23px] h-[18px]">
                        <b className="absolute top-[0px] left-[41.23px]">
                          $17.00
                        </b>
                        <div className="absolute top-[2.17px] left-[0.72px] text-[10.85px] font-semibold text-silver">
                          $20.00
                        </div>
                        <div className="absolute top-[9.4px] left-[0px] bg-silver w-[36.16px] h-[0.72px]" />
                      </div>
                      <img
                        className="relative w-[60.75px] h-[13.29px]"
                        alt=""
                        src="/star22.svg"
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
              <div className="relative w-[243px] h-[349.33px] text-[13.74px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[243px] h-[349.33px] object-cover"
                  alt=""
                  src="/image25@2x.png"
                />
                <div className="absolute top-[288.58px] left-[22.12px] rounded-2xl-7 w-[201.79px] flex flex-col items-start justify-start gap-[9.4px]">
                  <div className="relative font-semibold">Organic Cardamon</div>
                  <div className="w-[201.79px] flex flex-col items-start justify-start gap-[4.34px] text-[13.02px] font-open-sans">
                    <img
                      className="relative w-[198.89px] h-[0.72px]"
                      alt=""
                      src="/line37.svg"
                    />
                    <div className="w-[201.79px] flex flex-row items-center justify-start gap-[58.58px]">
                      <div className="relative w-[82.23px] h-[18px]">
                        <b className="absolute top-[0px] left-[41.23px]">
                          $17.00
                        </b>
                        <div className="absolute top-[2.17px] left-[0.72px] text-[10.85px] font-semibold text-silver">
                          $20.00
                        </div>
                        <div className="absolute top-[9.4px] left-[0px] bg-silver w-[36.16px] h-[0.72px]" />
                      </div>
                      <img
                        className="relative w-[60.75px] h-[13.29px]"
                        alt=""
                        src="/star23.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[20.97px] left-[22.12px] rounded-2xl-7 w-[69.43px] flex flex-row items-start justify-start text-[10.85px] text-whitesmoke-100 font-open-sans">
                  <div className="rounded-[5.79px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.616286277770996px] px-[8.679085731506348px] pb-[4.339542865753174px]">
                    <div className="relative font-semibold">Vegetable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[-1.81px] left-[770.63px] rounded-[28.93px] bg-tan box-border w-[250.97px] overflow-hidden flex flex-row items-center justify-center py-[14.465145111083984px] px-[7.232572555541992px] gap-[7.23px] text-left text-[18.08px] font-josefin-sans-thin border-[3.6px] border-solid border-darkslategray-100">
            <b className="relative">View All Products</b>
            <img
              className="relative w-[26.04px] h-[26.04px] overflow-hidden shrink-0"
              alt=""
              src="/solararrowuplineduotone5.svg"
            />
          </div>
        </div>
        <div className="absolute top-[145.37px] left-[473.73px] flex flex-row items-center justify-start text-[18.08px]">
          <div className="rounded-[3.62px] bg-burlywood w-[174.31px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[10.848858833312988px] px-[36.16286087036133px] box-border gap-[14.47px]">
            <b className="relative">%</b>
            <div className="relative">Offer</div>
          </div>
        </div>
        <b className="absolute top-[144.65px] left-[206.13px] text-[36.16px]">
          Pure Flavoring
        </b>
      </div>
      <div className="absolute top-[5519.3px] left-[19px] w-[1407px] h-[658.43px] overflow-hidden text-[14.42px]">
        <div className="absolute top-[0px] left-[4.33px] rounded-[36.06px] bg-darksalmon w-[1399.07px] h-[658.43px]" />
        <img
          className="absolute top-[69.23px] left-[0px] w-[600.73px] h-[600.73px] object-cover opacity-[0.2] mix-blend-color-burn"
          alt=""
          src="/image-51@2x.png"
        />
        <img
          className="absolute top-[0px] left-[750.19px] w-[656.81px] h-[637.34px] object-cover opacity-[0.2] mix-blend-color-burn"
          alt=""
          src="/image-84@2x.png"
        />
        <div className="absolute top-[134.86px] left-[calc(50%_-_505.18px)] w-[1024.06px] h-[432.7px] text-center text-darkslategray-100 font-roboto">
          <div className="absolute top-[66.35px] left-[calc(50%_-_512.03px)] rounded-[21.64px] bg-burlywood w-[1024.06px] h-[366.35px] flex flex-col items-center justify-center">
            <div className="w-[1009.9px] flex flex-row items-start justify-start gap-[14.42px]">
              <div className="relative w-[241.66px] h-[348.32px]">
                <div className="absolute top-[0px] left-[0px] rounded-[21.64px] bg-whitesmoke-100 w-[241.66px] h-[348.32px]" />
                <img
                  className="absolute top-[313.35px] left-[21.64px] w-[198.31px] h-[0.72px]"
                  alt=""
                  src="/line38.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[241.59px] h-[348.32px] object-cover"
                  alt=""
                  src="/image26@2x.png"
                />
                <div className="absolute top-[287.75px] left-[21.64px] w-[201.2px] flex flex-col items-start justify-start gap-[9.38px]">
                  <div className="relative font-semibold">{`Tumeric Latte `}</div>
                  <div className="w-[201.2px] flex flex-col items-start justify-start gap-[4.33px] text-[12.98px] font-open-sans">
                    <img
                      className="relative w-[198.31px] h-[0.72px]"
                      alt=""
                      src="/line39.svg"
                    />
                    <div className="w-[201.2px] flex flex-row items-center justify-start gap-[58.41px]">
                      <div className="relative w-[81.55px] h-[18px]">
                        <b className="absolute top-[0px] left-[42.55px]">
                          450 rs
                        </b>
                        <div className="absolute top-[2.16px] left-[2.16px] text-[10.82px] font-semibold text-silver">
                          500 rs
                        </div>
                        <div className="absolute top-[9.37px] left-[0px] bg-silver w-[36.06px] h-[0.72px]" />
                      </div>
                      <img
                        className="relative w-[60.58px] h-[13.25px]"
                        alt=""
                        src="/star24.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[20.91px] left-[21.64px] w-[69.23px] flex flex-row items-start justify-start text-[10.82px] text-white font-open-sans">
                  <div className="rounded-[5.77px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.6058433055877686px] px-[8.654024124145508px] pb-[4.327012062072754px]">
                    <div className="relative font-semibold">Functional</div>
                  </div>
                </div>
              </div>
              <div className="relative w-[241.66px] h-[348.32px]">
                <div className="absolute top-[0px] left-[0px] rounded-[21.64px] bg-whitesmoke-100 w-[241.66px] h-[348.32px]" />
                <img
                  className="absolute top-[313.35px] left-[21.64px] w-[198.31px] h-[0.72px]"
                  alt=""
                  src="/line40.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[241.59px] h-[348.32px] object-cover"
                  alt=""
                  src="/image27@2x.png"
                />
                <div className="absolute top-[287.75px] left-[21.64px] w-[201.2px] flex flex-col items-start justify-start gap-[9.38px]">
                  <div className="relative font-semibold">Golden Milk</div>
                  <div className="w-[201.2px] flex flex-col items-start justify-start gap-[4.33px] text-[12.98px] font-open-sans">
                    <img
                      className="relative w-[198.31px] h-[0.72px]"
                      alt=""
                      src="/line41.svg"
                    />
                    <div className="w-[201.2px] flex flex-row items-center justify-start gap-[58.41px]">
                      <div className="relative w-[76.15px] h-[18px]">
                        <b className="absolute top-[0px] left-[46.15px]">
                          $500
                        </b>
                        <div className="absolute top-[2.16px] left-[8.65px] text-[10.82px] font-semibold text-silver">
                          480
                        </div>
                        <div className="absolute top-[9.37px] left-[0px] bg-silver w-[36.06px] h-[0.72px]" />
                      </div>
                      <img
                        className="relative w-[60.58px] h-[13.25px]"
                        alt=""
                        src="/star25.svg"
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
              <div className="relative w-[241.66px] h-[348.32px]">
                <div className="absolute top-[0px] left-[0px] rounded-[21.64px] bg-whitesmoke-100 w-[241.66px] h-[348.32px]" />
                <img
                  className="absolute top-[313.35px] left-[21.64px] w-[198.31px] h-[0.72px]"
                  alt=""
                  src="/line42.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[241.59px] h-[348.32px] object-cover"
                  alt=""
                  src="/image8@2x.png"
                />
                <div className="absolute top-[287.75px] left-[21.64px] w-[201.2px] flex flex-col items-start justify-start gap-[9.38px]">
                  <div className="relative font-semibold">Green Cofee</div>
                  <div className="w-[201.2px] flex flex-col items-start justify-start gap-[4.33px] text-[12.98px] font-open-sans">
                    <img
                      className="relative w-[198.31px] h-[0.72px]"
                      alt=""
                      src="/line43.svg"
                    />
                    <div className="w-[201.2px] flex flex-row items-center justify-start gap-[58.41px]">
                      <div className="relative w-[82.11px] h-[18px]">
                        <b className="absolute top-[0px] left-[41.11px]">
                          $17.00
                        </b>
                        <div className="absolute top-[2.16px] left-[0.72px] text-[10.82px] font-semibold text-silver">
                          $20.00
                        </div>
                        <div className="absolute top-[9.37px] left-[0px] bg-silver w-[36.06px] h-[0.72px]" />
                      </div>
                      <img
                        className="relative w-[60.58px] h-[13.25px]"
                        alt=""
                        src="/star26.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[20.91px] left-[21.64px] w-[69.23px] flex flex-row items-start justify-start text-[10.82px] text-white font-open-sans">
                  <div className="rounded-[5.77px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.6058433055877686px] px-[8.654024124145508px] pb-[4.327012062072754px]">
                    <div className="relative font-semibold">Functional</div>
                  </div>
                </div>
              </div>
              <div className="relative w-[244.28px] h-[352.11px] text-sm-7">
                <div className="absolute top-[0px] left-[0px] rounded-[21.87px] bg-whitesmoke-100 w-[244.28px] h-[352.11px]" />
                <img
                  className="absolute top-[313.35px] left-[21.64px] w-[198.31px] h-[0.72px]"
                  alt=""
                  src="/line13.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[241.59px] h-[348.32px] object-cover"
                  alt=""
                  src="/image9@2x.png"
                />
                <div className="absolute top-[287.75px] left-[21.64px] w-[201.2px] flex flex-col items-start justify-start gap-[9.38px]">
                  <div className="relative font-semibold">Kesar Latte</div>
                  <div className="w-[201.2px] flex flex-col items-start justify-start gap-[4.33px] text-[12.98px] font-open-sans">
                    <img
                      className="relative w-[198.31px] h-[0.72px]"
                      alt=""
                      src="/line44.svg"
                    />
                    <div className="w-[201.2px] flex flex-row items-center justify-start gap-[58.41px]">
                      <div className="relative w-[82.11px] h-[18px]">
                        <b className="absolute top-[0px] left-[41.11px]">
                          $17.00
                        </b>
                        <div className="absolute top-[2.16px] left-[0.72px] text-[10.82px] font-semibold text-silver">
                          $20.00
                        </div>
                        <div className="absolute top-[9.37px] left-[0px] bg-silver w-[36.06px] h-[0.72px]" />
                      </div>
                      <img
                        className="relative w-[60.58px] h-[13.25px]"
                        alt=""
                        src="/star27.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[20.91px] left-[21.64px] w-[69.23px] flex flex-row items-start justify-start text-[10.82px] text-white font-open-sans">
                  <div className="rounded-[5.77px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.6058433055877686px] px-[8.654024124145508px] pb-[4.327012062072754px]">
                    <div className="relative font-semibold">Vegetable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[-1.8px] left-[768.41px] rounded-[28.85px] bg-darksalmon box-border w-[250.25px] overflow-hidden flex flex-row items-center justify-center py-[14.423373222351074px] px-[7.211686611175537px] gap-[7.21px] text-left text-[18.03px] text-white font-josefin-sans-thin border-[3.6px] border-solid border-white">
            <b className="relative">View All Products</b>
            <img
              className="relative w-[25.96px] h-[25.96px] overflow-hidden shrink-0"
              alt=""
              src="/solararrowuplineduotone6.svg"
            />
          </div>
        </div>
        <div className="absolute top-[144.95px] left-[584.87px] flex flex-row items-center justify-start text-[18.03px]">
          <div className="rounded-[3.61px] bg-rosybrown w-[173.8px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[10.817530632019043px] px-[36.05843734741211px] box-border gap-[14.42px]">
            <b className="relative">%</b>
            <div className="relative">Offer</div>
          </div>
        </div>
        <b className="absolute top-[113.22px] left-[205.53px] text-[36.06px]">
          <p className="m-0">{`Antioxidant and `}</p>
          <p className="m-0">Sugar free Beverages</p>
        </b>
      </div>
      <div className="absolute top-[6207.73px] left-[15px] w-[1407px] h-[658.43px] overflow-hidden text-[18.03px]">
        <div className="absolute top-[0px] left-[4.33px] rounded-[36.06px] bg-saddlebrown w-[1399.07px] h-[658.43px]" />
        <img
          className="absolute top-[69.23px] left-[0px] w-[600.73px] h-[600.73px] object-cover opacity-[0.2] mix-blend-color-burn"
          alt=""
          src="/image-52@2x.png"
        />
        <img
          className="absolute top-[0px] left-[750.19px] w-[656.81px] h-[637.34px] object-cover opacity-[0.2] mix-blend-color-burn"
          alt=""
          src="/image-82@2x.png"
        />
        <div className="absolute top-[134.86px] left-[968.53px] w-[246.64px] h-[54.81px]">
          <div className="absolute top-[-1.8px] left-[-1.8px] rounded-[28.85px] bg-gray-200 box-border w-[250.25px] overflow-hidden flex flex-row items-center justify-center py-[14.423372268676758px] px-[7.211686134338379px] gap-[7.21px] border-[3.6px] border-solid border-white">
            <b className="relative">View All Products</b>
            <img
              className="relative w-[25.96px] h-[25.96px] overflow-hidden shrink-0"
              alt=""
              src="/solararrowuplineduotone7.svg"
            />
          </div>
        </div>
        <div className="absolute top-[144.95px] left-[546.65px] flex flex-row items-center justify-start">
          <div className="rounded-[3.61px] bg-gray-200 w-[173.8px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[10.81752872467041px] px-[36.05842971801758px] box-border gap-[14.42px]">
            <b className="relative">%</b>
            <div className="relative">Offer</div>
          </div>
        </div>
        <div className="absolute top-[207.7px] left-[205.53px] w-[1009.9px] flex flex-row items-center justify-center gap-[14.42px] text-center text-[14.42px] text-darkslategray-100 font-roboto">
          <div className="relative w-[241.66px] h-[348.32px]">
            <div className="absolute top-[0px] left-[0px] rounded-[21.64px] bg-whitesmoke-100 w-[241.66px] h-[348.32px]" />
            <img
              className="absolute top-[313.35px] left-[21.63px] w-[198.31px] h-[0.72px]"
              alt=""
              src="/line45.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[241.59px] h-[348.32px] object-cover"
              alt=""
              src="/image28@2x.png"
            />
            <div className="absolute top-[287.75px] left-[21.63px] w-[201.2px] flex flex-col items-start justify-start gap-[9.38px]">
              <div className="relative font-semibold">{`AshwaBites `}</div>
              <div className="w-[201.2px] flex flex-col items-start justify-start gap-[4.33px] text-[12.98px] font-open-sans">
                <img
                  className="relative w-[198.31px] h-[0.72px]"
                  alt=""
                  src="/line46.svg"
                />
                <div className="w-[201.2px] flex flex-row items-center justify-start gap-[58.41px]">
                  <div className="relative w-[81.55px] h-[18px]">
                    <b className="absolute top-[0px] left-[42.55px]">450 rs</b>
                    <div className="absolute top-[2.16px] left-[2.16px] text-[10.82px] font-semibold text-silver">
                      500 rs
                    </div>
                    <div className="absolute top-[9.38px] left-[0px] bg-silver w-[36.06px] h-[0.72px]" />
                  </div>
                  <img
                    className="relative w-[60.58px] h-[13.25px]"
                    alt=""
                    src="/star28.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[20.91px] left-[21.63px] w-[69.23px] flex flex-row items-start justify-start text-[10.82px] text-white font-open-sans">
              <div className="rounded-[5.77px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.6058430671691895px] px-[8.654024124145508px] pb-[4.327012062072754px]">
                <div className="relative font-semibold">Functional</div>
              </div>
            </div>
          </div>
          <div className="relative w-[241.66px] h-[348.32px]">
            <div className="absolute top-[0px] left-[0px] rounded-[21.64px] bg-whitesmoke-100 w-[241.66px] h-[348.32px]" />
            <img
              className="absolute top-[313.35px] left-[21.64px] w-[198.31px] h-[0.72px]"
              alt=""
              src="/line47.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[241.59px] h-[348.32px] object-cover"
              alt=""
              src="/image29@2x.png"
            />
            <div className="absolute top-[287.75px] left-[21.64px] w-[201.2px] flex flex-col items-start justify-start gap-[9.38px]">
              <div className="relative font-semibold">Elation</div>
              <div className="w-[201.2px] flex flex-col items-start justify-start gap-[4.33px] text-[12.98px] font-open-sans">
                <img
                  className="relative w-[198.31px] h-[0.72px]"
                  alt=""
                  src="/line48.svg"
                />
                <div className="w-[201.2px] flex flex-row items-center justify-start gap-[58.41px]">
                  <div className="relative w-[76.15px] h-[18px]">
                    <b className="absolute top-[0px] left-[46.15px]">$500</b>
                    <div className="absolute top-[2.16px] left-[8.65px] text-[10.82px] font-semibold text-silver">
                      480
                    </div>
                    <div className="absolute top-[9.38px] left-[0px] bg-silver w-[36.06px] h-[0.72px]" />
                  </div>
                  <img
                    className="relative w-[60.58px] h-[13.25px]"
                    alt=""
                    src="/star29.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[20.91px] left-[21.64px] w-[69.23px] flex flex-row items-start justify-start text-[10.82px] text-white font-open-sans">
              <div className="rounded-[5.77px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.6058430671691895px] px-[8.654024124145508px] pb-[4.327012062072754px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative font-semibold">Functional</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[241.66px] h-[348.32px]">
            <div className="absolute top-[0px] left-[0px] rounded-[21.64px] bg-whitesmoke-100 w-[241.66px] h-[348.32px]" />
            <img
              className="absolute top-[313.35px] left-[21.63px] w-[198.31px] h-[0.72px]"
              alt=""
              src="/line49.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[241.59px] h-[348.32px] object-cover"
              alt=""
              src="/image30@2x.png"
            />
            <div className="absolute top-[287.75px] left-[21.63px] w-[201.2px] flex flex-col items-start justify-start gap-[9.38px]">
              <div className="relative font-semibold">VitaChoc</div>
              <div className="w-[201.2px] flex flex-col items-start justify-start gap-[4.33px] text-[12.98px] font-open-sans">
                <img
                  className="relative w-[198.31px] h-[0.72px]"
                  alt=""
                  src="/line50.svg"
                />
                <div className="w-[201.2px] flex flex-row items-center justify-start gap-[58.41px]">
                  <div className="relative w-[82.11px] h-[18px]">
                    <b className="absolute top-[0px] left-[41.11px]">$17.00</b>
                    <div className="absolute top-[2.16px] left-[0.72px] text-[10.82px] font-semibold text-silver">
                      $20.00
                    </div>
                    <div className="absolute top-[9.38px] left-[0px] bg-silver w-[36.06px] h-[0.72px]" />
                  </div>
                  <img
                    className="relative w-[60.58px] h-[13.25px]"
                    alt=""
                    src="/star30.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[20.91px] left-[21.63px] w-[69.23px] flex flex-row items-start justify-start text-[10.82px] text-white font-open-sans">
              <div className="rounded-[5.77px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.6058430671691895px] px-[8.654024124145508px] pb-[4.327012062072754px]">
                <div className="relative font-semibold">Functional</div>
              </div>
            </div>
          </div>
          <div className="relative w-[241.66px] h-[348.32px] text-sm-7">
            <div className="absolute top-[0px] left-[0px] rounded-[21.64px] bg-whitesmoke-100 w-[241.66px] h-[348.32px]" />
            <img
              className="absolute top-[313.35px] left-[21.64px] w-[198.31px] h-[0.72px]"
              alt=""
              src="/line51.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[241.59px] h-[348.32px] object-cover"
              alt=""
              src="/image31@2x.png"
            />
            <div className="absolute top-[287.75px] left-[21.64px] w-[201.2px] flex flex-col items-start justify-start gap-[9.38px]">
              <div className="relative font-semibold">BrahmiBliss</div>
              <div className="w-[201.2px] flex flex-col items-start justify-start gap-[4.33px] text-[12.98px] font-open-sans">
                <img
                  className="relative w-[198.31px] h-[0.72px]"
                  alt=""
                  src="/line52.svg"
                />
                <div className="w-[201.2px] flex flex-row items-center justify-start gap-[58.41px]">
                  <div className="relative w-[82.11px] h-[18px]">
                    <b className="absolute top-[0px] left-[41.11px]">$17.00</b>
                    <div className="absolute top-[2.16px] left-[0.72px] text-[10.82px] font-semibold text-silver">
                      $20.00
                    </div>
                    <div className="absolute top-[9.38px] left-[0px] bg-silver w-[36.06px] h-[0.72px]" />
                  </div>
                  <img
                    className="relative w-[60.58px] h-[13.25px]"
                    alt=""
                    src="/star31.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[20.91px] left-[21.64px] w-[69.23px] flex flex-row items-start justify-start text-[10.82px] text-white font-open-sans">
              <div className="rounded-[5.77px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.6058430671691895px] px-[8.654024124145508px] pb-[4.327012062072754px]">
                <div className="relative font-semibold">Vegetable</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[145.68px] left-[199.76px] w-[418.28px] flex flex-col items-start justify-start text-[36.06px]">
          <b className="relative inline-block w-[418.28px]">
            Mindful Chocolates
          </b>
        </div>
      </div>
      <div className="absolute top-[6896.16px] left-[19px] w-[1399px] h-[659.38px] overflow-hidden text-[18.07px]">
        <div className="absolute top-[-0.3px] left-[-0.47px] rounded-[36.14px] bg-sandybrown w-[1402.36px] h-[659.98px]" />
        <img
          className="absolute top-[69.1px] left-[0px] w-[602.15px] h-[602.15px] object-cover opacity-[0.2]"
          alt=""
          src="/image-53@2x.png"
        />
        <img
          className="absolute top-[0px] left-[740.64px] w-[658.36px] h-[638.54px] object-cover opacity-[0.2]"
          alt=""
          src="/image-83@2x.png"
        />
        <div className="absolute top-[151.5px] left-[501.92px] flex flex-row items-center justify-start">
          <div className="rounded-[3.61px] bg-peru-100 w-[174.21px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[10.84302043914795px] px-[36.143402099609375px] box-border gap-[14.46px]">
            <b className="relative">%</b>
            <div className="relative">Offer</div>
          </div>
        </div>
        <b className="absolute top-[113.19px] left-[191.81px] text-[36.14px] inline-block w-[419.26px]">
          Whole meals and Replacements
        </b>
        <div className="absolute top-[226.68px] left-[191.81px] w-[1012.28px] flex flex-row items-start justify-start gap-[14.46px] text-center text-[14.46px] text-darkslategray-100 font-roboto">
          <div className="relative w-[242.23px] h-[349.15px]">
            <div className="absolute top-[0px] left-[0px] rounded-[21.69px] bg-whitesmoke-100 w-[242.23px] h-[349.15px]" />
            <img
              className="absolute top-[314.09px] left-[21.69px] w-[198.78px] h-[0.72px]"
              alt=""
              src="/line53.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[242.16px] h-[349.15px] object-cover"
              alt=""
              src="/image14@2x.png"
            />
            <div className="absolute top-[288.42px] left-[21.69px] w-[201.68px] flex flex-col items-start justify-start gap-[9.4px]">
              <div className="relative font-semibold">{`sprotone `}</div>
              <div className="w-[201.68px] flex flex-col items-start justify-start gap-[4.34px] text-[13.01px] font-open-sans">
                <img
                  className="relative w-[198.78px] h-[0.72px]"
                  alt=""
                  src="/line54.svg"
                />
                <div className="w-[201.68px] flex flex-row items-center justify-start gap-[58.55px]">
                  <div className="relative w-[81.65px] h-[18px]">
                    <b className="absolute top-[0px] left-[42.65px]">450 rs</b>
                    <div className="absolute top-[2.17px] left-[2.17px] text-[10.84px] font-semibold text-silver">
                      500 rs
                    </div>
                    <div className="absolute top-[9.4px] left-[0px] bg-silver w-[36.14px] h-[0.72px]" />
                  </div>
                  <img
                    className="relative w-[60.72px] h-[13.28px]"
                    alt=""
                    src="/star32.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[20.96px] left-[21.69px] w-[69.4px] flex flex-row items-start justify-start text-[10.84px] text-white font-open-sans">
              <div className="rounded-[5.78px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.614340305328369px] px-[8.674416542053223px] pb-[4.337208271026611px]">
                <div className="relative font-semibold">Functional</div>
              </div>
            </div>
          </div>
          <div className="relative w-[242.23px] h-[349.15px]">
            <div className="absolute top-[0px] left-[0px] rounded-[21.69px] bg-whitesmoke-100 w-[242.23px] h-[349.15px]" />
            <img
              className="absolute top-[314.09px] left-[21.69px] w-[198.78px] h-[0.72px]"
              alt=""
              src="/line55.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[242.16px] h-[349.15px] object-cover"
              alt=""
              src="/image32@2x.png"
            />
            <div className="absolute top-[288.42px] left-[21.69px] w-[201.68px] flex flex-col items-start justify-start gap-[9.4px]">
              <div className="relative font-semibold">Protino Naturo</div>
              <div className="w-[201.68px] flex flex-col items-start justify-start gap-[4.34px] text-[13.01px] font-open-sans">
                <img
                  className="relative w-[198.78px] h-[0.72px]"
                  alt=""
                  src="/line56.svg"
                />
                <div className="w-[201.68px] flex flex-row items-center justify-start gap-[58.55px]">
                  <div className="relative w-[76.26px] h-[18px]">
                    <b className="absolute top-[0px] left-[46.26px]">$500</b>
                    <div className="absolute top-[2.17px] left-[8.67px] text-[10.84px] font-semibold text-silver">
                      480
                    </div>
                    <div className="absolute top-[9.4px] left-[0px] bg-silver w-[36.14px] h-[0.72px]" />
                  </div>
                  <img
                    className="relative w-[60.72px] h-[13.28px]"
                    alt=""
                    src="/star33.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[20.96px] left-[21.69px] w-[69.4px] flex flex-row items-start justify-start text-[10.84px] text-white font-open-sans">
              <div className="rounded-[5.78px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.614340305328369px] px-[8.674416542053223px] pb-[4.337208271026611px]">
                <div className="flex flex-row items-center justify-center">
                  <div className="relative font-semibold">Functional</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[242.23px] h-[349.15px]">
            <div className="absolute top-[0px] left-[0px] rounded-[21.69px] bg-whitesmoke-100 w-[242.23px] h-[349.15px]" />
            <img
              className="absolute top-[314.09px] left-[21.69px] w-[198.78px] h-[0.72px]"
              alt=""
              src="/line57.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[242.16px] h-[349.15px] object-cover"
              alt=""
              src="/image16@2x.png"
            />
            <div className="absolute top-[288.42px] left-[21.69px] w-[201.68px] flex flex-col items-start justify-start gap-[9.4px]">
              <div className="relative font-semibold">Banagrit</div>
              <div className="w-[201.68px] flex flex-col items-start justify-start gap-[4.34px] text-[13.01px] font-open-sans">
                <img
                  className="relative w-[198.78px] h-[0.72px]"
                  alt=""
                  src="/line58.svg"
                />
                <div className="w-[201.68px] flex flex-row items-center justify-start gap-[58.55px]">
                  <div className="relative w-[82.2px] h-[18px]">
                    <b className="absolute top-[0px] left-[41.2px]">$17.00</b>
                    <div className="absolute top-[2.17px] left-[0.72px] text-[10.84px] font-semibold text-silver">
                      $20.00
                    </div>
                    <div className="absolute top-[9.4px] left-[0px] bg-silver w-[36.14px] h-[0.72px]" />
                  </div>
                  <img
                    className="relative w-[60.72px] h-[13.28px]"
                    alt=""
                    src="/star34.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[20.96px] left-[21.69px] w-[69.4px] flex flex-row items-start justify-start text-[10.84px] text-white font-open-sans">
              <div className="rounded-[5.78px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.614340305328369px] px-[8.674416542053223px] pb-[4.337208271026611px]">
                <div className="relative font-semibold">Functional</div>
              </div>
            </div>
          </div>
          <div className="relative w-[242.23px] h-[349.15px] text-[13.73px]">
            <div className="absolute top-[0px] left-[0px] rounded-[21.69px] bg-whitesmoke-100 w-[242.23px] h-[349.15px]" />
            <img
              className="absolute top-[314.09px] left-[21.69px] w-[198.78px] h-[0.72px]"
              alt=""
              src="/line59.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[242.16px] h-[349.15px] object-cover"
              alt=""
              src="/image33@2x.png"
            />
            <div className="absolute top-[288.42px] left-[21.69px] w-[201.68px] flex flex-col items-start justify-start gap-[9.4px]">
              <div className="relative font-semibold">Banagram</div>
              <div className="w-[201.68px] flex flex-col items-start justify-start gap-[4.34px] text-[13.01px] font-open-sans">
                <img
                  className="relative w-[198.78px] h-[0.72px]"
                  alt=""
                  src="/line60.svg"
                />
                <div className="w-[201.68px] flex flex-row items-center justify-start gap-[58.55px]">
                  <div className="relative w-[82.2px] h-[18px]">
                    <b className="absolute top-[0px] left-[41.2px]">$17.00</b>
                    <div className="absolute top-[2.17px] left-[0.72px] text-[10.84px] font-semibold text-silver">
                      $20.00
                    </div>
                    <div className="absolute top-[9.4px] left-[0px] bg-silver w-[36.14px] h-[0.72px]" />
                  </div>
                  <img
                    className="relative w-[60.72px] h-[13.28px]"
                    alt=""
                    src="/star35.svg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[20.96px] left-[21.69px] w-[69.4px] flex flex-row items-start justify-start text-[10.84px] text-white font-open-sans">
              <div className="rounded-[5.78px] bg-darkslategray-100 flex flex-row items-center justify-center pt-[3.614340305328369px] px-[8.674416542053223px] pb-[4.337208271026611px]">
                <div className="relative font-semibold">Vegetable</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[133.79px] left-[952.63px] rounded-[28.91px] [background:linear-gradient(rgba(255,_255,_255,_0.8),_rgba(255,_255,_255,_0.8)),_#ffa858] box-border w-[250.84px] overflow-hidden flex flex-row items-center justify-center py-[14.457361221313477px] px-[7.228680610656738px] gap-[7.23px] text-steelblue-300 border-[3.6px] border-solid border-steelblue-300">
          <b className="relative">View All Products</b>
          <img
            className="relative w-[26.02px] h-[26.02px] overflow-hidden shrink-0"
            alt=""
            src="/solararrowuplineduotone8.svg"
          />
        </div>
      </div>
      <div className="absolute top-[9537px] left-[calc(50%_-_720px)] bg-white w-[1440px] h-[1024px] overflow-hidden text-10xl text-black font-josefin-sans">
        <img
          className="absolute top-[97px] left-[664px] w-[776px] h-[927px] object-cover opacity-[0.2] mix-blend-normal"
          alt=""
          src="/image-42@2x.png"
        />
        <div className="absolute top-[32px] left-[66px] text-[36.14px] font-inter">
          Didn’t see the product you need ?
        </div>
        <div className="absolute top-[118px] left-[65px] text-21xl font-semibold">
          Find a Retailer
        </div>
        <div className="absolute top-[126px] left-[1260px] w-[133px] h-[162px]">
          <div className="absolute top-[0px] left-[0px] text-11xl text-gray-100">
            Social
          </div>
          <div className="absolute top-[75px] left-[0px]">Instagram</div>
          <div className="absolute top-[133px] left-[0px]">Tik Tok</div>
        </div>
        <div className="absolute top-[126px] left-[1032px] w-[153px] h-[216px]">
          <div className="absolute top-[0px] left-[0px] text-11xl text-gray-100">
            Brands
          </div>
          <div className="absolute top-[82px] left-[0px]">Propel</div>
          <div className="absolute top-[133px] left-[0px]">Muscle milk</div>
          <div className="absolute top-[187px] left-[0px]">Evolve</div>
        </div>
        <div className="absolute top-[125px] left-[723px] w-[234px] h-[169px]">
          <div className="absolute top-[0px] left-[0px] text-11xl text-gray-100">
            Community
          </div>
          <div className="absolute top-[82px] left-[0px]">Fuel Tommorrow</div>
          <div className="absolute top-[140px] left-[0px]">
            Impact Report ‘23
          </div>
        </div>
        <div className="absolute top-[125px] left-[426px] w-[242px] h-[376px]">
          <div className="absolute top-[0px] left-[0px] text-11xl text-gray-100">
            Support
          </div>
          <div className="absolute top-[82px] left-[0px]">FAQs</div>
          <div className="absolute top-[140px] left-[1px]">
            Track your order
          </div>
          <div className="absolute top-[194px] left-[1px]">
            Get email updates
          </div>
          <div className="absolute top-[244px] left-[1px]">Contact us</div>
          <div className="absolute top-[295px] left-[1px]">About Us</div>
          <div className="absolute top-[347px] left-[1px]">Warranty Policy</div>
        </div>
        <div className="absolute top-[557px] left-[calc(50%_-_646px)] w-[1293px] h-[432px]">
          <img
            className="absolute top-[15px] right-[0px] w-[753px] h-[401px]"
            alt=""
            src="/mozalife1.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[432px] h-[432px] object-cover"
            alt=""
            src="/pic2removebgpreview-11@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[8818px] left-[calc(50%_-_720px)] [background:linear-gradient(0deg,_#6cb5da_30.67%,_rgba(108,_181,_218,_0)_64.31%)] w-[1440px] h-[706px]" />
      <div className="absolute top-[8226px] left-[17px] w-[1400px] flex flex-row items-start justify-start gap-[46px] text-lg text-darkslategray-100 font-roboto">
        <div className="relative w-[677px] h-[592px]">
          <img
            className="absolute top-[0px] left-[0px] w-[677px] h-[524px] object-cover"
            alt=""
            src="/image18@2x.png"
          />
          <div className="absolute top-[262px] left-[32px] rounded-tl-12xl rounded-tr-15xl rounded-b-11xl bg-white shadow-[0px_20px_35px_rgba(167,_167,_167,_0.25)] flex flex-col items-center justify-start pt-[46px] px-[57px] pb-[60px]">
            <div className="w-[499px] flex flex-col items-start justify-start gap-[15px]">
              <div className="relative w-[137px] h-[21px]">
                <div className="absolute top-[0px] left-[26px]">
                  By Rachi Card
                </div>
                <img
                  className="absolute h-[95.24%] w-[13.14%] top-[0%] right-[86.86%] bottom-[4.76%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="w-[465px] flex flex-col items-start justify-start gap-[2px] text-6xl">
                <div className="relative font-extrabold">{`The Benefits of Vitamin D & How to Get It`}</div>
                <div className="relative text-lg leading-[165.4%] font-open-sans text-dimgray inline-block w-[444px] h-[62px] shrink-0">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
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
        <div className="relative w-[677px] h-[592px]">
          <img
            className="absolute top-[0px] left-[0px] w-[677px] h-[524px] object-cover"
            alt=""
            src="/image34@2x.png"
          />
          <div className="absolute top-[262px] left-[32px] rounded-tl-12xl rounded-tr-15xl rounded-b-11xl bg-white shadow-[0px_20px_35px_rgba(167,_167,_167,_0.25)] flex flex-col items-center justify-start pt-[46px] px-[57px] pb-[60px]">
            <div className="w-[499px] flex flex-col items-start justify-start gap-[15px]">
              <div className="relative w-[137px] h-[21px]">
                <div className="absolute top-[0px] left-[26px]">
                  By Rachi Card
                </div>
                <img
                  className="absolute h-[95.24%] w-[13.14%] top-[0%] right-[86.86%] bottom-[4.76%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
              <div className="w-[465px] flex flex-col items-start justify-start gap-[2px] text-6xl">
                <div className="relative font-extrabold">
                  Our Favourite Summertime Tommeto
                </div>
                <div className="relative text-lg leading-[165.4%] font-open-sans text-dimgray inline-block w-[444px] h-[62px] shrink-0">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
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
      </div>
      <div className="absolute top-[7690px] left-[22px] w-[1397px] h-[127px] text-17xl text-steelblue-100 font-josefin-sans">
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
                src="/aerrow1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[7960px] left-[calc(50%_-_703px)] w-[1250px] h-[151px] font-roboto">
        <div className="absolute top-[6.04px] left-[31px] w-[1343px] h-[159.96px]">
          <img
            className="absolute top-[0px] left-[0px] w-[1343px] h-[159.96px] object-cover"
            alt=""
            src="/background@2x.png"
          />
          <div className="absolute top-[48.9px] left-[40px] w-[1258px] h-[59.12px] flex flex-row items-center justify-start gap-[326px]">
            <div className="relative w-[357px] h-[113px]">
              <div className="absolute top-[0px] left-[0px] font-extrabold inline-block w-[357px] h-[113px]">
                <p className="m-0">Subscribe to</p>
                <p className="m-0">our Newsletter</p>
              </div>
            </div>
            <div className="w-[575px] flex flex-row items-center justify-end gap-[6px] text-lg text-darkgray">
              <div className="relative w-[349px] h-20">
                <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[349px] h-20" />
                <i className="absolute top-[28px] left-[23px]">
                  Your Email Address
                </i>
              </div>
              <div className="rounded-2xl bg-darkslategray-100 w-[220px] flex flex-col items-center justify-center pt-7 px-[47px] pb-[29px] box-border text-xl text-white">
                <div className="flex flex-row items-center justify-center">
                  <b className="relative">Subscribe</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[8929px] left-[308px] w-[791px] h-[570px] overflow-hidden text-center text-darkslategray-100 font-roboto">
        <div className="absolute top-[23px] left-[0px] flex flex-row items-center justify-center gap-[11px]">
          <div className="w-[780px] h-[523.75px] flex flex-col items-center justify-center gap-[60px] font-josefin-sans">
            <div className="relative w-[684px] h-[107px]">
              <b className="absolute top-[57px] left-[0px]">
                What Our Customer Saying?
              </b>
              <div className="absolute top-[0px] left-[272px] text-17xl text-steelblue-300 text-left">
                Testimonial
              </div>
            </div>
            <div className="w-[780px] flex flex-col items-center justify-start gap-[20px] text-lg text-dimgray font-open-sans">
              <img
                className="relative w-[115px] h-[115px] object-cover"
                alt=""
                src="/image20@2x.png"
              />
              <div className="w-[780px] flex flex-col items-center justify-start gap-[25px]">
                <img
                  className="relative w-[122.28px] h-[26.75px]"
                  alt=""
                  src="/star36.svg"
                />
                <div className="relative leading-[165.4%] inline-block w-[780px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </div>
              </div>
              <div className="w-[126px] flex flex-col items-center justify-start gap-[19px] text-left text-6xl text-darkslategray-100 font-roboto">
                <div className="w-[126px] flex flex-col items-center justify-start">
                  <div className="relative font-semibold">Sara Taylor</div>
                  <div className="relative text-mini leading-[165.4%] font-open-sans text-dimgray">
                    Consumer
                  </div>
                </div>
                <img
                  className="relative w-[35px] h-2"
                  alt=""
                  src="/navigation1.svg"
                />
              </div>
            </div>
          </div>
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
                  src="/star37.svg"
                />
                <div className="relative leading-[165.4%] inline-block w-[780px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
                </div>
              </div>
              <div className="w-[126px] flex flex-col items-center justify-start gap-[19px] text-left text-6xl text-darkslategray-100 font-roboto">
                <div className="w-[126px] flex flex-col items-center justify-start">
                  <div className="relative font-semibold">Shanaya Taylor</div>
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
                  src="/star37.svg"
                />
                <div className="relative leading-[165.4%] inline-block w-[780px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been.
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
      </div>
      <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-whitesmoke-200 w-[1440px] h-[115px] overflow-hidden flex flex-row items-center justify-center py-[26px] px-16 box-border gap-[550px] text-11xl text-darkolivegreen">
        <div className="flex flex-row items-center justify-center gap-[20px]">
          <img
            className="relative w-[62px] h-[62px] object-cover"
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
        <div className="w-[485px] h-12 flex flex-row items-center justify-start gap-[70px] text-6xl text-steelblue-300">
          <div className="relative font-light">ABOUT</div>
          <div className="relative font-light">HOME</div>
          <div className="rounded-8xs bg-steelblue-300 overflow-hidden flex flex-row items-start justify-start py-[15px] px-2.5 text-white">
            <div className="relative font-light">CONTACT US</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1767px] left-[0px] w-[1440px] h-[1024px] overflow-hidden text-center font-josefin-sans">
        <div className="absolute top-[0px] left-[0px] w-[8613px] flex flex-row items-center justify-start">
          <div className="relative bg-white w-[1440px] h-[1024px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-skyblue w-[1440px] h-[1024px]" />
            <b className="absolute top-[56px] left-[calc(50%_-_455px)] inline-block font-josefin-sans-thin w-[911px]">
              Constraints of Everyday Dietary, Nutritional and Remedial Foods
            </b>
            <b className="absolute top-[276px] left-[calc(50%_-_684px)] text-130xl inline-block w-[1368px] h-[131px]">
              COMPLEXITY
            </b>
            <b className="absolute top-[924px] left-[-15px] inline-block w-[1431px] h-[360px]">
              May not address all facets of health
            </b>
            <div className="absolute top-[584px] left-[727px] w-[100px] h-[100px] overflow-hidden" />
            <img
              className="absolute top-[321px] left-[calc(50%_-_398px)] w-[797px] h-[590px] object-cover"
              alt=""
              src="/complexity-1@2x.png"
            />
          </div>
          <div className="relative bg-white w-[1440px] h-[1024px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-skyblue w-[1440px] h-[1024px]" />
            <b className="absolute top-[56px] left-[calc(50%_-_455px)] inline-block font-josefin-sans-thin w-[911px]">
              Constraints of Everyday Dietary, Nutritional and Remedial Foods
            </b>
            <b className="absolute top-[272px] left-[calc(50%_-_782px)] text-112xl inline-block w-[1565px] h-[121px]">{`TIME & PATIENCE`}</b>
            <b className="absolute top-[870px] left-[819px] inline-block w-[502px] h-[360px]">
              <p className="m-0">Requires consistency</p>
              <p className="m-0">and time</p>
            </b>
            <img
              className="absolute top-[204px] left-[0px] w-[1294px] h-[958px] object-cover"
              alt=""
              src="/time-1@2x.png"
            />
          </div>
          <div className="relative bg-white w-[1440px] h-[1024px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-skyblue w-[1440px] h-[1024px]" />
            <b className="absolute top-[56px] left-[calc(50%_-_455px)] inline-block font-josefin-sans-thin w-[911px]">
              Constraints of Everyday Dietary, Nutritional and Remedial Foods
            </b>
            <b className="absolute top-[234px] left-[calc(50%_-_782px)] text-112xl inline-block w-[1565px] h-[121px]">
              POTENTIAL OBSESSION
            </b>
            <b className="absolute top-[844px] left-[109px] inline-block w-[502px] h-[360px]">
              Risk pf unhealthy dietary obsession
            </b>
            <img
              className="absolute top-[278px] left-[611px] w-[1171px] h-[867px] object-cover"
              alt=""
              src="/potential-obsession-1@2x.png"
            />
          </div>
          <div className="relative bg-white w-[1440px] h-[1024px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-skyblue w-[1440px] h-[1024px]" />
            <b className="absolute top-[56px] left-[calc(50%_-_455px)] inline-block font-josefin-sans-thin w-[911px]">
              Constraints of Everyday Dietary, Nutritional and Remedial Foods
            </b>
            <b className="absolute top-[266px] left-[calc(50%_-_782px)] text-112xl inline-block w-[1565px] h-[121px]">
              <p className="m-0">INDIVIDUAL</p>
              <p className="m-0">VARIABILITY</p>
            </b>
            <b className="absolute top-[844px] left-[calc(50%_-_512px)] inline-block w-[1025px] h-[360px]">
              Effectiveness Varies
            </b>
            <img
              className="absolute top-[17px] left-[calc(50%_-_693px)] w-[1386px] h-[1026px] object-cover"
              alt=""
              src="/individual-variability-1@2x.png"
            />
          </div>
          <div className="relative bg-white w-[1440px] h-[1024px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-skyblue w-[1440px] h-[1024px]" />
            <b className="absolute top-[56px] left-[calc(50%_-_455px)] inline-block font-josefin-sans-thin w-[911px]">
              Constraints of Everyday Dietary, Nutritional and Remedial Foods
            </b>
            <b className="absolute top-[918px] left-[calc(50%_-_512px)] inline-block w-[1025px] h-[360px]">
              Strict diets can lead to deficiencies.
            </b>
            <div className="absolute top-[17px] left-[calc(50%_-_693px)] w-[1386px] h-[1026px]" />
            <b className="absolute top-[253px] left-[calc(50%_-_782px)] text-112xl inline-block w-[1565px] h-[322px]">
              <p className="m-0">INADEQUATE</p>
              <p className="m-0">NUTRIENT INTAKE</p>
            </b>
            <img
              className="absolute top-[327px] left-[calc(50%_-_395px)] w-[791px] h-[585px] object-cover"
              alt=""
              src="/inadequate-nutrition-1@2x.png"
            />
          </div>
          <div className="relative bg-white w-[1440px] h-[1024px] overflow-hidden shrink-0">
            <div className="absolute top-[0px] left-[0px] bg-skyblue w-[1440px] h-[1024px]" />
            <b className="absolute top-[56px] left-[calc(50%_-_455px)] inline-block font-josefin-sans-thin w-[911px]">
              Constraints of Everyday Dietary, Nutritional and Remedial Foods
            </b>
            <b className="absolute top-[918px] left-[calc(50%_-_512px)] inline-block w-[1025px] h-[360px]">
              Limited access to healthy food
            </b>
            <div className="absolute top-[17px] left-[calc(50%_-_693px)] w-[1386px] h-[1026px]" />
            <b className="absolute top-[252px] left-[calc(50%_-_782px)] text-112xl inline-block w-[1565px] h-[348px]">
              ACCESSIBILITY
            </b>
            <img
              className="absolute top-[279px] left-[calc(50%_-_431px)] w-[863px] h-[639px] object-cover"
              alt=""
              src="/accessebilityt-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[3971px] left-[0px] w-[1440px] h-[608px] overflow-hidden">
        <div className="absolute top-[58px] left-[calc(50%_-_720px)] flex flex-row items-center justify-start py-0 px-[75px] gap-[150px]">
          <img
            className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
            alt=""
            src="/whatsapp-image-20231012-at-742@2x.png"
          />
          <img
            className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
            alt=""
            src="/whatsapp-image-20231012-at-7421@2x.png"
          />
          <img
            className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
            alt=""
            src="/whatsapp-image-20231012-at-7422@2x.png"
          />
          <img
            className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
            alt=""
            src="/whatsapp-image-20231012-at-7423@2x.png"
          />
          <img
            className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
            alt=""
            src="/whatsapp-image-20231012-at-7424@2x.png"
          />
          <img
            className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
            alt=""
            src="/whatsapp-image-20231012-at-7425@2x.png"
          />
          <img
            className="relative rounded-11xl w-[1280px] h-[480px] object-cover opacity-[0.95]"
            alt=""
            src="/whatsapp-image-20231012-at-7426@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop4;
