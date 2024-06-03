interface ShoeCardProp {
  index: any;
  imgURL: { thumbnail: string; bigShoe: string };
  changeBigShoeImage: (shoe: string) => void;
  bigShoeImg: string;
}
function ShoeCard({
  index,
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}: ShoeCardProp) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      key={index}
      onClick={handleClick}
      className={`${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-none"} flex cursor-pointer
      items-center justify-center rounded-xl border-2 bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40
      `}
    >
      <img
        src={imgURL.thumbnail}
        alt="shoe collection"
        width={127}
        height={103.34}
        className="object-contain"
      />
    </div>
  );
}

export default ShoeCard;
