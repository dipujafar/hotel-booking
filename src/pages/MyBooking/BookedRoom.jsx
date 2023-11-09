import moment from "moment";
import PropTypes from "prop-types";

const BookedRoom = ({ room }) => {
  const {
    email,
    price_per_night,
    room_size,
    room_description,
    startDate,
    image,
  } = room || {};

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Room_image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{room_description}</h2>
          <div>
          <p className="text-lg">Price Per Night: {price_per_night}</p>
          <p className="text-lg">Room Size: {room_size} sq ft.</p>
          <p className="text-lg">Date: {moment(startDate).format("dddd, MMMM Do YYYY")}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-error btn-sm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

BookedRoom.propTypes = {
  room: PropTypes.object,
};

export default BookedRoom;
