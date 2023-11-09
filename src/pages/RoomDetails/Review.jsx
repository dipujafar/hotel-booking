import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import moment from 'moment/moment';
const Review = ({review}) => {
    const {user, rating, comment, date} = review || {};
    return (
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{user}</h2>
          <p>{comment}</p>
          <div className="card-actions justify-end">
            <div>
          <Rating style={{ maxWidth: 100 }} value={parseInt(rating)} />
          <p>{moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Review;