import { star } from "../assets/icons";

interface PopularCardProps {
  imgURL: string;
  name: string;
  price: string;
  rating: number;
}

function PopularCard({ imgURL, name, price, rating }: PopularCardProps) {
  return (
    <div className="flex flex-1 flex-col">
      <img src={imgURL} alt={name} width={282} height={282} />
      <div className="mt-8 flex items-center justify-start gap-2">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-montserrat text-2xl font-semibold text-coral-red">
        {price}
      </p>
    </div>
  );
}

export default PopularCard;
