
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading";
import useAuth from "../../hooks/useAuth";
import BookedRoom from "./BookedRoom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBooking = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const url = `/myBooking?email=${user?.email}`
    const { data, isLoading } = useQuery({
        queryKey: ["myBooking"],
        queryFn: async () => {
          const roomsData = await axiosSecure(url)
          return roomsData;
        },
      });

      if (isLoading) {
        return <Loading></Loading>;
      }
  return (
    <div>
      <Helmet>
        <title>My Booking</title>
      </Helmet>
      <div className=" bg-gradient-to-r from-indigo-300">
        <h1 className="text-3xl text-center  text-orange-400 font-medium">
          Your Booked Details
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {data?.data.length?
            data?.data?.map((room, inx)=><BookedRoom key={inx} room={room}></BookedRoom>): <h1 className="mt-10 text-center text-3xl font-bold">You have no Booked Room </h1>
        }
      </div>
    </div>
  );
};

export default MyBooking;
