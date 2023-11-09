import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/kBghFW7/images.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Unwrap Luxury with Our <br />Exclusive Hotel Offer!</h1>
          <p className="mb-5 max-w-md">
          Do not miss this limited-time offer to elevate your getaway into a truly extraordinary escape. Reserve your Suite Dreams experience now and let us redefine your expectations of luxury
          </p>
          <Link to="/rooms">
          <button className="btn btn-error btn-outline">Our Rooms</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
