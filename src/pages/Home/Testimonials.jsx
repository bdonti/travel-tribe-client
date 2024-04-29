import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="mb-12 mt-12">
      <h2 className="text-center font-bold text-4xl my-10">
        See What Others Saying
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* review 1 */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <img
              className="rounded-[80px] w-[80px] h-[80px]"
              src="https://i.ibb.co/bQC8KZk/foto-sushi-6anudmp-ILw4-unsplash.jpg"
              alt="reviews"
            />
          </div>
          <div>
            <p className="w-[300px] mx-auto">
              A solid travel website overall. Booking process was
              straightforward, and we found some great deals on hotels and
              activities. The interface could be a bit more polished, but it
              gets the job done efficiently. The variety of destinations and
              options is impressive. Worth checking out for your next trip!
            </p>
          </div>
          <div className="flex justify-center text-yellow-500 mx-auto">
            <FaStar /> <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-center">
            <img
              className="rounded-[80px] w-[80px] h-[80px]"
              src="https://i.ibb.co/ck9Ckmx/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg"
              alt="reviews"
            />
          </div>
          <div>
            <p className="w-[300px] mx-auto">
              Absolutely fantastic experience with this travel tribe! Booking
              was a breeze, and their recommendations were spot on. From hotel
              accommodations to local attractions, everything exceeded our
              expectations. The user interface is intuitive and user-friendly,
              making the whole process seamless. Highly recommend!
            </p>
          </div>
          <div className="flex justify-center text-yellow-500 mx-auto">
            <FaStar /> <FaStar />
            <FaStar />
            <FaStar /> <FaStar />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center">
            <img
              className="rounded-[80px] w-[80px] h-[80px]"
              src="https://i.ibb.co/D7RfLSY/brooke-cagle-w-KOKid-NT14w-unsplash.jpg"
              alt="reviews"
            />
          </div>
          <div>
            <p className="w-[300px] mx-auto">
              An average experience with this travel website. While it served
              its purpose for booking, the interface felt outdated and
              navigation was somewhat cumbersome. Prices were competitive, but
              we encountered some glitches during the booking process. It's an
              okay option if you're looking for convenience.
            </p>
          </div>
          <div className="flex justify-center text-yellow-500 mx-auto">
            <FaStar /> <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
