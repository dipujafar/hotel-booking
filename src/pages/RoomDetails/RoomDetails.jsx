import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { Helmet } from "react-helmet";
import Review from "./Review";

const RoomDetails = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const { data, isLoading } = useQuery({
    queryKey: ["roomData"],
    queryFn: async () => {
      const roomsData = await axios.get(`http://localhost:5000/rooms/${id}`);
      return roomsData;
    },
  });
  const {
    _id,
    image,
    price_per_night,
    room_description,
    room_size,
    availability,
    special_offers,
    reviews,
  } = data?.data || {};
  console.log(reviews);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Helmet>
        <title>Room Details</title>
      </Helmet>
      <div className=" bg-gradient-to-r from-indigo-300">
        <h1 className="text-3xl text-center  text-orange-400 font-medium">
          Room Details
        </h1>
        <p>Click book now for booking this room</p>
      </div>
      <div className="card  card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Rooms_image" className="max-h-96 w-full" />
        </figure>
        <div className="card-body">
          <div className="md:flex justify-between">
            <div>
              <h2 className="card-title">{room_description}</h2>
              <p className="text-lg">Price Per Night: ${price_per_night}</p>
              <p className="text-lg">Room Size: {room_size} sq. ft</p>
            </div>
            <div>
              {availability ? (
                <p className="text-lg">Availability: Available</p>
              ) : (
                ""
              )}
              {special_offers ? (
                <p className="text-lg">Offer: {special_offers}</p>
              ) : (
                ""
              )}
              <p className="text-lg">
                Select Booking Date:{" "}
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="border border-black rounded"
                />
              </p>
            </div>
          </div>
          <div className="card-actions justify-end">
            {availability ? (
              <button className="btn btn-sm btn-outline btn-info">
                Book Now
              </button>
            ) : (
              <button className="btn btn-sm btn-disabled">Book Now</button>
            )}
          </div>
        </div>
      </div>

      {/* Review section */}
      <h1 className="text-3xl pl-5">Reviews</h1>
      {reviews.length ? (
        <div className="grid  md:grid-cols-2 gap-10 mb-5">
          {
          reviews.map((review,inx) =><Review key={inx} review={review}></Review>)
              }
        </div>
      ) : (
        <p className="pl-5 my-5">No Review is Here</p>
      )}
    </div>
  );
};

export default RoomDetails;
