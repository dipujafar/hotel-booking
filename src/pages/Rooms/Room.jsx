import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Room = ({ room }) => {
    const { _id, image, price_per_night, reviews
    } = room || {}
    return (
        <Link to={_id}>
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Room_Image" className="h-96" /></figure>
            <div ><h1 className="text-end">Reviews: {reviews.length} </h1></div>
        </div>
        </Link>
    );
};
Room.propTypes = {
    room: PropTypes.object.isRequired
};


export default Room;