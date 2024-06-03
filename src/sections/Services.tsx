import { ServiceCard } from "../components";
import { services } from "../constants";

function Services() {
  return (
    <div className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <ServiceCard
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
          key={index}
        />
      ))}
    </div>
  );
}

export default Services;
