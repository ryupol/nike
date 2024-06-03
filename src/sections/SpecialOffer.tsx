import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

function SpecialOffer() {
  return (
    <div className="max-container flex items-center justify-between gap-10 max-xl:flex-col-reverse">
      <div className="flex-1 object-contain">
        <img src={offer} alt="special offer image" />
      </div>

      <div className="flex-1">
        <h2 className="font-palanquin text-4xl font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundStyle="bg-white"
            textStyle="text-slate-gray"
            borderStyle="border-slate-gray"
          />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
