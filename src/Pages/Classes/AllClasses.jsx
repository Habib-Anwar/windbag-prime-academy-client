
import useClass from '../../hooks/useClass';
import Classes from './Classes';

const AllClasses = () => {
    const [courses] = useClass();
    return (
        <div className='grid grid-cols-3 gap-8'>
            {
                courses.map(item =><Classes
                key={item.id}
                item={item}></Classes>)
            }
        </div>
    );
};

export default AllClasses;