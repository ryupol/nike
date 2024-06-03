import { ReviewCard } from "../components";
import { reviews } from "../constants";

function CustomerReviews() {
  return (
    <section className="max-container flex flex-1 flex-col items-center justify-center">
      <h2 className="text-center font-palanquin text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="flex max-lg:flex-col gap-14 mt-24 justify-evenly items-center">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            name={review.customerName}
            rating={review.rating}
            text={review.feedback}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
