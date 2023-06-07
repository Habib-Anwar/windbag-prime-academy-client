
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider1 from '../../../assets/images/slider1.jpg'
import slider2 from '../../../assets/images/slider2.jpg'
const Banner = () => {
    return (
        <div>
            <AwesomeSlider>
                <div data-src={slider1}/>
                <div data-src={slider2} />
                {/* <div data-src="/path/to/image-2.jpg" />
                <div data-src="/path/to/image-3.jpg" /> */}
            </AwesomeSlider>

        </div>
    );
};

export default Banner;