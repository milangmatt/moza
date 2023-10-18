import { useCallback } from "react";
import Header from "../components/header";
import WholenessForm from "../components/wholeness-form";
import Property1Default11 from "../components/property1-default1";
import FormContainer from "../components/form-container";
import Property1Default2 from "../components/property1-default";
import PureFlavoringContainer from "../components/pure-flavoring-container";
import PureFlaveringsContainer1 from "../components/pure-flaverings-container1";
import MindfulChocolatesContainer1 from "../components/mindful-chocolates-container1";
import FormContainer2 from "../components/form-container2";
import FilterFormContainer1 from "../components/filter-form-container1";
import CardContainer from "../components/card-container";
import NewsCard1 from "../components/news-card1";
import NewsletterForm1 from "../components/newsletter-form1";
import Component31 from "../components/component3";

const Desktop3 = () => {
  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='desktop2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-white w-full h-[10561px] overflow-hidden text-left text-31xl text-steelblue-300 font-josefin-sans-thin">
      <div className="absolute top-[228px] left-[68px] text-131xl leading-[130px]">
        <p className="m-0">
          <b className="font-josefin-sans-thin">MOZA</b>
        </p>
        <p className="m-0 tracking-[0.38em] font-light">LIFE</p>
      </div>
      <div className="absolute top-[507px] left-[89px] font-light text-darkslategray-200 inline-block w-[480px]">
        Choose the best healthier way of life
      </div>
      <div
        className="absolute top-[715.5px] left-[65.5px] rounded-21xl box-border w-[491px] overflow-hidden flex flex-row items-center justify-center py-5 px-2.5 gap-[10px] cursor-pointer text-6xl border-[5px] border-solid border-steelblue-300"
        onClick={onFrameContainerClick}
      >
        <div className="relative">EXPLORE</div>
        <img
          className="relative w-9 h-9 overflow-hidden shrink-0"
          alt=""
          src="/solararrowuplineduotone.svg"
        />
      </div>
      <div className="absolute top-[635px] left-[68px] rounded-8xs bg-steelblue-300 w-[480px] overflow-hidden flex flex-row items-center justify-center py-[15px] px-[50px] box-border gap-[20px] text-6xl text-white">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/akariconsleaf.svg"
        />
        <div className="relative">100% Natural Food</div>
      </div>
      <Header />
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
      <WholenessForm />
      <b className="absolute top-[1904px] left-[276px] inline-block text-darkslategray-100 text-center w-[911px]">
        Constraints of Everyday Dietary, Nutritional and Remedial Foods
      </b>
      <Property1Default11
        untitled11="/untitled1-11@2x.png"
        uvrFd1="/uvr-fd-11@2x.png"
        property1DefaultPosition="absolute"
        property1DefaultTop="1962px"
        property1DefaultLeft="0px"
      />
      <FormContainer />
      <b className="absolute top-[2891.38px] left-[calc(50%_-_217px)] text-[53.18px] text-steelblue-200 text-center">
        <p className="m-0">Nourish with Us</p>
        <p className="m-0"> Flourish Forever!</p>
      </b>
      <div className="absolute top-[2813px] left-[calc(50%_-_106px)] rounded-8xs bg-steelblue-300 w-[212px] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[50px] box-border gap-[20px] text-6xl text-white">
        <img
          className="relative w-9 h-9 overflow-hidden shrink-0"
          alt=""
          src="/mingcutehappyline.svg"
        />
        <div className="relative">Join us</div>
      </div>
      <img
        className="absolute top-[3429px] left-[0px] w-[930.44px] h-[1336.25px] object-cover opacity-[0.2] mix-blend-normal"
        alt=""
        src="/image-4@2x.png"
      />
      <b className="absolute top-[3837.85px] left-[calc(50%_-_460px)] inline-block text-center w-[911px]">
        Discover Simplified Holistic Wellness with MOZA LIFE
      </b>
      <b className="absolute top-[4665px] left-[calc(50%_-_460px)] inline-block text-center w-[911px]">
        <p className="m-0">{`Explore our `}</p>
        <p className="m-0">Holistic health categories</p>
      </b>
      <Property1Default2
        whatsAppImage20231012At74="/whatsapp-image-20231012-at-7427@2x.png"
        whatsAppImage20231012At741="/whatsapp-image-20231012-at-7428@2x.png"
        whatsAppImage20231012At742="/whatsapp-image-20231012-at-7429@2x.png"
        whatsAppImage20231012At743="/whatsapp-image-20231012-at-74210@2x.png"
        whatsAppImage20231012At744="/whatsapp-image-20231012-at-74211@2x.png"
        whatsAppImage20231012At745="/whatsapp-image-20231012-at-74212@2x.png"
        whatsAppImage20231012At746="/whatsapp-image-20231012-at-74213@2x.png"
        property1DefaultPosition="absolute"
        property1DefaultTop="3933.85px"
        property1DefaultLeft="0px"
      />
      <PureFlavoringContainer />
      <PureFlaveringsContainer1 />
      <MindfulChocolatesContainer1 />
      <FormContainer2 />
      <FilterFormContainer1 />
      <div className="absolute top-[7660px] left-[calc(50%_-_1263px)] [background:linear-gradient(0deg,_#6cb5da_30.67%,_rgba(108,_181,_218,_0)_64.31%)] w-[2526px] h-[1864px]" />
      <div className="absolute top-[8226px] left-[17px] w-[1400px] flex flex-row items-start justify-start gap-[46px]">
        <CardContainer
          imageAltText="/image18@2x.png"
          articleTitle={`The Benefits of Vitamin D & How to Get It`}
        />
        <CardContainer
          imageAltText="/image19@2x.png"
          articleTitle="Our Favourite Summertime Tommeto"
        />
      </div>
      <NewsCard1 />
      <NewsletterForm1 />
      <div className="absolute top-[8929px] left-[308px] w-[791px] h-[570px] overflow-hidden">
        <Component31
          image="/image20@2x.png"
          star="/star18.svg"
          navigation1="/navigation1.svg"
          component3Position="absolute"
          component3Top="23px"
          component3Left="0px"
          headingWidth="684px"
          headingHeight="107px"
          whatOurCustomerFontWeight="bold"
          whatOurCustomerFontFamily="'Josefin Sans'"
          testimonialLeft="272px"
          testimonialFontFamily="'Josefin Sans'"
          testimonialColor="#006699"
          testimonialDisplay="inline-block"
        />
      </div>
    </div>
  );
};

export default Desktop3;
