import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const Room = ({ room }) => {
    const { _id, image, price_per_night, reviews
    } = room || {}
    return (
        <Link to={`/room/${_id}`}>
            <Helmet>
                <title>Rooms</title>
            </Helmet>
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Room_Image" className="h-96" /></figure>
            <div className='flex justify-between'>
                <p className='text-xl font-medium'>Price Per Night: ${price_per_night}</p>
                <p>Reviews: {reviews.length} </p>
                </div>
            </div>
        </Link>
    );
};
Room.propTypes = {
    room: PropTypes.object.isRequired
};


export default Room;