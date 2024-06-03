interface ServiceCardProps {
  imgURL: string;
  label: string;
  subtext: string;
}

function ServiceCard({ imgURL, label, subtext }: ServiceCardProps) {
  return (
    <div className="flex-1 rounded-[20px] shadow-3xl sm:w-[350px] sm:min-w-[350px] px-10 py-16">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-red">
        <img src={imgURL} alt="service logo" />
      </div>
      <h3 className="mt-4 font-palanquin text-3xl font-bold">{label}</h3>
      <p className="info-text padding-r font-montserrat">{subtext}</p>
    </div>
  );
}

export default ServiceCard;
