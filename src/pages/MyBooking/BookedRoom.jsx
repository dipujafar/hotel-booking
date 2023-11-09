import axios from "axios";
import moment from "moment";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const BookedRoom = ({ room, refetch }) => {
  const {
    _id,
    email,
    price_per_night,
    room_size,
    room_description,
    startDate,
    image,
  } = room || {};

  const handleDelete = ()=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't Cancel this booking?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!"
      }).then((result) => {
        if (result.isConfirmed) {

            axios.delete(`https://hotel-booking-server-bay.vercel.app//myBooking/${_id}`)
            .then(res =>{
                if(res?.data?.deletedCount > 0){
                     Swal.fire({
                            title: "Cancelled!",
                            text: "Your Room booking cancelled.",
                            icon: "success"
                          });
                          refetch()
                }
            })
        
        }
      });
  }

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
            <button onClick={handleDelete} className="btn btn-outline btn-error btn-sm">Cancel</button>
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
