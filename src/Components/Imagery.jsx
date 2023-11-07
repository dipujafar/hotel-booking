import { Parallax } from 'react-parallax';
import hotelImg from '../assets/Image/hotel.jpg'
import room from '../assets/Image/room.jpg'

const Imagery = () => {
    return (
        <div>
            <Parallax className='h-screen' strength={600} bgImage={hotelImg}>    
            <img src={room} alt="" />
            </Parallax>
            <div className='h-screen'>
            </div>
        </div>
    );
};

export default Imagery;