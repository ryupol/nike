import { shoe8 } from "../assets/images";
import { Button } from "../components";

function SuperQuality() {
  return (
    <section id="about-us" className="max-container flex w-full flex-1 items-center justify-between gap-10 max-lg:flex-col lg:flex-row">
      <div className="flex flex-1 flex-col">
        <h3 className="font-palanquin text-4xl font-bold  lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h3>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <img
          src={shoe8}
          alt="quality shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality;
