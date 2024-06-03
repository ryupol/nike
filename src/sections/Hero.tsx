import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="max-container flex w-full flex-col gap-10 xl:flex-row"
    >
      <div className="max-xl:padding-x relative pt-28 xl:mt-24 xl:w-2/5">
        <p className="max-container font-montserrat text-xl text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="mt-6 inline-block text-coral-red">Nike </span>
          {" Shoes"}
        </h1>
        <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="mt-20 flex w-full flex-wrap gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <h1 className="font-palanquin text-4xl font-bold">
                {stat.value}
              </h1>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img src={bigShoeImg} alt="shoe collection" />
        <div className="absolute -bottom-[5%] flex flex-1 gap-6 max-sm:px-6 sm:left-[10%]">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
