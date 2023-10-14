const NewsletterForm1 = () => {
  return (
    <div className="absolute top-[7960px] left-[calc(50%_-_703px)] w-[1250px] h-[151px] text-left text-31xl text-white font-roboto">
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
  );
};

export default NewsletterForm1;
