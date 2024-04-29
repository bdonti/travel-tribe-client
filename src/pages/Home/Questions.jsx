import { ImFlag, ImUsers } from "react-icons/im";
import { FaUmbrellaBeach } from "react-icons/fa";

const Questions = () => {
  return (
    <div className="my-12">
      <h2 className="text-center font-bold text-4xl my-10">
        Asked Question & Stats
      </h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="stats stats-vertical lg:stats-horizontal mt-5 w-full">
          <div className="stat space-y-2">
            <div className="stat-title">Total Countries</div>
            <div className="stat-value">8</div>
            <div className="stat-desc text-4xl mt-2 text-[#2E5F47]">
              <ImFlag />
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Users</div>
            <div className="stat-value">500</div>
            <div className="stat-desc text-4xl mt-2 text-[#2E5F47]">
              <ImUsers />
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Tourist Spots</div>
            <div className="stat-value">5000</div>
            <div className="stat-desc text-4xl mt-2 text-[#2E5F47]">
              <FaUmbrellaBeach />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How can I change or cancel my booking?
            </div>
            <div className="collapse-content">
              <p className="mx-auto">
                You can typically manage your booking by contacting our customer
                service team directly. Policies regarding changes and
                cancellations may vary depending on the type of booking and the
                provider, so it's best to review the terms and conditions
                associated with your reservation.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I find information about visa requirements and travel
              restrictions for my destination?
            </div>
            <div className="collapse-content">
              <p className="mx-auto">
                We recommend checking the official government websites or
                contacting the embassy or consulate of your destination country
                for the most up-to-date information on visa requirements and
                travel restrictions. Additionally, our website may provide
                general guidance and resources regarding travel documentation,
                but it's essential to verify specific requirements based on your
                nationality and travel plans.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I contact customer support for assistance during my trip?
            </div>
            <div className="collapse-content">
              <p>
                You can reach our customer support team through various
                channels, including phone, email, or live chat support available
                on our website. We also provide emergency contact information
                for assistance outside of regular business hours. Our dedicated
                support staff is here to assist you with any questions or
                concerns before, during, and after your trip.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Are there any additional fees or taxes not included in the booking
              price?
            </div>
            <div className="collapse-content">
              <p>
                In some cases, additional fees such as resort fees, local taxes,
                or service charges may apply and are not included in the initial
                booking price. These fees can vary depending on the destination
                and the specific property or service provider. We strive to
                provide transparency regarding any additional charges, which are
                typically outlined during the booking process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
