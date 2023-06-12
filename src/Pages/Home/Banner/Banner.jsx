
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider1 from '../../../assets/images/slider1.jpg'
import slider2 from '../../../assets/images/slider2.jpg'
import slider3 from '../../../assets/images/slider3.jpg'
import slider4 from '../../../assets/images/slider4.jpg'
import slider5 from '../../../assets/images/slider5.png'
import slider6 from '../../../assets/images/slider6.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Banner = () => {
    return (
        <div>
            <AwesomeSlider className='h-[624px] mt-8'>
                <div data-src={slider1}/>
                <div data-src={slider2} />
                <div data-src={slider3} />
                <div data-src={slider4} />
                <div data-src={slider5} />
                <div data-src={slider6} />
            </AwesomeSlider>
            <SectionTitle subHeading="your favorite classes"
            heading="popular classes">
            </SectionTitle>

        </div>
    );
};

export default Banner;