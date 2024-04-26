import { curve } from "../assets";
import apex from '../assets/hero/apex.png';
// i want to import an image named apex
// import { apex } from "../assets";
import Button from "./Button";


const Hero = () => {

  return (
    <div
      className="pt-[12rem] -mt-[5.25rem]"
      id="hero"
    >
      <div className="container relative mb-8" >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Elevate your online presence with ApexWeb's {" "}
            <span className="inline-block relative">
             solutions.{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Empower your brand's online presence with ApexWeb's innovative web design and marketing solutions.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={apex}
                  className="w-full lg:h-auto md:mb-7 md:h-full h-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  alt="AI"
                />


              </div>
            </div>

          </div>


        </div>

      </div>

    </div>
  );
};

export default Hero;