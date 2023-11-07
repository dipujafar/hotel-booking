import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../Components/Loading";
import Room from "./Room";


const Rooms = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["rooms"],
        queryFn: async ()=>{
           const roomsData = await axios.get('http://localhost:5000/rooms')
            return roomsData;
        }
    });

    if(isLoading){
      return <Loading></Loading>
    }
    console.log(data?.data)
    return (
        <div>
            <div className=" bg-gradient-to-r from-indigo-300">
            <h1 className="text-3xl text-center  text-orange-400 font-medium">Our Available Rooms</h1>
            <p>Click Rooms Photo For Room Details</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    data?.data.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;