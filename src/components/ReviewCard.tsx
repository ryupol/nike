import { star } from "../assets/icons";

interface ReviewCardProps {
  imgURL: string;
  name: string;
  rating: number;
  text: string;
}

function ReviewCard({ imgURL, name, rating, text }: ReviewCardProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <img
        src={imgURL}
        alt="customer profile"
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="mt-6 font-montserrat text-slate-gray max-w-sm">{text}</p>
      <div className="mt-3 flex items-center gap-2.5">
        <img src={star} alt="rating icon" />
        <span className="info-text">({String(rating)})</span>
      </div>
      <h3 className="mt-1 font-palanquin text-2xl font-bold">{name}</h3>
    </div>
  );
}

export default ReviewCard;
